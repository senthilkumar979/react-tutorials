import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, title, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="portal-modal-title"
        className="w-full max-w-md rounded bg-white p-6 shadow-xl"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="portal-modal-title" className="text-lg font-medium">
            {title}
          </h2>
          <button
            type="button"
            className="text-slate-500 hover:text-slate-800"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="mt-3 text-slate-700">{children}</div>
      </div>
    </div>,
    document.body,
  );
};
