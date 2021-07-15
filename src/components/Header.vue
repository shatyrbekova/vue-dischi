<template>
    <header>
        <div class="logo">
           <img src="../assets/spotify-logo.png" alt="">

              <!-- //!Bonus Creare un input per la ricerca all’interno del titolo  -->

             <!-- Quando l'utente digita enter, l'input fa l'emit verso
              il padre (App.vue)  di search con il dato ricerca Titolo-->

              <!--  cerca fai emit di questo evento, portando con te anche ricercaTitolo-->
              <input type="text" placeholder="Search" v-model="ricercaTitolo"
        
               @keyup.enter="$emit('cerca', ricercaTitolo)"
              >


           <!-- //*Creare una select per filtrare i dischi in base al genere -->
         
            <select name="select" v-model="searchGenre" @click="$emit('search', searchGenre)">
              <option v-for="(genre, index) in genresList" :key="index" :value="genre" >
                {{genre}}
              </option>
          
            </select>
           
        </div>
    </header>
</template>

<script>
export default {
  name: "Header",
  props:{
  //  filteredElements: Array,
   genresList: Array,
  },
  data(){
    return {
      searchGenre:'',
      ricercaTitolo:'',
      
      
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  height: 90px;
  background: rgb(45, 58, 70);
  display: flex;
  align-items: center;
  img {
    width: 80px;
  }
}
</style>



