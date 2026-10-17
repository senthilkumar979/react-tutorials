export const DelayedPanel = () => (
  <div className="rounded border border-amber-200 bg-amber-50 p-5">
    <h2 className="font-medium text-amber-900">Delayed panel</h2>
    <p className="mt-2 text-sm text-amber-800">
      Module waited 1.5s before resolving so Suspense fallback is visible.
    </p>
  </div>
);
