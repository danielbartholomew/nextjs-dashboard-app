'use client';

import { createContext, useContext, useState } from 'react';

type FarmField = {
  fieldId: string;
  fieldName: string;
}

type FarmFieldContextType = FarmField & {
  setFieldId: (v: string) => void;
  setFieldName: (v: string) => void;
};

const DEFAULT = {
  fieldId: '1234',
  fieldName: 'West field',
  setFieldId: () => {},
  setFieldName: () => {}
} as FarmFieldContextType;;

const FarmFieldContext = createContext(DEFAULT);

export function useFarmField(){
   return useContext(FarmFieldContext);
}

export default function FarmFieldProvider({ children}: { children: React.ReactNode }) {
  const [fieldId, setFieldId] = useState<string | null>(DEFAULT.fieldId);
  const [fieldName, setFieldName] = useState<string | null>(DEFAULT.fieldName);

  const ctx = {
    fieldId,
    fieldName,
    setFieldId,
    setFieldName,
  } as FarmFieldContextType;
  return (
    <FarmFieldContext.Provider value={ctx}>
      {children}
    </FarmFieldContext.Provider>
  );
}
