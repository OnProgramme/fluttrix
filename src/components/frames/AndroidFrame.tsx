import React from 'react';

const AndroidFrame = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative mx-auto border-gray-700 bg-gray-700 border-[8px] rounded-[2rem] h-[600px] w-[300px]">
        {/* Caméra et haut-parleur */}
        <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 flex items-center gap-2">
          <div className="h-2 w-2 bg-black rounded-full"></div>
          <div className="h-1 w-12 bg-black rounded-full"></div>
        </div>

        {/* Boutons de volume */}
        <div className="h-12 w-[3px] bg-gray-800 absolute -right-[11px] top-20 rounded-r-lg"></div>
        <div className="h-12 w-[3px] bg-gray-800 absolute -right-[11px] top-36 rounded-r-lg"></div>

        {/* Bouton d'alimentation */}
        <div className="h-16 w-[3px] bg-gray-800 absolute -left-[11px] top-28 rounded-l-lg"></div>

        {/* Écran */}
        <div className="rounded-[1.7rem] overflow-hidden w-full h-full bg-white">
          <div className="w-full h-full overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidFrame;