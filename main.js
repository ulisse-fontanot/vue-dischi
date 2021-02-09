var app = new Vue({
  el: "#app",
  data:{
    dischi: ""
  },
  mounted(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then(result => {
      this.dischi = result.data.response;
    }).catch(error => console.log('errore'));
    console.log(this.dischi);
  }
});
