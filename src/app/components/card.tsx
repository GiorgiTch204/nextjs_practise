export const Card=({children}: {children: React.ReactNode}) =>{
    const cardStyle = {
            padding: "20px",
            margin: "10px",
            border: "1px solid #ddd",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "150px",
        };

    return <div style={cardStyle}>{children}</div>;
};