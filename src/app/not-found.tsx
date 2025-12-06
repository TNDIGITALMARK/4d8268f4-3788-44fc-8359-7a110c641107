import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Phone } from 'lucide-react';

export const dynamic = 'force-dynamic'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="text-center px-4">
        <div className="text-8xl mb-6">🦋</div>
        <h1 className="text-5xl font-bold mb-4 text-primary">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </Button>
          </Link>
          <a href="tel:+12125550199">
            <Button size="lg" variant="outline">
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}