import { Card } from "@heroui/react";
import { BiLeaf } from "react-icons/bi";
import { BsShieldCheck, BsTruck } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaUserShield className="w-6 h-6" />,
    value: "10,000+",
    label: "Happy Customers",
  },
  {
    id: 2,
    icon: <BsShieldCheck className="w-6 h-6" />,
    value: "100%",
    label: "Verified Animals",
  },
  {
    id: 3,
    icon: <BsTruck className="w-6 h-6" />,
    value: "5000+",
    label: "Home Deliveries",
  },
  {
    id: 4,
    icon: <BiLeaf className="w-6 h-6" />,
    value: "50+",
    label: "Top Breeds",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-green-50 py-16 px-4 rounded-lg">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">
          Our Impact in Qurbani Market
        </h2>
        <p className="text-slate-700 mt-2 text-sm">
          Trusted by thousands across the country
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((stat) => (
          <Card
            key={stat.id}
            className="rounded-3xl border border-slate-200/70 bg-white p-6 text-center shadow-md hover:shadow-lg transition"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
              {stat.icon}
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              {stat.value}
            </h3>

            <p className="text-sm text-slate-700 mt-1">
              {stat.label}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;