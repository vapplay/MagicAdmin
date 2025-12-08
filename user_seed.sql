START TRANSACTION;
DELETE FROM User;
DELETE FROM Subscription;
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '2cbea4e7-d2d6-4183-8dc3-c8a59a124e05',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '15869', 
                'Magicuentos',
                'magicuentosco@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocI1y77uWtmiFBrRHZxr7Ekff3t8n5Yacc60KdMLIXGeJVtSYQ=s96-c',
                1,
                '2025-07-14T16:54:05.000Z',
                '2cbea4e7-d2d6-4183-8dc3-c8a59a124e05',
                '2025-03-29T20:58:59.000Z',
                '2025-06-14T16:54:05.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'b38284cc-b4b1-4148-8885-bda7bc18450c',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '49512', 
                'Fauno Taller Creativo',
                'fauno.tallercreativo@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJPZd16LeA4S3_mwUK5yeTZEYHt_fJQOt8qHbYnJoK-zaiUWcg=s96-c',
                1,
                '2025-07-14T16:54:20.000Z',
                'b38284cc-b4b1-4148-8885-bda7bc18450c',
                '2025-04-05T18:33:12.000Z',
                '2025-06-14T16:54:20.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '7e7e7fe2-3426-40d3-90b9-14d680c76ceb',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '66284', 
                'Elena Patricia Mesu Grijalbs',
                'elena.mesu2279@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJoR8hwPXngsewcSa6pdKdp0Hx6nI_DiANOO1mMepNeBlPEpw=s96-c',
                1,
                '2025-05-05T21:04:00.000Z',
                '7e7e7fe2-3426-40d3-90b9-14d680c76ceb',
                '2025-04-05T19:44:56.000Z',
                '2025-04-05T21:04:00.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '4091036b-44ed-4a5d-8d42-0291014e8a2d',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '74435', 
                'N CB',
                'nicoral77@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocIqWQ5lI3qzzWvhkAczqb2CrJTqMUnVDXOuwY9gUMgdyfOVJ5a7=s96-c',
                1,
                '2025-05-05T16:08:38.000Z',
                '4091036b-44ed-4a5d-8d42-0291014e8a2d',
                '2025-04-05T15:26:51.000Z',
                '2025-04-05T16:08:38.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'd3f1fa17-e5a4-41d9-b1cf-99d62de86a30',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '78241', 
                'Albaluz',
                'albaluzpinilla40@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocK6X54IgPk4wgTSDRL5yjmGGZAWvYrf3shWhG6hr-YSTnStsw=s96-c',
                1,
                '2025-06-19T03:18:36.000Z',
                'd3f1fa17-e5a4-41d9-b1cf-99d62de86a30',
                '2025-05-19T00:53:46.000Z',
                '2025-05-20T03:18:36.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'f8c5e84e-1432-476a-b12e-1ce99acd3df7',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '107790', 
                'value apps',
                'vapplay.dev@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJsjfbqJII4YzsUF0vAn3yWij7q1Tp_yLJ7qg7Fry3eqdP_xHc=s96-c',
                1,
                '2025-05-05T17:54:29.000Z',
                'f8c5e84e-1432-476a-b12e-1ce99acd3df7',
                '2025-03-29T21:54:18.000Z',
                '2025-04-05T17:54:29.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'd320cc2c-7e32-4820-b304-489c3fc3e1cc',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '112620', 
                'Apper Fishyjoe',
                'apperfishyjoe@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocIIt3SwMD3QvdJVqVMnW6lgr5r1BSN0ae9Fx05lnA3wjz-4=s96-c',
                1,
                '2025-05-05T16:08:40.000Z',
                'd320cc2c-7e32-4820-b304-489c3fc3e1cc',
                '2025-04-04T13:43:05.000Z',
                '2025-04-05T16:08:40.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'f3894578-ad67-491f-a409-f894dad395f5',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '131395', 
                'Diana Gonzalez',
                'dianagonzalezosorio34@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocIDOGLhAhJVtq7OZHOSOR_bCdDn8vmAQM9KKUkWGRg6_kldUw=s96-c',
                1,
                '2025-05-05T17:54:26.000Z',
                'f3894578-ad67-491f-a409-f894dad395f5',
                '2025-03-29T20:51:36.000Z',
                '2025-04-05T17:54:26.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '05b7200a-8d5f-4508-9240-1c16c47ac298',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '131751', 
                'Diana Vanessa Pulido Camacho',
                'pulidocamachodiana1001@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJNO6xCJbMNhdrse8sAolUMYIzdrYqzQAhWW5UEVlgwdyObRSo6=s96-c',
                1,
                '2025-05-05T17:08:42.000Z',
                '05b7200a-8d5f-4508-9240-1c16c47ac298',
                '2025-04-05T16:41:34.000Z',
                '2025-04-05T17:08:42.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '9699331f-1047-4351-a468-5c260205937d',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '134250', 
                'Rubiela Ramirez',
                'rrubiela340@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocLxL4dHT7jHW5lIN2fRDX4GUGMoCcUiyOCepKS2VcxMDHTFQg=s96-c',
                1,
                '2025-08-14T22:09:34.000Z',
                '9699331f-1047-4351-a468-5c260205937d',
                '2025-07-15T20:34:15.000Z',
                '2025-07-15T22:09:34.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'bce8a653-bd8f-4bb4-86a6-6efb75c287cc',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '137329', 
                'Richard gutierrez',
                'ricguts@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocLu8NxsJeHQ7qeb0cM3knurOuIc1Lu8LyulvjWAPivuI_TbQw=s96-c',
                1,
                '2025-05-04T13:35:49.000Z',
                'bce8a653-bd8f-4bb4-86a6-6efb75c287cc',
                '2025-02-16T14:53:58.000Z',
                '2025-04-04T13:35:49.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'b0fb2a5a-6843-41be-a0a8-c4a1d8b23a06',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '138000', 
                'olga benavides',
                'olgaluciamb08@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJYWvGnnaM0J8dQL5K3yqYJqVlgHCBuqQ923VHqxYqS-Y4jk3y8=s96-c',
                1,
                '2025-05-05T21:04:02.000Z',
                'b0fb2a5a-6843-41be-a0a8-c4a1d8b23a06',
                '2025-04-05T19:38:28.000Z',
                '2025-04-05T21:04:02.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '5f1c8c9b-511e-48df-9ab2-e0da29d7b007',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '141474', 
                'Ledis',
                'ledis7045@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJqaTUj3Kko7rynVUaB5Q7vclOlc0dnXsvp-812qdKgIupgLw=s96-c',
                1,
                '2025-08-14T22:09:37.000Z',
                '5f1c8c9b-511e-48df-9ab2-e0da29d7b007',
                '2025-07-15T21:15:51.000Z',
                '2025-07-15T22:09:37.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'ae1bff33-726b-4b5d-9753-cd55ceb2a910',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '161563', 
                'frank cloud',
                'frankcloud7@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJ622Wj9zmsV4eihET1y9H_eMa-3DXWjY8e3r7Dk4YkWHRuEQ=s96-c',
                1,
                '2025-05-09T18:44:14.000Z',
                'ae1bff33-726b-4b5d-9753-cd55ceb2a910',
                '2025-04-08T10:45:36.000Z',
                '2025-04-09T18:44:14.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'e695c4f3-197c-492a-8988-7a89c00e6511',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '172285', 
                'Karen Sofía',
                'sanchezka4@hotmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocKxwxdUpvK2BIq3mBtH2kTw1Tire6C5Dfrwf8LbEH4gPKCA7qPDHQ=s96-c',
                1,
                '2025-04-24T20:07:00.000Z',
                'e695c4f3-197c-492a-8988-7a89c00e6511',
                '2025-03-25T19:46:22.000Z',
                '2025-03-25T20:07:00.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '2eef719d-6869-47af-985d-f08c8434ed2c',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '173966', 
                'prueba app magicos cuentos',
                'magicoscuentospruebaapp@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocITjXrWsIgiXc8MlLfTsp2lqu4-savAKMdkOW0DD1P5cfB00w=s96-c',
                1,
                '2025-05-05T17:54:34.000Z',
                '2eef719d-6869-47af-985d-f08c8434ed2c',
                '2025-04-02T14:23:25.000Z',
                '2025-04-05T17:54:34.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '05913d01-bfda-4449-979f-b18aca7f8c74',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '192272', 
                'Diego Fernando Espitia',
                'diegofernando6002@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocKmrnWMXSWWqEJZFavJcO5VNJlF8z00r7SdyhLrUSyWOtetaQ=s96-c',
                1,
                '2025-05-08T02:30:41.000Z',
                '05913d01-bfda-4449-979f-b18aca7f8c74',
                '2025-04-08T01:37:18.000Z',
                '2025-04-08T02:30:41.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '99924e17-99c1-4cd5-8d54-f580535ac04a',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '198671', 
                'Nuevos Profesionales',
                'bsqsasseleccion@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocKzqsvDcrIb2xrG4kFxM_Kr88gQohBIAxIGJT8wql8ihtojbJw=s96-c',
                1,
                '2025-05-05T22:11:05.000Z',
                '99924e17-99c1-4cd5-8d54-f580535ac04a',
                '2025-04-05T21:58:07.000Z',
                '2025-04-05T22:11:05.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '5f923197-8a73-4220-9544-27c9b417a116',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '200033', 
                'sandra milena medina sanchez',
                'sandramilenamedina@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocK-QUlagGG_hyKup4W0l24er7NX1RSvIHtEsOc9aNiWPaVWXaU=s96-c',
                1,
                '2025-05-06T22:04:41.000Z',
                '5f923197-8a73-4220-9544-27c9b417a116',
                '2025-04-06T02:17:55.000Z',
                '2025-04-06T22:04:41.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '89c4f920-0b6f-40f4-8a86-7b13f76f92d6',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '212416', 
                'Flor Higuita',
                'higuitaflor076@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJ2SB31hc-Us059NIM06w_c1-T2GHgApJMv0YZsnWuLDSXdww=s96-c',
                1,
                '2025-08-23T02:06:54.000Z',
                '89c4f920-0b6f-40f4-8a86-7b13f76f92d6',
                '2025-07-20T23:08:51.000Z',
                '2025-07-24T02:06:54.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '98067522-fd83-465b-ad9a-7f51306412da',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '214125', 
                'Cristian Yecid Lancheros Gualteros',
                'cristianlancheros1987@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocKu7mSGEP7uWQjMy9s7BarxfsXJ7xXsouC0L18Yub3-bXdpIA=s96-c',
                1,
                '2025-08-27T15:39:40.000Z',
                '98067522-fd83-465b-ad9a-7f51306412da',
                '2025-07-28T02:46:02.000Z',
                '2025-07-28T15:39:40.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'cf995edf-ffff-495a-bf7c-dbd9cd8b8c59',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '216945', 
                'Felipe Vargas Jiménez',
                'fvargasj1@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocKr3ChS3pk7Qe2UapKipQv56zFiuFJY9dKRq6PjSLlrg81G5dviPA=s96-c',
                1,
                '2025-05-05T16:08:42.000Z',
                'cf995edf-ffff-495a-bf7c-dbd9cd8b8c59',
                '2025-04-05T15:33:52.000Z',
                '2025-04-05T16:08:42.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'e6277543-d564-4ed2-8899-11484d407b2d',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '227621', 
                'Ricardo Guerra V. Director Admon - Produc',
                'procesos@bbgd.co',
                'https://lh3.googleusercontent.com/a/ACg8ocIygsM-HRjBC_2bwLaoM_YHtFsnE_Rxkkjl1Bu-6jG05fCBFak=s96-c',
                1,
                '2025-05-05T16:08:44.000Z',
                'e6277543-d564-4ed2-8899-11484d407b2d',
                '2025-04-05T15:27:21.000Z',
                '2025-04-05T16:08:44.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'c173ca75-9208-4e9d-a554-1bb8428d135e',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '266367', 
                'Alexandra Zuluaga',
                'alexandrazuluaga10@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJ-hzBTp6PAjeIpPog2Cy_r9SvITVG0ZWnJ25DGOGRqCs3ZCWD2hw=s96-c',
                1,
                '2025-07-22T21:40:36.000Z',
                'c173ca75-9208-4e9d-a554-1bb8428d135e',
                '2025-06-16T03:08:00.000Z',
                '2025-06-22T21:40:36.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '96c667cd-7816-4960-8f66-4a4adc6e9611',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '284049', 
                'Elvis Amaya',
                'eamayavelas@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocLP371JG1YxKct8r_6Oe1rVswHo7hdiWE4m_G8FWooegNoxNpGO8w=s96-c',
                1,
                '2025-10-26T21:07:33.000Z',
                '96c667cd-7816-4960-8f66-4a4adc6e9611',
                '2025-09-14T07:47:35.000Z',
                '2025-09-26T21:07:33.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '2ccd8b47-eacb-468d-9df3-8fc3d34d16b9',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '329611', 
                'Mauricio Arango',
                'mauroarangoa@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJTkNHh20apVd-ah1vD07AuRUD8sNYW-djGB9JheBFAfe_8pJ2k-A=s96-c',
                1,
                '2025-10-26T21:08:14.000Z',
                '2ccd8b47-eacb-468d-9df3-8fc3d34d16b9',
                '2025-09-01T14:53:57.000Z',
                '2025-09-26T21:08:14.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '75f2b73d-eeb2-483f-9028-1840077bcf6e',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '339206', 
                'Andres felipe Mancilla',
                'mancillaandres7@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocKB_oEetw3KllFkaNorRSdxF7TjG-198RNyDbILZ7Y7bbxXIcIv=s96-c',
                1,
                '2025-05-02T05:02:42.000Z',
                '75f2b73d-eeb2-483f-9028-1840077bcf6e',
                '2024-12-30T02:25:43.000Z',
                '2025-04-02T05:02:42.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'ba8ab1b3-a0a7-4186-824e-d4adc020c8dd',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '339822', 
                'Unir Impresiones',
                'unirimpresiones@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocL_ljny0KHR41iJIdImnnGDJFnF7eyDccT6QvN2Oto0Dw7h5cSw0g=s96-c',
                1,
                '2025-05-06T22:04:48.000Z',
                'ba8ab1b3-a0a7-4186-824e-d4adc020c8dd',
                '2025-04-06T00:51:42.000Z',
                '2025-04-06T22:04:48.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '875c8e2e-eb25-46fb-a732-d38e4c849125',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '352154', 
                'apperfish',
                'apperfish@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocIbjNUUiQsvh06A-Rf_eEKOoM0guuEr0nNDVPUWgyIAiEpJbQ=s96-c',
                1,
                '2025-05-01T04:48:30.000Z',
                '875c8e2e-eb25-46fb-a732-d38e4c849125',
                '2025-04-01T04:42:37.000Z',
                '2025-04-01T04:48:30.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '0e73d167-a607-4a39-866d-b39218426588',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '354834', 
                'nicole gonzalez',
                'ng277326@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocLMmJk4DGAZjyVS5oJ0G8Y90wV673vACuvBrdtnlDx0sOO7vAA=s96-c',
                1,
                '2025-05-18T16:23:08.000Z',
                '0e73d167-a607-4a39-866d-b39218426588',
                '2025-04-16T05:16:09.000Z',
                '2025-04-18T16:23:08.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '7a984f12-ede4-47fd-88b7-e6165c893110',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '373990', 
                'Lyanna Stone',
                'lyannastone98@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocKr4lS14nK5guLSgb1kDl5KQnhTSv0wrzKcyfbFQh2zvB7w5A=s96-c',
                1,
                '2025-10-26T21:45:03.000Z',
                '7a984f12-ede4-47fd-88b7-e6165c893110',
                '2025-08-28T08:28:22.000Z',
                '2025-09-26T21:45:03.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '334c55fa-e39c-4f09-a647-e6c194750cd3',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '381463', 
                'Pruebas proyectos',
                'pruebasproyectosti@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocIaMLTvHvrXYvyO5RqAm-vAWaXDNiRMSSX2S3RFfrmh7zMR4w=s96-c',
                1,
                '2025-05-01T04:32:44.000Z',
                '334c55fa-e39c-4f09-a647-e6c194750cd3',
                '2025-04-01T04:24:06.000Z',
                '2025-04-01T04:32:44.000Z'
            );
