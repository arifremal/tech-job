import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Assigmentchart = () => {
    const data = [
        { x: 1, y: 60 },
        { x: 2, y: 60,},
        { x: 3, y: 60, },
        { x: 4, y: 59, },
        { x: 5, y: 58,  },
        { x: 6, y: 58.99, },
        { x: 7, y: 60, },
      ];
    return (
        <div className='p-20'>
            

            <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="Number" unit="Assignment" />
          <YAxis type="number" dataKey="y" name="Got" unit="Marks" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>








            
        </div>
    );
};

export default Assigmentchart;