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
                        name:'canada',
                        text:'Canada is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres, making it the world\'s second-largest country by total area.',
                        location:'North American Country',
                        investment:'Donation or Property Investment',
                        about:' As the second largest country on earth, Canada covers an area of 10 million square kilometres. This\n' +
                            '                            includes a combination of: high mountains, different type of forests, prairie grasslands and arctic\n' +
                            '                            tundra, all in between three ocean borders. Canada is the ideal place where you can enjoy chilly\n' +
                            '                            winters and heated summers. This program requires a minimum investment of CAD $1,200,000.\n',
                    info:' Established in 1986, this program is designed to assist business individuals and their families to\n' +
                        '                            enter the country as permanent residents.',

                    },
                infoItems:[
                    {
                        list:'You and your immediate family can obtain Canadian PR by investing CAD $1,200,000 for five years with the government of Canada. Financing options are also available.',

                    },
                    {
                        list:'Applicants to this program must intend to reside in Quebec.',

                    },
                    {
                        list:'\n' +
                            'The investment is government guaranteed, assuring that your CAD $1,200,000 will be reimbursed in full at the end of five years.',

                    },
                    {
                        list:'No interest is paid on your investment.',

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
