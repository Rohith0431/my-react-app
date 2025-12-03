# My React App — Card Component Demo

A small starter project built with Vite + React to practice JSX and component composition. The app demonstrates a reusable `Card` component that displays an image, title, username and description. Styling is done with Bulma classes.

Key features

- Reusable `Card` component (`src/Card.jsx`) that accepts `title`, `tUsername`, `description`, and `image` props
- Example data stored in `src/Data/data.js` and mapped to `Card` instances in `src/App.jsx`
- Uses Bulma for layout and basic styling

Tech stack

- React (functional components + hooks)
- Vite (dev server & bundling)
- Bulma CSS

Important files

- `src/App.jsx` — App root that renders the list of cards
- `src/Card.jsx` — Card component implementation
- `src/Data/data.js` — Sample data and image imports
- `src/images/` — Local image assets used by the cards

Getting started

1. Install dependencies (from `my-react-app` folder):

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the app in your browser (Vite usually serves at `http://localhost:5173`).

Notes

- When using Vite, import images from `src` (e.g. `import alexa from "./images/alexa.png"`) and pass the imported value to components. Avoid raw string paths for images in source files because Vite needs to process the imports so assets are bundled and served correctly.
- If images do not appear, check `src/Data/data.js` to ensure images are imported and that `Card` receives the imported image value via the `image` prop.

Contributing

- Improve styles, add tests, or expand the dataset. Open a PR with focused changes.

License

- MIT (adjust if you prefer a different license)
