This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Modern E-Commerce Frontend (Next.js)

A modern e-commerce frontend application focusing on interactive UI,
responsive layout, and scalable component architecture.

This project emphasizes real-world front-end challenges such as
overlay management, complex layouts, and cross-component state coordination.

## Preview

![Home](./screenShots/home.png)
![Hover Navigation](./screenShots/hoverNavigation.png)
![Product Page](./screenShots/productPage.png)

<details>
  <summary>More Screens</summary>

  ![Collection Page](./screenShots/collectionPage.png)
  ![Shopping Cart](./screenShots/shoppingCart.png)
</details>

## Features

- Animated category drawer with overlay and background lock
- Interactive product cards with hover effects
- Image carousel with navigation controls
- Responsive grid and layout system
- Click-through handling for layered absolute elements
- Cross-component UI state management using React Context

## Architectural Notes

- Uses Next.js App Router for scalable routing structure
- Drawer state shared across components via React Context
- Carefully manages z-index and pointer events to avoid interaction conflicts
- Avoids layout collapse by explicitly handling flex-shrink and absolute positioning
- Ensures hydration consistency by avoiding non-deterministic render logic

## Future Improvements
- SEO metadata via Next.js `generateMetadata`
- Product data integration from backend APIs
- Cart and checkout flow
- Accessibility improvements (ARIA, keyboard navigation)
