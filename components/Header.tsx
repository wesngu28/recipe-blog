import Image from "next/image";
import Navbar from "./Navbar";
import thao from "../public/Thao.jpg";

export default function Header() {
  return (
    <>
      <div className="font-poppins p-4 flex justify-center items-center">
        <div className="p-4 flex flex-col">
          <Image className="w-36 m-4 " alt="Thao Nguyen" src={thao} />
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/co2x5_homecooking/"
          >
            @co2x5_homecooking
          </a>
        </div>
        <div className="p-4 flex flex-col">
          <Navbar />
        </div>
      </div>
    </>
  );
}
