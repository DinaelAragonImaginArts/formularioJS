$(document).ready(function () {
  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;

  var form1 = false;
  var form2 = false;
  var form3 = false;

  setProgressBar(current);

  $(".next").click(function () {
    
    /* Consigue los campos para la validacion */
    var first_name = document.forms['msform']['firstName'].value;
    var last_name = document.forms['msform']['lastName'].value;
    var email = document.forms['msform']['email'].value;
    var birth = document.forms['msform']['birth'].value;
    var phone = document.forms['msform']['phone'].value;
    var city = document.forms['msform']['city'].value;
    var cologne = document.forms['msform']['cologne'].value;
    
    function firstValidation() {
      if (first_name === '') {
        console.log('falta first name');
        return false;
      }
      if (last_name === '') {
        console.log('falta last name');
        return false;
      }
      if (email === '') {
        console.log('falta email');
        return false;
      }
      if (birth === '') {
        console.log('falta birth');
        return false;
      }
      if (phone === '') {
        console.log('falta phone');
        return false;
      }
      if (city === '') {
        console.log('falta city');
        return false;
      }
      if (cologne === '') {
        console.log('falta cologne');
        return false;
      }

      console.log('Form 1 Completado');
      form1 = true;
      console.log(form1);
      return true;
    }

    if (firstValidation()){
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      
      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;
  
            current_fs.css({
              display: "none",
              position: "relative"
            });
            next_fs.css({ opacity: opacity });
          },
          duration: 500
        }
      );
      setProgressBar(++current);
    }
  });

  $(".next2").click(function () {      
    /* Consigue los campos para la validacion */
    var last_job = document.forms['msform']['lastJob'].value;
    var position_held = document.forms['msform']['positionHeld'].value;
    var final_monthly_salary = document.forms['msform']['finalMonthlySalary'].value;
    var admition_date = document.forms['msform']['admitionDate'].value;
    var leaving_date = document.forms['msform']['leavingDate'].value;
    var describe_position = document.forms['msform']['describe'].value;
    
    function secondValidation() {
      if (last_job === '') {
        console.log('falta last job');
        return false;
      }
      if (position_held === '') {
        console.log('falta position held');
        return false;
      }
      if (final_monthly_salary === '') {
        console.log('falta salary');
        return false;
      }
      if (admition_date === '') {
        console.log('falta admition date');
        return false;
      }
      if (leaving_date === '') {
        console.log('falta leaving date');
        return false;
      }
      if (describe_position === '') {
        console.log('falta position');
        return false;
      }

      console.log('Form 2 Completado');
      form2 = true;
      console.log(form2);
      return true;
    }

    if (secondValidation()){
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      
      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;
  
            current_fs.css({
              display: "none",
              position: "relative"
            });
            next_fs.css({ opacity: opacity });
          },
          duration: 500
        }
      );
      setProgressBar(++current);
    }
      
    
  });

  $(".next3").click(function () {      
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      
      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now) {
            // for making fielset appear animation
            opacity = 1 - now;
  
            current_fs.css({
              display: "none",
              position: "relative"
            });
            next_fs.css({ opacity: opacity });
          },
          duration: 500
        }
      );
      setProgressBar(++current);      
  });

  $(".next4").click(function () {      
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative"
          });
          next_fs.css({ opacity: opacity });
        },
        duration: 500
      }
    );
    setProgressBar(++current);      
});

  $(".previous").click(function () {
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //Remove class active
    $("#progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");

    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            display: "none",
            position: "relative"
          });
          previous_fs.css({ opacity: opacity });
        },
        duration: 500
      }
    );
    setProgressBar(--current);
  });

  function setProgressBar(curStep) {
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar").css("width", percent + "%");
  }

  $(".submit").click(function () {
    return false;
  });
});
