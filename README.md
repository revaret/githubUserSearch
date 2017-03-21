# Github user search using react , redux and rx
Github instant search implementation using reactjs , type in the search box and the list of users will populate down , user can also choose how many users to show in the list and paginate, Features implemented in the project 

- [x] An input box that takes users input
- [x] The input box to hold a progress bar, which indicates that the search is in progress.
- [x] The results appear are paginated if we have more than `n` results. The value `n` can be chosen dynamically. 
- [x] The search query is memoized, which means that if the user has previously searched for `John` and the API has provided me valid results for that query, then next time when the user types `Joh`, there should be suggestion for the user with the previously memoized values(in this case `John` would be suggested) 

## Prerequisite 
1. [Node Js](https://nodejs.org/en/)
2. [npm](https://www.npmjs.com/get-npm)


## Usage
1. Clone the repo using `git clone https://github.com/revaret/githubUserSearch.git
2. Navigate into the root directory and do `npm install`
3. To run the project do `npm run serve`
4. Now goto http://localhost:8080 to play with the project 

