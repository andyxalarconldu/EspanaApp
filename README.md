# ⚽ EspañaApp - Selección Española de Fútbol (La Roja)

Aplicación móvil desarrollada en **React Native** utilizando **Expo** y **React Navigation**, diseñada para mostrar información institucional y fichas de jugadores destacados de la Selección Española.

---

## 🚀 Características Principales
* **Splash Screen Automática:** Pantalla de bienvenida con temporizador de 3 segundos que redirige al menú principal.
* **Navegación Fluida:** Implementación de `Native Stack Navigator` para gestionar el flujo entre vistas sin barra superior nativa.
* **Diseño Responsivo y Personalizado:** Uso de `ScrollView`, tarjetas con sombras (`elevation`), y paleta de colores oficial de la selección (Rojo `#AA151B` y Amarillo `#F1BF00`).
* **Sección de Estrellas:** Listado detallado de jugadores clave con imágenes y posiciones.

---

## 📂 Estructura del Proyecto

```text
EspanaApp/
│
├── assets/                  # Recursos multimedia (Escudo y fotos de jugadores)
│   ├── espana_logo.jpeg
│   ├── jugador1.jpg
│   └── jugador2.jpg
│
├── src/
│   └── screens/             # Pantallas de la aplicación
│       ├── SplashScreen.js  # Vista de carga inicial
│       ├── HomeScreen.js    # Menú principal con datos del equipo
│       └── PlayersScreen.js # Listado de jugadores destacados
│
├── App.js                   # Configuración global y Stack Navigator
├── app.json                 # Configuración de Expo
└── package.json             # Dependencias del proyecto