import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
    <>
        <Header title="O autorze" />
        <Section
            title="Mateusz Paśko"
            body={<><p><strong>Mam 36 lat urodziłem się w Rzeszowie aktualnie zamieszkuje Wrocław.😊</strong></p>
               <p> W chwili obecnej
                <strong> kończe kurs Frontend developer Java Script</strong>, jestem osobą systematyczną, zdeterminowaną z przyjaznym
                usposobieniem.
                Cenie sobie prace w przyjaznej atmosferze opartej na koleżeństwie. Dzięki kursowi mam nadzieje na zmiane branży i rozpoczęcie
                pracy w
                IT jako programista.😁. Jestem fanem dobrych filmów opartch na faktach lub  science fiction dobrej pordukcji😎.
                Muzyka słucham długie kawałki typu <strong>latin house</strong> wprawiają mnie w dobry nastru i pozalają się skupić.
                <b>Mam nadzieję że spotkamy się w Naszej nowej pracy</b> 🖐</p> </>} />
    </>
);
export default AuthorPage;