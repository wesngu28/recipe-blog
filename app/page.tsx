import Categories from "../components/Categories";
import Post from "../components/Post";
import { FilterContextProvider } from "../contexts/FilterProvider";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <FilterContextProvider>
        <Categories />
        <Post />
      </FilterContextProvider>
    </div>
  )
}
