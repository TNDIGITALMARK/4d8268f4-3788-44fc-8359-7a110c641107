'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { applianceCategories } from '@/lib/data/appliances';
import { serviceAreas } from '@/lib/data/service-areas';
import { retailPartners } from '@/lib/data/retailers';
import { calculateDeliveryPrice } from '@/lib/data/pricing';
import { Calendar, MapPin, Package, DollarSign } from 'lucide-react';

export default function RequestDeliveryPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    // Customer Information
    customerName: '',
    customerPhone: '',
    customerEmail: '',

    // Pickup Information
    retailer: '',
    pickupLocation: '',
    applianceCategory: '',
    applianceModel: '',
    applianceBrand: '',

    // Delivery Information
    deliveryAddress: '',
    apartment: '',
    floor: '0',
    serviceArea: '',
    deliveryDate: '',
    deliveryTime: '',
    specialInstructions: '',

    // Pricing Options
    isWeekend: false,
    isExpress: false,
  });

  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const handleInputChange = (field: string, value: string | boolean) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);

    // Calculate price if we have enough information
    if (newData.applianceCategory && newData.floor) {
      const basePrice = 19.50;
      const additionalFloors = Math.max(0, parseInt(newData.floor) - 0);
      const price = calculateDeliveryPrice(
        basePrice,
        additionalFloors,
        newData.isWeekend,
        newData.isExpress
      );
      setEstimatedPrice(price);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real app, this would submit to an API
    console.log('Delivery request submitted:', formData);

    // Redirect to tracking page with mock order number
    const mockOrderNumber = 'BBT-2024-' + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    router.push(`/track?order=${mockOrderNumber}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Request Appliance Delivery</h1>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll handle the rest
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Customer Information */}
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl">👤</div>
                  <h2 className="text-2xl font-bold">Customer Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="customerName">Full Name *</Label>
                    <Input
                      id="customerName"
                      required
                      value={formData.customerName}
                      onChange={(e) => handleInputChange('customerName', e.target.value)}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <Label htmlFor="customerPhone">Phone Number *</Label>
                    <Input
                      id="customerPhone"
                      type="tel"
                      required
                      value={formData.customerPhone}
                      onChange={(e) => handleInputChange('customerPhone', e.target.value)}
                      placeholder="(212) 555-0123"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="customerEmail">Email Address *</Label>
                    <Input
                      id="customerEmail"
                      type="email"
                      required
                      value={formData.customerEmail}
                      onChange={(e) => handleInputChange('customerEmail', e.target.value)}
                      placeholder="john.smith@email.com"
                    />
                  </div>
                </div>
              </Card>

              {/* Pickup Information */}
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">Pickup Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="retailer">Retailer *</Label>
                    <Select
                      value={formData.retailer}
                      onValueChange={(value) => handleInputChange('retailer', value)}
                      required
                    >
                      <SelectTrigger id="retailer">
                        <SelectValue placeholder="Select retailer" />
                      </SelectTrigger>
                      <SelectContent>
                        {retailPartners.map((partner) => (
                          <SelectItem key={partner.id} value={partner.id}>
                            {partner.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="pickupLocation">Store Location *</Label>
                    <Select
                      value={formData.pickupLocation}
                      onValueChange={(value) => handleInputChange('pickupLocation', value)}
                      required
                      disabled={!formData.retailer}
                    >
                      <SelectTrigger id="pickupLocation">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {formData.retailer &&
                          retailPartners
                            .find((p) => p.id === formData.retailer)
                            ?.locations.map((location, idx) => (
                              <SelectItem key={idx} value={location}>
                                {location}
                              </SelectItem>
                            ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>

              {/* Appliance Information */}
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">Appliance Details</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="applianceCategory">Appliance Type *</Label>
                    <Select
                      value={formData.applianceCategory}
                      onValueChange={(value) => handleInputChange('applianceCategory', value)}
                      required
                    >
                      <SelectTrigger id="applianceCategory">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {applianceCategories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.icon} {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="applianceBrand">Brand (Optional)</Label>
                    <Input
                      id="applianceBrand"
                      value={formData.applianceBrand}
                      onChange={(e) => handleInputChange('applianceBrand', e.target.value)}
                      placeholder="Samsung, LG, etc."
                    />
                  </div>
                  <div>
                    <Label htmlFor="applianceModel">Model (Optional)</Label>
                    <Input
                      id="applianceModel"
                      value={formData.applianceModel}
                      onChange={(e) => handleInputChange('applianceModel', e.target.value)}
                      placeholder="RF23M8070SR"
                    />
                  </div>
                </div>
              </Card>

              {/* Delivery Information */}
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">Delivery Details</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="serviceArea">Service Area *</Label>
                    <Select
                      value={formData.serviceArea}
                      onValueChange={(value) => handleInputChange('serviceArea', value)}
                      required
                    >
                      <SelectTrigger id="serviceArea">
                        <SelectValue placeholder="Select area" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceAreas.map((area) => (
                          <SelectItem key={area.id} value={area.id}>
                            {area.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="deliveryAddress">Delivery Address *</Label>
                    <Input
                      id="deliveryAddress"
                      required
                      value={formData.deliveryAddress}
                      onChange={(e) => handleInputChange('deliveryAddress', e.target.value)}
                      placeholder="345 E 86th St, New York, NY 10028"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="apartment">Apt/Unit (Optional)</Label>
                      <Input
                        id="apartment"
                        value={formData.apartment}
                        onChange={(e) => handleInputChange('apartment', e.target.value)}
                        placeholder="12B"
                      />
                    </div>
                    <div>
                      <Label htmlFor="floor">Floor Number *</Label>
                      <Input
                        id="floor"
                        type="number"
                        min="0"
                        required
                        value={formData.floor}
                        onChange={(e) => handleInputChange('floor', e.target.value)}
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="deliveryDate">Preferred Date *</Label>
                      <Input
                        id="deliveryDate"
                        type="date"
                        required
                        value={formData.deliveryDate}
                        onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="deliveryTime">Preferred Time *</Label>
                      <Select
                        value={formData.deliveryTime}
                        onValueChange={(value) => handleInputChange('deliveryTime', value)}
                        required
                      >
                        <SelectTrigger id="deliveryTime">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                          <SelectItem value="evening">Evening (4PM - 8PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
                    <Textarea
                      id="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                      placeholder="Elevator available, call upon arrival, etc."
                      rows={3}
                    />
                  </div>
                </div>
              </Card>

              {/* Price Estimate */}
              {estimatedPrice !== null && (
                <Card className="p-6 bg-accent/5 border-accent">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-8 w-8 text-accent" />
                      <div>
                        <h3 className="text-xl font-bold">Estimated Total</h3>
                        <p className="text-sm text-muted-foreground">
                          Base fee + {parseInt(formData.floor)} floor(s)
                        </p>
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-accent">
                      ${estimatedPrice.toFixed(2)}
                    </div>
                  </div>
                </Card>
              )}

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => router.push('/')}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-accent hover:bg-accent/90 text-white font-bold"
                >
                  Submit Request
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
