export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-[150px] items-center justify-center rounded-xl border border-slate-200 bg-white p-6 text-center font-medium text-slate-700 shadow-sm transition-shadow hover:shadow-md">
      {children}
    </div>
  );
};
