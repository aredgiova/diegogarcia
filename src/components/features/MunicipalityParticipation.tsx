"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

type MunicipalityParticipationContextValue = {
  municipality: string;
  setMunicipality: Dispatch<SetStateAction<string>>;
};

const MunicipalityParticipationContext =
  createContext<MunicipalityParticipationContextValue | null>(null);

export function MunicipalityParticipationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [municipality, setMunicipality] = useState("");
  const value = useMemo(
    () => ({ municipality, setMunicipality }),
    [municipality],
  );

  return (
    <MunicipalityParticipationContext.Provider value={value}>
      {children}
    </MunicipalityParticipationContext.Provider>
  );
}

export function useMunicipalityParticipation() {
  const context = useContext(MunicipalityParticipationContext);

  if (!context) {
    throw new Error(
      "useMunicipalityParticipation requires MunicipalityParticipationProvider.",
    );
  }

  return context;
}
