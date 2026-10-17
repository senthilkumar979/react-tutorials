interface BombProps {
  shouldExplode: boolean;
}

export const Bomb = ({ shouldExplode }: BombProps) => {
  if (shouldExplode) {
    throw new Error("Boom! Intentional render error for the lesson.");
  }

  return (
    <div className="rounded border border-emerald-200 bg-emerald-50 p-5 text-emerald-900">
      Panel is healthy. Click the button below to throw during render.
    </div>
  );
};
