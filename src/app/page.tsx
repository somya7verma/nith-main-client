import Page from './components/header31';
import Aboutus from './homepage/aboutus/aboutus';
import Footer from './components/footer';
import Event from './homepage/event/event';
import Placement from './homepage/palcement/placement';
import News from './homepage/news/news';
import Achieve from './homepage/achievements/achieve';
import Director from './homepage/directormessage/director';
import Gallery from './homepage/gallery/gallery';
import Hero from './homepage/hero/hero';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Header and Hero section */}
      <div className="h-full flex flex-col">
        <div className="sticky top-0 left-0 w-screen">
          <Page />
        </div>
        <div className="flex-1 relative z-0">
          <Hero />
        </div>
      </div>

      {/* Main content sections */}
      <main>
        {/* About Us section */}
        <Aboutus />
        <Event />
        <Placement />

        <News />
        {/* Placement and Event sections */}

        {/* News section */}

        {/* Achievements section */}
        <Achieve />

        {/* Director's message */}
        <Director />

        {/* Gallery section */}
        <Gallery />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
