<template>
  <div id="app">
    <Header @search="searchAlbum" />
   
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
    Main
  },
  data() {
    return {
      elements: [],
      filteredElements:[],
      
    };
  },
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then(result => {
        this.elements = result.data.response;
        this.searchAlbum('')
      });
  },
  methods:{

    searchAlbum(searchGenre){
      this.filteredElements =this.elements.filter((item)=>{
            return item.genre.includes(searchGenre);
      })
    }
  }
};
</script>

<style lang="scss">
@import "./style/app.scss";
</style>
