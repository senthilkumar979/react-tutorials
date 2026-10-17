import type { ComponentType } from "react";

interface WithLoadingProps {
  isLoading: boolean;
}

export function withLoading<P extends object>(Wrapped: ComponentType<P>) {
  const ComponentWithLoading = ({
    isLoading,
    ...rest
  }: P & WithLoadingProps) => {
    if (isLoading) {
      return (
        <div className="rounded border border-dashed border-slate-300 bg-slate-50 p-6 text-slate-600">
          Loading…
        </div>
      );
    }

    return <Wrapped {...(rest as P)} />;
  };

  ComponentWithLoading.displayName = `withLoading(${Wrapped.displayName ?? Wrapped.name ?? "Component"})`;
  return ComponentWithLoading;
}
