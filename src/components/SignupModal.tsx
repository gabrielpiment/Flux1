import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-6xl h-[95vh] mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary to-primary/80">
          <h2 className="text-xl font-semibold text-white">
            Criar Conta - Flux Conversa
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Iframe Container */}
        <div className="h-[calc(100%-4rem)]">
          <iframe
            src="https://crm.fluxconversa.com.br/signup"
            className="w-full h-full border-0"
            title="Criar Conta - Flux Conversa"
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
          />
        </div>
      </div>
    </div>
  );
};