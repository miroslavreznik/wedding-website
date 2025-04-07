import React from "react";
import { motion } from "framer-motion";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const colors = {
  background: "#d9b9b0",
  primary: "#673535",
  secondary: "#3e161b",
  accent: "#7d7c6d",
  text: "#865151"
};

const App = () => {
  return (
    <div style={{ backgroundColor: colors.background, color: colors.text }}>
      {/* Hero Image */}
      <img
        src={`${process.env.PUBLIC_URL}/hero.jpg`}
        alt="Wedding Hero"
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />

      {/* Header with motion */}
      <motion.header
        style={sectionStyle}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Zveme Vás na Naší svatbu!</h1>
        <p>Po dlouhém zkušebním provozu to chceme posunout na další level a oslavit tuto příležitost právě s Vámi! Potkali jsme se s Klárkou 23.08.2017 a je na čase se vzít! blabla </p>
      </motion.header>

      {/* Sliding sections */}
      <motion.section style={sectionStyle} {...scrollFade}>
        <h2>Kdy a kde</h2>
        <p><strong>Datum:</strong> 20.9.2025</p>
        <p><strong>Místo:</strong> Penzion Na Lukách, Široký důl</p>
        <p><strong>Začátek:</strong> 10:00</p>
      </motion.section>

      {/* Gallery */}
      <motion.section style={sectionStyle} {...scrollFade}>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/gallery1.jpg`}
              alt="Gallery 1"
              style={galleryImageStyle}
            />
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/gallery2.jpg`}
              alt="Gallery 2"
              style={galleryImageStyle}
            />
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/gallery3.jpg`}
              alt="Gallery 3"
              style={galleryImageStyle}
            />
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/gallery4.jpg`}
              alt="Gallery 4"
              style={galleryImageStyle}
            />
          </div>
        </Carousel>
      </motion.section>

      {/* RSVP */}
      <motion.section style={sectionStyle} {...scrollFade}>
        <h2>Dondeš? A řekneš nám víc?</h2>
        <form action="https://formspree.io/f/mpwpjeoe" method="POST" style={formStyle}>
          <input type="text" name="name" placeholder="Tvoje jméno" required style={inputStyle} />
          <input type="email" name="email" placeholder="Email" required style={inputStyle} />
          <select name="attendance" style={inputStyle}>
            <option value="yes">Ano</option>
            <option value="no">Ne</option>
          </select>
          <select name="meal" style={inputStyle}>
            <option value="svickova">Svíčková na smetaně</option>
            <option value="chicken">Rolované kuře s bramborovou kaší</option>
            <option value="sirloin">Vepřová panenka a bramborové pyré</option>
          </select>
          <button type="submit" style={buttonStyle}>Odeslat</button>
        </form>
      </motion.section>

      {/* Footer Image */}
      <img
        src={`${process.env.PUBLIC_URL}/footer.jpg`}
        alt="Wedding Footer"
        style={{ width: "100%", marginTop: "40px" }}
      />

      <footer style={{ textAlign: "center", padding: "20px" }}>
        <p style={{ fontSize: "50px", fontWeight: "bold" }}>Tááákhle moc se na Vás těšíme! ❤️</p>
      </footer>
    </div>
  );
};

// Styles for the sections
const sectionStyle = {
  background: "white",
  padding: "20px",
  margin: "20px auto",
  borderRadius: "10px",
  width: "90%",
  maxWidth: "800px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
};

// Styles for the gallery image to handle both portrait and landscape
const galleryImageStyle = {
  maxHeight: "500px",
  width: "auto",
  height: "auto",
  maxWidth: "100%",
  objectFit: "contain",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  display: "block",
  margin: "0 auto",
};

// Motion settings for scroll fade-in effect
const scrollFade = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// Form and button styling
const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px"
};

const inputStyle = {
  padding: "10px",
  width: "80%",
  maxWidth: "300px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  backgroundColor: colors.primary,
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

// Custom styles for carousel arrows
const carouselArrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: colors.primary,
  border: "none",
  padding: "10px",
  borderRadius: "50%",
  cursor: "pointer",
  color: "white",
  zIndex: "1"
};

export default App;
