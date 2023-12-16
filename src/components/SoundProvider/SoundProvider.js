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

export function useSoundEnabled() {
    const data = React.useContext(SoundContext);
    if (!data) {
        throw new Error(
            'useSoundEnabled must be used within a SoundProvider'
        );
    }
    return data;
}

export default SoundProvider;