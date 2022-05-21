$(document).ready(function(){



    $("#file-upload").on('change', function(){
        $('#form-featured').submit();
        //alert(1); 
    });



    $('#button-upload').on('click', function() {
        $('#file-upload').trigger('click');
    });





    $("#input_gallery").on('change', function(){
        $('#form-gallery').submit();
    });



    $('#upload-file').on('click', function() {
        $('#input_gallery').trigger('click');
    });

    /*$("#upload-gallery").on('change', function(){
        $('#form-gallery').submit();
        //alert(1); 
    });*/

    /*$("#form-gallery").on('change', function(){
        $('#form_gallery').submit();
        //alert(1); 
    });*/
    /*$("#upload_file").click(function () {
        $('#upload').click();
    });*/

    /*var a = window.onbeforeunload = function() {
       return 'Do you really want to leave this page?';
    };*/


    /*$('#save').on('click', function() {

        alert();
    });*/



    $('.close-modal').on('click', function() {
        $('.modal-yacht-error').css("display", "none");
        //$("div").remove("#message");
    });

    $('#close').on('click', function() {
        $('.modal-yacht-save').css("display", "none");
        //$("div").remove("#message");
    });

    /*DELETE Yacht*/
    $('.delete').on('click', function() {

        $('.modal-yacht-error').css("display", "none");

        $('#modal-' + $(this).attr("modal")).css("display", "flex");
        //$('#modal-1' ).css("display", "flex");
        //$('#message').html('Yach Saved');



        //$('#modal-yacht-error').css("display", "none");

        //$("div").remove("#message");

    });  
    var url_base = 'http://127.0.0.1/yachtimeapp/index.php/';
    //var url_base = 'https://yachtimeapp.com/index.php/';
    $('#save').click(function(e) {

        var error = [];
        $('#message').html('');
        //$("#message").parent().remove();
        $('input[type=text]').each(function(){

           // myArray = $(this).attr("name").split("_");


            if($(this).attr('name') == 'input_brand' ){
                if($(this).val() == ''){
                    myArray = $(this).attr("name").split("_");
                    error.push(myArray[1]);
                }
            }
            /*if($(this).val() == ''){
                $(this).css("border-bottom", "2px solid red");
               

                 error.push(myArray[1]);
            }*/

        });


        /*$('textarea').each(function(){
            if($(this).val() == ''){

                 $(this).css("border-bottom", "2px solid red");
                  const myArray = $(this).attr("name").split("_")  
                  error.push(myArray[1]);
            }

        });*/


        if( error.length > 0){

            var message_modal = '';
            error.forEach( function(valor, indice, array) {
                $('#message').append('<div>Field ' + valor + ' empty</div>');    
            });

            $('.message').html('Fields Empty , please check');

            //$('#modal-error').hide(2000 );
            $('.modal-yacht-save').css("display", "flex");

           /* setTimeout( function(){
                $('#modal-yacht-error').css("display", "none");
            }, 1500);*/

        }else{


            $.ajax({
                data: {"save-data" : "true",
                'id': $('input[name=input_id]').val(), 
                'brand': $('input[name=input_brand]').val(), 
                'length': $('input[name=input_length]').val(),
                'description': $('textarea[name=input_description]').val(),
                'year': $('input[name=input_year]').val(),
                'beam': $('input[name=input_beam]').val(),
                'guests': $('input[name=input_guests]').val(),
                'cabins': $('input[name=input_cabins]').val(),
                'toilets': $('input[name=input_toilets]').val(),
                'draft': $('input[name=input_draft]').val(),
                'speed': $('input[name=input_speed]').val()
                },
                type: "POST",
                dataType: "json",
                url: url_base + "subscription/yacht/",
            })
             .done(function( data, textStatus, jqXHR ) {
                if(data.status == "true"){

                    $('#message').html('Yach Saved');
                    $('.modal-yacht-save').css("display", "flex");
                    setTimeout( function(){
                        $('.modal-yacht-save').css("display", "none");
                    }, 1500);

                }  

             })
             .fail(function( jqXHR, textStatus, errorThrown ) {
                 if ( console && console.log ) {
                     console.log( "La solicitud a fallado: " +  textStatus);
                 }
            });




        }
        
    });

    $("input[type=text], textarea").focus(function() {
        $(this).css("border-bottom", "none"); 
    });




});
function onlyNumberKey(evt) {
      
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function openModal() {
  document.getElementById("yacht-modal").style.display = "block";
  document.getElementById('body').style.overflow = 'hidden';
}
function closeModal() {
     document.getElementById('body').style.overflow = 'auto';
    document.getElementById("yacht-modal").style.display = "none";
}    

var slideIndex = 1;
//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    //var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    /*for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }*/

    slides[slideIndex-1].style.display = "flex";
    /*dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;*/
}