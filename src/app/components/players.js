 "use client";

import Image from 'next/image';
import React from 'react'
import { useEffect, useState } from 'react';
import PlayerCard from './playerCard'; 


const Players = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fonction pour récupérer les données de l'API
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('/api/players');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setPlayers(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des joueurs:', error.message);
      }
    };
    
    fetchPlayers();
  }, []);

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h1>Liste des joueurs avec le numéro 10</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {players.map((player, index) => (
          <PlayerCard key={player.firstName} player={player} />
        
        
        ))}
        </div>
    
    </div>
  );
};

export default Players;

