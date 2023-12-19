<!-- routify:options preload="proximity" -->
<script>
    import { url,isActive } from '@roxi/routify';
import { srcUrl } from './_source_url';
import Modal from '../components/Modal.svelte';
import { sendMail } from "./vu4wvgf47ggv654";

// export let openMem=false;
let showModal = false;
  let canOpenmodal = true;
  function revOpen() {
  	if (showModal) {
  		showModal = false;

  	}
  	showModal = !showModal;
  };
  let name_mem, age_mem, prof_mem, ind_mem,phone_mem,email_mem,res_mem;
  const sendMemForm = () => {
    let msg="Member request form data: \nName: "+name_mem+"\nAge: "+age_mem+"\nProffesion: "+prof_mem+"\nIndustry: "+ind_mem+"\nPhone: "+phone_mem+"\nEmail: "+email_mem+"\nResidence: "+res_mem;
    sendMail(name_mem, email_mem, "MEMBER REQUEST FROM RCMCP SITE", msg);
    name_mem = "";
    email_mem = "";
    phone_mem = "";
    age_mem = "";
    prof_mem = "";
    ind_mem = "";
    res_mem = "";
    showModal=false;
  };
  if($isActive('./index')){
    setTimeout(() => {
  revOpen();
}, 5000);
  }
</script>


