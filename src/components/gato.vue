<script setup>
    import {ref }from 'vue'
    import Celda   from './celda.vue';
    const tablero = []
    const fila= ['','','']

    for(let i=0; i<3; i++){
        tablero.push(fila)
    }

    const turno = ref(1)
    turno.value = 0
    if(turno.value == 1){
        turno.value=2
    }
    else if (turno.value == 2){
        turno.value = 1
    }

</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <template v-for="(_, i) in tablero">

        <div v-for="(_, j) in tablero[i]">

        <Celda :id="j+i+1" :turno=turno @click="turno"/>
        </div>

</template>
    </div>
</template>