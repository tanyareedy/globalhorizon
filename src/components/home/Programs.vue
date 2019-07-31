<template>
    <section class="bg-white">
        <h1 class="py-3 text-center">Select A Program</h1>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img src="../../../public/img/background/location/location-Canada.jpg" class="card-img-top"
                             alt="Card image cap" style="height: 230px;">

                        <div class="card-body">
                            <h1 class="centered text-capitalize">{{program.countryName}}</h1>

                            <p class="text-capitalize">
                                <font-awesome-icon class="mx-2" icon="map-marked"></font-awesome-icon>
                                {{program.location}}
                            </p>
                            <p class="text-capitalize">
                                <font-awesome-icon class="mx-2" icon="money-bill-wave"></font-awesome-icon>

                                {{program.investType}}
                            </p>


                            <div id="vueTarget">
                                <small class="text-success">
                                    <font-awesome-icon class="mx-2" icon="eye"></font-awesome-icon>

                                    <online-counter :min="3" :max="15"></online-counter>
                                    people are viewing this program
                                </small>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group mt-3">

                                    <p class="lead text-white">
                                        <router-link to="/program/canada" class="btn bg-success text-white btn-md"
                                                     role="button">Learn more
                                        </router-link>

                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img src="../../../public/img/background/location/location-Cyprus.jpg" class="card-img-top"
                             alt="Card image cap">

                        <div class="card-body">
                            <h1 class="centered">Cyprus</h1>

                            <p>
                                <font-awesome-icon class="mx-2" icon="map-marked"></font-awesome-icon>
                                Southern European Coast Country
                            </p>
                            <p>
                                <font-awesome-icon class="mx-2" icon="user"></font-awesome-icon>
                                European Union Citizenship
                            </p>
                            <p>
                                <font-awesome-icon class="mx-2" icon="money-bill-wave"></font-awesome-icon>

                                Property Investment
                            </p>

                            <div id="vueTarget2">
                                <small class="text-success">
                                    <font-awesome-icon class="mx-2" icon="eye"></font-awesome-icon>

                                    <online-counter :min="3" :max="15"></online-counter>
                                    people are viewing this program
                                </small>
                            </div>

                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group mt-3">

                                    <p class="lead text-white">
                                        <router-link to="/program/cyprus" class="btn bg-success text-white btn-md"
                                                     role="button">Learn more
                                        </router-link>


                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img src="../../../public/img/background/location/location-Greece.jpg" class="card-img-top"
                             alt="Card image cap">

                        <div class="card-body">
                            <h1 class="centered">Greece</h1>

                            <p>
                                <font-awesome-icon class="mx-2" icon="map-marked"></font-awesome-icon>
                                Southern European Coast Country
                            </p>
                            <p>
                                <font-awesome-icon class="mx-2" icon="user"></font-awesome-icon>
                                European Union Citizenship
                            </p>
                            <p>
                                <font-awesome-icon class="mx-2" icon="money-bill-wave"></font-awesome-icon>
                                Property Investment
                            </p>

                            <div id="vueTarget3">
                                <small class="text-success">
                                    <font-awesome-icon class="mx-2" icon="eye"></font-awesome-icon>
                                    <online-counter :min="3" :max="15"></online-counter>
                                    people are viewing this program
                                </small>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group mt-3">

                                    <p class="lead text-white">
                                        <router-link to="/program/greece" class="btn bg-success text-white btn-md"
                                                     role="button">Learn more
                                        </router-link>

                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img src="../../../public/img/background/location/location-Grenada.jpg" class="card-img-top"
                             alt="Card image cap">

                        <div class="card-body">
                            <h1 class="centered">Grenada</h1>

                            <p>
                                <font-awesome-icon class="mx-2" icon="map-marked"></font-awesome-icon>
                                Eastern Mediterranean Island
                            </p>
                            <p>
                                <font-awesome-icon class="mx-2" icon="user"></font-awesome-icon>
                                European Union Citizenship
                            </p>
                            <p>
                                <font-awesome-icon class="mx-2" icon="money-bill-wave"></font-awesome-icon>
                                Property Investment
                            </p>

                            <div id="vueTarget4">
                                <small class="text-success">
                                    <font-awesome-icon class="mx-2" icon="eye"></font-awesome-icon>
                                    <online-counter :min="3" :max="15"></online-counter>
                                    people are viewing this program
                                </small>
                            </div>


                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group mt-3">

                                    <p class="lead text-white">

                                        <router-link to="/program/grenada" class="btn bg-success text-white btn-md"
                                                     role="button">Learn more
                                        </router-link>

                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-sm-12 col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img src="../../../public/img/background/location/location-Malta.jpg" class="card-img-top"
                             alt="Card image cap">

                        <div class="card-body">
                            <h1 class="centered">Malta</h1>

                            <p>
                                <font-awesome-icon class="mx-2" icon="map-marked"></font-awesome-icon>
                                Southern Mediterranean Island
                            </p>

                            <p>
                                <font-awesome-icon class="mx-2" icon="user"></font-awesome-icon>
                                European Union Citizenship
                            </p>
                            <p>
                                <font-awesome-icon class="mx-2" icon="money-bill-wave"></font-awesome-icon>
                                Property Investment
                            </p>

                            <div id="vueTarget6">
                                <small class="text-success">
                                    <font-awesome-icon class="mx-2" icon="eye"></font-awesome-icon>
                                    <online-counter :min="3" :max="15"></online-counter>
                                    people are viewing this program
                                </small>
                            </div>


                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group mt-3">

                                    <p class="lead text-white">
                                        <router-link to="/program/malta" class="btn bg-success text-white btn-md"
                                                     role="button">Learn more
                                        </router-link>

                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class="card mb-4 box-shadow">
                        <img src="../../../public/img/background/location/location-USA.jpg" class="card-img-top"
                             alt="Card image cap">

                        <div class="card-body">
                            <h1 class="centered">USA</h1>

                            <p>
                                <font-awesome-icon class="mx-2" icon="map-marked"></font-awesome-icon>
                                North America
                            </p>

                            <p>
                                <font-awesome-icon class="mx-2" icon="money-bill-wave"></font-awesome-icon>
                                Property Investment
                            </p>

                            <div id="vueTarget5">
                                <small class="text-success">
                                    <font-awesome-icon class="mx-2" icon="eye"></font-awesome-icon>
                                    <online-counter :min="3" :max="15"></online-counter>
                                    people are viewing this program
                                </small>
                            </div>


                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group mt-3">

                                    <p class="lead text-white">
                                        <router-link to="/program/usa" class="btn bg-success text-white btn-md"
                                                     role="button">Learn more
                                        </router-link>

                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
</template>

<script>
    export default {

        data() {
            return {
                program: {
                    countryImage: '../../assets/img/background/location/location-Canada.jpg',
                    countryImageAlt: 'canada',
                    countryName: 'canada',
                    location: 'north american Country',
                    investType: 'Property Investment',
                }
            }
        },
    }


</script>

<style scoped>

</style>
