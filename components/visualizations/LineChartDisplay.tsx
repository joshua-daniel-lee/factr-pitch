'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartData {
  [key: string]: string | number;
}

interface LineChartDisplayProps {
  data: LineChartData[];
  lines: Array<{
    dataKey: string;
    name: string;
    color: string;
  }>;
  title?: string;
  xAxisKey: string;
}

export default function LineChartDisplay({ data, lines, title, xAxisKey }: LineChartDisplayProps) {
  return (
    <div className="w-full">
      {title && (
        <h4 className="font-newsreader text-xl font-bold mb-4 text-center">{title}</h4>
      )}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
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
          {lines.map((line) => (
            <Line
              key={line.dataKey}
              type="monotone"
              dataKey={line.dataKey}
              name={line.name}
              stroke={line.color}
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
