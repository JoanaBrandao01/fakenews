var url = window.location.href;
chrome.runtime.sendMessage({action: 'getURL', url: url});