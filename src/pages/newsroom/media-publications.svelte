<script>
import GalleryCard from "../../components/GalleryCard.svelte";
import ImgCard from "../../components/ImgCard.svelte";
import PageHeader from "../../components/PageHeader.svelte";
import {metatags} from '@roxi/routify';
metatags.title="Media Publications - Rotary Club of Madras Chenna Patna";
</script>
   <!-- routify:options name="media"-->
   <PageHeader title="Media Publications" img="media.svg">
    <GalleryCard title="Print and Online Media Clippings" >
        <ImgCard img="media/1.webp" cols=3/>
        <ImgCard img="media/2.webp" cols=3/>
        <ImgCard img="media/3.webp" cols=3/>
        <ImgCard img="media/4.webp" cols=3/>
    </GalleryCard>
   </PageHeader>
