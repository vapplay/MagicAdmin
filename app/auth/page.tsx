"use client"


import React, { useState, useEffect } from 'react';
import { BookOpen, Mail, Lock, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers/auth-provider';
import { toast } from 'sonner';


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { login, user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user && !loading) {
            router.push("/dashboard");
        }
    }, [user, loading, router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const success = await login(formData.email, formData.password);
            if (success) {
                setIsSuccess(true);
                toast.success("Inicio de sesión exitoso", {
                    description: "Bienvenido de nuevo.",
                });
                setTimeout(() => {
                    router.push("/dashboard");
                }, 1000);
            } else {
                toast.error("Error al iniciar sesión", {
                    description: "Credenciales incorrectas. Por favor intenta de nuevo.",
                });
            }
        } catch (error) {
            toast.error("Error del sistema", {
                description: "Ocurrió un error inesperado.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white p-4 font-sans text-slate-950">
                <Card className="w-full max-w-md border-none shadow-none animate-in fade-in zoom-in duration-300">
                    <CardContent className="flex flex-col items-center text-center pt-8">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                            <CheckCircle2 className="h-8 w-8" />
                        </div>
                        <h2 className="text-2xl font-semibold tracking-tight">¡Hola de nuevo!</h2>
                        <p className="mt-2 text-muted-foreground">Has iniciado sesión correctamente.</p>
                        <Button className="mt-8 w-full" onClick={() => router.push("/dashboard")}>
                            Ir al Dashboard
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans text-slate-950 selection:bg-slate-100 p-4">
            <div className="w-full max-w-[350px] space-y-6">

                {/* Encabezado / Logo */}
                <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-100 mb-2">
                        <BookOpen className="h-5 w-5 text-slate-900" />
                    </div>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Iniciar sesión
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Ingresa a tu cuenta de Narrativa
                    </p>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="nombre@ejemplo.com"
                                required
                                className="pl-9" // Padding izquierdo para dejar espacio al icono
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">

                        <div className="relative">
                            <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                required
                                className="pl-9" // Padding izquierdo para dejar espacio al icono
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full !mt-6" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Entrando...
                            </>
                        ) : (
                            <>
                                Entrar
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </Button>
                </form>


            </div>
        </div>
    );
}