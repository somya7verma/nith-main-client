import Header31 from './components/header3';
import Aboutus from './homepage/aboutus/aboutus';
import Footer from './components/footer';
import Event from './homepage/event/event';
import Placement from './homepage/palcement/placement';
import News from './homepage/news/news';
import Achieve from './homepage/achievements/achieve';
import Director from './homepage/directormessage/director';
import Gallery from './homepage/gallery/gallery';
import Hero from './homepage/hero/hero';
import Academics from './homepage/academics/page';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Header and Hero section */}
      <div className="h-full flex flex-col">
        <div className="absolute top-0 left-0 w-screen z-50">
          <Header31 />
        </div>
        <div className="flex-1 relative z-0">
          <Hero />
        </div>
      </div>

      {/* Main content sections */}
      <main>
        <div className="flex flex-row  ">
          <section id="events" className="flex-1">
            <Event />
          </section>
          <section className="flex-1">
            <Academics></Academics>
          </section>
        </div>

        <section id="news">
          <News />
        </section>
        {/* About Us section */}
        <section id="aboutus">
          <Aboutus />
        </section>
        <section id="placement">
          <Placement />
        </section>
        {/* Placement and Event sections */}

        {/* News section */}

        {/* Achievements section */}
        <section id="achievements">
          <Achieve />
        </section>

        {/* Director's message */}
        <section id="director">
          <Director />
        </section>

        {/* Gallery section */}
        <section id="gallery">
          <Gallery />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
