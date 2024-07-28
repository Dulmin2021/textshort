chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({
        shortcuts: {
            "abc": "abcdefghijklm@gmail.com"
        }
    }, function() {
        console.log("Shortcut initialized.");
    });
});
