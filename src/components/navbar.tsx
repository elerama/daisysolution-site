'use client'

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

// Menu structure: Daisy Solution
// Simple links (no dropdown)
const simpleLinks = [
    { href: '/customer-stories', label: 'Customer Stories' },
    { href: '/prezzi', label: 'Prezzi' },
    { href: '/contatti', label: 'Contatti' },
]

// Dropdown menu items
const dropdownMenus = {
    prodotto: {
        label: 'Prodotto',
        sections: [
            {
                title: 'Gestione Negozio',
                links: [
                    { href: '/prodotto/punto-vendita', label: 'Punto Vendita' },
                    { href: '/prodotto/magazzino', label: 'Magazzino' },
                    { href: '/prodotto/e-commerce', label: 'E-commerce' },
                ],
            },
            {
                title: 'Business Intelligence',
                links: [
                    { href: '/prodotto/analytics', label: 'Analytics & Report' },
                    { href: '/prodotto/crm', label: 'CRM Clienti' },
                ],
            },
        ],
    },
    settori: {
        label: 'Settori',
        links: [
            { href: '/settori/elettronica', label: 'Elettronica di Consumo' },
            { href: '/settori/telefonia', label: 'Telefonia' },
            { href: '/settori/informatica', label: 'Informatica' },
            { href: '/settori/piccoli-elettrodomestici', label: 'Piccoli Elettrodomestici' },
        ],
    },
    tecnologie: {
        label: 'Tecnologie',
        links: [
            { href: '/tecnologie/cloud', label: 'Cloud & Sicurezza' },
            { href: '/tecnologie/integrazioni', label: 'Integrazioni' },
            { href: '/tecnologie/api', label: 'API & Sviluppo' },
        ],
    },
    risorse: {
        label: 'Risorse',
        links: [
            { href: '/risorse/documentazione', label: 'Documentazione' },
            { href: '/risorse/guide', label: 'Guide & Tutorial' },
            { href: '/risorse/faq', label: 'FAQ' },
            { href: '/risorse/supporto', label: 'Supporto Tecnico' },
        ],
    },
}

function DesktopNav() {
    return (
        <nav className="relative hidden lg:flex lg:items-center lg:gap-2">
            {/* Dropdown menus: Prodotto, Settori, Tecnologie, Risorse */}
            {Object.entries(dropdownMenus).map(([key, menu]) => (
                <PlusGridItem key={key} className="relative flex">
                    <Link
                        href="#"
                        className="flex items-center gap-1 px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5"
                    >
                        {menu.label}
                        <span className="text-gray-500 text-sm">▾</span>
                    </Link>
                    {/* TODO SITE-STEP 1: Add flyout dropdown component here */}
                </PlusGridItem>
            ))}

            {/* Simple links: Customer Stories, Prezzi, Contatti */}
            {simpleLinks.map(({ href, label }) => (
                <PlusGridItem key={href} className="relative flex">
                    <Link
                        href={href}
                        className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5"
                    >
                        {label}
                    </Link>
                </PlusGridItem>
            ))}

            {/* CTA Button: Richiedi Demo */}
            <PlusGridItem className="relative flex">
                <Link
                    href="/richiedi-demo"
                    className="btn-primary px-6 py-3 text-base font-medium"
                >
                    Richiedi Demo
                </Link>
            </PlusGridItem>
        </nav>
    )
}

function MobileNavButton() {
    return (
        <DisclosureButton
            className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
            aria-label="Open main menu"
        >
            <Bars2Icon className="size-6" />
        </DisclosureButton>
    )
}

function MobileNav() {
    return (
        <DisclosurePanel className="lg:hidden">
            <div className="flex flex-col gap-6 py-4">
                {/* Dropdown menus */}
                {Object.entries(dropdownMenus).map(([key, menu], idx) => (
                    <motion.div
                        initial={{ opacity: 0, rotateX: -90 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        transition={{
                            duration: 0.15,
                            ease: 'easeInOut',
                            rotateX: { duration: 0.3, delay: idx * 0.1 },
                        }}
                        key={key}
                    >
                        <div className="text-base font-medium text-gray-950">{menu.label}</div>
                        {/* TODO SITE-STEP 1: Add mobile expandable submenu */}
                    </motion.div>
                ))}

                {/* Simple links */}
                {simpleLinks.map(({ href, label }, linkIndex) => (
                    <motion.div
                        initial={{ opacity: 0, rotateX: -90 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        transition={{
                            duration: 0.15,
                            ease: 'easeInOut',
                            rotateX: { duration: 0.3, delay: (Object.keys(dropdownMenus).length + linkIndex) * 0.1 },
                        }}
                        key={href}
                    >
                        <Link href={href} className="text-base font-medium text-gray-950">
                            {label}
                        </Link>
                    </motion.div>
                ))}

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, rotateX: -90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{
                        duration: 0.15,
                        ease: 'easeInOut',
                        rotateX: { duration: 0.3, delay: (Object.keys(dropdownMenus).length + simpleLinks.length) * 0.1 },
                    }}
                >
                    <Link href="/richiedi-demo" className="btn-primary block text-center px-6 py-3 text-base font-medium">
                        Richiedi Demo
                    </Link>
                </motion.div>
            </div>
            <div className="absolute left-1/2 w-screen -translate-x-1/2">
                <div className="absolute inset-x-0 top-0 border-t border-black/5" />
                <div className="absolute inset-x-0 top-2 border-t border-black/5" />
            </div>
        </DisclosurePanel>
    )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
    return (
        <Disclosure as="header" className="pt-12 sm:pt-16">
            <PlusGrid>
                <PlusGridRow className="relative flex justify-between">
                    <div className="relative flex gap-6">
                        <PlusGridItem className="py-3">
                            <Link href="/" title="Home">
                                <Logo className="h-9" />
                            </Link>
                        </PlusGridItem>
                        {banner && (
                            <div className="relative hidden items-center py-3 lg:flex">
                                {banner}
                            </div>
                        )}
                    </div>
                    <DesktopNav />
                    <MobileNavButton />
                </PlusGridRow>
            </PlusGrid>
            <MobileNav />
        </Disclosure>
    )
}
