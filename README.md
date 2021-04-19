# How to set up nightwatch.js 

1. Install nightwatch globally on your machine.
    Use the command:
          npm i -g nightwatch
          
IF you run into a permissions error:

    On a PC: reopen Bash or your Command Prompt as Administrator

    On a Mac: enter the command as
      sudo npm i -g nightwatch 
      
2. Create a new folder on your desktop. Then CD into said new folder, clone this repo. 
      git clone https://github.com/ainsleyli/mxAutomation
      
3. Open the new 'mxAutomation' folder in VS Code.
4. Now open your terminal in VS Code by hitting 'Ctrl' + '`' (the '~' key).
5. Install chromedriver for the project.
      npm i chromedriver
6. After CD into the MX automation folder, execute the google test file in this project with the following commands:
      nightwatch tests/google.js
