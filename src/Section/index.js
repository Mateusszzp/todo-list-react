import "./style.css";

const Section = ({ title, body, exstraHeaderContent }) => (
  <section>
    <header className="section__header">
      <h2><span className="section__list">{title}</span></h2>
      {exstraHeaderContent}
    </header>
    <div className="task">
      {body}
    </div>
  </section>
);

export default Section;