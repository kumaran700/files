<script>
import GalleryCard from "../../components/GalleryCard.svelte";
import ImgCard from "../../components/ImgCard.svelte";
import PageHeader from "../../components/PageHeader.svelte";
import {metatags} from '@roxi/routify';
metatags.title="International Services - Rotary Club of Madras Chenna Patna";
</script>
   <!-- routify:options name="interservices"-->
<PageHeader title="International Service" img="international.svg">
   <div class="row m-2 d-flex justify-content-center">
      <h4 class="first-word-uppercase-p mx-2 p-3">
         Chenna Patna has formed a great network of international partners to bolster the scale and impact of its projects.
         <br><br>
         Presently, We have sister club and/or active relationship with the following clubs 
         <br><br>
         1. RC Cataraqui Kingston Canada<br>
         2. RC Aireborough UK<br>
         3. RC Plainsboro NJ USA<br>
         4. RC Nairobi Kenya<br>
         5. RC Colombo Srilanka<br>
         6. RC Tebrau Malaysia <br><br>
         
         We executed a $50000 covid project in partnership with the UK club in 2020-21.
         <br>
         We have 2 ongoing Global Grant projects with clubs in Canada and US.
         <br>
         We have had the privelege of hosting international clubs and Rotarians as our cultural guests from Canada, Australia and Kenya.
          </h4>
      <div class="col-lg-8 d-flex justify-content-center align-items-center">
         <div class="row d-flex justify-content-center">
          <ImgCard img="office/ramkevalur.webp" title="Director<br><strong>Rtn Ram Kevalur</strong>"cols=3/>
              <ImgCard img="office/rajshekar.webp" title="Mentor<br><strong>Rtn Rajasekhar</strong>" cols=3/>
         </div>
         
      </div>
  
     </div>
<GalleryCard title="">
<ImgCard img="int/1.webp" cols="4" title="UK Aireborough President Raj Mani exhibits flag"/>
<ImgCard img="int/2.webp" cols="4" title="Pact with UK Aireborough"/>
<ImgCard img="int/3.webp" cols="4" title="Display of Malaysia Tebrau flag"/>
<ImgCard img="int/4.webp" cols="4" title="US Plainsboro"/>
<ImgCard img="int/5.webp" cols="4" title="US Cupertino"/>
<ImgCard img="int/6.webp" cols="4" title="Flags of Cupertino & Plainsboro"/>
<ImgCard img="int/7.webp" cols="4" title="Flags exchange at Hamburg Convention"/>
<ImgCard img="int/8.webp" cols="4" title="Flag exchange at Hamburg Convention"/>
<ImgCard img="int/9.webp" cols="4" title="Flags exchange in Colombo"/>
<ImgCard img="int/10.webp" cols="4" title="Flags exchange with Tebruau Raman Velu"/>
<ImgCard img="int/11.webp" cols="4" title="Meeting of Cataraqui Kingston club"/>
<ImgCard img="int/12.webp" cols="4" title="Flag exchange at Hamburg Convention"/>
<ImgCard img="int/13.webp" cols="4" title="Hosted International Rotarians"/>
<ImgCard img="int/14.webp" cols="4" title="Greeting Canadian delegates"/>
<ImgCard img="int/15.webp" cols="4" title="Hosted South African Delegates"/>
</GalleryCard>
</PageHeader>