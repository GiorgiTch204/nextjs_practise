export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  
  return isLoggedIn ? (
    <div className="flex flex-col gap-6">
      {children}

      {/* 1 column on mobile, 3 columns on large screens.
          Left column stacks Users + Revenue; Notifications spans the rest. */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6">
          {users}
          {revenue}
        </div>

        <div className="lg:col-span-2">{notifications}</div>
      </div>
    </div>
  ): (
    login
  );
}
