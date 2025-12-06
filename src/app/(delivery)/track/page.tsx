'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Package,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Mail,
  AlertCircle,
} from 'lucide-react';
import {
  sampleOrders,
  sampleNotifications,
  getOrderStatusLabel,
  getOrderStatusColor,
  type DeliveryOrder,
} from '@/lib/data/orders';

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const orderParam = searchParams.get('order');

  const [orderNumber, setOrderNumber] = useState(orderParam || '');
  const [order, setOrder] = useState<DeliveryOrder | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (orderParam) {
      handleTrackOrder(orderParam);
    }
  }, [orderParam]);

  const handleTrackOrder = (searchNumber: string = orderNumber) => {
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Find order or use first sample
      const foundOrder = sampleOrders[0]; // In real app, would search by order number
      setOrder(foundOrder);
      setLoading(false);
    }, 500);
  };

  const getStatusSteps = () => {
    return [
      {
        status: 'pending',
        label: 'Order Received',
        icon: Package,
        completed: true,
      },
      {
        status: 'pickup_confirmed',
        label: 'Pickup Confirmed',
        icon: CheckCircle2,
        completed: order && ['pickup_confirmed', 'en_route_pickup', 'picked_up', 'en_route_delivery', 'arrived', 'delivered'].includes(order.status),
      },
      {
        status: 'en_route_pickup',
        label: 'En Route to Pickup',
        icon: Truck,
        completed: order && ['en_route_pickup', 'picked_up', 'en_route_delivery', 'arrived', 'delivered'].includes(order.status),
      },
      {
        status: 'picked_up',
        label: 'Picked Up',
        icon: Package,
        completed: order && ['picked_up', 'en_route_delivery', 'arrived', 'delivered'].includes(order.status),
      },
      {
        status: 'en_route_delivery',
        label: 'Out for Delivery',
        icon: Truck,
        completed: order && ['en_route_delivery', 'arrived', 'delivered'].includes(order.status),
      },
      {
        status: 'delivered',
        label: 'Delivered',
        icon: CheckCircle2,
        completed: order?.status === 'delivered',
      },
    ];
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Track Your Delivery</h1>
            <p className="text-xl text-muted-foreground">
              Enter your order number to see real-time delivery status
            </p>
          </div>

          {/* Search Form */}
          <Card className="p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="orderNumber" className="sr-only">
                  Order Number
                </Label>
                <Input
                  id="orderNumber"
                  placeholder="Enter order number (e.g., BBT-2024-001)"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleTrackOrder()}
                />
              </div>
              <Button
                onClick={() => handleTrackOrder()}
                className="bg-accent hover:bg-accent/90 text-white font-semibold"
                disabled={loading}
              >
                {loading ? 'Searching...' : 'Track Order'}
              </Button>
            </div>
          </Card>

          {/* Order Details */}
          {order && (
            <div className="space-y-6">
              {/* Order Status */}
              <Card className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Order #{order.orderNumber}</h2>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getOrderStatusColor(
                          order.status
                        )}`}
                      >
                        {getOrderStatusLabel(order.status)}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-1">Total Price</div>
                    <div className="text-2xl font-bold text-primary">
                      ${order.totalPrice.toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Progress Timeline */}
                <div className="space-y-4">
                  {getStatusSteps().map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.status} className="flex items-center gap-4">
                        <div
                          className={`flex items-center justify-center w-12 h-12 rounded-full ${
                            step.completed
                              ? 'bg-primary text-white'
                              : 'bg-gray-200 text-gray-400'
                          }`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div
                            className={`font-semibold ${
                              step.completed ? 'text-foreground' : 'text-muted-foreground'
                            }`}
                          >
                            {step.label}
                          </div>
                          {step.completed && order.status === step.status && (
                            <div className="text-sm text-primary font-medium">Current Status</div>
                          )}
                        </div>
                        {step.completed && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Delivery Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Pickup Location
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="font-semibold">{order.pickupLocation.retailer}</div>
                    <div className="text-muted-foreground">{order.pickupLocation.address}</div>
                    {order.pickupLocation.contactPerson && (
                      <div className="text-muted-foreground">
                        Contact: {order.pickupLocation.contactPerson}
                      </div>
                    )}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    Delivery Location
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="font-semibold">
                      {order.deliveryLocation.address}
                      {order.deliveryLocation.apartment &&
                        `, ${order.deliveryLocation.apartment}`}
                    </div>
                    <div className="text-muted-foreground">
                      Floor {order.deliveryLocation.floor}
                    </div>
                    {order.deliveryLocation.specialInstructions && (
                      <div className="text-muted-foreground mt-2 p-2 bg-muted rounded">
                        <span className="font-medium">Instructions:</span>{' '}
                        {order.deliveryLocation.specialInstructions}
                      </div>
                    )}
                  </div>
                </Card>
              </div>

              {/* Appliance Details */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Appliance Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground mb-1">Type</div>
                    <div className="font-semibold">
                      {order.appliance.category.split('_').join(' ').toUpperCase()}
                    </div>
                  </div>
                  {order.appliance.brand && (
                    <div>
                      <div className="text-muted-foreground mb-1">Brand</div>
                      <div className="font-semibold">{order.appliance.brand}</div>
                    </div>
                  )}
                  {order.appliance.model && (
                    <div>
                      <div className="text-muted-foreground mb-1">Model</div>
                      <div className="font-semibold">{order.appliance.model}</div>
                    </div>
                  )}
                </div>
              </Card>

              {/* Schedule Information */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Schedule
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground mb-1">Scheduled Pickup</div>
                    <div className="font-semibold">
                      {new Date(order.scheduledPickup).toLocaleString('en-US', {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      })}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Scheduled Delivery</div>
                    <div className="font-semibold">
                      {new Date(order.scheduledDelivery).toLocaleString('en-US', {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      })}
                    </div>
                  </div>
                  {order.estimatedArrival && (
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-accent" />
                        <div>
                          <div className="font-semibold text-accent">Estimated Arrival</div>
                          <div className="text-sm">
                            {new Date(order.estimatedArrival).toLocaleString('en-US', {
                              dateStyle: 'medium',
                              timeStyle: 'short',
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              {/* Customer Information */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">👤</div>
                    <div>
                      <div className="font-semibold">{order.customerName}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a
                      href={`tel:${order.customerPhone}`}
                      className="text-primary hover:underline"
                    >
                      {order.customerPhone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href={`mailto:${order.customerEmail}`}
                      className="text-primary hover:underline"
                    >
                      {order.customerEmail}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Recent Notifications */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Recent Updates</h3>
                <div className="space-y-4">
                  {sampleNotifications.slice(0, 3).map((notification) => (
                    <div
                      key={notification.id}
                      className="flex items-start gap-3 p-3 bg-muted rounded-lg"
                    >
                      <div className="flex-shrink-0 w-2 h-2 mt-2 bg-primary rounded-full" />
                      <div className="flex-1">
                        <div className="font-semibold mb-1">{notification.title}</div>
                        <div className="text-sm text-muted-foreground mb-2">
                          {notification.message}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(notification.timestamp).toLocaleString('en-US', {
                            dateStyle: 'medium',
                            timeStyle: 'short',
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Help Section */}
              <Card className="p-6 bg-accent/5 border-accent">
                <h3 className="text-xl font-bold mb-3">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about your delivery, our team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+12125550199">
                    <Button variant="outline" className="w-full sm:w-auto">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Us
                    </Button>
                  </a>
                  <a href="mailto:contact@blackbutterfly.delivery">
                    <Button variant="outline" className="w-full sm:w-auto">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Support
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          )}

          {/* No Order Found */}
          {!order && !loading && orderNumber && (
            <Card className="p-8 text-center">
              <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Order Not Found</h3>
              <p className="text-muted-foreground mb-4">
                We couldn't find an order with that number. Please check and try again.
              </p>
              <p className="text-sm text-muted-foreground">
                Try entering: <span className="font-mono font-bold">BBT-2024-001</span> to see a
                sample order
              </p>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrackOrderContent />
    </Suspense>
  );
}
