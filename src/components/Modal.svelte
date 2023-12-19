<script>

	export let showModal = false;
	export let bgDrop = true;
	export let canOpenModal = true;
	export let outClick = true;
	const toggleModal = () => {
		if (canOpenModal) {
			if (outClick) {
				showModal = !showModal;
			}
		} else {
			showModal = false;
		}
	};
</script>

{#if canOpenModal && showModal}
	<div class:bgd={bgDrop} class="wsb" on:click|self={toggleModal}>
		<div class="ws-modal " style={'max-width:600px;'}>
			
				{#if !outClick}
					<div class="px-3 mx-2 mt-2">
						<i
							class="bx bx-x p-2 bx-sm cursor-pointer"
							on:click={() => {
								showModal = false;
							}}
						/>
					</div>
				{/if}
				<slot class="d-flex m-3 justify-content-center align-items-center" />
		</div>
	</div>
{/if}

<style>
	.wsb {
		position: fixed;
		z-index: 9999;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@keyframes fadeIn {
		0% {
			opacity: 20%;
		}
		100% {
			opacity: 100%;
		}
	}
	.bgd {
		background: rgba(47, 47, 47, 0.678);
	}
	.ws-modal {
		padding: 20px;
		width: 100%;
		margin: 1.2rem auto;
		animation: fadeIn 1s;
		transition: all 1s ease-in-out;
	}
</style>
