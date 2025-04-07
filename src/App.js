import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const colors = {
  background: "#d9b9b0",
  primary: "#673535",
  secondary: "#3e161b",
  accent: "#7d7c6d",
  text: "#865151",
};

const App = () => {
  return (
    <Wrapper>
      <HeroImage src={`${process.env.PUBLIC_URL}/hero.jpg`} alt="Wedding Hero" />

      <Header>
        <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Zveme Vás na Naší svatbu!
        </motion.h1>
        <p>
          Po dlouhém zkušebním provozu to chceme posunout na další level a oslavit tuto příležitost právě s Vámi! Potkali
          jsme se s Klárkou 23.08.2017 a je na čase se vzít! blabla
        </p>
      </Header>

      <Section>
        <motion.h2 {...scrollFade}>Kdy a kde</motion.h2>
        <p>
          <strong>Datum:</strong> 20.9.2025
        </p>
        <p>
          <strong>Místo:</strong> Penzion Na Lukách, Široký důl
        </p>
        <p>
          <strong>Začátek:</strong> 10:00
        </p>
      </Section>

      {/* New Program Section */}
      <Section>
        <motion.h2 {...scrollFade}>Program</motion.h2>
        <ul>
          <li>
            <strong>10:00</strong> – Přivítání hostů a úvodní slovo
          </li>
          <li>
            <strong>11:00</strong> – Svatba a obřad
          </li>
          <li>
            <strong>12:00</strong> – Svatební oběd
          </li>
          <li>
            <strong>14:00</strong> – Taneční zábava a program
          </li>
          <li>
            <strong>17:00</strong> – Krájení svatebního dortu a přípitek
          </li>
          <li>
            <strong>20:00</strong> – Večerní párty
          </li>
        </ul>
      </Section>

      <GallerySection>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          <div>
            <GalleryImage src={`${process.env.PUBLIC_URL}/gallery1.jpg`} alt="Gallery 1" />
          </div>
          <div>
            <GalleryImage src={`${process.env.PUBLIC_URL}/gallery2.jpg`} alt="Gallery 2" />
          </div>
          <div>
            <GalleryImage src={`${process.env.PUBLIC_URL}/gallery3.jpg`} alt="Gallery 3" />
          </div>
          <div>
            <GalleryImage src={`${process.env.PUBLIC_URL}/gallery4.jpg`} alt="Gallery 4" />
          </div>
        </Carousel>
      </GallerySection>

      <RSVPSection>
        <motion.h2 {...scrollFade}>Dondeš? A řekneš nám víc?</motion.h2>
        <RSVPForm action="https://formspree.io/f/mpwpjeoe" method="POST">
          <Input type="text" name="name" placeholder="Tvoje jméno" required />
          <Input type="email" name="email" placeholder="Email" required />
          <Select name="attendance">
            <option value="yes">Ano</option>
            <option value="no">Ne</option>
          </Select>
          <Select name="meal">
            <option value="svickova">Svíčková na smetaně</option>
            <option value="chicken">Rolované kuře s bramborovou kaší</option>
            <option value="sirloin">Vepřová panenka a bramborové pyré</option>
          </Select>
          <Button type="submit">Odeslat</Button>
        </RSVPForm>
      </RSVPSection>

      {/* New Podrobnosti Section */}
      <Section>
        <motion.h2 {...scrollFade}>Podrobnosti</motion.h2>
        <p>Barvy naší svatby:</p>
        <ImageContainer>
          <img src={`${process.env.PUBLIC_URL}/colours.png`} alt="Svatba Colours" style={{ width: "100%", borderRadius: "10px" }} />
        </ImageContainer>
        <p>Naše svatební barvy jsou teplé odstíny růžové, červené a zlaté, které přinášejí pocit elegance a romantiky.</p>
      </Section>

      <FooterImage src={`${process.env.PUBLIC_URL}/footer.jpg`} alt="Wedding Footer" />

      <Footer>
        <p>Tááákhle moc se na Vás těšíme! ❤️</p>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.background};
  color: ${colors.text};
  font-family: Arial, sans-serif;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Header = styled.header`
  text-align: center;
  padding: 20px;
`;

const Section = styled.section`
  background: white;
  padding: 20px;
  margin: 20px auto;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const GallerySection = styled(Section)`
  padding: 40px 20px;
`;

const GalleryImage = styled.img`
  max-height: 500px;
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: block;
  margin: 0 auto;
`;

const RSVPSection = styled(Section)``;

const RSVPForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  width: 80%;
  max-width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 10px;
  width: 80%;
  max-width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: ${colors.primary};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const FooterImage = styled.img`
  width: 100%;
  margin-top: 40px;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  font-size: 50px;
  font-weight: bold;
`;

const ImageContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const scrollFade = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default App;
