'use client'

import { clsx } from 'clsx'

/**
 * Logo Daisy Solution
 *
 * Props:
 * - className: CSS classes for sizing (e.g., "h-9", "h-12")
 * - variant: 'full' (with text) | 'icon' (solo simbolo) | 'with-by' (+ by Elettrorama)
 * - color: 'brand' (blu) | 'white' | 'inherit'
 *
 * TODO: Sostituire con SVG logo reale Daisy Solution quando disponibile
 * Placeholder: Testo "Daisy Solution" stilizzato
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
    color = 'brand',
}: {
    className?: string
    variant?: 'full' | 'icon' | 'with-by'
    color?: 'brand' | 'white' | 'inherit'
}) {
    // Color mappings
    const colorClass = {
        brand: 'text-brand-primary',
        white: 'text-white',
        inherit: '',
    }[color]

    // Temporary text-based logo until real SVG is available
    if (variant === 'icon') {
        return (
            <div
                className={clsx(
                    className,
                    colorClass,
                    'font-bold flex items-center justify-center',
                )}
            >
                <span className="text-2xl">D</span>
            </div>
        )
    }

    if (variant === 'with-by') {
        return (
            <div className={clsx(className, 'flex flex-col')}>
                <span
                    className={clsx(
                        colorClass,
                        'font-bold text-2xl tracking-tight leading-none',
                    )}
                >
                    Daisy Solution
                </span>
                <span className="text-xs text-gray-500 mt-0.5">by Elettrorama</span>
            </div>
        )
    }

    // Default 'full' variant
    return (
        <span
            className={clsx(
                className,
                colorClass,
                'font-bold text-2xl tracking-tight',
            )}
        >
            Daisy Solution
        </span>
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
