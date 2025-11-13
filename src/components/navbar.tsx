'use client'

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverPanel,
} from '@headlessui/react'
import { Bars2Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

// Menu structure: Daisy Solution
// Simple links (no dropdown)
const simpleLinks = [
    { href: '/prezzi', label: 'Prezzi' },
    { href: '/login', label: 'Area Riservata' },
]

// Dropdown menu items
const dropdownMenus = {
    prodotto: {
        label: 'Prodotto',
        sections: [
            {
                title: 'Panoramica',
                links: [
                    { href: '/prodotto', label: 'Overview Prodotto' },
                    { href: '/prodotto/moduli', label: 'Moduli & Funzionalità' },
                    { href: '/prodotto/integrazioni', label: 'Integrazioni' },
                ],
            },
            {
                title: 'Approfondimenti',
                links: [
                    { href: '/prodotto/perche-daisy', label: 'Perché Daisy Solution' },
                ],
            },
        ],
    },
    settori: {
        label: 'Settori',
        links: [
            { href: '/settori', label: 'Panoramica Settori' },
            { href: '/settori/catene', label: 'Catene & GDO' },
            { href: '/settori/distribuzione', label: 'Distribuzione Organizzata' },
            { href: '/settori/negozi-singoli', label: 'Negozi Singoli' },
            { href: '/settori/altri-settori', label: 'Altri Settori' },
        ],
    },
    tecnologie: {
        label: 'Tecnologie',
        links: [
            { href: '/tecnologie', label: 'Architettura & Stack' },
            { href: '/prodotto/integrazioni', label: 'Integrazioni' },
        ],
    },
    risorse: {
        label: 'Risorse',
        links: [
            { href: '/customer-stories', label: 'Customer Stories' },
            { href: '/blog', label: 'Blog' },
            { href: '/contatti', label: 'Contatti & Supporto' },
        ],
    },
}

function DesktopNav() {
    return (
        <nav className="relative hidden lg:flex lg:items-center lg:gap-2">
            {/* Dropdown menus: Prodotto, Settori, Tecnologie, Risorse */}
            {Object.entries(dropdownMenus).map(([key, menu]) => (
                <Popover key={key} className="relative">
                    {({ open }) => (
                        <>
                            <PopoverButton className="flex items-center gap-1 px-4 py-3 text-base font-medium text-gray-950 hover:bg-black/5 rounded-lg outline-none">
                                {menu.label}
                                <ChevronDownIcon className={`size-4 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`} />
                            </PopoverButton>
                            <PopoverPanel className="absolute left-0 z-10 mt-3 w-screen max-w-sm transform">
                                <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
                                    <div className="p-4">
                                        {'sections' in menu ? (
                                            // Menu con sezioni (es. Prodotto)
                                            <div className="space-y-4">
                                                {menu.sections.map((section, idx) => (
                                                    <div key={idx}>
                                                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                                            {section.title}
                                                        </div>
                                                        <div className="space-y-1">
                                                            {section.links.map((link) => (
                                                                <Link
                                                                    key={link.href}
                                                                    href={link.href}
                                                                    className="block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                                                                >
                                                                    {link.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            // Menu semplice lista (es. Settori, Tecnologie, Risorse)
                                            <div className="space-y-1">
                                                {menu.links.map((link) => (
                                                    <Link
                                                        key={link.href}
                                                        href={link.href}
                                                        className="block px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </PopoverPanel>
                        </>
                    )}
                </Popover>
            ))}

            {/* Simple links: Customer Stories, Prezzi, Contatti */}
            {simpleLinks.map(({ href, label }) => (
                <PlusGridItem key={href} className="relative flex">
                    <Link
                        href={href}
                        className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5 rounded-lg"
                    >
                        {label}
                    </Link>
                </PlusGridItem>
            ))}

            {/* CTA Button: Richiedi Demo */}
            <PlusGridItem className="ml-auto flex">
                <Link
                    href="/contatti"
                    className="inline-flex items-center justify-center rounded-full bg-[#0081BE] px-6 py-3 text-base font-medium text-white hover:bg-[#006E9F] transition-colors"
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
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <DisclosureButton className="flex w-full items-center justify-between text-base font-medium text-gray-950">
                                        {menu.label}
                                        <ChevronDownIcon className={`size-5 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`} />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-3 ml-4 space-y-2">
                                        {'sections' in menu ? (
                                            // Menu con sezioni
                                            menu.sections.map((section, sIdx) => (
                                                <div key={sIdx} className="space-y-2">
                                                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                        {section.title}
                                                    </div>
                                                    {section.links.map((link) => (
                                                        <Link
                                                            key={link.href}
                                                            href={link.href}
                                                            className="block text-sm text-gray-700 hover:text-[#0081BE]"
                                                        >
                                                            {link.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))
                                        ) : (
                                            // Menu semplice lista
                                            menu.links.map((link) => (
                                                <Link
                                                    key={link.href}
                                                    href={link.href}
                                                    className="block text-sm text-gray-700 hover:text-[#0081BE]"
                                                >
                                                    {link.label}
                                                </Link>
                                            ))
                                        )}
                                    </DisclosurePanel>
                                </>
                            )}
                        </Disclosure>
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
                    <Link href="/contatti" className="btn-primary block text-center px-6 py-3 text-base font-medium">
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
