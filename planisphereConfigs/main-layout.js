MainLayout.config.data = 
{
  "brand": "Photo Share",
  "routes": [
    {
      "name": "home-route",
      "path": "/",
      "label": "Home",
      "page": "home-page"
    },
    {
      "name": "show-route",
      "path": "/show",
      "label": "Show",
      "page": "show-page"
    },
    {
      "name": "submit-route",
      "path": "/submit",
      "label": "Submit",
      "page": "submit-page"
    },
    {
      "name": "about-route",
      "path": "/about",
      "label": "About",
      "page": "about-page"
    },
    {
      "name": "signin-route-hidden",
      "path": "/signin",
      "page": "signin-page"
    }
  ],
  "extraNavs": [
    {
      "template": "nav-right"
    }
  ]
};
MainLayout.config(MainLayout.config.data);
