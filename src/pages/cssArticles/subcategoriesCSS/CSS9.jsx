import React, { Component } from "react";
import "./stylesCSS9/_stylesCSS9.scss";
import { HashLink as Link } from "react-router-hash-link";
import SyntaxHighLighter from "react-syntax-highlighter";
import hw1 from "./imagesCSS9/mobilehw.jpg";
import hw2 from "./imagesCSS9/pchw.jpg";
import banner from "./imagesCSS9/frameworks.png";
import { ArrowRightOutlined, ArrowDownOutlined } from "@ant-design/icons";

class CSS9 extends Component {
  render() {
    return (
      <div>
        <h1>CSS frameworks. Bootstrap(Uikit, Materialize)</h1>
        <section className="mt-4">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS9#for_what">
                    Что такое css framework
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS9#bootstrap">Bootstrap</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS9#uikit">Uikit</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS9#materialize"> Materialize </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS9#otherframeworks">
                    Иные фреймворки
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS9#resources">
                    Дополнительные ресурсы{" "}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS9#hw">Домашнее задание </Link>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <section id="for_what">
          <div className="container">
            <div className="banner-wrapper text-center mt-5">
              <img src={banner} alt="" />
            </div>
            <h2 className="text-center mt-5">Что такое CSS framework?</h2>

            <p className="bd-callout bd-callout-info">
              CSS-фреймворки созданы для упрощения работы верстальщика,
              исключения ошибок при создании проекта и избавления от скучного
              монотонного написания одного и того же кода
            </p>
            <p className="bd-callout bd-callout-info">
              Профессиональное сообщество разработчиков до сих пор спорит,
              хорошо или плохо использовать фреймворки
            </p>
          </div>
        </section>
        <section id="bootstrap">
          <div className="container">
            <h2 className="text-center mt-5">
              <b>Bootstrap</b>
            </h2>
            <img
              src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-social.png"
              alt=""
            />
            <p className="bd-callout bd-callout-info">
              <p>
                {" "}
                Один из самых известных CSS-фреймворков на сегодняшний день.
                Имеет в своем составе шаблоны для отрисовки кнопок, сайдбаров,
                навигационных панелей, форм и других элементов сайта.
              </p>
              <p>
                {" "}
                Включает себя JavaScript-расширения. Основные инструменты
                bootstrap — шаблоны, @media, формы, навигация, алерты,
                типографика и конечно же, сетки.
              </p>
              <p>
                {" "}
                Bootstrap совместим со всеми основными современными браузерами,
                но в старых версиях браузеров могут быть проблемы. Поддерживает
                адаптивность. Использует языки Less и Sass.
              </p>
            </p>
            <div className="alert bg-dark text-light" role="alert">
              Установить bootstrap можно при помощи скачанных файлов фреймворка,
              либо npm, либо через{" "}
              <a
                className="text-decoration-underline text-light"
                href="https://habr.com/ru/company/selectel/blog/463915/"
              >
                CDN
              </a>
              <p>
                Подробнее описано{" "}
                <a
                  className="text-decoration-underline text-light"
                  href="https://getbootstrap.com/docs/5.0/getting-started/download/"
                >
                  здесь
                </a>
              </p>
            </div>
            <p>
              {" "}
              После подключения, просто копируем разметку компонента или грида,
              вставляем в код и не думаем о стилях, ведь за нас это уже сделал
              фреймфорк
            </p>
            <SyntaxHighLighter language="html">
              {`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Компонент карточки bootstrap</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`}
            </SyntaxHighLighter>

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  Компонент <b> карточки </b> bootstrap
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
            <hr />
            <p className="mt-5">
              {" "}
              Вот <b> модалка (модальное окно) </b> , к примеру. Чтобы сделать
              собственную модалку, потребуется около часа работы. А вот что
              предоставляет нам бустрап:{" "}
            </p>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Launch demo modal
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">...</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <SyntaxHighLighter language="html">
              {`<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>`}
            </SyntaxHighLighter>

            <hr />
            <div className="alert bg-dark text-light" role="alert">
              Есть еще множество компонентов{" "}
              <a
                className="text-decoration-underline text-light"
                href="https://getbootstrap.com/docs/5.0/components/modal/"
              >
                {" "}
                здесь
              </a>{" "}
              в слевом сайдбаре, пункт <b>Components</b>, рассмотрите некоторые
              из них, чтобы иметь представление о возможностях bootstrap
              <p>
                Не так давно вышла 5 версия бустрап.{" "}
                <a
                  className="text-decoration-underline text-light"
                  href="https://vc.ru/dev/244506-vyshel-bootstrap-5-ocenivaem-glavnye-novovvedeniya"
                >
                  {" "}
                  Прочтите статью
                </a>{" "}
                , чтобы понимать когда вы работаете с 4, а когда с 5 версией.
              </p>
            </div>
            <div class="list-group">
              <button
                type="button"
                class="list-group-item list-group-item-action active"
                aria-current="true"
              >
                Плюсы бустрап: 
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
              >
                Bootstrap - один из самых популярных существующих проектов, вы всегда можете найти решения проблем, с которыми столкнетесь в огромном комьюнити
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
              >
               По умолчанию поддерживается практически все, от предупреждений до модальных окон и панелей навигации
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
              >
                Bootstrap легко настраивается с помощью SASS. Вы можете установить проект с помощью npm, импортировать нужные вам части и использовать переменные SASS для настройки почти всего
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
              >
                Первоначально Bootstrap был представлен Twitter, и теперь он поддерживается сообществом сотен разработчиков, обеспечивая стабильные выпуски и долгосрочную поддержку
              </button>
            </div>
            <div class="list-group">
              <button
                type="button"
                class="list-group-item list-group-item-action active bg-danger mt-5 border-danger"
                aria-current="true"
              >
                Минусы бустрап: 
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action "
              >
                широко использует <code>!important</code> правило CSS, поэтому трудно переопределить стили
              </button>
              <button
                type="button"
                class="list-group-item list-group-item-action"
              >
               Основная причина, по которой людям не нравится Bootstrap, - это его широкое использование. (даже эта статья сделана при помощи бустрап ехехех )
              </button>
             
            </div>
          </div>
        </section>
        <section id="uikit">
          <div className="container">
            <h2 className="text-center mt-5">Uikit</h2>
          </div>
        </section>
        <section id="materialize">
          <div className="container">
            <h2 className="text-center mt-5">Materialize</h2>
          </div>
        </section>
        <section id="otherframeworks">
          <div className="container">
            <h2 className="text-center mt-5"> Другие фреймворки </h2>
          </div>
        </section>
        <section id="resources">
          <div className="container">
            <h2 className="text-center mt-5">Дополнительные ресурсы</h2>
            <div className="alert bg-dark" role="alert">
              <a
                className="d-block text-decoration-underline text-light"
                href="https://www.imedia24.ru/blogs/verstka-veb-sayta-raznovidnosti/"
              >
                Виды верстки
              </a>
              <a
                className="d-block text-decoration-underline text-light"
                href="https://agente.ru/blog/adaptive-vs-responsive-web-design"
              >
                Общая информация по адаптивности, респонсивности
              </a>
            </div>

            <p className="text-center">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/yU7jJ3NbPdA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>
                Просто, понятно о брекпоинтах и +1 отличный блогер в этой теме
              </p>
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="mt-4 text-center">Презентация</h2>
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vQYTUynJXG_xguf2PC_493jTdTYH6WGsWMR6xxYK635VcMK3sLCb2kj73TVlhi6oWwp6oZepRqz0ske/embed?start=false&loop=false&delayms=3000"
              frameborder="0"
              width="100%"
              height="569"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          </div>
        </section>
        <section id="hw">
          <div className="container">
            <h2 className="mt-4 text-center">Домашнее задание</h2>
            <div class="bd-callout bd-callout-warning">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <a class="btn btn-primary" role="button">
                    1.
                  </a>{" "}
                  Cверстать сайт по макету, используя <strong>bootstrap</strong>{" "}
                  <p className="text-center layout">
                    <img className="fit-image" src={hw1} alt="" />
                    <div className="for-phone">
                      <ArrowDownOutlined />
                      <ArrowDownOutlined />
                    </div>
                    <div className="relative">
                      <ArrowRightOutlined />
                      <ArrowRightOutlined />
                    </div>
                    <img className="fit-image large" src={hw2} alt="" />
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

export default CSS9;
