<script>
    export let text;
    export let name;
    export let event=false;
</script>
<div class="col-md-6 p-1 m-3" >
    <div class="rounded-3 shadow-lg">
          
        <div class="col p-3 m-2"> <i class='bx bx-lg {event?"bx-calendar-heart":"bxs-quote-left"}'></i></div>
        <div class="col p-3 m-2 "><blockquote class="blockquote fs-4">{@html text}
        </blockquote> <p class="text-muted fs-6">{name}</p> </div>
       </div>
   </div>