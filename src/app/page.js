import Image from "next/image";
import Players from "./components/players";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <h1>Bienvenue sur le site des meilleurs dix selon Redondo Riad </h1>
          <Players />
    </div>
  );
}
