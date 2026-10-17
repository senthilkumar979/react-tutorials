import { useState } from "react";
import { Modal } from "./Modal";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="mx-auto max-w-lg px-6 py-10">
      <h1 className="text-3xl font-semibold">Portals</h1>
      <p className="mt-2 text-slate-600">
        The modal renders into <code>document.body</code>, so it escapes this
        clipped box.
      </p>

      <div className="relative mt-8 h-40 overflow-hidden rounded border border-slate-300 bg-slate-100 p-4">
        <p className="text-sm text-slate-600">
          Parent has <code>overflow: hidden</code>. A normal absolute modal
          would be clipped here.
        </p>
        <button
          type="button"
          className="mt-4 bg-slate-900 px-3 py-1.5 text-sm text-white"
          onClick={() => setIsOpen(true)}
        >
          Open portal modal
        </button>
        <Modal
          isOpen={isOpen}
          title="Rendered via portal"
          onClose={() => setIsOpen(false)}
        >
          This dialog is attached to <code>document.body</code>, not the clipped
          parent.
        </Modal>
      </div>
    </main>
  );
};
