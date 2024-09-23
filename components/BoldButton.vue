<script setup>
const props = defineProps({
  href: String,
  text: String
});
</script>

<template>
    <a class="button" :href="props.href">
        <p>{{ props.text }}</p>
    </a>

   
    
</template>

<style>
    .button {
        background-color: #043eaa; 
        border: none;
        color: white;
        padding: 5px;
        border-radius: 5px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        overflow: hidden;
    }

    .button:hover{
        filter: brightness(200%);
    }

    p{
        font-weight: 100;
        margin: 0;
    }
</style>