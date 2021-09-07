import React, { Component } from "react";
import "./stylesJS1/_stylesJS1.scss";
import { HashLink as Link } from 'react-router-hash-link';
class JS2 extends Component {
  render() {
    return (
      <div>
        <h1> JQuery, jquery libs, swiper(slick) и другие JS библиотеки</h1>
        <section className="mt-4">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/jsMain/JS2#jsstarter">Что такое JQuery?</Link></li>
                <li className="breadcrumb-item"><Link to="/jsMain/JS2#debug">Jquery библиотеки </Link></li>
                <li className="breadcrumb-item"><Link to="/jsMain/JS2#variables">Swiper</Link></li>
                <li className="breadcrumb-item"><Link to="/jsMain/JS2#operators"> Slick </Link></li>
                <li className="breadcrumb-item"><Link to="/jsMain/JS2#cond_statements">Другие библиотеки </Link></li>
                <li className="breadcrumb-item">
                  <Link to="HTML3#resources">Дополнительные ресурсы </Link>
                </li>
                <li className="breadcrumb-item"><Link to="/jsMain/JS2#homework">Домашнее задание</Link></li>
              </ol>
            </nav>
          </div>
        </section>
        <section id="resources">
            <div className="container">
              <h2 className="text-center mt-5">Дополнительные ресурсы</h2>
              <div className="alert bg-dark" role="alert">
                <a
                  className="d-block text-decoration-underline text-light"
                  href="https://habr.com/ru/company/piter/blog/308134/"
                >
                 Зачем нам JQuery?
                </a>
                <a
                  className="d-block text-decoration-underline text-light"
                  href="https://kinsta.com/blog/javascript-libraries/"
                >
                 Лучшие JS библиотеки и фреймоворки
                </a>
              </div>

              <p className="text-center">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/9Pqf_AIT2ZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </p>
            </div>
          </section>
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
