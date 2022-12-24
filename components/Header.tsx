import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center">
      <header className="text-center p-4">@co2x5_homecooking</header>
      <img className="w-36 m-4 " alt="Thao Nguyen" src="../Thao.jpg" />
      <Navbar />
    </div>
  )
}