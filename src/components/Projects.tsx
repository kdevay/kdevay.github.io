import Sketch from '../images/sketch.png';
import Froot from '../images/froot.png';
import Weather from '../images/weather.png';
import Dash from '../images/dash.png';
import SignUp from '../images/signUp.png';

export default function Projects(props) {
  const tileClass =
    'm-[10px] mt-0 w-[430px] rounded-[6px] overflow-hidden border-4 border-darkGray';

  return (
    <div className='font-main w-full flex flex-col items-start justify-center gap-[90px]'>
      <div className='flex flex-wrap w-[90vw] gap-[25px] justify-center'>
        <div className={tileClass}>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://kdevay.github.io/Etch-a-Sketch/'
          >
            <img
              className='w-full h-full block'
              src={Sketch}
              alt='Screenshot of an etch-a-sketch emulator webpage'
            />
          </a>
        </div>
        <div className='flex flex-col items-start w-[430px] gap-[10px] font-light text-[16px]'>
          <h2 className='font-heading tracking-[4px] mb-3'>Swipe-a-Sketch</h2>
          <h3>
            This Etch-a-Sketch emulator allows users to draw images with the
            swipe of a mouse.
          </h3>
          <h3>
            Each element, aside from the root container, was created solely with
            JavaScript.
          </h3>
          <h3>
            The sketch-area is a grid of divs with adjustable dimensions,
            ranging from 10-by-10 to 100-by-100.
          </h3>
          <h3>
            When the mouse swipes or hovers over a div, its color scheme changes
            from light to dark blue, mimicking the action of an etched line.
          </h3>
        </div>
      </div>
      <div className='flex flex-wrap w-[90vw] gap-[25px] justify-center'>
        <div className={tileClass}>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://kdevay.github.io/odin-shopping-cart/'
          >
            <img
              className='w-full h-full block'
              src={Froot}
              alt='Screenshot of a shopping webpage'
            />
          </a>
        </div>
        <div className='flex flex-col items-start w-[430px] gap-[10px] font-light text-[16px]'>
          <h2 className='font-heading tracking-[4px] mb-3'>Froot Store</h2>
          <h3>
            The Froot Store was built using React and React Router to emulate a
            responsive online retail environment with client-side routing.
          </h3>
          <h3>
            This app's development was test-driven, with the aid of Jest and the
            React testing library.
          </h3>
        </div>
      </div>
      <div className='flex flex-wrap w-[90vw] gap-[25px] justify-center'>
        <div className={tileClass}>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://kdevay.github.io/odin-weather/'
          >
            <img
              className='w-full h-full block'
              src={Weather}
              alt='Screenshot of a weather webpage'
            />
          </a>
        </div>
        <div className='flex flex-col items-start w-[430px] gap-[10px] font-light text-[16px]'>
          <h2 className='font-heading tracking-[4px] mb-3'>Weather</h2>
          <h3>
            This project allows users to view local weather conditions of a
            specific location, by querying OpenWeather's geocoding and weather
            APIs.
          </h3>
          <h3>
            A "loading" component displays from the time the form is submitted
            until the information comes back from the API.
          </h3>
          <h3>
            The page styling changes to reflect the weather and time of day.
          </h3>
        </div>
      </div>
      <div className='flex flex-wrap w-[90vw] gap-[25px] justify-center'>
        <div className={tileClass}>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://kdevay.github.io/sign-up/'
          >
            <img
              className='w-full h-full block'
              src={SignUp}
              alt='Screenshot of a weather webpage'
            />
          </a>
        </div>
        <div className='flex flex-col items-start w-[430px] gap-[10px] font-light text-[16px]'>
          <h2 className='font-heading tracking-[4px] mb-3'>Sign Up</h2>
          <h3>
            This is a generic sign-up page to practice form validation, external
            fonts, and layering semi-transparent elements.
          </h3>
          <h3>
            It was built using entirely vanilla JavaScript, HTML, and CSS.
          </h3>
        </div>
      </div>
      <div className='flex flex-wrap w-[90vw] gap-[25px] justify-center'>
        <div className={tileClass}>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://kdevay.github.io/dash-odin/'
          >
            <img
              className='w-full h-full block'
              src={Dash}
              alt='Screenshot of a weather webpage'
            />
          </a>
        </div>
        <div className='flex flex-col items-start w-[430px] gap-[10px] font-light text-[16px]'>
          <h2 className='font-heading tracking-[4px] mb-3'>Dashboard</h2>
          <h3>
            This project is purely design driven, with a particular focus on CSS
            grid and flexbox.
          </h3>
          <h3>
            The content is an homage to Twin Peaks, and in service of that, I
            used GIMP to create custom icons referencing symbols from the show.
          </h3>
        </div>
      </div>
    </div>
  );
}
