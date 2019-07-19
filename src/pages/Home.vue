<template>

    <section class="page">
        <Jumbo/>
        <Benefits/>
<!--        <Programs/>-->
        <ProgramsLoops/>
        <portfolio/>
    </section>
</template>

<style scoped>

</style>

<script>

    import Jumbo from '../components/home/Jumbo'
    import Benefits from '../components/home/Benefits'
    import Programs from '../components/home/Programs'
    import ProgramsLoops from '../components/home/ProgramsLoops'
    import Portfolio from '../components/home/Portfolio'
    import FooterForm from '../components/home/FooterForm'




    export  default {
        components:{
            Jumbo,
            Benefits,
            Programs,
            ProgramsLoops,
            Portfolio,
            FooterForm



        },
    }
</script>
