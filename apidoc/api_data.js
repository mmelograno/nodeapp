define({ "api": [
  {
    "type": "post",
    "url": "/episodes/",
    "title": "Add Episode",
    "version": "0.0.1",
    "name": "AddEpisode",
    "group": "Episode",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "episode",
            "description": "<p>Episodes stored in the app.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "episode._id",
            "description": "<p>Object id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "episode.title",
            "description": "<p>Title.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "episode.description",
            "description": "<p>Description.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "episode.season",
            "description": "<p>Season number.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "episode.episode",
            "description": "<p>Episode number.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "episode.duration",
            "description": "<p>Duration.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "episode._show",
            "description": "<p>Object id.</p>"
          }
        ]
      }
    },
    "filename": "./routes/episodes.js",
    "groupTitle": "Episode"
  },
  {
    "type": "get",
    "url": "/episodes/",
    "title": "Request Episodes",
    "version": "0.0.1",
    "name": "GetEpisodes",
    "group": "Episode",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/episodes/",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "episodes",
            "description": "<p>Episodes stored in the app.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "episodes._id",
            "description": "<p>Object id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "episodes.title",
            "description": "<p>Title.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "episodes.description",
            "description": "<p>Description.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "episodes.season",
            "description": "<p>Season number.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "episodes.episode",
            "description": "<p>Episode number.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "episodes.duration",
            "description": "<p>Duration.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "episodes._show",
            "description": "<p>Show related.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "episodes._show._id",
            "description": "<p>Object id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "episodes._show.name",
            "description": "<p>Name of the show.</p>"
          }
        ]
      }
    },
    "filename": "./routes/episodes.js",
    "groupTitle": "Episode"
  },
  {
    "type": "post",
    "url": "/shows/",
    "title": "Add Show",
    "version": "0.0.1",
    "name": "AddShow",
    "group": "Show",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "show",
            "description": "<p>Show added.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "show._id",
            "description": "<p>Object id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "show.name",
            "description": "<p>Title.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "show.description",
            "description": "<p>Description.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "InvalidShow",
            "description": "<p>Title is missing.</p>"
          }
        ]
      }
    },
    "filename": "./routes/shows.js",
    "groupTitle": "Show"
  },
  {
    "type": "get",
    "url": "/shows/",
    "title": "Request Shows",
    "version": "0.0.1",
    "name": "GetShows",
    "group": "Show",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/shows/",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "shows",
            "description": "<p>Shows stored in the app.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "shows._id",
            "description": "<p>Object id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "shows.name",
            "description": "<p>Title.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "shows.description",
            "description": "<p>Description.</p>"
          }
        ]
      }
    },
    "filename": "./routes/shows.js",
    "groupTitle": "Show"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "_home_mmelograno_Desktop_t_nodeapp_apidoc_main_js",
    "groupTitle": "_home_mmelograno_Desktop_t_nodeapp_apidoc_main_js",
    "name": ""
  }
] });
