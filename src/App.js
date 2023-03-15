import { NavBar } from "./components/navBar";
import { InformationGatheringDiv } from "./components/InfoGatheringComponents/infoGatheringDiv";
import { CVLayoutDiv } from "./components/cv-layout/cv-layout-div";
import { Footer } from "./components/footer";

import './style/navbar-style.css';
import './style/general-style.css';
import './style/infoGatheringComponentsStyles/infoGatheringDiv-style.css';
import './style/infoGatheringComponentsStyles/generalInfoDiv-style.css';
import './style/infoGatheringComponentsStyles/personalInfoDiv-style.css';
import './style/cv-layout-styles/cv-layout-style.css';
import './style/cv-layout-styles/cv-layout-div-style.css';
import './style/footer-style.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <InformationGatheringDiv />
      <CVLayoutDiv />
      <Footer />
    </div>
  );
}

export default App;
