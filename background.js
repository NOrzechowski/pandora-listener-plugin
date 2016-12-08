// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
// Send a message to the active tab
 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var activeTab = tabs[0];
  
  chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

chrome.webRequest.onHeadersReceived.addListener(function(details){
	 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
 		var activeTab = tabs[0];  
  		chrome.tabs.sendMessage(activeTab.id, {"message": "get_response", "content":details});
 		//var fso = new ActiveXObject("Scripting.FileSystemObject");
		//var fh fso.OpenTextFile("./data.txt",8);
		//fh.WriteLine(details);
		//`fh.Close();
		

	 });
},
{urls: ["http://*/*"]}, ["responseHeaders"]);
