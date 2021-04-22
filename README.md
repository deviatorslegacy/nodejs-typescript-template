# Typescript Node.js Template

## Description

This is a project template for making full-stack [Typescript][0] apps.

This doesn't make use any complicated build tools or web frameworks,
but does use [Typescript][0], [Express.js][1], [Embedded Javascript][2],
[Socket.io][3], and [Sass][4], which is what I use for my personal projects.

## NPM Scripts

Call these with `npm run [command]` 

- `build-server:dev`: `tsc` builds server-side code, using `--watch` flag.
- `build-server:prod`: `tsc` builds server-side code (once).

- `build-client:dev`: `tsc` builds client-side code, using `--watch` flag.
- `build-client:prod`: `tsc` builds client-side code (once).

- `build-sass:dev`: `sass` builds stylesheets, using `--watch` flag.
- `build-sass:prod`: `sass` builds stylesheets (once).

## Directory Structure

Source code is organized like this:
```sh
src (from root project directory)
├── src/client # Client-side typescript
│   └── main.ts
├── src/server # Server-side typescript
│   └── server.ts
└── src/styles # CSS/SCSS/Sass styles
    └── main.css
```

From here, it is compiled to the public/dist directory:
```sh
dist (from root project directory)
└── server.js # Output server-side javascript here

public/dist (from root project directory)
├── css # Output css here (also outputs map files by default)
│   ├── main.css
│   └── main.css.map
└── js # Output client-side javascript here
    └── main.js
```

[DeviatorsLegacy][5], 2021


[0]: https://www.typescriptlang.org/ 
[1]: https://expressjs.com/
[2]: https://www.npmjs.com/package/ejs/
[3]: https://socket.io/
[4]: https://sass-lang.com/
[5]: https://github.com/deviatorslegacy/
