import './ability.css';
import Image1 from '../../assets/ability-1.svg';
import Image2 from '../../assets/ability-2.svg';
import Image3 from '../../assets/ability-3.svg';

const data = [
  {
    id: 1,
    image: Image1,
    title: 'Data Analyst',
    description: 'Menganalisis data dengan tujuan menghasilkan wawasan bisnis yang berguna. Bekerja dengan data dari berbagai sumber seperti database, file spreadsheet, atau data streaming.',
  },
  {
    id: 2,
    image: Image2,
    title: 'Web Development',
    description: 'Membuat dan memelihara situs web yang mencakup pembuatan antarmuka pengguna (UI), pengembangan fitur dan fungsionalitas, serta optimalisasi kinerja situs web.',
  },
  {
    id: 3,
    image: Image3,
    title: 'Database Administrator',
    description: 'Merancang, mengelola, dan memelihara basis data. Memastikan keamanan, ketersediaan, dan integritas data dalam basis data.',
  },
];

const AbilityView = () => {
  return (
    <section id="ability" className="ability container section">
      <h2 className="section_title">Ability</h2>
      <div className="ability_container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="ability_card" key={id}>
              <img src={image} alt="" className="ability_img" />
              <h3 className="ability_title">{title}</h3>
              <p className="ability_description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AbilityView;
