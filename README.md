# Portfolio

Source for [mertefekurt.me](https://mertefekurt.me), a fast static personal portfolio for Mert Efe Kurt.

## Overview

- Plain HTML, CSS and JavaScript
- Published as a static GitHub Pages site from the repository root
- Custom domain preserved through `CNAME`
- No build step or package manager required
- Self-hosted Geist variable font
- Local technology icons and real project imagery
- System-aware light and dark themes
- SEO metadata, Open Graph tags, favicon, `robots.txt` and `sitemap.xml` included

## Local Development

```bash
python3 -m http.server 8000
```

Open:

```text
http://127.0.0.1:8000
```

## Structure

```text
index.html       Main portfolio page
css/style.css    Responsive layout and visual system
js/main.js       Navigation and small UI behavior
img/photo.jpg    Profile image used in social sharing metadata
img/icons/       Local technology and social icons
img/projects/    Project screenshots and code previews
fonts/           Self-hosted webfont files
CNAME            Custom domain configuration
robots.txt       Search crawler rules
sitemap.xml      Sitemap for mertefekurt.me
```

## Deployment

The site is designed to stay compatible with GitHub Pages static hosting. Do not remove `CNAME` unless the custom domain changes.
