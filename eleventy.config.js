module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");

  return {
    dir: {
      output: "docs"
    }
  }
};