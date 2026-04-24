/* eslint-disable react/no-unescaped-entities */
import './about.css';
import Image from '../../assets/hero-2.jpg';
import AboutBox from './AboutBox';
import ButtonComponent from '../../components/button/ButtonComponent';
import { Bounce, JackInTheBox, Fade } from 'react-awesome-reveal';
// Import icons (Contoh menggunakan react-icons)
import { SiJavascript, SiPhp, SiVuedotjs, SiReact, SiExpress, SiLaravel, SiMysql, SiFigma } from 'react-icons/si';

const AboutView = () => {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" />, class: 'js' },
    { name: 'PHP', icon: <SiPhp color="#777BB4" />, class: 'php' },
    { name: 'Vue JS', icon: <SiVuedotjs color="#4FC08D" />, class: 'vue' },
    { name: 'React JS', icon: <SiReact color="#61DAFB" />, class: 'react' },
    { name: 'Express JS', icon: <SiExpress color="#000000" />, class: 'express' },
    { name: 'Laravel', icon: <SiLaravel color="#FF2D20" />, class: 'laravel' },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
    { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
  ];

  return (
    <section id="about" className="about container section">
      <Fade triggerOnce>
        <h2 className="section_title">About Me</h2>
      </Fade>

      <div className="about_container grid">
        <Bounce triggerOnce>
          <div className="profil-lingkaran">
            <img src={Image} alt="Profile" className="about_img" />
          </div>
        </Bounce>

        <div className="about_content">
          <JackInTheBox triggerOnce>
            <div className="about_info_card">
              <p className="about_description">
                I'm <strong>Moh. Iqbal Fatoni</strong>, a State Polytechnic of Malang student. 
                Focused on creating interactive and modern web experiences as a <strong>Frontend Developer</strong>.
              </p>
              <ButtonComponent 
                className="button" 
                redirect="https://drive.google.com/file/d/1oNTV7ActFcZXKqkT403IbDDM0joMWVL6/view?usp=sharing" 
                text="Download CV" 
              />
            </div>
          </JackInTheBox>

          <div className="skills_container">
            <h3 className="skills_subtitle">Tech Stack</h3>
            <div className="skills_list">
              {skills.map((skill, index) => (
                <Fade key={index} delay={index * 100} direction="up" triggerOnce>
                  <div className="skill_item">
                    <span className="skill_icon">{skill.icon}</span>
                    <span className="skill_name">{skill.name}</span>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bagian AboutBox (Statistik) */}
      <div className="stats_section">
         <AboutBox />
      </div>
    </section>
  );
};

export default AboutView;