# 📝 Metadata Guide - Centralized Content Management

## Overview

All website content is managed through a single file: `/src/data/metadata.js`

This architecture allows you to update any text, link, image, or data on the website without touching component code.

---

## 📁 File Structure

```
/src/data/metadata.js    ← ALL CONTENT LIVES HERE
```

---

## 🎯 How to Update Content

### 1. **Site Information**
```javascript
site: {
  name: "AutoPro",              // Change company name
  tagline: "SERVICES",           // Change tagline
  description: "...",            // Update description
}
```

### 2. **Navigation**
```javascript
navbar: {
  links: [                       // Add/remove/edit nav links
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ],
  ctaButton: {
    text: "Book Now",            // Change button text
    link: "/contact",            // Change button link
  }
}
```

### 3. **Home Page**

**Hero Section:**
```javascript
home: {
  hero: {
    title: "Your Car Deserves",
    titleHighlight: "Expert Care",
    description: "...",
    image: "https://...",        // Update hero image
    buttons: [...]
  }
}
```

**Services Preview:**
```javascript
home: {
  services: [
    {
      title: "Car Maintenance",
      description: "...",
      image: "https://...",      // Update service image
    }
  ]
}
```

**Testimonials:**
```javascript
home: {
  testimonials: {
    items: [
      {
        name: "John Davis",
        role: "Business Owner",
        content: "...",
        rating: 5,
      }
    ]
  }
}
```

### 4. **About Page**
```javascript
about: {
  stats: [
    { number: "15+", label: "Years Experience" }
  ],
  story: {
    paragraphs: ["...", "..."]   // Update story text
  },
  values: [...]                  // Update company values
}
```

### 5. **Services Page**
```javascript
services: {
  mainServices: [
    {
      title: "General Maintenance",
      description: "...",
      image: "https://...",
    }
  ],
  process: {
    steps: [...]                 // Update service process
  }
}
```

### 6. **Contact Page**
```javascript
contact: {
  info: [
    {
      type: "phone",
      title: "Phone",
      details: "(555) 123-4567",  // Update phone number
      subdetails: "Mon-Fri: 8AM - 6PM"
    }
  ],
  form: {
    fields: {...}                 // Customize form fields
  }
}
```

### 7. **Footer**
```javascript
footer: {
  contact: {
    address: "123 Auto Street...", // Update address
    phone: "(555) 123-4567",       // Update phone
    email: "info@autopro.com",     // Update email
  },
  social: {
    facebook: "#",                 // Add social links
    instagram: "#",
    twitter: "#",
  }
}
```

---

## 🖼️ How to Change Images

Simply replace the image URL in metadata.js:

```javascript
// Before
image: "https://images.unsplash.com/old-image.jpg"

// After
image: "https://images.unsplash.com/new-image.jpg"
```

Images are used in:
- Hero sections
- Service cards
- About page (team/facility photos)

---

## ✏️ How Components Use Metadata

### Example: Navbar
```javascript
import { metadata } from "../../data/metadata";

export function Navbar() {
  const { site, navbar } = metadata;
  
  return (
    <nav>
      <span>{site.name}</span>
      {navbar.links.map(link => ...)}
    </nav>
  );
}
```

### Example: Home Page
```javascript
import { metadata } from "../../data/metadata";

export function Home() {
  const { home } = metadata;
  
  return (
    <div>
      <h1>{home.hero.title}</h1>
      <p>{home.hero.description}</p>
      {home.services.map(service => ...)}
    </div>
  );
}
```

---

## 🔄 Quick Update Workflow

1. Open `/src/data/metadata.js`
2. Find the section you want to update
3. Edit the text, links, or images
4. Save the file
5. Done! Changes appear instantly

---

## 📋 Common Updates Checklist

**Changing Company Name:**
- [ ] `site.name`
- [ ] `footer.company.name`

**Updating Contact Info:**
- [ ] `contact.info` array
- [ ] `footer.contact` object

**Adding New Service:**
- [ ] Add to `services.mainServices`
- [ ] Optionally add to `home.services`
- [ ] Update `footer.services.items`

**Changing Hero Image:**
- [ ] Update `home.hero.image`

**Updating Social Links:**
- [ ] Change `footer.social` URLs

---

## 🎨 Customization Tips

### Adding a New Testimonial
```javascript
home: {
  testimonials: {
    items: [
      // ... existing testimonials
      {
        name: "New Customer",
        role: "Happy Client",
        content: "Great service!",
        rating: 5,
      }
    ]
  }
}
```

### Adding a New Service
```javascript
services: {
  mainServices: [
    // ... existing services
    {
      title: "New Service",
      description: "Description here",
      image: "https://your-image-url.jpg",
    }
  ]
}
```

### Changing Business Hours
```javascript
contact: {
  businessHours: {
    schedule: [
      { days: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
      { days: "Saturday", hours: "10:00 AM - 2:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ]
  }
}
```

---

## ⚠️ Important Notes

1. **Keep the structure intact** - Don't change object keys, only values
2. **Images must be valid URLs** - Use full URLs starting with `https://`
3. **Test after major changes** - Check all pages after bulk updates
4. **Arrays maintain order** - Items appear in the order they're listed

---

## 🚀 Benefits of This System

✅ **Easy Updates** - Change content without touching code
✅ **Centralized** - All content in one place
✅ **No Code Knowledge Required** - Just edit text and URLs
✅ **Safe** - Components won't break if you edit metadata
✅ **Scalable** - Easy to add new content
✅ **Fast** - Update multiple pages at once

---

## 📞 Need Help?

- Content is in: `/src/data/metadata.js`
- Components are in: `/src/app/components/`
- Pages are in: `/src/app/pages/`

Just edit metadata.js and watch your changes appear!
