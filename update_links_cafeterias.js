const fs = require('fs');
const files = [
  'public/index.html',
  'public/shop.html',
  'public/camisetas.html',
  'public/material.html',
  'public/packs.html',
  'public/elaboracion.html',
  'public/login.html',
  'public/register.html'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<a href="#" class="hover:text-primary transition-colors">CAFETERÍAS<\/a>/g, '<a href="/cafeterias.html" class="hover:text-primary transition-colors">CAFETERÍAS</a>');
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
