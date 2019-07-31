<template>
    <section class="bg-white" id="app">
        <h1 class="py-3 text-center">Select A Program</h1>
        <div class="container">
            <div class="row">
                <div v-for="program in programs" class="col-sm-12 col-md-4 py-3">
                    <div class="card mb-4 box-shadow shadow-sm rounded-top rounded-bottom border-grey" id="countryImage">
                        <div class="bottom-left"><h1 class="text-white text-capitalize">{{program.countryName}}</h1></div>

                        <img v-bind:src="program.countryImage" class="card-img-top"
                             style="height: 230px;" v-bind:alt="program.countryName" />

                        <div class="card-body">

                            <p class="text-capitalize">
                                <img class="ml-0 py-1" v-bind:src="program.propertyIcon"
                                     style="height: 40px;"/>
                                {{program.location}}
                            </p>
                            <p class="text-capitalize">
                                <img class="ml-0 py-1" v-bind:src="program.worldMapIcon"
                                     style="height: 40px;"/>

                                {{program.propertyInvest}}
                            </p>
                            <p class="text-capitalize">
                                <img class="ml-0 py-1" v-bind:src="program.passportIcon"
                                     style="height: 40px;"/>

                                {{program.citizenInvest}}
                            </p>

                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group mt-3">

                                    <p class="lead text-white">
                                        <router-link  v-bind:to="program.countryUrl" class="btn bg-success text-white btn-md text-capitalize"
                                                     role="button">Learn more...
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
        name: 'app',
        data() {
            return {
                programs: [
                    // Canada
                    {
                        countryUrl:'/program/canada',
                        countryImage: '/img/background/location/location-Canada.jpg',
                        countryName: 'canada',
                        countryImageAlt: 'canada',
                        worldMapIcon: '/img/icon/program/apartment.svg',
                        propertyIcon: '/img/icon/program/worldwide.svg',
                        location: 'north american Country',
                        propertyInvest: ' Property Investment',

                    },
                   // Cyprus
                    {
                        countryUrl:'/program/cyprus',
                        countryImage: '/img/background/location/location-Cyprus.jpg',
                        countryName: 'Cyprus',
                        countryImageAlt: 'cyprus',
                        worldMapIcon: '/img/icon/program/apartment.svg',
                        passportIcon: '/img/icon/program/passport.svg',
                        propertyIcon: '/img/icon/program/worldwide.svg',
                        location: 'Southern European Coast Country',
                        propertyInvest: ' Property Investment',
                        citizenInvest: 'European Union Citizenship',
                        // passportValue: false,

                    },
                    //greece
                    {
                        countryUrl:'/program/greece',
                        countryImage: '/img/background/location/location-Greece.jpg',
                        countryName: 'Greece',
                        countryImageAlt: 'greece',
                        worldMapIcon: '/img/icon/program/apartment.svg',
                        passportIcon: '/img/icon/program/passport.svg',
                        propertyIcon: '/img/icon/program/worldwide.svg',
                        location: 'Southern European Coast Country',
                        propertyInvest: ' Property Investment',
                        citizenInvest: 'European Union Citizenship',

                    },

                    // grenada
                    {
                        countryUrl:'/program/grenada',
                        countryImage: '/img/background/location/location-Grenada.jpg',
                        countryName: 'Grenada',
                        countryImageAlt: 'grenada',
                        worldMapIcon: '/img/icon/program/apartment.svg',
                        passportIcon: '/img/icon/program/passport.svg',
                        propertyIcon: '/img/icon/program/worldwide.svg',
                        location: 'Southern European Coast Country',
                        propertyInvest: ' Property Investment',
                        citizenInvest: 'European Union Citizenship',

                    },

                    //malta
                    {
                        countryUrl:'/program/malta',
                        countryImage: '/img/background/location/location-Malta.jpg',
                        countryName: 'Malta',
                        countryImageAlt: 'malta',
                        worldMapIcon: '/img/icon/program/apartment.svg',
                        passportIcon: '/img/icon/program/passport.svg',
                        propertyIcon: '/img/icon/program/worldwide.svg',
                        location: 'Southern Mediterranean Island',
                        propertyInvest: ' Property Investment',
                        citizenInvest: 'European Union Citizenship',

                    },

                    //usa
                    {
                        countryUrl:'/program/usa',
                        countryImage: '/img/background/location/location-USA.jpg',
                        countryName: 'USA',
                        countryImageAlt: 'usa',
                        worldMapIcon: '/img/icon/program/apartment.svg',
                        propertyIcon: '/img/icon/program/worldwide.svg',
                        location: 'North America',
                        propertyInvest: ' Property Investment',

                    },

                ]
            }
        },
    }


</script>

<style lang="scss" scoped>

    #countryImage:hover {
        opacity: 1.0;
        filter: alpha(opacity=100); /* For IE8 and earlier */
    }


    .bottom-left {
        position: absolute;
        padding-top: 170px;
        left: 16px;
    }





</style>
