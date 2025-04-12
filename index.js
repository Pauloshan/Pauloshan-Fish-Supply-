// pages/index.js
export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#0f172a', fontSize: '2.5rem' }}>Pauloshan Fish Supply</h1>
      <p style={{ fontSize: '1.2rem', color: '#334155' }}>
        Sustainably Farmed Catfish from Ebonyi State, Nigeria.
      </p>
      <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>Our Services</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>Wholesale & Retail Catfish Sales</li>
        <li>Smoked & Packaged Fish</li>
        <li>Aquaculture Training Programs</li>
        <li>Cold Chain Logistics</li>
      </ul>
      <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>Contact</h2>
      <p>Email: pauloshanfish@gmail.com</p>
      <p>Phone: +234 812 345 6789</p>
    </div>
  );
}
