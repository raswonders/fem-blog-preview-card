# Frontend Mentor - Blog Preview Card

This is a solution to the [Blog preview card challenge](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Build pixel perfect card component while

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Live Site URL: [on netlify](https://flourishing-pegasus-8d04a8.netlify.app/)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/)
- [Tailwindcss](https://tailwindcss.com/) 

### What I learned

I've realized how easy is to extend tailwindcss theme. This solution I've added bunch of custom colors, shadow style and font.

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "hsla(0, 0%, 7%, 1)",
        pureWhite: "hsla(0, 0%, 100%, 1)",
        yellow: "hsla(47, 89%, 63%, 1)",
        grey: "hsla(0, 0%, 50%, 1)",
      },
      boxShadow: {
        customSm: "8px 8px 0px 0px #000;",
        customMd: "16px 16px 0px 0px #000;",
      },
      fontFamily: {
        custom: ["Figtree", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
```
Also this was first time I was trying to capture hover effect in REACT. Learned about new event handlers.
```html
onMouseEnter 
onMouseLeave
```

### Continued development

Want to keep getting better at styling with tailwindcss and building rendering logic in REACT.

## Author

- Frontend Mentor - [@raswonders](https://www.frontendmentor.io/profile/raswonders)
- Twitter - [@raswonders](https://www.twitter.com/raswonders)
- LinkedIn - [Rastislav Hepner](https://www.linkedin.com/in/rastislavhepner/)
