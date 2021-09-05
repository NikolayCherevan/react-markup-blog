import React, { Component } from "react";
import "./stylesCSS9/_stylesCSS9.scss";
import { HashLink as Link } from "react-router-hash-link";
import SyntaxHighLighter from "react-syntax-highlighter";
import hw1 from "./imagesCSS9/hw_mobile.jpg";
import hw2 from "./imagesCSS9/hw1.jpg";
import uikit from "./imagesCSS9/ukit.webp";
import tailWind from "./imagesCSS9/tailwindCss.webp";
import banner from "./imagesCSS9/frameworks.png";

import { ArrowRightOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
let bgUikit = "https://getuikit.com/docs/images/dark.jpg";
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
                  <Link to="/cssMain/CSS9#otherframeworks">Tailwind CSS</Link>
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
              <img className="w-75" src={banner} alt="" />
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
            <p className="text-center">
              <img
                className="w-75"
                src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-social.png"
                alt=""
              />
            </p>
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
              {`<div className="card" style="width: 18rem;">
  <div className="card-body">
    <h5 className="card-title">Компонент карточки bootstrap</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>`}
            </SyntaxHighLighter>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Компонент <b> карточки </b> bootstrap
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
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
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Launch demo modal
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <SyntaxHighLighter language="html">
              {`<!-- Button trigger modal -->
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
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
            <div className="list-group">
              <button
                type="button"
                className="list-group-item list-group-item-action active"
                aria-current="true"
              >
                Плюсы бустрап:
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                Bootstrap - один из самых популярных существующих проектов, вы
                всегда можете найти решения проблем, с которыми столкнетесь в
                огромном комьюнити
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                По умолчанию поддерживается практически все, от предупреждений
                до модальных окон и панелей навигации
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                Bootstrap легко настраивается с помощью SASS. Вы можете
                установить проект с помощью npm, импортировать нужные вам части
                и использовать переменные SASS для настройки почти всего
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                Первоначально Bootstrap был представлен Twitter, и теперь он
                поддерживается сообществом сотен разработчиков, обеспечивая
                стабильные выпуски и долгосрочную поддержку
              </button>
            </div>
            <div className="list-group">
              <button
                type="button"
                className="list-group-item list-group-item-action active bg-danger mt-5 border-danger"
                aria-current="true"
              >
                Минусы бустрап:
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action "
              >
                Широко использует <code>!important</code> правило CSS, поэтому
                трудно переопределить стили
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                Основная причина, по которой людям не нравится Bootstrap, - это
                его широкое использование. (даже эта статья сделана при помощи
                бустрап ехехех )
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                Дополнительная нагрузка на сеть при загрузке страницы (
                <a href="https://developers.google.com/speed/pagespeed/insights/?hl=ru">
                  {" "}
                  Pagespeed{" "}
                </a>{" "}
                негодует)
              </button>
            </div>
          </div>
        </section>
        <section id="uikit">
          <div className="container">
            <h2 className="text-center mt-5">Uikit</h2>
            <p className="text-center">
              <img src={uikit} className="w-75" alt="" />
            </p>
            <p className="bd-callout bd-callout-info">
              <p>
                {" "}
                <a href="https://getuikit.com/">UIKit</a> - это модульная
                структура внешнего интерфейса, которая позволяет импортировать
                только те стили и функции, которые вам нужны.
              </p>
              <p>
                У него более 16 тысяч звезд на GitHub, и он выбран
                разработчиками за его простой API и минималистический стиль.
              </p>
              <p>
                Кроме того, у UIKit есть профессиональная версия, которая
                предлагает тематические страницы для{" "}
                <a href="https://wordpress.com/ru/?&utm_source=google&utm_campaign=google_wpcom_search_brand_desktop_row_ru&utm_medium=paid_search&keyword=wordpress&creative=528139203102&campaignid=911312535&adgroupid=51101043970&matchtype=e&device=c&network=g&targetid=kwd-313411415&gclsrc=aw.ds&gclid=Cj0KCQjw1dGJBhD4ARIsANb6Odkb_ChxUzj05zM6w6WHnv8KKnaD_TzMkM2ZFWIRBu2uxmOuP8I1vqkaAtzcEALw_wcB">
                  WordPress
                </a>{" "}
                и <a href="https://www.joomla.org/">Joomla</a> в сочетании с
                простым в использовании конструктором страниц.
              </p>
            </p>
            <div className="alert bg-dark text-light mt-5" role="alert">
              <a
                className="text-decoration-underline text-light"
                href="https://getuikit.com/docs/installation"
              >
                Как подключить
              </a>
            </div>
            <div className="alert bg-danger text-light mt-5" role="alert">
              Всегда, работая с фреймворком(любым) ищите элементы меню по типу{" "}
              <b>Getting</b> started или <b>Installation</b>
            </div>
            <p className="mt-5">
              {" "}
              Только посмотрите на этот прекрасный минималистический дизайн
              карточек в сравнении с бустрап:
            </p>
            <div className="uk-child-width-1-2@s uk-grid-match" uk-grid>
              <div>
                <div className="uk-card uk-card-hover uk-card-body">
                  <h3 className="uk-card-title">Hover</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default uk-card-hover uk-card-body  mt-5">
                  <h3 className="uk-card-title">Default</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light mt-5">
                  <h3 className="uk-card-title">Primary</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light mt-5">
                  <h3 className="uk-card-title">Secondary</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-5">
              {" "}
              А как вам паралакс эффект от UIkit? Как по мне- огонь!
            </p>
            <div
              className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top"
              style={{ backgroundImage: "url(" + bgUikit + ")" }}
            >
              <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                <h1 uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; viewport: 0.5;">
                  Headline
                </h1>
                <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="alert bg-dark text-light mt-5" role="alert">
              Есть еще множество компонентов UIkit{" "}
              <a
                className="text-decoration-underline text-light"
                href="https://getuikit.com/docs/parallax"
              >
                {" "}
                здесь
              </a>{" "}
              слева, в сайдбаре{" "}
            </div>
          </div>
        </section>
        <section id="materialize">
          <div className="container">
            <h2 className="text-center mt-5">Materialize</h2>
            <p className="bd-callout bd-callout-info">
              <p>
                {" "}
                <a href="https://materializecss.com/">Materialize</a> выбирают
                для многих веб-сайтов. Он разработан Google и используется во
                всех их проектах.
              </p>
              <p>
                CSS-фреймворк с открытым исходным кодом, который позволяет легко
                реализовать внешний вид в ваших собственных проектах.
              </p>
              <p>
                Он содержит множество интерактивных компонентов, ускоряющих
                разработку и помогающих улучшить взаимодействие с
                пользователями. Анимации используются во всем фреймворке.
              </p>
            </p>

            <div className="list-group">
              <button
                type="button"
                className="list-group-item list-group-item-action active bg-danger mt-5 border-danger"
                aria-current="true"
              >
                Минусы Materialize:
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action "
              >
                Сложно внедрить собственную тему. Ваше творение будет похоже на
                сам Materialize
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                У Materialise есть активное сообщество, но это небольшой и
                независимый проект без корпоративной поддержки.
              </button>
            </div>
          </div>
        </section>
        <section id="otherframeworks">
          <div className="container">
            <h2 className="text-center mt-5"> Tailwind CSS </h2>
            <p> Очень мощный инструмент для серьезной разработки</p>
            <p className="bd-callout bd-callout-info">
              <p>
                <b>«Большинство фреймворков CSS делают слишком много»</b> - девиз
                Tailwind ясно объясняет, почему это легкий фреймворк, который
                предлагает свободу разработчикам. Он не имеет определенного
                дизайна, а скорее позволяет вам быстрее реализовать свой
                собственный уникальный стиль.
              </p>
            </p>
             <iframe width="100%" height="315" src="https://www.youtube.com/embed/j_5-LISy9Qg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </section>
        <section id="resources">
          <div className="container">
            <h2 className="text-center mt-5">Дополнительные ресурсы</h2>
            <div className="alert bg-dark" role="alert">
              <a
                className="d-block text-decoration-underline text-light"
                href="https://proglib.io/p/verstat-bystro-i-krasivo-15-populyarnyh-css-freymvorkov-2020-01-16"
              >
                Другие фреймворки и их возможности
              </a>
              <a
                className="d-block text-decoration-underline text-light"
                href="https://habr.com/ru/post/508844/"
              >
                TailwindCSS – очередной фреймворк или новый шаг эволюции?
              </a>
            </div>

            <p className="text-center">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/WWtEPKaSpIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
            <div className="bd-callout bd-callout-warning">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a className="btn btn-primary" role="button">
                    1.
                  </a>{" "}
                  Cверстать секции по примеру, используя <strong>bootstrap</strong>{" "}
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
