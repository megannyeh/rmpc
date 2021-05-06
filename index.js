$(document).ready(function() {
	
 $(function () {
        $("#aboutcircle, #prescircle, #projcircle, #exercisecircle, #thoughtscircle").draggable();
    });
	
  $(window).scroll(function() {
    $(".gradient").css(
      "background",
      "linear-gradient(0deg, rgba(119, 109, 135,1) 50%, rgba(0,0,0,1) 100%), rgba(107, 52, 194,1) 50%"
    );
  });

  $(window).scroll(function() {
    $(".fade-out").each(function(i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "0" }, 1000);
      }
    });
  });
	
$('#aboutcircle').click(function () {
        $('#description').toggle(1000);     
    });
	
$('#projcircle').click(function () {
        $('#projectdescription').toggle(1000);     
    });
	
$('#exercisecircle').click(function () {
        $('#exercisedescription').toggle(1000);     
    });
	
	
});
