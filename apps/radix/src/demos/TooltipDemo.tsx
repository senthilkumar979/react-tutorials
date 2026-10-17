import * as Tooltip from "@radix-ui/react-tooltip";

export const TooltipDemo = () => (
  <section className="rounded border border-slate-200 bg-white p-4">
    <h2 className="font-medium">Tooltip</h2>
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="mt-3 rounded bg-slate-100 px-3 py-1.5 text-sm">
          Hover me
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="rounded bg-slate-900 px-2 py-1 text-xs text-white">
            Helpful hint
            <Tooltip.Arrow className="fill-slate-900" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  </section>
);
