var ghpages = require('gh-pages');
 
ghpages.publish('dist', {
    branch: 'master',
    repo: 'https://github.com/satrix321/satrix321.github.io.git'
}, function (err) {
    if (err) {
        console.log('Encountered an error!');
        console.log(err);
    } else {
        console.log('Success!');
    }
});