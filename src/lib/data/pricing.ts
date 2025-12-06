export interface PricingStructure {
  id: string;
  name: string;
  description: string;
  amount: number;
  type: 'base' | 'addon' | 'surcharge';
}

export const pricingStructure: PricingStructure[] = [
  {
    id: 'base_delivery_fee_19_50',
    name: 'Base Delivery Fee',
    description: 'Standard appliance pickup and delivery within NYC metro',
    amount: 19.50,
    type: 'base',
  },
  {
    id: 'additional_floor_fee_15_00',
    name: 'Additional Floor Fee',
    description: 'Per floor charge for stairs (above ground floor)',
    amount: 15.00,
    type: 'addon',
  },
  {
    id: 'weekend_delivery_surcharge_25_00',
    name: 'Weekend Delivery',
    description: 'Saturday or Sunday delivery surcharge',
    amount: 25.00,
    type: 'surcharge',
  },
  {
    id: 'express_delivery_option_35_00',
    name: 'Express Delivery',
    description: 'Same-day or next-day priority delivery',
    amount: 35.00,
    type: 'addon',
  },
];

export function calculateDeliveryPrice(
  basePrice: number,
  additionalFloors: number = 0,
  isWeekend: boolean = false,
  isExpress: boolean = false
): number {
  let total = basePrice;

  if (additionalFloors > 0) {
    total += additionalFloors * 15.00;
  }

  if (isWeekend) {
    total += 25.00;
  }

  if (isExpress) {
    total += 35.00;
  }

  return total;
}
