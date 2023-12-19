<script>
    import { url,isActive } from '@roxi/routify'
    import BulletedList from '../../components/BulletedList.svelte';
import PageHeader from '../../components/PageHeader.svelte';
import {metatags} from '@roxi/routify';
metatags.title="About Us - Rotary Club of Madras Chenna Patna";
import { srcUrl } from '../_source_url';
</script>
   <!-- routify:options name="about"-->
   <PageHeader title="About Us" img="about-us.svg">
    <div class="col-md-12">
        <div class="d-flex justify-content-center align-items-center p-0 p-md-4">
            <img src="{srcUrl}/images/rotarylogo_short.webp"  alt="..."class="img-fluid">
        </div>
        <div class="row text-start p-1 p-md-3 mx-1 mx-md-5 my-1 my-md-2 d-flex justify-content-center align-items-center">
            <h4 class="first-word-uppercase-p">
                Rotary Club of Madras Chenna Patna was formed in the year 1992 under the stewardship of <strong>Rtn Hemachandradu</strong>, the founding president.
                <br><br>
                The club's mantra has always been one of <strong>seamless camaraderie</strong> and <strong>selfless service</strong>. <br><br>
                Over the last <strong>30 years</strong> the club has been performing yeoman service in the fields of children health, education for the under priveleged, community building and women empowerment. <br> <br>RCMCP's strength has been the continuity of several founding members even after 30 years coupled with strong member/family bonding and enviable international partnerships with many like minded Rotary clubs. <br><br>
                As the dynamics of Rotary is undergoing many changes, the club continues to march on strongly with open minds and open arms.
                
            </h4>
        </div>
        <div class="row text-start p-1 p-md-3 mx-1 mx-md-5 my-1 my-md-2 d-flex justify-content-center align-items-center">
            <hr>
            <h5 class="text-muted fw-bold">
                Here are the details of completed projects:
            </h5>
        </div>
        <div class="row text-start p-1 p-md-3 mx-1 mx-md-5 my-1 my-md-2 d-flex justify-content-center align-items-center rounded-3" id="abt-bg">
           <ul class="text-start"> 
            <BulletedList>
                Constructed a school at Kadalur, near Kalpakkam for the Tsunami affected children along with AIM for Seva. School is functioning with classes up to +2 standard where around 800 students are studying. RCMCP has spent nearly Rs. 1 crore, so far. It has constructed two toilet blocks, library, offered books, furniture, constructed computer lab, provided sanitary napkin dispenser and incinerator, computers and digital learning kits among others. 
            </BulletedList>
            <BulletedList>
                Provided 19 Oxygen Concentrators and life saving equipment worth Rs.40 lakh to various Government Hospitals, Military Hospital and old age homes in Chennai and Tier-II towns with funding from 20 Rotary Clubs and 14 individual donors from UK along with 1985 batchmates of National Public School.
            </BulletedList>
            <BulletedList>Constructed a health block at the Kadalur school, which caters to about 19 villages at a cost of Rs. 15 lakh.</BulletedList>
            <BulletedList>
                Provided borewell for boys home and neighbouring villages at Siddhiraju Kandriga, Chitoor District at a cost of Rs. 2.5 lakh.
            </BulletedList>
            <BulletedList>
                For more than two decades, our club in association with its Rotary Club of Tebrau, Malaysia, conducted surgeries for children with congenital heart disease at the Madras Medical Mission each costing Rs. 1.25 lakh. So far, it has benefited more than 200 children. 
            </BulletedList>
            <BulletedList>Donated two vans, laundry equipment and deep freezer to “The Banyan” totally costing Rs. 4.50 lakh.</BulletedList>
            <BulletedList>Constructed 18 low cost shelters for the underprivileged costing Rs. 18 lakh.</BulletedList>
            <BulletedList>Donated deep freezer mortuary and standby generator to ‘Jeevodaya’ a hospice for terminally ill cancer patients costing Rs. 4.80 lakh.</BulletedList>
            <BulletedList>
                Constructed a septic tank and toilet blocks at Annai Fathima Child Welfare Centre costing Rs. 3.40 lakh.
            </BulletedList>
            <BulletedList>Provided a rain water harvesting facility at RCC Visalakshi Thottam for 3,000 residents costing Rs. 5 lakh.</BulletedList>
            <BulletedList>
                As part of community based projects, adopted slums at Alathur, Nawalar Nagar and Visalakshi Thottam.
            </BulletedList>
            <BulletedList>Renovated class rooms and constructed toilet blocks for Perungudi Panchayat School costing Rs. 3.5 Lakh.
                Donated Rs. 1.20 lakh for construction of classrooms affected by earthquake at Gujarat.</BulletedList>
            <BulletedList>Constructed a hand wash facility for Panchayat Union Government High School at Boothapedu, Porur in Chennai at a cost of Rs. 1.20 lakh.</BulletedList>
            <BulletedList>Renovated existing toilet block and new hand wash at Clarke School for deaf.</BulletedList>
            <BulletedList>Helped Paradise Home for construction of a toilet block.</BulletedList>
            <BulletedList>Provided a hand wash facility and renovated Computer lab at Koyambedu Govt. Higher Secondary School, Chennai.
                </BulletedList>
                <div class="row text-start d-flex justify-content-center align-items-center">
                    <hr>
                    <h5 class="text-muted p-3 mb-2 fw-bold">
                        Ongoing Activities
                    </h5>
                </div>
            <BulletedList>On a regular basis, our club provides Rs 50,000 as micro loan to the cash starved people to set up small enterprises. Over Rs. 20 lakh has been disbursed to more than 200 beneficiaries including 80 women. It also includes transgender couple, a first of its kind in the Rotary district 3232.</BulletedList>
            <BulletedList>The club facilitates in eradication of Polio by manning  booths on National Polio Immunisation days.</BulletedList>
            <BulletedList>Confers “Vocational Excellence”, “For the Sake of Honour”, “Life Time Achievement”, “Best Teacher”, and “Best Journalist” Awards thus creating awareness
                and motivating the society to put in their best efforts.</BulletedList>
            <BulletedList>Contributes Rs. 50,000 each year to meet the educational requirements of the needy.</BulletedList>
            <BulletedList>Provides notebooks, uniform, furniture and socks to Government High Schools on regular basis.</BulletedList>
            <BulletedList>Conducts mega blood camps in the city and medical, eye and dental check-up camps in rural areas.</BulletedList>
           </ul>
        </div>
       </div>
      
   </PageHeader>