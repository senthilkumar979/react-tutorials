import * as Dialog from "@radix-ui/react-dialog";

export const DialogDemo = () => (
  <section className="rounded border border-slate-200 bg-white p-4">
    <h2 className="font-medium">Dialog</h2>
    <Dialog.Root>
      <Dialog.Trigger className="mt-3 bg-slate-900 px-3 py-1.5 text-sm text-white">
        Open dialog
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded bg-white p-6 shadow-lg">
          <Dialog.Title className="text-lg font-medium">Title</Dialog.Title>
          <Dialog.Description className="mt-2 text-slate-600">
            Accessible modal built from Radix primitives.
          </Dialog.Description>
          <Dialog.Close className="mt-4 text-sm text-slate-700 underline">
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </section>
);
