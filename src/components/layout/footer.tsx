import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { serviceAreas } from '@/lib/data/service-areas';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🦋</div>
              <div className="font-bold text-lg">Black Butterfly</div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Professional appliance delivery service serving the entire NYC metro area. Reliable,
              efficient, and trusted by thousands of customers.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:+12125550199"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                (212) 555-0199
              </a>
              <a
                href="mailto:contact@blackbutterfly.delivery"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@blackbutterfly.delivery
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {serviceAreas.slice(0, 5).map((area) => (
                <li key={area.id}>
                  <Link href="/#coverage" className="hover:text-accent transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/#services" className="hover:text-accent transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/request-delivery" className="hover:text-accent transition-colors">
                  Request Delivery
                </Link>
              </li>
              <li>
                <Link href="/track" className="hover:text-accent transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Business Hours</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-semibold">8AM - 8PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-semibold">9AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-semibold">10AM - 4PM</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-primary-foreground/20">
              <p className="text-xs text-primary-foreground/60">
                Emergency service available 24/7 by appointment
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div>
              © {new Date().getFullYear()} Black Butterfly Transportation. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
