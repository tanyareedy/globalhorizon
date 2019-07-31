<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="app">

        <router-link class="navbar-brand" to="/">
            <img alt="GlobalHorizon" src="../../../public/logo.png" style="width:250px; height: 60px;">
        </router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item px-2">

                    <button-bac class="btn btn-primary"/>

                </li>
                <li class="nav-item px-2">

                </li>
                <li class="nav-item px-2 dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Programs
                    </a>
                    <div class="dropdown-menu bg-dark " aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item text-white" to="/program/canada">Canada</router-link>
                        <router-link class="dropdown-item text-white" to="/program/cyprus">Cyprus</router-link>
                        <router-link class="dropdown-item text-white" to="/program/greece">Greece</router-link>
                        <router-link class="dropdown-item text-white" to="/program/malta">Malta</router-link>
                        <router-link class="dropdown-item text-white" to="/program/usa">U.S.A</router-link>
                    </div>

                </li>
                <li class="nav-item px-2">
                    <router-link class="nav-link" to="/press">Press</router-link>
                </li>
                <li class="nav-item px-2">
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                </li>
                <li class="nav-item px-2">

                    <!--<div class="text-center">
                    <h4 v-for="data in myJson" class="nav-link text-success">
                        <small class="text-white">Give us a Call</small><br>
                        <b>{{data.companyTel}}</b></h4>
                    </div>-->
                </li>

                <div id="google_translate_element"></div>
            </ul>
        </div>
    </nav>
</template>


<style scoped>

    #app {

        border-bottom: #21c0f7 solid 5px;


    }


    .dropdown-menu {
        border: #121d33 solid thick;
    }

    .dropdown-item:hover {
        background-color: #152039;
    }

    .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
        color: #0794c4;
    }

    .navbar-dark .navbar-nav .nav-link {
        color: #ffffff;
    }
</style>


<script>
    import buttonBac from './buttons/buttonBac'
    import siteInfo from '../../db/siteInfo'

    export default {
        name: 'app',

        components: {
            buttonBac
        },
        data() {

            return {
                myJson: siteInfo
            }
        }
    }

</script>



