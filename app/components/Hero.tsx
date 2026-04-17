"use client";
import Image from "next/image";
import Link from "next/link";

type HeroProps = {
    title?: string;
    image?: string;
    buttonText?: string;
    imagePosition?: string;
    link?: string;
};

export default function Hero({
    title = "Welcome to my Personal Website",
    image = "/media/Setting.jpg",
    buttonText = "View Projects",
    imagePosition = "top",
    link = "#projects",
}: HeroProps) {
    const buttonStyle = {
        marginTop: "20px",
        padding: "10px 20px",
        borderRadius: "20px",
        border: "none",
        cursor: "pointer",
    };

    const isScroll = link?.startsWith("#");

    return (
        <div style={{ position: "relative", width: "100%", height: "500px" }}>
            <Image
                src={image}
                alt="hero"
                fill
                style={{ objectFit: "cover", objectPosition: imagePosition }}
            />

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.4)",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    bottom: "40px",
                    left: "40px",
                    color: "white",
                }}
            >
                <h1
                    style={{
                        fontSize: "50px",
                        maxWidth: "700px",
                        fontWeight: "bold",
                    }}
                >
                    {title}
                </h1>

                {isScroll ? (
                    <button
                        style={buttonStyle}
                        onClick={() =>
                            document
                                .getElementById(link!.replace("#", ""))
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        {buttonText}
                    </button>
                ) : (
                    <Link href={link ?? "/"}>
                        <button style={buttonStyle}>{buttonText}</button>
                    </Link>
                )}
            </div>
        </div>
    );
}
