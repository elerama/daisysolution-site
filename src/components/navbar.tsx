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

// Menu structure: Daisy Solution (v2 - simplified)
// First link (rendered before dropdowns)
const firstLink = { href: '/funzionalita', label: 'Funzionalità' }

// Simple links after dropdowns
const simpleLinks = [
    { href: '/prezzi', label: 'Prezzi' },
    { href: '/login', label: 'Area Riservata' },
]

// Dropdown menu items (simplified: only 2 dropdowns)
const dropdownMenus = {
    settori: {
        label: 'Settori',
        links: [
            { href: '/settori/negozi-singoli', label: 'Negozi Singoli' },
            { href: '/settori/catene', label: 'Catene & Reti' },
            { href: '/customer-stories', label: 'Customer Stories' },
        ],
    },
    risorse: {
        label: 'Risorse',
        links: [
            { href: '/perche-daisy', label: 'Perché Daisy' },
            { href: '/customer-stories', label: 'Customer Stories' },
            { href: '/blog', label: 'Blog' },
            { href: '/chi-siamo', label: 'Chi Siamo' },
        ],
    },
}

function DesktopNav() {
    return (
        <nav className="relative hidden lg:flex lg:items-center lg:gap-2">
            {/* First link: Funzionalità (before dropdowns) */}
            <PlusGridItem className="relative flex">
                <Link
                    href={firstLink.href}
                    className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5 rounded-lg"
                >
                    {firstLink.label}
                </Link>
            </PlusGridItem>

            {/* Dropdown menus: Settori, Risorse */}
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
                                    </div>
                                </div>
                            </PopoverPanel>
                        </>
                    )}
                </Popover>
            ))}

            {/* Simple links: Funzionalità, Prezzi, Area Riservata */}
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

            {/* CTA Button: Richiedi Info */}
            <PlusGridItem className="ml-auto flex">
                <Link
                    href="/contatti"
                    className="inline-flex items-center justify-center rounded-full bg-[#0081BE] px-6 py-3 text-base font-medium text-white hover:bg-[#006E9F] transition-colors"
                >
                    Richiedi Info
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
                {/* First link: Funzionalità (before dropdowns) */}
                <motion.div
                    initial={{ opacity: 0, rotateX: -90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{
                        duration: 0.15,
                        ease: 'easeInOut',
                        rotateX: { duration: 0.3, delay: 0 },
                    }}
                >
                    <Link href={firstLink.href} className="text-base font-medium text-gray-950">
                        {firstLink.label}
                    </Link>
                </motion.div>

                {/* Dropdown menus */}
                {Object.entries(dropdownMenus).map(([key, menu], idx) => (
                    <motion.div
                        initial={{ opacity: 0, rotateX: -90 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        transition={{
                            duration: 0.15,
                            ease: 'easeInOut',
                            rotateX: { duration: 0.3, delay: (idx + 1) * 0.1 },
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
                                        {menu.links.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className="block text-sm text-gray-700 hover:text-[#0081BE]"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
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
                            rotateX: { duration: 0.3, delay: (1 + Object.keys(dropdownMenus).length + linkIndex) * 0.1 },
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
                        rotateX: { duration: 0.3, delay: (1 + Object.keys(dropdownMenus).length + simpleLinks.length) * 0.1 },
                    }}
                >
                    <Link href="/contatti" className="btn-primary block text-center px-6 py-3 text-base font-medium">
                        Richiedi Info
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
                                <Logo className="w-32 sm:w-40" />
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
