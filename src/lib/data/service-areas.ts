export interface ServiceArea {
  id: string;
  name: string;
  borough: string;
  neighborhoods: string[];
  available: boolean;
}

export const serviceAreas: ServiceArea[] = [
  {
    id: 'manhattan_delivery_zone',
    name: 'Manhattan',
    borough: 'Manhattan',
    neighborhoods: ['Upper East Side', 'Upper West Side', 'Midtown', 'Downtown', 'Chelsea', 'Greenwich Village'],
    available: true,
  },
  {
    id: 'brooklyn_delivery_zone',
    name: 'Brooklyn',
    borough: 'Brooklyn',
    neighborhoods: ['Park Slope', 'Williamsburg', 'Brooklyn Heights', 'DUMBO', 'Bushwick', 'Crown Heights'],
    available: true,
  },
  {
    id: 'queens_delivery_zone',
    name: 'Queens',
    borough: 'Queens',
    neighborhoods: ['Astoria', 'Long Island City', 'Flushing', 'Jackson Heights', 'Forest Hills', 'Bayside'],
    available: true,
  },
  {
    id: 'bronx_delivery_zone',
    name: 'The Bronx',
    borough: 'Bronx',
    neighborhoods: ['Riverdale', 'Fordham', 'Pelham Bay', 'Kingsbridge', 'Morris Park'],
    available: true,
  },
  {
    id: 'staten_island_delivery_zone',
    name: 'Staten Island',
    borough: 'Staten Island',
    neighborhoods: ['St. George', 'Tottenville', 'Great Kills', 'New Dorp', 'Port Richmond'],
    available: true,
  },
  {
    id: 'westchester_delivery_zone',
    name: 'Westchester County',
    borough: 'Westchester',
    neighborhoods: ['Yonkers', 'White Plains', 'New Rochelle', 'Mount Vernon', 'Scarsdale'],
    available: true,
  },
  {
    id: 'nassau_county_delivery_zone',
    name: 'Nassau County',
    borough: 'Nassau',
    neighborhoods: ['Hempstead', 'Garden City', 'Great Neck', 'Long Beach', 'Valley Stream'],
    available: true,
  },
  {
    id: 'bergen_county_delivery_zone',
    name: 'Bergen County, NJ',
    borough: 'Bergen County',
    neighborhoods: ['Fort Lee', 'Hackensack', 'Paramus', 'Englewood', 'Ridgewood'],
    available: true,
  },
];
