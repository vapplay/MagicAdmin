'use client';

import Input from '@/components/form/input/InputField';
import Label from '@/components/form/Label';
import Button from '@/components/ui/button/Button';
import { EyeCloseIcon, EyeIcon } from '@/icons';
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth'; // <-- Importamos nuestro hook
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

export default function SignInForm() {
  // Estados para los campos del formulario
  const [username, setUsername] = useState(''); // Cambiado de email a username
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Obtenemos la función de login y el estado de carga/error del hook
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error('El nombre de usuario y la contraseña son requeridos.');
      return;
    }

    try {
      await login(username, password);
      toast.success('¡Bienvenido!');
      // La redirección se manejará automáticamente por el guardián de rutas
    } catch (err: any) {
      // El hook ya maneja el estado de error, aquí solo mostramos el toast
      toast.error(err.message || 'Error al iniciar sesión.');
    }
  };

  return (
    <div className="flex w-full flex-1 flex-col lg:w-1/2">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="text-title-sm sm:text-title-md mb-2 font-semibold text-gray-800 dark:text-white/90">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your username and password to sign in!
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <Label>
                    Username <span className="text-error-500">*</span>{' '}
                  </Label>
                  <Input
                    placeholder="admin"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{' '}
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isLoading}
                    />
                    <span
                      onClick={() => !isLoading && setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-4 z-30 -translate-y-1/2 cursor-pointer"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                      )}
                    </span>
                  </div>
                </div>

                <div>
                  <Button className="w-full gap-2" size="sm" type="submit" disabled={isLoading}>
                    {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
