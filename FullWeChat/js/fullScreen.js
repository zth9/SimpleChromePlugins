$(function() {
	$("#page-content div").css('max-width', '100%')
	var mainA = $('<a id="only" enable="true">启用全屏</a>')
	$("#activity-detail").append(mainA)
	$("#only").css('width', '100px')
	$("#only").css('padding', '3px')
	$("#only").css('position', 'fixed')
	$("#only").css('top', '15px')
	$("#only").css('right', '15px')
	$("#only").css('border', '1px solid black')
	$("#only").css('border-radius', '5px')
	$("#only").css('background-color', 'aqua')
	$("#only").css('text-align', 'center')
	
	$("#only").click(function() {
		if($("#only").attr("enable") == "true"){
			//禁用
			$("#only").attr("enable", "false");
			$("#only").css('background-color','white')
			$("#page-content div").css('max-width', '667px')
		}else{
			//启用
			$("#only").attr("enable", "true");
			$("#only").css('background-color','aqua')
			$("#page-content div").css('max-width', '100%')
		}
	});
	var divArr = $("#content_left div")
	for(var i=0;i<divArr.length;i++){
		if(divArr[i].attr('cmatchid')){
			divArr[i].css('display','none !import')
		}
	}
	
})
