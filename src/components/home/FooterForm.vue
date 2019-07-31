<template xmlns="http://www.w3.org/1999/html">
    <div>
        <hr>
        <div class="container py-5">

            <div class="row py-2">
                <div class="col-lg-6 col-md-12">
                    <h1>Connect With Our International Experts</h1>
                   <ul>
                    <li>
                        We are network of top law firms in each jurisdiction, so your interests are protected by licenced and experienced professionals.
                    </li>
                    <li>
                        We combine extensive experience in both immigration solutions, and investment expertise to ensure we maximize the quality of your investment, while achieving your immigration needs.
                    </li>
                    <li>
                        We listen carefully and tailor solutions, within the limits of each program to meet the specific needs of our clients.

                    </li>
                   </ul>
                </div>
                <div class="col-lg-6 col-md-12 my-5">
                   <div>
                    <router-link to='/contact' class="btn btn-primary mx-2 my-3 text-white" href="#" role="button">Leave a Message</router-link>
                       <button-bac  class="btn btn-success mx-3 my-3 text-center" tag="button"/>

                   </div>
                  <!--  <button  class="btn btn-success mx-2 my-3 text-white"  role="button">

                    </button>-->


                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ButtonBac from "../commons/buttons/buttonBac";
    export default {
        components: {
            ButtonBac
        }
    }
</script>

<style scoped>

li{
    padding: 5px 0 5px 0;
}
</style>
