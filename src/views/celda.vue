<script setup>

    defineProps({
        volteado: Number
    })

</script>
<template>
    <div v-if="volteado =='' " class="bg-gray-300 w-[140px] h-[140px] rounded-md " :id=" id "></div>
    <div v-if="volteado =='x' " class="bg-gray-300 w-[140px] h-[140px] rounded-md xlleno" :id=" id "></div>
    <div v-if="volteado =='o' " class="bg-gray-300 w-[140px] h-[140px] rounded-md olleno" :id=" id "></div>
</template>

<style>
    .xlleno{
        background-repeat: no-repeat;
        background-image: url('../assets/icon-x.svg');
        background-size: 64px;
        background-position: center;
    }
    .olleno{
        background-repeat: no-repeat;
        background-image: url('../assets/icon-o.svg');
        background-size: 64px;
        background-position: center;
    }
</style>