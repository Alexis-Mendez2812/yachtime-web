var pathArray = window.location.pathname.split('/');
var url = window.location.protocol +'//' + window.location.host+'/'+pathArray[1];

var old_xml = 0;
$(document).ready(function(){

	
	var closePopup = $("#popupclose");
    var overlay = $("#overlay");
    var popup = $("#popup");
    var chat = $(".chat");	
    var input = $('#input_message');
    var form = $("form#chatform");


    
	var message;
    chat.on('click', function() {
    	//$(msgbox).append('<img class="user-img" src="'+window.location.protocol +'//' + window.location.host+'/'+pathArray[1]+'/assets/images/John-Doe.png">');

        overlay.addClass( "show" );
        popup.addClass( "show" );
		//alert( $(this).attr("data-user") );
        loadMsg($(this).attr("data-chat"));

        /*$("#messagewindow").animate({
            scrollTop: $(
              '#chatform').get(0).scrollHeight
        }, 2000);    */    


        $("#messagewindow").animate({ scrollTop: $(document).height() }, 500);

    });
    overlay.on('click', function() {
        overlay.removeClass( "show" );
        popup.removeClass( "show" );
    });
    closePopup.on('click', function() {
        overlay.removeClass( "show" );
        popup.removeClass( "show" );
    });


    input.keyup(function(e) {
        if ($(this).val() == '')
            $(this).removeAttr('good');
        else
            $(this).attr('good', '');
    });



	form.submit(function(){

	//if(input.val() != ''){
		$.post(url+"/index.php/chat/update",{
					message: $("#input_message").val(),
					reciever_userid: $(".chat").attr("data-chat"),
					action: "postmsgs"
				}, function() {
			
			//alert($("#messagewindow").attr("data-to"));
			//var element = document.createElement('article');		time
			
			//$("#messagewindow").prepend("<b>asd"+$("#name").val()+"</b>: "+$("#input_message").val()+"<br />");
			var article = document.createElement('article');

			$(article).addClass('msg-container msg-self');
				

			var msgbox = document.createElement('div');
			$(msgbox).addClass('msg-box');
			var pathArray = window.location.pathname.split('/');
			$(msgbox).append('<img class="user-img" src="'+window.location.protocol +'//' + window.location.host+'/'+pathArray[1]+'/assets/images/John-Doe.png">');

			var div1 = document.createElement('div');
			$(div1).addClass('flr');		

			$(div1).append('<div class="name">Me</div>');

			$(div1).append('<div class="messages"><p class="msg" id="msg-0">'+ $("#input_message").val() +'</p></div>');
			$(msgbox).append(div1);
			$(article).append(msgbox);



			$("#messagewindow").append(article);			
			ht += $(article).height();
			$("#messagewindow").animate({scrollTop: ht});



			$("#input_message").val("");					
			$("#input_message").focus();
		});		
		return false;

	});




});



function showLoading(){
	$("#contentLoading").show();
	$("#txt").hide();
	$("#input_message").hide();
}
function hideLoading(){
	$("#contentLoading").hide();
	$("#txt").show();
	$("#input_message").show();
}
var ht = 0;
function addMessages(xml) {
	var last_time = 0;
	var element1 = '';
	$(xml).find('message').each(function() {
		
		author = $(this).find("author").text();
		id = $(this).find("id").text();
		msg = $(this).find("text").text();
		sender_userid = $(this).find("sender_userid").text();
		reciever_userid = $(this).find("reciever_userid").text();		
		name = $(this).find("name").text();
		time = $(this).find("time").text();

		var article = document.createElement('article');


		//alert(sender_userid + " - " + $("#messagewindow").attr("data-user"));
		
		if(sender_userid  == $("#messagewindow").attr("data-user")){
			$(article).addClass('msg-container msg-self');
			//alert(sender_userid);
		}else{
			$(article).addClass('msg-container msg-remote');
		}


		$(article).addClass('msg-container msg-remote');

		var msgbox = document.createElement('div');
		$(msgbox).addClass('msg-box');
		var pathArray = window.location.pathname.split('/');
		$(msgbox).append('<img class="user-img" src="'+window.location.protocol +'//' + window.location.host+'/'+pathArray[1]+'/assets/images/John-Doe.png">');

		var div1 = document.createElement('div');
		$(div1).addClass('flr');		

		n = sender_userid  == $("#messagewindow").attr("data-user") ? 'Me':name;

		$(div1).append('<div class="name">' + n + '</div>');

		$(div1).append('<div class="messages"><p class="msg" id="msg-0">'+ msg +'</p><div class="time">' +time+ '</div></div>');
		$(msgbox).append(div1);
		$(article).append(msgbox);

		//$("#messagewindow").show('slow');

		$("#messagewindow").append(article);
		
		$("article").each(function() {
		  ht += $(this).height();
		});


				

		//$("#messagewindow").animate({ scrollTop: $("#messagewindow").height() }, 500);		
		//$("#messagewindow").append("<b>"+author+"</b>: "+msg+"<br />");
	});

	$("#messagewindow").animate({scrollTop: ht});


}

function createBox(){

}

function loadMsg(id) {
	$("#messagewindow").empty();

	$.post(url+"/index.php/chat/backend",{
					reciever_userid: id
				}, function(xml) {
		$("#loading").remove();

	
		addMessages(xml);
		//var scrollToheight = $("#messagewindow").height();

		//$("#message").scrollTop(scrollToheight);
		//$("#messagewindow").animate({ scrollTop: $(document).height() }, 500);
	});

	/*setTimeout(function() {

		loadMsg(id);
	    
	}, 5000)*/
}