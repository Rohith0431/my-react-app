import Card from "./Card";
import data from "./Data/data";
import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            {data.map((values, index) => {
              return (
                <div className="column is-4" key={index}>
                  <Card
                    image={values.img}
                    title={values.title}
                    tUsername={values.tUsername}
                    description={values.description}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
