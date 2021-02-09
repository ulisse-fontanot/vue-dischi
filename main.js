var app = new Vue({
  el: "#app",
  data:{
    dischi: "",
    generi: []
  },
  mounted(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then(result => {
      this.dischi = result.data.response;
      console.log(this.dischi);
      // -------------------
      result.data.response.forEach((element) => {
        if (!this.generi.includes(element.genre)) {
          this.generi.push(element.genre);
        }
      })
      console.log(this.generi);
      // -------------------
      this.generi.forEach((element) => {
        document.getElementById('genere').innerHTML +=`
        <option>${element}</option>
        `
      });
      // -------------------
      
    })
    .catch(error => console.log('errore'));
  }
});
