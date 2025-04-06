'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Users, 
  Camera,
  ChevronRight,
  Sun,
  Moon,
  LockKeyhole
} from "lucide-react";

export default function Home() {
  // Explicitly type theme as "light" | "dark" and default to "light"
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [mounted, setMounted] = useState(false);
  
  // Load theme on component mount
  useEffect(() => {
    // Get saved theme from localStorage, default to "light" if not set
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    } else {
      setTheme("light"); // Ensure "light" is default if no valid theme is saved
      localStorage.setItem('theme', "light");
    }
    setMounted(true);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Style variables for different themes
  const styles = {
    dark: {
      background: "#111827",
      text: "text-white",
      textSecondary: "text-gray-300",
      suhbaColor: "text-emerald-400",
      card: "bg-gray-800",
      highlight: "bg-emerald-900/30 text-emerald-400",
      button: "bg-emerald-600 hover:bg-emerald-700",
      secondaryButton: "bg-gray-800 hover:bg-gray-700 text-emerald-400 border-emerald-500",
      adminButton: "bg-gray-800 text-gray-300 hover:text-white border-gray-700",
      iconBg: "bg-emerald-900/30",
      iconColor: "text-emerald-400"
    },
    light: {
      background: "#ffffff",
      text: "text-gray-900",
      textSecondary: "text-gray-600",
      suhbaColor: "text-emerald-600",
      card: "bg-white",
      highlight: "bg-emerald-100 text-emerald-800",
      button: "bg-emerald-600 hover:bg-emerald-700",
      secondaryButton: "bg-white hover:bg-gray-50 text-emerald-600 border-emerald-600",
      adminButton: "bg-gray-100 text-gray-700 hover:text-gray-900 border-gray-300",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600"
    }
  };

  // Get current theme styles
  const currentStyle = styles[theme];

  // Render loading state with light theme until mounted
  if (!mounted) {
    return (
      <div 
        className="min-h-screen"
        style={{ backgroundColor: styles.light.background }}
      >
        {/* Minimal placeholder to avoid layout shift */}
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: currentStyle.background }}
    >
      {/* Header with Theme Toggle and Admin Login - Improved for mobile */}
      <div className="fixed top-0 inset-x-0 z-50 flex items-center justify-end px-4 pt-4 pb-2">
        <div className="flex items-center gap-3">
          {/* Admin Login Button */}
          <Link 
            href="/admin" 
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${currentStyle.adminButton}`}
            aria-label="Admin Login"
          >
            <LockKeyhole size={16} />
            <span>Admin</span>
          </Link>

          {/* Theme Toggle Button - No longer rounded */}
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all ${
              theme === 'dark' ? 'bg-gray-800 text-amber-500' : 'bg-gray-100 text-indigo-600'
            }`}
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === 'dark' ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Hero Section - Added padding at top to account for fixed header */}
      <section className="relative h-auto md:h-screen flex items-center overflow-hidden pt-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
              <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${currentStyle.highlight}`}>
                Running Under SUFFA Dars Coordination
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${currentStyle.text}`}>
                <span className={`block ${currentStyle.suhbaColor}`}>SUHBA</span>
                Dars Students' Union
              </h1>
              
              <p className={`text-lg max-w-2xl ${currentStyle.textSecondary}`}>
                SUHBA is a students' union under SUFFA Dars Coordination, shaping scholars 
                for modern challenges through traditional knowledge and visionary goals.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link 
                  href="/photoframe" 
                  className={`px-6 py-3 text-white font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg ${currentStyle.button}`}
                >
                  <Camera size={18} />
                  Join Campaign
                </Link>
                <Link 
                  href="https://darshanammagazine.com/" 
                  className={`px-6 py-3 font-medium rounded-lg border-2 transition-all flex items-center gap-2 ${currentStyle.secondaryButton}`}
                >
                  Online Magazine
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform md:rotate-2 transition-all hover:rotate-0 duration-500">
                <Image 
                  src="/islamic-students.jpg" 
                  alt="SUHBA Islamic Students" 
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium text-start md:text-end">Connecting hearts, minds & souls</p>
                </div>
              </div>
              
              {/* Floating stats card */}
              <div className={`absolute -bottom-6 -left-6 rounded-xl shadow-xl p-5 max-w-xs hidden md:block ${currentStyle.card}`}>
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${currentStyle.iconBg}`}>
                    <Users className={currentStyle.iconColor} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${currentStyle.text}`}>600+</h3>
                    <p className={currentStyle.textSecondary}>Active Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}