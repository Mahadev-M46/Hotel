# AAHARYA - South Indian Hotel Website

A beautiful, responsive single-page website for **Aharya**, a small South Indian hotel serving morning tiffins and evening chats.

## Features

- 🌅 **Morning Tiffin Menu** - Authentic breakfast items (7 30 AM - 11 AM)
- 🌙 **Evening Chats Menu** - Crispy snacks (5 PM - 8 30 PM)
- ⏰ **Live Open/Closed Status** - Real-time indicator based on browser time
- 📱 **Mobile-First Design** - Fully responsive on all devices
- 🎨 **Warm, Welcoming Design** - Saffron and cream color palette

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Shadcn/ui components

## Project Setup

### Prerequisites

- Node.js 18+ installed
- npm or bun package manager

### Local Development

```bash
# Clone the repository
git clone <your-repo-url>
cd aharya-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist` directory.

## Cloudflare Pages Deployment

### Step-by-Step Guide

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** → **Pages**
   - Click **Create application** → **Connect to Git**

3. **Configure Build Settings**
   - Select your GitHub repository
   - Set the following build configuration:
     - **Production branch:** `main`
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`

4. **Deploy**
   - Click **Save and Deploy**
   - Your site will be live at `<project-name>.pages.dev`

### Environment Variables

No environment variables are required for this static site.

### Custom Domain (Optional)

1. In Cloudflare Pages, go to your project
2. Click **Custom domains** → **Set up a custom domain**
3. Follow the DNS configuration instructions

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Sticky navigation
│   ├── Hero.tsx          # Hero section with CTAs
│   ├── MenuSection.tsx   # Food menu cards
│   ├── TimingsSection.tsx # Open/closed status
│   ├── ContactSection.tsx # Location & contact info
│   └── Footer.tsx        # Site footer
├── pages/
│   └── Index.tsx         # Main page layout
└── index.css             # Design system & styles
```

## License

© 2024 Aharya. All rights reserved.
