<template>

    <section>
        <footer-form/>
<div class="bg-dark" id="app">
    <div class="px-5 py-5">
    <div  class="row text-white">

        <div v-for="data in myJson" class="col-md-4 py-2">
            <img alt="Vue logo" src="../../../public/logo.png" style="width:250px; height: 60px;">
            <p ><font-awesome-icon class="mx-2" icon="envelope"></font-awesome-icon>
                <span >{{data.companyEmail}} </span></p>
            <p ><font-awesome-icon class="mx-2" icon="phone-alt"></font-awesome-icon>
                {{data.companyTel}}</p>
            <p ><font-awesome-icon class="mx-2" icon="building"></font-awesome-icon>
                {{data.companyAddress}}</p>
        </div>
        <div class="col-md-4 py-2">
            <h3>Programs</h3>
            <p><router-link to="/program/canada">Canada</router-link></p>
            <p><router-link to="/program/cyprus">Cyprus</router-link></p>
            <p><router-link to="/program/greece">Greece</router-link></p>
            <p><router-link to="/program/malta">Malta</router-link></p>
            <p><router-link to="/program/usa">U.S.A</router-link></p>

        </div>
        <div class="col-md-4 py-2">
            <h3>Useful links</h3>
            <p><router-link to="/programs">Programs</router-link></p>
            <p><router-link to="/about">About Global Horizon</router-link></p>
            <p><router-link to="/privacy">Privacy Statement</router-link></p>
            <p><router-link to="/become-a-client">Questionnaire</router-link></p>


        </div>
    </div>
    </div>
</div>
    </section>
</template>

<script>
    import siteInfo from '../../db/siteInfo'
    import FooterForm from '../../components/home/FooterForm'
    import buttonBac from '../../components/commons/buttons/buttonBac'


    export default {
        components:{
            FooterForm,
            buttonBac,

        },
        name: 'app',
        data() {

            return {
                myJson: siteInfo
            }
        },



    }

</script>

<style scoped>
#app {
    background-image: url("/img/background/map-01.svg");

    height: 100%;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
