

$(".log-btn").on('click', function () {
      let inputs = $(this).parent().find("input");

      struct = {
          "login":inputs[0].value,
          "password":inputs[1].value
      };

      $.ajax({
          url     : "/login",
          type    : "POST",
          contentType: "application/json",
          data    : JSON.stringify(struct),
          success : function(data){
              if (data == null) {
                  $(".alert").css({ opacity: 1 });
                  location.href = "/map"
              } else {

                  $('.log-btn').click(function(){
                      $('.log-status').addClass('wrong-entry');
                      $('.alert').fadeIn(500);
                      setTimeout( "$('.alert').fadeOut(1500);",3000 );
                  });

                  $('.form-control').keypress(function(){
                      $('.log-status').removeClass('wrong-entry');
                  });
              }
          }
      });
  });


$("#Passwod").keyup(function(event){
  if(event.keyCode == 13){
      $(".log-btn").click();
  }
});
