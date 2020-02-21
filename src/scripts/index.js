import "../styles/main.scss";
import "jquery/src/jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import "popper.js/dist/popper";
import { createPopper } from "@popperjs/core";
import "bootstrap";
import "../../node_modules/bootstrap/scss/bootstrap.scss";

const button = document.querySelector("#button");
const tooltip = document.querySelector("#tooltip");

let popperInstance = null;

function create() {
  popperInstance = Popper.createPopper(button, tooltip, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8]
        }
      }
    ]
  });
}

function destroy() {
  if (popperInstance) {
    popperInstance.destroy();
    popperInstance = null;
  }
}

function show() {
  tooltip.setAttribute("data-show", "");
  create();
}

function hide() {
  tooltip.removeAttribute("data-show");
  destroy();
}

const showEvents = ["mouseenter", "focus"];
const hideEvents = ["mouseleave", "blur"];

showEvents.forEach(event => {
  button.addEventListener(event, show);
});

hideEvents.forEach(event => {
  button.addEventListener(event, hide);
});
