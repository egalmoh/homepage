import { TriangleAlert } from "lucide-react"

export default function Error({theme}) {

  const styles = {
    color: 'red'
  }
  return (
    <section className="error-section">
      <div>
        <h2 style={styles}>404</h2>
        <TriangleAlert style={{color: 'red'}} size={100} />
        <h2 style={styles}>Page-kan lama helin</h2>
      </div>
    </section>
  )
}