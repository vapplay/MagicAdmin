// scripts/generate_sql.js
import fs from 'node:fs';
import { Vibrant } from "node-vibrant/node";

const migrate_url = "https://magicapinew-production.up.railway.app/api/history/all";
const IMAGE_URL = 'https://pub-233a13519c3c4e18a1d97e37666c5297.r2.dev/';

const escapeString = (str) => {
    if (!str) return "NULL";
    // Escapar comillas simples
    return `'${str.replace(/'/g, "''")}'`;
};

const boolToInt = (val) => val ? 1 : 0;

const generateSQL = async () => {
    try {
        console.log("⬇️ Descargando datos...");
        const response = await fetch(migrate_url);
        const json = await response.json();

        if (!json.data) {
            console.error("❌ No data found");
            return;
        }

        let sqlCommands = [];

        sqlCommands.push("BEGIN TRANSACTION;");
        sqlCommands.push("DELETE FROM History;"); // Limpiar tabla

        for (const item of json.data) {
            console.log(`🎨 Procesando colores para: ${item.name_es || 'Sin nombre'}`);
            let colors = {};
            try {
                let imageUrl = item.cover || item.poster;
                if (imageUrl && !imageUrl.startsWith('http')) {
                    imageUrl = IMAGE_URL + imageUrl;
                }
                if (imageUrl) {
                    const imgResponse = await fetch(imageUrl);
                    const buffer = Buffer.from(await imgResponse.arrayBuffer());
                    const palette = await Vibrant.from(buffer).getPalette();

                    colors = {
                        dominant: palette.Vibrant?.hex,
                        average: null, // Average calculator is heavy, skipping or could use Vibrant as proxy
                        vibrant: palette.Vibrant?.hex,
                        darkVibrant: palette.DarkVibrant?.hex,
                        lightVibrant: palette.LightVibrant?.hex,
                        darkMuted: palette.DarkMuted?.hex,
                        lightMuted: palette.LightMuted?.hex,
                        muted: palette.Muted?.hex,
                    };
                }
            } catch (err) {
                console.error(`⚠️ Error obteniendo colores para ${item.id}:`, err.message);
            }

            const sql = `INSERT INTO History (
                id, 
                name_es, name_en, name_pt, 
                description_es, description_en, description_pt, 
                cover, poster, youtube, song,
                type, active, isPremium, 
                dominant, average, vibrant, darkVibrant, lightVibrant, darkMuted, lightMuted, muted,
                createdAt, updatedAt
            ) VALUES (
                ${escapeString(item.id)},
                ${escapeString(item.name_es)},
                ${escapeString(item.name_en)},
                ${escapeString(item.name_pt || "")},
                ${escapeString(item.description_es)},
                ${escapeString(item.description_en)},
                ${escapeString(item.description_pt || "")},
                ${escapeString(item.cover)},
                ${escapeString(item.poster)},
                ${escapeString(item.youtube)},
                ${escapeString(item.song)},
                ${item.type || 1}, 
                ${boolToInt(item.active)},
                ${boolToInt(item.isPremium)},
                ${escapeString(colors.dominant)},
                ${escapeString(colors.average)},
                ${escapeString(colors.vibrant)},
                ${escapeString(colors.darkVibrant)},
                ${escapeString(colors.lightVibrant)},
                ${escapeString(colors.darkMuted)},
                ${escapeString(colors.lightMuted)},
                ${escapeString(colors.muted)},
                CURRENT_TIMESTAMP,
                CURRENT_TIMESTAMP
            );`;

            sqlCommands.push(sql);
        }

        sqlCommands.push("COMMIT;");

        // GUARDAR EL ARCHIVO FÍSICAMENTE
        fs.writeFileSync('seed.sql', sqlCommands.join('\n'), 'utf-8');

        console.log(`✅ Archivo 'seed.sql' creado con éxito (${json.data.length} registros).`);

    } catch (error) {
        console.error("❌ Error:", error);
    }
};

generateSQL();