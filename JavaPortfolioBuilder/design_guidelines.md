# AWS Cloud Engineer Portfolio - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from Linear's clean professionalism, Stripe's technical credibility, and modern developer portfolios (GitHub, personal tech sites). Focus on establishing trust and showcasing technical expertise with a polished, minimal aesthetic.

## Core Design Principles
1. **Professional Authority**: Establish immediate credibility through clean design and clear hierarchy
2. **Technical Clarity**: Present complex information (AWS services, certifications) in scannable, organized formats
3. **Breathing Room**: Generous whitespace to prevent overwhelming technical content
4. **Progressive Disclosure**: Surface key information first, details on interaction

## Typography System
- **Primary Font**: Inter or DM Sans (Google Fonts) - modern, professional
- **Monospace Font**: JetBrains Mono for technical terms, certifications, code references
- **Hierarchy**:
  - Hero Headline: text-5xl md:text-6xl lg:text-7xl font-bold
  - Section Headers: text-3xl md:text-4xl font-semibold
  - Subsection Headers: text-xl md:text-2xl font-semibold
  - Body: text-base md:text-lg leading-relaxed
  - Technical Labels: text-sm font-mono uppercase tracking-wide

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-6xl for content sections
- Component spacing: gap-8 md:gap-12 between major elements
- Card padding: p-6 md:p-8

## Page Structure & Sections

### 1. Hero Section (80vh)
- Full-width professional hero image (cloud infrastructure, data center aesthetic, or professional headshot with tech background)
- Overlay: Name, title "AWS Cloud Engineer", tagline "5+ Years Building Scalable Cloud Infrastructure"
- Primary CTA: "View Projects" with backdrop blur
- Secondary CTA: "Download Resume"
- Scroll indicator at bottom

### 2. About Section
- Two-column layout (md:grid-cols-2)
- Left: Professional summary, key metrics (5+ years, certifications count)
- Right: Quick skills highlight or professional photo
- Stats callouts: Years of Experience, Projects Completed, Certifications

### 3. Experience Timeline
- Vertical timeline with connected dots/lines
- Each role: Company, title, dates, key achievements (3-4 bullet points max)
- Accordion-style expansion for detailed responsibilities
- Visual hierarchy: Most recent role emphasized

### 4. Technical Skills Grid
- Multi-column grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Categorized skill cards: "Cloud Services", "Security", "Automation", "Networking", "Migration", "Programming"
- Each card: Category icon (use Heroicons), skill list with subtle dividers
- Monospace font for technical terms (EC2, Lambda, S3, etc.)

### 5. Projects Showcase
- Grid layout: grid-cols-1 md:grid-cols-2 gap-8
- Featured project cards with:
  - Project title (bold, large)
  - Tech stack badges (AWS services used)
  - Description (2-3 sentences)
  - Key outcomes/metrics
  - Hover state: subtle elevation
- Projects from CV: VPN Peering, S3 Lifecycle, Transit Gateway, Lift-and-Shift Migration, Chenani Nashri Tunnel Project

### 6. Certifications
- Horizontal card layout showcasing AWS certifications
- Each certification: Logo placeholder, title, credential ID option
- Visual distinction for active certifications

### 7. Contact Section
- Two-column: Left (contact form), Right (contact info + location)
- Contact info cards: Email, Phone, Location, LinkedIn/Website
- Form fields: Name, Email, Message with clean input styling
- Map integration placeholder or illustration

### 8. Footer
- Single row with navigation links
- Social links (LinkedIn, GitHub)
- Copyright and built-with technology mention

## Component Library

### Navigation
- Sticky header with blur backdrop
- Logo/Name on left
- Navigation links: About, Experience, Skills, Projects, Contact
- Mobile: Hamburger menu with slide-in drawer

### Cards
- Border: border-2 with subtle hover state
- Rounded: rounded-xl
- Padding: p-6 md:p-8
- Hover: Subtle translate-y lift (-2px) with transition

### Buttons
- Primary: px-8 py-3 rounded-lg font-semibold
- Backdrop blur for hero CTAs: backdrop-blur-md
- Icon support with Heroicons
- No custom hover/active states (rely on framework defaults)

### Badge/Pill Components
- For tech skills: px-3 py-1 rounded-full text-sm
- Consistent sizing across all badge instances

### Icons
**Library**: Heroicons via CDN
- Section icons: 24x24 or 32x32
- Navigation icons: 20x20
- Use outline style for consistency

## Responsive Behavior
- Mobile-first approach
- Breakpoints: md (768px), lg (1024px)
- Single-column stacking on mobile for all grid layouts
- Hamburger navigation below md breakpoint
- Reduced padding on mobile: py-12 instead of py-24

## Images

### Hero Image
Large, full-width professional image establishing technical credibility:
- Type: Cloud infrastructure visualization, server room, or professional headshot with tech background
- Treatment: Subtle gradient overlay for text readability
- Placement: Full hero section background

### Section Images
- About section: Professional headshot or workspace photo (optional, right column)
- Project cards: Can include AWS architecture diagrams or screenshots (optional thumbnails)

## Animations
**Minimal and purposeful only:**
- Scroll-triggered fade-in for sections (once per section load)
- Smooth scroll navigation
- Card hover transitions (transform, elevation)
- Timeline dot highlight on scroll
- No parallax, no continuous animations

## Accessibility
- Semantic HTML structure
- ARIA labels for navigation and interactive elements
- Sufficient contrast ratios throughout
- Keyboard navigation support
- Focus states on all interactive elements