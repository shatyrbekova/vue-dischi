<template>
    <header>
        <div class="logo">
           <img src="../assets/spotify-logo.png" alt="">

           <!-- //*Creare una select per filtrare i dischi in base al genere -->
            <!-- //?Come si crea il select  = fatto
            //?Come creare una funzione con il filter  -->
            <select name="select" v-model="searchGenre" @click="$emit('search','searchGenre') ">
              <option v-for="(genre, index) in filteredElements" :key='index' :value="genre" >
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
   filteredElements: Array
  },
  data(){
    return {
      searchGenre:'',
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



