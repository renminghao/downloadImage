function init(){
		var name = document.getElementsByTagName("img");
		for(var i = 0 ; i <= name.length ; i++){
					
					//document.write(name[i].src);
							var src = name[i].src;
							chrome.extension.sendRequest({greeting:src}, function(response) {
								console.log(response.farewell);
							});
			}
		//chrome.extension.sendRequest({name}, function(response) {
		//	  console.log(response.farewell);
		//	});

}

window.load = init();