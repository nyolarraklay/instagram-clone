import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl">
      <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
        <div className="">
          <Image
            src="https://thumbs.dreamstime.com/b/print-204012264.jpg"
            alt="Instagram"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>
      <div className="cursor-pointer h-24 w-10 relative flex lg:hidden">
        <div className="">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
            alt="Instagram"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>
      <h1>Instagram</h1>
    </div>
  );
}
