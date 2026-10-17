interface UserCardProps {
  name: string;
  role: string;
}

export const UserCard = ({ name, role }: UserCardProps) => (
  <article className="rounded border border-slate-200 bg-white p-5">
    <h2 className="text-lg font-medium">{name}</h2>
    <p className="mt-1 text-slate-600">{role}</p>
  </article>
);
