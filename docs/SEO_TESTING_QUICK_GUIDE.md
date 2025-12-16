# SEO Testing Quick Guide

## Quick Test Checklist

### ✅ Scholar Page Preview Cards

Test these URLs:
- `https://chessncode.com/projects/elora`
- `https://chessncode.com/projects/praise`

**Expected Preview Card:**
- ✅ Scholar's portrait image displayed
- ✅ Scholar name and background in title
- ✅ Quote and goal in description
- ✅ Clean URL shown

### 🔍 Testing Tools

1. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Test: Paste scholar URL → Click "Debug" → Click "Scrape Again"
   - Check: Image, title, description appear correctly

2. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Test: Paste scholar URL
   - Check: Large image card with scholar photo

3. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/
   - Test: Paste scholar URL → Click "Inspect"
   - Check: Preview matches expected format

4. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test: Paste scholar URL
   - Check: Person schema validated, no errors

5. **WhatsApp Preview**
   - Test: Send scholar URL in WhatsApp chat
   - Check: Preview card appears with image

### 📊 Lighthouse SEO Audit

Run in Chrome DevTools:
1. Open page
2. F12 → Lighthouse tab
3. Select "SEO" only
4. Run audit
5. **Target: Score ≥ 95**

### 🔗 Sitemap Verification

Check: `https://chessncode.com/sitemap.xml`

Should include:
- ✅ All core pages
- ✅ All scholar pages (`/projects/elora`, `/projects/praise`)
- ✅ Correct priorities (scholars: 0.9)
- ✅ Last modified dates

### 🤖 Robots.txt Verification

Check: `https://chessncode.com/robots.txt`

Should:
- ✅ Allow all public pages
- ✅ Block API/admin routes
- ✅ Reference sitemap

### 📝 Metadata Verification

View page source, check for:
- ✅ `<title>` tag (unique per page)
- ✅ `<meta name="description">`
- ✅ Open Graph tags (`og:title`, `og:image`, etc.)
- ✅ Twitter Card tags
- ✅ JSON-LD structured data

### 🎯 Scholar-Specific Checks

For each scholar page:
1. **Image**: Portrait used as OG image
2. **Title**: Includes scholar name and background
3. **Description**: Includes quote and goal
4. **Structured Data**: Person schema present
5. **Breadcrumbs**: Home → Projects → Scholar Name

---

**Pro Tip**: After making changes, always clear social media caches using their debugger tools!

