var main = function (){
	$('.responsive-calendar').responsiveCalendar();
  	$('#calendar').responsiveCalendar('prev');
  	$('#calendar').responsiveCalendar('next');
  	$( ".checkbox-01" ).click(function() {
	  alert("Handler for .click() called.");
	});
	$('div.checkbox > span:checkbox').change(function () {
    if ($(this).is(":checked")) {
      $(this).addClass('.checkbox-checked');
    }
    else {
      $(this).removeClass('.checkbox-checked');
    };
	});
};

jQuery(document).ready(main);