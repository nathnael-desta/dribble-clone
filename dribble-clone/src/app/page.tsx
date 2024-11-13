import Navigation from "./components/navigation";
import Front from "./components/front";
import Trending from "./components/trending";
import Items from "./components/items";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="py-14 flex flex-col gap-11">
        <Front />
        <Trending />
        <Items />
      </div>
    </>
  );
}
