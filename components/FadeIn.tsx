'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
    threshold?: number;
}

export default function FadeIn({
    children,
    delay = 0,
    direction = 'up',
    className = '',
    threshold = 0.1,
}: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Enforce a small delay to prevent rapid scrolling issues
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (domRef.current) {
                            observer.unobserve(domRef.current);
                        }
                    }
                });
            },
            { threshold: threshold }
        );

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) observer.unobserve(current);
        };
    }, [threshold]);

    const getDirectionClasses = () => {
        switch (direction) {
            case 'up':
                return 'translate-y-12';
            case 'down':
                return '-translate-y-12';
            case 'left':
                return 'translate-x-12';
            case 'right':
                return '-translate-x-12';
            case 'none':
                return '';
            default:
                return 'translate-y-12';
        }
    };

    return (
        <div
            ref={domRef}
            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${getDirectionClasses()}`
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
