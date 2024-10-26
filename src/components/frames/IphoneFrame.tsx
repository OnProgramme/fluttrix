import React from 'react';

const IphoneFrame = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
          {/* Encoche de l'iPhone */}
          <div className="absolute top-0 inset-x-0">
            <div className="relative mx-auto bg-gray-800 h-[25px] w-[150px] rounded-b-[1.5rem]"></div>
          </div>

          {/* Contenu de l'application */}
          <div className="w-full h-full pt-[25px] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IphoneFrame;