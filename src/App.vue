<template>
  <div id="app">
    <!-- quando viene lanciato @cerca, di seguito verrà lanciato il metodo searchAlbum 
    -->
    <Header @search="searchGenresList"  :genresList="genresList"
     @cerca="searchAlbum" />  

    <div class="container">
      <!-- Abbiamo usato filteredTitles perchè è array filtrato -->
      <Main :elements="filteredTitles"  /> 
    </div>
  </div>
</template>

//? perchè non funziona Bootstrap

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  data() {
    return {
      elements: [],
      filteredTitles:[], //il filtro ritorna tutto in un nuovo array, se hai un return true. //Titolo
      genresList: [],
    };
  },
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((result) => {
        this.elements = result.data.response;
        this.searchGenresList();
        // this.searchAlbum('')
        this.filteredTitles = result.data.response //Si può usare anche this.searchAlbum(' '), con la stringa vuota
        // this.searchAlbum('');
        // this.elements.forEach((disc)=>{
        //    if (!this.genresList.includes(disc.genre)){
        //         this.genresList.push(disc.genre)
        //    }
        // })
        // console.log(this.genresList)
      });
  },
  methods: {
    searchGenresList() {
      this.elements.forEach((disc) => {
        if (!this.genresList.includes(disc.genre)) {
          this.genresList.push(disc.genre);
        }
      });
      console.log(this.genresList);
    },

    searchAlbum(ricercaTitolo){ //usiamo il filter per filtrare i titoli 

       this.filteredTitles = this.elements.filter((item)=>{
          return item.title.includes(ricercaTitolo); //questo qui o TRUE o FALSE 
                

       })

      // ricercaTitolo possiamo anche cambiare a qualsiasi altra parola,cmq funziona 
      // è importante di avere un argomento che verrà inviato
        
        //In primis proviamo con l' alert ('ciao') se il metodo funziona
     
    }
  }, //!il methods si chiude qua
};
</script>

<style lang="scss">
@import "./style/app.scss";
</style>
