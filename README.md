# IronPulse Fitness

A responsive, single-page website for a fictional gym in Cairo. It was designed in Figma (mobile-first, 390px) and then built with plain HTML, CSS, and JavaScript. No frameworks or build tools.

> Portfolio project: a client-style landing page for a local business.

Live demo: https://ziadmohamed1911.github.io/IronPulse-website/


## Features

- **Sticky pill navbar** with a hamburger dropdown on mobile and inline links on desktop
- **Hero section** with a photo background, a gradient overlay, and call-to-action buttons
- **Classes, Pricing, Trainers, and Testimonials** sections built from reusable card components
- **Highlighted "Most Popular" plan** in the pricing section
- **Working contact form** with live validation, error messages, a loading state, and a success message
- **Contact info card** and a footer with social links
- **Smooth scrolling** between sections, with hover and focus effects on cards and buttons
- **Responsive layout** that adapts from phones to desktop without a framework

## Built with

- HTML5 (semantic elements)
- CSS3 (custom properties, Flexbox, Grid, media queries)
- Vanilla JavaScript (ES6+)
- [Font Awesome](https://fontawesome.com/) for icons
- [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- Figma for the design

## Project structure

```
ironpulse/
├── index.html
├── style.css
├── index.js
├── images/
│   └── hero-background.jpg
└── README.md
```

## Getting started

1. Clone the repository:
   ```bash
   git clone https://github.com/ziadmohamed1911/ironpulse.git
   ```
2. Open the folder in your editor.
3. Open `index.html` in a browser, or run it with a local server such as the VS Code **Live Server** extension.

No installation or build step is needed.

## Design system

The styles are driven by CSS custom properties defined in `:root`:

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#111111` | Page background |
| `--card` | `#1A1A1A` | Cards and the navbar |
| `--accent` | `#FF5A1F` | Buttons, highlights, icons |
| `--border` | `rgba(255, 255, 255, 0.1)` | 1px strokes |
| `--radius-card` | `24px` | Cards |
| `--radius-pill` | `999px` | Buttons and the navbar |

Typography is Inter throughout.

### Naming convention

Class names are lowercase and hyphenated (for example `section-header`, `class-card`, `info-row-icon`), with no BEM-style double underscores.

## Responsive behavior

The page is mobile-first. Base styles target a 390px phone, and a single `@media (min-width: 768px)` block adds the desktop layout:

- The hamburger menu is replaced by inline links.
- The hero, sections, and navbar share a centered column of up to 1100px.
- Cards use `repeat(auto-fit, minmax(240px, 1fr))`, so they fill the row automatically (1 column on phones, up to 4 on desktop).

## Contact form

The form validates in the browser before sending:

| Field | Rule |
| --- | --- |
| Full name | At least 3 characters |
| Phone number | 8 to 15 digits, with an optional `+`, spaces, or dashes |
| Interested plan | A plan must be selected |
| Message | Optional |

Errors appear under each field, the first invalid field receives focus, and errors clear as soon as the user fixes them.

### Receiving real messages

There is no backend, so by default the form only simulates sending. To receive real submissions:

1. Create a free form at [Formspree](https://formspree.io/) (or a similar service).
2. Copy the form endpoint URL.
3. Paste it into the `FORM_ENDPOINT` constant at the top of the contact form section in `index.js`:
   ```js
   const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";
   ```

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`)
- The hamburger is a real `<button>` with `aria-expanded`, `aria-controls`, and an updating label
- The menu closes with the Escape key and after choosing a link
- Form fields have labels, `aria-describedby` error messages, and `aria-invalid` states
- Decorative icons use `aria-hidden`, and the star ratings have text labels
- Visible `:focus-visible` styles on links and buttons

## Possible improvements

- Replace the trainer and testimonial placeholders with real photos
- Connect the form to a live backend or form service
- Add a favicon and Open Graph tags for link previews
- Add a language switch (Arabic and English)

## Author

**Ziad Mohamed**: [GitHub](https://github.com/ziadmohamed1911)) · [LinkedIn](https://www.linkedin.com/in/ziad-mohamed-905a2129b/))

## Notes

IronPulse Fitness is a fictional business created for portfolio purposes. The names, prices, and contact details are placeholders.
