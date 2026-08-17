import './globals.css';
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Toaster } from 'react-hot-toast';

export const metadata = {
    title: 'FrontEnd - Codeverse',
    description: 'Template do Codeverse',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className="min-h-screen bg-linear-to-bl from to-pink-200 to bg-pink-400 antialiased">
                <AntdRegistry>{children}</AntdRegistry>
                <Toaster />
            </body>
        </html>
    );
}
