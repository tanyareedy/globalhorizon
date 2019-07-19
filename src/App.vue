<template>
    <div id="app">
        <Nav/>
        <transition name="router-anim">
            <router-view/>
        </transition>
        <app-footer/>


    </div>
</template>

<style lang="scss">


    @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');

    html, body {
        font-family: 'Nunito', sans-serif;

        /*remove horizontal scroll bar*/
        max-width: 100%;
        overflow-x: hidden;

    }

    #app {
        font-family: 'Nunito', sans-serif;

    }

    @import "~animate.css/animate.min.css";
    /*@import "~bootstrap/scss/bootstrap";*/
    /*@import '~bulma/bulma';*/

    .router-anim-enter-active {
        animation: coming 1s;
        animation-delay: .5s;
        opacity: 0;
    }

    .router-anim-leave-active {
        animation: going 1s;
    }

    @keyframes going {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-50px);
            opacity: 0;
        }
    }

    @keyframes coming {
        from {
            transform: translateX(-50px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    /*Scrollbar*/
    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #21c0f7;
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #16789c;
    }


</style>

<script>
    import siteInfo from '../src/db/siteInfo'


    export default {
        name: 'app',
        data() {

            return {
                myJson: siteInfo
            }
        }
    }

</script>
