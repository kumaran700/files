<script>
    export let name;
    export let post;
    export let img;
    export let isGlass=false;
    export let cols=2;
    export let type=1;
import { srcUrl } from '../pages/_source_url';

</script>

<div class="col-xl-{cols} col-sm-6 mb-5 ">
    <div class="pres-detail rounded-5 shadow-lg py-5 px-4 mx-4 mx-md-0" class:glass={isGlass}><img src="{srcUrl}/images/{img}" alt="" width="120" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
        <h5 class="mb-0">{@html name}</h5>{#if type==1}
        <span class="small text-uppercase text-muted">{@html post}</span>
        {/if}
    </div>
</div>