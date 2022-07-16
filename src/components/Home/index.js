/* eslint-disable jsx-a11y/alt-text */
import './home.scss';

const Home = () => {
  return (
    <div className="page-home">
      <div className="container hero">
       <div className="hero-title">
        <h1>
          A digital <span className="text-lightred"> design</span> agency focused on <span className="text-orange">innovative</span> design, brand strategy and <span className="text-red">excellent</span> customer <span className="text-orange">service</span>.
          </h1>
       </div>
       <section className="hero-showcase">
         <p className="text-featured">Featured Work</p>
         <div className="hero-showcase-container">
           <div className="hero-showcase-item">
             <img className="showcase-img" src="https://images.unsplash.com/photo-1633533446213-a438ff5f0629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1014&q=80" />
             <h5 className="showcase-text">project name</h5>
             <p className="showcase-desc">packaging design | development</p>
           </div>
           <div className="hero-showcase-item">
             <img className="showcase-img" src="https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
             <h5 className="showcase-text">project name</h5>
             <p className="showcase-desc">key art development | strategy</p>
           </div>
           {/* <div className="hero-showcase-item">
             <img className="showcase-img" src="https://images.unsplash.com/photo-1470137237906-d8a4f71e1966?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
             <h5 className="showcase-text">project name</h5>
             <p className="showcase-desc">interactive design | strategy</p>
           </div> */}
           <div className="hero-showcase-item">
             <img className="showcase-img" src="https://images.unsplash.com/photo-1635360381874-edd74cbd57f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
             <h5 className="showcase-text">project name</h5>
             <p className="showcase-desc">production | development | research</p>
           </div>
         </div>
       </section>
       <section className="home-about-container">
         <h5 className="home-about-title">what we do</h5>
         <div className="home-about-box"></div>
         <div className="home-about-list">
           <h2>key art development</h2>
           <h2>packaging design</h2>
           <h2>production</h2>
           <h2>interactive design</h2>
         </div>
       </section>
      </div>
      <section className="home-desc-container">
        <h2>Ideas that <span>influence</span>.</h2>
        <p>In partnership with renowned entertainment companies, we've executed complex digital asset campaigns for worldwide distribution, including localization management and final delivery to partners. We also specialize in traditional design - from key art development and packaging design to production and interactive.</p>
        <button className="btn secondary-btn">Learn more →
        </button>
      </section>
      <section className="home-client-container">
        <div className="home-client-left">
         <h2>clients <i>&</i> partners <i>we've worked with</i>.</h2>
         <button className="btn secondary-btn">View our Clients →
        </button>
        </div>
        <div className="home-client-right">
          <div className="home-client-logo">
          <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" />
          </div>
          <div className="home-client-logo">
            <img src="https://www.freepnglogos.com/uploads/abc-png-logo/news-abc-png-logo-3.png" />
          </div>
          <div className="home-client-logo">
            <img src="https://10stepkoreanskincarekit.com/wp-content/uploads/2021/09/drunk-elephant-logo-company-page-10stepkoreanskincarekit.com_.png" />
          </div>
          <div className="home-client-logo">
            <img src="https://cdn.shopify.com/s/files/1/0515/4589/9157/collections/1.png" />
          </div>
          <div className="home-client-logo">
            <img src="https://www.freepnglogos.com/uploads/youtube-logo-transparent-10.png" />
          </div>
          <div className="home-client-logo">
            <img src="https://1000logos.net/wp-content/uploads/2018/08/Sephora-Logo-768x432.png" />
          </div>
        </div>
      </section>
      <section className="home-contact-container">
        <div className="contact-image-left">
          <img src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=532&q=80" />
        </div>
        <div className="contact-text-center">
          <h5>services</h5>
          <h3>rich media</h3>
          <h3><span>digital distribution</span></h3>
          <h3>advertising</h3>
          <button className="btn secondary-btn">View Services →
        </button>
        </div>
        <div className="contact-image-right">
          <img src="https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        </div>
      </section>
    </div>
  )
}

export default Home;