<script setup>

    defineProps({
        id: Number ,
        turno: Number
    })

</script>
<template>
    <div v-if="turno ==0 " class="bg-gray-300 w-[140px] h-[140px] rounded-md" :id=" id "></div>
    <div v-if="turno ==1 " class="bg-gray-300 w-[140px] h-[140px] rounded-md xlleno" :id=" id "></div>
    <div v-if="turno ==2 " class="bg-gray-300 w-[140px] h-[140px] rounded-md olleno" :id=" id "></div>
</template>

<style>
    .xlleno{
        background-image: url('../assets/icon-x.svg');
        background-size: cover;
    }
    .olleno{
        background-image: url('../assets/icon-o.svg');
        background-size: cover;
    }
</style>