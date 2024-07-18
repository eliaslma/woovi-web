import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface PixQuoteType {
    id: number;
    quote: number;
    quote_value: string;
    total: string;
    cashback?: string;
    cashbackValue?: string;
    bestOption?: boolean;
    total_number: number;
}

interface SelectedOptionContextType {
    selectedOption: PixQuoteType | null;
    setSelectedOption: (option: PixQuoteType | null) => void;
}

const SelectedOptionContext = createContext<SelectedOptionContextType | undefined>(undefined);

export const SelectedOptionProvider = ({ children }: { children: ReactNode }) => {

    const [selectedOption, setSelectedOption] = useState<PixQuoteType | null>(null);

    return (
        <SelectedOptionContext.Provider value={{ selectedOption, setSelectedOption }}>
            {children}
        </SelectedOptionContext.Provider>
    );
};

export const useOption = () => {
    const context = useContext(SelectedOptionContext);
    if (context === undefined) {
        throw new Error('useSelectedOption must be used within a SelectedOptionProvider');
    }
    return context;
};
