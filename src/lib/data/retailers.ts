export interface RetailPartner {
  id: string;
  name: string;
  locations: string[];
  logo?: string;
}

export const retailPartners: RetailPartner[] = [
  {
    id: 'home_depot_locations',
    name: 'The Home Depot',
    locations: [
      'Manhattan - 59th Street',
      'Brooklyn - Gowanus',
      'Queens - Rego Park',
      'Bronx - East Fordham',
      'Staten Island - Richmond Avenue',
    ],
  },
  {
    id: 'lowes_stores',
    name: "Lowe's Home Improvement",
    locations: [
      'Manhattan - East River Plaza',
      'Brooklyn - Gateway Center',
      'Queens - College Point',
      'Yonkers - Central Park Avenue',
    ],
  },
  {
    id: 'best_buy_appliances',
    name: 'Best Buy',
    locations: [
      'Manhattan - Union Square',
      'Brooklyn - Atlantic Terminal',
      'Queens - Flushing',
      'White Plains - Westchester',
    ],
  },
  {
    id: 'pc_richard_and_son',
    name: 'P.C. Richard & Son',
    locations: [
      'Manhattan - West 23rd Street',
      'Brooklyn - Avenue U',
      'Queens - Northern Boulevard',
      'Bronx - Bay Plaza',
    ],
  },
  {
    id: 'appliance_connection_warehouse',
    name: 'Appliance Connection',
    locations: [
      'Brooklyn - Warehouse District',
      'Queens - Long Island City',
    ],
  },
];
