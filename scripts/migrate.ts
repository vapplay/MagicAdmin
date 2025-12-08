// scripts/migrate.ts

// 1. Importación directa (evita usar @/lib/prisma en scripts)
import { PrismaClient } from "../types/prisma";

const prisma = new PrismaClient();

const migrate_url = "https://magicapinew-production.up.railway.app/api/history/all";

const getData = async () => {
    try {
        console.log("⬇️ Descargando datos de la API...");
        const response = await fetch(migrate_url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("❌ Error de red:", error);
        return null;
    }
};

export const migrate = async () => {
    try {
        console.log("🔌 Inicializando migración...");
        const data = await getData();

        if (!data || !data.data) {
            console.error("⚠️ La API no devolvió datos válidos.");
            return;
        }

        console.log(`📦 Procesando ${data.data.length} cuentos...`);

        // Opcional: Limpiar tabla antes de insertar para evitar duplicados
        // await prisma.history.deleteMany({});

        const result = await prisma.history.createMany({
            data: data.data.map((item: any) => ({
                id: item.id,
                name_es: item.name_es,
                name_en: item.name_en,
                name_pt: item.name_pt || "",
                active: item.active,
                description_en: item.description_en,
                description_es: item.description_es,
                description_pt: item.description_pt || "",
                youtube: item.youtube,
                poster: item.poster,
                cover: item.cover,

                // --- CORRECCIÓN CRÍTICA ---
                // Tu schema dice "type Int". No puedes enviar "PREMIUM" (string).
                // Enviamos el número original.
                type: item.type,

                isPremium: item.isPremium,
                song: item.song
            }))
        });

        console.log(`✅ ¡ÉXITO! Se migraron ${result.count} historias.`);

    } catch (error) {
        console.error("❌ Error en la base de datos:", error);
    } finally {
        await prisma.$disconnect();
    }
};

