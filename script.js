function openModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  modal.style.display = 'flex';
  modalImage.src = imageSrc;
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
}

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeButton = modal.querySelector('.close');

  let currentImageIndex = 0;
  const allGalleryImages = Array.from(document.querySelectorAll('.gallery-item img, .after-image, .before-images img, .birdhouse-gallery img'));

  allGalleryImages.forEach((img, index) => {
    img.addEventListener('click', e => {
      e.stopPropagation();
      currentImageIndex = index;
      openModal(img.src);
    });
  });


  // Modal closing
  modal.addEventListener('click', closeModal);
  modalImage.addEventListener('click', e => e.stopPropagation());
  closeButton.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Page transition
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (
        link.target === "_blank" ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      e.preventDefault();
      document.body.classList.remove("loaded");

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });
});
