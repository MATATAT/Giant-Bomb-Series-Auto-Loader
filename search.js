var gbSearch = {

    /* Url for searching against the Giant Bomb servers. Targeted specifically at videos. */
    searchUrlSingleVideo_: "http://www.giantbomb.com/api/" +
            "video/" + 
            "?api_key=" + APIKEY,

    searchUrlMultiVideo_: "http://www.giantbomb.com/api/" +
            "videos/" +
            "?api_key=" + APIKEY,

    /* 
        Submit action for search form. 
        params:
            userObj: the user profile for the Giant Bomb Auto-Loader
    */
    searchSubmit: function (userObj) {

    },

    /*
        Displays the results in the panel.
        params:
            
    */
    displayResults_: function () {

    }
};