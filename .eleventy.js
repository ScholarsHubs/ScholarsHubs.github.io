module.exports = function(eleventyConfig) {
    // Copy static assets to the output folder
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("script.js");
    eleventyConfig.addPassthroughCopy("images"); // Copies the entire images folder
    eleventyConfig.addPassthroughCopy("admin");  // Copies the entire admin folder (for Netlify CMS)
    eleventyConfig.addPassthroughCopy("categories"); // Copies your category pages
    eleventyConfig.addPassthroughCopy("search.html"); // Copies your search page
    eleventyConfig.addPassthroughCopy("ebooks.html"); // Copies your ebooks page (if it's a static file)
    eleventyConfig.addPassthroughCopy(".nojekyll"); // Necessary for GitHub Pages, good practice here
    eleventyConfig.addPassthroughCopy("LICENSE");
    eleventyConfig.addPassthroughCopy("README.md");
    eleventyConfig.addPassthroughCopy(".gitignore"); // Ensure .gitignore is copied

    // Set custom directories for Eleventy
    // This tells Eleventy that your source files are in the root and output to '_site'
    return {
        dir: {
            input: ".",       // Eleventy will look for content in the current directory
            output: "_site",  // Eleventy will build the final site into a folder named '_site'
            includes: "_includes", // Your _includes folder for reusable snippets
            layouts: "_layouts", // We'll create this for templates later if needed
            data: "_data"     // For global data (optional)
        },
        templateFormats: ["html", "md"] // Process .html and .md files
    };
};
