<template>
    <div id="app">
        <!-- <square text="This is a square" size="small"/>
        <square text="This is a square" size="medium"/>
        <square text="This is a square" size="large"/>
        <square text="This is a square" size="large" color="#000"/> -->
        <square
                v-for="data in myJson"
                v-bind:key="data.text"
                v-bind:text="data.text"
                v-bind:size="data.size"
                v-bind:color="data.csccolor"
        />
    </div>
</template>

<script>
    import json from '../db/data'
    export default {
        name: 'app',
        data(){
            return{
                myJson: json
            }
        },
        components: {
            square
        }
    }
</script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .square {
        background-color: blue;
        color: #fff;
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .small {
        width: 100px;
        height: 100px;
    }
    .medium {
        width: 200px;
        height: 200px;
    }
    .large {
        width: 300px;
        height: 300px;
    }
</style>
