<script>
    export let cols;
    export let title;
    export let link;
</script>

     <div class="col-md-{cols} d-flex justify-content-center align-items-center">
        <a class="btn btn-primary chenn-btn fw-normal m-2" target="_blank" href="{link}">{@html title}</a>
      </div>