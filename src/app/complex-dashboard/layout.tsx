export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {children}

      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "250px",
          }}
        >
          {users}
          {revenue}
        </div>

        <div style={{ flex: 1 }}>
          {notifications}
        </div>
      </div>
    </div>
  );
}