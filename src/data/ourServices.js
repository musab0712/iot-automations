import {
  FaTools,
  FaMicrochip,
  FaSatelliteDish,
  FaCloud,
  FaCogs,
  FaLightbulb,
} from "react-icons/fa";
const services = [
  {
    id: 1,
    slug: "water-automation",
    title: "Water Automation",
    // icon: "/services/currency-exchange.svg",
    icon: <FaMicrochip className="text-5xl text-purple-500" />,
    img: "/services/water-level.webp",
    data: "A Water Level Indicator is an electronic device designed to monitor and display the water level in tanks, reservoirs, or other storage units. It helps in efficient water management, preventing overflow and ensuring timely refilling.",
    data1:
      "We employ many premium tools that help us deliver research that is accurate and double-checked.",
  },
  {
    id: 2,
    slug: "electric-panel",
    title: "Electric Panel Automation",
    icon: <FaCogs className="text-5xl text-blue-500" />,
    img: "/services/pressure.webp",
    data: "This feature monitors and regulates the pressure within the pump system, ensuring it operates within safe limits. Prevents Overpressure: Avoids damage caused by excessive pressure buildup in the pump or connected pipelines.",
    data1:
      "We employ many premium tools that help us deliver research that is accurate and double-checked.",
  },
  {
    id: 3,
    slug: "building-automation",
    title: "Building Automation System",
    icon: <FaSatelliteDish className="text-5xl text-pink-500" />,
    img: "/services/dry-run.webp",
    data: "Dry running occurs when a pump operates without water, leading to overheating and severe damage. Dry run protection safeguards the pump in such scenarios. Sensor-Based Monitoring: Detects the absence of water in the pump chamber or inlet. Immediate Action: Automatically stop the pump to prevent wear and tear. ",
    data1:
      "We employ many premium tools that help us deliver research that is accurate and double-checked.",
  },
  {
    id: 4,
    slug: "customised-automation",
    title: "Customised Automation Solution",
    icon: <FaLightbulb className="text-5xl text-green-500" />,
    img: "/services/fully-automation.webp",
    data: "A Fully Automatic Pump Controller is an advanced device designed to automate the operation of water pumps, ensuring efficient water management with minimal human intervention. It controls the pump based on real-time water levels in the overhead tank, underground tank, or reservoir, making it an ideal solution for industrial applications...",
    data1:
      "We employ many premium tools that help us deliver research that is accurate and double-checked.",
  },
];

export default services;
