<template>
    <section>
        <div class="jumbo text-white py-5">
            <h6 class="display-4 text-center ">GO WHERE YOU'RE <br>TREATED BEST</h6>
            <p class="lead text-center">We offer holistic, legal strategies to successful entrepreneurs and investors to<br>
                reduce their tax bill, grow wealth overseas, and become global citizens.<br>

                More money. More freedom. More options.</p>
            <hr class="my-2">
            <div class="row">
                <div class="col text-center">
                    <p class="lead">
                        <router-link to="/become-a-client" class="btn btn-success btn-lg " href="Jumbo action link"
                                     role="button">Become a Client
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
        <div class="bg-dark text-white">
            <div class="container">
                <div class="row py-4">
                    <div class="col-sm-12 col-lg-8">
                        <h4 class="text-center text-lg-left">Take The First Step Towards An Alternative Residency And Citizenship</h4>
                    </div>
                    <div class="col-sm-12 col-lg-4 text-center">
<button-bac class="btn btn-primary"/>
                        <!--<router-link to="/become-a-client" class="btn btn-outline-light" href="#" role="button">
                            Become a Client
                        </router-link>-->
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
    import ButtonBac from "../commons/buttons/buttonBac";
    export default {
        components: {ButtonBac}
    }
</script>

<style scoped>

    .jumbo {
        background-image: url("/img/background/location/city-view.jpg");
        background-color: #495057;

        height: 150%;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
