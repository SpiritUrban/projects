function App() {
  return (
    <main style={{
      minHeight: '100vh',
      margin: 0,
      display: 'grid',
      placeItems: 'center',
      background: '#050607',
      color: '#e8e1d5',
      fontFamily: 'JetBrains Mono, monospace',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 520, padding: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 72px)', marginBottom: '1rem' }}>
          Digital Workshop
        </h1>
        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#cfc7b9' }}>
          React app is configured in `app/` so the existing root page stays untouched.
        </p>
      </div>
    </main>
  )
}

export default App
