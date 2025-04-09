import './i18n';
import './App.scss'
import NavigationBar from './sections/NavigationBar';


function App() {
  return (
    <div>
      <NavigationBar />
      <main className="ml-20 md:ml-40 w-full bg-black text-white min-h-screen p-8">
        <h1 className="text-3xl font-bold">Witaj!</h1>
        <p className="mt-4">To Twoje portfolio ✨</p>
      </main>
    </div>
  );
}


export default App
