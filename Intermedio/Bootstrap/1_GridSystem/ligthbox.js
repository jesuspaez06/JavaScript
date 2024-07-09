import Lightbox from 'bs5-lightbox';

const options = {
    keyboard: true,
    size: 'fullscreen'
};

document.querySelectorAll('a[data-bs-toggle="lightbox"]').forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const lightbox = new Lightbox(el, options);
        lightbox.show();
    });
});
