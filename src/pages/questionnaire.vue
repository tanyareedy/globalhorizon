<template>
    <section>
    <div class="container py-5" id="app">
        <div class="row">
            <div class="offset-lg-2 col-sm-12 col-lg-8">
                <div class="mt-3 rounded">
                    <img class="img-fluid text-center" src="../../public/logo-black.png" alt="logo" style="width: 300px">
                </div>
                <div v-show="alert.show" class="alert alert-warning" role="alert">
                    {{alert.msg}}
                </div>
                <div class="card">
                    <div class="card-body">

                        <template v-if="!hasAgreed">
                            <h3 class="text-center">Let's get started...</h3>
                            <p class="text-center">
                                Each year, we help a limited number of people. We mostly work with people we can deliver significant value to. Now is your chance to tell me why you should be one of those people. This application takes 10-15 minutes to complete and will determine if we're a good fit to work together.

                                This application uses HTTPS to keep your information secure. We handle your data according to our Privacy Policy. By providing your email address, you grant us permission to send you notifications about your application and to follow up with related emails later. Upon receiving a decision on your application, you may unsubscribe at any time.<br> <strong>(Please agree to continue)</strong>
                            </p>

                            <div class="form-check">
                                <label class="form-check-label">
                                    <input v-model="hasAgreedCheckbox"
                                           type="checkbox"
                                           class="form-check-input"
                                           name="" id=""
                                           value="checkedValue"
                                           checked>
                                    I agree
                                </label>
                            </div>
                            <div class="mt-3">
                                <button @click.prevent="checkHasAgreed" type="button"
                                        class="btn btn-primary float-right">Next
                                </button>
                            </div>
                        </template>
                        <form v-if="hasAgreed" action="./data.php" method="post">
                            <template v-for="(question, index) in questions" v-if="currentStep === question.name">
                                <div class="form-group">
                                    <label>{{question.question}}</label>
                                    <template v-if="question.type==='countries'">
                                        <country-select
                                                class="form-control "
                                                v-model="answers[question.name]"
                                                :country="answers[question.name]"></country-select>
                                    </template>

                                    <template v-else-if="question.type==='textarea'">
                                        <textarea v-model="answers[question.name]" class="form-control"
                                                  rows="5"></textarea>
                                    </template>


                                    <template v-else-if="question.type==='radio'">
                                        <div v-for="(genderType,index) in question.list" class="form-check">
                                            <label class="form-check-label">
                                                <input v-model="answers[question.name]"
                                                       type="radio"
                                                       :name="question.name" class="form-check-input"
                                                       :value="genderType">
                                                {{genderType}}
                                            </label>
                                        </div>
                                    </template>


                                    <template v-else>
                                        <input v-model="answers[question.name]" :type="question.type"
                                               class="form-control"
                                               aria-describedby="emailHelpId"
                                               placeholder="">
                                    </template>

                                    <small
                                            id="emailHelpId"
                                            class="form-text text-muted">{{question.helpText}}
                                    </small>
                                </div>

                                <!--buttons-->
                                <div class="mt-5 clearfix">
                                    <button
                                            v-show="currentStep !== 'email'"
                                            @click.prevent="prevStep(index)"
                                            type="button"
                                            class="btn btn-secondary float-left"> Previous
                                    </button>


                                    <button
                                            v-show="currentStep !== 'payment'"
                                            @click.prevent="nextStep(index)"
                                            type="button"
                                            class="btn btn-primary float-right">
                                        Next
                                    </button>
                                </div>

                             <!--   <div class="mt-5 ">
                                    <a
                                            class="btn btn-success btn-block"
                                            href="https://www.google.com/"
                                            @click.prevent="nextStep(index)"

                                            role="button">Submit</a>

                                </div>-->

                            </template>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    </div>

    </section>
</template>

<script>
    import questions from '../db/question'

    const isDev = process.env.NODE_ENV === "development";

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    export default {
        name: 'app',

        data() {
            return {
                hasAgreed: true,
                hasAgreedCheckbox: false,
                questions,
                currentStep: "email",
                answers: {
                    email: '',
                    origin: null,
                    location: null,
                    gender: null,
                    innocent: null,
                    crime: "",
                    passport: "",
                    challenge: "",
                    situation: null,
                    findUs: "",
                    focus: null,
                    job: null,
                    workPlace: null,
                    income:null,
                    approve: null,
                    person:"",
                    phone:"",
                    payment: null,


                },
                alert: {
                    show: false,
                    msg: "",
                }

            }
        },
        methods: {
            validate(currentPage) {
                if (this.currentStep === "email" && !validateEmail(this.answers.email)) {
                    return false;
                } else if (this.currentStep === "origin" && this.answers.origin === null) {
                    return false;
                } else if (this.currentStep === "location" && this.answers.location === null) {
                    return false;
                } else if (this.currentStep === "gender" && this.answers.gender === null) {
                    return false;
                } else if (this.currentStep === "innocent") {
                    if (this.answers.innocent === null) {
                        return false
                    } else if (this.answers.innocent === "No") {
                        return this.nextStep(currentPage, false)
                    } else {
                        return  this.nextStep(currentPage + 1, false);
                    }
                } else if (this.currentStep === "crime" && this.answers.crime.length < 50) {
                    return false
                } else if (this.currentStep === "passport" && this.answers.passport.length < 50) {
                    return false

                } else if (this.currentStep === "challenge" && this.answers.challenge.length < 50) {
                    return false

                } else if (this.currentStep === "situation" && this.answers.situation === null) {
                    return false

                } else if (this.currentStep === "findUs" && this.answers.findUs.length < 5) {
                    return false

                } else if (this.currentStep === "focus" && this.answers.focus === null) {
                    return false
                } else if (this.currentStep === "job" && this.answers.job === null) {
                    return false
                } else if (this.currentStep === "workPlace" && this.answers.workPlace === null) {
                    return false
                } else if (this.currentStep === "income" && this.answers.income === null) {
                    return false
                } else if (this.currentStep === "approve" && this.answers.approve === null) {
                    return false
                } else if (this.currentStep === "person" && this.answers.person.length < 3) {
                    return false
                } else if (this.currentStep === "phone" && this.answers.phone.length < 10) {
                    return false
                } else if (this.currentStep === "payment" && this.answers.payment === null) {
                    return false
                }
                return true;
            },

            submit(currentPage, shouldValidate = true){
                let isValid = true;
                if (shouldValidate) isValid = this.validate(currentPage);
                const nextPage = currentPage + 1;


            },
            nextStep(currentPage, shouldValidate = true) {
                this.hideAlert();
                let isValid = true;
                if (shouldValidate) isValid = this.validate(currentPage);

                const nextPage = currentPage + 1;
                if (isValid && questions[nextPage]) {
                    this.currentStep = questions[nextPage].name
                } else {
                    this.alertMsg(questions[currentPage].error);
                }
            },

            prevStep(index) {
                this.hideAlert();
                const prevPage = index - 1;
                if (questions[prevPage]) {
                    this.currentStep = questions[prevPage].name
                }

            }
            ,
            checkHasAgreed() {
                this.hideAlert();
                if (this.hasAgreedCheckbox) {
                    this.hasAgreed = true;
                } else {
                    this.alertMsg('You must agree to continue')
                }
            },

            alertMsg(msg) {
                this.alert.msg = msg;
                this.showAlert();

            },
            hideAlert() {
                this.alert.show = false;
            },
            showAlert() {
                this.alert.show = true;

            }
        }
    }
</script>

<style>

</style>

<!--email: isDev ? chance.email() : '',-->
<!--currentStep: isDev ? "focus" : "email",-->

