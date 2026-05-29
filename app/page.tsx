import Header from "@/components/Header";
import Image from "next/image";
import clsx from "clsx";

export default function Home() {
  return (
    <>
      <header>
        <Header status="OK" />
      </header>
      <div className=" ">
        <h1 className="bg-red-500 text-center h1">test</h1>
        <div className="flex justify-center">
          <div>
            <Image
              className=" object-fill bg-red-400"
              src={"/berry.png"}
              width={300}
              height={600}
              alt="A berry"
            />
            <p>this si a berry</p>
          </div>
          <div>
            <Image
              className=" p-10 rounded-full object-fill bg-red-400"
              src={"/berry.png"}
              width={300}
              height={400}
              alt="A berry"
            />
            <p>this si a berry</p>
          </div>
        </div>
      </div>
    </>
  );
}
