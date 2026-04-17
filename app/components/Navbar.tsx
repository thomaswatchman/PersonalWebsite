import Link from "next/link";

export default function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "16px 40px",
                borderBottom: "1px solid #ccc",
                color: "#FFF",
                backgroundColor: "#111",
            }}
        >
            <h2>Thomas Watchman</h2>

            <div style={{ display: "flex", gap: "20px" }}>
                <Link href="/">Home</Link>
                {/* <Link href="/register">Register</Link> */}
                <Link href="/schedule">Projects</Link>
                <Link href="/coaches">Personal</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
}
