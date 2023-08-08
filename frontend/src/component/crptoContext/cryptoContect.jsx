import React, { createContext, useContext, useState } from "react";

const CryptoContext = createContext();

export function CryptoProvider({ children }) {
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  return (
    <CryptoContext.Provider value={{ selectedCrypto, setSelectedCrypto }}>
      {children}
    </CryptoContext.Provider>
  );
}

export function useCrypto() {
  return useContext(CryptoContext);
}
