<template>
    <div id="app">
        <div class="bg">
            <h3 class="text-dark text-center py-5">This page can not be found return to <span ><router-link class="text-danger" to="/">Home</router-link> </span></h3>

            <img class="img-fluid"  id="404" src="../../public/img/background/404-icon-01.svg">

        </div>
    </div>

</template>

<script>
    export default {


    }
</script>

<style lang="scss" scoped>

    #app{
        display:flex;
        align-items: center;
        justify-content: center;



        background-image: url("../../public/img/background/404page-01.svg");

        height: 800px;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;



    }
    #404{
        height: 50px;
    }




</style>
