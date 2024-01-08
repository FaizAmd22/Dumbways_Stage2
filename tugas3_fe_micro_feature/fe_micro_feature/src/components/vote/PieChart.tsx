import React, { useEffect, useState } from 'react';
import { PieChart as MinimalPieChart } from 'react-minimal-pie-chart';
import Data from "../../data/paslon.json"
import { PaslonData } from '../../types/Paslon';


const PieChart: React.FC = () => {
  const [data, setData] = useState<PaslonData[]>([])

    useEffect(() => {
        setData(Data)
    }, [])

  return (
    <div className="w-auto h-auto p-5">
      <h1 className="text-center font-bold mb-5">Hasil :</h1>
      <MinimalPieChart
        data={data}
        lineWidth={100}
        label={({ dataEntry }) => Math.round(dataEntry.percentage ?? 0) + '%'}
        labelStyle={{
          fontSize: '8px',
          fontFamily: 'sans-serif',
          fill: '#000',
        }}
        animate
        animationDuration={500}
        animationEasing="ease-out"
      />
    </div>
  );
};

export default PieChart;
