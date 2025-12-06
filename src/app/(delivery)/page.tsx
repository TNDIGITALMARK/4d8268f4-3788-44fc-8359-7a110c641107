import Link from 'next/link';
import { Truck, Clock, Shield, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { applianceCategories } from '@/lib/data/appliances';
import { serviceAreas } from '@/lib/data/service-areas';
import { pricingStructure } from '@/lib/data/pricing';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-navy text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl md:text-7xl mb-6 animate-fade-in">🦋</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in-up">
                Professional Appliance Delivery
                <br />
                <span className="text-accent">Throughout NYC Metro</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
                Reliable pickup and delivery of refrigerators, washers, dryers, and dishwashers from
                major retailers to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/request-delivery">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 w-full sm:w-auto"
                  >
                    Request Delivery Now
                  </Button>
                </Link>
                <a href="tel:+12125550199">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold text-lg px-8 py-6 w-full sm:w-auto backdrop-blur-sm"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call (212) 555-0199
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover-lift bg-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Professional Service</h3>
                <p className="text-muted-foreground">
                  Experienced drivers who handle your appliances with care from store to home.
                </p>
              </Card>

              <Card className="p-8 text-center hover-lift bg-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Real-Time Tracking</h3>
                <p className="text-muted-foreground">
                  Automated notifications keep you updated throughout the entire delivery process.
                </p>
              </Card>

              <Card className="p-8 text-center hover-lift bg-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fully Insured</h3>
                <p className="text-muted-foreground">
                  Your appliances are protected with comprehensive insurance coverage.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Appliances We Deliver</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From refrigerators to washing machines, we handle all major appliances with
                professional care.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {applianceCategories.map((appliance) => (
                <Card key={appliance.id} className="p-6 text-center hover-lift">
                  <div className="text-4xl mb-3">{appliance.icon}</div>
                  <h4 className="font-semibold mb-2">{appliance.name}</h4>
                  <p className="text-sm text-muted-foreground">{appliance.description}</p>
                  <p className="text-lg font-bold text-primary mt-3">
                    from ${appliance.basePrice.toFixed(2)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Area Section */}
        <section id="coverage" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Coverage Area</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We proudly serve the entire NYC metro area and surrounding counties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceAreas.map((area) => (
                <Card key={area.id} className="p-6 hover-lift">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">{area.name}</h4>
                      <div className="inline-flex items-center gap-2 text-sm text-green-600 font-medium">
                        <CheckCircle2 className="h-4 w-4" />
                        Available
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {area.neighborhoods.slice(0, 3).map((neighborhood, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        • {neighborhood}
                      </p>
                    ))}
                    {area.neighborhoods.length > 3 && (
                      <p className="text-sm text-muted-foreground font-medium">
                        + {area.neighborhoods.length - 3} more areas
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                No hidden fees. Simple, straightforward pricing you can trust.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {pricingStructure.map((price) => (
                <Card key={price.id} className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    ${price.amount.toFixed(2)}
                  </div>
                  <h4 className="font-bold mb-2">{price.name}</h4>
                  <p className="text-sm text-muted-foreground">{price.description}</p>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/request-delivery">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Get Your Quote Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 gradient-orange text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Schedule Your Delivery?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Get your appliances delivered safely and professionally. Request a quote or call us now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/request-delivery">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 w-full sm:w-auto"
                >
                  Request Delivery
                </Button>
              </Link>
              <a href="tel:+12125550199">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold text-lg px-8 py-6 w-full sm:w-auto backdrop-blur-sm"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (212) 555-0199
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
