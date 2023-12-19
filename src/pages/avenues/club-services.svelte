<script>
    import GalleryCard from "../../components/GalleryCard.svelte";
    import ImgCard from "../../components/ImgCard.svelte";
    import PageHeader from "../../components/PageHeader.svelte";
    import {metatags} from '@roxi/routify';
    metatags.title="Club Service - Rotary Club of Madras Chenna Patna";
    </script>
       <!-- routify:options name="clubservices"-->
    <PageHeader title="Club Service" img="club.svg">
   <div class="row m-2 d-flex justify-content-center">
    <h4 class="first-word-uppercase-p mx-2 p-3">
            Club Service is the lifeline of Chenna Patna just like how it is for many successful clubs. All work and no play makes Jack a dull boy and we at Chennapatna love our share of fun and fellowship too. <br><br>
                    Be it our regular club meetings, speaker meetings, family fellowships , Charter Nite celebrations or outdoor getaways, our club service team is constantly trying to innovate and reimagine.
        </h4>
    <div class="col-lg-8 d-flex justify-content-center align-items-center">
       <div class="row d-flex justify-content-center">
        <ImgCard img="office/paresh.webp" title="Director<br><strong>Rtn Paresh Khatri</strong>"cols=3/>
            <ImgCard img="office/dileep.webp" title="Mentor<br><strong>Rtn Dileep</strong>" cols=3/>
       </div>
       
    </div>
  

   </div>
     
   <div class="my-5">
    <GalleryCard title="Gallery">
        <ImgCard img="clubser/1.webp" cols="2"/>
        <ImgCard img="clubser/2.webp" cols="2"/>
        <ImgCard img="clubser/3.webp" cols="2"/>
        <ImgCard img="clubser/4.webp" cols="2"/>
        <ImgCard img="clubser/5.webp" cols="2"/>
        </GalleryCard>
   </div>
    </PageHeader>