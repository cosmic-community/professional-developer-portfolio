# Professional Developer Portfolio

![App Preview](https://imgix.cosmicjs.com/fa2353d0-a391-11f0-8dcc-651091f6a7c0-photo-1484480974693-6ca0a78fb36b-1759850780350.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive portfolio website built with Next.js 15 and Cosmic CMS. Showcases projects, skills, work experience, and client testimonials with a beautiful, professional design.

## Features

- 🎨 Modern, responsive design with smooth animations
- 📱 Mobile-first approach with perfect mobile experience
- 🚀 Built with Next.js 15 App Router for optimal performance
- 💼 Dynamic project showcase with featured images and links
- 🛠️ Skills matrix organized by category with proficiency levels
- 📊 Interactive career timeline with company details
- 💬 Client testimonials with ratings and photos
- 🎯 SEO optimized with meta tags and structured data
- ⚡ Fast loading with image optimization via imgix
- 🔄 Real-time content updates from Cosmic CMS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=68e5308c90a94dd865f464d6&clone_repository=68e5322d90a94dd865f464f9)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials"

### Code Generation Prompt

> "Based on the content model I created for "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Cosmic
- **Image Optimization:** imgix
- **Deployment:** Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your portfolio content

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

### Fetching Projects
```typescript
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const projects = response.objects
```

### Fetching Skills by Category
```typescript
const response = await cosmic.objects
  .find({ type: 'skills' })
  .props(['id', 'title', 'metadata'])
  .depth(1)

const skills = response.objects
```

### Fetching Work Experience
```typescript
const response = await cosmic.objects
  .find({ type: 'work-experience' })
  .props(['id', 'title', 'metadata'])
  .depth(1)

const workExperience = response.objects
```

## Cosmic CMS Integration

This application uses the Cosmic CMS to manage all content dynamically. The content model includes:

- **Projects:** Portfolio projects with descriptions, technologies, images, and links
- **Skills:** Technical skills organized by category with proficiency levels
- **Work Experience:** Career history with company details and descriptions
- **Testimonials:** Client feedback with ratings and photos

All content is fetched server-side for optimal performance and SEO.

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the deploy button above
2. Connect your GitHub repository
3. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Environment Variables

Set these environment variables in your deployment platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key

<!-- README_END -->