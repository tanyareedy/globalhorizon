<template>
    <div  class="my-6 pb-5">
        <div id="jumbo">
            <div class="container mb-3">
                <div  class="col-md-10 bg-dark px-lg-6" id="countryInfo">
                    <h1 class="py-2 text-white text-capitalize">{{program.name}}</h1>
                    <p class="text-white">
                        {{program.text}}
                    </p>
                    <div class="text-white">
                        <p><font-awesome-icon icon="map-marked" class=" pr-2"/>

                            {{program.location}}</p>

                        <p><font-awesome-icon icon="money-bill-wave" class="pr-2"/>
                            {{program.investment}}</p>
                    </div>
                    <button class="btn btn-lg bg-primary text-white my-3"><router-link class="text-light" to="/">Get started</router-link></button>
                </div>

            </div>
        </div>

        <div class="bg-light pt-3">
            <div class="container">
                <div class="row py-5">
                    <div class="col-md-3 col-sm-12">
                        <h1 class="text-capitalize">About {{program.name}} </h1>
                    </div>
                    <div class="col-md-9 col-sm-12">
                        <p class="text-justify">

                            {{program.about}}

                        </p>
                    </div>
                </div>

                <div class="row py-5">
                    <div class="col-md-3 col-sm-12">
                        <h1> Program Information</h1>
                        <p>

                            {{program.info}}
                        </p>
                    </div>
                    <div class="col-md-9 col-sm-12 text-justify">

                        <ul v-for="infoItem in infoItems" id="listItem">


                            <li class="py-3"><p>{{infoItem.list}}</p></li>


                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {

        name:"jumbo",


        data() {
            return {
                program: {
                    name:'cyprus',
                    text:'The Republic of Cyprus, is the third largest and most populous island in the Eastern Mediterranean. This big island has a strategic and premium location, as it is to the south of Turkey, west of Syria and Lebanon, north of Egypt and southeast of Greece.',
                    location:'Eastern Mediterranean Island',
                    investment:'European Union Citizenship',
                    investment2:'Property Investment',
                    about:'Live and invest in the sunniest country in Europe. Cyprus is located just southeast of Greece and in the midst between Europe, Asia, and Africa. Cyprus has become a popular investment destination due to substantial growth in tourism year over year. Cyprus citizenship offers all the benefits of being a citizen in the European Union.',
                    info:'The Cypriot immigration policy and legal framework now enable Non-EU applicants to obtain Cypriot citizenship on an expedited basis. There are a number of reasons the Cypriot Investment Program (CIP) is now considered to be one of the most attractive in the world, including:',
                },
                infoItems:[
                    {
                        list:'There is no requirement to make a donation to the local government, in contrast to most other citizenship programs worldwide.',

                    },
                    {
                        list:'Cyprus does not require applicants to live on the island prior, during or after the application process, unlike all other EU countries with citizenship programs that impose some form of residency requirements.',

                    },
                    {
                        list:'Application process takes 6 months, with approval granted within 6 months, being by far the fastest citizenship application procedure worldwide.'
                    },
                    {
                        list:'Simple and straightforward application process with no requirements to disclose source of wealth or funds, no medical testing, no interview, and no language requirements.',

                    },
                    {
                        list:'Approved by the EU (being one of only two CBI programs in Europe with official EU approval).',

                    },
                ],

            }
        },

    }
</script>


<style scoped>

    #jumbo {
        background-image: url("/img/background/location/city-view.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 20px 0 20px 0;

    }

    #countryInfo{
        border-radius: 30px;
        opacity: 0.9;
        filter: alpha(opacity=50); /* For IE8 and earlier */
    }

    #countryInfo:hover {
        opacity: 1.0;
        filter: alpha(opacity=100); /* For IE8 and earlier */
    }
</style>
