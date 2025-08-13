"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Building2, Users, Code, DollarSign, Newspaper, MessageSquare, Moon, Sun } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/', icon: Building2 },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Services', href: '/services', icon: Code },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'News', href: '/news', icon: Newspaper },
  { name: 'Contact', href: '/contact', icon: MessageSquare },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const getLogoSrc = () => {
    if (!mounted) return '/fonts/Zemenay Logo Black.png'
    
    if (theme === 'dark') {
      return '/fonts/Zemenay Logo White.png'
    } else {
      return '/fonts/Zemenay Logo Black.png'
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
            <Image
              src={getLogoSrc()}
              alt="Zemenay Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hidden sm:block">
            Zemenay
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200 group relative"
            >
              <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              <span>{item.name}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></div>
            </Link>
          ))}
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full hover:bg-muted/50 transition-colors duration-200"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-blue-600" />
            )}
          </Button>
          <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
            <Link href="/admin/login">Admin</Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
        
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-lg font-medium hover:text-primary transition-colors duration-200 p-3 rounded-lg hover:bg-muted/50"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-4 mb-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="w-10 h-10 rounded-full hover:bg-muted/50"
                  >
                    {theme === 'dark' ? (
                      <Sun className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <Moon className="h-5 w-5 text-blue-600" />
                    )}
                  </Button>
                </div>
                <Button asChild variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-200 mb-3">
                  <Link href="/admin/login">Admin Panel</Link>
                </Button>
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all duration-200">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}