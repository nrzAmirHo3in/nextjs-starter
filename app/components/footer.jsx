"use client";

import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin, 
  Heart,
  Send
} from "lucide-react";

export default function Footer() {
  const footerLinks = {
    محصولات: [
      { name: "لباس مردانه", href: "/products/men" },
      { name: "لباس زنانه", href: "/products/women" },
      { name: "بچه گانه", href: "/products/kids" },
      { name: "تخفیف‌های ویژه", href: "/products/sale" },
      { name: "جدیدترین محصولات", href: "/products/new" },
    ],
    خدمات: [
      { name: "پیگیری سفارش", href: "/track-order" },
      { name: "بازگرداندن کالا", href: "/returns" },
      { name: "سوالات متداول", href: "/faq" },
      { name: "راهنمای اندازه", href: "/size-guide" },
      { name: "شرایط استفاده", href: "/terms" },
    ],
    شرکت: [
      { name: "درباره ما", href: "/about" },
      { name: "فرصت‌های شغلی", href: "/careers" },
      { name: "تماس با ما", href: "/contact" },
      { name: "اخبار و مقالات", href: "/blog" },
      { name: "حریم خصوصی", href: "/privacy" },
    ],
  };

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "#", label: "اینستاگرام" },
    { icon: <Twitter size={20} />, href: "#", label: "توییتر" },
    { icon: <Facebook size={20} />, href: "#", label: "فیسبوک" },
    { icon: <Linkedin size={20} />, href: "#", label: "لینکدین" },
    { icon: <Youtube size={20} />, href: "#", label: "یوتیوب" },
  ];

  return (
    <footer className="bg-white dark:bg-zinc-900 text-zinc-700 border-t border-t-zinc-300" dir="rtl">
      {/* بخش بالایی فوتر */}
      <div className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* ستون اطلاعات تماس */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="relative h-10 w-10">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
                    ل.
                  </span>
                </div>
                <span className="mr-3 text-2xl font-bold text-zinc-900 dark:text-white">
                  لُـگوی‌من
                </span>
              </div>
              
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                ما در زمینه فروش آنلاین محصولات با کیفیت فعالیت می‌کنیم. 
                تضمین کیفیت و رضایت شما اولویت اصلی ماست.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <span className="text-sm">۰۲۱-۱۲۳۴۵۶۷۸</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <span className="text-sm">info@loghoyeman.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <span className="text-sm">تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
                </div>
              </div>
            </div>

            {/* لینک‌های فوتر */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* اشتراک در خبرنامه */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 lg:mt-16">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="mb-6 lg:mb-0">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  عضو خبرنامه ما شوید
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  از آخرین تخفیف‌ها و جدیدترین محصولات باخبر شوید
                </p>
              </div>
              
              <form className="w-full lg:w-auto" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-900 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    عضویت
                  </button>
                </div>
                <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                  با عضویت، موافقت خود را با{" "}
                  <Link href="/privacy" className="text-blue-600 hover:underline dark:text-blue-400">
                    حریم خصوصی
                  </Link>{" "}
                  اعلام می‌کنید.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* بخش پایینی فوتر */}
      <div className="bg-zinc-50 dark:bg-black/50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            {/* لینک‌های شبکه‌های اجتماعی */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-full bg-white p-2.5 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* درگاه‌های پرداخت */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="h-8 w-12 rounded bg-gradient-to-r from-gray-300 to-gray-400 dark:from-zinc-700 dark:to-zinc-800"></div>
              <div className="h-8 w-12 rounded bg-gradient-to-r from-gray-300 to-gray-400 dark:from-zinc-700 dark:to-zinc-800"></div>
              <div className="h-8 w-12 rounded bg-gradient-to-r from-gray-300 to-gray-400 dark:from-zinc-700 dark:to-zinc-800"></div>
              <div className="h-8 w-12 rounded bg-gradient-to-r from-gray-300 to-gray-400 dark:from-zinc-700 dark:to-zinc-800"></div>
              <div className="h-8 w-12 rounded bg-gradient-to-r from-gray-300 to-gray-400 dark:from-zinc-700 dark:to-zinc-800"></div>
            </div>

            {/* کپی رایت */}
            <div className="text-center lg:text-left">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                © {new Date().getFullYear()} لُـگوی‌من. تمامی حقوق محفوظ است.
              </p>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
                ساخته شده با <Heart className="inline h-3 w-3 text-red-500" /> در ایران
              </p>
            </div>
          </div>

          {/* لینک‌های پایینی */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-zinc-200 dark:border-zinc-800 pt-8 text-sm">
            <Link 
              href="/privacy" 
              className="text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-white"
            >
              حریم خصوصی
            </Link>
            <Link 
              href="/terms" 
              className="text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-white"
            >
              شرایط استفاده
            </Link>
            <Link 
              href="/cookies" 
              className="text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-white"
            >
              کوکی‌ها
            </Link>
            <Link 
              href="/sitemap" 
              className="text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-white"
            >
              نقشه سایت
            </Link>
            <Link 
              href="/accessibility" 
              className="text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-white"
            >
              دسترسی پذیری
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}