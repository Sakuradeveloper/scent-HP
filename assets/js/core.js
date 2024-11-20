!(function ($) {
  var ppp = 9; // Post per page
  var pageNumber = 1;

  $("#more_posts").on("click", function () {
    pageNumber++;
    var str =
      "&pageNumber=" + pageNumber + "&ppp=" + ppp + "&action=more_post_ajax";
    $.ajax({
      method: "POST",
      dataType: "html",
      url: "/wp-admin/admin-ajax.php",
      data: str,
      success: function (data) {
        if (data.length) {
          $(".blog-card-list").append(data);
          //$("#more_posts").attr("disabled",false); // Uncomment this if you want to disable the button once all posts are loaded
          $("#more_posts").hide(); // This will hide the button once all posts have been loaded
        } else {
          $("#more_posts").attr("disabled", true);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("error");
      },
    });
    return false;
  });
})(jQuery);
