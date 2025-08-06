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
- Clases dinámicas: Se pueden aplicar clases CSS condicionalmente

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
    └── components/
        └── HelloWorld.vue
```

## Próximos Pasos
- Continuar con el desarrollo de la aplicación Vue
- Agregar nuevos componentes según sea necesario
- Implementar funcionalidades específicas del proyecto
