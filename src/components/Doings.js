import React from "react";
import "./Doings.css";
import { FaLeaf, FaBuilding, FaClipboardCheck, FaHome, FaHardHat, FaDraftingCompass, FaWater, FaCottonBureau } from "react-icons/fa";

const services = [
  {
    icon: FaLeaf,
    title: "Green Building Design",
    description:
      "This includes designing buildings and developments that are energy-efficient and environmentally friendly.",
  },
  {
    icon: FaBuilding,
    title: "Commercial Development",
    description:
      "This includes office buildings, retail centers, and industrial parks.",
  },
  {
    icon: FaClipboardCheck,
    title: "Consultant Services",
    description:
      "This includes providing expert advice on design and construction, as well as helping clients navigate the development process.",
  },
  {
    icon: FaHome,
    title: "Affordable Housing Solutions",
    description:
      "This entails housing units that are affordable by that section of society whose income is below the median household income.",
  },
  {
    icon: FaHardHat,
    title: "Civil Works",
    description:
      "We specialize in a wide range of civil works, including infrastructure development, road construction, drainage systems, and utility installations. Our team of experts is equipped with the knowledge and experience to deliver high-quality results.",
  },
  {
    icon: FaDraftingCompass,
    title: "Architectural Works",
    description:
      "Our architectural design services encompass the creation of aesthetically pleasing and functional spaces. We collaborate with clients to understand their vision and translate it into innovative designs that meet their specific requirements.",
  },
  {
    icon: FaWater,
    title: "Water Drilling and Maintenance",
    description:
      "With our expertise in water drilling and maintenance, we offer reliable solutions for accessing clean water sources. We have successfully implemented projects in collaboration with customers, designers, subcontractors, suppliers, government agencies, and NGOs.",
  },
  {
    icon: FaCottonBureau,
    title: "Joint Ventures and Alliances",
    description:
      "We strategically collaborate with partners who are leaders in their respective fields to enhance our capabilities and provide value-added services. By forming joint ventures and alliances, we leverage each other's expertise to deliver exceptional results on large-scale projects.",
  },
];
const Doings = () => {
  return (
    <section id="doings">
      <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          What We Do
        </h2>
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-wrap -m-4">
          {services.map((service, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <service.icon className="block w-8 text-gray-500 mb-4 mx-auto" />
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-base leading-relaxed mb-6">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doings;
