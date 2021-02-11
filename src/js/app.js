import '../styles/style.scss';

const app = () => {
  'use strict';

  const $uploadContainer = document.querySelector('.file-upload-container');
  const $base64Container = document.querySelector('.base64-container');

  const $inputFile = $uploadContainer.querySelector('.file-upload');
  const $imagePreview = $uploadContainer.querySelector('.image-preview');

  const start = () => {
    console.log('@ Starting...');

    $inputFile.addEventListener('change', e => {
      const [file] = e?.target?.files;

      if (!file) return updateImage();

      const reader = new FileReader();

      reader.addEventListener('load', function () {
        const image = this.result;

        updateImage(image);
        updateBase64(image);
      });

      reader.readAsDataURL(file);
    });
  };

  const updateImage = file => {
    $imagePreview.innerHTML = file ? `<img src="${file}" alt="" />` : '';
  };

  const updateBase64 = file => {
    $base64Container.querySelector('textarea').value = file;
  };

  return {
    start,
  };
};

const { start } = app();

start();
