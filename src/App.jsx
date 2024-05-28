import './App.css'
import Card from './components/Card/Card'

function App() {
  return (
    <>
      <div className="cards">
        <Card name="Java" imagem="https://salvatore.academy/devmon/1_java.png" />
        <Card name="Kotlin" imagem="https://salvatore.academy/devmon/2_kotlin.png" />
        <Card name="Android" imagem="https://salvatore.academy/devmon/3_android.png" />
      </div>
    </>
  )
}

export default App
