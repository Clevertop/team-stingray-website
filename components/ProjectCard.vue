<script setup>
const props = defineProps({
  src: String,
  href: String,
  heading: String,
  description: String
});
</script>

<template>
    <a class="image-container" :href="props.href">
        <img class="image" :src="props.src" :alt="props.heading" style="width:100%;">
        <div class="content">
            <h2>{{props.heading}}</h2>
            <p>{{props.description}}</p>
        </div>
    </a>
    
</template>

<style scoped>
    .image-container{
        position: relative;
        text-align: center;
        margin: 10px;
        border-radius: 5px;
        overflow: hidden;
        color: white;

    }

    .content{
        position: absolute;
        bottom: 8px;
        left: 16px;
        text-align: left ;
    }

    .image{
        filter: brightness(100%) blur(0px);
        /* filter: blur(2px); */
    }
    .content{
            visibility:hidden;
    }

    .image-container:hover{
        .image{
            filter: brightness(40%) blur(2px);
        }
        .content{
            visibility:visible;
        }
        
    }

    p{
        font-weight: 100;
    }
</style>