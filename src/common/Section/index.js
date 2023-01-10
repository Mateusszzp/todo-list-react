import { SectionsTitle, Title, Task } from "./styled"

const Section = ({ title, body, exstraHeaderContent,button }) => (
  <section>
    <SectionsTitle >
      <h2><Title >
        {title}
      </Title>
      </h2>{button}
      {exstraHeaderContent}
    </SectionsTitle>
    <Task>
      {body}
    </Task>
  </section>
);

export default Section;