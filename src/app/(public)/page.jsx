import Banner from "@/components/banner/Banner";
import FeaturesSection from "@/components/feature/FeaturesSection";
import QurbaniTips from "@/components/QurbaniTips";
import TopBreeds from "@/components/TopBreeds";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className="flex flex-wrap justify-center gap-6">
        
        <FeaturesSection />
      </div>
      <QurbaniTips></QurbaniTips>
      <TopBreeds></TopBreeds>
    </div>
  );
}
