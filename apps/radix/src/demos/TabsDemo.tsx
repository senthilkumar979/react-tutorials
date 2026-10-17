import * as Tabs from "@radix-ui/react-tabs";

export const TabsDemo = () => (
  <section className="rounded border border-slate-200 bg-white p-4">
    <h2 className="mb-3 font-medium">Tabs</h2>
    <Tabs.Root defaultValue="one">
      <Tabs.List className="flex gap-2 border-b border-slate-200">
        <Tabs.Trigger
          value="one"
          className="border-b-2 border-transparent px-3 py-2 text-sm data-[state=active]:border-teal-700"
        >
          One
        </Tabs.Trigger>
        <Tabs.Trigger
          value="two"
          className="border-b-2 border-transparent px-3 py-2 text-sm data-[state=active]:border-teal-700"
        >
          Two
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="one" className="pt-3 text-sm text-slate-700">
        First panel
      </Tabs.Content>
      <Tabs.Content value="two" className="pt-3 text-sm text-slate-700">
        Second panel
      </Tabs.Content>
    </Tabs.Root>
  </section>
);
