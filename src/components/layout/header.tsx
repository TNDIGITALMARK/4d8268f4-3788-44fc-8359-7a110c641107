'use client';

import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="text-4xl">🦋</div>
            <div>
              <div className="font-bold text-xl text-primary leading-tight">
                Black Butterfly Transportation
              </div>
              <div className="text-xs text-muted-foreground">
                Professional Appliance Delivery
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#services"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#coverage"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Coverage Area
            </Link>
            <Link
              href="/track"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Track Order
            </Link>
            <Link
              href="/#contact"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Phone CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+12125550199"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-bold text-lg">(212) 555-0199</span>
            </a>
            <Link href="/request-delivery">
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold">
                Request Delivery
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/#services"
                className="text-foreground hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#coverage"
                className="text-foreground hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Coverage Area
              </Link>
              <Link
                href="/track"
                className="text-foreground hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Track Order
              </Link>
              <Link
                href="/#contact"
                className="text-foreground hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+12125550199"
                className="flex items-center gap-2 text-primary font-bold text-lg py-2"
              >
                <Phone className="h-5 w-5" />
                (212) 555-0199
              </a>
              <Link href="/request-delivery">
                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                  Request Delivery
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
