import React, { useState } from "react";
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
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showError, setShowError] = useState(false);

  const handlePasswordSubmit = () => {
    if (password === "Mirara") {
      setIsAuthorized(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

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
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i}>
              <GalleryImage src={`${process.env.PUBLIC_URL}/gallery${i}.jpg`} alt={`Gallery ${i}`} />
            </div>
          ))}
        </Carousel>
      </GallerySection>

      <Section>
        <motion.h2 {...scrollFade}>Program</motion.h2>
        <ul>
          <li>
            <strong>10:00 - 11:00:</strong> Svatba (Obřad)
          </li>
          <li>
            <strong>11:00 - 12:00:</strong> Přípitek a fotografie
          </li>
          <li>
            <strong>12:00 - 14:00:</strong> Oběd
          </li>
          <li>
            <strong>14:00 - 16:00:</strong> Taneční zábava
          </li>
          <li>
            <strong>16:00 - 18:00:</strong> Zábavný program (hry a soutěže)
          </li>
          <li>
            <strong>18:00 - 20:00:</strong> Večeře
          </li>
          <li>
            <strong>20:00 - 00:00:</strong> Taneční večer s DJ
          </li>
        </ul>
      </Section>
      
      <RSVPSection>
        <motion.h2 {...scrollFade}>Dondeš? A řekneš nám víc?</motion.h2>

        {!isAuthorized ? (
          <>
            <p>Prosím zadej heslo pro zobrazení formuláře:</p>
            <PasswordInput
              type="password"
              placeholder="Zadej heslo"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handlePasswordSubmit}>Potvrdit</Button>
            {showError && <ErrorText>Špatné heslo, zkus to znovu.</ErrorText>}
          </>
        ) : (
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
        )}
      </RSVPSection>

      <Section>
        <motion.h2 {...scrollFade}>Časté dotazy</motion.h2>
        <p>Barvy naší svatby:</p>
        <ImageContainer>
          <img src={`${process.env.PUBLIC_URL}/colours.png`} alt="Svatba Colours" style={{ width: "10%", borderRadius: "10px" }} />
        </ImageContainer>
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
  width: 80%; /* Stretch the section to take 80% of the available width */
  margin: 20px auto; /* Keep it centered with space around */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
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

const PasswordInput = styled.input`
  padding: 10px;
  width: 80%;
  max-width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 10px;
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

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 20px 0;
`;

export default App;
