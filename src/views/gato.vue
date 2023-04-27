<script setup>
    import {ref }from 'vue'
    import Celda   from './celda.vue';
    // const tablero = []
    // const fila= ['','','']

    // for(let i=0; i<3; i++){
    //     tablero.push(fila)
    // }

    // const turno = ref(1)

    // turno.value = 1
    
    // function movimiento(x, y){
    //     tablero[x][y] = turno.value

    //     if(turno.value == 1){
    //         turno.value=2
    //     }
    //     else if (turno.value == 2){
    //         turno.value = 1
    // }
    // }

    //-----------------------------
    
    import Players from './home.vue'

	const tablero = ref([
      ["","",""],
      ["","",""],
      ["","",""]
    ])

	const winner =(tablero) =>{
		const keys = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
	  for (var i = 0; i < keys.length; i++) {
      const [a, b, c] = keys[i]
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
          return tablero[a]
        }
      }
      return null
	}

	const jugador=ref("x")

	const turno = (x,y) => {
      if (tablero.value[x][y] !== "") return;

      tablero.value [x][y] = jugador.value;

      if(winner(tablero.value.flat())){
        isGameOver.value = true;
      }else if(tablero.value.flat().every((val)=>val!= "")){
        isGameOver.value = true;
      }
      if (jugador.value==='o'){
        jugador.value='x'
      }
      else{
        jugador.value='o'
      }
    }

</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <template v-for="(_, i) in tablero">

        <div v-for="(_, j) in tablero[i]">
            <div class="hover cursor-pointer" @click="turno(i,j)">
                <Celda  :volteado="tablero[i][j]"/>
            </div>
        </div>

</template>
    </div>
</template>