<nav class="navbar navbar-expand-lg bg-light sticky-md-top glass">
    <div class="container-fluid">
      <a class="navbar-brand" href="./">
        <img src="{srcUrl}/images/rotorylogo.webp" alt="Rotory logo" class="d-inline-block img-fluid align-text-top">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class='bx bx-menu-alt-left bx-md'></i>
      </button>
      <div class="collapse navbar-collapse text-center" id="navbarNav">
        <ul class="navbar-nav mx-auto nav-fill nav-pills">
          <li class="nav-item px-2">
            <a class="nav-link" class:active={$isActive('./index')} aria-current="page" href="/">Home</a>
          </li>

          <li class="nav-item dropdown px-2">
            <a class="nav-link dropdown-toggle" class:active={$isActive('./rcmcp')} href="./" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              RCMCP
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href={$url('pres')}>President's Message</a></li>
              <li><a class="dropdown-item" href={$url('keyoffice')}>Key Office bearers</a></li>
              <li><a class="dropdown-item" href={$url('directorscp')}>Directors and Chairpersons</a></li>
              <li><a class="dropdown-item" href={$url('members')}>Members</a></li>
              <li><a class="dropdown-item" href={$url('donors')}>Major donors</a></li>
              <li><a class="dropdown-item" href={$url('phfs')}>PHFs</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown px-2">
            <a class="nav-link dropdown-toggle" href="./" class:active={$isActive('./avenues')} role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Avenues
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="{$url('clubservices')}">Club Service</a></li>
              <li><a class="dropdown-item" href="{$url('ytservices')}">Youth Service</a></li>
              <li><a class="dropdown-item" href="{$url('vtservices')}">Vocational Service</a></li>
              <li><a class="dropdown-item" href="{$url('cmmservices')}">Community Service</a></li>
              <li><a class="dropdown-item" href="{$url('interservices')}">International Service</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown px-2">
            <a class="nav-link dropdown-toggle" href="./" class:active={$isActive('./projects')} role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projects
            </a>
            <ul class="dropdown-menu p-2">
              <li class="nav-link m-1 p-3">Flagship Projects</li>
              <li><a class="dropdown-item" href="{$url('cmgsoon')}">Operation Daybreak</a></li>
              <li><a class="dropdown-item" href="{$url('cmgsoon')}">Micro Loans</a></li>
              <li><a class="dropdown-item" href="{$url('cmgsoon')}">Tebrau Heart</a></li>
              <li><a class="dropdown-item" href="{$url('cmgsoon')}">Kadalur School</a></li>
              <li><a class="dropdown-item" href="{$url('ttleague')}">Table Tennis League</a></li>
              <li class="nav-link m-1 p-3">Global Grant Projects</li>
              <li><a class="dropdown-item" href="{$url('ibreast')}">Mellinam - Breast cancer screening</a></li>
              <li><a class="dropdown-item" href="{$url('cmgsoon')}">Dialysis infrastructure for VHS</a></li>
              <li class="nav-link m-1 p-3">Other Projects</li>
              <li><a class="dropdown-item" href="{$url('cmgsoon')}">Covid Relief</a></li>
              <li><a class="dropdown-item" href="{$url('cmgsoon')}">School Bathrooms</a></li>
              <li><a class="dropdown-item" href="{$url('cmgsoon')}">Crochet</a></li>
              <li><a class="dropdown-item" href="{$url('cmgsoon')}">Free meals</a></li>
              <li><a class="dropdown-item" href="{$url('cmgsoon')}">Laptop donations</a></li>
              <li><a class="dropdown-item" href="{$url('cmgsoon')}">Trans Kiosk</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown px-2">
            <a class="nav-link dropdown-toggle" href="./" class:active={$isActive('./meetings')} role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Meetings
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="{$url('board')}">Board meetings</a></li>
              <li><a class="dropdown-item" href="{$url('cmgsoon')}">Club meetings</a></li>
              <li><a class="dropdown-item" href="{$url('speaker')}">Speaker meetings</a></li>
              <li><a class="dropdown-item" href="{$url('agm')}">AGM</a></li>
            </ul>
          </li>
          <!-- <li class="nav-item dropdown px-2">
            <a class="nav-link dropdown-toggle" href="./" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Gallery
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="./">Table tennis</a></li>
              <li><a class="dropdown-item" href="./">Fellowship</a></li>
              <li><a class="dropdown-item" href="./">Vocational awards</a></li>
              <li><a class="dropdown-item" href="./">Board meetings</a></li>
              <li><a class="dropdown-item" href="./">Guest Speakers</a></li>
              <li><a class="dropdown-item" href="./">New Member Induction</a></li>
            </ul>
          </li> -->
          <li class="nav-item dropdown px-2">
            <a class="nav-link dropdown-toggle" href="./" role="button" class:active={$isActive('./newsroom')} data-bs-toggle="dropdown" aria-expanded="false">
              Newsroom
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="{$url('calendar')}">Calendar of events</a></li>
              <li><a class="dropdown-item" href="{$url('chennapathra')}">Chennapathra</a></li>
              <li><a class="dropdown-item" href="{$url('media')}">Media publications</a></li>
            </ul>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link" href="{$url('cmgsoon')}" class:active={$isActive('./feedback')}>Payments</a></li>
            {#if $isActive('./index')}
            <li class="nav-item px-2">
              <a class="nav-link" href="." on:click={revOpen}>Member form</a></li>
            {/if}
         
          
        </ul>
        <ul class="nav justify-content-center justify-content-end-md">
          <li class="nav-item px-3"><a class="no-hover fb" target="_blank"  href="https://www.facebook.com/profile.php?id=100083874531287"><i class='bx bxl-facebook-circle bx-md' ></i></a></li>
        <li class="nav-item px-3"><a class="no-hover twit" target="_blank" href="https://twitter.com/rcmcp_speaks"><i class='bx bxl-twitter bx-md' ></i></a></li>
        <li class="nav-item px-3"><a class="no-hover insta" target="_blank" href="https://www.instagram.com/rcmcp_diaries/"><i class='bx bxl-instagram-alt bx-md' ></i></a></li>
        </ul>
      </div>
    </div>
  </nav>
  <Modal bgDrop={true} {showModal} {canOpenmodal} outClick={true}>
    <div class="conatiner text-center">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content card rounded-3 bg-light p-4">
             <h3>Want to become a Member?</h3>
             <form  id="memberForm"
             name="memberForm"
             on:submit|preventDefault={sendMemForm}>
              <div class="row d-flex justify-content-center align-items-center">
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="name_mem"
                      id="name_mem"
                      bind:value={name_mem}
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="age_mem"
                      id="age_mem"
                      bind:value={age_mem}
                      placeholder="Age "
                      required
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="prof_mem"
                      id="prof_mem"
                      bind:value={prof_mem}
                      placeholder="Profession "
                      required
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="ind_mem"
                      id="ind_mem"
                      bind:value={ind_mem}
                      placeholder="Industry "
                      required
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      name="phone_mem"
                      id="phone_mem"
                      bind:value={phone_mem}
                      placeholder="Phone "
                      required
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      name="email_mem"
                      id="email_mem"
                      bind:value={email_mem}
                      placeholder="Email address "
                      required
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="res_mem"
                      id="res_mem"
                      bind:value={res_mem}
                      placeholder="City of Residence "
                      required
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="submit"
                      value="Submit"
                      class="btn btn-primary"
                    />
                    <div class="submitting" />
                  </div>
                </div>

              </div>
             </form>
            </div>
          </div>
    </div>
</Modal>
<slot />

<footer class="text-center text-white" style="background-color: #f1f1f1;">
  <!-- Grid container -->
  <div class="container pt-4">
    <!-- Section: Social media -->
    <section class="mb-4">
      <!-- Facebook -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.facebook.com/profile.php?id=100083874531287"
        role="button"
        target="_blank"
        data-mdb-ripple-color="dark"
        ><i class='bx bxl-facebook' ></i></a>

      <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://twitter.com/rcmcp_speaks"
        role="button"
        target="_blank"
        data-mdb-ripple-color="dark"
        ><i class='bx bxl-twitter' ></i></a>

      <!-- Instagram -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.instagram.com/rcmcp_diaries/"
        role="button"
        target="_blank"
        data-mdb-ripple-color="dark"
        ><i class='bx bxl-instagram' ></i></a>
    </section>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center text-dark p-3" style="background-color: rgba(135, 135, 135, 0.2);">
      Copyright © 2022. RCMCP All Rights Reserved.  
      <!-- Powered by
    <a class="text-dark" href="https://webstrake.com/">webStrake</a> and <a class="text-dark" href="https://modexdigital.com/">Modex Digital</a> -->
  </div>
  <!-- Copyright -->
</footer>