INSERT INTO User (
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
                '387625', 
                'Nuage Laboratoire',
                'YXJUWXF57FVKTGYZ7PYTGYQEZY-02@cloudtestlabaccounts.com',
                'https://lh3.googleusercontent.com/a/ACg8ocL-tHVXWvhfHE7SKvdS6JlqV1767jmb_5qhAxF57rnHuC11IA=s96-c',
                0,
                NULL,
                NULL,
                '2025-06-21T13:59:06.000Z',
                '2025-06-21T13:59:06.000Z'
            );
INSERT INTO User (
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
                '396910', 
                'Nuage Laboratoire',
                'YXJUWXF57FVKTGYZ7PYTGYQEZY-00@cloudtestlabaccounts.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJQZ8p01XuoMvFaI32FMssjmHC3k-M9px0PkKIfNMDw8MLTww=s96-c',
                0,
                NULL,
                NULL,
                '2025-04-25T02:19:06.000Z',
                '2025-04-25T02:19:06.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'bf92b5b5-2b3d-4ea7-9ecb-bb977fa1aca9',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '402945', 
                'NORALBA ECHAVARRIA OSPINA',
                'keikodudu@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocKX3ZRDeM2M497-XtC9kkY3AZafe4-0Ojk-PNAOlTwhbzacMzY=s96-c',
                1,
                '2025-11-03T23:11:58.000Z',
                'bf92b5b5-2b3d-4ea7-9ecb-bb977fa1aca9',
                '2025-08-24T18:02:17.000Z',
                '2025-10-04T23:11:58.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '5f8b7f00-5216-4769-ad8c-14750b375be9',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '428062', 
                'Mi Totem',
                'mitotem.device@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocIhkdHJAnuqYRTk89QYQ6p6qZa-xJk6rfv5kBnTi3ybizmqFXo=s96-c',
                1,
                '2025-05-05T16:08:45.000Z',
                '5f8b7f00-5216-4769-ad8c-14750b375be9',
                '2025-04-05T15:18:25.000Z',
                '2025-04-05T16:08:45.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '909ff238-8aea-4735-afd3-19d7767f8b1e',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '435662', 
                'Bibiana Pulido',
                'bibianapulido23@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocK0tQO2slG_TUMcucicCvV10xR7U6L9y54IyP0rcixVkkRLunN0=s96-c',
                1,
                '2025-06-24T23:57:50.000Z',
                '909ff238-8aea-4735-afd3-19d7767f8b1e',
                '2025-05-23T19:42:49.000Z',
                '2025-05-25T23:57:50.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'e67e2be5-b493-4aed-99db-70a25584aecb',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '438621', 
                'Familia 2023',
                'familia.2023gc@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocLhn4TMsjSbwFAAfgHkd8EiarUUg1N72yep8oxoqHg3PwYUhg=s96-c',
                1,
                '2025-05-05T21:46:15.000Z',
                'e67e2be5-b493-4aed-99db-70a25584aecb',
                '2025-04-05T21:45:42.000Z',
                '2025-04-05T21:46:15.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '62abc683-feab-4e53-a484-dedd24b805a3',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '445891', 
                'felicitips. com',
                'felicitips.com@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJGAixkOuXPIQywYU-62WGLK6XNi1IV9AgsWn5RAUJ32_HX6g=s96-c',
                1,
                '2025-05-01T00:56:24.000Z',
                '62abc683-feab-4e53-a484-dedd24b805a3',
                '2025-03-29T22:37:09.000Z',
                '2025-04-01T00:56:24.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '58f2b711-9d55-4c00-8220-1ff094360e7e',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '451810', 
                'Julián González',
                'jullian.gm07@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocI6OztyJYT8V8w1YWyKAWB4Le9pbhHuCUfSx6I_3H_BQ7aPYx-I=s96-c',
                1,
                '2025-04-30T17:16:34.000Z',
                '58f2b711-9d55-4c00-8220-1ff094360e7e',
                '2025-03-29T20:42:58.000Z',
                '2025-03-31T17:16:34.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '1862d9d6-fae7-42c6-94b9-f5eca78360a1',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '451880', 
                'Prueba 1 sonido',
                'psonido853@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocKCEYXPp_y0qtgLTTiID9UL4POO0biJ7aPBvswAFMW3_ketyQ=s96-c',
                1,
                '2025-05-05T17:54:38.000Z',
                '1862d9d6-fae7-42c6-94b9-f5eca78360a1',
                '2025-03-30T03:56:35.000Z',
                '2025-04-05T17:54:38.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '9629e755-3550-47fb-9f0a-d0383c627276',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '470394', 
                'Kami X',
                'camiale162@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocL0bJmULvS7cY5tHDhW-W_O_3g46ELWm3j61Ei8rn_YG1Bqj2XS=s96-c',
                1,
                '2025-05-06T22:04:02.000Z',
                '9629e755-3550-47fb-9f0a-d0383c627276',
                '2025-04-05T23:50:41.000Z',
                '2025-04-06T22:04:02.000Z'
            );
