# The Menu 🍽️

A responsive food menu web app built with vanilla HTML, CSS, and JavaScript — featuring category filtering and live search.

## Features

- **Category Tabs** — Filter dishes by cuisine: All, Italian, Chinese, Desi, French
- **Live Search** — Type to instantly find dishes by name or category (partial match supported)
- **Dish Cards** — Each card displays an image, name, description, price, and serving size
- **Clean UI** — Minimal, elegant layout using Fraunces + Inter typography

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (DOM manipulation, `querySelectorAll`, event listeners)

## How It Works

- **Tabs**: Clicking a category tab filters cards by matching CSS class (`italian`, `chinese`, `desi`, `french`) or shows all
- **Search**: Typing in the search bar filters cards in real-time by checking if the dish name or category *contains* the typed query (case-insensitive)
- Both filters directly manipulate `card.style.display` to show/hide matching dishes

## Project Structure

```
├── index.html      # Markup for menu, tabs, search bar, and cards
├── food.css        # Styling
├── food.js         # Tab filtering + search logic
└── imgs/           # Dish images
```

## What I Learned

- DOM traversal with `querySelector` inside looped elements
- Event-driven filtering logic (`click`, `keyup`)
- Combining multiple filter states (category + search) on the same dataset

## Author

Built by Ashhad Khan as part of SMIT (Saylani Mass IT Training) coursework.
