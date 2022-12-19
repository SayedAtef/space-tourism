import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DestinationMoon from "./pages/destination/DestinationMoon";
import DestinationMars from "./pages/destination/DestinationMars";
import DestinationEuropa from "./pages/destination/DestinationEuropa";
import DestinationTitan from "./pages/destination/DestinationTitan";
import CrewCommander from "./pages/crew/CrewCommander";
import CrewSpecialist from "./pages/crew/CrewSpecialist";
import CrewPilot from "./pages/crew/CrewPilot";
import CrewEngineer from "./pages/crew/CrewEngineer";
import TechnologyVehicle from "./pages/technology/TechnologyVehicle";
import TechnologySpaceport from "./pages/technology/TechnologySpaceport";
import TechnologyCapsule from "./pages/technology/TechnologyCapsule";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moon" element={<DestinationMoon />} />
        <Route path="/mars" element={<DestinationMars />} />
        <Route path="/europa" element={<DestinationEuropa />} />
        <Route path="/titan" element={<DestinationTitan />} />
        <Route path="/commander" element={<CrewCommander />} />
        <Route path="/mission-specialist" element={<CrewSpecialist />} />
        <Route path="/pilot" element={<CrewPilot />} />
        <Route path="/flight-engineer" element={<CrewEngineer />} />
        <Route path="/vehicle" element={<TechnologyVehicle />} />
        <Route path="/spaceport" element={<TechnologySpaceport />} />
        <Route path="/capsule" element={<TechnologyCapsule />} />
      </Routes>
    </Router>
  );
}

export default App;
