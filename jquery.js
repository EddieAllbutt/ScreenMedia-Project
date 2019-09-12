let prog = document.getElementById("progress");

let body = document.body,
  html = document.documentElement;

let height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);

const setProgress = () => {
  let scrollFromTop =
    (document.documentElement.scrollTop || body.scrollTop) + html.clientHeight;
  let width = (scrollFromTop / height) * 100 + "%";

  console.log("scroll", html.clientHeight, body.scrollTop);

  prog.style.width = width;
};

window.addEventListener("scroll", setProgress);

setProgress();

/*var winHeight = $(window).height(),
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
*/
