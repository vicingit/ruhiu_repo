import React from "react";
//import { HeartIcon, UsersIcon, LightningBoltIcon, GlobeAltIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/solid";

import './CoreValues.css';

const coreValues = [
  {
    icon: CheckCircleIcon,
    title: "Integrity",
    description:
      "We believe in conducting our business with the utmost integrity, honesty, and transparency. We are committed to ethical practices, treating our clients, employees, and stakeholders with respect and fairness.",
  },
  {
    icon: CheckCircleIcon,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do. From project planning and execution to customer service, we are dedicated to delivering the highest quality standards, exceeding client expectations, and continuously improving our skills and processes.",
  },
  {
    icon: CheckCircleIcon,
    title: "Teamwork",
    description:
      "We value collaboration and teamwork. We foster a collaborative environment where all team members contribute their expertise, ideas, and perspectives to achieve the best results. We actively seek partnerships and maintain open communication with our clients, suppliers, and industry professionals.",
  },
  {
    icon: CheckCircleIcon,
    title: "Innovation",
    description:
      "We embrace innovation and encourage creative thinking. We continuously explore new technologies, construction methods, and sustainable practices to provide innovative solutions that enhance project efficiency, cost-effectiveness, and environmental sustainability.",
  },
  {
    icon: CheckCircleIcon,
    title: "Client Focus",
    description:
      "Our clients are at the center of everything we do. We listen to their needs, understand their objectives, and tailor our services to meet their specific requirements. We are committed to building long-term relationships based on trust, reliability, and exceptional customer service.",
  },
  {
    icon: CheckCircleIcon,
    title: "Safety",
    description:
      "The safety and well-being of our employees, subcontractors, and the public are of paramount importance. We prioritize a safe working environment, adhere to strict safety protocols, and promote a strong safety culture throughout all our projects.",
  },
];

const CoreValues = () => {
  return (
    <section id="core-values">
      <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Our Core Values
        </h2>
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-wrap -m-4">
          {coreValues.map((value, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <value.icon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{value.description}</p>
                <div className="flex items-center">
                  <span className="w-10 h-10 bg-gray-500 rounded-full flex-shrink-0"></span>
                  <div className="flex-grow pl-4">
                    <h2 className="text-white text-lg title-font font-medium mb-1">
                      {value.title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
