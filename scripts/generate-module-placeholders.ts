/**
 * Script per generare placeholder immagini moduli
 * Usa SVG per creare PNG senza dipendenze esterne
 */

import * as fs from 'fs'
import * as path from 'path'

// Definizione moduli con nomi e icone
const modules = [
  // Tier 1
  { slug: 'vendite-cassa', name: 'Vendite & Cassa', icon: '🛒', color: '#10B981' },
  { slug: 'magazzino', name: 'Magazzino Multi-Sede', icon: '📦', color: '#10B981' },
  { slug: 'acquisti-edi', name: 'Acquisti & EDI', icon: '🏭', color: '#10B981' },
  { slug: 'banca-dati-eldomcat', name: 'Banca Dati & Eldomcat', icon: '🗄️', color: '#EC4899' },
  { slug: 'ecommerce', name: 'E-commerce B2B/B2C', icon: '🛍️', color: '#8B5CF6' },
  { slug: 'fastlabel', name: 'Cartelli Fastlabel', icon: '🏷️', color: '#8B5CF6' },
  { slug: 'riparazioni', name: 'Riparazioni & Laboratorio', icon: '🔧', color: '#F59E0B' },
  { slug: 'promozioni', name: 'Promozioni Multi-Canale', icon: '🎯', color: '#8B5CF6' },
  { slug: 'raee', name: 'RAEE & Compliance', icon: '♻️', color: '#F59E0B' },
  { slug: 'liste-regalo', name: 'Liste Regalo', icon: '🎁', color: '#F59E0B' },
  { slug: 'statistiche-bi', name: 'Statistiche & BI', icon: '📊', color: '#3B82F6' },
  { slug: 'webservice', name: 'Import/Export & Webservice', icon: '🔄', color: '#EC4899' },
  // Tier 2
  { slug: 'contabilita', name: 'Contabilità', icon: '💰', color: '#6366F1' },
  { slug: 'contratti', name: 'Contratti', icon: '📝', color: '#6366F1' },
  { slug: 'comunicazioni', name: 'Comunicazioni', icon: '📧', color: '#6366F1' },
  { slug: 'garanzie', name: 'Garanzie', icon: '🛡️', color: '#F59E0B' },
  { slug: 'navigator', name: 'Navigator', icon: '🧭', color: '#3B82F6' },
  { slug: 'ordini', name: 'Ordini', icon: '📋', color: '#10B981' },
  { slug: 'planning', name: 'Planning', icon: '📈', color: '#3B82F6' }
]

// Funzione per creare SVG placeholder
function createPlaceholderSVG(
  moduleSlug: string,
  moduleName: string,
  icon: string,
  color: string,
  type: 'hero' | 'features'
): string {
  const title = type === 'hero' ? 'INTERFACCIA PRINCIPALE' : 'DETTAGLIO FUNZIONALITA'
  const gradientId = `grad-${moduleSlug}-${type}` // ID univoco per ogni SVG

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1216" height="768" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#0081BE;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0066A1;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background gradient -->
  <rect width="1216" height="768" fill="url(#${gradientId})" rx="16"/>

  <!-- Icon container with geometric shape instead of emoji -->
  <circle cx="608" cy="320" r="120" fill="white" opacity="0.15"/>
  <circle cx="608" cy="320" r="90" fill="white" opacity="0.25"/>
  <circle cx="608" cy="320" r="60" fill="white" opacity="0.35"/>

  <!-- Module name -->
  <text x="608" y="480" font-size="48" font-weight="bold" text-anchor="middle" fill="white" font-family="Arial, sans-serif">
    SCREENSHOT TEMPORANEO
  </text>

  <!-- Type indicator -->
  <text x="608" y="530" font-size="32" text-anchor="middle" fill="white" opacity="0.8" font-family="Arial, sans-serif">
    ${moduleName}
  </text>

  <text x="608" y="565" font-size="24" text-anchor="middle" fill="white" opacity="0.7" font-family="Arial, sans-serif">
    ${title}
  </text>

  <!-- Footer note -->
  <text x="608" y="720" font-size="18" text-anchor="middle" fill="white" opacity="0.6" font-family="Arial, sans-serif">
    Da sostituire con UI reale del modulo
  </text>

  <!-- Decorative elements -->
  <rect x="40" y="40" width="1136" height="688" fill="none" stroke="white" stroke-width="2" opacity="0.2" rx="12"/>
</svg>`
}

// Main execution
async function generatePlaceholders() {
  const outputDir = path.join(process.cwd(), 'public', 'screenshots', 'moduli')

  // Crea directory se non esiste
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
    console.log(`✓ Created directory: ${outputDir}`)
  }

  let count = 0

  for (const module of modules) {
    // Genera hero placeholder
    const heroSVG = createPlaceholderSVG(module.slug, module.name, module.icon, module.color, 'hero')
    const heroPath = path.join(outputDir, `${module.slug}-hero.svg`)
    fs.writeFileSync(heroPath, heroSVG)
    count++

    // Genera features placeholder
    const featuresSVG = createPlaceholderSVG(module.slug, module.name, module.icon, module.color, 'features')
    const featuresPath = path.join(outputDir, `${module.slug}-features.svg`)
    fs.writeFileSync(featuresPath, featuresSVG)
    count++

    console.log(`✓ Generated placeholders for: ${module.name}`)
  }

  console.log(`\n✓ Successfully generated ${count} placeholder images (${modules.length} modules × 2)`)
  console.log(`  Location: ${outputDir}`)
  console.log(`\n  Note: SVG files can be used directly in Next.js <Image> components`)
  console.log(`  or converted to PNG using tools like Inkscape or ImageMagick if needed.`)
}

// Execute
generatePlaceholders().catch(console.error)
