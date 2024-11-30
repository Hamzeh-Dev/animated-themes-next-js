"use client"

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch by waiting for the component to mount
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className="flex gap-2">
            <button
                onClick={() => setTheme('light')}
                className={`px-4 py-2 rounded ${theme === 'light' ? 'bg-gray-300' : ''}`}
            >
                Light
            </button>
            <button
                onClick={() => setTheme('dark')}
                className={`px-4 py-2 rounded ${theme === 'dark' ? 'bg-gray-700 text-white' : ''}`}
            >
                Dark
            </button>
            <button
                onClick={() => setTheme('blue')}
                className={`px-4 py-2 rounded ${theme === 'blue' ? 'bg-blue-500 text-white' : ''}`}
            >
                Blue
            </button>
        </div>
    );
}
