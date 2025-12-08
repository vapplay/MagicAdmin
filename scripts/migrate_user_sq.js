// scripts/migrate_user_sq.js
import fs from 'node:fs';

const migrate_url = "https://magicapinew-production.up.railway.app/api/user/all";

const escapeString = (str) => {
    if (!str) return "NULL";
    // Escapar comillas simples
    return `'${String(str).replace(/'/g, "''")}'`;
};

const boolToInt = (val) => val ? 1 : 0;

const formatDate = (dateStr) => {
    if (!dateStr) return "NULL";
    return `'${dateStr}'`; // SQLite acepta ISO-8601 strings
};

const generateUUID = () => {
    // Simple mock UUID generator for the script
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

const generateSQL = async () => {
    try {
        console.log("⬇️ Descargando datos de USUARIOS...");
        const response = await fetch(migrate_url);
        const json = await response.json();

        if (!json.data) {
            console.error("❌ No data found");
            return;
        }

        let sqlCommands = [];

        sqlCommands.push("BEGIN TRANSACTION;");
        sqlCommands.push("DELETE FROM User;");
        sqlCommands.push("DELETE FROM Subscription;");

        const processedEmails = new Set();
        let skippedCount = 0;

        json.data.forEach(item => {
            // Check for duplicate emails
            if (!item.email || processedEmails.has(item.email)) {
                console.warn(`⚠️ Saltando usuario duplicado o sin email: ${item.email || 'NO_EMAIL'} (ID: ${item.id})`);
                skippedCount++;
                return;
            }
            processedEmails.add(item.email);

            const isPremium = !!item.premium;
            let subscriptionId = "NULL";

            // Si es Premium, creamos una suscripción default para este usuario
            if (isPremium) {
                const newSubId = generateUUID();
                subscriptionId = `'${newSubId}'`;

                // Usamos la fecha actual como inicio si no hay una específica, 
                // pero el usuario pidió "la fecha a hoy", así que CURRENT_TIMESTAMP para create

                const sqlSub = `INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    interval,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '${newSubId}',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );`;
                sqlCommands.push(sqlSub);
            }

            const sqlUser = `INSERT INTO User (
                id,
                name,
                email,
                profileImage,
                isPremium,
                premiumEnd,
                subscriptionId,
                createdAt,
                updatedAt
            ) VALUES (
                ${escapeString(item.id.toString())}, 
                ${escapeString(item.name)},
                ${escapeString(item.email)},
                ${escapeString(item.photo)},
                ${boolToInt(item.premium)},
                ${formatDate(item.premiumEnd)},
                ${subscriptionId},
                ${formatDate(item.createdAt)},
                ${formatDate(item.updatedAt)}
            );`;

            sqlCommands.push(sqlUser);
        });

        sqlCommands.push("COMMIT;");

        // GUARDAR EL ARCHIVO FÍSICAMENTE
        const filename = 'user_seed.sql';
        fs.writeFileSync(filename, sqlCommands.join('\n'), 'utf-8');

        console.log(`✅ Archivo '${filename}' creado con éxito (${json.data.length} usuarios).`);

    } catch (error) {
        console.error("❌ Error:", error);
    }
};

generateSQL();