<template>
    <div class="loader">
       La pagina sta caricando....
    </div>    
</template>


<script>
export default {
    name: "Loader"
}
</script>


<style lang="scss" scoped>

    .loader {
        position: fixed;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgb(45, 58, 70);
        color:white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>