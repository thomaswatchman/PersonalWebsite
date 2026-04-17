import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import SocialBar from "./components/SocialBar";
export default function Home() {
    return (
        <main
            style={{
                fontFamily: "sans-serif",
            }}
        >
            <div>
                <Navbar />
                <TopBar />
                {/* <Navbar /> */}
                <Hero link="#programs" />
                {/* <SocialBar /> */}
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "40px",
                    padding: "80px",
                    height: "60vh",
                }}
            >
                {/* Left side */}
                <div
                    style={{
                        flex: 1,
                        fontSize: "40px",
                        fontWeight: "bold",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <h2>Short Introduction</h2>
                    <p></p>
                </div>

                {/* Right side */}
                <div style={{ flex: 1 }}>
                    <p>
                        This website is meant to showcase my experience and
                        projects, as well as my some other parts of my life
                    </p>
                    <p>
                        <br></br>I have a passion for sports, and I have been
                        involved in volleyball. I have also been involved in
                        coaching and training athletes of all levels, from
                        beginners to elite players. I have a strong background
                        in sports science and performance, and I am always
                        looking for new ways to help athletes improve their
                        skills and reach their goals.
                    </p>
                </div>
            </div>
            <div
                style={{
                    textAlign: "center",
                    padding: "20px",
                    fontSize: "20px",
                }}
            >
                {" "}
                View my projects here!{" "}
            </div>

            <div
                style={{
                    display: "flex",
                    gap: "30px",
                    justifyContent: "center",
                    padding: "60px 20px",
                    flexWrap: "wrap",
                }}
            >
                <section
                    id="projects"
                    style={{
                        display: "flex",
                        gap: "30px",
                        justifyContent: "center",
                        padding: "60px 20px",
                        flexWrap: "wrap",
                    }}
                >
                    <Card
                        title="Individual Registration"
                        image=""
                        description="Sign up for our camps and train with elite coaches."
                        link="/contact"
                    />

                    <Card
                        title="Tennis"
                        image="/media/TennisCover.png"
                        description="Tennis"
                        link="/contact?type=group"
                    />

                    <Card
                        title="Golf"
                        image="/media/GolfPic.png"
                        description="Golf Progress"
                        link="/golf"
                    />
                </section>
            </div>
        </main>
    );
}
