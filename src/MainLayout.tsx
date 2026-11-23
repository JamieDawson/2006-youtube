import DirectorVideos from "./DirectorVideos";
import FeaturedVideos from "./FeaturedVideos";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <main className="main-content">
        <DirectorVideos />
        <FeaturedVideos />
      </main>

      <Sidebar />
    </div>
  );
};

export default MainLayout;
