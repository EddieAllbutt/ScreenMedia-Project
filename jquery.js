var winHeight = $(window).height(),
  docheight = $(document).height();
max = docheight - winHeight;

$(progress).attr("max", max);

var value = $(window).scrollTop();
$(progress).attr("value", value);

$(document).on("scroll", function() {
  value = $(window).scrollTop();
  progressBar.attr("value", value);
});

$(document).on("ready", function() {
  var winHeight = $(window).height(),
    docHeight = $(document).height(),
    progressBar = $("progress"),
    max,
    value;

  max = docHeight - winHeight;
  progressBar.attr("max", max);

  $(document).on("scroll", function() {
    value = $(window).scrollTop();
    progressBar.attr("value", value);
  });
});
