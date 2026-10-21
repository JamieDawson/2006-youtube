import "./App.css";
import Header from "./Header";
import Navigation from "./Navigation";
import SecondaryNav from "./SecondaryNav";
import MainLayout from "./MainLayout";

function App() {
  return (
    <div className="page">
      <Header />
      <Navigation />
      <SecondaryNav />
      <MainLayout />
    </div>
  );
}

export default App;
