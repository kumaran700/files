<script>
import { srcUrl } from '../pages/_source_url';

    export let isReversed=false;
    export let title;
    export let desc;
    export let img;
    export let type=1;
    export let name;
    export let mentor;
    export let carousel;
    export let carouselId;
    export let customHeight=300;
</script>

{#if !isReversed && type==1}
<div class="row align-items-center">
      
    <!-- Grid column -->
    <div class="col-lg-5">

      <!-- Featured image -->
      <div class="view overlay rounded-4 shadow-lg z-depth-2 mb-lg-0 mb-4">
        <img class="img-fluid rounded-3 " src="{srcUrl}/images/blog/{img}" alt="...">
        <a href=".">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

    </div>

    <div class="col-lg-7">

      
        <h6 class="font-weight-bold mb-3"><i class='bx bx-category-alt'></i> News</h6>
      <h4 class="font-weight-bold mb-3"><strong>{@html title}</strong></h4>
      <p>{@html desc}</p>

    </div>

  </div>
  <hr class="my-5">

{:else if isReversed && type==1}
<div class="row align-items-center">
      
    <div class="col-lg-7">

        
            <h6 class="font-weight-bold mb-3"><i class='bx bx-category-alt'></i> News</h6>
          <h4 class="font-weight-bold mb-3"><strong>{@html title}</strong></h4>
          
          <p>{@html desc}</p>

    </div>

    <div class="col-lg-5">
<div class="view overlay rounded-4 shadow-lg z-depth-2 mb-lg-0 mb-4">
<img class="img-fluid rounded-3 " src="{srcUrl}/images/blog/{img}" alt="...">
<a href=".">
  <div class="mask rgba-white-slight"></div>
</a>
</div>      
    </div>
  </div>
  <hr class="my-5">
  {:else if type==2&&!isReversed}
  <div class="row align-items-center text-start">
      
    <!-- Grid column -->
    <div class="col-lg-5">
  
      <!-- Featured image -->
      <div class="view overlay rounded-4 shadow-lg z-depth-2 mb-lg-0 mb-4">
        <div id="carouselExampleFade{carouselId}" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner  rounded-4">
              {#each carousel as item}
              <div class="carousel-item active">
                <img src="{srcUrl}/images/carousel/{item}" class="d-block w-100 display-img" height={customHeight} alt="...">
              </div>
              {/each}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade{carouselId}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade{carouselId}" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>    
      </div>
  
    </div>
  
    <div class="col-lg-7">
  
      
        <h6 class="font-weight-bold mb-3"><i class='bx bx-category-alt'></i> Services</h6>
      <h4 class="font-weight-bold mb-3"><strong>{title}</strong></h4>
      <h5 class="mb-0"><strong>{name}</strong> - Director</h5>
  <span class="small text-uppercase text-muted">{mentor} - Mentor</span>
      <p class="mt-3">{@html desc}</p>
  
    </div>
  
  </div>
  <hr class="my-5">
  {:else if isReversed&&type==2}
  <div class="row align-items-center text-start">
      
    <!-- Grid column -->
    <div class="col-lg-7">
      <h6 class="font-weight-bold mb-3"><i class='bx bx-category-alt'></i> Services</h6>
      <h4 class="font-weight-bold mb-3"><strong>{title}</strong></h4>
      <h5 class="mb-0"><strong>{name}</strong> - Director</h5>
  <span class="small text-uppercase text-muted">{mentor} - Mentor</span>
      <p class="mt-3">{@html desc}</p>
  
    </div>
  
    <div class="col-lg-5">
  
       <!-- Featured image -->
       <div class="view overlay rounded-4 shadow-lg z-depth-2 mb-lg-0 mb-4">
        <div id="carouselExampleFade{carouselId}" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner  rounded-4">
              {#each carousel as item}
              <div class="carousel-item active">
                <img src="{srcUrl}/images/carousel/{item}" class="d-block w-100 display-img" height={customHeight} alt="...">
              </div>
              {/each}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade{carouselId}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade{carouselId}" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>    
      </div>
       
  
    </div>
  
  </div>
  <hr class="my-5">
{/if}

