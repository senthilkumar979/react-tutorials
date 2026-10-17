import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signupSchema, type SignupValues } from "./schema";

export const App = () => {
  const [submitted, setSubmitted] = useState<SignupValues | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  function onSubmit(values: SignupValues) {
    setSubmitted(values);
    reset();
  }

  return (
    <main className="mx-auto max-w-md px-6 py-10">
      <h1 className="text-3xl font-semibold">React Hook Form + Zod</h1>
      <p className="mt-2 text-slate-600">
        Schema-first validation via the Zod resolver.
      </p>

      <form
        className="mt-8 space-y-4"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label className="block text-sm">
          Name
          <input
            className="mt-1 w-full border border-slate-300 px-3 py-2"
            {...register("name")}
          />
          {errors.name && (
            <span className="mt-1 block text-sm text-red-700">
              {errors.name.message}
            </span>
          )}
        </label>

        <label className="block text-sm">
          Email
          <input
            type="email"
            className="mt-1 w-full border border-slate-300 px-3 py-2"
            {...register("email")}
          />
          {errors.email && (
            <span className="mt-1 block text-sm text-red-700">
              {errors.email.message}
            </span>
          )}
        </label>

        <label className="block text-sm">
          Password
          <input
            type="password"
            className="mt-1 w-full border border-slate-300 px-3 py-2"
            {...register("password")}
          />
          {errors.password && (
            <span className="mt-1 block text-sm text-red-700">
              {errors.password.message}
            </span>
          )}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-slate-900 py-2.5 text-sm font-medium text-white"
        >
          Sign up
        </button>
      </form>

      {submitted && (
        <pre className="mt-6 overflow-auto rounded bg-slate-900 p-4 text-xs text-emerald-200">
          {JSON.stringify(submitted, null, 2)}
        </pre>
      )}
    </main>
  );
};
