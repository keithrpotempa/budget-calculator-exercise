# Budget Calculator Exercise

A [code challenge](https://gist.github.com/cowabungapeppercorn/cc851d881565ed90f08a54927d7f80bb) by Yardzen. 

See it live [here](https://budgetcalculatorexercise.gatsbyjs.io/).

## Objectives 

[x] Create a new repository through GitHub or Bitbucket and share it with us. We like to see your work as you progress.

[x] Start the user experience by prompting the client to enter a budget for their project

[x] Query the budget elements from the firebase firestore collection called "items"

[x] Display the queried items in a list grouped by type (see item interface below). 

[x] Only one item per type may be selected at any given time.

[x] Each item has a low and high price. These prices should be displayed to the user 

[x] as well as an aggregate price range of all selected items.

[x] The application should inform the user whether their budget is over, under, or within the range of the items that they have selected.

[ ] (Bonus) Add functionality that allows the user to submit their checklist. Store this information however you would like in firestore, but DO NOT modify the "items" collections. Be aware that multiple candidates may be working from this database at the same time, so please prefix any collections that you create with your first and last name. Ex. benjaminRoseBudgetResponses.