import './ability.css';
import Image1 from '../../assets/ability-1.svg';
import Image2 from '../../assets/ability-2.svg';
import Image3 from '../../assets/ability-3.svg';
import { Fade, Bounce } from 'react-awesome-reveal';

const data = [
  {
    id: 1,
    image: Image1,
    title: 'Data Analyst',
    description: 'Analyze data with the goal of generating useful business insights. Work with data from various sources such as databases, spreadsheet files, or streaming data.',
  },
  {
    id: 2,
    image: Image2,
    title: 'Web Development',
    description: 'Create and maintain websites which includes creating user interfaces (UI), developing features and functionality, and optimizing website performance.',
  },
  {
    id: 3,
    image: Image3,
    title: 'Database Administrator',
    description: 'Design, manage and maintain databases. Ensure security, availability and integrity of data in the database.',
  },
];

const AbilityView = () => {
  return (
    <section id="ability" className="ability container section">
      <Fade>
        <h2 className="section_title">Ability</h2>
      </Fade>

      <div className="ability_container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="ability_card" key={id}>
              <Bounce>
                <img src={image} alt="" className="ability_img" />
                <h3 className="ability_title">{title}</h3>
                <p className="ability_description">{description}</p>
              </Bounce>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AbilityView;
