import { resources } from "./assets/ressurser";
import { DOMContentLoaded } from "./assets/ressursbytte";
import "./style/style.scss";

function App() {
  return (
    <>
      <header>
        <nav>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Sanity and headless CMS</li>
            </ul>
        </nav>
    </header>
    <main className="content-wrapper">
        <section className="content"></section>
    </main>

    </>
  )
}

export default App