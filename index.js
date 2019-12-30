$(function() {
  var topBtn = $('#back_to_top');    
  topBtn.hide();
  //スクロールが500に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  
  $('.btn-contactform').click(function() {
    console.log("click!");
    $('body, html').animate({
      scrollTop: $('#contactform').offset().top
    }, 500);
    return false;
  })
  
  $('#submit').click(function() {
    console.log('click');
    var isValid = true;
    
    var lastName = $('#input-last-name').val();
    var firstName = $('#input-first-name').val();
    var email = $('#input-email').val();
    
    if (lastName == '') {
      $('#input-last-name').addClass('is-invalid');
      isValid = false;
    } else {
      $('#input-last-name').removeClass('is-invalid');
    }
    
    if (firstName == '') {
      $('#input-first-name').addClass('is-invalid');
      isValid = false;
    } else {
      $('#input-first-name').removeClass('is-invalid');
    }
    
    if (email == '') {
      $('#input-email').addClass('is-invalid');
      isValid = false;
    } else {
      $('#input-email').removeClass('is-invalid');
    }

    if (isValid) {
      return true;
    } else {
      return false;
    }
  })
});