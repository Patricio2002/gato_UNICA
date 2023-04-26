
<script setup>
    import { ref , computed } from 'vue'

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

	const turno = (n) => {
      if (tablero.value[x][y] !== "") return;

      tablero.value [x][y] = jugador.value;

      if(winner(tablero.value.flat())){
        isGameOver.value = true;
      }else if(tablero.value.flat().every((val)=>val!= "")){
        isGameOver.value = true;
      }
      jugador.value = jugador.value === "X" ? "O" : "X";
    }
</script>

<template>
	<router-view/>	
    <main class="bg-gray-400 flex justify-center items-center h-screen">
        <section class="bg-gray-400 ">
			<!-- Header -->
            <section class="flex justify-between items-center">
				<div class="flex justify-end w-[100px]">
                	<img class="m-8 h-[31.74px] w-[71.21px]" src="../assets/logo.svg">
				</div>
				<div class="bg-gray-300 w-[140px] h-[52px] flex justify-evenly items-center rounded-md">
                	<span class="items-center">
						<img class="w-[20px] h-[20px]" v-if="jugador === 'x'" src="../assets/icon-x-gray.svg" alt="x">
						<img class="w-[20px] h-[20px]" v-if="jugador === 'o'" src="../assets/icon-o-gray.svg" alt="o">
					</span>
					<p>TURN</p>
				</div>
				<div class="w-[100px] flex justify-end">
					<div class="bg-gray-200 w-[52px] h-[52px] flex justify-center items-center rounded-md">
						<img class="m-8 h-[20px] w-[20px]" src="../assets/icon-restart.svg">
					</div>
				</div>
				
            </section>
			<!-- Tablero -->
			<section class="w-[460px] h-[461px] ">
				
				<section class="flex justify-between w-[460px] h-[140px]">
					<div class="bg-gray-300 w-[140px] h-[140px] rounded-md" id="1">
						<img class="object-scale-down" v-if="col === 'X'" src="../assets/icons/icon-x.svg" alt="X">
						<img class="object-scale-down" v-if="col === 'O'" src="../assets/icons/icon-o.svg" alt="O">
					</div>
					<div class="bg-gray-300 w-[140px] h-[140px] rounded-md" id="2">
					</div>
					<div class="bg-gray-300 w-[140px] h-[140px] rounded-md" id="3">
					</div>
				</section>

				<section class="flex justify-between w-[460px] h-[140px]">
					<div class="bg-gray-300 w-[140px] h-[140px] rounded-md " id="4">
					</div>
					<div class="bg-gray-300 w-[140px] h-[140px] rounded-md" id="5">
					</div>
					<div class="bg-gray-300 w-[140px] h-[140px] rounded-md" id="6">
					</div>
				</section>

				<section class="flex justify-between w-[460px] h-[140px]">
					<div class="bg-gray-300 w-[140px] h-[140px] rounded-md" id="7">
					</div>
					<div class="bg-gray-300 w-[140px] h-[140px] rounded-md" id="8">
					</div>
					<div class="bg-gray-300 w-[140px] h-[140px] rounded-md" id="9">
					</div>
				</section>

			</section>
			<!-- Footer -->
			<section class="flex justify-between">
				<div class="bg-blue-200 w-[140px] h-[72px] rounded-md flex justify-center items-center">
					<span class="flex">
						<p>X (</p>
						<p v-if="playerX === 'x'">YOU)</p>
						<!-- <p v-if="playerX === 'p2'">P2)</p>
						<p v-if="playerX === 'p1'">P1)</p>
						<p v-if="playerX === 'cpu'">CPU)</p> -->
					</span>
					<p>{{ xCounter }}</p>
				</div>
				<div class="bg-gray-200 w-[140px] h-[72px] rounded-md flex justify-center items-center">
					<span class="flex">
						<p>TIES</p>
					</span>
					<p>{{ tCounter }}</p>
				</div>
				<div class="bg-yellow-200 w-[140px] h-[72px] rounded-md flex justify-center items-center">
					<span class="flex">
						<p>O (</p>
							<p v-if="playerO === 'o'">YOU)</p>
							<!-- <p v-if="playerO === 'p2'">P2)</p>
							<p v-if="playerO === 'p1'">P1)</p>
							<p v-if="playerO === 'cpu'">CPU)</p> -->
						</span>
					<p>{{ oCounter }}</p>
				</div>
			</section>
        </section>		
    </main>
</template>
