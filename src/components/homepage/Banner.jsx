
import { Button } from "@heroui/react";
import { Ubuntu } from "next/font/google";
import Link from "next/link";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const Banner = () => {
  return (
    <div
      className={`${ubuntu.className} bg-[url('/background.jpg')] bg-cover bg-center h-[50vh] flex items-center justify-center rounded-lg my-10 md:my-16 `}
    >
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto py-16 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl text-center ">
            Find Healthy <span className="text-(--accent)">Q</span>urbani
            Animals with Ease
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl text-gray-200 text-center ">
            Browse verified cows, goats, sheep, and buffalo from trusted sellers
            across Bangladesh. Compare prices, check details, and choose the
            perfect animal for your Qurbani safely and conveniently.
          </p>

          <div className="flex gap-4 justify-center ">
            <Link href="/all-animals">
              <Button className="bg-(--accent)">Browse</Button>
            </Link>

            <Link href="#">
              <Button variant="outline" className="text-white bg-(--secondary)">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
