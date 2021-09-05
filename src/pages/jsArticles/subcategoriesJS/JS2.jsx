import React, { Component } from "react";
import "./stylesJS1/_stylesJS1.scss";
class JS2 extends Component {
  render() {
    return (
      <div>
        <h1> JQuery, jquery libs, swiper(slick) и другие JS библиотеки</h1>
        <section>
          <div className="container">
            <h2 className="mt-4 text-center">Презентация</h2>
            <p className="text-center">
              <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT8dlLo9FhRx87tRQbOvD4KtohYVS0cJ8SAU34rissEUBouT7HpeB-ikm47uwbUKLL1Fn_3cR7PHELt/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
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
                  придумать и реализовать приложение ( <b> TODO list </b>, генератор
                  чего-то) либо создать компонент по типу <b> бургер - меню </b>, <b> табов </b>
                  или  <b> аккордеона </b> <em>на JQuery или JS</em> 
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default JS2;
