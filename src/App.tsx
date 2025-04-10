import "./i18n";
import "./App.scss";
import NavigationBar from "./sections/NavigationBar";
import Content from "./sections/Content";

function App() {

  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div id="spotlight" className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <NavigationBar />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
