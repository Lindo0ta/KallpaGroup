# Kallpagroup S.A.S

Sitio web corporativo de **Kallpagroup S.A.S**: ingeniería aeronáutica, energías renovables, agro sostenible, medición y capacitación.

Construido con **Vite + React**, CSS puro y animaciones de (*liquid glass*) y *scroll reveal*.

## Stack

- [Vite](https://vite.dev) + React
- [react-icons](https://react-icons.github.io/react-icons/) (Lucide y Font Awesome 6)
- CSS puro con variables, sin librerías de UI ni de animación

## Inicio rápido

```bash
npm install
npm run dev
```

Otros comandos:

```bash
npm run build     # build de producción en /dist
npm run preview   # sirve el build localmente
```

## Estructura

```
kallpagroup/
├── public/
│   ├── logo.png            # logo (pendiente)
│   └── img/
│       ├── hero.jpg        # imagen del hero
│       └── proyectos.jpg   # imagen de la sección de impacto
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data.js             # navegación, líneas de negocio y servicios
    ├── styles.css
    └── components/
        ├── Header.jsx      # navegación + menú hamburguesa
        ├── Hero.jsx
        ├── Lines.jsx       # tarjetas de líneas de negocio
        ├── Services.jsx    # tabs en vidrio líquido con detalle
        ├── Impact.jsx
        ├── Footer.jsx
        └── Reveal.jsx      # animación de entrada al hacer scroll
```

## Paleta de colores

| Variable | Color | Uso |
|---|---|---|
| `--azul-profundo` | `#0B2341` | Fondos principales |
| `--azul-acero` | `#123F65` | Degradados, iconos |
| `--azul-cielo` | `#4B91C5` | Acentos, blobs |
| `--plata` | `#A7B4C2` | Textos secundarios |
| `--azul-petroleo` | `#236477` | Acento, blobs |
| `--verde-bosque` | `#3F7D3B` | Botones, flechas |
| `--verde-hoja` | `#8BBF55` | Botones, iconos |
| `--marfil` | `#F5F3EA` | Acento claro |
| `--gris-ingenieria` | `#737B84` | Texto de apoyo |
| `--gris-claro` | `#D9E0E6` | Texto sobre fondo oscuro |
| `--fondo-claro` | `#F3F6F8` | Fondos claros |
| `--fondo-general` | `#FAFAFB` | Fondo del sitio |

> La paleta original traía dos valores inválidos, corregidos así: `#0B23411` → `#0B2341` y `#FSF3EA` → `#F5F3EA`.

## Secciones

1. **Header y Hero**: navegación, llamados a la acción y mensaje principal.
2. **Líneas de negocio**: aeronáutica, agro sostenible, energías renovables, medición y capacitación.
3. **Servicios**: 
   - Software aeronáutico SaaS con IA agéntica
   - Consultoría aeronáutica para OMA y operadores
   - Agro y ganadería de precisión
   - Soluciones con drones para la industria
4. **Impacto**: banner de proyectos.
5. **Footer**: marca, navegación, redes y compromiso sostenible.

## Personalización

- **Contenido:** edita `src/data.js` (`NAV`, `LINES`, `SERVICES`). Los ítems de servicios con formato `Título: descripción` muestran el título en negrita.
- **Logo:** guarda el archivo como `public/logo.png`. Mientras no exista se muestra una imagen rota.
- **Imágenes:** `public/img/hero.jpg` y `public/img/proyectos.jpg`. Sin ellas se ven los fondos de color de la paleta.
- **Ancho máximo del contenido:** cambia `1200px` en `--pad` dentro de `:root`.

## Animaciones

- **Liquid glass:** `backdrop-filter`, reflejo especular que sigue al cursor, blobs de color animados y entradas elásticas escalonadas.
- **Scroll reveal:** el componente `Reveal` usa `IntersectionObserver`.

```jsx
<Reveal from="left" delay={100}>...</Reveal>
```

  - `from`: `up` (por defecto), `down`, `left`, `right`
  - `delay`: milisegundos
  - Se dispara una sola vez por elemento.
- Se respeta `prefers-reduced-motion`.

## Responsive

- Secciones a ancho completo, con contenido centrado según `--pad`.
- Menú hamburguesa en pantallas ≤ 760px.
- Tabs/panel de servicios y footer pasan a una columna en ≤ 900px.
- `overflow-x: clip` en `html`, `body` y secciones con blobs evita el scroll horizontal causado por las animaciones laterales.

## Pendientes

- [ ] Agregar `public/logo.png`
- [ ] Agregar imágenes del hero y de proyectos
- [ ] Enlaces reales de redes sociales en el footer
- [ ] Formulario o enlace de contacto para "Cotiza ahora"

## Licencia

© Kallpagroup S.A.S. Todos los derechos reservados.