chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "getURL") {
    console.log(request.url);
  }
});
