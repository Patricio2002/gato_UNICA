<script setup>
    import {ref }from 'vue'
    import Celda   from './celda.vue';
    const tablero = []
    const fila= [0,0,0]

    for(let i=0; i<3; i++){
        tablero.push(fila)
    }

    const turno = ref(1)

    turno.value = 1
    
    function movimiento(x, y){
        tablero[x][y] = turno.value

        if(turno.value == 1){
            turno.value=2
        }
        else if (turno.value == 2){
            turno.value = 1
    }
    }

</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <template v-for="(_, i) in tablero">

        <div v-for="(_, j) in tablero[i]">
            <div>
                <Celda @click="$emit(movimiento(i,j))" :volteado="tablero[i][j]" />
            </div>
        </div>

</template>
    </div>
</template>