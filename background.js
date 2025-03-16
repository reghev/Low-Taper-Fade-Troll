chrome.webNavigation.onCompleted.addListener(function(details) {
    // Check if the URL matches the desired pattern (e.g., google.com)
    if (details.url.includes('google.com')) {
        chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            files: ['content.js'] // Inject content.js into the tab
        });
    }
}, { url: [{ hostContains: 'google.com' }] });
