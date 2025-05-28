import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import RecentProperties from "@/components/RecentProperties";
import connectDB from "@/config/database";

async function Home() {
  await connectDB();
  return (
    <>
      <Hero />
      <InfoBoxes />
      <RecentProperties />
    </>
  );
}

export default Home;
