import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

let images = "";
galleryItems.forEach((item) => {
  images += `<li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`;
});

gallery.innerHTML = images;

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const url = event.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`);

  instance.show();
});
