const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section className="broadcast">
        <h2>Broadcast Yourself on YouTube</h2>

        <div className="broadcast-body">
          <div className="broadcast-row">
            <a href="#">Watch</a>
            <p>Instantly find and watch millions of fast streaming videos.</p>
          </div>
          <div className="broadcast-row">
            <a href="#">Upload</a>
            <p>Quickly upload and tag videos in almost any video format.</p>
          </div>
          <div className="broadcast-row">
            <a href="#">Share</a>
            <p>Easily share your videos with family, friends, or co-workers.</p>
          </div>
        </div>
      </section>

      <section className="sidebar-box">
        <h2>Member Login</h2>

        <div className="login-form">
          <div className="login-field">
            <label>User Name:</label>
            <input type="text" />
          </div>

          <div className="login-field">
            <label>Password:</label>
            <input type="password" />
          </div>

          <button>Login</button>
        </div>
      </section>

      <section className="sidebar-box">
        <h2>What's New at YouTube</h2>

        <div className="sidebar-content">
          <p>
            <a href="#">Musicians</a>
            <br />
            Are you a musician? Sign up for our new musician account!
          </p>

          <p>
            <a href="#">We're Hiring!</a>
            <br />
            Sys Admins, Web Developers and Engineers apply within.
          </p>

          <p>
            <a href="#">Explore YouTube</a>
          </p>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
