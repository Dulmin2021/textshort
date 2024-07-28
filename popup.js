document.getElementById('shortcut-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const shortcut = document.getElementById('shortcut').value;
    const fulltext = document.getElementById('fulltext').value;

    chrome.storage.sync.get(['shortcuts'], function(result) {
        const shortcuts = result.shortcuts || {};
        shortcuts[shortcut] = fulltext;

        chrome.storage.sync.set({shortcuts: shortcuts}, function() {
            document.getElementById('shortcut').value = '';
            document.getElementById('fulltext').value = '';
            loadShortcuts();
        });
    });
});

function loadShortcuts() {
    chrome.storage.sync.get(['shortcuts'], function(result) {
        const shortcuts = result.shortcuts || {};
        const shortcutList = document.getElementById('shortcut-list');
        shortcutList.innerHTML = '';

        for (let key in shortcuts) {
            const li = document.createElement('li');
            li.textContent = `${key}: ${shortcuts[key]}`;
            shortcutList.appendChild(li);
        }
    });
}

document.addEventListener('DOMContentLoaded', loadShortcuts);
