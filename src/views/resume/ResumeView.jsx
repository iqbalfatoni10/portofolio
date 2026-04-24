import './resume.css';
import Data from './Data';
import Card from './Card';
import { Fade } from 'react-awesome-reveal';

const ResumeView = () => {
  return (
    <section id="resume" className="resume section container">
      <Fade triggerOnce>
        <h2 className="section_title">Experience</h2>
      </Fade>

      <div className="resume_container">
        <div className="timeline_line"></div>
        <div className="timeline_items_wrapper">
          {Data.map((val, index) => (
            <Card 
              key={val.id} 
              index={index}
              year={val.year} 
              title={val.title} 
              desc={val.desc} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeView;