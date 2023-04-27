<script>
export default {
    data(){
        return{
            player1:'x',
            player2Type:'0',
            player2:'o'
        }
    },
    methods:{
        setP2(n){
            this.player2Type=n
            if (this.player1==='x'){
                this.player2='o'
            }
            else{
                this.player2='x'
            }
            
        }
    }
}
</script>



<template>
	<main class="bg-gray-400 flex justify-center items-center h-screen">
	<section class="flex flex-col space-y-6">
		<div class="flex flex-col">
            <div class="flex justify-center">
			    <img class="m-8 " src="../assets/logo.svg">
		    </div>
            <div class=" bg-gray-300 w-[460px] h-[205px] rounded-md flex flex-col space-y-5">
                <div class="flex justify-center mt-4">
                    <p>PICK PLAYER 1’S MARK</p>
                </div>

                <div class="flex justify-center items-center bg-gray-400 w-[412px] h-[72px] ml-6 rounded-md">
                    <div class="relative flex justify-center items-center hover:bg-gray-200 w-[198px] h-[54px] rounded-md "  @click="player1='x'">
                        <img class="absolute  m-8 w-[32px] h-[32px] " src="../assets/icon-x-dark-gray.svg">
                        <div class="absolute hover:invisible w-[198px] h-[54px] flex justify-center items-center" >
                            <img class=" m-8 w-[32px] h-[32px] " src="../assets/icon-x-gray.svg">
                        </div>
                        
                    </div>
                    <div class="relative flex justify-center items-center hover:bg-gray-200 w-[198px] h-[54px] rounded-md" @click="player1='o'">
                        <img class="absolute m-8 w-[32px] h-[32px] " src="../assets/icon-o-dark-gray.svg">
                        <div class="absolute hover:invisible w-[198px] h-[54px] flex justify-center items-center" >
                            <img class=" m-8 w-[32px] h-[32px] " src="../assets/icon-o-gray.svg">
                        </div>
                        
                    </div>
                </div>

                <div class="flex justify-center">
                    <p>REMEMBER : X GOES FIRST</p>
                </div>
                
            </div>
        </div>
        <router-link to="tablerocpu">
        <div class="bg-yellow-200 rounded-md w-[460px] h-[67px] flex justify-center items-center hover:bg-yellow-100" @click="setP2('0')">
            NEW GAME (VS CPU)
        </div>
        </router-link>
        <router-view/>

        <router-link to="tablero">
        <div class="bg-blue-200 rounded-md w-[460px] h-[67px] flex justify-center items-center hover:bg-blue-100" @click="setP2('1')">
            NEW GAME (VS PLAYER)
        </div>
        </router-link>
        <router-view/>
	</section>
	
	</main>
</template>