import ShortInfo from './ShortInfo';
import Menu from './Menu';
import Social from './Social';

function NavigationBar() {
  return (
<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <ShortInfo />
      <Menu />
      <Social />
    </header>
  );
}

export default NavigationBar;
