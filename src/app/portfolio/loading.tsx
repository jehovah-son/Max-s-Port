import Image from "next/image";
import Spinner from "../../../public/spinner.svg";

/**
 * A component that displays a loading message.
 */
export default function Loading() {
  // Return a div that displays a loading message.
  return (
    <div className="justify-center flex items-center">
      <Image
        src={Spinner}
        alt="spinner"
        className="animate-spin"
        width={40}
        height={40}
      />
    </div>
  );
}
