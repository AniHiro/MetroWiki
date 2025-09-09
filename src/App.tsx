import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import Home from "./pages/Home";
import EntityView from "./pages/EntityView";
import GamePage from "./pages/GamePage";
import GameMonster2033 from "./pages/GameMonster2033";
import GameStory2033 from "./pages/GameStory2033";
import GameEquipment from "./pages/GameEquipment";
import GameWeapon2033 from "./pages/GameWeapon2033";
import GameAchievements2033 from "./pages/GameAchievements2033";
import GameNotes2033 from "./pages/GameNotes2033";
import GameBoxes2033 from "./pages/GameBoxes2033"
import CharactersPage from "./pages/CharactersPage";
import CharacterPage from "./components/CharacterPage";
 
import GameMetro2033 from "./pages/GameMetro2033";
import GameMetroLastLight from "./pages/GameMetroLastLight";
import GameMetroExodus from "./pages/GameMetroExodus"


import React from 'react';

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entity/:id" element={<EntityView />} />
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="/game/metro-2033/monsters" element={<GameMonster2033 />} />
          <Route path="/game/metro-2033/story" element={<GameStory2033 />} />
          <Route path="/game/metro-2033/equipment" element={<GameEquipment />} />
          <Route path="/game/metro-2033/weapon" element={<GameWeapon2033 />} />
          <Route path="/game/metro-2033/achievements" element={<GameAchievements2033 />} />
          <Route path="/game/metro-2033/notes" element={<GameNotes2033 />} />
          <Route path="/game/metro-2033/boxes" element={<GameBoxes2033 />} />

          <Route path="/game/metro-2033/characters" element={<CharactersPage />} />
          <Route path="/game/metro-2033/characters/:id" element={<CharacterPage />} />


          <Route path="/game/metro-2033/main2033" element={<GameMetro2033 />} />
          <Route path="/game/metro-last-light" element={<GameMetroLastLight />} />
          <Route path="/game/metro-exodus" element={<GameMetroExodus />} />
          
        </Routes>
      </main>
    </Router>
  );
}
