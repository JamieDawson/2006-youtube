import DirectorVideos from "./DirectorVideos";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <main className="main-content">
        <DirectorVideos />
      </main>

      <aside className="sidebar">
        <h2>Broadcast Yourself</h2>
      </aside>
    </div>
  );
};

export default MainLayout;
