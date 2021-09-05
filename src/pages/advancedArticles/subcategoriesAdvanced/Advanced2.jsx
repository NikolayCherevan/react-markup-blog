import React, { Component } from "react";
import hw1 from "./imagesAdvanced2/hw1.jpg";
import hw2 from "./imagesAdvanced2/hw2.jpg";
import hw3 from "./imagesAdvanced2/hw3.jpg";
class Advanced2 extends Component {
  render() {
    return (
      <div>
        <h1>
          Best practices в мире верстки. Правильное название классов, id. БЭМ.
          Семантика. Emmet плагин
        </h1>
        <section>
          <div className="container">
            <h2 className="mt-4 text-center">Презентация</h2>
            <p className="text-center">
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vRRboe10rq-xkVD0hgQCAnhxhwXSesD0KH1xTu5UphlQYVuThpe1LxQb11OT7H57SaqX44C2oeDwF1q/embed?start=false&loop=false&delayms=3000"
                frameborder="0"
                width="100%"
                height="569"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            </p>
          </div>
        </section>
        <section id="hw">
          <div className="container">
            <h2 className="mt-4 text-center">Домашнее задание</h2>
            <div className="bd-callout bd-callout-warning">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a className="btn btn-primary" role="button">
                    1.
                  </a>{" "}
                  Cверстать секции по примеру, используя{" "}
                  <strong>webpack</strong> сборщик, переменные и миксины{" "}
                  <strong>SCCS</strong>{" "}
                  <p className="text-center layout">
                    <img className="fit-image" src={hw1} alt="" />

                    <img className="fit-image" src={hw2} alt="" />
                    <img className="fit-image" src={hw3} alt="" />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Advanced2;
