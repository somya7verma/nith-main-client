import Page from './components/sections/header/header31';
import Aboutus from './components/sections/aboutus/aboutus';
import Footer from './components/sections/footer/footer';
import Event from './components/sections/event/event';
import Placement from './components/sections/palcement/placement';
import News from './components/sections/news/news';
import Achieve from './components/sections/achievements/achieve';
import Director from './components/sections/directormessage/director';
import Gallery from './components/sections/gallery/gallery';
import Hero from './components/sections/hero/hero';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header and Hero section */}
      <div className="h-screen flex flex-col">
        <Page />
        <div className="flex-1">
          <Hero />
        </div>
      </div>

      {/* Main content sections */}
      <main>
        <Aboutus />
        <Event />
        <Placement />
        <News />
        <Achieve />
        <Director />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
