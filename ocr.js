document.getElementById('imageInput').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function () {
    Tesseract.recognize(
      reader.result,
      'mya',
      {
        logger: m => console.log(m),
        langPath: 'https://tessdata.projectnaptha.com/4.0.0/' // auto-load mya.traineddata.gz
      }
    ).then(({ data: { text } }) => {
      document.getElementById('output').innerText = text;
    });
  };
  reader.readAsDataURL(file);
});

