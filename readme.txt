-- Readme document for Tim Twigg, ttwigg@uci.edu, 68232280 --

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

15/15
- 1/1 Communication with the Webserver
- 5/5 Spotify Browser Home Page
- 3/3 Spotify Browser Artist Page
- 2/2 Spotify Browser Album Page
- 2/2 Spotify Browser Track Page
- 2/2 A readme which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?

23 hours

3. What online resources did you consult when completing this assignment? (list specific URLs)

https://www.gatsbyjs.com/docs/
https://www.npmjs.com/package/react-responsive-carousel
https://www.npmjs.com/package/@ramonak/react-progress-bar
https://developer.spotify.com/documentation/general/design-and-branding/

4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?

None

5. Is there anything special we need to know in order to run your code?

cd into the webserver directory and run "npm i" then "npm start"
In second terminal, cd into the client directory and run "npm i" then "npm run develop"

The second command may take a minute or two as Gatsby builds the page.
The page will open automatically when it is built. Click the login button to log in and
then navigate the page identically to A3.

6. How did you implement the Assignment 3 Features?

I followed the same basic page design for each page, implementing the same thing in Gatsby React instead of Angular.
Each page is implemented as a function in a .tsx file in the src/pages directory, with components such as the page layout,
carousel, and tracklist table implemented separately in the src/components directory, also as functions in a .tsx file.
The src/pages/index.tsx file is the homepage (this name is required by Gatsby) and Gatsby automatically generates the
routing.
I reused the server code from Assignment 3.

7. What was your design rationale?

I reused the basic page design from Assignment 3, but adapted the color scheme to fit with Spotify's official color scheme.