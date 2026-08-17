/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'node:url';

const nextConfig = {
    reactCompiler: true,
    turbopack: {
        root: fileURLToPath(new URL('.', import.meta.url)),
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rickandmortyapi.com',
            },
        ],
    },
};

export default nextConfig;
