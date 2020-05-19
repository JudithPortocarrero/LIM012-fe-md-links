const totalUnique = (arrayLinks) => {
  const totalLinks = arrayLinks.length;
  const allLinks = arrayLinks.map((element) => element.href);
  const setUniqueLinks = new Set(allLinks);
  const stats = 
`  Total: ${totalLinks}
  Unique: ${setUniqueLinks.size}`;
  return stats;
};
const broken = (arrayLinks) => {
  const brokenLinks = arrayLinks.filter((element) => element.statusMessage === 'fail');
  const stats = 
`  Broken: ${brokenLinks.length}`;
  return stats;
};
module.exports = { totalUnique, broken }
