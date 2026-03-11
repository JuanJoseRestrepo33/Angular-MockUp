# TIMA — Aplicación Web Frontend

Interfaz de usuario para **TIMA**, una aplicación de actividad física y retos personales. Desarrollada con Angular 15 siguiendo el Design System TIMA.

---

## Enlaces

| Recurso | Enlace |
|---------|--------|
| **Design System** | [Ver Design Kit TIMA en Figma](https://www.figma.com/design/Q9S1zuZBzFoge33RfSjd96/Design-kit---Design-System---TIMA?node-id=61192-2191&m=dev) |

---

## Pantallas incluidas

| Ruta | Descripción |
|------|-------------|
| `/login` | Inicio de sesión con código QR clicable |
| `/app/panel` | Dashboard: retos completados, constancia semanal, acceso a módulos |
| `/app/retos` | Lista de retos con filtros, paginación y toggles de estado |
| `/app/analisis` | Gráfica de constancia con selector de período (7/14/30 días) |
| `/app/preferencias` | Configuración con toggles y dropdowns |
| `/app/perfil` | Datos del usuario y enlace a configuración |
| `/app/perfil/configuracion` | Idioma, zona horaria (dropdowns) |
| `/app/retos/configuracion` | Tipo de reto, ventana de validación, nivel de exigencia |
| `/app/preferencias/configuracion` | Tipo de reto, período, ventana, visualización, toggles |

---

## Stack técnico

- **Framework:** Angular 15
- **Estilos:** SCSS con partials (`_colors.scss`, `_variables.scss`)
- **Gráficas:** Chart.js
- **Rutas:** Angular Router con parámetros de consulta
- **Modelos:** Interfaces TypeScript para Reto, Usuario, Preferencias, Periodo
- **Servicios:** RetosService, PreferenciasService, UsuarioService

---

## Componentes interactivos (no funcionales)

Todos los controles reaccionan al clic y cambian de estado visual, pero no persisten datos ni llaman a APIs:

- **Dropdowns:** Filtro (Retos), Período (Análisis), Idioma, Zona horaria, Ventana de validación, Tipo de reto, etc.
- **Toggles:** Sincronización, notificaciones web, estado activo/inactivo de retos
- **Botones tipo toggle:** Tipo de reto (Pasos/Ejercicios), Nivel de exigencia (Estricto/Flexible)

---

## Inicio rápido

**Requisitos:** Node.js 18+ | npm 9+

```bash
# Clonar
git clone https://github.com/JuanJoseRestrepo33/Angular-MockUp.git
cd Angular-MockUp

# Instalar
npm install

# Desarrollo (http://localhost:4200)
npm run start

# Compilación
npm run build
```

Por defecto se abre en `/login`. El código QR es clicable y navega al panel principal.

---

## Estructura del proyecto

```
src/
├── app/
│   ├── components/       # Login, Panel, Retos, Análisis, Preferencias, Perfil, Configs
│   ├── models/           # Interfaces: Reto, Usuario, Preferencias, PeriodoAnalisis
│   └── services/         # RetosService, PreferenciasService, UsuarioService
├── styles/
│   ├── _colors.scss      # Paleta TIMA
│   └── _variables.scss  # Tipografía, espaciado, transiciones
└── styles.scss           # Estilos globales
```

---

## Navegación

- **Login** → Clic en QR → Panel principal
- **Sidebar** → Panel | Retos | Análisis | Preferencias
- **Tarjetas del panel** → Redirección a Retos, Análisis, Preferencias
- **Avatar** → Perfil
- **Editar / Crear** → Pantallas de configuración

