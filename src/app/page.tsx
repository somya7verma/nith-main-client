import LatestEventsSection from '@/components/home/LatestEventsSection';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-12 px-6 sm:px-12 md:px-20 mx-4 sm:mx-8 md:mx-auto bg-foreground text-accent border-2 border-accent rounded-lg text-center">
        <p className="text-lg sm:text-xl md:text-2xl font-medium">
          NIT Hamirpur portal is under construction.
          <br />
          Please visit again later.
        </p>
      </div>

      <LatestEventsSection />
    </>
  );
}
