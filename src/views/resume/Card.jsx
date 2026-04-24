import PropTypes from 'prop-types';
import { Slide } from 'react-awesome-reveal';
import { GraduationCap } from 'lucide-react';

const Card = ({ year, title, desc, index }) => {
  // Tentukan arah animasi berdasarkan indeks (genap/ganjil)
  const isEven = index % 2 === 0;

  return (
    <div className={`timeline_item ${isEven ? 'left' : 'right'}`}>
      <div className="timeline_content_wrapper">
        <Slide direction={isEven ? "left" : "right"} triggerOnce>
          <div className="timeline_card">
            <div className="timeline_header">
              <span className="timeline_date">{year}</span>
              <GraduationCap className="timeline_icon_inner" size={18} />
            </div>
            <h3 className="timeline_title">{title}</h3>
            <p className="timeline_text">{desc}</p>
          </div>
        </Slide>
      </div>
      
      {/* Titik tengah timeline */}
      <div className="timeline_dot">
        <div className="dot_inner"></div>
      </div>
    </div>
  );
};

Card.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;