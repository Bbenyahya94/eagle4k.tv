import { cp, mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const routes = ['', 'subscriptions', 'reseller', 'custom-package-builder', 'apps-setup-guides', 'about', 'privacy', 'terms', 'refunds', 'copyright'];
await mkdir('dist', { recursive: true });
await cp('src/assets', 'dist/assets', { recursive: true });
for (const route of routes) {
  const dir = route ? join('dist', route) : 'dist';
  await mkdir(dir, { recursive: true });
  await cp('src/index.html', join(dir, 'index.html'));
}
await cp('src/404.html', 'dist/404.html');
await cp('src/robots.txt', 'dist/robots.txt');
await cp('src/sitemap.xml', 'dist/sitemap.xml');
console.log(`Built ${routes.length} routes.`);
