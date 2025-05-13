"use client";
import { useState } from "react";

const AutomationCalculator = () => {
  const [pumpCapacity, setPumpCapacity] = useState("");
  const [timeSaving, setTimeSaving] = useState("");
  const [results, setResults] = useState(null);

  const handleCalculate = () => {
    if (!pumpCapacity || !timeSaving) return;

    const timeInHours = timeSaving / 60;
    const electricityPerDay = pumpCapacity * 0.746 * timeInHours;
    const waterPerDay = pumpCapacity * timeSaving; // Assuming water output proportional to pump capacity
    const carbonPerDay = electricityPerDay * 0.82; // Carbon emission reduction formula

    setResults({
      dailyElectricity: electricityPerDay,
      monthlyElectricity: electricityPerDay * 30,
      yearlyElectricity: electricityPerDay * 365,
      dailyWater: waterPerDay,
      monthlyWater: waterPerDay * 30,
      yearlyWater: waterPerDay * 365,
      dailyCarbon: carbonPerDay,
      monthlyCarbon: carbonPerDay * 30,
      yearlyCarbon: carbonPerDay * 365,
    });
  };

  return (
    <div className="px-6 py-12 md:py-24 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8 uppercase">
        Water Automation Calculator
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Input for Pump Capacity */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Pump Capacity (in HP)
            </label>
            <input
              type="number"
              value={pumpCapacity}
              onChange={(e) => setPumpCapacity(Number(e.target.value))}
              placeholder="Enter pump capacity"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Input for Time Saving */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Time Saving After Automation (Minutes)
            </label>
            <input
              type="number"
              value={timeSaving}
              onChange={(e) => setTimeSaving(Number(e.target.value))}
              placeholder="Enter time saving"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={handleCalculate}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Calculate
          </button>
        </div>

        {/* Results Section */}
        {results && (
          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-bold text-gray-700 mb-4">
              Estimated Savings
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-gray-300 px-4 py-2">Metric</th>
                    <th className="border border-gray-300 px-4 py-2">Daily</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Monthly
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Yearly</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="border border-gray-300 px-4 py-2">
                      Electricity Savings (kWh)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {results.dailyElectricity.toFixed(2)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {results.monthlyElectricity.toFixed(2)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {results.yearlyElectricity.toFixed(2)}
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="border border-gray-300 px-4 py-2">
                      Water Savings (liters)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {results.dailyWater.toFixed(2)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {results.monthlyWater.toFixed(2)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {results.yearlyWater.toFixed(2)}
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="border border-gray-300 px-4 py-2">
                      Carbon Emission Reduction (kg CO₂)
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {results.dailyCarbon.toFixed(2)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {results.monthlyCarbon.toFixed(2)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {results.yearlyCarbon.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {results && (
          <div className="mt-8 border-t pt-6">
            {/* <h3 className="text-xl font-bold text-gray-700 mb-4">
              Estimated Savings
            </h3> */}
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Electricity Saving (kWh/day):</strong>{" "}
                {results.dailyElectricity.toFixed(2)} kWh
              </li>
              <li>
                <strong>Electricity Saving (kWh/month):</strong>{" "}
                {results.monthlyElectricity.toFixed(2)} kWh
              </li>
              <li>
                <strong>Electricity Saving (kWh/year):</strong>{" "}
                {results.yearlyElectricity.toFixed(2)} kWh
              </li>
              <li>
                <strong>Water Saving (liters/day):</strong>{" "}
                {results.dailyWater.toFixed(2)} liters
              </li>
              <li>
                <strong>Water Saving (liters/month):</strong>{" "}
                {results.monthlyWater.toFixed(2)} liters
              </li>
              <li>
                <strong>Water Saving (liters/year):</strong>{" "}
                {results.yearlyWater.toFixed(2)} liters
              </li>
              <li>
                <strong>Carbon Emission (reduction/day):</strong>{" "}
                {results.dailyCarbon.toFixed(2)} kg CO₂
              </li>
              <li>
                <strong>Carbon Emission (reduction/month):</strong>{" "}
                {results.monthlyCarbon.toFixed(2)} kg CO₂
              </li>
              <li>
                <strong>Carbon Emission (reduction/year):</strong>{" "}
                {results.yearlyCarbon.toFixed(2)} kg CO₂
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutomationCalculator;
