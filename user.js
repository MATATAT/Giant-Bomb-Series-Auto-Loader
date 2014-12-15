var user = {
    apiKey: '',

    initialize: function () {
        var that = this;
        if (!that.apiKey) {
            chrome.storage.local.get('api_key', function (items) {
                if (runtime.lastError) {
                    // Need to get user key
                } else {
                    that.apiKey = items.api_key;
                }
            });
        }
    },

    /*
        Sets the user's API key for use against querying.
        params:
            userApiKey: User's API key
    */
    setUserApiKey: function (userApiKey) {
        var that = this;
        chrome.storage.local.set({'api_key': userApiKey}, function () {
            if (runtime.lastError) {
                alert("There was an error setting the API key.");
            } else {
                that.apiKey = userApiKey;
            }
        });
    }
};