<script>
    import {metatags} from '@roxi/routify';
import GalleryCard from "../../components/GalleryCard.svelte";
import PageHeader from "../../components/PageHeader.svelte";
import TeamCard from "../../components/TeamCard.svelte";

metatags.title='PHFs - Rotary Club of Madras Chenna Patna';
</script>
       <!-- routify:options name="phfs"-->
       <PageHeader title="PHF's" img="awards.svg">
        <GalleryCard title="Paul Harris Fellow recognition">
        <div class="row d-flex justify-content-center align-items-center text-center">
            <TeamCard name="Rtn Raja Sriraam" type=2 img="office/sriraam.webp" cols=3 />
        <TeamCard name="Rtn Sapthagiri" type=2 img="office/saptagiri.webp" cols=3 />
        <TeamCard name="Rtn Surendra" type=2 img="office/surendra.webp" cols=3 />
        <TeamCard name="Rtn Rajiv Reddy" type=2 img="office/rajiv.webp" cols=3 />
        <TeamCard name="Rtn Hemachandrudu" type=2 img="office/hemachand.webp" cols=3 />
        <TeamCard name="Rtn Hemant Kumar" type=2 img="office/hemanth.webp" cols=3 />
        <TeamCard name="Rtn Pattabiraman" type=2 img="office/pattabiraman.webp" cols=3 />
        <TeamCard name="Rtn Praveen Mehra" type=2 img="office/praveenmehra.webp" cols=3 />
        <TeamCard name="Rtn Shankar" type=2 img="office/shankar.webp" cols=3 />
        <TeamCard name="Rtn Muthiah" type=2 img="office/muthiah.webp" cols=3 />
        <TeamCard name="Rtn Prabhakar" type=2 img="office/prabhakar.webp" cols=3 />
        <TeamCard name="Rtn Ram Kevalur" type=2 img="office/ramkevalur.webp" cols=3 />
        <TeamCard name="Rtn Sathyanarayanan" type=2 img="office/sathyanarayanan.webp" cols=3 />
        <TeamCard name="Rtn AVS Rao" type=2 img="office/rau.webp" cols=3 />
        <TeamCard name="Rtn Suryabaskar" type=2 img="office/suryabaskar.webp" cols=3 />
        <TeamCard name="Rtn Ganesh" type=2 img="office/ganesh.webp" cols=3 />
        <TeamCard name="Rtn Dileep" type=2 img="office/dileep.webp" cols=3 />

</div>
        </GalleryCard>
       </PageHeader>