INSERT INTO User (
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
                '476580', 
                'Nuage Laboratoire',
                'YXJUWXF57FVKTGYZ7PYTGYQEZY-04@cloudtestlabaccounts.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJcrYQoCXaCMWK2ZBzs8dk9JcnGAdwQNQZ78gqGa6LTDk0Tdg=s96-c',
                0,
                NULL,
                NULL,
                '2025-06-21T14:08:28.000Z',
                '2025-06-21T14:08:28.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '9bea2c2a-fed5-45da-b80c-37c58060f97f',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '485177', 
                'Diana Rodríguez',
                'dianar.28@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocLYg1jzFt9SjeHqQShajvvH9Fm3c-0ZpTqDmilBp_BRaqXrFUIj=s96-c',
                1,
                '2025-05-06T22:04:05.000Z',
                '9bea2c2a-fed5-45da-b80c-37c58060f97f',
                '2025-04-06T19:15:39.000Z',
                '2025-04-06T22:04:05.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '40c1de0b-94ad-4d0c-9930-3538acae534e',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '494988', 
                'Javier Cometa Tabares',
                'javierctabares@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocIO4uPiDPEI6WGW5RoqiUJq9spp3xw63wiAvdr33Gs9W18cBQ=s96-c',
                1,
                '2025-05-10T02:13:58.000Z',
                '40c1de0b-94ad-4d0c-9930-3538acae534e',
                '2025-04-10T01:32:48.000Z',
                '2025-04-10T02:13:58.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '7f172ab6-2d56-47b6-b137-f206eb4139ae',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '502673', 
                'Kelly Chacon',
                'kellychaconferrer@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJlhEINhRbh2XKlny3B_JTgNWVuWulKTzzVZs0lYp1Mh6uX6sE=s96-c',
                1,
                '2025-05-06T22:04:08.000Z',
                '7f172ab6-2d56-47b6-b137-f206eb4139ae',
                '2025-04-06T16:12:24.000Z',
                '2025-04-06T22:04:08.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'd7b7c253-325e-40f4-8b10-6de36627261a',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '530774', 
                'Daniel Florian',
                'daniel.florian307@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocL6nqS56WqJ8Fw6bw8GoNAhgLyZjwcpuEAlorjquiKDaqF4dA=s96-c',
                1,
                '2025-05-05T21:08:27.000Z',
                'd7b7c253-325e-40f4-8b10-6de36627261a',
                '2025-04-05T20:15:14.000Z',
                '2025-04-05T21:08:27.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '4a0717f7-a415-4bc8-ae32-cb922fe0feff',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '562493', 
                'katerine quispe giraldo',
                'coneadrilibra1006@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocLvYNDv8EanOMCgHnUTq25xVUwcIn_b8inXn5aX5grLg_X_sa2Ixg=s96-c',
                1,
                '2025-09-08T01:57:15.000Z',
                '4a0717f7-a415-4bc8-ae32-cb922fe0feff',
                '2025-08-08T03:52:12.000Z',
                '2025-08-09T01:57:15.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '7bc39bdc-3b7e-42b7-9b91-298ae5518fec',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '565470', 
                'andres mancilla',
                'mancillaandres2002@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocI03JbBlLGhdKiAsSaMW0Rm6XiiBW-y_KQMh_rsIjOMPL7jQQ=s96-c',
                1,
                '2025-04-14T01:40:11.000Z',
                '7bc39bdc-3b7e-42b7-9b91-298ae5518fec',
                '2025-03-15T01:23:13.000Z',
                '2025-03-15T01:40:11.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '9c91b346-f5b0-430c-aa6a-926baf138bd3',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '573731', 
                'Richard Guts',
                'ricardroid2000@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocLso1KcDHT6iwD8KLg9xz83RyBHiNSgnzHtIcF36qya3rt-Fw=s96-c',
                1,
                '2025-05-05T17:54:40.000Z',
                '9c91b346-f5b0-430c-aa6a-926baf138bd3',
                '2025-03-29T18:23:32.000Z',
                '2025-04-05T17:54:40.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '698a454f-b607-4334-895e-26f5f125964e',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '596527', 
                'Pamela Dussan',
                'pamela.dussan26@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocIbdHyj-lhJvuSy7WJvUffdIln656akMigfo4TtWImmrw-LYA=s96-c',
                1,
                '2025-05-01T18:07:33.000Z',
                '698a454f-b607-4334-895e-26f5f125964e',
                '2025-03-29T20:40:41.000Z',
                '2025-04-01T18:07:33.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '35ace40d-7062-4fd6-968f-447a3ea0162d',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '612755', 
                'Claudia Calderón',
                'claudiaacaldero2410@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocI5wT0B1Fd7dEcjrmaHjG5AXgc9DPWk38FWhDct65Bcd2g8KnrsOw=s96-c',
                1,
                '2025-08-14T22:09:38.000Z',
                '35ace40d-7062-4fd6-968f-447a3ea0162d',
                '2025-07-15T21:01:01.000Z',
                '2025-07-15T22:09:38.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'd8cea89e-3f67-424a-8d1f-5a1035d2d10e',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '620343', 
                'Guillermo Torres',
                'gtg0806@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJ_-QwV3Kv8vVMHV25vO9C6bbNb0DY1sfwX_qj8eK5DM3FQzQ=s96-c',
                1,
                '2025-07-13T15:42:33.000Z',
                'd8cea89e-3f67-424a-8d1f-5a1035d2d10e',
                '2025-06-02T18:26:31.000Z',
                '2025-06-13T15:42:33.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'a35dd2ac-3248-4f55-a2d3-8e819d3cc0b3',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '627610', 
                'Aleyda Alar',
                'aleyda.57.alarcon@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocI0gwD-lDYrTN5TtmZiWs7BpEZQX14wR_ASqGGizbgG1yhA4QWAzQ=s96-c',
                1,
                '2025-05-06T22:04:10.000Z',
                'a35dd2ac-3248-4f55-a2d3-8e819d3cc0b3',
                '2025-04-06T00:54:42.000Z',
                '2025-04-06T22:04:10.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '1a0025ea-c411-47d9-8e9a-ba8ec11f03a8',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '642718', 
                'Tatiana Becerra',
                'ttatiana.bero@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocIxuwcGG-C0TUa-nAfjvsokjoG7YI9FBATcZQ0AuoRxosj5jg=s96-c',
                1,
                '2025-05-05T16:08:46.000Z',
                '1a0025ea-c411-47d9-8e9a-ba8ec11f03a8',
                '2025-04-05T15:42:48.000Z',
                '2025-04-05T16:08:46.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'ffd718b9-75e7-4e48-9870-ea9a7bec19f1',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '690490', 
                'laura fonseca',
                'laurafonsecacc9@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocIfKXi0eDh1w_Qm6jt1Haw4Abea_WSbEp7Wzn4iKS-cRv8NiA=s96-c',
                1,
                '2025-05-06T22:04:12.000Z',
                'ffd718b9-75e7-4e48-9870-ea9a7bec19f1',
                '2025-04-06T01:10:13.000Z',
                '2025-04-06T22:04:12.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '64aae127-5303-411b-ac0e-a9c9447b7c13',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '692082', 
                'Gineth Gamboa',
                'gamboagineth244@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocL8yp3FxlZQHqVGRUfJ3lnSrnPNKiKcfybgOkj1KhlGND4jTA=s96-c',
                1,
                '2025-08-15T23:31:23.000Z',
                '64aae127-5303-411b-ac0e-a9c9447b7c13',
                '2025-07-16T17:55:51.000Z',
                '2025-07-16T23:31:23.000Z'
            );
