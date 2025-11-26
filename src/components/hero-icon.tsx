/**
 * HeroIcon - Utility component per rendering Heroicons dinamiche
 * Usato per convertire nomi icona in componenti SVG
 */

import * as OutlineIcons from '@heroicons/react/24/outline'

interface HeroIconProps {
  name: string
  className?: string
}

/**
 * Renderizza una Heroicon dal nome stringa
 * Fallback: ritorna null se l'icona non esiste
 * @example <HeroIcon name="ShoppingCartIcon" className="w-6 h-6" />
 */
export function HeroIcon({ name, className }: HeroIconProps) {
  const Icon = OutlineIcons[name as keyof typeof OutlineIcons] as React.ComponentType<{ className?: string }>

  if (!Icon) {
    console.warn(`HeroIcon: Icon "${name}" not found in @heroicons/react/24/outline`)
    return null
  }

  return <Icon className={className} />
}

/**
 * Check se un nome icona esiste nel pacchetto Heroicons
 */
export function isValidHeroIcon(name: string): boolean {
  return name in OutlineIcons
}
