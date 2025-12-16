# SEO Implementation Guide

## Overview

This document explains the comprehensive SEO implementation for Chessncode, including metadata, social media previews, structured data, and crawler optimization.

## Architecture

### 1. SEO Utility Library (`lib/seo.ts`)

The central SEO utility provides:

- **`generateMetadata()`**: Creates complete Next.js metadata objects
- **`generateScholarMetadata()`**: Specialized metadata for scholar pages with images
- **Structured Data Generators**: JSON-LD schemas for various content types
- **Image Optimization**: Handles social media image requirements

### 2. Page-Level Metadata

Each page exports metadata using Next.js 15's metadata API:

```typescript
export const metadata: Metadata = generateMetadata({
  title: 'Page Title',
  description: 'Page description',
  keywords: ['keyword1', 'keyword2'],
  url: '/page-path',
  image: '/image.jpg', // Optional
});
```

### 3. Structured Data (JSON-LD)

Structured data is added via `<script type="application/ld+json">` tags in page components:

- **Organization Schema**: Company information
- **WebSite Schema**: Site-wide search functionality
- **BreadcrumbList**: Navigation hierarchy
- **Person Schema**: Scholar/student profiles
- **WebPage Schema**: Individual page metadata

## Implementation Details

### Scholar Pages SEO

Scholar pages (`/projects/[studentSlug]`) have special SEO treatment:

1. **Dynamic Metadata**: Generated from student data
2. **Scholar Image**: Student portrait used as Open Graph image
3. **Person Schema**: Rich structured data for each scholar
4. **Breadcrumbs**: Clear navigation hierarchy
5. **High Priority**: Scholar pages have 0.9 priority in sitemap

**Example Scholar Metadata:**
```typescript
{
  title: "Oise Elora Iguehi - Top Female Chess Player in Nigeria | Chessncode Scholar",
  description: "Oise Elora Iguehi is a Chessncode Scholar...",
  image: "/elora-portrait.jpeg",
  type: "profile"
}
```

### Social Media Previews

#### Open Graph Tags (Facebook, LinkedIn, WhatsApp)

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Page description" />
<meta property="og:image" content="https://chessncode.com/image.jpg" />
<meta property="og:url" content="https://chessncode.com/page" />
<meta property="og:site_name" content="Chessncode" />
```

#### Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Page Title" />
<meta name="twitter:description" content="Page description" />
<meta name="twitter:image" content="https://chessncode.com/image.jpg" />
<meta name="twitter:creator" content="@chessncode" />
```

### Image Requirements

For optimal social media previews:

1. **Open Graph Image**: 1200x630px (1.91:1 ratio)
2. **Twitter Card**: 1200x630px (summary_large_image)
3. **Square Logo**: 1200x1200px (1:1 ratio) for profile images
4. **Format**: JPEG or PNG
5. **File Size**: < 1MB recommended
6. **Absolute URLs**: All images use absolute URLs

Scholar images are automatically used as preview images when their pages are shared.

### Sitemap

Dynamic sitemap includes:

- All core pages (home, about, contact, partners, projects)
- All scholar pages (automatically generated)
- Priority levels (homepage: 1.0, scholars: 0.9, others: 0.6-0.8)
- Change frequency (homepage: weekly, others: monthly)
- Last modified dates

### Robots.txt

Optimized for search engines:

- Allows all public pages
- Blocks API routes, admin, private areas
- Includes sitemap reference
- Environment-aware (production vs development)

## Testing Your SEO Implementation

### 1. Google Rich Results Test

**URL**: https://search.google.com/test/rich-results

**What to Test:**
- Structured data validation
- Rich result eligibility
- Schema.org compliance

**How to Use:**
1. Enter your page URL
2. Click "Test URL"
3. Review structured data errors/warnings
4. Check rich result preview

### 2. Facebook Sharing Debugger

**URL**: https://developers.facebook.com/tools/debug/

**What to Test:**
- Open Graph tags
- Image preview
- Title and description

**How to Use:**
1. Enter your page URL
2. Click "Debug"
3. Review scraped data
4. Click "Scrape Again" to refresh cache

**Important**: Facebook caches previews. Use "Scrape Again" after making changes.

### 3. Twitter Card Validator

**URL**: https://cards-dev.twitter.com/validator

**What to Test:**
- Twitter Card tags
- Image preview
- Card type (summary_large_image)

**How to Use:**
1. Enter your page URL
2. Review card preview
3. Check for errors/warnings

### 4. LinkedIn Post Inspector

**URL**: https://www.linkedin.com/post-inspector/

**What to Test:**
- Open Graph tags
- LinkedIn-specific preview

**How to Use:**
1. Enter your page URL
2. Click "Inspect"
3. Review preview

### 5. WhatsApp Link Preview

