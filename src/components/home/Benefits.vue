<template>
    <div id="app">
        <div class="container py-5 text-center">
            <h1>Benefits of our Programs</h1>
            <p>Whether you are a corporate executive, public figure, investor, or private citizen, the benefits of
                investing in our programs will impact all <br>aspects of life in the short and long term.</p>

        </div>

            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-4" v-for="benefit in benefits">
                        <div class="col-2 py-3">
                            <img class="img-icon" v-bind:src="benefit.image" alt="travel">
                        </div>
                        <div class="col-10 text-left">
                            <h5>{{benefit.heading}}</h5>
                            <p>{{benefit.text}}</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                benefits: [
                    //1
                    {
                        image: '/img/icon/benefits/world-01.svg',
                        heading: 'Ease of travel',
                        text: 'Convenient visa-free travelling.',

                    },

                    // 2
                    {
                        image: '/img/icon/benefits/assets-01.svg',
                        heading: 'Asset protection',
                        text: 'Diversify and secure your wealth.',

                    },
                    // 3
                    {
                        image: '/img/icon/benefits/education-01.svg',
                        heading: 'Education',
                        text: 'Broader education opportunities for your family.',

                    },
                    // 4
                    {
                        image: '/img/icon/benefits/retire-01.svg',
                        heading: 'Overseas retirement',
                        text: 'Retire in a safe destination away from distress.',

                    },
                    // 5
                    {
                        image: '/img/icon/benefits/skyline-01.svg',
                        heading: 'Freedom',
                        text: 'Freedom to live, work or study internationally.',

                    },
                    //6
                    {
                        image: '/img/icon/benefits/family-01.svg',
                        heading: 'Security',
                        text: 'Protect what you value the most.',

                    },
                ]
            }
        },
    }
</script>

<style scoped>

    img.img-icon {

        height: 100px;
        width: 100px;

    }
</style>
