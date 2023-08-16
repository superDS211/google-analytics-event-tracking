This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Google analytics 
This project uses google analytics 4 to track user behavior. To enable it in your own app please
follow these steps :
1. Create a new property under "Admin" > "Property". Give it any name that
suits you best (e.g., 'My App').
2. Go into the settings of this newly created property ("Admin" -> "Settings"). Scroll
down until you find the section called "Tracking Info", where you will need two pieces of information from
here on referred to as tracking ID/ streamId   & Web Property Tracking Code respectively.
3. Copy both values and paste them inside .env files of all environments (development , staging
etc.)
4. wanted to create a event you can use the labiary react.ga / or with the gtag
5. Now create a folder with name Utils/gtag.js
6. Inside a gtage.js you can create a event function and call on every file: remember every event must have different name for the idenitfy the click or pages
