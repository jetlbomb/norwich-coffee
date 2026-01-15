# Norwich Coffee Journal

A Norwich Coffee Journal web app built with React and Firebase.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Update Firebase config in `src/App.jsx` with your actual Firebase credentials.

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deploy to GitHub Pages

The app is configured to deploy to `https://jetlbomb.github.io/norwich-coffee/`

After building, use `gh-pages` to deploy:
```bash
npm run build
npm install -D gh-pages
npx gh-pages -d dist
```

## Features

- Log coffee shops with ratings, prices, and vibes
- Vibe Matcher to find perfect spots
- Real-time Firestore sync
- Anonymous Firebase authentication
Norwich Coffee Guide
