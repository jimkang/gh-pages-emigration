var repos = require('./repos.json');

var pagesRepoNames = repos.filter(r => r.defaultBranchRef ? r.defaultBranchRef.name === 'gh-pages' : false).map(r => r.name);

console.log(pagesRepoNames.join('\n'));
