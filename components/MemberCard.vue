<script setup>
const props = defineProps({
  href: String,
  name: String,
  description: String,
  image: String,
});
</script>

<template>
    <a class="card" :href="props.href">
        <div>
            <img class="image" :src="props.image"/>
        </div>
        <div class="content">
            <h3>{{ props.name }}</h3>
            <p>{{ props.description }}</p>
        </div>
    </a>
</template>

<style scoped>

    .card{
        display: flex;
        width: 45%;
        /* height: 200px; */
        max-width: 450px;
        padding: 25px;
        background-color: rgba(0, 53, 122, 1);
        border-radius: 5px;
        flex-direction: row;
        
    }

    .card:hover{
        background-color: rgb(0, 80, 184);
    }

    .image{
        width: 200px;
        height: 200px;
        border-radius: 5px;
    }

    .content{
        color: aliceblue;
        position: relative;
        flex-grow: 1;
        visibility: visible;
        text-align: left ;
        padding: 10px;
        
    }

    @media (max-width: 1000px){
        .card{
            flex-direction: column;
            width: auto;
        }
    }

    a{
        text-decoration: none;
    }

</style>