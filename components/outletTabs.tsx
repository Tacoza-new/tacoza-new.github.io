"use client";

import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Fine Dine and Bars",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-rose-500 to-rose-700">
          <p className="text-xl font-bold">Fine Dine and Bars</p>
          <p>
            Elevate your guests' experience with seamless table management,
            custom menu options, and flawless billing. We ensure your service is
            as refined as your cuisine and cocktails, which always impresses
            your patrons.
          </p>
          <DummyContent
            image="https://luxebook.in/wp-content/uploads/2022/07/IsqLiving-2983-copy-scaled.jpg"
            alt="Fine Dine and Bars"
          />
        </div>
      ),
    },
    {
      title: "Food Courts",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-rose-500 to-rose-700">
          <p className="text-xl font-bold">Food Courts</p>
          <p>
            Speed and efficiency are key in food courts, and Tacoza delivers!
            With quick order-taking, smooth payment processing, and real-time
            analytics, you’ll keep queues short and customers happy. 🙂
          </p>
          <DummyContent image="/images/food_courts.jpg" alt="Food Courts" />
        </div>
      ),
    },
    {
      title: "Cloud Kitchen",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-rose-500 to-rose-700">
          <p className="text-xl font-bold">Cloud Kitchen</p>
          <p>
            Manage multiple brands, track inventory, and serve up efficiency
            without ever opening a dining room. Streamline your delivery
            operations with Tacoza’s integrated online order management
            today!{" "}
          </p>
          <DummyContent image="/images/cloud_kitchen.png" alt="Cloud Kitchen" />
        </div>
      ),
    },
    {
      title: "Large Chains",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-rose-500 to-rose-700">
          <p className="text-xl font-bold">Large Chains</p>
          <p>
            Effortlessly manage multiple outlets with centralized controls,
            standardized menus, and real-time reporting. Tacoza ensures your
            brand consistency while scaling operations like a pro.
          </p>
          <DummyContent image="/images/large_chain.png" alt="Large Chains" />
        </div>
      ),
    },
    {
      title: "Bakery",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-rose-500 to-rose-700">
          <p className="text-xl font-bold">Bakery</p>
          <p>
            From pre-orders to point-of-sale billing, Tacoza makes it simple to
            sweeten every customer interaction. Why wait? Track fresh bakes and
            manage your inventory effortlessly.
          </p>
          <DummyContent image="/images/bakery.jpg" alt="Bakery" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <h1 className="text-xl md:text-4xl font-bold mb-4">
        Perfect For Any Restaurant Types
      </h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

type DummyContentProps = {
  image: string;
  alt?: string;
};

const DummyContent = ({ image, alt }: DummyContentProps) => {
  return (
    <img
      src={image}
      alt={alt || "Restaurant Image"}
      width="1000"
      height="1000"
      className="object-cover object-center h-[60%] md:h-[90%] absolute -bottom-24 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
