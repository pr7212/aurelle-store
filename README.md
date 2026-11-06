# AURELLE — Jewellery E-Commerce Store

**Elegance in every detail.**

AURELLE is a modern, responsive jewellery e-commerce application built as a frontend development take-home project for Nuvana HQ.

The application provides a premium shopping experience where customers can explore jewellery collections, search and filter products, view their shopping bag and proceed through a mock checkout.

## Overview

AURELLE focuses on minimalist design, responsive layouts, reusable Vue components and a smooth shopping experience.

### Tech Stack

| Technology   | Purpose                      |
| ------------ | ---------------------------- |
| Nuxt 3       | Frontend framework           |
| Vue 3        | Component-based UI           |
| TypeScript   | Type safety                  |
| Tailwind CSS | Styling                      |
| Supabase     | Planned backend and database |
| PostgreSQL   | Planned product database     |
| Vercel       | Deployment                   |

## Features

### Implemented

- Responsive jewellery storefront.
- Premium minimalist user interface.
- Reusable Vue components.
- Product catalogue.
- Product search.
- Category filtering.
- Shopping cart functionality.
- Add and remove products.
- Update product quantities.
- Automatic cart subtotal calculation.
- Mock checkout.
- Page-specific SEO metadata for homepage and shopping cart.

### Planned

- Supabase database integration.
- Backend product API.
- Dynamic product detail pages.
- Persistent shopping cart.
- Product structured data (JSON-LD).
- Open Graph metadata across all pages.
- XML sitemap.
- Optimized image delivery.
- Live deployment.

## Project Structure

```text
aurelle-store/
├── assets/
│   └── css/
│       └── main.css
├── components/
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   └── ProductCard.vue
├── composables/
│   └── useCart.ts
├── layouts/
│   └── default.vue
├── pages/
│   ├── index.vue
│   ├── cart.vue
│   └── products/
│       └── [slug].vue
├── server/
│   └── api/
│       └── products/
├── public/
├── nuxt.config.ts
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (compatible with the installed Nuxt 3 release).
- npm.
- Git.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate into the project

```bash
cd aurelle-store
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Key Technical Decisions

**1. Nuxt 3**

Nuxt provides file-based routing, server-side rendering capabilities, automatic imports and a structured application architecture.

**2. TypeScript**

TypeScript helps maintain predictable data structures, improves code readability and catches potential errors during development.

**3. Tailwind CSS**

Tailwind enables consistent styling, responsive layouts and faster UI development.

**4. Reusable components**

The header, footer and product cards are separated into reusable components to improve maintainability and reduce duplication.

**5. Cart composable**

The shopping cart is managed using Vue's reactive state through Nuxt's `useState`, allowing cart information to be shared across application components.

**6. SEO**

Nuxt SEO utilities are used to define page-specific titles and descriptions. Further SEO improvements are planned, including structured product data, Open Graph tags and a sitemap.

## What I Would Improve With More Time

- Connect Supabase for persistent product storage.
- Implement server-side product endpoints.
- Complete dynamic product detail pages.
- Persist cart data across browser sessions.
- Add proper checkout and order management.
- Implement Product JSON-LD structured data.
- Generate an XML sitemap.
- Optimize and serve product images efficiently.
- Add automated component and integration tests.
- Improve accessibility and performance.
- Deploy the application and configure production environment variables.

## Current Project Status

AURELLE currently has a functional frontend prototype with product browsing, filtering, search and shopping cart interactions.

Backend integration, persistent storage, dynamic product pages, complete SEO implementation and production deployment remain part of the development roadmap.

## Author

**Isaac Ranah**

GitHub: https://github.com/pr7212

Portfolio: https://prince-ruddy-six.vercel.app/

---

_Built with Nuxt 3, Vue 3, TypeScript and Tailwind CSS._
