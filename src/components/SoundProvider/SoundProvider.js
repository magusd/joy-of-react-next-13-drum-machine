'use client';
import React from 'react';

export const SoundContext = React.createContext();

function SoundProvider({ children }) {
    const [soundEnabled, setSoundEnabled] = React.useState(false);

    return (
        <SoundContext.Provider
            value={{
                soundEnabled,
                setSoundEnabled
            }}
        >
            {children}
        </SoundContext.Provider>
    );
}

export default SoundProvider;