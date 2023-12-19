<script>
import GalleryCard from "../../components/GalleryCard.svelte";
import PageHeader from "../../components/PageHeader.svelte";
import TeamCard from "../../components/TeamCard.svelte";
import {metatags} from '@roxi/routify';
metatags.title="Key Office Bearers - Rotary Club of Madras Chenna Patna";
</script>
   <!-- routify:options name="keyoffice"-->

   <PageHeader title="Key Office Bearers" img="office.svg">
   <GalleryCard title="ROTARY CLUB OF MADRAS CHENNA PATNA" >
    <div class="text-center">
        <p class="lead">OFFICE BEARERS 2022-23</p>
    </div>
    <div class="row d-flex justify-content-center align-items-center text-center">

        <TeamCard name="Rtn Vidya Alagu Perumal​" post="PRESIDENT" img="office/vidya.webp" cols=3/>
</div>
    <div class="row d-flex justify-content-center align-items-center text-center">

        <TeamCard name="Rtn Guha Prakash" post="SECRETARY" img="office/guha.webp" cols=3 />
        <TeamCard name="Rtn Ram Kevalur" post="JOINT SECRETARY" img="office/ramkevalur.webp" cols=3 /> 
        <TeamCard name="Rtn Ramajeyam" post="TREASURER" img="office/ramajayam.webp" cols=3 />
        <TeamCard name="Rtn Debasis Mohanty" post="JOINT TREASURER" img="office/debasish.webp" cols=3 />
        <TeamCard name="Rtn Senthan Amuthan" post="IPP" img="office/senthan.webp" cols=3 />
        <TeamCard name="Rtn Ganesh" post="SERGEANT AT ARMS" img="office/ganesh.webp" cols=3 />
        <TeamCard name="Rtn Muthiah" post="SERGEANT AT ARMS" img="office/muthiah.webp" cols=3 />
        <TeamCard name="Rtn Raja Sriram" post="CLUB ADVISOR" img="office/sriraam.webp" cols=3 />
        <TeamCard name="Rtn Prabhakar" post="CLUB TRAINER" img="office/prabhakar.webp" cols=3 />
</div>
   </GalleryCard>
</PageHeader>
   