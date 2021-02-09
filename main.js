$(document).ready(function() {
  $.ajax({
    url: 'https://flynn.boolean.careers/exercises/api/array/music',
    method: 'GET',
    success: function(data) {
      for (var i = 0; i < 10; i++) {
        this.dischi.push({
          src: data.poster,
          title: data.title,
          author: data.author,
          genre: data.genre,
          year: data.year
        })
      }
    },
    error: function(){
      alert("si e verifivato un errore");
    }
  })
});
