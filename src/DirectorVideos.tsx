const DirectorVideos = () => {
  const videos = [
    {
      title: "Mortal Pee Fight!!!",
      duration: "01:28",
      uploader: "siamgx",
    },
    {
      title: "GrownManTV News 02",
      duration: "08:29",
      uploader: "Chedigitiz",
    },
    {
      title: "A Dedication To My Friends",
      duration: "04:34",
      uploader: "mookie1",
    },
    {
      title: "Save the Internets",
      duration: "04:00",
      uploader: "Politicstv",
    },
  ];

  return (
    <section className="director-videos">
      <h2>Director Videos</h2>

      <div className="director-video-list">
        {videos.map((video) => (
          <div className="director-video-card" key={video.title}>
            <img src="https://placehold.co/100x70" />
            <a href="#">{video.title}</a>
            <p>{video.duration}</p>
            <p>From: {video.uploader}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DirectorVideos;
