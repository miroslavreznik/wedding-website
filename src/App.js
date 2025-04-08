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

const WeddingMap = () => (
  <MapContainer>
    {/* Embed the Google Map iframe */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2578.0054414662613!2d16.2279113!3d49.7483414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d910737ce53f7%3A0xd9f9af9b29d815f2!2sPenzion%20Na%20Luk%C3%A1ch!5e0!3m2!1sen!2scz!4v1744119883595!5m2!1sen!2scz"
      width="100%"
      height="400"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </MapContainer>
);

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
          <div>
            <GalleryImage src={`${process.env.PUBLIC_URL}/gallery5.jpg`} alt="Gallery 5" />
          </div>
          <div>
            <GalleryImage src={`${process.env.PUBLIC_URL}/gallery6.jpg`} alt="Gallery 6" />
          </div>
          <div>
            <GalleryImage src={`${process.env.PUBLIC_URL}/gallery7.jpg`} alt="Gallery 7" />
          </div>
          <div>
            <GalleryImage src={`${process.env.PUBLIC_URL}/gallery8.jpg`} alt="Gallery 8" />
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

      {/* Add the Wedding Map in the Podrobnosti section */}
      <Section>
        <motion.h2 {...scrollFade}>Podrobnosti</motion.h2>
        <p>Barvy naší svatby:</p>
        <ImageContainer>
          <img src={`${process.env.PUBLIC_URL}/colours.png`} alt="Svatba Colours" style={{ width: "10%", borderRadius: "10px" }} />
        </ImageContainer>
        
        {/* Insert the Map here */}
        <WeddingMap />
      </Section>

      <FooterImage src={`${process.env.PUBLIC_URL}/footer.jpg`} alt="Wedding Footer" />

      <Footer>
        <p>Tááákhle moc se na Vás těšíme! ❤️</p>
      </Footer>
    </Wrapper>
  );
};

// Styled Components
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

// Map styling
const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 20px 0;
`;

export default App;
