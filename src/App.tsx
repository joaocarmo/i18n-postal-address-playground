import logo from './data/logo.svg'
import './App.css'
import { StoreProvider } from './store'
import Fields from './components/Fields'
import Options from './components/Options'
import Results from './components/Results'

declare const __LIB_VERSION__: string
declare const __AUTHOR_NAME__: string
declare const __AUTHOR_URL__: string

const App = () => (
  <StoreProvider>
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h3>i18n-postal-address playground</h3>
      </header>
      <main className="app-main">
        <div className="app-main-content">
          <Fields />
          <div className="main-results">
            <h4>About</h4>
            <section className="main-about">
              Feel free to play around with this interactive playground for the{' '}
              <a
                href="https://github.com/joaocarmo/i18n-postal-address"
                target="_blank"
                rel="noopener noreferrer"
              >
                i18n-postal-address
              </a>{' '}
              JavaScript library. <code>[v{__LIB_VERSION__}]</code>
            </section>
            <h4>Options</h4>
            <Options />
            <h4>Output</h4>
            <Results />
          </div>
        </div>
      </main>
      <footer className="app-footer">
        <p>
          Made with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          by{' '}
          <a href={__AUTHOR_URL__} target="_blank" rel="noopener noreferrer">
            {`@${__AUTHOR_NAME__}`}
          </a>
        </p>
      </footer>
    </div>
  </StoreProvider>
)

export default App
