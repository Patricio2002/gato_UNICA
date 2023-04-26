

<template>
	<main class="bg-gray-400 flex justify-center items-center h-screen">
	<section>
		<div class="flex justify-center">
			<img class="m-8 " src="./assets/logo.svg">
		</div>
		<div class=" bg-gray-300 w-[460px] h-[205px] rounded-md">
			<div class="flex justify-center">
				<p>PICK PLAYER 1’S MARK</p>
			</div>
			
			<div class="flex justify-center items-center bg-gray-400 w-[412px] h-[72px]">
				<div class="flex justify-start hover:bg-gray-200 w-[198px] h-[54px] hover:">
					<router-link to="/">ttt</router-link>
					
				</div>
				<div class="hover:bg-gray-200 w-[198px] h-[54px]">
					<a><img class="m-8 w-[32px] h-[32px]" src="./assets/icon-o-gray.svg"></a>
				</div>
			</div>

			<div class="flex justify-center">
				<p>REMEMBER : X GOES FIRST</p>
			</div>
			<router-view/>
		</div>
	</section>
	
	</main>
</template>
