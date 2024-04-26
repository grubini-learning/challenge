# Analysis

## Implementation details

### React

- Context

  - Wanted to avoid prop drilling and unnecessary re renders

- State hook

- Memoization

  - Saw that `Header` and `Footer` were being re rendered every time that user decided to update the show state with the Profile.
  - Since these sections of the card do not need to re render every time chose to use `memo` to avoid that.

- Conditional Rendering

  - Needed to control that hiding and showing of the card numbers
  - Possible ways
    - useState
    - Context

- Functional Components

  - Easier to digest
  - Did not need ErrorBoundaries or life cycle control that `useEffect` couldn't offer
    - ErrorBoundary

- getDetails

  - Thought that the return was getting to convoluted and wanted to give some type of separation

- Why classes in Dot?

  - Needed to apply other CSS classes that didn't really belong in the Dot realm.

- PropTypes

  - To leverage some type of error pre compile checking

- Import `svg` over inputting the path in the `srcSet`

  - helps optimize app performance
  - if its in public directory we can use the path

- CSS is not encapsulated with CSS Modules

  - By Design because I don't see the app having two cards at a time, so I feel comfortable having it global.
  - CSS Modules approach
    - Since the only place that I use the inner CSS classes are in the media queries, I could move them inside of each sub component.
    - Another approach is using a wildcard CSS class selector
      - `[class^="icon"]`: must start with 'icon'
      - `[class*="icon"]`: contains the word 'icon'
      - `[class$="-icon"]`: ends with '-icon'

- Reusability
  - Dots, because they were being used in two places
  - Decided to split the code in a more declarative approach to make it more legible and easier to digest in smaller chunks for other engineers and myself with future edits or bugs
- Tests
  - The card shows the content when `show` is true
  - Snapshot testing
  - Accessibility testing
  - Used the profiler, to try limit unnecessary re renders

### HTML

- Semantic HTML
  - `<header>`
    - The HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.
  - `<footer>`
    - The HTML element represents a footer for its nearest ancestor sectioning content or sectioning root element. A <footer> typically contains information about the author of the section, copyright data or links to related documents.
  - `<section>`
    - a generic sectioning element, and should only be used if there isn't a more specific element to represent it.
  - `<article>`
    - element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.
- `srcSet`
  ```html
  <img
    srcset="
      /wp-content/uploads/flamingo4x.jpg 4025w,
      /wp-content/uploads/flamingo3x.jpg 3019w,
      /wp-content/uploads/flamingo2x.jpg 2013w,
      /wp-content/uploads/flamingo1x.jpg 1006w
    "
    src="/wp-content/uploads/flamingo-fallback.jpg"
  />
  ```

### CSS

- `background-image`
  - could have uses the shorthand
    - `background: url('') cover;`
    - `background: linear-gradient(black, white);`
    - `background: radial-gradient(circle, black, white);`
    - fallback color: `background: url(sweettexture.jpg) blue;`
    - fallback images `background: url(logo.png), url(background-pattern.png);`
- `background-size`
  - `cover` tells the browser to make sure the image always covers the entire container
  - `contain`, on the other hand, says to always show the whole image, even if that leaves a little space to the sides or bottom.
- `max-width`
  - The max-width property overrides the width property and never break line.
- `width`: current width.
  - `clamp(min, ideal, max)`
- `min-width`
  - Will always override max-width
- `calc`
- `rem` vs `%`
- `transform`
  - allows you to visually manipulate an element by skewing, rotating, translating, or scaling
- `box-sizing` (border is part of the width)
  - content-box: only the content is the width and then add the padding and border on top.
  - padding-box: Width and height values apply to the element’s content and its padding. The border is added to the outside of the box. Currently, only Firefox supports the padding-box value.
  - border-box: Width and height values apply to the content, padding, and border.
  - inherit: inherits the box sizing of the parent element.
- `appearance`
  - used to display an element using a platform-native styling based on the users’ operating system’s theme.
- `transition`
  - property used to represent up to four transition-related longhand properties
  - `transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];`
- CSS variables
- CSS Selectors
  - by attribute
  - Pseudo class
  - Combined with ~ (Subsequent Siblings)
- How did you come up with the Breakpoints
  - the most common device resolutions should sit in the middle of each grouping
  - we should put our breakpoints in dead zones, as far away from “real-world” resolutions as possible
  - breakpoints
    - 0-550px — Mobile
    - 550-1100px — Tablet
    - 1100-1500px — Laptop
    - 1500+px — Desktop

### JS

- spread - ...
- reps in Dots

### File Structure

- Leveraged `index.js` for barrels
