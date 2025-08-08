# Vue 3 + Vite

## Progreso del Proyecto

### 6 de Agosto, 2025
- Descargué las dependencias de Vue y Vite dentro de una carpeta llamada `vite-project`
- Dejé todo preparado para seguir avanzando con el desarrollo
- Configuración inicial del proyecto Vue 3 con Vite completada

#### Conceptos de Vue.js Aprendidos:

**Estructura de Componentes:**
- Los componentes de Vue están divididos en tres secciones: `<script>`, `<template>` y `<style>`
- `App.vue` es el archivo raíz de la aplicación
- En la etiqueta `<script>` se trabaja con `setup` (forma más reciente y recomendada)
- En la etiqueta `<style>` usar `scoped` para aplicar estilos solo al componente actual
- Los componentes se importan en el script de `App.vue`

**Manejo de Variables y Funciones:**
- Para imprimir variables en el template se usa la sintaxis `{{ variable }}`
- Para dar funcionalidad a las variables se debe importar `ref` desde Vue
- Para eventos de click se usa `@click` en lugar de `onclick`

**Directivas de Vue:**
- `v-bind`: Hace que los atributos sean dinámicos (también se puede escribir con `:`)
- `v-model`: Crea un vínculo de datos bidireccional, ideal para formularios reactivos
- `v-if`: Muestra contenido en el HTML dinámicamente según una condición
- `v-for`: Permite renderizar listas de elementos
- `:key`: Se usa con `v-for` para proporcionar una llave única para cada elemento (requerido por Vue)
- Clases dinámicas: Se pueden aplicar clases CSS condicionalmente

**Renderizado de Listas:**
- `v-for` puede renderizar arrays simples y objetos complejos
- Ideal para mostrar datos de APIs
- Cada elemento necesita una `:key` única para el rendimiento óptimo

**Comunicación entre Componentes:**
- `defineProps`: Permite enviar datos del componente padre al componente hijo
- El componente hijo se inserta dentro del componente padre
- `defineEmits`: Funciona al revés, permite comunicación del hijo hacia el padre
- Props van "hacia abajo", emits van "hacia arriba"

**Slots:**
- Los slots son una manera de transferir información HTML del componente padre al hijo
- A diferencia de los props, se ponen como HTML dentro del template con `<slot>`
- Se guarda código HTML directamente, no en variables como los props
- Útiles para hacer ventanas modales o avisos de error
- Se puede usar `v-slot` y agregar `name` a los slots para identificarlos
- Ejemplo: `<template v-slot:nombre>contenido</template>`

**Variables Computadas (Computed):**
- Variable que depende de otra variable
- El valor se modifica automáticamente si cambia la variable de la que depende
- Básicamente es una función que devuelve un callback
- Se recalcula solo cuando sus dependencias cambian
- Ideal para cálculos que necesitan ser reactivos

**Watchers:**
- `watch`: Método especial que permite vigilar una variable
- Si la variable cambia, se ejecuta el código que queramos
- Permite al menos 2 parámetros (variable a observar y función a ejecutar)
- 3er parámetro opcional: objeto con `immediate: true` para ejecutar inmediatamente
- `watchEffect`: Similar al watch pero con diferencias:
  - Solo necesita un argumento
  - Se ejecuta inmediatamente sin configuración adicional
  - Útil para manejar peticiones a APIs y conexiones de datos

**Reactive vs Ref:**
- `reactive`: Función de Vue específica para objetos
- Se usa diferente a `ref`, trabaja directamente con objetos
- No necesita `.value` para acceder a las propiedades
- Ideal para formularios y estructuras de datos complejas

**Formularios en Vue:**
- Identificamos todos los inputs con `v-model.objeto`
- Trabajamos con `@submit` para manejar el envío del formulario
- `@submit.prevent` previene que la página se actualice por defecto
- Permite validación y manejo personalizado de los datos del formulario

**Vue Router - Navegación entre páginas:**
- Se instala con `npm install vue-router`
- Sirve para gestionar la navegación dentro de aplicaciones Vue de una sola página (SPA)
- Para separar páginas se crea la carpeta `views` en `src` donde se guardan todas las páginas
- Los componentes de Vue son solo elementos reutilizables (botones, cards, etc.)

**Configuración de Vue Router:**
- Se crea una carpeta `router` en `src` con un archivo `.js`
- Se usa la función `createRouter` como constante con un objeto que contiene:
  - `history: createWebHistory()` - Para enrutado natural como estamos acostumbrados
  - `routes: [{}]` - Array de rutas con 3 propiedades cada una:
    - `path`: La ruta URL (ej: `"/"` para home)
    - `name`: Nombre identificador de la ruta
    - `component`: Archivo de `views` que se renderizará
- Se exporta con `export default router`

**Integración del Router:**
- En `main.js` se modifica de `createApp(App).mount('#app')` a `createApp(App).use(router).mount('#app')`
- En `App.vue` en el template se coloca `<RouterView />` para mostrar las rutas

**Router Links - Enlaces internos:**
- Se usa `<router-link>` como componente especial para navegación interna
- Atributo `to` indica el destino: `<router-link to="/">Inicio</router-link>`
- También se pueden usar variables: `:to="{name: 'home'}"`

**Pinia - Gestor de Estados Global:**
- Librería para trabajar con variables y funciones de manera global
- Ideal para proyectos grandes donde se necesita compartir estado
- Se instala con `npm install pinia`

**Configuración de Pinia:**
- En `main.js` se importa: `import { createPinia } from "pinia"`
- Se crea constante: `const pinia = createPinia()`
- Se integra: `createApp(App).use(router).use(pinia).mount("#app")`

**Stores - Almacenamiento de Estado:**
- Se crea carpeta `stores` en `src` para almacenar variables y funciones globales
- Se usa `defineStore()` que necesita 2 parámetros:
  - Nombre significativo único (string)
  - Callback (arrow function) con las variables y funciones
- Para usar el store en views: se declara como constante `const movieStore = useMovieStore()`
- Permite comunicación entre componentes sin necesidad de props/emits

## Estructura del Proyecto
```
vite-project/
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── App.vue
    ├── main.js
    ├── style.css
    ├── assets/
    │   └── vue.svg
    ├── components/
    │   ├── HeaderComponent.vue
    │   └── ChildComponent.vue
    ├── router/
    │   └── index.js
    ├── stores/
    │   └── movie.js
    └── views/
        ├── HomeViews.vue
        ├── MoviesViews.vue
        └── CreateMovieViews.vue
```

## Próximos Pasos
- Continuar con el desarrollo de la aplicación Vue
- Agregar nuevos componentes según sea necesario
- Implementar funcionalidades específicas del proyecto
