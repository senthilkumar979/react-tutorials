import * as Checkbox from "@radix-ui/react-checkbox";
import * as Switch from "@radix-ui/react-switch";

export const CheckboxSwitchDemo = () => (
  <section className="space-y-4 rounded border border-slate-200 bg-white p-4">
    <h2 className="font-medium">Checkbox & Switch</h2>
    <label className="flex items-center gap-2 text-sm">
      <Checkbox.Root
        className="flex h-5 w-5 items-center justify-center border border-slate-400"
        defaultChecked
      >
        <Checkbox.Indicator>✓</Checkbox.Indicator>
      </Checkbox.Root>
      Accept terms
    </label>
    <label className="flex items-center gap-2 text-sm">
      <Switch.Root className="h-6 w-11 rounded-full bg-slate-300 data-[state=checked]:bg-teal-700">
        <Switch.Thumb className="block h-5 w-5 translate-x-0.5 rounded-full bg-white transition data-[state=checked]:translate-x-[22px]" />
      </Switch.Root>
      Notifications
    </label>
  </section>
);
