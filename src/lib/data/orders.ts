export type OrderStatus =
  | 'pending'
  | 'pickup_confirmed'
  | 'en_route_pickup'
  | 'picked_up'
  | 'en_route_delivery'
  | 'arrived'
  | 'delivered'
  | 'cancelled';

export interface DeliveryOrder {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  pickupLocation: {
    retailer: string;
    address: string;
    contactPerson?: string;
  };
  deliveryLocation: {
    address: string;
    apartment?: string;
    floor: number;
    specialInstructions?: string;
  };
  appliance: {
    category: string;
    model?: string;
    brand?: string;
  };
  scheduledPickup: string;
  scheduledDelivery: string;
  estimatedArrival?: string;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}

export interface NotificationEvent {
  id: string;
  type: 'pickup_confirmed' | 'driver_en_route' | 'delivery_window' | 'arrival' | 'completed';
  title: string;
  message: string;
  timestamp: string;
}

export const sampleOrders: DeliveryOrder[] = [
  {
    id: 'pickup_from_home_depot_queens_refrigerator_samsung_rf23m8070sr',
    orderNumber: 'BBT-2024-001',
    status: 'en_route_delivery',
    customerName: 'John Smith',
    customerPhone: '(212) 555-0123',
    customerEmail: 'john.smith@email.com',
    pickupLocation: {
      retailer: 'The Home Depot',
      address: '120-45 31st Ave, Queens, NY 11354',
      contactPerson: 'Store Manager',
    },
    deliveryLocation: {
      address: '345 E 86th St, New York, NY 10028',
      apartment: '12B',
      floor: 12,
      specialInstructions: 'Call upon arrival. Elevator available.',
    },
    appliance: {
      category: 'refrigerator_standard_size',
      model: 'RF23M8070SR',
      brand: 'Samsung',
    },
    scheduledPickup: '2024-12-06T10:00:00',
    scheduledDelivery: '2024-12-06T14:00:00',
    estimatedArrival: '2024-12-06T14:30:00',
    totalPrice: 199.50,
    createdAt: '2024-12-05T09:00:00',
    updatedAt: '2024-12-06T13:45:00',
  },
  {
    id: 'pickup_from_lowes_manhattan_washer_dryer_set_lg_wm3900hwa',
    orderNumber: 'BBT-2024-002',
    status: 'pickup_confirmed',
    customerName: 'Maria Gonzalez',
    customerPhone: '(718) 555-0456',
    customerEmail: 'maria.g@email.com',
    pickupLocation: {
      retailer: "Lowe's Home Improvement",
      address: '517 E 117th St, New York, NY 10035',
    },
    deliveryLocation: {
      address: '23-15 31st St, Astoria, NY 11105',
      apartment: '4C',
      floor: 4,
      specialInstructions: 'No elevator - walk-up. Please call 15 minutes before arrival.',
    },
    appliance: {
      category: 'washing_machine_front_load',
      model: 'WM3900HWA',
      brand: 'LG',
    },
    scheduledPickup: '2024-12-07T09:00:00',
    scheduledDelivery: '2024-12-07T13:00:00',
    totalPrice: 79.50,
    createdAt: '2024-12-05T14:30:00',
    updatedAt: '2024-12-06T08:00:00',
  },
  {
    id: 'pickup_from_best_buy_brooklyn_dishwasher_bosch_shx3ar75uc',
    orderNumber: 'BBT-2024-003',
    status: 'delivered',
    customerName: 'David Chen',
    customerPhone: '(347) 555-0789',
    customerEmail: 'david.chen@email.com',
    pickupLocation: {
      retailer: 'Best Buy',
      address: '139 Flatbush Ave, Brooklyn, NY 11217',
    },
    deliveryLocation: {
      address: '456 7th Ave, Brooklyn, NY 11215',
      apartment: 'Garden Level',
      floor: 0,
      specialInstructions: 'Side entrance. Ring doorbell.',
    },
    appliance: {
      category: 'dishwasher_built_in',
      model: 'SHX3AR75UC',
      brand: 'Bosch',
    },
    scheduledPickup: '2024-12-05T11:00:00',
    scheduledDelivery: '2024-12-05T15:00:00',
    totalPrice: 19.50,
    createdAt: '2024-12-04T16:00:00',
    updatedAt: '2024-12-05T15:45:00',
  },
];

export const sampleNotifications: NotificationEvent[] = [
  {
    id: 'pickup_confirmed_notification',
    type: 'pickup_confirmed',
    title: 'Pickup Confirmed',
    message: 'Your appliance has been confirmed for pickup from the retailer.',
    timestamp: '2024-12-06T08:00:00',
  },
  {
    id: 'driver_en_route_notification',
    type: 'driver_en_route',
    title: 'Driver En Route',
    message: 'Our driver is on the way to pick up your appliance.',
    timestamp: '2024-12-06T10:00:00',
  },
  {
    id: 'delivery_window_reminder',
    type: 'delivery_window',
    title: 'Delivery Window Approaching',
    message: 'Your delivery window is coming up. Please be available.',
    timestamp: '2024-12-06T13:00:00',
  },
  {
    id: 'arrival_notification',
    type: 'arrival',
    title: 'Driver Arriving Soon',
    message: 'Our driver will arrive at your location in approximately 15 minutes.',
    timestamp: '2024-12-06T14:15:00',
  },
  {
    id: 'delivery_completed_confirmation',
    type: 'completed',
    title: 'Delivery Complete',
    message: 'Your appliance has been successfully delivered. Thank you for choosing Black Butterfly Transportation!',
    timestamp: '2024-12-06T14:45:00',
  },
];

export function getOrderStatusLabel(status: OrderStatus): string {
  const labels: Record<OrderStatus, string> = {
    pending: 'Order Pending',
    pickup_confirmed: 'Pickup Confirmed',
    en_route_pickup: 'En Route to Pickup',
    picked_up: 'Appliance Picked Up',
    en_route_delivery: 'En Route to Delivery',
    arrived: 'Driver Arrived',
    delivered: 'Delivered Successfully',
    cancelled: 'Order Cancelled',
  };
  return labels[status];
}

export function getOrderStatusColor(status: OrderStatus): string {
  const colors: Record<OrderStatus, string> = {
    pending: 'bg-gray-100 text-gray-800',
    pickup_confirmed: 'bg-blue-100 text-blue-800',
    en_route_pickup: 'bg-purple-100 text-purple-800',
    picked_up: 'bg-indigo-100 text-indigo-800',
    en_route_delivery: 'bg-yellow-100 text-yellow-800',
    arrived: 'bg-orange-100 text-orange-800',
    delivered: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };
  return colors[status];
}
