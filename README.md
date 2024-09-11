This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Setup a new Prisma project(put "npx" at beginning)
  $ prisma init

  Generate artifacts (e.g. Prisma Client)
  $ prisma generate

  Browse your data
  $ prisma studio

  Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  $ prisma migrate dev

  Pull the schema from an existing database, updating the Prisma schema
  $ prisma db pull

  Push the Prisma schema state to the database
  $ prisma db push
---------------------------------------
*Work with prisma and Postgres db 

npx create-next-app@latest

npm i prisma 

npx prisma init --datasourse-provider sqlite

npx prisma migrate dev --name init

npx prisma db push (it push the Model into the database)

npx prisma studio  (see the database )
--------------------------------------
 where: {
    title: {
      contains: "First"   //gt: "5" // endsWith: "Post" // 
    }
  }
---
const post = await prisma.post.findUnique({
  where: {
   title: {
    endsWith: "Post"
   }
  },
  orderBy: {
    createdAt: "desc"
  },
  select: {
    id: true,
    title: true,
    slug: true,
  },
  take: 10,         //pagination // its take only one row // search pagination in prisma  
  skip: 10,
})


prisma.schema 
author User @relation(fields: [authorId], references: [id])
  authorId String

  post Post[]

prisma >seed.ts (https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding)
  mode_module>.prisma> index.d.ts == 2949 PostCreateInput


package.json (add) =>

"prisma": {
  "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
},

install-> npm i ts-node -D
          npx prisma db seed
* see prisma cache 

vercel deploying :
1) storage : postgres create 
2) goto  prisma copy and pest in prisma schema 
3)  goto => .env.local & copy Snippet(prisma) & pest in .env (local file)file   
npx prisma db push
npx prisma migrate dev
4) package.json
"scripts": {
  "postinstall": "prisma generate && prisma migrate deploy"
}

now add into git hub
vercel goto project and give link of github of your project goto storage and connect with postgres 






