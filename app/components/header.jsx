"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "خانه", href: "/" },
    { name: "محصولات", href: "/products" },
    { name: "وبلاگ", href: "/blog" },
    { name: "درباره ما", href: "/about" },
    { name: "تماس با ما", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-900/95" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* لوگو */}
          <div className="flex items-center">
            <button
              className="ml-4 p-2 text-gray-700 hover:bg-gray-100 rounded-lg dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="منو"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <Link href="/" className="flex items-center space-x-2 space-x-reverse">
              <div className="h-10 w-10 rounded-lg bg-linear-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">ل</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white mr-2">
                لوگو
              </span>
            </Link>
          </div>

          {/* منوی ناوبری - دسکتاپ */}
          <nav className="hidden lg:flex lg:items-center lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* آیکون‌های سمت چپ */}
          <div className="flex items-center gap-4">
            <button 
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-full dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="جستجو"
            >
              <Search size={20} />
            </button>
            
            <button 
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-full dark:text-gray-300 dark:hover:bg-gray-800 relative"
              aria-label="سبد خرید"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -left-1 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                ۰
              </span>
            </button>
            
            <button 
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-full dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="پروفایل کاربر"
            >
              <User size={20} />
            </button>
          </div>
        </div>

        {/* منوی موبایل */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 mt-2 pt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg dark:text-gray-300 dark:hover:bg-gray-800 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}