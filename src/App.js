import React, { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled, { createGlobalStyle } from "styled-components";
import { FaChevronDown } from "react-icons/fa";

const colors = {
  background: "#d9b9b0",
  primary: "#673535",
  secondary: "#7d7c6d",
  accent: "#865151",
  text: "#3e161b",
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background-color: ${colors.background};
  }
`;

const ElegantIntro = styled.section`
  color: ${colors.text};
  font-family: "Playfair Display", serif;
  text-align: center;
  padding: 20px 20px 0px;
  font-size: 20px;
  line-height: 1.6;
  width: 80%;
  margin: 0 auto;
`;

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

const Accordion = ({ title, isOpen, onClick, children }) => (
  <AccordionWrapper>
    <AccordionHeader onClick={onClick}>
      <span>{title}</span>
      <ChevronIcon isOpen={isOpen} />
    </AccordionHeader>
    <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
  </AccordionWrapper>
);

const App = () => {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showError, setShowError] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handlePasswordSubmit = () => {
    if (password === "Mirara") {
      setIsAuthorized(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <HeroImage
          src={`${process.env.PUBLIC_URL}/hero.webp`}
          alt="Wedding Hero"
        />

        <ElegantIntro>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Zveme Vás na Naší svatbu!
          </motion.h1>
          <p>
            Po dlouhém zkušebním provozu to chceme posunout na další level a
            oslavit tuto příležitost právě s Vámi!
          </p>
          <p>
            Velmi nás těší, že s námi budete sdílet náš výjimečný den. Prosíme
            vás, abyste potvrdili svoji účast pomocí tohoto{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdeJ2ZcI_ykvSccbf4S0otzQquOsYUI3PxMpSpfzUIYLkvVIA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              formuláře
            </a>
            .
          </p>
          <p>
            Formulář vyplňte prosím za každou osobu, která se zúčastní, i za ty
            nejmenší svatebčánky.
          </p>
          <p>Děkujeme!</p>
          <p>
            <strong>Datum:</strong> 20.9.2025
          </p>
          <p>
            <strong>Místo:</strong> Penzion Na Lukách, Široký důl
          </p>
          <p>
            <strong>Začátek:</strong> 10:00
          </p>
        </ElegantIntro>

        <GallerySection>
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i}>
                <GalleryImage
                  src={`${process.env.PUBLIC_URL}/gallery${i}.jpg`}
                  alt={`Gallery ${i}`}
                />
              </div>
            ))}
          </Carousel>
        </GallerySection>

        <Accordion
          title="🕒 Harmonogram dne"
          isOpen={openAccordion === "🕒 Harmonogram dne"}
          onClick={() => toggleAccordion("🕒 Harmonogram dne")}
        >
          <h3>Sobota</h3>
          <ul>
            <li>
              <strong>10:00</strong> – Jihočeská slavobrána a ranní mecheche
            </li>
            <li>
              <strong>11:00</strong> – Obřad
            </li>
            <li>Oběd</li>
            <li>Kafíčko a krájení dortu</li>
            <li>První tanec</li>
            <li>Házení kyticí</li>
            <li>Večerní raut</li>
            <li>Zábava do rána ✨</li>
          </ul>

          <h3>Neděle</h3>
          <ul>
            <li>
              <strong>10:00–15:00</strong> – Dojídačka a dopíječka 🍰🍷
            </li>
          </ul>
          <p>
            Budeme moc rádi, když dorazíte i v neděli — ať už jste přespali,
            nebo to máte jen pár zatáček. Čeká nás dojídačka, dopíječka a pokec
            o tom, kdo co (ne)pamatuje a kdo zatančil největší číslo večera.
            🕺🍰
          </p>
        </Accordion>

        <Accordion
          title="🥂 Jihočeská slavobrána"
          isOpen={openAccordion === "🥂 Jihočeská slavobrána"}
          onClick={() => toggleAccordion("🥂 Jihočeská slavobrána")}
        >
          <p>
            U nevěsty doma je tradice, že přátelé postaví slavobránu u jejího
            domu. Druhý den ráno před obřadem se pak všichni hosté sejdou u
            nevěstina domu, kde je hudba, pití a zábava. Když se pak jede na
            obřad, všichni hosté touto branou projdou a musí se „vyplatit“ —
            tedy každý z hostů přispěje nějakou drobnou částkou, kterou dostanou
            mladí stavitelé slavobrány. Ti totiž na svatbu nejsou zváni, a tak
            mají aspoň peníze na pořádnou oslavu.
          </p>

          <p>
            V našem případě je ale svatba na jednom místě, všichni jsou zváni,
            včetně stavitelů slavobrány, a nechceme od vás, hostů, žádné další
            peníze navíc. Proto jsme si pro vás připravili trochu jinou verzi
            téhle tradice:
          </p>

          <ul>
            <li>
              Místo peněz budete „vyplácet“ třeba veselou básničkou, písničkou,
              nebo jen úsměvem a přáním pro ty, kdo bránu stavěli.
            </li>
            <li>
              U slavobrány bude připravený malý přípitek, takže společně
              připijeme na krásný začátek svatebního dne.
            </li>
          </ul>
        </Accordion>

        <Accordion
          title="🎨 Barvy naší svatby"
          isOpen={openAccordion === "🎨 Barvy naší svatby"}
          onClick={() => toggleAccordion("🎨 Barvy naší svatby")}
        >
          Budeme rádi, když se s námi trochu sladíte, ale není to povinné –
          klidně si vezměte něco, co už máte, hlavně si den užijte! Naše
          svatební barva je burgundy, a ladíme v celé paletě od hluboké burgundy
          až po jemnou starorůžovou. Mrkněte na paletu a ukázku šatů, ať máte
          představu.
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "1rem",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginTop: "1rem",
                alignItems: "center",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/svatebni barvy + stin.svg`}
                alt="Ukázka palety barev SVG"
                style={{ width: "250px", height: "auto" }}
              />
              <img
                src={`${process.env.PUBLIC_URL}/svatebni barvy - saty.png`}
                alt="Ukázka šatů PNG"
                style={{ width: "250px", height: "auto" }}
              />
            </div>
          </div>
        </Accordion>

        <Accordion
          title="👗👔 Jak se obléct?"
          isOpen={openAccordion === "👗👔 Jak se obléct?"}
          onClick={() => toggleAccordion("👗👔 Jak se obléct?")}
        >
          Budeme hodně venku, takže je lepší nebrat jehlové podpatky, aby se
          nebořily do trávy. A protože budeme venku i večer, klidně si vezměte
          nějaké vrstvy navíc, kdyby se ochladilo.
        </Accordion>

        <Accordion
          title="NOVÉ INFO! 🚌 Svoz a rozvoz místních"
          isOpen={openAccordion === "🚌 Svoz a rozvoz místních"}
          onClick={() => toggleAccordion("🚌 Svoz a rozvoz místních")}
        >
          <p>
            Pro naše hosty, kteří bydlí blíž a neplánují u nás přespávat,
            zajistíme svatební autobus.
          </p>
          <p>
            Vypravíme pro Vás speciální autobusovou linku se sympatickým
            průvodčím, která pojede ze Svitav, přes Vendolí, až do Penzionu Na
            Lukách. Počítáme, že všichni, kdo můžete, autobus využijete a
            začnete budovat atmosféru pěkně od rána!
          </p>
          <p>Přibližný jízdní řád:</p>
          <p>SY autobusové nádraží - 9:00</p>
          <p>SY Poličská - 9:05</p>
          <p>Vendolí, dolní - 9:15</p>
          <p>Vendolí, škola - 9:25</p>
          <p>Vendolí, horní - 9:35</p>
          <p>Široký Důl, Penzion Na Lukách - 9:55</p>
          <p>
            A jak se dostanu zpět? Zajistíme Vám dopravu ze svatby až přímo domů
            přibližně od večerních hodin (18:00) do konce naši svatby. K
            dispozici bude jeden osobák a jedno vícemístné auto s řidiči
            připravenými na Vaše pokyny. Až vás svatební párty přestane bavit (i
            když doufáme, že to bude až k ránu), bude pro vás přichystaný
            pohodlný rozvoz autem, abyste se bez starostí a v klidu dostali
            domů. 🚗💨
          </p>
        </Accordion>

        <Accordion
          title="🛏 Pro hosty z větší dálky – kde složit hlavu?"
          isOpen={
            openAccordion === "🛏 Pro hosty z větší dálky – kde složit hlavu?"
          }
          onClick={() =>
            toggleAccordion("🛏 Pro hosty z větší dálky – kde složit hlavu?")
          }
        >
          Pokud k nám jedete z dálky, máme pro vás zařízené ubytování přímo v
          penzionu, kde se bude svatba konat. (pokud si nejste jistí, jestli se
          to týká i vás, klidně se nás zeptejte.) Budeme rádi, když dorazíte už
          v pátek na večer – ať si v klidu vybalíte, rozkoukáte se a naladíte na
          svatební vlnu. Samozřejmě můžete přijet i v sobotu, jen mějte na
          paměti, že obřad je brzy a cesta z Jihu není úplně na otočku. Zůstat
          můžete až do neděle do 15:00 – takže dost času na vyspání se z
          kocoviny. Slavit se může klidně až do rána. 🥳
        </Accordion>

        <Accordion
          title="NOVÉ INFO! 🍽 Občerstvení pro hosty z větší dálky "
          isOpen={openAccordion === "🍽 Občerstvení pro hosty z větší dálky"}
          onClick={() =>
            toggleAccordion("🍽 Občerstvení pro hosty z větší dálky")
          }
        >
          Na pátek večer se budeme snažit připravit nějaké malé občerstvení, ale
          protože penzion nemá restauraci, bude lepší, když si s sebou taky něco
          přivezete. V sobotu ráno nebude plnohodnotná snídaně, ale něco malého
          k zakousnutí tu bude, takže pokud rádi snídáte pořádně a nestačí vám
          jen něco malého uzobávat, doporučujeme si přichystat vlastní zásoby.
          Pokud byste si večer chtěli dopřát něco víc než jen malé občerstvení,
          do Poličky to máte autem zhruba 10 minut, kde najdete několik
          restaurací a můžete si pochutnat na dobrém jídle. Po obřadu už si
          budeme všichni společně nacpávat pupíky – a jak se říká: „Šťastný lov
          aj rybolov! A nech sa stoly prehýbajú!“ 🦣
          <p>NOVÉ INFO:</p>
          <p>
            Večeře bude! Bude se podávat šunka sous vide s hořčicí a chlebem a
            guláš ze zvěřiny, kterou zastřelil nevěstin taťka.
          </p>
          <p>
            Doražte ale prosím v rozumnou hodinu, ať Vám má jídlo kdo dát a ať
            se nevěsta stihne vyspat dorůžova.
          </p>
          <p>K snídani bude sladké a slané pečivo, čaj a káva.</p>
        </Accordion>

        <Accordion
          title="💌 A co dary?"
          isOpen={openAccordion === "💌 A co dary?"}
          onClick={() => toggleAccordion("💌 A co dary?")}
        >
          Společnou domácnost už máme (včetně sady talířů i oblíbeného otvíráku
          na víno), takže pokud nám chcete udělat radost, budeme moc vděční za
          finanční příspěvek. Pomůže nám uskutečnit další společné plány – ať už
          velké nebo malé, spontánní nebo dospělácky rozumné. Děkujeme! ❤️
        </Accordion>

        <ElegantIntro>
          <p>
            Kdyby vás cokoli zajímalo nebo měli nějaký dotaz, klidně nám napište
            nebo zavolejte.
          </p>
          <p>A čas od času sem mrkněte — info se může trochu změnit.</p>
        </ElegantIntro>

        <FooterImage
          src={`${process.env.PUBLIC_URL}/footer.jpg`}
          alt="Wedding Footer"
        />
        <Footer>
          <p>Tááákhle moc se na Vás těšíme! ❤️</p>
        </Footer>
      </Wrapper>
    </>
  );
};

// Styled Components
const Wrapper = styled.div`
  background-color: ${colors.background};
  color: ${colors.text};
  font-family: "Playfair Display", serif;
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
  background: transparent;
  padding: 20px;
  width: 80%;
  margin: 20px auto;
  box-shadow: none;
  border-radius: 10px;
`;

const GallerySection = styled(Section)`
  padding: 40px 20px;
`;

const GalleryImage = styled.img`
  max-height: 600px;
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: none;
  display: block;
  margin: 0 auto;
`;

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
  background-color: ${colors.accent};
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

const AccordionWrapper = styled.div`
  background: ${colors.background};
  width: 80%;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-weight: bold;
  cursor: pointer;
  background: ${colors.accent};
  color: white;
  border-radius: 10px 10px 0 0;
`;

const AccordionContent = styled(motion.div).attrs(({ isOpen }) => ({
  initial: { height: 0, opacity: 0 },
  animate: isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 },
  transition: { duration: 0.4 },
}))`
  overflow: hidden;
  padding: ${({ isOpen }) => (isOpen ? "20px" : "0 20px")};
`;

const ChevronIcon = styled(FaChevronDown)`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export default App;
