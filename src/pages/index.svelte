<script>
  import { metatags } from "@roxi/routify";
  // import BlogCard from '../components/BlogCard.svelte';
  //     import Modal from '../components/Modal.svelte'
  // import ProjectCard from '../components/ProjectCard.svelte';
  import TeamCard from "../components/TeamCard.svelte";
  import { srcUrl } from "./_source_url";

  metatags.title = "Rotary Club of Madras Chenna Patna &#8211; Club ID 29469";
  metatags.description =
    "Our Club has decided to empower girl child as well as women by providing right type of help at the right time";

  let namev, emailv, subjectv, msgv;
  const sendForm = () => {
    sendMail(namev, emailv, subjectv, msgv);
    namev = "";
    emailv = "";
    subjectv = "";
    msgv = "";
  };

</script>

<!-- routify:options name="home"-->

<main>
  <div class="container-fluid d-flex justify-content-center align-items-center">
    <div class="row text-start ">
      <div class="text-dark my-3 text-center">
        <h1 class="fw-bold m-3">
          Welcome to Rotary Club of Madras Chenna Patna
        </h1>
      </div>
      <div class="row m-0 p-0">
        <div class="col-md-6">
          <section>
            <div
              id="carouselExampleFade"
              class="carousel carousel-dark  slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner  rounded-3 shadow-lg">
                <div class="carousel-item active" data-bs-interval="2000">
                  <img
                    src="{srcUrl}/images/carousel/c11.webp"
                    class="d-block w-100 display-img"
                    height="500"
                    alt="..."
                  />
                </div>
                <div class="carousel-item " data-bs-interval="2000">
                  <img
                    src="{srcUrl}/images/carousel/c9.webp"
                    class="d-block w-100 display-img"
                    height="500"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="{srcUrl}/images/carousel/c3.webp"
                    class="d-block w-100 display-img"
                    height="500"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="{srcUrl}/images/carousel/c10.webp"
                    class="d-block w-100 display-img"
                    height="500"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="{srcUrl}/images/carousel/c2.webp"
                    class="d-block w-100 display-img"
                    height="500"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="{srcUrl}/images/carousel/c1.webp"
                    class="d-block w-100 display-img"
                    height="500"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="{srcUrl}/images/carousel/c4.webp"
                    class="d-block w-100 display-img"
                    height="500"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="{srcUrl}/images/carousel/c5.webp"
                    class="d-block w-100 display-img"
                    height="500"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="{srcUrl}/images/carousel/c6.webp"
                    class="d-block w-100 display-img"
                    height="500"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="{srcUrl}/images/carousel/c7.webp"
                    class="d-block w-100 display-img"
                    height="500"
                    alt="..."
                  />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="{srcUrl}/images/carousel/c8.webp"
                    class="d-block w-100 display-img"
                    height="500"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true" />
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true" />
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </section>
        </div>
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <h5 class="first-word-uppercase-p">
            Rotary Club of Madras Chenna Patna was formed in the year 1992 under
            the stewardship of <strong>Rtn Hemachandradu</strong>, the founding
            president.
            <br /><br />
            The club's mantra has always been one of
            <strong>seamless camaraderie</strong>
            and <strong>selfless service</strong>. <br /><br />
            Over the last <strong>30 years</strong> the club has been performing
            yeoman service in the fields of children health, education for the
            under priveleged, community building and women empowerment. <br />
            <br />RCMCP's strength has been the continuity of several founding
            members even after 30 years coupled with strong member/family
            bonding and enviable international partnerships with many like
            minded Rotary clubs. <br /><br />
            As the dynamics of Rotary is undergoing many changes, the club continues
            to march on strongly with open minds and open arms.
          </h5>
        </div>
      </div>
    </div>
  </div>

  <section id="partners">
    <div class="py-5">
      <div class="container">
        <div
          class="row d-flex justify-content-center align-items-center p-5 m-3"
        >
          <div class="col-md-3">
            <div class="mb-4 text-center">
              <img
                src="{srcUrl}/images/rcoin.webp"
                class="img-fluid"
                width="200"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-3">
            <div class="mb-4 text-center">
              <img
                src="{srcUrl}/images/logo4.webp"
                class="img-fluid"
                width="300"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="row text-center">
    <div class="col-lg-8 mx-auto text-dark p-3 my-3">
      <h1 class="fw-bold">Key Rotary Leadership</h1>
    </div>
  </div>

  <section
    id="key-office"
    class="container-fluid p-3 mb-5 d-flex justify-content-center align-items-center text-center"
  >
    <div
      class="row d-flex justify-content-center align-items-center text-center"
    >
      <TeamCard
        isGlass="true"
        name="Rtn Jennifer Jones"
        post="International President 2022-2023 <br><br>"
        img="office/jenniferjones.webp"
        cols="3"
      />
      <TeamCard
        isGlass="true"
        name="Rtn Dr Nanda Kumar"
        post="RI 3232 District Governor 2022-2023"
        img="office/nandakumar.webp"
        cols="3"
      />
      <TeamCard
        isGlass="true"
        name="Rtn Vidya Alagu Perumal"
        post="Club President 2022-2023 <br><br>"
        img="office/vidya.webp"
        cols="3"
      />
      <TeamCard
        isGlass="true"
        name="Rtn Senthan Amuthan"
        post="Immediate Past President 2022-2023"
        img="office/senthan.webp"
        cols="3"
      />
    </div>
  </section>

  <!-- <div class="container-fluid work-pr-bg">            

            <div class="row d-flex justify-content-center align-items-center">

              <ProjectCard img="ibreast1.webp" title="Project MELLINAM" desc="Our Global Grant project 'Mellinam' that conducts screening camps in Chennai to detect early warnings of breast cancer among women is nearing 5,000 mark." urlL="ibreast" />
              
              <ProjectCard img="girl.webp" title="Operation Daybreak" desc="Operation Daybreak is the latest initiative of our Club to sponsor the tuition fees of school going girls and college students. <br><br><br>" urlL="otndaybreak" />

              <ProjectCard img="women-emp.webp" title="Women Empowerment" desc="Our Club has decided to empower girl child as well as women by providing right type of help at the right time, be it enabling them to finish their study or hone their skills through vocational training." urlL="womenemp" />
                    </div>
                </div> -->
  <!-- <section id="progress">
    <div class="container d-flex justify-content-center align-items-center mb-5 p-5 mb-5 z-depth-1">
        <div class="row d-flex justify-content-center align-items-center">

            <div class="col-md-4 mb-md-0 mb-5">
      
              <div class="row ship rounded-3 p-3">
      
                <div class=" col-lg-2 col-md-3 col-2">
                    <i class=' bx bxs-ship bx-md' ></i>
                </div>
      
                <div class="col-lg-10 col-md-9 col-10">
                  <h4 class="font-weight-bold">CHENNAPATHRA</h4>
                  <p class="grey-text">Chennapathra is the monthly bulletin that covers the club events, projects, fellowship and much more.</p>
                  <a class="btn prog-btn px-3 py-2 btn-sm" href="https://www.rotarymadraschennapatna.org/wp-content/uploads/2021/10/Chennapathra-2021-22-October.pdf">View PDF</a>
                </div>
      
              </div>
      
            </div>
      
            <div class="col-md-4 mb-md-0 mb-5">
      
              <div class="row">
      
                <div class="col-lg-2 col-md-3 col-2">
                    <i class='bx bx-doughnut-chart bx-md'></i>
                </div>
      
                <div class="col-lg-10 col-md-9 col-10">
                  <h4 class="font-weight-bold">POWERPLAY</h4>
                  <p class="grey-text">Governor's Monthly Letter is compilation of news and events concerning all the clubs in RI District 3232 <br><br></p>
                  <a class="btn prog-btn px-3 py-2 btn-sm" href="http://rotarymadraschennapatna.org/wp-content/uploads/2021/07/Chennapathra-2021-22-July-1.1.pdf">View PDF</a>
                </div>
      
              </div>
      
            </div>
      
            <div class="col-md-4 mb-md-0 mb-5">
      
              <div class="row">
      
                <div class="col-lg-2 col-md-3 col-2">
                    <i class='bx bx-message-square-dots bx-md'></i>
                </div>
      
                <div class="col-lg-10 col-md-9 col-10">
                  <h4 class="font-weight-bold">ROTARY DISTRICT 3232</h4>
                  <p class="grey-text">Rotary Newsletter publishes interviews, latest happenings and projects in District <br>.</p>
                  <a class="btn prog-btn px-3 py-2 mt-3 btn-sm" href="http://rotarynewsonline.org/">Learn more</a>
                </div>
      
              </div>
      
            </div>
      
          </div>
    </div>
