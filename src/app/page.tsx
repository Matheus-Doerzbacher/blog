import clsx from "clsx";

export default function HomePage() {
  return (
    <h1
      className={clsx(
        "text-bold",
        "text-red-500",
        "hover:text-blue-50",
        "hover:bg-red-500",
        "transition",
        "duration-1000",
        "text-xl"
      )}
    >
      Olá de dentro de page.tsx
    </h1>
  );
}
