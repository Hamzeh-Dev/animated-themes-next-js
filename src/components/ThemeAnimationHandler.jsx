"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeAnimationHandler({
    children,
    duration = 1.2,
    origin = '100% 100%', // Bottom-right default
    colors = {
        light: '#ffffff',
        dark: '#000000',
        blue: '#3b82f6',
    },
}) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={theme}
                initial={{ clipPath: `circle(0% at ${origin})` }}
                animate={{ clipPath: 'circle(150% at 50% 50%)' }}
                // exit={{ clipPath: `circle(0% at ${origin})` }}
                transition={{ duration, ease: 'easeInOut' }}
                style={{
                    backgroundColor: colors[theme],
                    position: 'absolute',
                    inset: 1,
                    zIndex: -1,
                }}
            />
            {children}
        </AnimatePresence>
    );
}
