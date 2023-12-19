<script>
    export let img;
    export let title;
    export let desc;
    export let urlL;
    import {url} from '@roxi/routify';
import { srcUrl } from '../pages/_source_url';

</script>

<div class="col-md-12 p-3 m-md-5 px-md-5 d-flex justify-content-center align-items-center">
    <div class="shadow-lg rounded-5 mb-3 mx-md-5  " style="max-width: 100vw;">
        <div class="row g-0 p-3">
          <div class="col-md-4">
            <img src="{srcUrl}/images/{img}" class="img-fluid proj-disp-img rounded-5" alt="...">
          </div>
          <div class="col-md-8 p-4">
            <div class="card-body text-start">
              <h5 class="card-title fs-3 fw-bold p-2">{@html title}</h5>
              <p class="card-text fs-4 p-2">{@html desc}</p>
              <a href="{$url(urlL)}" class="btn btn-dark text-white m-2">Read more</a>

            </div>
          </div>
        </div>
      </div>
</div>