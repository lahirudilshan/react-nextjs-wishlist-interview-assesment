# Wishlist - Interview Assessment

![N|Solid](https://github.com/lahirudilshan/react-nextjs-wishlist-interview-assesment/blob/master/materials/images/logo.png)

**Wishlist** is simple NextJs (React) base web application which is develop for react interview  assessment 
## Features

- Landing page with awesome products
- User can add their favorite products to the wishlist

## Framwork and plugins

This application used new technologies for building perfect applications which industry are used.

| Name    | Purpose      |Link |
| ------    |-------------|------ |
| Next JS  | Building Application| https://nextjs.org/ |
| Tailwind css + Sass | UI designing | https://tailwindcss.com/ |
| Redux + Redux Saga | State and Side effects Management| https://redux.js.org/ |
| Prisma + MySql  | TypeORM with Database| https://www.prisma.io/ |
| Axios  | Http client for call APIs| https://axios-http.com/docs/intro |

### Brief Introduction of used technology

- ```NextJS``` is Most popular and powerful Single Page Application (SPA) framework based on React
- ```Tailwind CSS``` is very light-weight utility first CSS Framework
- ```Redux``` is Most Popular State management plugin
- ```Prisma``` is TypeScript ORM for Database management and it has powerful features like Migrations, Seeder and ORM 

## Installation

- Must have installed [Node.js](https://nodejs.org/) v14+ to run the application.
- Must have installed MySql

for install application's dependencies
run

```cmd
yarn install
```

Create a database for holding system table called ```wishlist```
and change MySql Connection in .env files then run below command for migrating application tables

```cmd
yarn prisma migrate
```

Run below command for seeder default data to the tables

```cmd
yarn prisma db seed
```

after installed required dependencies serve the application by running
```cmd
yarn dev
```

after run above command visit to ```http://localhost:3000``` in your browser to see the result.

<br>
<br>

## Application Screenshots - Desktop View
### Products - Landing Page

![N|Solid](https://github.com/lahirudilshan/react-nextjs-wishlist-interview-assesment/blob/dev/materials/application-screenshots/product-landing-page.png)

<br>
<br>

### Products - Landing Page With Hearts

![N|Solid](https://github.com/lahirudilshan/react-nextjs-wishlist-interview-assesment/blob/dev/materials/application-screenshots/product-landing-page-with-heart.png)

<br>
<br>

### Wishlist - No Product in Wishlist

![N|Solid](https://github.com/lahirudilshan/react-nextjs-wishlist-interview-assesment/blob/dev/materials/application-screenshots/no-products-in-wishlist.png)

<br>
<br>

### Wishlist - with favorite Products 

![N|Solid](https://github.com/lahirudilshan/react-nextjs-wishlist-interview-assesment/blob/dev/materials/application-screenshots/wishlist.png)

## Application Screenshots - Mobile View

### Products - Landing Page

![N|Solid](https://github.com/lahirudilshan/react-nextjs-wishlist-interview-assesment/blob/master/materials/application-screenshots/mobile-view/product-landing-page-mobile.png)

<br>
<br>

### Wishlist - with favorite Products 

![N|Solid](https://github.com/lahirudilshan/react-nextjs-wishlist-interview-assesment/blob/master/materials/application-screenshots/mobile-view/wishlist-with-product-mobile.png)


<br>
<br>

### Wishlist - with no Products 

![N|Solid](https://github.com/lahirudilshan/react-nextjs-wishlist-interview-assesment/blob/master/materials/application-screenshots/mobile-view/wishlist-with-no-product-mobile.png)

<br>
<br>
## Developer

[Lahiru Dilshan (Senior Software Engineer - Fullstack)](https://www.linkedin.com/in/lahiru-dilshan-408ab3108/)

---
<br>
## License

MIT