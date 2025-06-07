export default function About({theme}) {
  const styles = {
    color: theme && 'white',
    borderColor: theme && 'white'
  }
  return (
    <section className="about-section">
      <div style={styles}>
        <h2 style={styles}>Dhowaan.</h2>
      </div>
    </section>
  )
}