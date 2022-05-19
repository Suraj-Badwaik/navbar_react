
import './App.css';
import Logos from './components/Logos';
import Links from './components/Links';
import Button from './components/Button';
import styles from './components/navbar.module.css';


function App() {
  return (
    <div className={styles.App1}>
      
        <Logos />
        <Links />
        <Button />
     
    </div>
  );
}

export default App;
