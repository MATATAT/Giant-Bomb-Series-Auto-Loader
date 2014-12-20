var user = {
    apiKey: '',

    initialize: function () {
        var that = this;
        chrome.storage.local.get('api_key', function (items) {
            var apiModal = $('#userApiModal'), 
                apiTextKey = $('#apiTextKey');

            //if (chrome.runtime.lastError) {
            if (items.api_key === undefined) {
                $('#saveApi').click(function () {
                    var apiKey = apiTextKey.val();
                    if (apiKey) {
                        that.setApiStorageKey();
                    }
                    apiModal.modal('hide');
                });

                /* Initiate modal */
                apiModal.modal();
            } else {
                that.apiKey = items.api_key;
            }
        });
    },

    /*
        Sets the user's API key for use against querying.
        params:
            userApiKey: User's API key
    */
    setUserApiKey: function (userApiKey) {
        var that = this;
        chrome.storage.local.set({'api_key': userApiKey}, function () {
            if (chrome.runtime.lastError) {
                alert("There was an error setting the API key.");
            } else {
                that.apiKey = userApiKey;
            }
        });
    }
};