<script>
import GalleryCard from "../../components/GalleryCard.svelte";
import ImgCard from "../../components/ImgCard.svelte";
import PageHeader from "../../components/PageHeader.svelte";
import {metatags} from '@roxi/routify';
metatags.title="Board Meetings - Rotary Club of Madras Chenna Patna";
</script>
   <!-- routify:options name="board"-->
   <PageHeader title="Board Meetings" img="board.svg">
    <GalleryCard title="First Board Meeting">
        <ImgCard img="board/7.webp" cols=3/>
        <ImgCard img="board/8.webp" cols=3/>
        <ImgCard img="board/9.webp" cols=3/>
        <ImgCard img="board/10.webp" cols=3/>
    </GalleryCard>
   </PageHeader>
