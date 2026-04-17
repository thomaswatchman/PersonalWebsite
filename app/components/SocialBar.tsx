// components/SocialBar.tsx
export default function SocialBar() {
    return (
        <div
            style={{
                position: "fixed",
                left: "10px",
                top: "200px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
            }}
        >
            <div>FB</div>
            <div>IG</div>
            <div>YT</div>
            <div>TikTok</div>
        </div>
    );
}
