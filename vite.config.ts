import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

const siteUrl = 'https://www.clarvionhealth.com';
const pageMetadata = JSON.parse(
  await readFile(new URL('./seo-pages.json', import.meta.url), 'utf8'),
) as Record<string, { title: string; description: string }>;

function escapeAttribute(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
}

function staticRouteMetadata() {
  return {
    name: 'static-route-metadata',
    apply: 'build' as const,
    async closeBundle() {
      const template = await readFile(resolve('dist/index.html'), 'utf8');

      for (const [route, metadata] of Object.entries(pageMetadata)) {
        if (route === '/') continue;
        const canonicalUrl = `${siteUrl}${route}`;
        const title = escapeAttribute(metadata.title);
        const description = escapeAttribute(metadata.description);
        const html = template
          .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
          .replace(/(<meta name="description" content=")[^"]*(" \/>)/, `$1${description}$2`)
          .replace(/(<link rel="canonical" href=")[^"]*(" \/>)/, `$1${canonicalUrl}$2`)
          .replace(/(<meta property="og:url" content=")[^"]*(" \/>)/, `$1${canonicalUrl}$2`)
          .replace(/(<meta property="og:title" content=")[^"]*(" \/>)/, `$1${title}$2`)
          .replace(/(<meta property="og:description" content=")[^"]*(" \/>)/, `$1${description}$2`)
          .replace(/(<meta name="twitter:title" content=")[^"]*(" \/>)/, `$1${title}$2`)
          .replace(/(<meta name="twitter:description" content=")[^"]*(" \/>)/, `$1${description}$2`);
        const pageDirectory = resolve('dist', route.slice(1));
        await mkdir(pageDirectory, { recursive: true });
        await writeFile(resolve(pageDirectory, 'index.html'), html);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), staticRouteMetadata()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
