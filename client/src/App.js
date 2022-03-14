import './App.scss';
import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';

function App () {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<About />
			<Skills />
			<Testimonials />
			<Work />
			<Footer />
		</div>
	);
}

export default App;
