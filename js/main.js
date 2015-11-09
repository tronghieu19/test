var main = function (){
	$('.responsive-calendar').responsiveCalendar();
  	$('#calendar').responsiveCalendar('prev');
  	$('#calendar').responsiveCalendar('next');
    // $("span").css("pointer-events", "none");
  	$( ".checkbox-01" ).click(function() {
      if ($(this).hasClass("checkbox-checked")) {
        $(this).removeClass("checkbox-checked");
      } else {
        $(this).addClass("checkbox-checked");
	     }
     });
};

jQuery(document).ready(main);