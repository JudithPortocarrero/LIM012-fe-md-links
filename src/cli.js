const mdLinks = require("md-links");
const path = require('path');
mdLinks.mdLinks(path)
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks.mdLinks(path, { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks.mdLinks(path)
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);


