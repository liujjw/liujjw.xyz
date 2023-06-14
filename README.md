# Dev server
This portfolio is built with **Next.js** and a library called [Nextra](https://nextra.vercel.app/). For dev, `npm install && npm run dev`. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Deployment config
Serverless deploy on Netlify with Netlify DNS nameservers (domain bought on Google Domains) hooked up to the Github repo, and ImprovMX mail forwarding and MX records (Netlify MX records don't have forwarding). Google workspaces next. Fontawesome kit.

## Additional configuration
1. Update your name in `theme.config.js` or change the footer.
1. Update your name and site URL for the RSS feed in `scripts/gen-rss.js`.
1. Update the meta tags in `pages/_document.tsx`.
1. Update the posts inside `pages/posts/*.md` with your own content.

