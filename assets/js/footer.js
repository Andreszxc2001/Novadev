fetch('assets/includes/footer.html')
  .then(respuesta => respuesta.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });