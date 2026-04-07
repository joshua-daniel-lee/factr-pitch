'use client';

import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

interface TableRow {
  feature: string;
  [key: string]: string | boolean;
}

interface ComparisonTableProps {
  columns: string[];
  data: TableRow[];
  title?: string;
}

export default function ComparisonTable({ columns, data, title }: ComparisonTableProps) {
  const renderCell = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-400 mx-auto" />
      );
    }
    
    if (value === '🟡 Limited' || value === '🟡 Medium' || value === '🟡 Shared pool' || value === '🟡 Low') {
      return <Minus className="w-5 h-5 text-yellow-600 mx-auto" />;
    }
    
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="w-full overflow-x-auto">
      {title && (
        <h4 className="font-newsreader text-xl font-bold mb-4">{title}</h4>
      )}
      <motion.table
        className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-soft"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <thead className="bg-bunting text-white">
          <tr>
            <th className="p-4 text-left font-newsreader font-bold">Feature</th>
            {columns.map((col) => (
              <th key={col} className="p-4 text-center font-newsreader font-bold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <motion.tr
              key={idx}
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <td className="p-4 font-roboto font-medium text-gray-900">{row.feature}</td>
              {columns.map((col) => (
                <td key={col} className="p-4 text-center">
                  {renderCell(row[col])}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
}
