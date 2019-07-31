<template>
    <div id="heroContent">
        <form class="bg-white shadow p-3 rounded" id="applyForm" action="/controllers/data.php"
              method="post">
            <div class="form-row">
                <div class="form-group col-md-12">

                    <label for="firstName"><strong>Name:</strong>
                    </label>
                    <input class="form-control shadow-sm" type="text" name="name" id="firstName"
                           placeholder="Full name">

                    <label class="pt-2" for="mailFrom"><strong>Email:</strong>
                    </label>
                    <input type="email" name="mailFrom" class="form-control " id="mobileNo"
                           placeholder="Email address">

                    <label class="pt-2" for="mobileNo"><strong>Mobile No:</strong>
                    </label>
                    <input type="number" name="mobileNo" class="form-control" id="mobileNo"
                           placeholder="Mobile Number">

                    <label class="pt-2" for="exampleFormControlSelect1"><strong> Choose Program:</strong></label>
                    <select
                            class="form-control input-group-lg py-2 rounded"
                            name="program"
                            id="exampleFormControlSelect1">
                        <option value="Cyprus">Cyprus</option>
                        <option value="Canada">Canada</option>
                        <option value="Greece">Greece</option>
                        <option value="Grenada">Grenada</option>
                        <option value="USA">USA</option>
                    </select>
                </div>


                <label class="pt-2" for="message"> <strong>Message:</strong> </label>
                <textarea
                        name="message"
                        rows="10"
                        cols="10"
                        class="form-control"
                        id="message"
                        placeholder="* Briefly describe your situation and any questions you may have."
                        style="height: 150px"></textarea>

                    <button class="btn bg-success btn-block text-white my-3" type="submit" name="submit">Send Message
                    </button>
            </div>
        </form>

    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .form-control {
        display: block;
        width: 100%;
        height: calc(1.5em + .75rem + 2px);
        padding: .375rem .75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        /* background-color: #fff; */
        background-clip: padding-box;
        border: 1px solid #21c0f7;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
</style>
