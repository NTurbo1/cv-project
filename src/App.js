import { NavBar } from "./components/navBar";
import { InformationGatheringDiv } from "./components/InfoGatheringComponents/infoGatheringDiv";
import { CVLayoutDiv } from "./components/cv-layout/cv-layout-div";
import { Footer } from "./components/footer";

import './styles/navbar-style.css';
import './styles/general-style.css';
import './styles/infoGatheringComponentsStyles/infoGatheringDiv-style.css';
import './styles/infoGatheringComponentsStyles/generalInfoDiv-style.css';
import './styles/infoGatheringComponentsStyles/personalInfoDiv-style.css';
import './styles/cv-layout-styles/cv-layout-style.css';
import './styles/cv-layout-styles/cv-layout-div-style.css';
import './styles/footer-style.css';

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
