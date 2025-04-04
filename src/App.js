import React from "react";

const colors = {
  background: "#d9b9b0",
  primary: "#673535",
  secondary: "#3e161b",
  accent: "#7d7c6d",
  text: "#865151"
};

const App = () => {
  return (
    <div style={{ backgroundColor: colors.background, color: colors.text, minHeight: "100vh", padding: "20px" }}>
      <header style={{ backgroundColor: colors.primary, padding: "20px", borderRadius: "10px", textAlign: "center" }}>
        <h1>Welcome to Our Wedding!</h1>
        <p>We are excited to celebrate with you!</p>
      </header>

      <section style={sectionStyle}>
        <h2>Wedding Colors</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {Object.values(colors).map((color, index) => (
            <div key={index} style={{ backgroundColor: color, width: "50px", height: "50px", borderRadius: "5px" }}></div>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Event Details</h2>
        <p><strong>Date:</strong> [Your Wedding Date]</p>
        <p><strong>Location:</strong> [Your Wedding Venue]</p>
        <p><strong>Time:</strong> [Wedding Time]</p>
      </section>

      <section style={sectionStyle}>
        <h2>Menu</h2>
        <ul>
          <li>Chicken</li>
          <li>Vegetarian</li>
          <li>Fish</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2>RSVP</h2>
        <form action="https://formspree.io/f/mpwpjeoe" method="POST" style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
          <input type="text" name="name" placeholder="Your Name" required style={inputStyle} />
          <input type="email" name="email" placeholder="Email" required style={inputStyle} />
          <select name="attendance" style={inputStyle}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <select name="meal" style={inputStyle}>
            <option value="chicken">Chicken</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="fish">Fish</option>
          </select>
          <button type="submit" style={{ backgroundColor: colors.primary, color: "white", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer" }}>Submit</button>
        </form>
      </section>

      <footer style={{ marginTop: "20px", textAlign: "center" }}>
        <p>We can't wait to celebrate with you! ❤️</p>
      </footer>
    </div>
  );
};

const sectionStyle = {
  background: "white",
  padding: "20px",
  margin: "20px 0",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
};

const inputStyle = {
  padding: "10px",
  width: "80%",
  maxWidth: "300px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

export default App;
