import './App.css';
import './style.css';
import { Header } from './Header'
import CardComponent from './CardComponent';
import supervisorImage from "./images/icon-supervisor.svg"
import teamBuilderImage from "./images/icon-team-builder.svg"
import karmaImage from "./images/icon-karma.svg"
import calculatorImage from "./images/icon-calculator.svg"



function App() {
  return (
    <div className="app">
    <html>
      <Header></Header>
      <main>
        <div className="wrapper">
          <div className="card-layout">
            <div className="column">
              <CardComponent title='Supervisor' description='Monitors activity to identify project roadblocks'
                imageSrc={supervisorImage} hslColour='hsl(179, 62%, 55%)'></CardComponent>
            </div>

            <div className="column">
              <CardComponent title='Team Builder' description='Scans our talent network to create the optimal team for your project'
                imageSrc={teamBuilderImage} hslColour='hsl(0, 75%, 61%)'></CardComponent>
              <CardComponent title='Karma' description='Regularly evaluates our talent to ensure quality'
                imageSrc={karmaImage} hslColour='hsl(33, 79%, 66%)'></CardComponent>
            </div>

            <div className="column">
              <CardComponent border-teal title='Calculator' description='Uses data from past projects to provide better delivery estimates'
                imageSrc={calculatorImage} hslColour='hsl(211, 63%, 63%)'></CardComponent>
            </div>
          </div>
        </div>
      </main>
      </html>
    </div>
  );
}

export default App;
