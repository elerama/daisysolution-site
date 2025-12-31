'use client'

import { clsx } from 'clsx'
import Image from 'next/image'

/**
 * Logo Daisy Solution
 *
 * Props:
 * - className: CSS classes for sizing (e.g., "h-9", "h-12")
 * - variant: 'full' (with text) | 'icon' (solo simbolo) | 'with-by' (+ by Elettrorama)
 * - color: 'brand' (default) | 'white' (per sfondi scuri)
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
    color?: 'brand' | 'white'
}) {
    // Seleziona il path del logo in base al colore
    // NOTA: Quando disponibile, aggiungere /public/daisy-logo-white.png e cambiare il fallback
    // Per ora usa sempre il logo brand (colore originale) finché l'asset bianco non è disponibile
    const logoSrc = '/daisy-logo.png' // TODO: color === 'white' ? '/daisy-logo-white.png' : '/daisy-logo.png'

    if (variant === 'icon') {
        return (
            <div className={clsx(className, 'flex items-center justify-center')}>
                <span className={clsx('text-2xl font-bold', color === 'white' ? 'text-white' : 'text-brand-primary')}>D</span>
            </div>
        )
    }

    if (variant === 'with-by') {
        return (
            <div className={clsx(className, 'flex flex-col')}>
                <Image
                    src={logoSrc}
                    alt="Daisy Solution"
                    width={200}
                    height={60}
                    className="h-8 w-auto"
                    priority
                />
                <span className={clsx('text-xs mt-0.5', color === 'white' ? 'text-gray-400' : 'text-gray-500')}>by Elettrorama</span>
            </div>
        )
    }

    // Default 'full' variant
    return (
        <Image
            src={logoSrc}
            alt="Daisy Solution"
            width={200}
            height={60}
            className={clsx(className, 'h-auto')}
            priority
        />
    )
}
