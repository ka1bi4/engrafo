let utils = require("./utils");
let yaml = require("js-yaml");

module.exports = function(dom, data) {
  let title = dom.querySelector("h1");

  // Remove <strong> from title
  if (title.children.length && title.children[0].tagName === "STRONG") {
    utils.removeAndFlattenChildren(title.children[0]);
  }

  // Remove new lines from title
  Array.from(title.children).forEach(child => {
    if (child.tagName === "BR") {
      title.removeChild(child);
    }
  });

  let titleHTML = title.innerHTML;

  // Clean up weird characters
  titleHTML = titleHTML.replace('\u3000', '')

  title.innerHTML = titleHTML;
  data.title = titleHTML;
};
