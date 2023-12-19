<script>
export let title;
export let img;
import { srcUrl } from '../pages/_source_url';

</script>

<main>
    <section class="container-fluid">
        <div class="col-12">
            <div class="row d-flex justify-content-center align-items-center p-4">
                <img src="{srcUrl}/images/svg/{img}"  alt="..." height="200">
            </div>
            <div class="row text-center p-2 m-3"><h1>{title}</h1></div>
        </div>
        <slot/>
    </section>
</main>