<template>
  <header>
    <div class="logo">
      <img src="../assets/spotify-logo.png" alt="" />
    </div>
    <!-- //!Bonus Creare un input per la ricerca all’interno del titolo  -->

    <!-- Quando l'utente digita enter, l'input fa l'emit verso
              il padre (App.vue)  di search con il dato ricerca Titolo-->

    <!--  cerca fai emit di questo evento, portando con te anche ricercaTitolo-->
    <div>
      <input
        type="text"
        placeholder="Search"
        v-model="ricercaTitolo"
        @keyup.enter="$emit('cerca', ricercaTitolo)"
      />
    </div>

    <!-- //*Creare una select per filtrare i dischi in base al genere -->

    <div class="select">
      <label for="albums">Choose a genre:</label>
      <select
        name="select"
        v-model="searchGenre"
        @click="$emit('search', searchGenre)">
        <option
          v-for="(genre, index) in genresList"
          :key="index"
          :value="genre"
        >
          {{ genre }}
        </option>
      </select>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    //  filteredElements: Array,
    genresList: Array,
  },
  data() {
    return {
      searchGenre: "",
      ricercaTitolo: "",
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 90px;
  background: rgb(45, 58, 70);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  text-transform: uppercase;
  img {
    width: 80px;
  }

  input {
    width: 450px;
    border-radius: 18px;
    padding: 5px 16px;
    border: none;
  }
  input[type="text"]:focus {
    outline: none;
  }
  label{
    color:white;
    font-weight: bold;
  }
  @media (max-width: 768px){
    input{
      width:200px;
    }
    .select{
      text-align: center
    }
}
}
</style>
