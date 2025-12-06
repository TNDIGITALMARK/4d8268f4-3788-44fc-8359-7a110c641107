# Black Butterfly Transportation

Professional appliance delivery service website for George Moncherry serving the NYC metro area.

## Features Implemented

### Core Pages
1. **Landing Page** (`/`) - Service overview, coverage areas, pricing, and CTA sections
2. **Request Delivery Form** (`/request-delivery`) - Multi-step form for booking deliveries
3. **Order Tracking Dashboard** (`/track`) - Real-time order status with timeline visualization

### Components
- **Header** - Navigation with logo, menu, and phone CTA
- **Footer** - Service areas, quick links, business hours
- **Service Cards** - Appliance categories with pricing
- **Coverage Area Cards** - Geographic service zones
- **Order Timeline** - Status progression visualization

### Mock Data
- Service areas (8 zones: Manhattan, Brooklyn, Queens, Bronx, Staten Island, Westchester, Nassau, Bergen)
- Appliance categories (10 types: refrigerators, freezers, dishwashers, washers, dryers)
- Retail partners (5 major retailers: Home Depot, Lowe's, Best Buy, P.C. Richard, Appliance Connection)
- Pricing structure (base $19.50 + additional fees for floors, weekends, express)
- Sample orders with complete delivery lifecycle

## Design System

### Colors
- **Primary (Navy Blue)**: Trust and reliability - `hsl(215, 60%, 20%)`
- **Secondary/Accent (Bright Orange)**: Call-to-action - `hsl(25, 95%, 53%)`
- **Background**: Clean white - `hsl(0, 0%, 100%)`
- **Muted**: Light gray - `hsl(215, 15%, 95%)`

### Typography
- **Font Family**: Inter (Google Fonts) - Modern, professional sans-serif
- **Heading Scale**: Bold weights (700) with tight letter-spacing
- **Body Text**: Regular weight with comfortable line-height (1.7)

### Spacing & Layout
- Container max-width: 1400px
- Mobile-first responsive design
- Touch-friendly button sizes (min 44x44px)
- Generous white space for clarity

## Technology Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 with custom design tokens
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Type Safety**: TypeScript

## Key User Flows

### Request Delivery
1. Fill customer information (name, phone, email)
2. Select pickup location (retailer + store)
3. Choose appliance type and enter details
4. Specify delivery address and floor
5. Select date/time window
6. View price estimate
7. Submit request

### Track Order
1. Enter order number
2. View current status in timeline
3. See pickup and delivery details
4. Check estimated arrival time
5. Review recent notifications
6. Contact support if needed

## Future Enhancements
- Real-time GPS tracking integration
- Automated notification system (SMS/Email)
- Customer account dashboard
- Photo confirmation on delivery
- Integration with retailer inventory systems
- Dynamic pricing based on distance
- Driver mobile app
- Payment processing
- Reviews and ratings system
