<script>
    import GalleryCard from "../../components/GalleryCard.svelte";
    import ImgCard from "../../components/ImgCard.svelte";
    import PageHeader from "../../components/PageHeader.svelte";
    import {metatags} from '@roxi/routify';
metatags.title="Speakers Meetings - Rotary Club of Madras Chenna Patna";
    </script>
       <!-- routify:options name="speaker"-->
       <PageHeader title="Speaker Meetings" img="speaker.svg">
        <GalleryCard title="Guest Speakers 2021-22">
            <ImgCard img="speakers/1.webp" cols=3/>
            <ImgCard img="speakers/2.webp" cols=3/>
            <ImgCard img="speakers/3.webp" cols=3/>
            <ImgCard img="speakers/4.webp" cols=3/>
            <ImgCard img="speakers/5.webp" cols=3/>
            <ImgCard img="speakers/6.webp" cols=3/>
            <ImgCard img="speakers/7.webp" cols=3/>
            <ImgCard img="speakers/8.webp" cols=3/>
            <ImgCard img="speakers/9.webp" cols=4/>
            <ImgCard img="speakers/10.webp" cols=4/>
            <ImgCard img="speakers/11.webp" cols=4/>
            <ImgCard img="speakers/12.webp" cols=4/>
            <ImgCard img="speakers/13.webp" cols=4/>
            <ImgCard img="speakers/14.webp" cols=4/>
        </GalleryCard>
       </PageHeader>
    