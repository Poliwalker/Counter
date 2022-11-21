import GlobalStyled from './GlobalStyles/GlobalStyles';
import Logo from './Components/Logo/Logo';
import CountContextProvider from './Context/CountContext';
import Counter from './Components/Counter/Counter';

function App() {
	return (
		<>
			<CountContextProvider>
				<Counter />
			</CountContextProvider>
			<Logo />
			<GlobalStyled />
		</>
	);
}

export default App;
