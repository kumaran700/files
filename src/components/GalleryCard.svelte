<script>
    export let title;
</script>

<div class="row d-flex justify-content-center align-items-center px-2 px-md-5 py-2 py-md-3 mx-1 mx-md-5 my-1" >
    <div class="col-md-12 p-3 p-md-4 d-flex justify-content-center align-items-center text-center">
       <h4>{@html title}
       </h4>
      
    </div>
    <slot/>
 </div>