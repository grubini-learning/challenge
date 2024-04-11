# Overview

This challenge allows a deeper view in the development flow and the considerations taken to tackle a HTML/CSS challenge.

## Considerations

- Media queries for

  - desktop
  - laptop
  - tablet
  - phone L/M
  - phone S

- Responsive units

  - `rem` for font size
  - `%` for most widths

- Accessibility

  - Outline for the interactive element
  - Content fitting in a 200% zoom

- Development experience

  - Prop types
  - Declarative approach
  - Reusability
  - Easiness of understanding

- Optimizations

  - Context: Alleviated some prop drilling, can be used without the ctx as well.
  - Memo: noticed that the header and footer did not need to re render when the `show` state changed.

## Walk through

Data will show for both cards by checking the one checkbox.

### Two approaches

- Brute force

  - allowed for initial solution
  - initial progress, made it easier for declarative approach
  - allowed to identify patterns and areas the could use code reusability

- Declarative

  - allowed for more separation of concerns
  - better reusability
  - better code split to improve readability and maintainability

## Assets

- data
  - contain different card samples in an array
- fonts
  - _BasierCircle Medium_
  - _BasierCircle Regular_
- images
  - Benepass logo (svg)
  - Visa logo (svg)
  - Card background (svg)
  - Checkmark on status (png)

### Getting started

1. ```shell
       npm i
   ```
2. ```shell
       npm start
   ```
3. visit [http://localhost:3000](http://localhost:3000)
