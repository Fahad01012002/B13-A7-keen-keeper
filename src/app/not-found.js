'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div 
        className="text-center transition-transform duration-300"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      >
        {/* 404 Text */}
        <div className="flex justify-center items-baseline gap-2 mb-8">
          <span className="text-8xl md:text-9xl font-black drop-shadow-2xl text-[#1a8862] animate-pulse">4</span>
          <span className="text-8xl md:text-9xl font-black  drop-shadow-2xl text-[#1a8862] animate-pulse">0</span>
          <span className="text-8xl md:text-9xl font-black  drop-shadow-2xl text-[#1a8862] animate-pulse">4</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1a8862]">
          Page Not Found
        </h1>
        
        <p className="text-[#1a8862] mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="px-8 py-3 bg-white rounded-full font-semibold hover:bg-[#1a8862] hover:text-white transition-all shadow-lg"
          >
            ← Back to Home
          </Link>
          
          <Link 
            href="/s"
            className="px-8 py-3 hover:bg-white rounded-full font-semibold text-white bg-[#1a8862] hover:text-black transition-all shadow-lg"
          >
            Refresh →
          </Link>
        </div>
        
        <div className="mt-12 text-white/60 text-sm">
          Error 404 | Page Not Found
        </div>
      </div>
    </div>
  );
}