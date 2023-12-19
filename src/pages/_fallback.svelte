<script>
    import { url } from '@roxi/routify';
import { srcUrl } from './_source_url';
</script>

<div class="container-fluid d-flex justify-content-center align-items-center ">
  <div class="col-md-12">
    <div class="row d-flex justify-content-center align-items-center">
<img src="{srcUrl}/images/svg/404.svg" class="img-fluid w-25 m-4" alt="404">

    </div>
    <div class="row ">
  <div class="display-1 fw-bolder d-flex justify-content-center align-items-center">404</div>

    </div>
    <div class="row"> 
      <div class="lead fw-normal p-2 d-flex justify-content-center align-items-center">Page not found.  
        <!-- link to the parent folder of _fallback.svelte -->
        <a href={$url('../')}>&nbsp; Go back</a>
        </div>
    </div>
</div>
</div>


  