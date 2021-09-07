import React, { Component } from "react";
import banner from "./imagesJS2/jquery-illustration.png";
import { HashLink as Link } from "react-router-hash-link";
import swiper from "./imagesJS2/fraction.jpg"
import Zoom from "react-medium-image-zoom";
import "./stylesJS1/_stylesJS1.scss";
import SyntaxHighLighter from "react-syntax-highlighter";
var $ = require("jquery");
class JS2 extends Component {
  componentDidMount() {
    {
      $(".block").click(function () {
        $(".menu").toggle("slow");
      });
    }
  }
  render() {
    return (
      <div>
        <h1> JQuery, jquery libs, swiper(slick) и другие JS библиотеки</h1>
        <section className="mt-4">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/jsMain/JS2#forwhat">Что такое JQuery?</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/jsMain/JS2#jqlibs">JQuery примеры </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/jsMain/JS2#swiper">Swiper</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/jsMain/JS2#slick"> Slick </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/jsMain/JS2#otherlibs"> Виджеты на jquery </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/jsMain/JS2#resources">
                    Дополнительные ресурсы{" "}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/jsMain/JS2#hw">Домашнее задание</Link>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        <section id="forwhat">
          <div className="container">
            <p className="text-center">
              <Zoom>
                <img style={{ maxWidth: "600px" }} src={banner} alt="" />
              </Zoom>
            </p>
            <p className="bd-callout bd-callout-info">
              <b> jQuery</b> - это быстрая, легкая и многофункциональная
              библиотека JavaScript, основанная на принципe{" "}
              <em> «меньше пиши - больше делай» </em>. Простота в использовании
              значительно <b>упрощает</b> такие вещи, как{" "}
              <b>манипулирование DOM</b>, обработка событий, добавление эффектов
              анимации на веб-страницу, которые{" "}
              <b> без проблем работают во всех основных браузерах</b>, таких как
              Chrome, Firefox, Safari, Internet Explorer и т.д.
            </p>
            <ul class="list-group">
              <li class="list-group-item active text-center">
                {" "}
                Полезности от JQuery:
              </li>
              <li class="list-group-item">
                Вы можете легко выбрать элементы для выполнения манипуляций
              </li>
              <li class="list-group-item">
                Вы можете легко создавать эффекты, такие как отображение или
                скрытие элементов, скользящий переход(slide) и т.д.
              </li>
              <li class="list-group-item">
                Вы можете легко манипулировать элементами DOM и их атрибутами
              </li>
              <li class="list-group-item">
                Вы можете легко реализовать Ajax, чтобы обеспечить асинхронный
                обмен данными между клиентом и сервером
              </li>
              <li class="list-group-item">
                Вы можете легко перемещаться по дереву DOM, чтобы найти любой
                элемент.
              </li>
              <li class="list-group-item">
                Вы можете легко выполнить несколько действий с элементом с
                помощью одной строки кода.
              </li>
              <li class="list-group-item">
                Вы можете легко получить или установить размеры элементов HTML.
              </li>
              <li class="list-group-item text-center">
                <a href="https://api.jquery.com/">...получить больше</a>
              </li>
            </ul>
          </div>
        </section>
        <section id="jqlibs">
          <div className="container">
            <h2 className="text-center mt-5"> JQuery примеры </h2>
            <p className="bd-callout bd-callout-info">
              {" "}
              Многие библиотеки, фреймворки ранее требовали установку JQuery для
              их работы, такие гиганты, как{" "}
              <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">
                {" "}
                Bootstrap{" "}
              </a>
              и слайдер{" "}
              <a href="https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html">
                {" "}
                Owl carousel
              </a>{" "}
              и даже мой ушедший в прошлое любимчик -{" "}
              <a href="https://kenwheeler.github.io/slick/">Slick</a>
            </p>
            <p>
              Bootstrap уже отказался от JQuery в 5 версии, но "под капотом"
              многих библиотек до сих пор jquery занимает неотъемлемую часть{" "}
            </p>
            <p className="bd-callout bd-callout-info">
              {" "}
              Даже многие системы по умолчанию имеют и используют jquery ядро у
              себя в логике приложения ну или для реализации UI, например, самая
              популярная eCommerce платформа -{" "}
              <a href="https://magento.com/">Magento</a> или самая популярная
              CMS(Content Management System) платформа -{" "}
              <a href="https://wordpress.org/">Wordpress</a>{" "}
            </p>
            <b>с JQuery никаких JS селекторов:</b>
            <SyntaxHighLighter language="javascript">
              {`
//JS
document.querySelector('.third')
             `}
            </SyntaxHighLighter>
            <p> Все сводится к знаку доллара:</p>

            <SyntaxHighLighter language="jquery">
              {`
//JQuery
$('.third')
             `}
            </SyntaxHighLighter>
            <b>
              Сменить стили? Никаких <code>selector.style.color = ...</code> :
            </b>
            <SyntaxHighLighter language="javascript">
              {`
//JS
 document.querySelector('.some-text').style.color = ...
             `}
            </SyntaxHighLighter>
            <SyntaxHighLighter language="javascript">
              {`
//JQuery
$('.some-text').css('color', 'someColor');
             `}
            </SyntaxHighLighter>

            <b>Сделать выпадающее меню? Легко! </b>

            <SyntaxHighLighter language="jquery">
              {`
<!--HTML-->
<div className="block btn btn-primary">Клик</div>
<p className="menu">
<ul>
  <li>some content</li>
  <li>some content</li>
  <li>some content</li>
</ul>
</p>
             `}
            </SyntaxHighLighter>
            <SyntaxHighLighter language="jquery">
              {`
//JQuery
$( ".block" ).click(function() {
  $( ".menu" ).toggle( "slow" );
});
             `}
            </SyntaxHighLighter>
            <div className="block btn btn-primary">Клик</div>
            <p className="menu" style={{ display: "none" }}>
              <ul>
                <li>some content</li>
                <li>some content</li>
                <li>some content</li>
              </ul>
            </p>
<div className="alert alert-primary mt-4" role="alert">
                Еще больше возможностей и методов JQuery  API вы найдете <a href="https://api.jquery.com/"> здесь</a>
              </div>
<div className="alert alert-primary mt-4" role="alert">
               <del> Экспертное </del> мнение о том, почему не стоит использовать jquery <a href="https://qna.habr.com/q/448058?_ga=2.256292747.1218225822.1631047954-1738088203.1626460164"> почитать, но не воспринимать близко к сердцу</a>
</div>
          </div>
        </section>
        <section id="swiper">
          <div className="container">
            <h2 className="text-center mt-5"> Swiper </h2>
            <p className="bd-callout bd-callout-info">
  Настолько мощной карусели мы еще не встречали. К тому же, она не использует JQuery и борется за минимальный вес библиотеки <a href="https://swiperjs.com/swiper-api"> </a>
          </p>
<p><b><a href="https://swiperjs.com/swiper-api"> SwiperJS</a></b> - стоит сохранить в закладки</p>
          <img src={swiper} alt="" />
<p  className="text-center"><small><u>Единственная </u>доступная реализация прогресса слайдера  <em>(1/4,3/4,4/5)</em> во всем Интернете и многое <a href="https://swiperjs.com/demos">другое</a> </small></p>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/ddbxsrGPRY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
        </div>
        </section>
        <section id="slick">
          <div className="container">
            <h2 className="text-center mt-5"> Slick </h2>
            <p className="bd-callout bd-callout-info">
            Минималистический дизайн, интересные реализации, множество <a href="https://kenwheeler.github.io/slick/">DEMO</a>, отслеживание событий (позволяет отследить ивент и запустить функцию до срабатывания слайдера, во время перелистывания или после и что-то реализовать)
          </p>
          <p><b><a href="https://kenwheeler.github.io/slick/"> Slick </a></b> - можно пользоваться </p>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/rXNfDfqtM3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </section>
        <section id="otherlibs">
          <div className="container">
            <h2 className="text-center mt-5"> Виджеты на jquery </h2>
            <p className="bd-callout bd-callout-info">
          <p>Виджеты на JQuery реализованы многими людьми на многих ресурсах. Например, добавляя к поисковому запросу слово "codepen", вы будете встречать готовые компоненты, которые реализованы на JQuery. Их неисчесть. И как говорится в IT сфере - 'не стоит изобретать велосипед', но все же, когда вы новичек, то лучше все же подсмотреть на "велосипеды" других и сделать все же свой.</p>
          <a href="https://www.jqueryscript.net/popular/2021.html">Множество виджетов на JQuery</a>
          <a href="https://codepen.io/tag/jquery-plugin"> Codepen resources </a>
        </p>
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
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/9Pqf_AIT2ZI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="mt-4 text-center">Презентация</h2>
            <p className="text-center">
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vT8dlLo9FhRx87tRQbOvD4KtohYVS0cJ8SAU34rissEUBouT7HpeB-ikm47uwbUKLL1Fn_3cR7PHELt/embed?start=false&loop=false&delayms=3000"
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
                  придумать и реализовать приложение ( <b> TODO list </b>,
                  генератор чего-то) либо создать компонент по типу{" "}
                  <b> бургер - меню </b>, <b> табов </b>
                  или <b> аккордеона </b> <em>на JQuery или JS</em>
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
