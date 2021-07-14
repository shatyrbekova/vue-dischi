<template>
    <div class="element-container">

        <div class="inner">
             <img :src="poster" alt="Poster" />
             <div class="title"> {{title}} </div> 
             <div class="title-informations">
               <div class="author"> {{author}} </div>
               <div class="year"> {{year}} </div>
             </div>
             
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

         background:  rgb(43, 43, 51);
         height: 510px;

         padding: 40px;
         img{
            width:100%;
         }
         .title{
             font-size: 27px;
             padding: 12px;
             margin-top: 12px;
             font-weight: bold;
             color:white;
             
         }
         .title-informations{
           margin-top: 15px;
           color: rgb(129, 123, 123);
           font-size: 20px;
           
         }
         
         
     }
     }
     @media all and (max-width: 768px){
         .inner{
              height: 380px;
              padding: 20px;
         }
     }
     
</style>