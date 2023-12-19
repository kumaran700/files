<script>
import PageHeader from "../../components/PageHeader.svelte";
import TeamCard from "../../components/TeamCard.svelte";
import {metatags} from '@roxi/routify';
metatags.title='Major Donors - Rotary Club of Madras Chenna Patna';
</script>

       <!-- routify:options name="donors"-->



<PageHeader title="Major Donors" img="donor.svg" >
    
        <div class="container-fluid "> 
      
          <div class="row d-flex justify-content-center align-items-center text-center">
      
            <TeamCard name="Rtn AVS Rao <br><br>" type=2 img="office/rau.webp" isGlass=true/>
            <TeamCard name="Rtn Praveen Mehra" type=2  img="office/praveenmehra.webp" isGlass=true/>
            <TeamCard name="Rtn Shankar <br><br>" type=2  img="office/shankar.webp" isGlass=true/>
    </div>
</PageHeader>