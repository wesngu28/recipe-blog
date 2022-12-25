import Categories from "../components/Categories";
import { Info } from "../components/Info";
import Post from "../components/Post";
import { FilterContextProvider } from "../contexts/FilterProvider";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Info />
      <FilterContextProvider>
        <Categories />
        <Post />
      </FilterContextProvider>
    </div>
  )
}
