<template>
    <div class="element-container">

        <div class="inner">
             <img :src="poster" alt="Poster" />
             <div class="title"> {{title}} </div> 
             <div class="author"> {{author}} </div>
             <div class="year"> {{year}} </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Element',
    props:{
      poster: String,
      title: String,
      author: String,
      year:  String
    }
}
</script>

<style lang="scss" scoped>
     .element-container{
         margin: 15px 0;
         text-align: center;
        
      .inner {

         background: rgb(92, 90, 90);
         height: 420px;

         padding: 60px;
         img{
            width:100%;
         }
         .title{
             font-size: 24px;
             font-weight: bold;
             color:white;
             
         }
         .author, .year{
             color: rgb(124, 122, 122);
             font-size: 18px;
           
         }
         
     }
     }
     
</style>