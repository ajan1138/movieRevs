import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.jpeg";

function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        quality={100}
        height="70"
        width="70"
        alt="The Wild Oasis logo"
      />
    </Link>
  );
}

export default Logo;
