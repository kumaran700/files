<!-- ImageButton.svelte -->
<script>
  import { onMount } from 'svelte';

  let showImage1 = false;
  let showImage2 = false;
  let showImage3 = false;
  let imageUrl1 = '';
  let imageUrl2 = '';
  let imageUrl3 = '';

  const handleClick1 = () => {
    // Set the URL of the image you want to display
    imageUrl1 = 'https://i.postimg.cc/3wfjZjcp/RCMC-2.jpg';
    showImage1 = true;
  };
  const handleClick2 = () => {
    // Set the URL of the image you want to display
    imageUrl2 = 'https://i.postimg.cc/43pZ6wd2/RCMC-Trust-2.jpg';
    showImage2 = true;
  };
  const handleClick3 = () => {
    // Set the URL of the image you want to display
    imageUrl3 = '';
    showImage3 = true;
  };

  // Optional: if you want to hide the image when the component is mounted or initialized
  onMount(() => {
    showImage1 = false;
    showImage2 = false;
    showImage3 = false;
  });
</script>
<style>
  img{
    width: 375px;
    height: auto;
    border-radius: 25px;
  }
  .one,.two,.three{
    width: auto;
  }
  button{
    width: 375px;
    height: 60px;
    border-radius: 25px;
  }
  .container{
    display:flex;
    padding: auto;
    width: auto;
  }
  h1{
    color: rgb(0, 0, 0);
    text-align: center;
  }
</style>

<h1>PAYMENT PAGE</h1>
<div class="container">
  <div class="one">
    <button class="btn btn-danger" on:click={handleClick1}>ROTARY CLUB ACCOUNT</button><br>
    {#if showImage1}
      <img src={imageUrl1} alt="Displayed Image" />
    {/if}
  </div>
  <div class="two">
    <button class="btn btn-success" on:click={handleClick2}>ROTARY TRUST ACCOUNT</button><br>
    {#if showImage2}
      <img src={imageUrl2} alt="Displayed Image" />
    {/if}
  </div>
  <div class="three">
    <button class="btn btn-primary" on:click={handleClick3}>ROTARY MICROLOAN ACCOUNT</button><br>
    {#if showImage3}
      <img src={imageUrl3} alt="Coming Soon" />
    {/if}
  </div><br>
</div><br>