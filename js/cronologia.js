$(document).ready(function () {

  // FontFlex
  $('.titulo-flex').fontFlex(28, 64, 18);

  // bxSlider
  $('.banner').bxSlider({
    mode: 'horizontal',
    auto: true,
    pause: 3500,
    speed: 800,
    captions: true,
    controls: true,
    autoHover: true
  });

  // SweetAlert2
  $('#elegir-lado').click(function () {
    Swal.fire({
      title: '¿De qué lado de la Fuerza estás?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Lado luminoso',
      cancelButtonText: 'Lado oscuro',
      confirmButtonColor: '#3FA9F5',
      cancelButtonColor: '#C0392B',
      background: '#14142A',
      color: '#EAEAEA'
    }).then(function (result) {
      if (result.isConfirmed) {
        Swal.fire({ title: 'Bienvenido, Jedi', text: 'Que la Fuerza te acompañe.', icon: 'success',
                    background: '#14142A', color: '#EAEAEA', confirmButtonColor: '#3FA9F5' });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({ title: 'Has elegido el lado oscuro', text: 'Tu entrenamiento como Sith comienza hoy.', icon: 'warning',
                    background: '#14142A', color: '#EAEAEA', confirmButtonColor: '#C0392B' });
      }
    });
  });

  // Timelinr
  $('#timeline').timelinr({
    arrowKeys: 'true',
    autoPlay: 'true',
    autoPlayPause: 4000
  });

});
