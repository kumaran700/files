<script>
import { srcUrl } from '../pages/_source_url';
    export let img;
    export let cols;
    export let title;
</script>
{#if title}
<div class="col-md-{cols}">
    <div class="d-flex justify-content-center align-items-center ">
        <img src="{srcUrl}/images/{img}" alt="" class="img-fluid rounded-3 my-3 shadow-lg">
    </div>
    <div class="row">
        <span class="text-muted text-center">{@html title}</span>
    </div>
 </div>
{:else}
     <div class="col-md-{cols} d-flex justify-content-center align-items-center ">
         <img src="{srcUrl}/images/{img}" alt="" class="img-fluid rounded-3 my-3 shadow-lg">
      </div>
{/if}