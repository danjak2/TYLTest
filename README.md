# Initial Prep
1. Create a new folder on your desktop
2. Open the folder in your ide of choice (etc. VS Code)
3. Open a new terminal
  - Install Cypress - Type `npm install cypress`
  - Install npx - Type `npm install -g npx`
  - Install Cypress Cucumber Proccessor - Type `npm install --save-dev cypress-cucumber-preprocessor`
4. Download the files from this directory by clicking `code` and then clicking `Download .zip` 
5. extract the files from the .zip and copy them into the newly created folder from step 1.
  - Replace files that are already there as you need the files from the download

# To Run the Test
## In the terminal
In the termnial run the following command - `npx cypress run`

## In Cypress Test runner Window
In the termnial run the following command - `npx cypress open`

This will open up the Cypress Window and list all the tests, in this case just the one.
Click on the `testExample.feature` file to run the test or click `Run 1 intergration spec` button to the all the tests in the directory.

I have also included an example of a plane Cypress example fo this test not written in the Cucumber format.
