# Tacoza - Enterprise Restaurant Management Platform

A comprehensive restaurant management platform delivering operational intelligence and growth-focused solutions for independent establishments to multi-location enterprises.

## Overview

Tacoza is a Next.js-based landing page showcasing our enterprise-grade restaurant management system. The platform integrates point-of-sale, inventory management, customer relationship management, and business analytics into a unified solution designed for operational efficiency and strategic growth.

## Key Features

- **Point of Sale System** - Streamlined transaction processing with real-time order management
- **Inventory & Recipe Management** - Automated stock tracking and recipe costing
- **CRM & Customer Analytics** - Comprehensive customer profiling and behavior analysis
- **Digital Order Management** - Multi-channel ordering including QR-based table ordering
- **Business Intelligence Dashboard** - Real-time analytics and performance metrics
- **Kitchen Display System (KDS)** - Digital kitchen operations management
- **AI-Powered Recommendations** - Intelligent menu suggestions and upselling
- **Multi-location Support** - Centralized management for restaurant chains

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom components
- **Animations**: AOS (Animate On Scroll) library
- **Typography**: Custom font optimization with next/font
- **Components**: Reusable UI components with TypeScript
- **Package Manager**: Bun for fast package management

## Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- Git for version control

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/tacoza-landing.git
cd tacoza-landing
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Run the development server:

```bash
bun dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
tacoza-landing/
├── app/                          # Next.js App Router
│   ├── (default-pages)/         # Main landing pages
│   ├── (support-pages)/         # Support and documentation
│   ├── api/                     # API routes
│   ├── css/                     # Global styles
│   └── layout.tsx               # Root layout
├── components/                   # Reusable UI components
│   ├── ui/                      # Base UI components
│   ├── hero.tsx                 # Hero section
│   ├── section-*.tsx            # Feature sections
│   └── cta.tsx                  # Call-to-action components
├── content/                     # MDX content files
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   └── fonts/                   # Custom fonts
└── README.md
```

## Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun type-check` - Run TypeScript type checking

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure build settings:
   - Build Command: `bun run build`
   - Output Directory: `.next`
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
bun run build
bun start
```

## Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPPORT_EMAIL=support@tacoza.co
```

### Customization

- **Colors**: Modify `tailwind.config.js` for brand colors
- **Fonts**: Update font imports in `app/layout.tsx`
- **Content**: Edit component files or MDX content files
- **Animations**: Configure AOS settings in components

## Pricing Tiers

The platform offers three main pricing tiers:

1. **Pilot Program** - Free 30-day trial with full platform access
2. **Professional** - ₹7,999/year per outlet for complete operational suite
3. **Enterprise** - Custom pricing for advanced integration and development

## Features by Tier

### All Tiers Include:
- Point of Sale System
- Billing & Kitchen Order Management
- Inventory & Recipe Management
- Digital Order Management
- Core Platform Features

### Professional Adds:
- CRM & Customer Management
- Tax & Accounting Management
- Daily Sales & Business Reports
- Admin Mobile App
- Table & Menu Management
- Cloud Dashboard
- Unlimited Terminal Support

### Enterprise Includes:
- Kitchen Display System (KDS)
- AI Waiter & Recommendations
- Smart Catalogue (Kiosk)
- QR & Captain Ordering Apps
- Marketing & SMS Campaigns
- Customer Loyalty & Feedback
- Complete Website Integration
- Custom Development & Integration

## Support

- **Documentation**: Visit `/support` for comprehensive guides
- **Email**: support@tacoza.co
- **Implementation**: Schedule consultation through the website

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is proprietary software owned by Tacoza. All rights reserved.

## Technical Resources

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [AOS Library](https://michalsnik.github.io/aos/) - Animate on scroll library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
