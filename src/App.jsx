import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <html>
        <head>
          <title>My</title>
          <link rel="stylesheet" href="style.csss" />
        </head>

        <body>
          <nav>
            <ul class="nav-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li class="notif-dialog_show">
                <a href="#">Notifications</a>
                <div class="dialog-menu-notifications">
                  <ul>
                    <li>All</li>
                    <li>Global</li>
                    <li>Private</li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </body>
      </html>
    </div>
  );
}
