<template>
    <header>
        <div class="logo">
           <img src="../assets/spotify-logo.png" alt="">
              <!-- //!Bonus Creare un input per la ricerca all’interno del titolo  -->

              <!-- <input type="text" placeholder="Search" v-model="ricercaTitolo"
               @keyup.enter="$emit('cerca', ricercaTitolo "
              > -->


           <!-- //*Creare una select per filtrare i dischi in base al genere -->
         
            <select name="select" v-model="searchGenre" @click="$emit('search', searchGenre)">
              <option v-for="(genre, index) in genresList" :key="index" :value="genre" >
                {{genre}}
              </option>
               <!-- <option value="" >Select your favorite genre</option>
               <option value="rock">Rock</option>
               <option value="pop">Pop</option>
               <option value="jazz">Jazz</option>
               <option value="metal">Metal</option> -->
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



