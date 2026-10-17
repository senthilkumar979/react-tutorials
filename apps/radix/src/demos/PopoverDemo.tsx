import * as Popover from "@radix-ui/react-popover";

export const PopoverDemo = () => (
  <section className="rounded border border-slate-200 bg-white p-4">
    <h2 className="font-medium">Popover</h2>
    <Popover.Root>
      <Popover.Trigger className="mt-3 border border-slate-300 px-3 py-1.5 text-sm">
        Open popover
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="w-56 rounded border border-slate-200 bg-white p-3 text-sm shadow">
          Extra content that stays open until dismissed.
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  </section>
);
