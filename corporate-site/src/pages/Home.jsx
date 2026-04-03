import { useNavigate } from "react-router-dom";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div>

      {/* 🔥 HERO SECTION */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "40px", color: "#0f172a" }}>
          We Build Digital Solutions
        </h1>

        <p style={{ color: "gray" }}>
          Grow your business with modern web solutions
        </p>

        <button
          style={{
            padding: "10px 20px",
            background: "#38bdf8",
            border: "none",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>

        <br /><br />

        <img src={img1} alt="team" width="250" />
        <img src={img2} alt="meeting" width="250" />
      </section>

      {/* 🔥 SERVICES */}
      <section style={{ textAlign: "center", padding: "20px" }}>
        <h2>Our Services</h2>
        <p>Web Development, App Development, UI/UX Design</p>
      </section>

      {/* 🔥 PORTFOLIO */}
      <section style={{ textAlign: "center", padding: "20px" }}>
        <h2>Our Work</h2>
        <p>Check our latest projects and case studies</p>
      </section>

      {/* 🔥 TESTIMONIALS */}
      <section style={{ textAlign: "center", padding: "20px" }}>
        <h2>Testimonials</h2>
        <p>"Excellent service and support!"</p>
      </section>

    </div>
  );
}

export default Home;