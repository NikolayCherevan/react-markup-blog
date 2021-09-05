import React, { Component } from "react";

class Advanced4 extends Component {
  render() {
    return (
      <div>
        <h1>
          Верстка “под ключ”. Pixel perfect extension, валидация верстки,
          кроссбраузерность, адаптивность.
        </h1>
        <section>
          <div className="container">
            <h2 className="mt-4 text-center">Презентация</h2>
            <p className="text-center">
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vQl77iJJVGeZhS4zRMrh9ISw5aJ6FALdfrFrTvPsFDONHqdj8alhzMblygygdIvU06NY_yPYNgAavPn/embed?start=false&loop=false&delayms=3000"
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
                  Самостоятельно определите для себя понравившийся макет и
                  выполните верстку, учитывая все валидаторы, кроссбраузерность
                  и скорость загрузки
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Advanced4;
