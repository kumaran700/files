<script>
    import GalleryCard from "../../components/GalleryCard.svelte";
    import ImgCard from "../../components/ImgCard.svelte";
    import PageHeader from "../../components/PageHeader.svelte";
    import {metatags} from '@roxi/routify';
    metatags.title="Board Meetings - Rotary Club of Madras Chenna Patna";
    </script>
       <!-- routify:options name="agm"-->
       <PageHeader title="AGM" img="board.svg">
        <GalleryCard title="29th Annual General Meeting">
            <ImgCard img="board/1.webp" cols=6/>
            <ImgCard img="board/2.webp" cols=6/>
            <ImgCard img="board/3.webp" cols=3/>
            <ImgCard img="board/4.webp" cols=3/>
            <ImgCard img="board/5.webp" cols=3/>
            <ImgCard img="board/6.webp" cols=3/>
        </GalleryCard>
       </PageHeader>
    