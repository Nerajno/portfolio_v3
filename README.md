# Nerando Johnson - Portfolio & Developer Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/e2cb8d28-2711-421d-b71d-044bbb28ddda/deploy-status)](https://app.netlify.com/sites/radiant-sprinkles-d2960e/deploys)

A modern, SEO-optimized portfolio website built with Astro, showcasing projects, blog posts, speaking engagements, and professional experience. This site serves as both a personal brand hub and a technical demonstration of modern web development practices.

**Live Site:** [https://developingdvlpr.com](https://developingdvlpr.com)

## 🎯 Project Overview

This portfolio website is built to showcase my work as a front-end developer specializing in Vue3, TypeScript, and modern JavaScript frameworks. The site emphasizes performance, accessibility, and SEO optimization while providing a clean, professional user experience.

### Key Features

- **📝 Content-Rich Blogging System** - MDX-powered blog with reading time estimates and GEO optimization
- **🎨 Portfolio Showcase** - Dynamic project portfolio with case studies and detailed project information
- **🎤 Speaking Engagements** - Dedicated section for talks, presentations, and community involvement
- **📧 Contact Integration** - Multiple email service providers (Nodemailer, SendGrid, Web3Forms)
- **📊 Analytics & Tracking** - Microsoft Clarity integration with Partytown for performance
- **🌐 SEO & GEO Optimized** - Comprehensive meta tags, structured data, and AI-optimized content
- **🎨 Modern UI/UX** - TailwindCSS with dark mode support and responsive design
- **⚡ Performance Focused** - Server-side rendering with Astro and optimized asset delivery
- **📈 View Tracking** - Supabase-powered blog post view counter

## 🛠️ Tech Stack

### Core Framework
- **[Astro](https://astro.build)** v5.1.7 - Static site generator with SSR capabilities
- **[Tailwind CSS](https://tailwindcss.com)** v4.1.10 - Utility-first CSS framework
- **[MDX](https://mdxjs.com)** v4.0.6 - Markdown with JSX for rich blog content

### Integrations & Services
- **Netlify** - Hosting and deployment platform
- **Supabase** - Backend database for view tracking and analytics
- **Microsoft Clarity** - User behavior analytics
- **Web3Forms** - Form handling service
- **SendGrid** / **Nodemailer** - Email service options

### UI Components & Icons
- **Astro Icon** - Icon system with Iconify support
- **Simple Icons** - Brand icon collection
- **Boxicons** - General purpose icon library
- **Font Awesome** - Additional icon options

### SEO & Analytics
- **astro-seo-plugin** - Comprehensive SEO configuration
- **@astrojs/sitemap** - Automatic sitemap generation
- **Partytown** - Third-party script optimization
- **Reading Time** - Blog post reading time calculation

## 📁 Project Structure

```
/
├── public/                      # Static assets
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── assets/                  # Image assets processed by Astro
│   ├── components/              # Reusable Astro components
│   │   ├── container.astro
│   │   ├── sectionhead.astro
│   │   └── ...
│   ├── content/                 # Content collections
│   │   ├── blog/               # MDX blog posts
│   │   └── config.ts           # Content collection schemas
│   ├── data/                    # Static data files
│   │   └── funFacts.js
│   ├── layouts/                 # Page layouts
│   │   └── Layout.astro
│   ├── lib/                     # Utility libraries
│   ├── pages/                   # File-based routing
│   │   ├── index.astro         # Homepage
│   │   ├── about.astro         # About page
│   │   ├── blog.astro          # Blog listing
│   │   ├── portfolio.astro     # Portfolio showcase
│   │   ├── speaking.astro      # Speaking engagements
│   │   ├── contact.astro       # Contact form
│   │   ├── digital_garden.astro
│   │   ├── api/                # API endpoints
│   │   └── blog/[...slug].astro # Dynamic blog posts
│   ├── styles/                  # Global styles
│   ├── types/                   # TypeScript type definitions
│   └── utils/                   # Utility functions
├── db/                          # Astro DB configuration (if used)
├── astro.config.mjs             # Astro configuration
├── tailwind.config.cjs          # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **pnpm** (recommended)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nerajno/astro_portfolio_v3.git
   cd astro_portfolio_v3
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and configure the following:
   ```env
   # Email Configuration
   EMAIL_HOST="mail.privateemail.com"
   EMAIL="your-email@example.com"
   EMAIL_PASS="your-email-password"
   EMAIL_PORT=993

   # Web3Forms API Key
   WEB3FORMS_API_KEY="your-web3forms-api-key"

   # Supabase Configuration
   SUPABASE_URL="https://your-project.supabase.co"
   SUPABASE_ANON_KEY="your-supabase-anon-key"
   ```

4. **Set up Supabase (Optional - for blog view tracking)**
   See [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) for detailed instructions.

### Development

Start the development server:

```bash
npm run dev
# or
pnpm dev
```

The site will be available at `http://localhost:4321`

### Build & Preview

Build for production:

```bash
npm run build
# or
pnpm build
```

Preview the production build locally:

```bash
npm run preview
# or
pnpm preview
```

## 📝 Content Management

### Adding Blog Posts

Create new MDX files in `src/content/blog/`:

```mdx
---
draft: false
title: "Your Post Title"
snippet: "A brief description of your post"
image: {
  src: "/images/your-image.jpg",
  alt: "Image description"
}
publishDate: "2025-01-31"
category: "Technology"
author: "Nerando Johnson"
tags: [javascript, web-development]
---

Your content here...
```

### Updating Portfolio Projects

Edit portfolio data in the relevant page components or data files in `src/data/`.

### Managing Speaking Engagements

Update speaking events in `src/pages/speaking.astro` or associated data files.

## 🎨 Customization

### Styling

- **Global Styles:** `src/styles/`
- **Tailwind Config:** `tailwind.config.cjs`
- **Component Styles:** Inline in `.astro` files using Tailwind classes

### SEO Configuration

Each page includes comprehensive SEO setup with:
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card metadata
- Structured data (Schema.org JSON-LD)
- Canonical URLs

Example from `about.astro`:
```javascript
const seoConfig = {
  title: 'About Nerando Johnson - Software Developer',
  description: '...',
  canonical: 'https://developingdvlpr.com/about',
  // ... more configuration
};
```

### Analytics

Microsoft Clarity is configured in `astro.config.mjs`. Update the project ID:

```javascript
clarityIntegration({
  projectId: 'your-clarity-project-id',
  enabled: true,
})
```

## 🌐 Deployment

### Netlify Deployment

This project is optimized for Netlify deployment:

1. **Connect your repository** to Netlify
2. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Add environment variables** in Netlify dashboard
4. **Deploy!**

See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions.

### Environment Variables in Production

Ensure all environment variables from `.env.example` are configured in your hosting platform:
- Email service credentials
- Supabase configuration
- API keys (Web3Forms, SendGrid, etc.)

## 📊 Features & Integrations

### Email Services

The contact form supports multiple email providers:
- **Nodemailer** (default) - Custom SMTP configuration
- **SendGrid** - Cloud email service
- **Web3Forms** - Simple form backend

Configure in `.env` based on your preference.

### View Tracking

Blog posts include view counting powered by Supabase. Views are tracked automatically when visitors read posts.

To enable:
1. Set up Supabase (see [SUPABASE_SETUP.md](./SUPABASE_SETUP.md))
2. Configure environment variables
3. Run the schema SQL scripts

### Reading Time

Automatic reading time calculation for blog posts using `remark-reading-time.mjs` plugin.

## 🔧 Development Tools

- **ESLint** - Code linting with Astro plugin
- **Prettier** - Code formatting (`.prettierrc`)
- **TypeScript** - Type checking (`tsconfig.json`)

Run linting:
```bash
npm run astro check
```

## 📚 Documentation

Additional documentation files:
- [DEPLOY.md](./DEPLOY.md) - Deployment guide
- [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) - Supabase configuration


## 🤝 Contributing

This is a personal portfolio project, but suggestions and bug reports are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Nerando Johnson**
- Website: [https://developingdvlpr.com](https://developingdvlpr.com)
- GitHub: [@Nerajno](https://github.com/Nerajno)
- Twitter: [@nerajno](https://twitter.com/nerajno)
- LinkedIn: [Nerando Johnson](https://www.linkedin.com/in/nerando-johnson/)

## 🙏 Acknowledgments

- [Jerome Hardaway](https://www.linkedin.com/in/jeromehardaway/) and Ryan Furrer](https://www.linkedin.com/in/ryanfurrer/)
- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Initial template inspiration from [Astroship](https://astroship.web3templates.com/) by [Web3Templates](https://web3templates.com)
- Hosted on [Netlify](https://www.netlify.com)
- Icons from [Iconify](https://iconify.design/), [Boxicons](https://boxicons.com/), and [Font Awesome](https://fontawesome.com/)

## 📞 Support

For questions or support, please:
- Open an issue in this repository
- Contact via the [website contact form](https://developingdvlpr.com/contact)
- Reach out on [Twitter](https://twitter.com/nerajno)

---

**Built with ❤️ using Astro, TailwindCSS, and modern web technologies**
