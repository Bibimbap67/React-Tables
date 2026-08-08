# My Bias Archive

A simple React page that lists my favorite K-pop groups and members.

## Scroll

<video autoplay loop muted playsinline disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback" width="100%">
  <source src="src/assets/scroll.mp4" type="video/mp4">
</video>

## About

Each group is shown in a card with a blurred background image, a short description, and a table of my bias members (photo, stage name, birth name, age, position).

## Hover

Hover a member photo to dim the page. The photo and tags stay on top.

<video autoplay loop muted playsinline disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback" width="100%">
  <source src="src/assets/hover.mp4" type="video/mp4">
</video>

## Stack

- React
- Ant Design (Card, Table, Tag)

## Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Files

- `src/App.js` — layout and cards
- `src/App.css` — card background, hover dim, table styles
- `src/components/MemberData.js` — member list, groups, card backgrounds
