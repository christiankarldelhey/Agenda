//FULLSCREEN SELECT ACTIVATE
  $('.menuSingle').mobileSelect();
  $('.menuMultiple').mobileSelect();


//Datemask dd/mm/yyyy ACTIVATE
    $("#dateinput").inputmask("dd/mm/yyyy", {"placeholder": "dd/mm/yyyy"});
    $("[data-mask]").inputmask();


//Datepicker ACTIVATE
  $('input.dateinput').datepicker({
    language: "es",
    autoclose: true,
    clearBtn: true,
    orientation: "top"
  });


//Primera opción gris en selects de bootstrap

    $(document).ready(function(){
    $(".select-agenda").on("change", function(){
    $(this).css("color", "#000");
    });
    });

// CAROUSEL de Fotos

$('#myCarousel').carousel({
  interval: false
})

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    
    next.children(':first-child').clone().appendTo($(this));
  }
});
