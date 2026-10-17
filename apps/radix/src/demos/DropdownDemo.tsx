import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const DropdownDemo = () => (
  <section className="rounded border border-slate-200 bg-white p-4">
    <h2 className="font-medium">Dropdown menu</h2>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="mt-3 border border-slate-300 px-3 py-1.5 text-sm">
        Options
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-40 rounded border border-slate-200 bg-white p-1 shadow">
          <DropdownMenu.Item className="cursor-pointer rounded px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-slate-100">
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item className="cursor-pointer rounded px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-slate-100">
            Settings
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  </section>
);
