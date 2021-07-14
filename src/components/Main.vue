<template>
    <main class="row main-container">
        <Element  class="col-4  col-sm-4 col-md-3 col-lg-3" v-for=" (element, index) in elements" :key="index"
         :poster='element.poster'
         :title='element.title'
         :author='element.author'
         :year='element.year'
        
        />
    </main>

</template>

<script>
import Element from './Element.vue'
export default {
    name:'Main',

    components:{
      Element,
    },
    props:{
        elements: Array
    }
}
</script>

<style lang="scss" scoped>
   .main-container{
       
   margin-top: 30px;
   margin-bottom:30px;
   }
</style>


