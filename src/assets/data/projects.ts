import Sketch from '../images/sketch.png';
import Froot from '../images/froot.png';
import Weather from '../images/weather.png';
import Dash from '../images/dash.png';
import SignUp from '../images/signUp.png';
import Explore from '../images/explore.jpg';

interface Project {
  href: string;
  imageSrc: string;
  alt: string;
  title: string;
  description: string[];
}

const projects: Project[] = [
  {
    href: 'https://explore.skillup.org/jobs',
    imageSrc: Explore,
    alt: 'Screenshot of the SkillUp Jobs Page',
    title: 'SkillUp Explore App',
    description: [
      'This workforce app was my primary responsibility at WhereWeGo.',
      'While the majority of my contributions were to the frontend of the app, which was built with React and Next.js, I was responsible for the full stack including Nest API, Payload CMS, and Mongo Database.',
      'During my time here I refactored roughly 90% of the app, and contributed many new features including an integration with EvolveMe, a youth-oriented up-skilling app created by American Student Assistance (ASA).',
    ],
  },
  {
    href: 'https://kdevay.github.io/Etch-a-Sketch/',
    imageSrc: Sketch,
    alt: 'Screenshot of an etch-a-sketch emulator webpage',
    title: 'Swipe-a-Sketch',
    description: [
      'This Etch-a-Sketch emulator allows users to draw images with the swipe of a mouse.',
      'Each element, aside from the root container, was created solely with JavaScript.',
      'The sketch-area is a grid of divs with adjustable dimensions, ranging from 10-by-10 to 100-by-100.',
      'When the mouse swipes or hovers over a div, its color scheme changes from light to dark blue, mimicking the action of an etched line.',
    ],
  },
  {
    href: 'https://kdevay.github.io/odin-shopping-cart/',
    imageSrc: Froot,
    alt: 'Screenshot of a shopping webpage',
    title: 'Froot Store',
    description: [
      'The Froot Store was built using React and React Router to emulate a responsive online retail environment with client-side routing.',
      "This app's development was test-driven, with the aid of Jest and the React testing library.",
    ],
  },
  {
    href: 'https://kdevay.github.io/odin-weather/',
    imageSrc: Weather,
    alt: 'Screenshot of a weather webpage',
    title: 'Weather',
    description: [
      "This project allows users to view local weather conditions of a specific location, by querying OpenWeather's geocoding and weather APIs.",
      "A 'loading' component displays from the time the form is submitted until the information comes back from the API.",
      'The page styling changes to reflect the weather and time of day.',
    ],
  },
  {
    href: 'https://kdevay.github.io/sign-up/',
    imageSrc: SignUp,
    alt: 'Screenshot of a sign-up webpage',
    title: 'Sign Up',
    description: [
      'This is a generic sign-up page to practice form validation, external fonts, and layering semi-transparent elements.',
      'It was built using entirely vanilla JavaScript, HTML, and CSS.',
    ],
  },
  {
    href: 'https://kdevay.github.io/dash-odin/',
    imageSrc: Dash,
    alt: 'Screenshot of a Twin Peaks-themed dashboard webpage',
    title: 'Dashboard',
    description: [
      'This project is purely design driven, with a particular focus on CSS grid and flexbox.',
      'The content is an homage to Twin Peaks, and in service of that, I used GIMP to create custom icons referencing symbols from the show.',
    ],
  },
];

export default projects;
