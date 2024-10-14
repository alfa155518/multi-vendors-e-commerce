import NoDataImg from "@/public/no-data.webp";
import Image from "next/image";
import Link from "next/link";

export default function NoData() {
  return (
    <div className="not-found text-neutralColor_2 text-center flex items-center justify-center flex-col">
      <h1 className="text-5xl text-neutralColor_1"> Not Found Any Products</h1>
      <div className="flex items-center flex-col">
        <Image src={NoDataImg} alt="img" priority className="w-6/12 h-auto" />
        <p className="text-neutralColor_2 -mt-6 text-3xl text-secondaryColor_2">
          uh-oh! Nothing Here...
        </p>
      </div>
      <button className="btn my-12">
        <Link href="/">Return to Home Page</Link>
      </button>
    </div>
  );
}
