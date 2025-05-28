<p align="center">
  <a href="https://www.medusajs.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    </picture>
  </a>
</p>
<h1 align="center">
  Medusa
</h1>

<h4 align="center">
  <a href="https://docs.medusajs.com">Documentation</a> |
  <a href="https://www.medusajs.com">Website</a>
</h4>

<p align="center">
  Building blocks for digital commerce
</p>
<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
    <a href="https://www.producthunt.com/posts/medusa"><img src="https://img.shields.io/badge/Product%20Hunt-%231%20Product%20of%20the%20Day-%23DA552E" alt="Product Hunt"></a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
</p>

# 🧠 Manual de Instalación – Proyecto Medusa JS con Gráficas para Administrador

**UNIVERSIDAD CENTROAMERICANA “JOSÉ SIMEÓN CAÑAS”**  
Facultad de Ingeniería y Arquitectura  
Aplicaciones de Código Abierto – Ciclo 01/2025  

**Grupo 06**

📅 Antiguo Cuscatlán, lunes 26 de mayo de 2025  

---

## 👥 Integrantes

| Nombre                             | Carné     | Rol           |
|------------------------------------|-----------|----------------|
| Orellana Vividor, Gerardo Andre    | 00053520  | Product Owner  |
| Paz Escobar, Christian Alejandro   | 00132720  | Scrum Master   |
| Rodríguez Rodríguez, David Neftalí | 00218621  | Tech Lead      |
| Alas Moscoso, Noé Bladimir         | 00262020  | Developer      |
| Zacatales López, César Adonay      | 00223021  | Developer      |

---

## 🚀 MEDUSAJS V 2.8.3

---

## 📚 Índice

1. [Requisitos Previos](#1-requisitos-previos)  
2. [Clonación del Proyecto](#2-clonación-del-proyecto)  
   - [Pasos para clonar el repositorio](#21-pasos-para-clonar-el-repositorio)  
3. [Instalación de Dependencias](#3-instalación-de-dependencias)  
4. [Configuración de Variables de Entorno (.env)](#4-configuración-de-variables-de-entorno-env)  
5. [Migraciones y Seed de Datos](#5-migraciones-y-seed-de-datos)  
6. [Inicio del Servidor](#6-inicio-del-servidor)  
7. [Acceso al Panel de Administración con Gráficas](#7-acceso-al-panel-de-administración-con-gráficas)  
8. [Endpoints Nuevos para Gráficas](#8-endpoints-nuevos-para-gráficas)  
9. [Scripts Útiles del Proyecto](#9-scripts-útiles-del-proyecto)  

---

## 1. Requisitos Previos

Para comenzar a utilizar esta versión personalizada de MedusaJS, que incluye mejoras en el panel de administrador con gráficas detalladas para análisis de mercado, es necesario contar con el siguiente entorno instalado:

- **Node.js** (versión 18 o superior)  
- **npm** (versión 9 o superior)  
- **PostgreSQL** (versión 14 o superior)  
- **Redis** (opcional pero recomendado)

---

## 2. Clonación del Proyecto

Para obtener el código fuente del sistema, se utiliza Git junto con GitHub.

Repositorio del proyecto:  
👉 https://github.com/CesarZacatales/Proyecto_ACA.git

### 2.1 Pasos para clonar el repositorio

Asegúrese de tener instalado Git:

```bash
git --version
```

Clonar el repositorio:

```bash
git clone https://github.com/CesarZacatales/Proyecto_ACA.git
cd Proyecto_ACA
```

Esto descargará todos los archivos del proyecto y su historial de versiones.

---

## 3. Instalación de Dependencias

Dentro de la carpeta del proyecto, ejecuta:

```bash
npm install
```

Este comando instalará todas las bibliotecas y módulos definidos en `package.json`.

---

## 4. Configuración de Variables de Entorno (.env)

> Verifica que `DATABASE_URL` esté correctamente configurado en el archivo `.env`.

---

## 5. Migraciones y Seed de Datos

Antes de iniciar el sistema, es necesario aplicar las migraciones a la base de datos.

```bash
npm run medusa migrations run
```
---

## 6. Inicio del Servidor

Para iniciar el backend del sistema:

```bash
npm run dev
```

Accede al sistema desde:  
👉 http://localhost:9000/app

---

## 7. Acceso al Panel de Administración con Gráficas

Inicia sesión con las siguientes credenciales:

- **Email:** `admin@medusajs.com`  
- **Password:** `supersecret`

Desde este panel, los administradores pueden visualizar gráficas detalladas para análisis de mercado:

---

## 8. Endpoints Nuevos para Gráficas

Se han creado endpoints REST personalizados para alimentar las gráficas del administrador:

| Método | Endpoint                    | Descripción              |
|--------|-----------------------------|--------------------------|
| GET    | `/admin/routes/region_order`| Ordenes por region       |
| GET    | `/admin/routes/collection_product`| Productos por colección |
| GET    | `/admin/routes/client_order`| Ordenes por cliente |

---

## 9. Scripts Útiles del Proyecto

| Comando         | Descripción                              |
|-----------------|------------------------------------------|
| `npm run start` | Inicia el backend en modo producción     |
| `npm run dev`   | Inicia el backend en modo desarrollo     |
| `npm run build` | Compila el proyecto                      |

---

✅ ¡Listo! Con estos pasos deberías poder levantar y probar el sistema completo de MedusaJS con panel de gráficas administrativas.
