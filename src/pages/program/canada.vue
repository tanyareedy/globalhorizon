<template>
    <div class=" py-6">
        <div class="container">
            <div class="col-md-10 bg-dark px-lg-6 py-3" id="countryInfo">
                <h1 class="py-2 text-white rounded">Canada</h1>
                <p class="text-white">
                    Canada is a country in the northern part of North America. Its ten provinces and three territories
                    extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million
                    square kilometres, making it the world's second-largest country by total area.
                </p>
                <div class="text-white">
                    <p><font-awesome-icon icon="map-marked" class=" pr-2"/>

                        North American Country</p>

                    <p><font-awesome-icon icon="money-bill-wave" class="pr-2"/>
                        Donation or Property Investment</p>
                </div>
                <button class="btn btn-lg bg-primary text-white">Get started</button>
            </div>

        </div>

        <div class="bg-light pt-6">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-12">
                        <h1>About Canada </h1>
                    </div>
                    <div class="col-md-9 col-sm-12">
                        <p class="text-justify">

                            As the second largest country on earth, Canada covers an area of 10 million square kilometres. This
                            includes a combination of: high mountains, different type of forests, prairie grasslands and arctic
                            tundra, all in between three ocean borders. Canada is the ideal place where you can enjoy chilly
                            winters and heated summers. This program requires a minimum investment of CAD $1,200,000.


                        </p>
                    </div>
                </div>

                <div class="row py-5">
                    <div class="col-md-3 col-sm-12">
                        <h1> Program Information</h1>
                        <p>

                            Established in 1986, this program is designed to assist business individuals and their families to
                            enter the country as permanent residents.
                        </p>
                    </div>
                    <div class="col-md-9 col-sm-12 text-justify">

                        <ul id="listItem">


                            <li class="py-3"><p>You and your immediate family can obtain Canadian PR by investing CAD $1,200,000
                                for five years with the government of Canada. Financing options are also available.</p></li>
                            <li class="py-3"><p>Applicants to this program must intend to reside in Quebec.</p></li>
                            <li class="py-3"><p>
                                The investment is government guaranteed, assuring that your CAD $1,200,000 will be
                                reimbursed in full at the end of five years.
                            </p></li>
                            <li class="py-3"><p>
                                No interest is paid on your investment.</p></li>


                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {}
</script>


<style scoped>

    .jumbo {
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
