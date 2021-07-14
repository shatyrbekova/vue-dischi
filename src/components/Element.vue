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

</style>