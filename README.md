# Where's Waldo

Photo-Tagging Application based on a classic children book series "Where's Waldo?". Find Waldo and his friends on an image and save your score in the database. This project was made with use of [React](https://github.com/facebook/react) along with [react-router](https://github.com/remix-run/react-router) and [testing-library](https://testing-library.com/) which was used for components testing. Tests were run with a help of [jest](https://jestjs.io/) JavaScript Testing Framework. [styled-components](https://styled-components.com/) was used for Application styling. [prop-types](https://github.com/facebook/prop-types) was used as a type checking tool. [Firebase](https://firebase.google.com/) was used for the backend.

**Live: [click here](https://husky93.github.io/photo-tagging-app)**

## Features
- Display Spinner in elements that require image load until all images on the page load (Custom hook)
- Level Picker component
- Custom cursor while on Game page
- Render a Game based on an URL
- Display all characters in Header - indicate if characters are found.
- Display error when game link is wrong
- Start timer when image loads
- On Click Popup character choice menu:
  - Options rendered based on characters left to find
  - Element providing feedback if the guess was wrong or right
  - Each time you choose character connect to database and check if the coordinates are correct
- Show Modal when all characters found:
  - Shows your score
  - Lets you input your Name
  - Lets you submit your score to the database
- High scores page:
  - Pick a level for which high scores are shown
  - Fetch each level high scores from database
  - Display data from database
  - Display max 8 elements per page
  - Switch score pages UI

 
<img src="https://github.com/husky93/photo-tagging-app/blob/main/website.jpg?raw=true"/>

### Dependencies Used:
- [React](https://github.com/facebook/react)
- [React-DOM](https://github.com/facebook/react/tree/main/packages/react-dom)
- [react-router-dom](https://github.com/remix-run/react-router)
- [testing-library](https://github.com/testing-library)
- [styled-components](https://styled-components.com/)
- [polished](https://polished.js.org/docs/)
- [prop-types](https://github.com/facebook/prop-types)
- [Firebase](https://firebase.google.com/)

#### Dev dependencies:
- [create-react-app](https://github.com/facebook/create-react-app)
- [jest](https://jestjs.io/)