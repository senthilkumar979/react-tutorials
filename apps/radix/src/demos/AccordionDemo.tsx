import * as Accordion from "@radix-ui/react-accordion";

export const AccordionDemo = () => (
  <section className="rounded border border-slate-200 bg-white p-4">
    <h2 className="mb-3 font-medium">Accordion</h2>
    <Accordion.Root type="single" collapsible className="space-y-2">
      <Accordion.Item value="a" className="border border-slate-200">
        <Accordion.Header>
          <Accordion.Trigger className="w-full px-3 py-2 text-left text-sm font-medium">
            Section A
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-3 pb-3 text-sm text-slate-600">
          Details for A.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="b" className="border border-slate-200">
        <Accordion.Header>
          <Accordion.Trigger className="w-full px-3 py-2 text-left text-sm font-medium">
            Section B
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-3 pb-3 text-sm text-slate-600">
          Details for B.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  </section>
);
