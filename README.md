![logo](./assets/flysorter-logo.png)
# Welcome
The following documentation is specifically for the ***FRONT END*** repository. If you are looking for the ***BACK END*** respository click [HERE](https://github.com/fly-sorter/flySorter-front-end-v2).

# Description
FlySorter is an inventory management application for the Seattle-based company: [FlySorter](https://flysorter.com/). FlySorter builds machines to sort fruit flies so they can be used for scientific research. This application keeps track of those machine assemblies, sub-assemblies, and the parts that belong to those sub assemblies. These components are displayed on the page and allows the user to click on a sub-assembly to reveal the parts that makeup that sub-assembly. The table also allows the user to filter parts and search for a part in order to make finding particular parts faster and easier for the user.

# Why It Matters
_"In 1908, looking to test Mendel’s theories on heredity, Thomas Hunt Morgan began studying Drosophila melanogaster (also known as the fruit fly or vinegar fly) in his “Fly Room” at Columbia University. Dr. Morgan and his students studied flies, looking for mutations, and found that some individuals had white eyes instead of the usual red eyes. Experimentation on the prevalence and propagation of the mutation led to the first proof that the chromosomal theory of inheritance was correct, and established drosophila as the first model research organism. The use of drosophila has been extremely fruitful in the past 100 years. Since Dr. Morgan’s experiments, drosophila research has been featured in over 100,000 scientific papers. This includes being involved in Nobel prize-winning research five times (in 1933, 1946, 1995, 2004, and 2011)."_ — [The Research Value of Drosophila Melangoaster](http://powersscientific.com/the-research-value-of-drosophila-melanogaster/)

# Languages, Technologies, Frameworks, & Libraries Used
The following technologies were used to develop the frontend:

1. React
2. Redux
3. React-Table
4. WebPack
5. Babel
6. Eslint
7. SCSS
8. Match-Sorter
9. React-Cookies
10. [Coolers.co](https://coolors.co/ff514d-d6d6d6-000000-4c4c4c-7a7a7a) (color theme)
11. [AWS S3](https://aws.amazon.com/s3/)

# Running the Application
The frontend was developed to run in conjunction with the original backend for the FlySorter application that was developed using Node, Express, and MongoDB. The frontend has been refactored to use React/Redux best practices, and incorporates a subtle update to the CSS styling to give the product a more refined and modern look/feel. 

The frontend code that lives in this repo has been deployed to [AWS S3](https://aws.amazon.com/s3/), and communicates to the AWS hosted [BACK-END](https://github.com/fly-sorter/flySorter-front-end-v2) also hosted on AWS. To view the latest deployement for this application please visit this [link](). 

# Account Setup
### Once on the landing page...

### If you are a new user...
  - Click the link in the lower left-hand corner of the landing page
  - Follow the form to set a username, recovery question, recovery answer, and a password
  - Click "signup" once all fields are required fields are filled in to create an account
  - Once your account is created, you will taken to the dashboard, which is the main page of the application

![Account Creation](assets/account-creation.png)

### If you already have a username...
  - Login with your username and password
  - Once you login you will be taken to the main dashboard

![Dashboard](assets/dashboard.png)

# Site Navigation
### Dashboard
- From the main dashboard you will see a large table with with a list of parts and sub-assemblies
- Clicking the black triangles will expand/collapse the table to reveal nested information
- You can use the filter boxes to search and filter for a specific part or sub-assembly
- You can also create new parts and sub-assemblies by clicking the appropriate links from this screen

### Create a Sub-Assembly
- Clicking 'Create a Sub Assembly' will take you to the sub assembly creation form page
- When creating a sub assembly, take note of the very bottom field. This is the sub-assembly ID, and you will use this number to add parts to this particular sub-assembly on the part creation page.

![Sub-Assembly](assets/sub-assembly.png)

### Create a Part
- Clicking 'Create a Part' will take you to the part creation form page
- This page will allow you to create parts and assign them to sub assemblies by assigning them to a specific sub-assembly ID (NOTE: If you don't remember the specific sub-assembly ID, the app will display the latest ID at the top of the page).

![create-part](assets/part-creation.png)

### Accounts
- Clicking 'Accounts' will take you to a page that displays the current list of authorized users for the site.
- Users with 'Super User' level access are able to add/remove users from this view
- Users with 'Basic' level access are given read-only access, and do not have the ability to add/remove or edit

# Project Team
### Original Team 
* [Benjamin West](https://github.com/bgwest) | | 
[Daniel Frey](https://github.com/fncreative) | | 
[Tom North](https://github.com/tnorth93) | | 
[Wyatt Pefley](https://github.com/peffles)
____

### AWS Serverless Migration Team
* [Ben Harris](https://github.com/harrishills) | |
[David Chambers, Jr.](https://github.com/dlchambersjr) | |
[Emery Parks](https://github.com/emeryP) | |
[Timothy Li](https://github.com/timinis) | |
[Trevor Stam](hhttps://github.com/trevorstam)

____
