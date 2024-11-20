!(function ($) {
  "use strict";

  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });

  // Toggle .header-scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  // Mobile Navigation
  $("body").append('<div class="mobile-nav-overly"></div>');

  $(document).on("click", ".mobile-nav-toggle", function (e) {
    $("body").toggleClass("mobile-nav-active");
    $(".mobile-nav-toggle").toggleClass("toggle-active");
    $(".mobile-nav-overly").toggle();
  });

  $(document).on("click", ".mobile-nav-menu .drop-down > a", function (e) {
    e.preventDefault();
    $(this).next().slideToggle(300);
    $(this).parent().toggleClass("active");
  });

  $(document).click(function (e) {
    var container = $("#mobile-nav, .mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $(".mobile-nav-toggle").toggleClass("toggle-active");
        $(".mobile-nav-overly").fadeOut();
      }
    }
  });

  // modal
  var $modal = $(".modal");

  $(document).on("click", '[data-toggle="modal"]', function (e) {
    var target = $(this).attr("href")
      ? $(this).attr("href")
      : $(this).attr("data-target");
    if (target.length !== 0 && $(document).has(target).length !== 0) {
      e.preventDefault();
      var $selecedModal = $(target);
      $("body").toggleClass("modal-open");
      $selecedModal.show();
      setTimeout(function () {
        $selecedModal.toggleClass("show");
      }, 100);
      return false;
    }
  });

  $(document).click(function (e) {
    var container = $(".modal .modal-content");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("modal-open")) {
        $("body").removeClass("modal-open");
        $modal.removeClass("show");
        setTimeout(function () {
          $modal.hide();
        }, 300);
      }
    }
  });

  $(document).on(
    "click",
    '.modal .close, [data-dismiss="modal"]',
    function (e) {
      $("body").removeClass("modal-open");
      $modal.removeClass("show");
      setTimeout(function () {
        $modal.hide();
      }, 300);
    }
  );

  // accordion jquery
  $(".accordion-answer:first").show();
  $(".accordion-question:first").addClass("expanded");

  $(document).on("click", ".accordion-question", function (e) {
    var answer = $(this).next();

    $(".accordion-answer").not(answer).slideUp(400);
    $(".accordion-question").not(this).removeClass("expanded");
    $(this).toggleClass("expanded");
    answer.slideToggle(400);
  });

  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var arrow = this.children;
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        document.querySelector("." + arrow[1].className).style.transform =
          "rotateZ(0)";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        document.querySelector("." + arrow[1].className).style.transform =
          "rotateZ(225deg)";
      }
    });
  }

  // swiper

  /*スライダー*/
  $(window).ready(function () {
    //$(".page").append( "<div class='wp-navi-border'></div>" );
    $("<div class='wp-navi-border'></div>").insertAfter(".page");
    $("<div class='wp-navi-border'></div>").insertAfter(".current");
    $(".wp-navi-border:last-of-type").hide();
  });

  $(window).on("load", function () {
    $(".loading")
      .stop()
      .animate(
        { opacity: 0 },
        {
          duration: 1800,
          complete: function () {
            $(this).remove();
          },
        }
      );
  });
})(jQuery);
