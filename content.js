document.addEventListener('input', function(event) {
    if (event.target.tagName === 'TEXTAREA' || (event.target.tagName === 'INPUT' && event.target.type === 'text')) {
        chrome.storage.sync.get(['shortcuts'], function(result) {
            const shortcuts = result.shortcuts || {};
            for (let key in shortcuts) {
                if (event.target.value.includes(key)) {
                    event.target.value = event.target.value.replace(key, shortcuts[key]);
                }
            }
        });
    }
});
