import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PlayerCard = ({ player }) => {
  const { firstName, lastName, birthDate, nationalTeam, matches, goals, photo, flag } = player;

  return (
    <motion.div
      className="bg-teal-200 m-8 rounded-lg shadow-md overflow-hidden w-64"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 w-64">
        <Image
          src={photo}
          alt={`${firstName} ${lastName}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{`${firstName} ${lastName}`}</h2>
        <p className="text-sm text-blue-600 mb-1">Date de naissance : {birthDate}</p>
        <p className="text-sm text-gray-600 mb-1">Matches : {matches}</p>
        <p className="text-sm text-gray-600 mb-3">Goals : {goals}</p>
        <div className="flex items-center">
          <Image
            src={flag}
            alt={`Drapeau de ${nationalTeam}`}
            width={24}
            height={16}
            className="rounded"
          />
          <span className="ml-2 text-sm font-medium">{nationalTeam}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PlayerCard;

