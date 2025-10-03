import React, { useState } from "react";
import SpeciesSelector from "./components/SpeciesSelector";
import SpritePreview from "./components/SpritePreview";
import StatsPanel from "./components/StatsPanel";
import MovesPanel from "./components/MovesPanel";
import TrainerPanel from "./components/TrainerPanel";
import JSONOutput from "./components/JSONOutput";

export default function App() {
  const [pokemon, setPokemon] = useState({
    species: null,
    form: null,
    shiny: false,
    level: 50,
    nature: "",
    ability: "",
    ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
    evs: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    moves: ["", "", "", ""],
    availableMoves: [],
    nickname: "",
    trainer: "",
    otId: "",
    ball: "Poké Ball",
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-3xl font-bold text-center mb-6">Pokémon Generator</header>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <SpeciesSelector pokemon={pokemon} setPokemon={setPokemon} />
          <SpritePreview pokemon={pokemon} />
        </div>
        <StatsPanel pokemon={pokemon} setPokemon={setPokemon} />
        <div className="space-y-4">
          <MovesPanel pokemon={pokemon} setPokemon={setPokemon} />
          <TrainerPanel pokemon={pokemon} setPokemon={setPokemon} />
        </div>
      </div>
      <div className="mt-6">
        <JSONOutput pokemon={pokemon} />
      </div>
    </div>
  );
}