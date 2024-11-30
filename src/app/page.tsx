
import ThemeToggle from "../components/ThemeButton";
import MiniCard from "../components/MiniCard";

export default function Home() {
  return (
    <div className="h-lvh flex flex-col justify-center items-center gap-16">
      <ThemeToggle />
      <MiniCard />
    </div>
  );
}
