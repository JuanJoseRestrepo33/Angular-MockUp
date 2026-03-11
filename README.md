# TIMA - Aplicación Web Frontend

Aplicación web desarrollada con Angular 15 que implementa las interfaces del Design System TIMA.

## Pantallas

- **Login** (`/login`): Inicio de sesión con código QR. Al hacer clic en el QR se simula el escaneo y se navega al Panel Principal.
- **Panel Principal** (`/app/panel`): Dashboard con retos completados, constancia semanal y acceso a las demás secciones.
- **Retos** (`/app/retos`): Vista de retos activos.
- **Análisis** (`/app/analisis`): Vista de análisis semanal.
- **Preferencias** (`/app/preferencias`): Configuración con componentes interactivos (toggles, dropdown).

## Requisitos de ejecución

- Node.js 18+
- npm 9+

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run start
```

Abre [http://localhost:4200](http://localhost:4200). La ruta por defecto es `/login`.

## Compilación para producción

```bash
npm run build
```

Los archivos se generan en `dist/angular-proyecto/`.

## Navegación

- El QR en Login es clickeable y navega al Panel Principal.
- La barra lateral permite navegar entre Panel, Retos, Análisis y Preferencias.
- Los botones de las tarjetas redirigen a sus respectivas secciones.

## Componentes interactivos (no funcionales)

- **Toggles** en Preferencias: responden al clic (cambian estado visual).
- **Dropdown** en Preferencias: abre/cierra y permite selección visual de opciones.
