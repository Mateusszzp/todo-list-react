import { SectionsTitle, Title, Task } from "./styled"

const Section = ({ title, body, exstraHeaderContent }) => (
  <section>
    <SectionsTitle >
      <h2><Title >
        {title}
      </Title>
      </h2>
      {exstraHeaderContent}
    </SectionsTitle>
    <Task>
      {body}
    </Task>
  </section>
);

export default Section;