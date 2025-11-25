'use client'

import { clsx } from 'clsx'
import Image from 'next/image'

/**
 * Logo Daisy Solution
 *
 * Props:
 * - className: CSS classes for sizing (e.g., "h-9", "h-12")
 * - variant: 'full' (with text) | 'icon' (solo simbolo) | 'with-by' (+ by Elettrorama)
 * - color: 'brand' (blu) | 'white' | 'inherit'
 *
 * TODO: Sostituire /placeholders/logo-daisysolution.svg con logo DaisySolution.png reale
 * Asset richiesto: logo DaisySolution.png
 */

// Mark is a simple icon version for compatibility with template components
export function Mark({ className }: { className?: string }) {
    return (
        <div className={clsx(className, 'text-brand-primary font-bold flex items-center justify-center')}>
            <span className="text-2xl">D</span>
        </div>
    )
}

export function Logo({
    className,
    variant = 'full',
}: {
    className?: string
    variant?: 'full' | 'icon' | 'with-by'
    // color prop mantenuto per retrocompatibilità, verrà usato quando il logo reale sarà disponibile
    color?: 'brand' | 'white' | 'inherit'
}) {
    // TODO: Quando il logo reale sarà disponibile, sostituire il placeholder
    // con: src="/logo-daisysolution.png"

    if (variant === 'icon') {
        return (
            <div className={clsx(className, 'flex items-center justify-center')}>
                <span className="text-2xl font-bold text-brand-primary">D</span>
            </div>
        )
    }

    if (variant === 'with-by') {
        return (
            <div className={clsx(className, 'flex flex-col')}>
                <Image
                    src="/placeholders/logo-daisysolution.svg"
                    alt="Daisy Solution"
                    width={200}
                    height={60}
                    className="h-9 w-auto"
                    priority
                />
                <span className="text-xs text-gray-500 mt-0.5">by Elettrorama</span>
            </div>
        )
    }

    // Default 'full' variant
    return (
        <Image
            src="/placeholders/logo-daisysolution.svg"
            alt="Daisy Solution"
            width={200}
            height={60}
            className={clsx(className, 'w-auto')}
            priority
        />
    )
}

/**
 * TODO: Quando logo SVG reale sarà disponibile, sostituire con struttura tipo:
 *
 * export function Logo({ className, variant, color }: LogoProps) {
 *   return (
 *     <svg
 *       width={variant === 'icon' ? 40 : 180}
 *       height={40}
 *       viewBox="0 0 180 40"
 *       className={clsx(className, colorClass)}
 *       fill="currentColor"
 *     >
 *       <path d="M..." />  // Logo paths
 *       {variant === 'with-by' && (
 *         <text x="..." y="..." fontSize="8">by Elettrorama</text>
 *       )}
 *     </svg>
 *   )
 * }
 */
