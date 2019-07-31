<template>
    <section class="page">
        <div class="container py-5">
            <h1 class="py-5">Speak to an expert now</h1>

            <div class="row">
                <div class="col-md-6">
                    <contactForm/>

                </div>
                <div class="col-md-6">

                    <h1 class="ml-2">Connect With Our International Experts</h1>

                        <ul id="connectUs">


                            <li class="py-3">We are network of top law firms in each jurisdiction, so your interests are
                                protected by licenced and experienced professionals.
                            </li>
                            <li class="py-3">We combine extensive experience in both immigration solutions, and investment
                                expertise to ensure we maximize the quality of your investment, while achieving your immigration
                                needs.
                            </li>
                            <li class="py-3">We listen carefully and tailor solutions, within the limits of each program to meet
                                the specific needs of our clients.
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

    </section>
</template>


<style lang="scss">


</style>

<script>


    // import Square from '../components/Square';
    import contactForm from '../components/form/form1'
    import contactForm2 from '../components/form/form2'

export  default {
        components:{
            // Square,
            contactForm,
            contactForm2,

        },
}


</script>
