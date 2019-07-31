<template>
    <div>

        <!-- Trigger the modal with a button -->
        <div class="text-white text-center" data-toggle="modal" data-target="#myModal">Become a Client</div>


        <!-- Modal -->
        <div class="modal fade" id="myModal" role="dialog">

            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title text-dark">First Steps</h4>
                    </div>
                    <div class="modal-body">
                        <p class="text-dark">

                            We have  helped hundreds of clients like you move your business overseas, legally pay less in tax,
                            get second passports, bank and invest offshore, and create a life of financial and personal freedom...<br>
                            Please take a moment to answer this question to begin your first step into becoming a global
                            citizen.
                        </p>

                    </div>
                    <div class="modal-footer">

                            <router-link data-dismiss="modal" class="text-white btn btn-success " tag="button"
                                         to="/become-a-client">Get Started
                            </router-link>

                        <button data-dismiss="modal" class="btn btn-danger" type="button">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {}
    }
</script>


<style scoped>

</style>
