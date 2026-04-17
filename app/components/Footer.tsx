export default function Footer() {
    return (
        <footer
            style={{
                marginTop: "60px",
                padding: "30px 20px",
                borderTop: "1px solid #ddd",
                textAlign: "center",
                fontSize: "14px",
                background: "#f5f5f5",
            }}
        >
            <p style={{ marginBottom: "10px" }}>
                © 2026 Coast2Coast Volleyball Camps
            </p>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                }}
            ></div>
        </footer>
    );
}
