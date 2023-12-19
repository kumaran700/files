<script>
import GalleryCard from "../../components/GalleryCard.svelte";
import ImgCard from "../../components/ImgCard.svelte";
import PageHeader from "../../components/PageHeader.svelte";
import {metatags} from '@roxi/routify';
metatags.title="Community Service - Rotary Club of Madras Chenna Patna";
</script>
   <!-- routify:options name="cmmservices"-->
<PageHeader title="Community Service" img="cmm.svg">
   <div class="row m-2 d-flex justify-content-center">
      <h4 class="first-word-uppercase-p mx-2 p-3">
         In some ways the very purpose of Rotary existence is serving the people near and afar. 

         At Chenna Patna our focus on Community Service has been relentless and spans the entire spectrum of human needs covering basic food, water, literacy,  health and general well being.
          </h4>
      <div class="col-lg-8 d-flex justify-content-center align-items-center">
         <div class="row d-flex justify-content-center">
            <ImgCard img="office/senthan.webp" title="Director<br><strong>Rtn Senthan Amuthan</strong>" cols=3/>
            <ImgCard img="office/suryabaskar.webp" title="Director Community Service Health <br> <strong>Rtn Surya Basker</strong>" cols=3/>
                   <ImgCard img="office/sriraam.webp" title="Mentor <br><strong>Rtn Raja Sriraam</strong>" cols=3/>
         </div>
         
      </div>
    
  
     </div>
  

    <div class="my-5"></div>

    

<GalleryCard title="Pulse Polio Camp in Pudupet">
<ImgCard img="cmm/1.webp" cols="4"/>
<ImgCard img="cmm/2.webp" cols="4"/>
<ImgCard img="cmm/3.webp" cols="4"/>
</GalleryCard>

<GalleryCard title="Free Distribution of Desktop to Chengalpattu Govt Schools">
   <ImgCard img="cmm/4.webp" cols="4"/>
   <ImgCard img="cmm/5.webp" cols="4"/>
   <ImgCard img="cmm/6.webp" cols="4"/>
</GalleryCard>
<GalleryCard title="Free Medical Camp at Sindhi Medical Relief Centre">
   <ImgCard img="cmm/7.webp" cols="4"/>
   <ImgCard img="cmm/8.webp" cols="4"/>
   <ImgCard img="cmm/9.webp" cols="4"/>
</GalleryCard>
<GalleryCard title="Mega Vaccination Drive">
   <ImgCard img="cmm/10.webp" cols="4"/>
   <ImgCard img="cmm/11.webp" cols="4"/>
   <ImgCard img="cmm/12.webp" cols="4"/>
   <ImgCard img="cmm/13.webp" cols="4"/>
   <ImgCard img="cmm/14.webp" cols="4"/>
   <ImgCard img="cmm/15.webp" cols="4"/>
</GalleryCard>
<GalleryCard title="Awareness Campaign on World Polio Day">
   <ImgCard img="cmm/16.webp" cols="4"/>
   <ImgCard img="cmm/17.webp" cols="4"/>
   <ImgCard img="cmm/18.webp" cols="4"/>
</GalleryCard>
</PageHeader>