INSERT INTO User (
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
                '696670', 
                'Nuage Laboratoire',
                'YXJUWXF57FVKTGYZ7PYTGYQEZY-03@cloudtestlabaccounts.com',
                'https://lh3.googleusercontent.com/a/ACg8ocI952utbuvJRFrqeshI4_CzU7BcAwrX6qF95IT5LyIx4mKeIA=s96-c',
                0,
                NULL,
                NULL,
                '2025-06-21T14:03:51.000Z',
                '2025-06-21T14:03:51.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '46f63cdc-cc7a-479f-9b3e-f743374c9046',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '741791', 
                'Yicet Moreno',
                'yicet.ms@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocKKxQrK6zLMWpz04M6308TXQwWkK990wYcSYDYVuVJhc1du0XOJ=s96-c',
                1,
                '2025-06-26T23:31:46.000Z',
                '46f63cdc-cc7a-479f-9b3e-f743374c9046',
                '2025-05-26T12:23:50.000Z',
                '2025-05-27T23:31:46.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '21d02f48-36e7-43a7-89c1-bc5e96548ac7',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '743857', 
                'Victoria Cardenas',
                'victoriacardenas1207@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocLxiQheJ392gT1SQcnJFMKj0K4O_GEa8PZ6g2H-GlGA3tTOrQ=s96-c',
                1,
                '2025-11-03T23:12:04.000Z',
                '21d02f48-36e7-43a7-89c1-bc5e96548ac7',
                '2025-08-22T21:56:12.000Z',
                '2025-10-04T23:12:04.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '1ac1be9d-a515-4d8b-9ffc-1c5f3f8c9d5a',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '771577', 
                'Manuel Cuervo.',
                'manolofer1218@gmail.com',
                NULL,
                1,
                '2025-05-06T22:04:13.000Z',
                '1ac1be9d-a515-4d8b-9ffc-1c5f3f8c9d5a',
                '2025-04-05T23:42:50.000Z',
                '2025-04-06T22:04:13.000Z'
            );
