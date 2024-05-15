// Wait for DOM to load.
document.addEventListener("DOMContentLoaded", function () {
    // Look for the custom stylesheet that Reddit uses for subreddit styles.
  document
    .querySelectorAll('link[title="applied_subreddit_stylesheet"]')
    .forEach((stylesheet) => {
        // Remove the custom stylesheet.
        stylesheet.remove();
    });
});
