$('form').submit(false);

const div = $('#figure');
const h2 = $('#titulo');
const p = $('#texto');
const datahtml = $('#date')

function apod() {

  let date = $('#data').val();

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=Iy0QFduErGyyBEM7saLdYK0ZtpfW35a1JfJtiCl0&date=${date}`,
    success(resposta) {
      let titulo = resposta.title;
      let data = resposta.date;
      let texto = resposta.explanation;
      let img = resposta.url;
      let video = resposta.media_type;

      h2.html(titulo);
      p.html(texto);
      datahtml.html(data);

      if (video === 'video') {
        div.html(`<iframe src="${video}" frameborder="0"  allowfullscreen=""></iframe>`)
      } else {
        div.html(`<img src="${img}">`)
      }
    }
  })
}

apod();