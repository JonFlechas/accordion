import './App.css'
import QA from './QA'
import questions from './data'
function App() {
  return (
    <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <section>
          {questions.map((question) => {
            return <QA key={question.id} {...question} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App
