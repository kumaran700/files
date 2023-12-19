<script>
import PageHeader from "../../components/PageHeader.svelte";
import ReviewCard from "../../components/ReviewCard.svelte";

</script>
   <!-- routify:options name="calendar"-->
<PageHeader title="Calendar of Events" img="events.svg">
    <div class="row d-flex justify-content-center align-items-center p-3 m-2">
        <ReviewCard event=true name="Monday, July 18" text="INSTALLATION OF PRESIDENT & NEW TEAM"/>
        <ReviewCard event=true name="Tuesday, July 26" text="Rotary International President visit - high tea"/>
        <ReviewCard event=true name="Saturday, July 30" text="Kanchipuram fellowship trip"/>
        <ReviewCard event=true name="Tuesday, August 9 " text="1st Board meeting of the new Rotary year"/>
        <ReviewCard event=true name="Monday, August 15" text="Independence Day celebrations followed by breakfast fellowship"/>
        <ReviewCard event=true name="Friday, August 19" text="Movie night"/>
        <ReviewCard event=true name="Sunday, August 28" text="Day trip to Chidambaram and Pichavaram lake"/>
    </div>
</PageHeader>