$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 300) {
      $("#mainNav").removeClass("bg-opacity-50");
    } else {
      $("#mainNav").addClass("bg-opacity-50");
    }
  });
  if (localStorage.darkMode == "true") {
    $("html").attr("data-bs-theme", "dark");
    $(".dark-mode").removeClass("bg-light");
    $(".dark-mode").addClass("bg-dark");

    $(".dark-modeB").removeClass("bg-dark");
    $(".dark-modeB").addClass("bg-light");
    $(".dark-modeB").removeClass("text-white");
    $(".dark-modeB").addClass("text-black");

    $("#contact-us").removeClass("bg-secondary");
    $("#contact-us").addClass("bg-light");
    $("#contact-us").removeClass("text-white");
    $("#contact-us").addClass("text-black");

    $("#home, #main").css({ "filter": "invert(100%)", "-webkit-filter": "invert(100%)" });

    $("#darkModeSwitch").prop("checked", true);
  } else {
    $("html").attr("data-bs-theme", "light");
    $(".dark-mode").removeClass("bg-dark");
    $(".dark-mode").addClass("bg-light");

    $(".dark-modeB").removeClass("bg-light");
    $(".dark-modeB").addClass("bg-dark");
    $(".dark-modeB").removeClass("text-black");
    $(".dark-modeB").addClass("text-white");

    $("#contact-us").removeClass("bg-light");
    $("#contact-us").addClass("bg-secondary");
    $("#contact-us").removeClass("text-black");
    $("#contact-us").addClass("text-white");

    $("#home, #main").css({ "filter": "", "-webkit-filter": "" });

    $("#darkModeSwitch").prop("checked", false);
  }

  $("#darkModeSwitch").change(function () {
    if ($(this).is(":checked")) {
      $("html").attr("data-bs-theme", "dark");
      $(".dark-mode").removeClass("bg-light");
      $(".dark-mode").addClass("bg-dark");

      $(".dark-modeB").removeClass("bg-dark");
      $(".dark-modeB").addClass("bg-light");
      $(".dark-modeB").removeClass("text-white");
      $(".dark-modeB").addClass("text-black");

      $("#contact-us").removeClass("bg-secondary");
      $("#contact-us").addClass("bg-light");
      $("#contact-us").removeClass("text-white");
      $("#contact-us").addClass("text-black");

      $("#home, #main").css({ "filter": "invert(100%)", "-webkit-filter": "invert(100%)" });

      localStorage.darkMode = true;
    } else {
      $("html").attr("data-bs-theme", "light");
      $(".dark-mode").removeClass("bg-dark");
      $(".dark-mode").addClass("bg-light");

      $(".dark-modeB").removeClass("bg-light");
      $(".dark-modeB").addClass("bg-dark");
      $(".dark-modeB").removeClass("text-black");
      $(".dark-modeB").addClass("text-white");

      $("#contact-us").removeClass("bg-light");
      $("#contact-us").addClass("bg-secondary");
      $("#contact-us").removeClass("text-black");
      $("#contact-us").addClass("text-white");

      $("#home, #main").css({ "filter": "", "-webkit-filter": "" });

      localStorage.darkMode = false;
    }
  });

  function scrollIntoView(el) {
    var offsetTop = $(el).offset().top;
    var adjustment = Math.max(
      0,
      ($(window).height() - $(el).outerHeight(true)) / 2
    );
    var scrollTop = offsetTop - adjustment;

    $("html,body").animate(
      {
        scrollTop: scrollTop,
      },
      50
    );
  }

  $('nav a[href^="#"]').click(function (e) {
    e.preventDefault();
    var el = $(this).attr("href");
    scrollIntoView(el);
  });



  $('#registerForm').validate({
    rules: {
      username: {
        required: true
      },
      password: {
        required: true,
        minlength: 8,
      },
      confirm: {
        required: true,
        equalTo: "#password"
      },
      agreeTerms: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Harap isi username."
      },
      password: {
        required: "Harap isi password.",
        minlength: "Password harus memiliki setidaknya 8 karakter.",
      },
      confirm: {
        required: "Harap konfirmasi password.",
        equalTo: "Password tidak cocok."
      },
      agreeTerms: {
        required: "Anda harus menyetujui Syarat dan Ketentuan."
      }
    }
  });

  $('#loginForm').validate({
    rules: {
      username: {
        required: true
      },
      password: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Harap isi username."
      },
      password: {
        required: "Harap isi password."
      }
    }
  });

  $('#editForm').validate({
    rules: {
      username: {
        required: true
      },
      password: {
        required: true,
        minlength: 8
      }
    },
    messages: {
      username: {
        required: "Harap isi username."
      },
      password: {
        required: "Harap isi password.",
        minlength: "Password harus memiliki setidaknya 8 karakter."
      }
    }
  });
});
