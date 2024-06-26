/* eslint-disable react/no-unescaped-entities */
import './about.css';
import Image from '../../assets/hero-2.jpg';
import AboutBox from './AboutBox';
import ButtonComponent from '../../components/button/ButtonComponent';

const AboutView = () => {
  return (
    <div>
      <section className="about container section">
        <h2 className="section_title">About Me</h2>

        <div className="about_container grid">
          <div className="profil-lingkaran">
            <img src={Image} alt="" className="about_img" />
          </div>
          <div className="about_data grid">
            <div className="about_info">
              <p className="about_description">Saya Moh. Iqbal Fatoni, mahasiswa Politeknik Negeri Malang. Saya memiliki keahlian dibidang pengembang web khususnya Front-End Developer.</p>
              <ButtonComponent className="button" redirect="https://drive.google.com/drive/folders/1SA9bzYPKCG4-Y6AEkNwkXLdVPMgzor2z?usp=sharing" text="Download CV" />
            </div>
            <div className="about_skills grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">HTML</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage html"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">CSS</h3>
                  <span className="skills_number">80%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage css"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">JAVASCRIPT</h3>
                  <span className="skills_number">80%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage javascript"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">VUE JS</h3>
                  <span className="skills_number">70%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage vue"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">REACT</h3>
                  <span className="skills_number">70%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage react"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutBox />
      </section>
    </div>
  );
};

export default AboutView;
