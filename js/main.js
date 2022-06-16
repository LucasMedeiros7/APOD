$("form").submit(false);

function apod() {
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=Iy0QFduErGyyBEM7saLdYK0ZtpfW35a1JfJtiCl0&date=${$(
      "#data"
    ).val()}`,
    success(resposta) {
      $("#titulo").html(resposta.title);
      $("#texto").html(resposta.explanation);
      $("#date").html(resposta.date);

      if (resposta.media_type === "video") {
        $("#url").html(
          `<iframe src="${resposta.url}" frameborder="0"  allowfullscreen=""></iframe>`
        );
      } else {
        $("#url").html(`<img src="${resposta.url}">`);
      }
    },
  });
}

apod();
