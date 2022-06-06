  $( function() {
    $( "#datepicker" ).datepicker({
      yearRange: "1922:2022",
      changeMonth: true,
      changeYear: true,
      dateFormat: 'yy-mm-dd'
    });
    $("#phone").mask("(999) 999-9999");
    //$(".email").inputmask("email"); 
  } );



