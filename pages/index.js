import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        {/*
- #SIDEBAR
    */}
        <aside className="sidebar" data-sidebar="">
          <div className="sidebar-info">
            <figure className="avatar-box">
              <Image
                src="./assets/images/my-avatar.png"
                alt="Nicolas Flake"
                width={80}
                height={140}
              />
            </figure>
            <div className="info-content">
              <h1 className="name" title="Nicolas Flake">
                Nicolas Flake
              </h1>
              <p className="title">Data Scientist</p>
            </div>
            <button className="info_more-btn" data-sidebar-btn="">
              <span>Show Contacts</span>
              <ion-icon name="chevron-down" />
            </button>
          </div>
          <div className="sidebar-info_more">
            <div className="separator" />
            <ul className="contacts-list">
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="mail-outline" />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Email</p>
                  <a href="mailto:nicflake@gmail.com" className="contact-link">
                    nicflake@gmail.com
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="phone-portrait-outline" />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Phone</p>
                  <a href="tel:+491706136051" className="contact-link">
                    +49 170 6136051
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="calendar-outline" />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Birthday</p>
                  <time dateTime="1999-02-19">February 19, 1999</time>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="location-outline" />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Location</p>
                  <address>Vienna, Austria</address>
                </div>
              </li>
            </ul>
            <div className="separator" />
            <ul className="social-list">
              <li className="social-item">
                <a
                  href="https://www.linkedin.com/in/nicolas-flake/"
                  className="social-link"
                >
                  <ion-icon name="logo-linkedin" />
                </a>
              </li>
              <li className="social-item">
                <a href="https://github.com/Fabiaho" className="social-link">
                  <ion-icon name="logo-github" />
                </a>
              </li>
            </ul>
          </div>
        </aside>
        {/*
- #main-content
    */}
        <div className="main-content">
          {/*
  - #NAVBAR
*/}
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item">
                <button className="navbar-link  active" data-nav-link="">
                  About
                </button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link="">
                  Resume
                </button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link="">
                  Portfolio
                </button>
              </li>
            </ul>
          </nav>
          {/*
  - #ABOUT
*/}
          <article className="about  active" data-page="about">
            <header>
              <h2 className="h2 article-title">About me</h2>
            </header>
            <section className="about-text">
              <p>I'm a Data Scientist based in Vienna, Austria.</p>
              <p>I like numbers.</p>
            </section>
            {/*
    - service
  */}
            <section className="service">
              <h3 className="h3 service-title">What i'm doing</h3>
              <ul className="service-list">
                <li className="service-item">
                  <div className="service-icon-box">
                    <Image
                      src="./assets/images/icon-design.svg
          "
                      alt="design icon"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Web design</h4>
                    <p className="service-item-text">
                      The most modern and high-quality design made at a
                      professional level.
                    </p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-icon-box">
                    <Image
                      src="./assets/images/icon-dev.svg"
                      alt="Web development icon"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Web development</h4>
                    <p className="service-item-text">
                      High-quality development of sites at the professional
                      level.
                    </p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-icon-box">
                    <Image
                      src="./assets/images/icon-app.svg"
                      alt="mobile app icon"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Mobile apps</h4>
                    <p className="service-item-text">
                      Professional development of applications for iOS and
                      Android.
                    </p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-icon-box">
                    <Image
                      src="./assets/images/icon-photo.svg"
                      alt="camera icon"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Photography</h4>
                    <p className="service-item-text">
                      I make high-quality photos of any category at a
                      professional level.
                    </p>
                  </div>
                </li>
              </ul>
            </section>
          </article>
          {/*
  - #RESUME
*/}
          <article className="resume" data-page="resume">
            <header>
              <h2 className="h2 article-title">Resume</h2>
            </header>
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <ion-icon name="book-outline" />
                </div>
                <h3 className="h3">Education</h3>
              </div>
              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    University school of the arts
                  </h4>
                  <span>2007 — 2008</span>
                  <p className="timeline-text">
                    Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                    delenit atque corrupti, quos dolores et quas molestias
                    exceptur.
                  </p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    New york academy of art
                  </h4>
                  <span>2006 — 2007</span>
                  <p className="timeline-text">
                    Ratione voluptatem sequi nesciunt, facere quisquams facere
                    menda ossimus, omnis voluptas assumenda est omnis..
                  </p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    High school of art and design
                  </h4>
                  <span>2002 — 2004</span>
                  <p className="timeline-text">
                    Duis aute irure dolor in reprehenderit in voluptate, quila
                    voluptas mag odit aut fugit, sed consequuntur magni dolores
                    eos.
                  </p>
                </li>
              </ol>
            </section>
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <ion-icon name="book-outline" />
                </div>
                <h3 className="h3">Experience</h3>
              </div>
              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Creative director</h4>
                  <span>2015 — Present</span>
                  <p className="timeline-text">
                    Nemo enim ipsam voluptatem blanditiis praesentium voluptum
                    delenit atque corrupti, quos dolores et qvuas molestias
                    exceptur.
                  </p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Art director</h4>
                  <span>2013 — 2015</span>
                  <p className="timeline-text">
                    Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                    delenit atque corrupti, quos dolores et quas molestias
                    exceptur.
                  </p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Web designer</h4>
                  <span>2010 — 2013</span>
                  <p className="timeline-text">
                    Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                    delenit atque corrupti, quos dolores et quas molestias
                    exceptur.
                  </p>
                </li>
              </ol>
            </section>
            <section className="skill">
              <h3 className="h3 skills-title">My skills</h3>
              <ul className="skills-list content-card">
                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Web design</h5>
                    <data value={80}>80%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "80%" }}
                    />
                  </div>
                </li>
                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Graphic design</h5>
                    <data value={70}>70%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "70%" }}
                    />
                  </div>
                </li>
                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Branding</h5>
                    <data value={90}>90%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "90%" }}
                    />
                  </div>
                </li>
                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">WordPress</h5>
                    <data value={50}>50%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "50%" }}
                    />
                  </div>
                </li>
              </ul>
            </section>
          </article>
          {/*
  - #PORTFOLIO
*/}
          <article className="portfolio" data-page="portfolio">
            <header>
              <h2 className="h2 article-title">Portfolio</h2>
            </header>
            <section className="projects">
              <ul className="filter-list">
                <li className="filter-item">
                  <button className="active" data-filter-btn="">
                    All
                  </button>
                </li>
                <li className="filter-item">
                  <button data-filter-btn="">Web design</button>
                </li>
                <li className="filter-item">
                  <button data-filter-btn="">Applications</button>
                </li>
                <li className="filter-item">
                  <button data-filter-btn="">Web development</button>
                </li>
              </ul>
              <div className="filter-select-box">
                <button className="filter-select" data-select="">
                  <div className="select-value" data-selecct-value="">
                    Select category
                  </div>
                  <div className="select-icon">
                    <ion-icon name="chevron-down" />
                  </div>
                </button>
                <ul className="select-list">
                  <li className="select-item">
                    <button data-select-item="">All</button>
                  </li>
                  <li className="select-item">
                    <button data-select-item="">Web design</button>
                  </li>
                  <li className="select-item">
                    <button data-select-item="">Applications</button>
                  </li>
                  <li className="select-item">
                    <button data-select-item="">Web development</button>
                  </li>
                </ul>
              </div>
              <ul className="project-list">
                <li
                  className="project-item  active"
                  data-filter-item=""
                  data-category="web development"
                >
                  <a href="#">
                    <figure className="project-Image">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline" />
                      </div>
                      <Image
                        src="./assets/images/project-1.jpg"
                        alt="finance"
                        loading="lazy"
                        width={40}
                        height={40}
                      />
                    </figure>
                    <h3 className="project-title">Finance</h3>
                    <p className="project-category">Web development</p>
                  </a>
                </li>
                <li
                  className="project-item  active"
                  data-filter-item=""
                  data-category="web development"
                >
                  <a href="#">
                    <figure className="project-Image">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline" />
                      </div>
                      <Image
                        src="./assets/images/project-2.png"
                        alt="orizon"
                        loading="lazy"
                        width={40}
                        height={40}
                      />
                    </figure>
                    <h3 className="project-title">Orizon</h3>
                    <p className="project-category">Web development</p>
                  </a>
                </li>
                <li
                  className="project-item  active"
                  data-filter-item=""
                  data-category="web design"
                >
                  <a href="#">
                    <figure className="project-Image">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline" />
                      </div>
                      <Image
                        src="./assets/images/project-3.jpg"
                        alt="fundo"
                        loading="lazy"
                        width={40}
                        height={40}
                      />
                    </figure>
                    <h3 className="project-title">Fundo</h3>
                    <p className="project-category">Web design</p>
                  </a>
                </li>
                <li
                  className="project-item  active"
                  data-filter-item=""
                  data-category="applications"
                >
                  <a href="#">
                    <figure className="project-Image">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline" />
                      </div>
                      <Image
                        src="./assets/images/project-4.png"
                        alt="brawlhalla"
                        loading="lazy"
                        width={40}
                        height={40}
                      />
                    </figure>
                    <h3 className="project-title">Brawlhalla</h3>
                    <p className="project-category">Applications</p>
                  </a>
                </li>
                <li
                  className="project-item  active"
                  data-filter-item=""
                  data-category="web design"
                >
                  <a href="#">
                    <figure className="project-Image">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline" />
                      </div>
                      <Image
                        src="./assets/images/project-5.png"
                        alt="dsm."
                        loading="lazy"
                        width={40}
                        height={40}
                      />
                    </figure>
                    <h3 className="project-title">DSM.</h3>
                    <p className="project-category">Web design</p>
                  </a>
                </li>
                <li
                  className="project-item  active"
                  data-filter-item=""
                  data-category="web design"
                >
                  <a href="#">
                    <figure className="project-Image">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline" />
                      </div>
                      <Image
                        src="./assets/images/project-6.png"
                        alt="metaspark"
                        loading="lazy"
                        width={40}
                        height={40}
                      />
                    </figure>
                    <h3 className="project-title">MetaSpark</h3>
                    <p className="project-category">Web design</p>
                  </a>
                </li>
                <li
                  className="project-item  active"
                  data-filter-item=""
                  data-category="web development"
                >
                  <a href="#">
                    <figure className="project-Image">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline" />
                      </div>
                      <Image
                        src="./assets/images/project-7.png"
                        alt="summary"
                        loading="lazy"
                        width={250}
                        height={200}
                      />
                    </figure>
                    <h3 className="project-title">Summary</h3>
                    <p className="project-category">Web development</p>
                  </a>
                </li>
                <li
                  className="project-item  active"
                  data-filter-item=""
                  data-category="applications"
                >
                  <a href="#">
                    <figure className="project-Image">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline" />
                      </div>
                      <Image
                        src="./assets/images/project-8.jpg"
                        alt="task manager"
                        loading="lazy"
                        width={250}
                        height={200}
                      />
                    </figure>
                    <h3 className="project-title">Task Manager</h3>
                    <p className="project-category">Applications</p>
                  </a>
                </li>
                <li
                  className="project-item  active"
                  data-filter-item=""
                  data-category="web development"
                >
                  <a href="#">
                    <figure className="project-Image">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline" />
                      </div>
                      <Image
                        src="./assets/images/project-9.png"
                        alt="arrival"
                        loading="lazy"
                        width={250}
                        height={200}
                      />
                    </figure>
                    <h3 className="project-title">Arrival</h3>
                    <p className="project-category">Web development</p>
                  </a>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
