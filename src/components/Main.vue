<template>
    <main class="row main-container">
        <Element  class="col-6 col-sm-4 col-md-12 col-lg-12" v-for=" (element, index) in elements" :key="index"
         :poster='element.poster'
         :title='element.title'
         :author='element.author'
         :year='element.year'
        
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
    elements: Array
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  margin-top: 30px;
  margin-bottom: 30px;

  .col-md-12 {
    width: calc(100% / 3);
  }
  .col-lg-12 {
    width: 20%;
    float: left;
  }
}
</style>


