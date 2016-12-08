
console.log("Entering Pandora Scraper:");

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	  if(request.message === "clicked_browser_action"){
	    var firstHref = $("a[href^='http']").eq(0).attr("href");
	    	console.log(firstHref);
	  }
	  if(request.message === "get_response"){
	      if(request.content.type === "other"){
		  var string = request.content.url;
		  if (string.indexOf("http://audio") >= 0 || string.indexOf("access/?version")>0){
		  	console.log(request.content.url);
			//document.o
			$.ajax({
				url: "http://localhost/download.php",
			        type: "POST",
			    	data: {
					filename: encodeURIComponent(request.content.url)	
				},
			    	success: function(data) {
//				    console.log(encodeURIComponent(request.content.url));
				//    $("#iframeID").attr('src', encodeURIComponent(request.content.url));
				}
			});			
		   }
	     }	  
	     
	  }
	});	



(function(){
	var XHR = XMLHttpRequest.prototype;

	var open = XHR.open;
	var send = XHR.send;


	XHR.open = function(method, url){
		this._method = method;
		this._url = url;
		console.log("testing http request");
		return open.apply(this, arguments);
	};

	XHR.send = function(postData){
		this.addEventListener('load', function(){
			this._method
		    	this._url
		    	this.responseText
		    	postData
		
		});
		console.log("testing http request send");
		return send.apply(this, arguments);
	};


})();

