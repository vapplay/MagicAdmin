'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Rutas públicas que no requieren autenticación
const PUBLIC_ROUTES = ['/signin'];

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Si el usuario NO está autenticado y la ruta actual NO es pública
    if (!isAuthenticated && !PUBLIC_ROUTES.includes(pathname)) {
      // Lo redirigimos a la página de login
      router.push('/signin');
    }

    // Si el usuario SÍ está autenticado y está intentando acceder a una ruta pública (como /signin)
    if (isAuthenticated && PUBLIC_ROUTES.includes(pathname)) {
      // Lo redirigimos a la página principal del dashboard
      router.push('/');
    }
  }, [isAuthenticated, pathname, router]);

  // Pequeño hack para evitar un "flash" de contenido no autenticado mientras se verifica
  // Si la ruta es privada y el usuario no está autenticado, no renderizamos nada hasta la redirección.
  if (!isAuthenticated && !PUBLIC_ROUTES.includes(pathname)) {
    return null; // O un componente de Spinner/Loading
  }

  return <>{children}</>;
}
