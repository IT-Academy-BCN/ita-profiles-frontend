import React from 'react';

type Profile = {
  nombreCompleto: string;
  profesion: string;
  lenguajes: string[];
  foto: string;
};

const ProfileCard: React.FC<Profile> = ({
  nombreCompleto,
  profesion,
  lenguajes,
  foto,
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4 flex" style={{ width: '65%' }}>
      <div className="flex-shrink-0">
        <img
          src={foto}
          alt={`Foto de ${nombreCompleto}`}
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div className="ml-4">
        <div className="font-bold">{nombreCompleto}</div>
        <div>{profesion}</div>
        <div className="mt-2 text-sm">{lenguajes.join(', ')}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
