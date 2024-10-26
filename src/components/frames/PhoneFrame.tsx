import {FC, ReactNode} from "react";
import {twMerge} from "tailwind-merge";

export enum FrameType {
    android = 'android', ios = 'ios'
}

interface OwnProps {
    children?: ReactNode;
    type?: FrameType;
    baseWidth?: number;
    safeArray?: boolean;
}


const PhoneFrame: FC<OwnProps> =
    ({
         children, type,
         baseWidth = 300,
         safeArray = true,
     }) => {

        const height = baseWidth * 2;
        const iosBezelWidth = Math.round(baseWidth * 0.025);
        const androidBezelWidth = Math.round(baseWidth * 0.025);
        const bezelWidth = type === FrameType.ios ? iosBezelWidth : androidBezelWidth;

        // Styles communs
        const containerStyle = {
            '--phone-width': `${baseWidth}px`,
            '--phone-height': `${height}px`,
            '--bezel-width': `${bezelWidth}px`,
        } as never;


        if (type === 'ios') {
            return (
                <div style={containerStyle} className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                    <div
                        className="relative mx-auto border-gray-800 bg-gray-800 rounded-[2.5rem] h-[var(--phone-height)] w-[var(--phone-width)]"
                        style={{borderWidth: 'var(--bezel-width)'}}
                    >
                        {/* Boutons de volume */}
                        <div
                            className="h-[calc(var(--phone-width)*0.107)] w-[calc(var(--bezel-width)*0.21)] bg-gray-800 absolute -left-[calc(var(--bezel-width)*1.21)] top-[calc(var(--phone-width)*0.24)] rounded-l-lg"></div>
                        <div
                            className="h-[calc(var(--phone-width)*0.153)] w-[calc(var(--bezel-width)*0.21)] bg-gray-800 absolute -left-[calc(var(--bezel-width)*1.21)] top-[calc(var(--phone-width)*0.413)] rounded-l-lg"></div>
                        <div
                            className="h-[calc(var(--phone-width)*0.153)] w-[calc(var(--bezel-width)*0.21)] bg-gray-800 absolute -left-[calc(var(--bezel-width)*1.21)] top-[calc(var(--phone-width)*0.593)] rounded-l-lg"></div>

                        {/* Bouton power */}
                        <div
                            className="h-[calc(var(--phone-width)*0.213)] w-[calc(var(--bezel-width)*0.21)] bg-gray-800 absolute -right-[calc(var(--bezel-width)*1.21)] top-[calc(var(--phone-width)*0.473)] rounded-r-md"></div>

                        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
                            {/* Encoche */}
                            <div className="absolute top-0 inset-x-0">
                                <div
                                    className="relative mx-auto bg-gray-800 h-[calc(var(--phone-width)*0.05)] w-[calc(var(--phone-width)*0.5)] rounded-b-[1.5rem]"></div>
                            </div>
                            {/* Contenu */}
                            <div className={
                                twMerge(
                                    "w-full h-full overflow-y-auto hideScrollbar",
                                    safeArray ? "pt-[calc(var(--phone-width)*0.083)]" : ""
                                )
                            }>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div style={containerStyle} className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                <div
                    className="relative mx-auto border-black bg-black rounded-[2rem] h-[var(--phone-height)] w-[var(--phone-width)]"
                    style={{borderWidth: 'var(--bezel-width)'}}
                >
                    {/* Fine bordure d'écran noire */}
                    <div className="absolute inset-0 rounded-[1.8rem] border border-gray-800"></div>

                    {/* Caméra punch hole */}
                    <div className="absolute top-[calc(var(--phone-width)*0.02)] left-1/2 transform -translate-x-1/2">
                        <div className="relative">
                            <div
                                className="h-[calc(var(--phone-width)*0.025)] w-[calc(var(--phone-width)*0.025)] bg-black rounded-full">
                                <div className="absolute inset-[15%] bg-gray-900 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Boutons de volume (côté droit) */}
                    <div
                        className="h-[calc(var(--phone-width)*0.15)] w-[calc(var(--bezel-width)*0.8)]
                     bg-gray-900 absolute -right-[calc(var(--bezel-width)*1.2)] 
                     top-[calc(var(--phone-width)*0.15)] rounded-r-md">
                    </div>

                    {/* Bouton power (côté droit, sous les boutons de volume) */}
                    <div
                        className="h-[calc(var(--phone-width)*0.15)] w-[calc(var(--bezel-width)*0.8)]
                     bg-gray-900 absolute -right-[calc(var(--bezel-width)*1.2)] 
                     top-[calc(var(--phone-width)*0.35)] rounded-r-md">
                    </div>

                    {/* Écran */}
                    <div className="rounded-[1.8rem] overflow-hidden w-full h-full bg-white">
                        {/* Zone de statut en haut pour la caméra */}
                        {safeArray && <div className="w-full h-[calc(var(--phone-width)*0.04)] bg-white"></div>}

                        {/*Contenu */}
                        <div className={
                            twMerge(
                                "w-full overflow-y-auto bg-red-500",
                                safeArray ? 'h-[calc(100%-var(--phone-width)*0.04)]' : 'h-full'
                            )
                        }>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default PhoneFrame;