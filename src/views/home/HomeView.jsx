import './home.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Profil from '../../assets/hero.jpg';
import SocialView from './SocialView';
import ScrollDown from './ScrollDown';
import ShapesComponent from '../../components/shapes/ShapesComponent';
import AboutView from '../about/AboutView';
import AbilityView from '../ability/AbilityView';
import ResumeView from '../resume/ResumeView';
import PortofolioView from '../portofolio/PortofolioView';
import ContactView from '../contact/ContactView';
import ButtonComponent from '../../components/button/ButtonComponent';

const HomeView = () => {
  return (
    <>
      <section id="home" className="home container">
        <div className="intro">
          <div className="profil-lingkaran">
            <img src={Profil} alt="" className="home_img" />
          </div>
          <h1 className="home_name">Moh. Iqbal Fatoni</h1>
          <span className="home_education">Front-End Developer</span>
          <SocialView />
          <AnchorLink href="#contact" className="button">
            Hire Me
          </AnchorLink>
          <ScrollDown />
        </div>
        <ShapesComponent />
      </section>
      <AboutView />
      <AbilityView />
      <ResumeView />
      <PortofolioView />
      <ContactView />
    </>
  );
};

export default HomeView;
