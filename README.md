# Dev server
This portfolio is built with **Next.js** (similar to `create-next-app`) and a library called [Nextra](https://nextra.vercel.app/) with the theme `nextra-theme-blog`. For dev, `npm install && npm run dev`. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Directory structure
Configure the Next config with `next.config.js` and Nextra theme with `theme.config.js`. The `public/` directory contains assets and resources like images. The files and directories in the `pages/` directory map to routes, so it's a router (like the newer `app/` directory in Next.js, which takes priority). For example, `pages/misc.mdx` maps to the route `liujjw.xyz/misc`. A directory like `pages/posts/` needs an `index.md`. The `pages/api` directory is mapped to `/api/*` for (same-origin by default) backend API calls for the front-end pages and are not mapped to frontend pages.

# Vercel AI SDK
The chatbot uses the [Vercel AI SDK](https://sdk.vercel.ai/docs/getting-started)

# Deployment config
Serverless deploy on Netlify with Netlify DNS nameservers (domain bought on Google Domains) hooked up to the Github repo, and ImprovMX mail forwarding and MX records (Netlify MX records don't have forwarding). Google workspaces next. Fontawesome kit.

## Additional configuration
1. Update your name in `theme.config.js` or change the footer.
1. Update your name and site URL for the RSS feed in `scripts/gen-rss.js`.
1. Update the meta tags in `pages/_document.tsx`.
1. Update the posts inside `pages/posts/*.md` with your own content.

