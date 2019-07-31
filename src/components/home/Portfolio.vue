<template>
    <div id="app">
        <div class="container py-3 text-white">
            <h1 class="text-left">
                International<br>
                Portfolio
            </h1>
            <div class="row py-5">
                <div class="col-6 py-3">
                    <h1>700+</h1>
                    </div>
                <div class="col-6 py-3">
                    <h1>12</h1>
                </div>
                <div class="col-6 py-3">
                    <h1>20+</h1>
                    </div>
                <div class="col-6 py-3">
                    <h1>+85</h1>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {


    }
</script>

<style scoped>

    #app{
        position: relative;
        /* The countryImage used */
        background-image: url("/img/background/location/city-view.jpg");

        /* Set a specific height */
        min-height: 100%;

        /* Create the parallax scrolling effect */
        height: 100%;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

    }

</style>
