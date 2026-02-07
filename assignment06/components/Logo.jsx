import Image from "next/image"
import Link from "next/link"


const Logo = () => {
  return (
    <div>
        <Link href={'/'}>
            <Image
                className="h-10"
                src={"/lws-kitchen.png"}
                width={100}
                height={24}
            />
        </Link>

    </div>
  )
}

export default Logo