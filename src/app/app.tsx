import '../styles.css';
import Main from './layout/Main';
import Header from './layout/SecondaryHeader';
import Footer from './layout/SecondaryFooter';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 to-yellow-50">
      <Header />
      <Main />

      <Footer />
    </div>
  );
};

export default App;
