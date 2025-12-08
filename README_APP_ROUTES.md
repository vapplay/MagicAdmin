  
# 📱 Documentación de API para App Móvil

Estas son las rutas disponibles para la integración de la aplicación móvil.

## 🔐 Autenticación y Carga Inicial

### Login con Google (Obtener Usuario y Cuentos)
Esta ruta se debe llamar cuando el usuario inicia sesión con Google. Retorna la información completa del usuario incluyendo sus **cuentos personalizados** y asignados.

**Endpoint:** `POST /api/auth/login`

**Body:**
```json
{
  "email": "usuario@gmail.com",
  "name": "Nombre Usuario",
  "image": "https://lh3.googleusercontent.com/..."
}
```

**Respuesta:**
```json
{
  "user": {
    "id": "cm...",
    "email": "usuario@gmail.com",
    "name": "Nombre Usuario",
    "isPremium": false
  },
  "stories": [
    {
      "id": "...",
      "status": "COMPLETED",
      "requestedName": "Santiago",
      "history": {
        "name_es": "El Bosque Mágico",
        "cover": "..."
      },
      "audio": {
        "url": "https://...",
        "childName": "Santiago"
      }
    }
  ]
}
```

### Obtener Perfil de Usuario
Ruta para obtener toda la información de un usuario específico usando su ID.

**Endpoint:** `GET /api/users/[id]`

**Ejemplo:** `/api/users/cm...`

**Respuesta:**
```json
{
  "success": true,
  "user": {
    "id": "...",
    "email": "...",
    "isPremium": true/false
    // ... otros campos
  },
  "stories": [
    // Array de cuentos del usuario (historial de compras)
    {
      "id": "...",
      "status": "COMPLETED",
      "history": { ... },
      "audio": { ... }
    }
  ]
}
```

---

## 💎 Suscripción

### Convertirse en Premium
Ruta para registrar que un usuario ha adquirido la versión Premium.

**Endpoint:** `POST /api/users/premium`

**Body:**
```json
{
  "userId": "cm...",
  "interval": "MONTHLY", // "MONTHLY" | "QUARTERLY" | "ANNUAL"
  "purchaseToken": "token_de_google_o_apple...",
  "platform": "GOOGLE_PLAY", // "GOOGLE_PLAY" | "IOS_APP_STORE"
  "productId": "premium_monthly",
  "orderId": "GPA.1234..." // Opcional
}
```

**Respuesta:**
```json
{
  "success": true,
  "user": {
    "id": "...",
    "email": "...",
    "isPremium": true/false
    // ...other user fields (stories are NOT nested here)
  },
  "stories": [
    // Array of user stories
    {
      "id": "...",
      "status": "COMPLETED",
      "history": { ... },
      "audio": { ... }
    }
  ]
}
```

### Verificar Estado de Suscripción
Ruta para validar si la suscripción de un usuario sigue activa directamente con Google Play. Actualiza el estado del usuario en la base de datos si ha expirado o renovado.

**Endpoint:** `POST /api/users/check-subscription`

**Body:**
```json
{
  "userId": "cm..."
}
```

**Respuesta Exitosa (Suscripción Activa/Renovada):**
```json
{
  "success": true,
  "isPremium": true,
  "expiryDate": "2025-12-08T19:30:00.000Z",
  "autoRenewing": true
}
```

**Respuesta (Suscripción Expirada/Cancelada):**
```json
{
  "success": true,
  "isPremium": false,
  "expiryDate": "2024-12-01T10:00:00.000Z",
  "autoRenewing": false
}
```

---

## 📚 Historias y Contenido

### Obtener Cuentos (Filtrar por Tipo)
Obtiene la lista de cuentos disponibles (catálogo). Puedes filtrar por tipo (ej. dormir, aventura).

**Endpoint:** `GET /api/history`

**Parámetros (Query Params):**
- `type`: Número (opcional). 
  - Ejemplo: `/api/history?type=1`

**Respuesta:**
```json
{
  "data": [
    {
      "id": "...",
      "name_es": "Nombre Cuento",
      "type": 1,
      "cover": "..."
    }
  ]
}
```

### Obtener Banners
Obtiene la lista de banners promocionales (ej. Swiper principal).

**Endpoint:** `GET /api/banners`

**Respuesta:**
```json
[
  {
    "id": "...",
    "title": "...",
    "description": "...",
    "playImage": "...",
    "isPromo": true,
    "history": {
      "id": "...",
      "name_es": "...",
      "cover": "..."
    }
  }
]
```

---

## ⚙️ Configuración

### Ajustes de la App
Obtiene configuraciones globales de la app (banners, textos, versiones).

**Endpoint:** `GET /api/config`

**Respuesta:**
```json
{
  "id": "...",
  "adsMasterSwitch": true,
  "adsBannerEnabled": true,
  "adsInterstitialEnabled": true,
  "loginMasterSwitch": true,
  "googleLoginEnabled": true,
  "facebookLoginEnabled": false,
  "surprisesModuleEnabled": false,
  "forceUpdate": false,
  "latestVersion": "1.0.0",
  "termsData": null, // o objeto JSON con términos
  "adsLoginEnabled": false,
  "menuText1_es": "Inicio",
  "menuText1_en": "Home",
  "menuText1_pt": "Início",
  "menuText2_es": "Cuentos",
  "menuText2_en": "Stories",
  "menuText2_pt": "Histórias",
  "menuText3_es": "Perfil",
  "menuText3_en": "Profile",
  "menuText3_pt": "Perfil"
}
```

---

## ✍️ Personalización

### Solicitar Cuento Personalizado
Envía una solicitud para crear un cuento con el nombre del niño/a.

**Endpoint:** `POST /api/custom-stories/requests`

**Body:**
```json
{
  "userId": "cm...",
  "historyId": "id_del_cuento_base",
  "requestedName": "Valentina",
  "purchaseToken": "token_de_google...",
  "platform": "GOOGLE_PLAY",
  "productId": "custom_story_one_time",
  "orderId": "GPA.123..."
}
```

**Respuesta:**
```json
{
  "id": "...",
  "status": "PROCESSING",
  "requestedName": "Valentina"
}
```
