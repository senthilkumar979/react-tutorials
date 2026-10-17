import { AccordionDemo } from "./demos/AccordionDemo";
import { CheckboxSwitchDemo } from "./demos/CheckboxSwitchDemo";
import { DialogDemo } from "./demos/DialogDemo";
import { DropdownDemo } from "./demos/DropdownDemo";
import { PopoverDemo } from "./demos/PopoverDemo";
import { SelectDemo } from "./demos/SelectDemo";
import { TabsDemo } from "./demos/TabsDemo";
import { TooltipDemo } from "./demos/TooltipDemo";

export const App = () => (
  <main className="mx-auto max-w-2xl space-y-4 px-6 py-10">
    <h1 className="text-3xl font-semibold">Radix UI</h1>
    <p className="text-slate-600">
      Unstyled accessible primitives, styled lightly with Tailwind.
    </p>
    <DialogDemo />
    <DropdownDemo />
    <TabsDemo />
    <TooltipDemo />
    <PopoverDemo />
    <AccordionDemo />
    <SelectDemo />
    <CheckboxSwitchDemo />
  </main>
);
