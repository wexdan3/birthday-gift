# Fancy Birthday Gift Website

This is a free, customizable, professional-looking birthday website.

You do not need to know coding deeply. Most customization happens in one file:

`content.js`

## What this website includes

- Fancy hero section
- Main birthday photo
- Countdown timer
- Private letter section
- Secret note button
- Reasons cards
- Timeline/memories section
- Gallery with clickable images
- Music button
- Confetti button
- Dark/light mood switch
- Mobile-friendly design
- Free GitHub Pages deployment

## Files you will edit

### 1. `content.js`

Open `content.js` and change:

- `personName`
- `birthdayDate`
- `heroMessage`
- `letterBody`
- `secretNote`
- `reasons`
- `timeline`
- `gallery`
- `colors`

Use this birthday date format:

```js
birthdayDate: "2026-08-20T00:00:00"
```

### 2. `assets`

Replace these files with your own photos:

- `main-photo.svg`
- `memory-1.svg`
- `memory-2.svg`
- `memory-3.svg`
- `memory-4.svg`
- `memory-5.svg`
- `memory-6.svg`

You can use JPG, PNG, WEBP, or SVG.

Example:

If you add a photo called `aisha-photo.jpg`, update `content.js` like this:

```js
mainPhoto: "assets/aisha-photo.jpg"
```

For gallery:

```js
{
  image: "assets/beach-day.jpg",
  caption: "That beach day I will never forget"
}
```

### 3. Music

Add a music file named:

`song.mp3`

inside the `assets` folder.

Important: use a song file you are allowed to use. If you do not add music, the music button will simply show an alert.

## How to preview in VS Code

Best method:

1. Open the project folder in VS Code.
2. Install the free VS Code extension called **Live Server**.
3. Right-click `index.html`.
4. Click **Open with Live Server**.

You can also double-click `index.html`, but Live Server is better.

## How to publish for free with GitHub Pages

1. Go to GitHub.
2. Create a new repository.
3. Name it something like:

`birthday-gift`

4. Make it **Public**.
5. Upload all project files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `content.js`
   - `assets` folder
   - `README.md`
6. Open the repository settings.
7. Go to **Pages**.
8. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
9. Save.
10. Wait for GitHub to give you a link.

Your site link will look like:

`https://your-username.github.io/birthday-gift/`

## Customization ideas

Good edits that make it feel personal:

- Use real inside jokes.
- Replace generic reasons with specific memories.
- Use 6 to 12 photos.
- Use captions that only the person understands.
- Change colors to match their favorite colors.
- Keep the letter honest, not overly dramatic.

## Color examples

Pink luxury:

```js
colors: {
  accent: "#ff7ab6",
  accentTwo: "#ffd166",
  accentThree: "#8bd3ff"
}
```

Purple luxury:

```js
colors: {
  accent: "#b388ff",
  accentTwo: "#ffd6ff",
  accentThree: "#80ffdb"
}
```

Gold and black:

```js
colors: {
  accent: "#d4af37",
  accentTwo: "#fff1a8",
  accentThree: "#b8c0ff"
}
```

Blue soft:

```js
colors: {
  accent: "#7cc7ff",
  accentTwo: "#c2f970",
  accentThree: "#e0b1ff"
}
```

## Important limitation

This is a static website. That is good for a gift site because it is free and simple.

It does not include:

- Login
- Database
- Comments saved online
- Uploads from visitors
- Payments
- Backend server

For a birthday gift website, you do not need those.
