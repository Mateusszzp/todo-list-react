import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
    <>
        <Header title="O autorze" />
        <Section
            title="Mateusz Paśko"
            body={<><p><strong>Mam 36 lat urodziłem się w Rzeszowie aktualnie zamieszkuje Wrocław.😊</strong></p>
                <p> W chwili obecnej
                    <strong> programuje na stanowisku Junior Frontend developer Java Script, i ruszam z nowym projektem .</strong>,
                    Jestem osobą systematyczną, zdeterminowaną z przyjaznym
                    usposobieniem, umiem pracować w zespole.
                    Cenie sobie prace w przyjaznej atmosferze opartej na koleżeństwie.
                    Jestem fanem dobrych filmów opartch na faktach lub science fiction dobrej pordukcji😎.
                    Uwielbiam muzykę i długie kawałki typu <strong>latin house set</strong> wprawiają mnie w dobry nastru i pozwalają się skupić.
                    Szanuje ludzi którzy dają szanse i nieboją się ryzyka ... 💪a jak jest z wami ?
                    <b> Mam nadzieję że kiedyś się spotkamy na kawie </b> 🖐</p> </>} />
    </>
);
export default AuthorPage;