const totalLinks = (arrayLinks) => arrayLinks.length;
const uniqueLinks = (arrayLinks) => {
  const links = [];
  arrayLinks.forEach((obj) => links.push(file.href));
  const uniqueLinks = new Set(links).size;
  return uniqueLinks;
};
const brokenLinks = (arrayLinks) => arrayLinks.filter((file) => file.validate === 'fail').length;
module.exports = {
  totalLinks,
  uniqueLinks,
  brokenLinks,
};
