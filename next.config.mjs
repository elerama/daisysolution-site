const isExport = process.env.NEXT_PUBLIC_OUTPUT_MODE === 'export';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: isExport ? 'export' : 'standalone',
}

export default nextConfig
