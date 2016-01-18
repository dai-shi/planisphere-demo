WelcomePage.config.data = 
{
  "pages": [
    {
      "name": "home-page",
      "paragraphs": [
        {
          "title": "Welcome",
          "content": "<ul><li><a href=\"/show\">View all photos</a></li><li><a href=\"/submit\">Submit a new photo</a> (Note that you need to <a href=\"/signin\">Sign in</a> first.)</li></ul>",
          "rawHtml": true
        }
      ]
    },
    {
      "name": "about-page",
      "paragraphs": [
        {
          "title": "About",
          "content": "Please visit <a href=\"https://github.com/dai-shi/planisphere-core\">the project site</a> for more information.",
          "rawHtml": true
        }
      ]
    }
  ]
};
WelcomePage.config(WelcomePage.config.data);
