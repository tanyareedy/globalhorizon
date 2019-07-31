<template>
    <section class="container" id="country">
        <h1 class="text-center py-3">Trustpilot rates Globalhorizon as excellent</h1>


        <div id="testimonial">

                <div  class="row">
                    <div v-for="testify in testifys" class="col-lg-6">

                    <div  class="my-3 px-2 border rounded shadow-sm bg-white ">
                        <div class="row">
                            <div class="col-3">
                                <img class="profilePicture mt-2" v-bind:src="testify.image" alt="image">
                            </div>
                            <div class="col-9 px-2">
                                <h4 class="mb-0 mt-2">{{testify.name}}</h4>
                                <p class="text-muted mt-0">
                                    <font-awesome-icon class="mx-2" icon="pen"/>
                                    &nbsp;{{testify.reviewCount}} reviews &nbsp;
                                    <font-awesome-icon class="mx-2" icon="map-marked-alt"/>
                                    &nbsp;{{testify.location}}
                                </p>
                            </div>
                        </div>
                        <hr>
                        <div id="star">
                            <font-awesome-icon class="mx-1" icon="star"/>
                            <font-awesome-icon class="mx-1" icon="star"/>
                            <font-awesome-icon class="mx-1" icon="star"/>
                            <font-awesome-icon class="mx-1" icon="star"/>
                            <font-awesome-icon class="mx-1" icon="star"/>
                        </div>
                        <div>
                            <h5>{{testify.heading}}</h5>
                            <p>{{testify.Text}}</p>
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
                testifys: [
                    {
                        image: '/img/icon/testify/sun.jpg',
                        name: 'George TePoono',
                        reviewCount: '3',
                        location: 'Sydney, AU',
                        heading: 'Thank you guys',
                        Text: 'Thank you guys, Customer service was very helpful through out the process. i\'d recommend you any day',

                    },
                    {
                        image: '/img/icon/testify/sun.jpg',
                        name: 'Brandon Roberts',
                        reviewCount: '2',
                        location: '',
                        heading: 'I thought it\'d take Eric 6months but he…',
                        Text: 'I thought it\'d take Eric 6months but he actually delivered under 4 months for the Carribean package. I am really impressed. Thank you',

                    },
                    {
                        image: '/img/icon/testify/sun.jpg',
                        name: 'Hallet Legal Group LLC',
                        reviewCount: '4',
                        location: 'New York, US',
                        heading: 'Our groups made up of 12 staffs and 11…',
                        Text: 'Our groups made up of 12 staffs and 11 chief executives secured our second citizenship in Malta through your agency, we are glad and thought it\'d be fair to leave a review here. Thank you',

                    },
                ]
            }
        },
    }
</script>

<style scoped>

    img.profilePicture {

        border-radius: 50%;
        height: 60px;
        width: 60px;

    }

    #star {
        color: #00b67a;
    }

</style>
