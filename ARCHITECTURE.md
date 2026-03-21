# 🏗️ Architecture Overview - Metadata System

## System Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    /src/data/metadata.js                    │
│                  (SINGLE SOURCE OF TRUTH)                   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ export const metadata = {                           │   │
│  │   site: { name, tagline, ... }                      │   │
│  │   navbar: { links, ctaButton, ... }                 │   │
│  │   home: { hero, services, testimonials, ... }       │   │
│  │   about: { story, values, team, ... }               │   │
│  │   services: { mainServices, process, ... }          │   │
│  │   contact: { form, faq, info, ... }                 │   │
│  │   footer: { company, links, social, ... }           │   │
│  │ }                                                    │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                             │
                             ▼
        ┌───────────────────────────────────────┐
        │  Components Import & Use Metadata     │
        └───────────────────────────────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   LAYOUT     │    │    PAGES     │    │  REUSABLE    │
│  COMPONENTS  │    │              │    │  COMPONENTS  │
└──────────────┘    └──────────────┘    └──────────────┘
        │                    │                    │
        ▼                    ▼                    ▼
  ┌─────────┐         ┌──────────┐        ┌──────────┐
  │ Navbar  │         │   Home   │        │   CTA    │
  │ (uses   │         │  (uses   │        │ Section  │
  │ navbar, │         │  home)   │        │ (uses    │
  │ site)   │         └──────────┘        │ props)   │
  └─────────┘                             └──────────┘
  ┌─────────┐         ┌──────────┐        ┌──────────┐
  │ Footer  │         │  About   │        │ Service  │
  │ (uses   │         │  (uses   │        │  Card    │
  │ footer, │         │  about)  │        │ (uses    │
  │ site)   │         └──────────┘        │ props)   │
  └─────────┘                             └──────────┘
                      ┌──────────┐        ┌──────────┐
                      │ Services │        │ Section  │
                      │  (uses   │        │  Title   │
                      │ services)│        │ (uses    │
                      └──────────┘        │ props)   │
                      ┌──────────┐        └──────────┘
                      │ Contact  │
                      │  (uses   │
                      │ contact) │
                      └──────────┘
                             │
                             ▼
                    ┌────────────────┐
                    │   RENDERED     │
                    │    WEBSITE     │
                    └────────────────┘
```

---

## Data Flow Examples

### Example 1: Navbar Component

```
metadata.js
    │
    ├─→ site.name ──────────────┐
    │                           │
    ├─→ site.tagline ───────────┤
    │                           │
    └─→ navbar.links[] ─────────┤
                                ▼
                        ┌──────────────┐
                        │  Navbar.tsx  │
                        │              │
                        │  Displays:   │
                        │  - Logo      │
                        │  - Menu      │
                        │  - CTA       │
                        └──────────────┘
                                │
                                ▼
                        [Appears on all pages]
```

### Example 2: Home Page

```
metadata.js
    │
    ├─→ home.hero ──────────────┐
    │                           │
    ├─→ home.services[] ────────┤
    │                           │
    ├─→ home.features[] ────────┤
    │                           │
    ├─→ home.testimonials ──────┤
    │                           │
    └─→ home.cta ───────────────┤
                                ▼
                         ┌─────────────┐
                         │  Home.tsx   │
                         │             │
                         │  Sections:  │
                         │  - Hero     │
                         │  - Services │
                         │  - Features │
                         │  - Reviews  │
                         │  - CTA      │
                         └─────────────┘
                                │
                                ▼
                        [Home page rendered]
```

### Example 3: Service Card Component

```
metadata.js
    │
    └─→ services.mainServices[] ────┐
                                     │
                                     ▼
                              ┌─────────────┐
                              │Services.tsx │
                              │             │
                              │  .map()     │
                              └─────────────┘
                                     │
                                     ▼
                        ┌───────────────────────┐
                        │   ServiceCard.tsx     │
                        │                       │
                        │   Receives props:     │
                        │   - title             │
                        │   - description       │
                        │   - image             │
                        │   - icon              │
                        │                       │
                        │   Renders styled card │
                        └───────────────────────┘
                                     │
                                     ▼
                        [Multiple cards displayed]
```

---

## Component Hierarchy

```
App.tsx
└─── RouterProvider
     └─── RootLayout.tsx
          ├─── Navbar.tsx ←────────── Uses: metadata.site, metadata.navbar
          │
          ├─── <Outlet /> (Page Content)
          │    │
          │    ├─── Home.tsx ←──────── Uses: metadata.home
          │    │    ├─── Hero Section
          │    │    ├─── ServiceCard[] ← Receives data from metadata.home.services
          │    │    ├─── Features
          │    │    ├─── Testimonials
          │    │    └─── CTASection ←── Receives data from metadata.home.cta
          │    │
          │    ├─── About.tsx ←─────── Uses: metadata.about
          │    │    ├─── Stats
          │    │    ├─── Story
          │    │    ├─── Mission/Vision
          │    │    ├─── Values
          │    │    └─── CTASection
          │    │
          │    ├─── Services.tsx ←──── Uses: metadata.services
          │    │    ├─── ServiceCard[] (Main)
          │    │    ├─── ServiceCard[] (Additional)
          │    │    ├─── Process Steps
          │    │    └─── CTASection
          │    │
          │    └─── Contact.tsx ←───── Uses: metadata.contact
          │         ├─── Contact Cards
          │         ├─── Form
          │         ├─── Map
          │         └─── FAQ
          │
          └─── Footer.tsx ←────────── Uses: metadata.site, metadata.footer
