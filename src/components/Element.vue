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

         background:  rgb(45, 58, 70);
         height: 480px;

         padding: 25px;
         img{
            width:100%;
         }
         .title{
             font-size: 24px;
             padding: 12px;
             line-height:100%;
             margin-top: 12px;
             font-weight: bold;
             color:white;
             text-transform: uppercase;
             
         }
         .title-informations{
           margin-top: 12px;
           color: rgb(128, 128, 114);
           font-size: 20px;
           
         }
         
         
     }
     }
    //  @media all and (max-width: 768px){
    //      .inner{
    //           height: 380px;
    //           padding: 20px;
    //      }
     
     
</style>