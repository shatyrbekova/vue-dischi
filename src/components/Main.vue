<template>
    <main class="row">
        <Element  class="col-3 col-md-2" v-for=" (element, index) in elements" :key="index"
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
   main{
       background: rgb(43, 43, 58);
   
   }
</style>


