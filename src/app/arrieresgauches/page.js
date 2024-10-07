
"use client";

import React, { useEffect, useState } from 'react';
import PlayerCard from '../components/playerCard'; 
import Image from 'next/image';


const Arrieresgauches = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
  
    // Fonction pour récupérer les données des arrieres gauches 
    useEffect(() => {
      const fetchPlayers = async () => {
        try {
          const response = await fetch('/api/arrieresgauches');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const data = await response.json();
          setPlayers(data);
          setLoading(false);
        } catch (error) {
          console.error('Erreur lors de la récupération des arrieres gauches:', error.message);
        }
      };
  
      fetchPlayers();
    }, []);
  
    if (loading) {
      return <p>Chargement...</p>;
    }
  
    return (
      <div>
        <h1>Liste des meilleurs arrieres-gauches</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {players.map((player, index) => (
            <PlayerCard key={index} player={player} /> 
          ))}
        </div>
      </div>
    );
  };
  
  export default Arrieresgauches;
  