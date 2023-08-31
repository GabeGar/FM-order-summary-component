# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   See hover states for interactive elements

### Screenshot

![Desktop Version](src/screenshots/desktop-ver.png)
![Mobile Version](src/screenshots/mobile-ver.png)

### Links

-   Solution URL: [GitHub](https://github.com/GabeGar/FM-order-summary-component)
-   Live Site URL: [Gh-Pages](https://gabegar.github.io/FM-order-summary-component/)

## My process

### Built with

-   [React](https://reactjs.org/)
-   [Vite](https://vitejs.dev/)
-   [Tailwind](https://tailwindcss.com/)
-   Mobile-first workflow
-   Flexbox
-   CSS Grid

### What I learned

-   First brush with Tailwind CSS. It was quite the experience to scratch the surface of the class utility based CSS framework.
    Read the documentation for setup and dove right in. Got stuck along the way as the utility classes are kind of difficult to appropriate, at first glance. Though, I believe I've gained a slightly better understanding to why its so
    popular, first hand.

-   While Tailwind is powerful and extremely useful, for smaller projects such as the one I've built up here, i'd say it is extreme overkill. Mileage may vary, of course as this is just my opinion. I can however, find myself utilizing it for fairly larger projects that are way more involved, containing multiple routes and pages, in an SPA.

-   There is quite a bit of setup to be done, when wanting to configure tailwind for your specific needs but being the fact that the framework is so customizable and well documented, made taking a gamble to learn it, that much more rewarding.

-   Tailwind just about removes the need for arbitrary class names normally needed, in traditionally written CSS.

```js - react
// Inside App.jsx
<div className="min-h-screen flex justify-center bg-mobileBg bg-contain bg-no-repeat px-8 py-12 sm:flex-col sm:items-center sm:bg-deskopBg bg-blue-primary-pale">
    <main className="max-h-[41.6875rem] max-w-xs sm:min-h-[41.6875rem] sm:max-w-[26rem] sm:[&>:not(:first-child)]:p-10 flex flex-col justify-between rounded-2xl [&>:first-child]:rounded-t-2xl bg-blue-neutral-pale text-center">
        // My code here ... //
    </main>
</div>
```

### Continued development

-   Will continue to dive deeper, into the Tailwind CSS Framework.

### Useful resources

-   [Tailwind Framework Documentation](https://tailwindcss.com/) - I don't think I could've done without this excellent documentation. Can't stress it enough!

## Author

-   Frontend Mentor - [@GabeGar](https://www.frontendmentor.io/profile/GabeGar)
