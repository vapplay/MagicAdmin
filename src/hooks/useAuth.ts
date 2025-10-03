import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { updater } from '@/ts/fetch'; // Tu función fetcher para POST

// Interfaz para los datos del usuario que guardaremos
interface User {
  id: string;
  username: string;
}

// Interfaz para el estado de nuestro store
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  // 'persist' guarda automáticamente el estado en localStorage
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Función para hacer login
      login: async (username, password) => {
        set({ isLoading: true, error: null });
        try {
          const response = await updater('auth/login', { username, password });

          if (response.status !== 200 || !response.data) {
            throw new Error(response.message || 'Credenciales inválidas');
          }

          const userData: User = response.data;

          // Guardamos los datos del usuario y marcamos como autenticado
          set({ user: userData, isAuthenticated: true, isLoading: false, error: null });
        } catch (error) {
          const errorMessage = 'Ocurrió un error al iniciar sesión.';
          set({ user: null, isAuthenticated: false, isLoading: false, error: errorMessage });
          console.log(error);
          throw new Error(errorMessage);
        }
      },

      // Función para hacer logout
      logout: () => {
        set({ user: null, isAuthenticated: false, error: null });
      },
    }),
    {
      name: 'auth-storage', // Nombre de la clave en localStorage
      storage: createJSONStorage(() => localStorage), // Usar localStorage
    }
  )
);
