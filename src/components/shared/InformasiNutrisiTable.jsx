import React from "react";

const InformasiNutrisiTable = ({ data, index }) => {
  const { name, kalori, protein, karbohidrat, lemak } = data;

  return (
    <tr className={`${index % 2 === 0 ? "bg-cust-green-light-hover" : "bg-white"} flex w-full items-center`}>
      <td className="w-2/6 text-left py-5 pl-6">{name}</td>
      <td className="w-1/6 text-center">{kalori} KKal</td>
      <td className="w-1/6 text-center">{karbohidrat} gram</td>
      <td className="w-1/6 text-center">{protein} gram</td>
      <td className="w-1/6 text-center">{lemak} gram</td>
    </tr>
  );
};

export default InformasiNutrisiTable;