INSERT INTO User (
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
                '771767', 
                'Nuage Laboratoire',
                'UGETQF2PRNYV7KRD7NGWUUXGSI-00@cloudtestlabaccounts.com',
                'https://lh3.googleusercontent.com/a/ACg8ocLf5VLZ9MGSW9Z8ujGl3cbBOvDwgAI99iEGCJQIN-wo5qRLYQ=s96-c',
                0,
                NULL,
                NULL,
                '2025-05-20T04:41:01.000Z',
                '2025-05-20T04:41:01.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'bcd63700-3d41-4452-828d-3b60855d8efe',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '773247', 
                'Lina RubioDiaz',
                'linarubiodiaz@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocIJNudWiO5OT4g_8VFjG3tkdgd7vBusvHvlEQIeUxv-WlwmqDm5sg=s96-c',
                1,
                '2025-05-06T22:04:14.000Z',
                'bcd63700-3d41-4452-828d-3b60855d8efe',
                '2025-04-06T19:27:55.000Z',
                '2025-04-06T22:04:14.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '1b79cc2d-bfc6-44c9-808f-421b99ba60e4',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '801057', 
                'Felipe Gonzalez',
                'felipeglezlogan@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocKbDEQVDenGkV3UyttSbhY2BEWLbZo4SacWBaMZlAJUZua7kA=s96-c',
                1,
                '2025-11-03T23:12:08.000Z',
                '1b79cc2d-bfc6-44c9-808f-421b99ba60e4',
                '2025-08-22T05:11:06.000Z',
                '2025-10-04T23:12:08.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '00be4a15-e322-4267-9983-21212fb39aef',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '806422', 
                'Eli Gomez',
                'eligomez001@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocLiuvU7bpSvVQS6gMWQ9dQr_vXOcz2lh9QUFUJnR6ssEUzXqA=s96-c',
                1,
                '2025-05-02T04:05:29.000Z',
                '00be4a15-e322-4267-9983-21212fb39aef',
                '2025-02-16T15:09:14.000Z',
                '2025-04-02T04:05:29.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '534b62ac-90ba-4747-970d-a9b71ac281b4',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '806835', 
                'Marcela Duque',
                'marceladuquegomez04@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJuoEXhOX90DCEF2fQtnZVmyXuuW54tjD71xe1d4KQaVhJcTA=s96-c',
                1,
                '2025-05-08T02:30:29.000Z',
                '534b62ac-90ba-4747-970d-a9b71ac281b4',
                '2025-04-07T22:33:22.000Z',
                '2025-04-08T02:30:29.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'f7ad8477-0b52-451b-addc-57bae12b834e',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '808521', 
                'Andres Felipe',
                'mancillaandres216@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocJ63I808OZWyfsrw3XfSf1_Syf5G2s6kuhC65ClcbKdefK4VA=s96-c',
                1,
                '2025-04-28T22:28:21.000Z',
                'f7ad8477-0b52-451b-addc-57bae12b834e',
                '2025-03-29T19:45:39.000Z',
                '2025-03-29T22:28:21.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '4422a2b4-50fa-4a78-bf8b-b2ba68624620',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '823052', 
                'BIZAR',
                'mancillaandres107@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocLkDTMswCsJz3RQaH9Fd9eRmQ__AUbXeaU3WkMzHZ2-0xIpGrk=s96-c',
                1,
                '2025-05-02T02:18:10.000Z',
                '4422a2b4-50fa-4a78-bf8b-b2ba68624620',
                '2025-04-01T04:47:22.000Z',
                '2025-04-02T02:18:10.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'dfb574c8-d921-4a18-9e2b-323fe8c70a73',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '829891', 
                'Didier Revelo',
                'didierrevelo@gmail.com',
                NULL,
                1,
                '2025-07-22T21:40:53.000Z',
                'dfb574c8-d921-4a18-9e2b-323fe8c70a73',
                '2025-06-19T23:55:35.000Z',
                '2025-06-22T21:40:53.000Z'
            );
