const modals = {};

function openModal(modalId, imgSrcArray, captionText) {
    modals[modalId] = {
        images: imgSrcArray,
        currentIndex: 0,
        caption: captionText
    };

    document.getElementById(modalId).style.display = "block";
    updateModalContent(modalId);
}

function updateModalContent(modalId) {
    const modal = modals[modalId];
    document.querySelector(`#${modalId} .modal-content-lightbox`).src = modal.images[modal.currentIndex];
    document.querySelector(`#${modalId} .modal-caption`).innerHTML = modal.caption;
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function nextImage(modalId) {
    const modal = modals[modalId];
    modal.currentIndex = (modal.currentIndex + 1) % modal.images.length;
    updateModalContent(modalId);
}

function prevImage(modalId) {
    const modal = modals[modalId];
    modal.currentIndex = (modal.currentIndex - 1 + modal.images.length) % modal.images.length;
    updateModalContent(modalId);
}
