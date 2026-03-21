# 🚀 Quick Reference - Metadata Structure

## File Location
`/src/data/metadata.js`

---

## 📊 Complete Structure Overview

```javascript
metadata = {
  
  // ========== SITE ==========
  site: {
    name: "AutoPro"
    tagline: "SERVICES"
    fullName: "AutoPro Services"
    description: "..."
    year: 2026
  }
  
  // ========== NAVBAR ==========
  navbar: {
    links: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" }
    ]
    ctaButton: {
      text: "Book Now"
      link: "/contact"
    }
  }
  
  // ========== HOME PAGE ==========
  home: {
    hero: {
      subtitle, title, titleHighlight, description, image
      buttons: [{ text, link, primary }]
    }
    servicesSection: { subtitle, title, description, viewAllLink, viewAllText }
    services: [{ title, description, image }]
    whyChooseUs: { subtitle, title, description, benefits[], ctaText, ctaLink }
    features: [{ title, description }]
    testimonials: {
      subtitle, title, description
      items: [{ name, role, content, rating }]
    }
    cta: { title, description, buttonText, buttonLink }
  }
  
  // ========== ABOUT PAGE ==========
  about: {
    hero: { subtitle, title, description }
    stats: [{ number, label }]
    story: {
      subtitle, title, description, image
      paragraphs: ["...", "...", "..."]
    }
    mission: { title, description }
    vision: { title, description }
    values: [{ title, description }]
    team: {
      subtitle, title, description, image
      highlights: [{ title, description }]
    }
    cta: { title, description, buttonText, buttonLink }
  }
  
  // ========== SERVICES PAGE ==========
  services: {
    hero: { subtitle, title, description }
    mainServices: [{ title, description, image }]
    additionalServices: [{ title, description }]
    whyChoose: {
      subtitle, title, description
      benefits: ["...", "...", "..."]
    }
    process: {
      title: "Service Process"
      steps: [{ number, title, description }]
    }
    pricing: {
      title, description
      features: [{ label, sublabel }]
    }
    cta: { title, description, buttonText, buttonLink }
  }
  
  // ========== CONTACT PAGE ==========
  contact: {
    hero: { subtitle, title, description }
    info: [{ type, title, details, subdetails }]
    form: {
      title, successMessage
      fields: {
        name: { label, placeholder, required }
        email: { label, placeholder, required }
        phone: { label, placeholder, required }
        service: {
          label, placeholder, required
          options: [{ value, label }]
        }
        message: { label, placeholder, required }
      }
      submitButton, submittingButton
    }
    businessHours: {
      title
      schedule: [{ days, hours }]
    }
    emergency: { title, description }
    visitInfo: { title, description }
    faq: {
      subtitle, title
      items: [{ question, answer }]
    }
  }
  
  // ========== FOOTER ==========
  footer: {
    company: { name, tagline, description }
    quickLinks: {
      title
      links: [{ name, path }]
    }
    services: {
      title
      items: ["...", "...", "..."]
    }
    contact: { title, address, phone, email }
    social: { facebook, instagram, twitter }
    legal: {
      copyright
      links: [{ name, url }]
    }
  }
}
```

---

## 🎯 Most Common Updates

### Change Company Info
```javascript
site: {
  name: "YourCompany",
  tagline: "YOUR TAGLINE",
}
```

### Update Phone/Email
```javascript
footer: {
  contact: {
    phone: "(555) 999-8888",
    email: "contact@yourcompany.com",
    address: "456 New Street, City, State 12345"
  }
}
```

### Add Service
```javascript
services: {
  mainServices: [
    // Add new object:
    {
      title: "New Service",
      description: "Service description",
      image: "https://image-url.jpg"
    }
  ]
}
```

### Change Hero Image
```javascript
home: {
  hero: {
    image: "https://new-hero-image.jpg"
  }
}
```

### Update Social Links
```javascript
footer: {
  social: {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourpage",
    twitter: "https://twitter.com/yourpage"
  }
}
```

---

## 📍 Where Content Appears

| Metadata Location | Appears On |
|-------------------|------------|
| `site.*` | Navbar, Footer |
| `navbar.*` | Top navigation (all pages) |
| `home.*` | Home page only |
| `about.*` | About page only |
| `services.*` | Services page only |
| `contact.*` | Contact page only |
| `footer.*` | Footer (all pages) |

---

## ✅ Update Checklist

Before going live, update:
- [ ] `site.name` - Company name
- [ ] `footer.contact.*` - All contact info
- [ ] `footer.social.*` - Social media links
- [ ] `home.hero.image` - Hero background
- [ ] `contact.info` - Contact details
- [ ] All service images
- [ ] Testimonials
- [ ] About story and images

---

## 💡 Pro Tips

1. **Use Find & Replace** to change repeated text across the file
2. **Keep backup** of original metadata.js before major changes
3. **Test locally** after updating content
4. **Use consistent image sizes** for better layout
5. **Update copyright year** in `site.year`

---

## 🔗 Component Mapping

| Component | Uses Metadata |
|-----------|---------------|
| `Navbar.tsx` | `site`, `navbar` |
| `Footer.tsx` | `site`, `footer` |
| `Home.tsx` | `home` |
| `About.tsx` | `about` |
| `Services.tsx` | `services` |
| `Contact.tsx` | `contact` |
| `CTASection.tsx` | Props from pages |
| `ServiceCard.tsx` | Props from pages |
| `SectionTitle.tsx` | Props from pages |

---

## 🎨 Easy Customizations

**Change CTA button on every page:**
```javascript
// Update these 4 locations:
home.cta.buttonText
about.cta.buttonText
services.cta.buttonText
navbar.ctaButton.text
```

**Update business hours everywhere:**
```javascript
contact: {
  businessHours: { schedule: [...] },
  info: [{ type: "hours", details: "..." }]
}
```

**Modify all service offerings:**
```javascript
services.mainServices = [...]
services.additionalServices = [...]
home.services = [...]  // Preview on home page
footer.services.items = [...]  // Footer list
```

---

That's it! Edit `/src/data/metadata.js` and you're done! 🎉
