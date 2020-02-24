import "../styles/main.scss";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import "popper.js/dist/popper";
import "bootstrap";
import "../../node_modules/bootstrap/scss/bootstrap.scss";

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
