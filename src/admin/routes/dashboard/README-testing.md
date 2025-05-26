# Evidencia de Pruebas Unitarias y Cobertura – Dashboard Medusa.js

## 🧪 Objetivo

El objetivo de las pruebas realizadas es asegurar la validez de la lógica incorporada en el nuevo módulo de dashboard del sistema Medusa.js.  
Se han implementado pruebas unitarias sobre todas las funciones que contienen lógica de negocio significativa: filtrado y ordenamiento de datos para su posterior visualización en gráficas.

---

## ✅ ¿Qué se probó?

Se realizaron pruebas unitarias sobre las siguientes funciones exportadas desde `utils.ts`:

- `SortByOrdersDesc`: Ordena una lista de clientes según la cantidad de pedidos de forma descendente.
- `SortProductsDesc`: Ordena una lista de colecciones según la cantidad de productos asociados.
- `SortByRegionOrders10`: Filtra regiones que tienen menos de 10 órdenes.

Estas funciones fueron extraídas desde el componente `page.tsx` para facilitar su cobertura y prueba independiente, siguiendo buenas prácticas de separación de lógica y presentación.

---

## 📊 Cobertura de pruebas

Se obtuvo un **100% de cobertura** en el módulo `utils.ts`, incluyendo:

- **Statements**
- **Branches**
- **Functions**
- **Lines**

Para mantener el enfoque y la claridad, se excluyeron del análisis de cobertura los siguientes elementos:

- `GananciasChart.tsx`: componente visual con datos estáticos y sin lógica de negocio
- `ProductWidget.tsx`: componente de interfaz sin interacción ni transformación de datos
- Carpetas `/api/` y `/integration-tests/`: relacionadas con pruebas de integración o lógica backend

---

## ❌ ¿Qué no se probó y por qué?

- **Llamadas `fetch` a la API**: no se testean en pruebas unitarias, ya que representan efectos secundarios que deben ser validados en pruebas de integración o extremo a extremo.
- **Componentes visuales sin lógica propia**: se consideran fuera del alcance de las pruebas unitarias, ya que no contienen decisiones lógicas que justificarían cobertura.

---

## ⚙️ Configuración Jest aplicada

```js
collectCoverageFrom: [
  "src/admin/routes/dashboard/utils.ts",
  "!src/admin/routes/dashboard/components/GananciasChart.tsx",
  "!src/widgets/ProductWidget.tsx",
  "!src/api/**",
  "!**/integration-tests/**",
  "!**/node_modules/**",
]
