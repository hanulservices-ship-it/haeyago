# HaeyaGo Architecture

## Root

- assets/
- categories/
- components/
- dist/
- generator/
- pages/
- tools/

---

## Generator

generator/

builders/
core/
templates/

generator.js

---

## Builders

calculator-builder.js
content-builder.js
related-builder.js
tool-builder.js
homepage-builder.js
category-builder.js
sitemap-builder.js

seo/
meta-builder.js
schema-builder.js

---

## Output

tools/<slug>/

index.html
script.js
style.css

---

## Build Flow

Developer Menu
↓

Wizard
↓

Calculator Builder
↓

Content Builder
↓

Related Builder
↓

Tool Builder
↓

Registry
↓

Homepage
↓

Categories
↓

Sitemap