**How to Test:**
1. Send your page URL in WhatsApp
2. Check if preview appears
3. Verify image, title, description

**Note**: WhatsApp uses Open Graph tags similar to Facebook.

### 6. Google Search Console

**URL**: https://search.google.com/search-console

**What to Monitor:**
- Indexing status
- Search performance
- Mobile usability
- Core Web Vitals
- Structured data issues

### 7. Lighthouse SEO Audit

**How to Run:**
1. Open Chrome DevTools
2. Go to "Lighthouse" tab
3. Select "SEO" category
4. Run audit

**Target Score**: ≥ 95

**What It Checks:**
- Meta descriptions
- Title tags
- Alt text for images
- Structured data
- Mobile-friendly
- Crawlable links

## Scholar Page Preview Cards

When a scholar page URL is shared, the preview card shows:

1. **Image**: Scholar's portrait (e.g., `/elora-portrait.jpeg`)
2. **Title**: Scholar name and background
3. **Description**: Scholar quote and current goal
4. **URL**: Clean, readable URL (`/projects/elora`)

**Example Preview Card:**
```
┌─────────────────────────────────────┐
│  [Scholar Portrait Image]            │
│                                      │
│  Oise Elora Iguehi - Top Female     │
│  Chess Player in Nigeria            │
│                                      │
│  Chess taught me pattern            │
│  recognition, data science lets me   │
│  apply it to real problems...        │
│                                      │
│  chessncode.com/projects/elora      │
└─────────────────────────────────────┘
```

## Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_BASE_URL=https://chessncode.com
GOOGLE_SEARCH_CONSOLE=your-verification-code
YANDEX_VERIFICATION=your-verification-code
YAHOO_VERIFICATION=your-verification-code
```

## Best Practices

### 1. Title Tags
- ✅ Unique for each page
- ✅ 50-60 characters
- ✅ Include brand name
- ✅ Keyword-rich but natural

### 2. Meta Descriptions
- ✅ 150-160 characters
- ✅ Compelling and descriptive
- ✅ Include call-to-action
- ✅ Unique for each page

### 3. Images
- ✅ High quality (1200x630px minimum)
- ✅ Relevant to content
- ✅ Optimized file size
- ✅ Alt text for accessibility

### 4. URLs
- ✅ Clean and readable
- ✅ Include keywords where appropriate
- ✅ Use hyphens, not underscores
- ✅ Lowercase

### 5. Structured Data
- ✅ Valid JSON-LD
- ✅ Matches page content
- ✅ No duplicate schemas
- ✅ Test with Google Rich Results

## Common Issues & Solutions

### Issue: Preview image not showing

**Solutions:**
1. Verify image URL is absolute (starts with `https://`)
2. Check image dimensions (1200x630px minimum)
3. Ensure image is publicly accessible
4. Clear Facebook/Twitter cache using their debuggers
5. Verify image MIME type is correct

### Issue: Wrong title/description in preview

**Solutions:**
1. Check metadata export in page file
2. Verify no duplicate metadata
3. Clear social media cache
4. Check for conflicting meta tags

### Issue: Structured data errors

**Solutions:**
1. Validate JSON-LD syntax
2. Use Google Rich Results Test
3. Ensure required fields are present
4. Check for duplicate schemas

### Issue: Scholar page not indexed

**Solutions:**
1. Verify page is in sitemap
2. Check robots.txt allows crawling
3. Submit URL in Google Search Console
4. Ensure page is accessible (no authentication)

## Monitoring & Maintenance

### Regular Checks

1. **Weekly**: Check Google Search Console for errors
2. **Monthly**: Review sitemap for new pages
3. **Quarterly**: Audit all pages with Lighthouse
4. **After Changes**: Test previews on all platforms

### Adding New Scholars

When adding a new scholar:

1. Add student data to `constants/studentsData.ts`
2. Sitemap automatically includes new page
3. Metadata is generated dynamically
4. Test preview card using debuggers
5. Submit URL in Google Search Console

### Updating Existing Pages

1. Update metadata in page file
2. Clear social media caches
3. Test previews
4. Monitor Search Console for changes

## Performance Considerations

- Metadata is server-rendered (not client-only)
- Structured data is inlined (no extra requests)
- Images are optimized and lazy-loaded
- Sitemap is generated at build time
- No impact on page load speed

## Compliance

This implementation follows:

- ✅ Google Search Guidelines
- ✅ Meta Open Graph Protocol
- ✅ Twitter Card Specifications
- ✅ Schema.org Standards
- ✅ WCAG Accessibility Guidelines
- ✅ Next.js Best Practices

## Support

For issues or questions:

1. Check this documentation
2. Test with provided tools
3. Review Next.js metadata documentation
4. Check Google Search Central

---

**Last Updated**: 2025
**Version**: 1.0

