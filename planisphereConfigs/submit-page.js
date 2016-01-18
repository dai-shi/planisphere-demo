SubmitPage.config.data = 
{
  "pages": [
    {
      "name": "submit-page",
      "label": "Submit a new photo",
      "collection": "items",
      "fields": [
        {
          "name": "image",
          "label": "Image",
          "type": "file"
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
SubmitPage.config(SubmitPage.config.data);
