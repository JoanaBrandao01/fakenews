var url = window.location.href;
chrome.runtime.sendMessage({url: url});