INSERT INTO User (
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
                '849978', 
                'Nuage Laboratoire',
                'YXJUWXF57FVKTGYZ7PYTGYQEZY-01@cloudtestlabaccounts.com',
                'https://lh3.googleusercontent.com/a/ACg8ocLsAkR8_eRoAIaB3XoburDz9F0nOCXaWYBug3lDPTF-LbYMUQ=s96-c',
                0,
                NULL,
                NULL,
                '2025-06-21T13:49:50.000Z',
                '2025-06-21T13:49:50.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'c1859071-3f16-4081-941d-ba1e77bab33a',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '865613', 
                'Jessica Villarraga',
                'jvillarraga28@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocI2X-PPSD4sJsoZ3seGLI2lInPYsu81rxBF8wSg0FAC3t4Kkdc81A=s96-c',
                1,
                '2025-05-06T22:04:16.000Z',
                'c1859071-3f16-4081-941d-ba1e77bab33a',
                '2025-04-05T22:22:46.000Z',
                '2025-04-06T22:04:16.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'eec98a53-1dd5-4b0b-b772-1af2920e39e9',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '900984', 
                'Guerreros Colombia 2021',
                'mancillaandres106@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocLhy0PHHqbc5HuFS48jNE7ybOLpm7E_7-wdaPgmGoOkWpUcMF8=s96-c',
                1,
                '2025-05-01T15:32:17.000Z',
                'eec98a53-1dd5-4b0b-b772-1af2920e39e9',
                '2025-04-01T15:00:47.000Z',
                '2025-04-01T15:32:17.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '5f9f65b1-dcbd-438c-bea3-63adb9cc4abe',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '914802', 
                'Mundo Novelas',
                'mundonovelasapp@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocK7WCYUKhVYFSrxL6HgGt9HkYj7V7H68Svi8a5OYq0MccHZTA=s96-c',
                1,
                '2025-05-05T16:08:47.000Z',
                '5f9f65b1-dcbd-438c-bea3-63adb9cc4abe',
                '2025-04-04T12:50:59.000Z',
                '2025-04-05T16:08:47.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '4c334c21-5559-4f9a-aa33-43aaf20f6af6',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '923926', 
                'prueba 1 magicuentos',
                'magicuentosprueba@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocI34amRfAvhqoIRaxvtjet4wvegNaaQ_QSyDPzXTB5v2LNiLg=s96-c',
                1,
                '2025-05-01T21:26:51.000Z',
                '4c334c21-5559-4f9a-aa33-43aaf20f6af6',
                '2025-04-01T21:23:50.000Z',
                '2025-04-01T21:26:51.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '90e26a66-b57c-4094-b298-901533ba130f',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '924769', 
                'Heini carelli Arbelaez contreras',
                'heinicarelliarbelaezcontreras@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocKP_coyo71oij6XgsAXYresvA1ead8pfP1046zCCZCuJU5qYwK2=s96-c',
                1,
                '2025-06-24T23:57:57.000Z',
                '90e26a66-b57c-4094-b298-901533ba130f',
                '2025-05-24T22:58:45.000Z',
                '2025-05-25T23:57:57.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '739ac8e1-0d28-4992-bf92-528010b8b87a',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '930735', 
                'Saberia',
                'sabyvallejo12@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocKfaKnViGX1HfUJPpv_psWCuW08dQTQDMqOr7RVeCdyHoqV9EM=s96-c',
                1,
                '2025-05-05T18:54:06.000Z',
                '739ac8e1-0d28-4992-bf92-528010b8b87a',
                '2025-04-05T18:09:03.000Z',
                '2025-04-05T18:54:06.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '020f15c2-8417-48d4-a83d-f1a81fe8c063',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '940628', 
                'minkoable',
                'moniqui13@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocIofxmU2bi216GZACu9EPo3hQpgxARG4YR0oJyqa0KnT_jTHQ=s96-c',
                1,
                '2025-05-25T02:53:40.000Z',
                '020f15c2-8417-48d4-a83d-f1a81fe8c063',
                '2025-04-22T16:53:41.000Z',
                '2025-04-25T02:53:40.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '0e8ce8a6-383d-4bf9-a9e6-86204af6b2b3',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '951907', 
                'InGrI PaLoMo',
                'ingripalomo@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocLiYvgtrLq04oitSG_EsAFw0ey2E0dYMsILHK6aGI4KdvzdlOQN=s96-c',
                1,
                '2025-05-06T22:04:19.000Z',
                '0e8ce8a6-383d-4bf9-a9e6-86204af6b2b3',
                '2025-04-05T22:36:16.000Z',
                '2025-04-06T22:04:19.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '3bd83ff0-b8ac-4d99-af61-bf43e862be3e',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '953146', 
                'Alejandra Garavito',
                'aleja20garavito@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocIX0CPXs2g-F74XePRUVkHCTVbppVEDo9ZAh-mivkKt_KhpTQ=s96-c',
                1,
                '2025-05-05T17:08:44.000Z',
                '3bd83ff0-b8ac-4d99-af61-bf43e862be3e',
                '2025-04-05T16:53:22.000Z',
                '2025-04-05T17:08:44.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    '7f66958a-c0be-4b08-a617-c4b3dc467ab5',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '960051', 
                'luisa herrera',
                'luisa.spriel1192@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocItwZYwhnilvTELGaaH1_3-nPDH9kGnk1tkxqmlKPKz2RjSluC9aw=s96-c',
                1,
                '2025-07-13T15:42:36.000Z',
                '7f66958a-c0be-4b08-a617-c4b3dc467ab5',
                '2025-06-12T01:47:58.000Z',
                '2025-06-13T15:42:36.000Z'
            );
INSERT INTO Subscription (
                    id,
                    platform,
                    purchaseToken,
                    productId,
                    `interval`,
                    isActive,
                    autoRenewing,
                    createdAt,
                    updatedAt
                ) VALUES (
                    'b558ad0c-7142-4067-85b7-a565c6c98230',
                    'GOOGLE_PLAY',
                    'migrated_placeholder_token',
                    'generic_monthly',
                    'MONTHLY',
                    1,
                    1,
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP
                );
INSERT INTO User (
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
                '2147483647', 
                'Ifoiffiif Kfkff',
                'mancillaandres2001@gmail.com',
                'https://lh3.googleusercontent.com/a/ACg8ocKASg3a-oMDcu6oiXcgRZ9h6f5n8tE_WBL9B4zCmZ10bmL9BA=s96-c',
                1,
                '2025-04-08T23:33:56.000Z',
                'b558ad0c-7142-4067-85b7-a565c6c98230',
                '2024-12-30T02:16:13.000Z',
                '2025-03-09T23:33:56.000Z'
            );
COMMIT;