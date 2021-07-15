<template>
    <main class="row main-container">
        <Element  class="col-12 col-sm-12 col-md-12 col-lg-12" v-for=" (element, index) in elements" :key="index"
         :poster='element.poster'
         :title='element.title'
         :author='element.author'
         :year='element.year'
         :genre='element.genre'
        
        />
    </main>

</template>

<script>
import Element from "./Element.vue";
export default {
  name: "Main",

  components: {
    Element
  },
  props: {
    elements: Array,
    // genresList: Array,
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  margin-top: 60px;
  margin-bottom: 60px;


    .col-lg-12 {
      width: 20%;
      float: left;
    }
  
   @media (max-width: 568px){

   }
 
  @media (max-width: 768px) {
    .col-sm-12 {
      width: 50%;
      float: left;
    }
  }

  @media (max-width: 992px){
    .col-md-12{
      width: calc(100% / 3);
      float:left;
    }
  }
 
}
</style>


