<!-- routify:options name="otndaybreak"-->
<script>
    import { metatags } from '@roxi/routify'
    import BulletedList from '../../../components/BulletedList.svelte';
import PageHeader from '../../../components/PageHeader.svelte';
metatags.title='Operation Daybreak - Rotary Club of Madras Chenna Patna';
import { srcUrl } from '../../_source_url';

</script>
   <!-- routify:options name="otndaybreak"-->
   <PageHeader title="Operation Day Break" img="school.svg" >
    <div class="col-md-12">
        <div class="row text-start p-1 p-md-3 mx-1 mx-md-5 my-1 my-md-2 d-flex justify-content-center align-items-center">
            <p class="lead fw-normal first-word-uppercase-p">
                Since the inception, Rotary Club of Madras Chenna Patna has been actively involved in programmes connected to Literacy. The Club has been sponsoring tuition fees for the underprivileged children studying in schools and colleges every year under Project ‘Operation Daybreak’.
            </p>
        </div>
        <div class="row text-start p-1 p-md-3 mx-1 mx-md-5 my-1 my-md-2 d-flex justify-content-center align-items-center rounded-3" id='odb-bg'>
            <ul>
                <li class="lead p-2 m-2 fw-bold">Following are the list of activities and related projects that we have carried out at Swami Dayananda Rotary Matriculation Higher Secondary School in Kadalur near Chennai also known as Kadalur School, which caters to around 18 villages in that vicinity.</li>
                <BulletedList>Constructed classrooms, science labs and provided computers and solar power facility.</BulletedList>
                <BulletedList>Renovated/constructed toilet blocks, kitchen and classrooms of a Panchayat School in Perungudi.</BulletedList>
                <BulletedList>Constructed a hand wash facility for Panchayat Union Government High School at Boothapedu, Porur in Chennai at a cost of Rs. 1.20 lakh.</BulletedList>
                <BulletedList>Provides notebooks, uniform, furniture and socks to Government High Schools on regular basis.</BulletedList>
                <BulletedList>Renovated existing toilet block and new hand wash at Clarke School for deaf.</BulletedList>
                <BulletedList>Provided a hand wash facility and renovated computer lab at Koyambedu Government Higher Secondary School, Chennai.</BulletedList>
                <BulletedList>Contributed Rs.1.20 lakh towards construction of two class rooms at Bhuj, Gujarat, as part of rehabilitation program after the devastating earthquake. </BulletedList>
            </ul>
        </div>
        <div class="row text-start p-1 p-md-3 mx-1 mx-md-5 my-1 my-md-2 d-flex justify-content-center align-items-center">
          <div class="col-md-3 p-2 ">
            <img src="{srcUrl}/images/daybreak/daybreak1.webp" alt="..." class="img-fluid rounded-3">
          </div>
          <div class="col-md-3 p-2">
            <img src="{srcUrl}/images/daybreak/daybreak2.webp" alt="..." class="img-fluid rounded-3">
          </div>
          <div class="col-md-3 p-2">
            <img src="{srcUrl}/images/daybreak/daybreak3.webp" alt="..." class="img-fluid rounded-3">
          </div>
        </div>
       </div>
   </PageHeader>