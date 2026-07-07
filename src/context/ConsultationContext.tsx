import React, { useCallback, useState, createContext, useContext } from 'react';
import { ConsultationModal } from '../components/ConsultationModal';
interface ConsultationContextValue {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}
const ConsultationContext = createContext<ConsultationContextValue | undefined>(
  undefined
);
export function ConsultationProvider({
  children


}: {children: React.ReactNode;}) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return (
    <ConsultationContext.Provider
      value={{
        open,
        close,
        isOpen
      }}>
      
      {children}
      <ConsultationModal isOpen={isOpen} onClose={close} />
    </ConsultationContext.Provider>);

}
export function useConsultation() {
  const ctx = useContext(ConsultationContext);
  if (!ctx) {
    throw new Error(
      'useConsultation must be used within a ConsultationProvider'
    );
  }
  return ctx;
}