```

---

## Update Propagation Flow

```
USER EDITS metadata.js
         │
         ├─→ Changes site.name
         │         │
         │         ├─→ Updates Navbar logo
         │         └─→ Updates Footer branding
         │
         ├─→ Changes home.hero.title
         │         │
         │         └─→ Updates Home page hero section
         │
         ├─→ Adds service to services.mainServices[]
         │         │
         │         └─→ New ServiceCard appears on Services page
         │
         └─→ Changes footer.contact.phone
                   │
                   ├─→ Updates Footer phone number
                   └─→ Updates Contact page phone display
```

---

## File Relationships

```
PROJECT ROOT
│
├─── /src/data/
│    └─── metadata.js ←──────────── [SOURCE OF ALL CONTENT]
│
├─── /src/app/
│    │
│    ├─── App.tsx
│    ├─── routes.ts
│    │
│    ├─── /layouts/
│    │    └─── RootLayout.tsx
│    │
│    ├─── /components/
│    │    ├─── Navbar.tsx ←──────── imports metadata
│    │    ├─── Footer.tsx ←──────── imports metadata
│    │    ├─── CTASection.tsx ←──── uses props (from metadata)
│    │    ├─── ServiceCard.tsx ←─── uses props (from metadata)
│    │    └─── SectionTitle.tsx ←── uses props (from metadata)
│    │
│    └─── /pages/
│         ├─── Home.tsx ←────────── imports metadata.home
│         ├─── About.tsx ←───────── imports metadata.about
│         ├─── Services.tsx ←────── imports metadata.services
│         ├─── Contact.tsx ←─────── imports metadata.contact
│         └─── NotFound.tsx
│
└─── Documentation/
     ├─── README_METADATA_SYSTEM.md
     ├─── METADATA_GUIDE.md
     ├─── QUICK_REFERENCE.md
     ├─── EXAMPLES.md
     └─── ARCHITECTURE.md ←───────── (this file)
```

---

## Import Pattern

### Layout Components (Navbar, Footer)
```javascript
// Import at top of file
import { metadata } from "../../data/metadata";

// Destructure in component
const { site, navbar } = metadata;

// Use in JSX
<span>{site.name}</span>
```

### Page Components (Home, About, Services, Contact)
```javascript
// Import at top of file
import { metadata } from "../../data/metadata";

// Destructure in component
const { home } = metadata;  // or about, services, contact

// Use in JSX
<h1>{home.hero.title}</h1>
```

### Reusable Components (CTASection, ServiceCard, SectionTitle)
```javascript
// Receive props from parent
interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

// Parent passes metadata values
<CTASection
  title={home.cta.title}
  description={home.cta.description}
  buttonText={home.cta.buttonText}
  buttonLink={home.cta.buttonLink}
/>
```

---

## Benefits of This Architecture

### 1. Separation of Concerns
```
DATA (metadata.js)
  ↓
LOGIC (components)
  ↓
PRESENTATION (rendered UI)
```

### 2. Single Responsibility
- **metadata.js** = Content only
- **Components** = Rendering logic only
- **Pages** = Layout composition only

### 3. Easy Maintenance
```
Need to update text? → Edit metadata.js ✅
Need to fix styling? → Edit components ✅
Need to add feature? → Edit components ✅
```

### 4. Scalability
```
Add new page:
1. Add data to metadata.js
2. Create page component
3. Import metadata
4. Render data

No need to touch existing code! ✅
```

---

## Design Principles

1. **DRY (Don't Repeat Yourself)**
   - Content defined once
   - Reused everywhere

2. **Single Source of Truth**
   - All data in metadata.js
   - No content hardcoded in components

3. **Props Down, Data Up**
   - Parent components pass data down
   - Child components receive via props

4. **Separation of Data and Presentation**
   - Data lives in metadata.js
   - Presentation lives in components

5. **Type Safety**
   - TypeScript interfaces for props
   - Predictable data structure

---

## Future Extensibility

Adding new features is easy:

### Add New Page Section
```javascript
// 1. Add to metadata.js
home: {
  newSection: {
    title: "New Section",
    items: [...]
  }
}

// 2. Use in Home.tsx
{home.newSection.items.map(...)}
```

### Add New Service Category
```javascript
// 1. Add to metadata.js
services: {
  premiumServices: [
    { title: "...", description: "..." }
  ]
}

// 2. Render in Services.tsx
{services.premiumServices.map(...)}
```

### Add New Contact Method
```javascript
// 1. Add to metadata.js
contact: {
  info: [
    { type: "whatsapp", title: "WhatsApp", ... }
  ]
}

// 2. Display in Contact.tsx (already supports it!)
```

---

This architecture makes your website maintainable, scalable, and easy to update! 🚀
