import NotFoundImg from "@/public/not-found.webp";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found text-neutralColor_2 text-center flex items-center justify-center flex-col">
      <h1 className="text-5xl text-neutralColor_1">404 - Page Not Found</h1>
      <div className="flex items-center flex-col">
        <Image src={NotFoundImg} alt="img" priority className="w-6/12 h-auto" />
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
