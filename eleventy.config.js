module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("search.js");
  eleventyConfig.addGlobalData("targetSubdir", "lyricskeeper");

  eleventyConfig.addShortcode("absPath", (state) => {
    if (state == "build")
      return "/lyricskeeper"
    else
      return ""
  })

  return {
    dir: {
      output: "docs"
    }
  }
};