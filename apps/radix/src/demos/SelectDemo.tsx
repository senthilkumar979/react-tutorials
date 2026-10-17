import * as Select from "@radix-ui/react-select";

export const SelectDemo = () => (
  <section className="rounded border border-slate-200 bg-white p-4">
    <h2 className="mb-3 font-medium">Select</h2>
    <Select.Root defaultValue="react">
      <Select.Trigger className="inline-flex items-center gap-2 border border-slate-300 px-3 py-1.5 text-sm">
        <Select.Value />
        <Select.Icon>▾</Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden rounded border border-slate-200 bg-white shadow">
          <Select.Viewport className="p-1">
            <Select.Item
              value="react"
              className="cursor-pointer rounded px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-slate-100"
            >
              <Select.ItemText>React</Select.ItemText>
            </Select.Item>
            <Select.Item
              value="vue"
              className="cursor-pointer rounded px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-slate-100"
            >
              <Select.ItemText>Vue</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  </section>
);
