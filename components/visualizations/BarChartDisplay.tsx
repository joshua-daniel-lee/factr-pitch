'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarChartData {
  [key: string]: string | number;
}

interface BarChartDisplayProps {
  data: BarChartData[];
  bars: Array<{
    dataKey: string;
    name: string;
    color: string;
  }>;
  title?: string;
  xAxisKey: string;
}

export default function BarChartDisplay({ data, bars, title, xAxisKey }: BarChartDisplayProps) {
  return (
    <div className="w-full">
      {title && (
        <h4 className="font-newsreader text-xl font-bold mb-4 text-center">{title}</h4>
      )}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey={xAxisKey} stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }} 
          />
          <Legend />
          {bars.map((bar) => (
            <Bar
              key={bar.dataKey}
              dataKey={bar.dataKey}
              name={bar.name}
              fill={bar.color}
              radius={[8, 8, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
