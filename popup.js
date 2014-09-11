
function init(){
					
					chrome.tabs.getSelected(

						function(thisWindow){
							$(".photo").append("<table width='680' border='0' cellspacing='0' cellpadding='0'>");
							$(".photo").append("<tr><td class='height'></td></tr>");
						})
					chrome.tabs.executeScript({file:"com.js"},function(win){


					})

					chrome.extension.onRequest.addListener(
					  function(request, sender, sendResponse) {
					  			var wid;
				      			var hei;
				      			var wid_1;
				      			var hei_1;
				    			if(request.greeting)
				    			{		
				      					sendResponse({farewell: "goodbye"});
				      					var img = new Image;
				      					img.src = request.greeting;
									    img.onload = function(){
									        wid_1 = img.width;
									        hei_1 = img.height;
									        if(wid_1 >= 220)
									        {
									        		if(wid_1 >= 1000 || hei_1 >=1000){

									        				if(wid_1 >= 1000){
									        					var n = wid_1/hei_1;
										        				wid = 100;
										        				hei = wid/n;
										        			}
										        			if(hei_1 >= 1000){

										        				var n = wid_1/hei_1;
										        				hei = 100;
										        				wid = hei*n;
										        			}

									        		}else{
											        		var n = wid_1/hei_1;
											        		 wid = 140;
											        		 hei = wid/n;
									        		}
									        }
									        $(".photo").append("<div class='box'><div class='shadow' name = '"+request.greeting+"'></div><img class='cen'  height='"+hei+"' width='"+wid+"' src ="+request.greeting+"><p class='rel'>"+hei_1+"X"+wid_1+"</p></div>");
									    };
				      					
				      			}
				   				else
				      			sendResponse({farewell: "sorry  the src is null"}); 
						});
									      		
					$(".photo").append("</table>");


					
		};				
window.load = init();



document.addEventListener('DOMContentLoaded', function () {
 			
				$('.photo').on('mouseenter','div',function(){
											
											$(this).children().fadeIn();
											var f = $(this).children().attr("name");
									  		var aa = getFileName(f);
									  		var geshi = mode(f);
									  		var down = getBase64Image(f);
									  		$(this).children(".shadow").append("<a class='link' href='data:"+geshi+";base64,"+down+"' download='"+aa+"'>确认下载</a>");
								  	
				});
				$('.photo').on('mouseleave','div',function(){
										
											$(this).children(".shadow").fadeOut();
											$(this).children().children().remove();
								  	
				});

});

function mode(filename){


										  		if(filename.match(/\.png$/i)) {
													return "image/png";
												} else if (filename.match(/\.gif$/i)) {
													return "image/gif";
												} else if (filename.match(/\.jpe?g$/i)) {
													return "image/jpeg";
												}

}




     function getBase64Image(a)
 { 
				  p=a;
				  var img = new Image();
				 img.setAttribute('src', p); 
				 var canvas = document.createElement("canvas"); 
				 canvas.width = img.width; 
				 canvas.height = img.height; 
				 var ctx = canvas.getContext("2d"); 
				 ctx.drawImage(img, 0, 0); 
				 var dataURL = canvas.toDataURL("image/png"); 
				var dataURL = canvas.toDataURL("image/png"); 
				var r=dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
				var base64=r;
				return base64;   

     } 
										 
										 
										 
function getFileName(name){
			var url = name;
			var pos = url.lastIndexOf("/");
			if(pos == -1){
			   pos = url.lastIndexOf("\\")
			}
			var filename = url.substr(pos +1)
			return filename;
}












