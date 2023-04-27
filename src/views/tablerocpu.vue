
<script setup>
  import { ref , computed } from 'vue';
  import Celda   from './celda.vue';
  import Players from './home.vue';

  function generateRandom(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math(Math.random()*(1+max-min)+min)
  }


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
  let turn=0
  let xC=0
  let oC=0
  let tieC=0
  let gameOver='null'

	const jugador=ref("x")

  const gameSet=ref(false)

	const turno = (x,y) => {
      if (tablero.value[x][y] !== "") return;
      turn++
      if (jugador.value==='x'){tablero.value [x][y] = jugador.value;}
      
      if(winner(tablero.value.flat())){
        if (turn % 2 === 0) {
          jugador.value='o'
        } else {
          jugador.value='x'
            }
        gameOver=jugador.value
        if(gameOver==='x'){
          xC++
        }
        else{
          oC++
        }
        gameSet.value = true;
      }else if(turn==9){
        gameSet.value = true;
        tieC++
        return
      }
      if (jugador.value=='o'){
        jugador.value='x'
      }
      else{
        jugador.value='o'        
        const vacio=[]
        const lista=tablero.value.flat()
        for(let i=0; i < lista.length; i++){
                if(lista[i]==''){
                vacio.push(i);
            }}
        const numeroAleatorio = Math.floor(Math.random() * (vacio.length - 1)) ;
        const n = vacio[numeroAleatorio];
        const arreglo=[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
        const [x,y]=arreglo[n]
        tablero.value[x][y]=jugador.value;
        jugador.value='x'  
        vacio=[]
      }
      
      console.log(gameOver)
    }

  const restart=() =>{
    tablero.value = [
      ["","",""],
      ["","",""],
      ["","",""]
    ]
    jugador.value='x'
    turn=0
    xC=0
    oC=0
    tieC=0
    gameOver='null'
  }
  const nextRound=() =>{
    tablero.value = [
      ["","",""],
      ["","",""],
      ["","",""]
    ]
    jugador.value='x'
    gameOver='null'
    gameSet.value=false
    turn=0   
  }
</script>

<template>
    <main class="bg-gray-400 flex justify-center items-center h-screen">
      <section class="bg-gray-400 ">
			<!-- Header -->
            <section class="flex justify-between items-center">
              <div class="flex justify-end w-[100px]">
                        <img class="m-8 h-[31.74px] w-[71.21px]" src="../assets/logo.svg">
              </div>
              <div class="bg-gray-300 w-[140px] h-[52px] flex justify-evenly items-center rounded-md">
                        <span class="flex items-center">
                  <img class="w-[20px] h-[20px]" v-show="jugador === 'x'" src="../assets/icon-x-gray.svg" alt="x">
                  <img class="w-[20px] h-[20px]" v-show="jugador === 'o'" src="../assets/icon-o-gray.svg" alt="o">
                </span>
                <p>TURN</p>
              </div>
              <div class="w-[100px] flex justify-end">
                <div class="bg-gray-200 w-[52px] h-[52px] flex justify-center items-center rounded-md hover:bg-gray-100 hover:cursor-pointer" @click="restart()">
                  <img class="m-8 h-[20px] w-[20px]" src="../assets/icon-restart.svg">
                </div>
              </div>
            </section>
			<!-- Tablero -->
			<section class="w-[460px] h-[461px] ">
				
				<div class="grid grid-cols-3 gap-4">
          <template v-for="(_, i) in tablero">
            <div v-for="(_, j) in tablero[i]">
                <div class="hover cursor-pointer" @click="turno(i,j)">
                    <Celda  :volteado="tablero[i][j]"/>
                </div>
            </div>
          </template>
        </div>

			</section>
			<!-- Footer -->
			<section class="flex justify-between w-[459px] h-[72px] mt-4">
          <div class="bg-blue-200 flex justify-center items-center w-[140px] h-[72px] rounded-lg">
              <p v-if="player1 === 'x' ">YOU</p>
              <p> {{xC}} </p>
          </div>
          <div class="bg-gray-200 flex justify-center items-center w-[140px] h-[72px] rounded-lg">
            <p>TIES {{tieC}}</p>
          </div>
          <div class="bg-yellow-200 flex justify-center items-center w-[140px] h-[72px] rounded-lg">
            <p v-if="player1 === 'o'  ">YOU</p>
                <p> {{oC}} </p>
          </div>
			  </section>
    </section>
    <section v-if="gameSet" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <section class=" h-1/4 bg-gray-300 shadow-lg w-[100%]">
        <div class="flex justify-center items-center mt-6">
          <img v-if="gameOver=='x'" class="h-[64px] w-[64px]" src="../assets/icon-x.svg"/>
          <img v-if="gameOver=='o'" class="h-[64px] w-[64px]" src="../assets/icon-o.svg"/>
          <p v-if="gameOver=='o' || gameOver=='x'">TAKES THE ROUND</p>
          <p v-if="gameOver=='null'">ROUND TIED </p>
        </div>
        <section class="flex justify-center items-center p-4 gap-5">
          <router-link to="Home">
          <div class="w-[76px] h-[52px] bg-gray-200 rounded-md flex justify-center items-center shadow-xl hover:bg-gray-100">
            QUIT
          </div>
          </router-link>
          <router-view/>
          <div class="w-[146px] h-[52px] bg-yellow-200 rounded-md flex justify-center items-center shadow-xl hover:bg-yellow-100" @click="nextRound()">
            NEXT ROUND
          </div>
          
        </section>
      </section>

    </section>

    </main>
</template>
