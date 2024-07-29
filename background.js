chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({
        //this is a sample content
        shortcuts: {
            "wnw": "wnwickram@gmail.com"
        }
    }, function() {
        console.log("Shortcut initialized.");
    });
});
