TabularPage.config.data = 
{
  "pages": [
    {
      "name": "show-page",
      "label": "All photos",
      "collection": "items",
      "fields": [
        {
          "name": "image",
          "label": "Image",
          "type": "image"
        },
        {
          "name": "title",
          "label": "Title",
          "type": "text"
        },
        {
          "name": "description",
          "label": "Description",
          "type": "text"
        }
      ]
    }
  ]
};
TabularPage.config(TabularPage.config.data);
