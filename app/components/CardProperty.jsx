import Image from "next/image";
import Link from "next/link";

import CarGarageImg from "../../public/small-icons-for-card/garage.webp";
import BedImg from "../../public/small-icons-for-card/bed.webp";
import ShowerImg from "../../public/small-icons-for-card/shower.webp";
import SofaImg from "../../public/small-icons-for-card/sofa.webp";

const CardProperty = ({
  imgSrc,
  slug,
  date,
  title,
  description,
  bedQty,
  bathQty,
  roomQty,
  carGarageQty,
}) => {
  return (
    <Link href={slug}>
      <article className="flex-col transition-all duration-200 shadow hover:-translate-x-2 hover:-translate-y-2 hover:drop-shadow-xl">
        <div className="overflow-hidden rounded-t-md">
          <Image src={imgSrc} alt={title} className="object-cover h-60" />
        </div>
        <div className="flex flex-col h-full px-5 py-5 space-y-2 bg-white rounded-b-md">
          <h6 className="text-sm font-semibold tracking-widest uppercase text-green-brand">
            Auction: <span className="pl-3 md:pl-1">{date}</span>
          </h6>
          <h4 className="text-2xl font-fraunces">{title}</h4>
          <p className="">{description}</p>
          <div className="flex items-center justify-around md:justify-between">
            <div className="flex items-center py-2 space-x-2 text-lg md:py-0">
              <span className="flex">{bedQty}</span>
              <span className="flex">
                <Image
                  src={BedImg}
                  alt="small image of a bed"
                  width={20}
                  height={20}
                />
              </span>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <span className="flex">{bathQty}</span>
              <span className="flex">
                <Image
                  src={ShowerImg}
                  alt="small image of a shower"
                  width={20}
                  height={20}
                />
              </span>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <span className="flex">{roomQty}</span>
              <span className="flex">
                <Image
                  src={SofaImg}
                  alt="small image for a couch"
                  width={20}
                  height={20}
                />
              </span>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <span className="flex">{carGarageQty}</span>
              <span className="flex">
                <Image
                  src={CarGarageImg}
                  alt="small image of a car garage"
                  width={20}
                  height={20}
                />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CardProperty;