</section>

    <div class="container">
        <section class="dark-grey-text">

          <BlogCard title="Club News" desc="The RCMCP in association with the Fellowship of Table Tennis Loving Rotarians will be conducting the first League Championship on May 15. This is a friendly tournament where, a total of eight teams will be competing for the title." img="b1.webp"/>
          
          <BlogCard isReversed=true title="Events" desc="Chess prodigy Praggnanandha, was recognised and honoured by our club as Young Achiever during December 2021. He is seen along with Dronacharya Awardee for Table Tennis S. Raman, who was also felicitated by former Sports Development Secretary PWC Davidar IAS Retd." img="b2.webp"/>
          

        </section>      
      
      </div>

      <section id="ytvideo">
        <div class="container z-depth-1 my-5 py-5">
  

            <section>
          
              <Modal bgDrop={true} {showModal} {canOpenmodal} outClick={true}>
                <div class="conatiner text-center">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                            <iframe width="100%" height="400" class="embed-responsive-item" src={isYt1?"https://www.youtube.com/embed/4S4WbeB56j8":"https://www.youtube.com/embed/FF1iInGN4Sk"} title="Rotary Club of Madras Chenna Patna" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </div>
                        </div>
                      </div>
                </div>
            </Modal>
          
              <h6 class="font-weight-bold text-center grey-text text-uppercase small mb-4">video</h6>
              <h3 class="font-weight-bold text-center dark-grey-text pb-2">Explore</h3>             
          
              <div class="row">
                <div class="col-md-6 mx-auto mb-4">
          
                    <div class="view z-depth-1 rounded">
                      <img class="rounded img-fluid" role="button" on:click={()=>{
                        revOpen(1)
                      }} src="{srcUrl}/images/poor.webp" alt="Video title">
                    </div>
          
                </div>
                <div class="col-md-6 mx-auto mb-4 rounded shadow-lg ">
          
                    <div class="view z-depth-1 text-center">
                      <img class="rounded img-fluid" role="button" on:click={()=>{
                        revOpen(2)
                      }} src="{srcUrl}/images/yt2.webp" alt="Video title">
                    </div>
          
                </div>
              </div>
          
            </section>
          
            
          </div>
      </section>

      <section id="donors">
        <div class="container-fluid ">
          <div class="row text-center">
              <div class="col-lg-8 mx-auto text-dark p-3 my-3">
                  <h1 class="fw-bold">Major Donors</h1>
              </div>
          </div>    
      
          <div class="row d-flex justify-content-center align-items-center text-center">
      
            <TeamCard name="Rtn AVS Rao" type=2 img="office/rau.webp" isGlass=true/>
              <TeamCard name="Rtn Praveen Mehra" type=2  img="office/praveenmehra.webp" isGlass=true/>
              <TeamCard name="Rtn Shankar" type=2  img="office/shankar.webp" isGlass=true/>
      </section> -->

  <section id="footer">
    <div
      class="container-fluid  p-2 m-2 d-flex justify-content-center align-items-center"
    >
      <div
        class="accordion w-100 p-2 m-4 rounded-3 shadow-lg accordion-flush"
        id="accordionFlushExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              ><span
                ><img
                  width="80"
                  src="{srcUrl}/images/rcoin.webp"
                  alt="smalllogo"
                /></span
              >
              ROTARY'S FOUR-WAY TEST
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Is it the TRUTH?<br />
              Is it fair to all concerned?<br />
              Will it build GOODWILL and BETTER FRIENDSHIPS?<br />
              Will it be BENEFICIAL to all concerned
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              ><span><i class="bx bx-phone-call bx-sm p-2" /></span>
              Meetings
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Our regular speaker meetings are held at Hotel Savera, Chennai,
              India on 1st and 3rd Thursday of every month at 7:00 PM. To send
              feedback <a href=".">Click here.</a>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              ><span><i class="bx bx-dna bx-sm p-2" /></span>
              Club details
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              RI DISTRICT 3232 <br />
              Inaugurated on 8th April, 1993 <br />
              Chartered on 18th May, 1993 <br />
              Club ID: 29469
            </div>
          </div>
        </div>
      </div>
    </div>

    <section id="contact-section" class="p-2 m-1 p-md-4 m-md-3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5">
            <h2 class="heading-section">Contact Us</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-12">
            <div class="wrapper">
              <div class="row no-gutters">
                <div class="col-md-7 d-flex align-items-stretch">
                  <div class="contact-wrap w-100 p-md-5 p-4">
                    <h3 class="mb-4">Get in touch</h3>
                    <form
                      id="contactForm"
                      name="contactForm"
                      on:submit|preventDefault={sendForm}
                    >
                    <!-- on:submit|preventDefault={sendForm} -->
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              id="name"
                              bind:value={namev}
                              placeholder="Name"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              id="email"
                              bind:value={emailv}
                              placeholder="Email"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="subject"
                              id="subject"
                              bind:value={subjectv}
                              placeholder="Subject"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <textarea
                              name="message"
                              class="form-control"
                              id="message"
                              bind:value={msgv}
                              cols="30"
                              rows="7"
                              placeholder="Message"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              class="btn btn-primary"
                            />
                            <div class="submitting" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-5 d-flex align-items-stretch text-white">
                  <div class="info-wrap bg-primary w-100 p-3 rounded ">
                    <h3 class="mb-4 mt-md-4">Contact details</h3>
                    <div class="dbox w-100 d-flex align-items-start">
                      <div
                        class="icon d-flex align-items-center justify-content-center"
                      >
                        <span class="bx bx-map-alt bx-sm" />
                      </div>
                      <div class="text ps-3">
                        <p><span>Address:</span> Chennai, Tamil Nadu, India</p>
                      </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div
                        class="icon d-flex align-items-center justify-content-center"
                      >
                        <span class="bx bx-phone bx-sm" />
                      </div>
                      <div class="text ps-3">
                        <p>
                          <span>Phone:</span>
                          <a class="text-white" href="tel://9840732574"
                            >(+91) 9840732574</a
                          >
                        </p>
                      </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div
                        class="icon d-flex align-items-center justify-content-center"
                      >
                        <span class="bx bx-send bx-sm" />
                      </div>
                      <div class="text ps-3 text-wrap">
                        <p>
                          <span>Email:</span>
                          <a
                            href="mailto:admin@rotarymadraschennapatna.org"
                            class="text-white text-break"
                            ><span>admin@rotarymadraschennapatna.org</span></a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
 
</main>
