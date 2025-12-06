export interface ApplianceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  basePrice: number;
}

export const applianceCategories: ApplianceCategory[] = [
  {
    id: 'refrigerator_standard_size',
    name: 'Standard Refrigerator',
    description: 'Single or double door refrigerators up to 36" wide',
    icon: '❄️',
    basePrice: 19.50,
  },
  {
    id: 'refrigerator_french_door',
    name: 'French Door Refrigerator',
    description: 'Premium french door models with advanced features',
    icon: '🧊',
    basePrice: 19.50,
  },
  {
    id: 'freezer_upright',
    name: 'Upright Freezer',
    description: 'Vertical standing freezers with shelving',
    icon: '🧊',
    basePrice: 19.50,
  },
  {
    id: 'freezer_chest',
    name: 'Chest Freezer',
    description: 'Horizontal chest-style deep freezers',
    icon: '📦',
    basePrice: 19.50,
  },
  {
    id: 'dishwasher_built_in',
    name: 'Built-in Dishwasher',
    description: 'Standard under-counter dishwasher installation',
    icon: '🍽️',
    basePrice: 19.50,
  },
  {
    id: 'dishwasher_portable',
    name: 'Portable Dishwasher',
    description: 'Freestanding portable dishwasher units',
    icon: '🧼',
    basePrice: 19.50,
  },
  {
    id: 'washing_machine_front_load',
    name: 'Front Load Washer',
    description: 'High-efficiency front loading washing machines',
    icon: '🌀',
    basePrice: 19.50,
  },
  {
    id: 'washing_machine_top_load',
    name: 'Top Load Washer',
    description: 'Traditional top loading washing machines',
    icon: '👕',
    basePrice: 19.50,
  },
  {
    id: 'dryer_electric',
    name: 'Electric Dryer',
    description: 'Standard electric clothes dryers',
    icon: '💨',
    basePrice: 19.50,
  },
  {
    id: 'dryer_gas',
    name: 'Gas Dryer',
    description: 'Natural gas or propane clothes dryers',
    icon: '🔥',
    basePrice: 19.50,
  },
];
