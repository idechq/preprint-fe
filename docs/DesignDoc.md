# Design Documentation for preprint

This is the frontend for the iDEC preprint system.

## Scenarios

### Random browsing

The user arrives at "Home". She is greeted by a jumbotron. She scrolls down and then find 6-8 new preprints, randomly selected. She then clicks on one of the preprint titles.

### Search function

Another user arrives at "Home". He wants to find a particular preprint. He types in keywords into the search bar. There is autosuggestions coming up. He select an autosuggestion. The search bar guides him to the page.

Yet another user arrives at "Home". She searches for a particular preprint on the search bar. Autosuggestion comes up with nothing useful. She hits "Enter" and the SPA loads a page with closest search results.

## Metadata for each preprint

Metadata should contain the following info:

- Team
- DOI
- Year
- Citation

Among the above, title, authors, year, and team can be displayed on the top of the page

Only team and wiki need to accessible anywhere during scrolling.

## User Interfaces

### Greeting

The greeting view should have, in order from top to bottom:

- A jumbotron
- A simple search bar + advanced search function
- Latest preprints
- Browse by category / some metainformation

## Preprint reading

Navvar top left: search bar, default inactive
Navbar top right: login function

LHS: A PDF view of the preprint occupying > 50% of the space, scrollable
RHS tap 1: Meta-information of the preprint
RHS tap 2: Team information who generated the print, includes links to their other requirements and awards
RHS tap 3: annotations
RHS tap 4: comments

### PDF Viewer / HTML display

Undecided.
