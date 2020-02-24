import "../styles/main.scss";
import $ from "jquery";
import "popper.js/dist/popper";
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";

$(function() {
  $('[data-toggle="popover"]').hover(
    function() {
      $(this).popover("show");
    },
    function() {
      $(this).popover("hide");
    }
  );
});
