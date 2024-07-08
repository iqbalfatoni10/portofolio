import './portofolio.css';
import Menu from './Menu';
import { useState } from 'react';
import { Fade, Slide, Bounce } from 'react-awesome-reveal';

const PortofolioView = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updateItems);
  };

  return (
    <section id="porto" className="work container section">
      <Fade>
        <h2 className="section_title">Recent Works</h2>
      </Fade>

      <div className="work_filters">
        <Slide>
          <span className="work_item" onClick={() => setItems(Menu)}>
            Everything
          </span>
        </Slide>
        <Slide>
          <span className="work_item" onClick={() => filterItem('Data Analyst')}>
            Data Analyst
          </span>
        </Slide>
        <Slide>
          <span className="work_item" onClick={() => filterItem('Web Development')}>
            Web Development
          </span>
        </Slide>
        <Slide>
          <span className="work_item" onClick={() => filterItem('Database Administrator')}>
            Database Administrator
          </span>
        </Slide>
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work_card" key={id}>
              <Bounce>
                <div className="work_thumbnail">
                  <img src={image} alt="" className="work_img" />
                  <div className="work_mask"></div>
                </div>
              </Bounce>
              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a href={link} className="work_button">
                <i className="icon-link work_button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PortofolioView;
