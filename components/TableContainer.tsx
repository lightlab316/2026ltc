import React from 'react';

interface TableContainerProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

const TableContainer: React.FC<TableContainerProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-8">
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-3">
        <i className={`${icon} text-indigo-600 text-xl`}></i>
        <h2 className="text-lg font-bold text-slate-800">{title}</h2>
      </div>
      <div className="overflow-x-auto">
        {children}
      </div>
    </div>
  );
};

export default TableContainer;