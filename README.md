# My Learning Journal

A responsive learning journal built to document my progress in web development and other technical topics. The project presents learning notes as article cards, with a dedicated article view for reading full entries.

## Features

- **Article listing:** Displays article cards generated dynamically from a JavaScript data array.
- **Individual article pages:** Reuses a single article page template to display different articles based on URL query parameters.
- **Data-driven content:** Separates article data from the HTML structure and JavaScript rendering logic.
- **Responsive layout:** Uses CSS Grid, Flexbox, and responsive sizing to adapt to different screen widths.
- **Article navigation:** Uses links to navigate from article cards to the corresponding full article.
- **Learning journal:** Documents progress across Linux, DevOps, Git, Docker, Python, and web development.

## Built With

- HTML
- CSS
- JavaScript

## What I Practiced

- Creating and manipulating DOM elements with JavaScript
- Rendering repeated UI elements using `forEach()`
- Working with JavaScript modules and shared data
- Passing article identifiers through URL query parameters
- Retrieving URL parameters with `URLSearchParams`
- Building reusable page templates
- Using CSS Grid and Flexbox for layout
- Creating responsive designs

## Project Structure

```text
MyLearningJournal/
├── index.html
├── article.html
├── about.html
├── index.css
├── article.css
├── index.js
├── article.js
└── data.js
```

## How It Works

Article information is stored in a shared JavaScript array. The homepage uses that data to generate article cards.

When an article is selected, its identifier is passed through the URL. The article page reads the identifier, retrieves the corresponding data, and dynamically renders the full article using a reusable HTML structure.

This avoids creating a separate HTML page for every article.

## Purpose

This project is part of my ongoing practice with HTML, CSS, and JavaScript. It focuses on understanding how data, DOM manipulation, navigation, and responsive layouts work together to create a multi-page website.
