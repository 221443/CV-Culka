# CV Webpage

This project is a simple static CV website built with HTML, CSS, and JavaScript.

## Files

- `index.html` contains the page structure.
- `styles.css` contains layout, typography, responsiveness, and print styles.
- `data.js` contains the editable CV content and the projects array.
- `app.js` renders the content from `data.js` into the page.

## Update your projects

Open `data.js` and edit `window.cvData.projects`.

Each project entry has this shape:

```js
{
    title: "Project Name",
    role: "Role or scope",           // e.g. "Solo developer" or "Frontend"
    stack: "Tech stack",             // e.g. "JavaScript · React · CSS"
    description: "One sentence only describing the app and your contribution.",
    link: "https://example.com"      // set to "" to hide the link
}
```

To remove a project, delete one object from the array.

To add a project, copy an existing object and change the values.

## Update the rest of the CV

Open `data.js` and replace the placeholder text in:

- `profile`
- `skills`
- `education`
- `experience`

## Add a profile photo

1. Place your image in the project folder.
2. Set `profile.photo` in `data.js`, for example `"./assets/profile.jpg"`.

## Run locally

Open `index.html` in a browser.