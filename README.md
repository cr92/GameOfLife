# Environment:
 - NodeJS 6.11.1 LTS
 - macOS Sierra 10.12.6
 

# Setup process:
Open the terminal, navigate to the project directory and run the following commands

```
$ npm install
$ npm start
```

Then open any browser (Chrome/Firefox/Safari) and navigate to http://localhost:3000


Default settings:
 - grid size=50
 - interval=5000ms


Implementaion/Design:
 - random grid gets generated when the user loads the URL(emits a socket.io event)
 - then grid gets updated every 5000ms and pushed to the UI
 - To change grid size, refresh rate, make changes in .env file


Limitations:
 - Too big a grid size will cause heap overflow, missing the refresh rate


Assumptions:
 - Brute force used for making updates to grid as data in grid is randomly generated and can lie anywhere
 - Square grid instead of having two parameters for length and width
