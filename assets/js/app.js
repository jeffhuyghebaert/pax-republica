import "bootstrap";
import $ from "jquery";

$(() => {
  $('.thumbnail-link').on('click', (e) => {
    e.preventDefault();
    $('#lightbox-content').attr('src', e.currentTarget.dataset.url);
  })
})