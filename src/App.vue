<template>
  <div id="app">
    <Header @search="searchGenresList"  :genresList="genresList" />

    <div class="container">
      <Main :elements="elements" />
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
      // filteredElements:[],
      genresList: [],
    };
  },
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((result) => {
        this.elements = result.data.response;
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
    // searchAlbum(searchGenre){
    //   this.filteredElements =this.elements.filter((item)=>{
    //         return item.genre.includes(searchGenre);
    //   })
    // }
  },
};
</script>

<style lang="scss">
@import "./style/app.scss";
</style>
