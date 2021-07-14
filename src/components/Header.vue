<template>
    <header>
        <div class="logo">
           <img src="../assets/spotify-logo.png" alt="">
        </div>
    </header>
</template>

<script>
export default {
    name:'Header',
    components:{

    }
}
</script>

<style lang="scss" scoped>
      header{
          height:90px;
          background:  rgb(43, 43, 51);
          display:flex;
          align-items: center;
          img{
              width:80px;
            
          }
      }
</style>



