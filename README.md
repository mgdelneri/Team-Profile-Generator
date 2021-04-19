# Team-Profile-Generator

## GOAL

The goal of this project was to build a Node.js command-line application that prompts the user with questions about employees on a software engineering team. This information is then used to generate an HTML webpage with the employees' information. Another goal was to write unit tests for parts of the code and ensure that they all pass. 

The software engineering team has a manager, and then options of engineers and/or interns. Thus, part of the prompts include giving the user the option of adding engineers and interns, or to finish creating the team. 

The information collected for each type of employee was assigned as such:

* Manager: 
  * Name
  * Employee ID
  * Email address
  * Office number

* Engineer
  * Name
  * Employee ID
  * Email address
  * GitHub username

* Intern
  * Name
  * Employee ID
  * Email address
  * School

Other requirements included that when the user clicks on the email addresses generated on the webpage, by default the user's email program opens up and is populated with the email address. Also, when the user clicks on the GitHub profile, the employee's GitHub profile opens in a new tab. 