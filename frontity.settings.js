const settings = {
  "name": "frontity-project",
  "state": {
    "frontity": {
      "url": "https://www.mohammadamid.a2hosted.com",
      "title": "En plats för mina dikter",
      "description": "Dikter av Mohammad Amid Faqirzada"
    }
  },
  "packages": [
    {
      "name": "wc-amid-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Dikter",
              "/"
            ],
            [
              "Böcker",
              "/bocker/"
            ],
            [
              "Om mig",
              "/om-mig/"
            ],

          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://mohammadamid.a2hosted.com/wp-json/",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
