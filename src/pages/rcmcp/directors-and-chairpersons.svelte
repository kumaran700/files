<script>
    import GalleryCard from "../../components/GalleryCard.svelte";
    import PageHeader from "../../components/PageHeader.svelte";
    import TeamCard from "../../components/TeamCard.svelte";
    import {metatags} from '@roxi/routify';
// import BlogCard from "../../components/BlogCard.svelte";
metatags.title="Directors and Chairpersons - Rotary Club of Madras Chenna Patna";

// let clubCarousel = [
// 		'c1.webp',
// 		'c2.webp',
// 		'c3.webp',
// 	];
    </script>
       <!-- routify:options name="directorscp"-->
    
       <PageHeader title="Directors and Chairpersons" img="directors.svg">
       <GalleryCard title="ROTARY CLUB OF MADRAS CHENNA PATNA" >
    <div class="text-center">
        <p class="lead fw-bold p-3">DIRECTORS</p>
    </div>
    
        <div class="row d-flex justify-content-center align-items-center text-center">
            <TeamCard name="Rtn Paresh Khatri" post="CLUB SERVICE" img="office/paresh.webp" cols=3 />
            <TeamCard name="Rtn Praveen Damiraju" post="YOUTH SERVICE" img="office/damiraju.webp" cols=3 />
            <TeamCard name="Rtn Karthikeyan" post="VOCATIONAL SERVICE" img="office/karthikeyan.webp" cols=3 />
            <TeamCard name="Rtn Amuthan" post="COMMUNITY SERVICE" img="office/senthan.webp" cols=3 />
            <TeamCard name="Rtn Surya Basker" post="COMMUNITY SERVICE (HEALTH)" img="office/suryabaskar.webp" cols=3 />
            <TeamCard name="Rtn Ram Kevalur" post="INTERNATIONAL SERVICE" img="office/ramkevalur.webp" cols=3 />


            <!-- <div class="m-3 p-2">
                <BlogCard type=2 name="Rtn Paresh Khatri" carouselId=1 mentor="Rtn Dileep" title="Club Service" carousel={clubCarousel} desc="Club Service is the lifeline of Chenna Patna just like how it is for many successful clubs. All work and no play makes Jack a dull boy and we at Chennapatna love our share of fun and fellowship too. <br><br>
                    Be it our regular club meetings, speaker meetings, family fellowships , Charter Nite celebrations or outdoor getaways, our club service team is constantly trying to innovate and reimagine. 
                    " />
                <BlogCard type=2 isReversed=true name="Rtn Praveen Damiraju" carouselId=2 mentor="Rtn Praveen Mehra" title="Youth Service" carousel={clubCarousel} customHeight="600" desc="Youth service has always been an area of immense focus for Chenna Patna. We are proud parents to 3 Rotaract clubs and 3 Interact clubs in Chennai. <br><br>Rotaract Clubs<br>
                    1. Rotaract club of Madras Chenna Patna<br>
2. Rotaract club of Ethiraj college<br>
3.Rotaract club of Amity Business School<br><br>Interact Clubs<br>1. Interact club of Vana Vani School<br>
2. Interact club of Hindu Sr Sec School<br>
3. Interact club of Kadalur School<br><br>Installation of a new President and board, conducting Rotary Youth Leadership Awards (RYLA), continuous engagement on personality development, knowledge sharing are some of the key focus areas of the Youth Service Avenue every year. 


                    " />
                <BlogCard type=2 name="Rtn Karthikeyan" carouselId=3 mentor="Rtn Surendra" title="Vocational Service" carousel={clubCarousel}  desc="Chenna Patna has been performing Yeoman service in the field of providing vocational support to various deserving individuals. <br><br>
                Interest free Micro loans, Tailoring and Crochet making training programs, Setting up Vendor kiosks are some of our hallmark projects.
                " />
                <BlogCard type=2 isReversed=true name="Rtn Surya Basker" carouselId=4 mentor="Rtn Raja Sriraam" title="Community Service Generic" carousel={clubCarousel}  desc="Community Service Health<br><br> <strong>Rtn Senthan Amuthan</strong> - Director<br>Rtn Rao - Mentor
                " />
                <BlogCard type=2 name="Rtn Ram Kevalur" carouselId=5 mentor="Rtn Rajasekhar" title="International Service" carousel={clubCarousel} customHeight=600  desc="Chenna Patna has formed a great network of international partners to bolster the scale and impact of its projects.
                <br><br>
                Presently, We have sister club and/or active relationship with the following clubs 
                <br><br>
                1. RC Cataraqui Kingston Canada<br>
                2. RC Aireborough UK<br>
                3. RC Plainsboro NJ USA<br>
                4. RC Nairobi Kenya<br>
                5. RC Colombo Srilanka<br>
                6. RC Tebrau Malaysia <br><br>
                
                We executed a $50000 covid project in partnership with th4 UK club in 2020-21.
                <br>
                We have 2 ongoing Global Grant projects with clubs in Canada and US.
                <br>
                We have had the privelege of hosting international clubs and Rotarians as our cultural guests from Canada, Australia and Kenya.
                 " />
            </div> -->
        </div>
        
        
        <div class="text-center">
            <p class="lead fw-bold p-3">CHAIRPERSONS</p>
        </div>
        
        <div class="row d-flex justify-content-center align-items-center text-center">
    
            <TeamCard name="Rtn Dr Annie Grace" post="MELLINAM IBREAST" img="office/anigrace.webp" cols=3 />
            <TeamCard name="Rtn Praveen Mehra" post="GLOBAL GRANTS" img="office/praveenmehra.webp" cols=3 />
            <TeamCard name="Rtn Viswanathakrishnan" post="OPERATION DAY BREAK & LITERACY" img="office/viswanathakrishnan.webp" cols=3 />
            <TeamCard name="Rtn Deepak Pungalia" post="MICRO LOANS" img="office/pungaliya.webp" cols=3 />
            <TeamCard name="Rtn Saptagiri" post="ROTARY FOUNDATION" img="office/saptagiri.webp" cols=3 />
            <TeamCard name="Rtn Prabhakar" post="MEMBERSHIP DEVELOPMENT" img="office/prabhakar.webp" cols=3 />
            <TeamCard name="Rtn Dr Annie Grace" post="WOMEN EMPOWERMENT" img="office/anigrace.webp" cols=3 />
            <TeamCard name="Rtn Ganesh" post="RTTL" img="office/ganesh.webp" cols=3 />
            <TeamCard name="Rtn Rao" post="RTTL" img="office/rau.webp" cols=3 />
            <TeamCard name="Rtn Rajiv Reddy" post="MEDIA AND PUBLIC RELATIONS" img="office/rajiv.webp" cols=3 />
    </div>
       </GalleryCard>
    </PageHeader>
       