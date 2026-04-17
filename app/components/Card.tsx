"use client";
import Image from "next/image";
import Link from "next/link";

type Props = {
    title: string;
    description: string;
    image: string;
    link: string;
};

export default function Card({ title, description, image, link }: Props) {
    return (
        <Link href={link} style={{ textDecoration: "none", color: "inherit" }}>
            <div
                style={{
                    width: "300px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                }
            >
                <div style={{ position: "relative", height: "200px" }}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div style={{ padding: "15px" }}>
                    <h3>{title}</h3>
                    <p style={{ fontSize: "14px", color: "#555" }}>
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
}
