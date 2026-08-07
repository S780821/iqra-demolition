"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Building2, Users, Truck, Award } from "lucide-react";

const stats = [
  {
    icon: Building2,
    number: 500,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    number: 100,
    suffix: "+",
    label: "Skilled Workers",
  },
  {
    icon: Truck,
    number: 25,
    suffix: "+",
    label: "Heavy Machines",
  },
  {
    icon: Award,
    number: 10,
    suffix: "+",
    label: "Years Experience",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-orange-500 py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="text-center text-white"
              >
                <Icon
                  className="mx-auto mb-5"
                  size={50}
                />

                <h2 className="text-5xl font-bold">

                  {inView && (
                    <CountUp
                      end={item.number}
                      duration={2.5}
                    />
                  )}

                  {item.suffix}

                </h2>

                <p className="mt-4 text-lg">
                  {item.label}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}