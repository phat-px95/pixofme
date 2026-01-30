import '../styles.css';
import Main from './layout/Main';
import Header from './layout/Header';
import Footer from './layout/Footer';

const App = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <Main />

      <Footer />
    </div>
  );
};

export default App;
