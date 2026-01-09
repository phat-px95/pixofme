import '../styles.css';
import Main from './layout/Main';
import Header from './layout/Header';
import Footer from './layout/Footer';


const App = () => {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: '#fef7f9',
        backgroundImage: 'radial-gradient(#FFB6C1 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
    >
      <Header />
      <Main />

      <Footer />
    </div>
  );
};

export default App;
