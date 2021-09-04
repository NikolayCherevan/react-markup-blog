import React, { Component } from "react";
import adaptiveExample from "./imagesCSS7/adaptiv.gif";
import responsiveExample from "./imagesCSS7/responsive.gif";
import adaptiveRespoonsive from "./imagesCSS7/rwd-vs-adapt-example.gif";
import viewportBefore from "./imagesCSS7/img_viewport1.png";
import viewportAfter from "./imagesCSS7/img_viewport2.png";
import SyntaxHighLighter from "react-syntax-highlighter";
import { Rnd } from "react-rnd";
import { SmileOutlined } from "@ant-design/icons";
import "./stylesCSS7/_stylesCSS7.scss";
import { AlertOutlined } from "@ant-design/icons";
import hw from "./imagesCSS7/hw.jpg";
class CSS7 extends Component {
  render() {
    return (
      <div>
        <h1>
          Adaptive, responsive верстка. Breakpoints. Бургер меню. Mobile first
          подход.
        </h1>
        <section>
          <div className="container">
            <h2 className="text-center mt-3">
              Что значит "верстать адаптивно"?
            </h2>
            <div className="text-center mt-5">
              <img src={adaptiveRespoonsive} alt="" />
            </div>
            <div>
              Приятно, когда ваш сайт выглядит одинаково хорошо на разных
              устройствах. В этом и вся суть <SmileOutlined />
            </div>
            <p>
              Адаптивные, отзывчивые сайты меняют внешний вид в зависимости от
              ширины окна браузера, в которой они просматриваются.
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <hr />
            <h2 className="text-center mt-3">Пример адаптивного поведения</h2>
            <p>
              Адаптация веб-сайтов к ширине окна браузера происходит в
              определенных точках
            </p>
            <div className="relative">
              <Rnd
                default={{
                  x: 0,
                  y: 0,
                  width: 500,
                  height: 190,
                }}
                disableDragging={true}
                minWidth={320}
                minHeight={190}
                maxWidth={1300}
                bounds="window"
                enableResizing={{
                  top: false,
                  right: true,
                  bottom: false,
                  left: false,
                  topRight: false,
                  bottomRight: false,
                  bottomLeft: false,
                  topLeft: false,
                }}
              >
                <iframe
                  height="300"
                  width="100%"
                  scrolling="no"
                  title="Adaptive Example"
                  src="https://codepen.io/team/css-tricks/embed/RWYoYB?default-tab=html%2Cresult"
                  frameborder="no"
                  loading="lazy"
                  allowtransparency="true"
                  allowfullscreen="true"
                >
                  See the Pen
                  <a href="https://codepen.io/team/css-tricks/pen/RWYoYB">
                    Adaptive Example
                  </a>
                  by CSS-Tricks (
                  <a href="https://codepen.io/team/css-tricks">@css-tricks</a>)
                  on
                  <a href="https://codepen.io">CodePen</a>.
                </iframe>
              </Rnd>

              <p className="text-center">
                Пример поведения отзывчивого (responsive) блока
              </p>
              <small>
                Для просмотра поведения блока при изменении ширины окна нажмите
                на кнопку <kbd>Result</kbd> и увеличивайте - уменьшайте ширину
                окна iframe с codepen, используя ползунок с правого края
              </small>
            </div>
            <p className="text-center for-phone">
              <img src={adaptiveExample} alt="" />
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <hr />
            <h2 className="text-center mt-3">
              Пример отзывчивого (responsive) поведения
            </h2>
            <p>
              Отзывчивые веб-сайты реагируют на размер браузера в любой момент.
              Независимо от ширины браузера, сайт настраивает свой макет (и,
              возможно, функциональность) таким образом, чтобы он
              оптимизировался для экрана
            </p>
            <div className="relative">
              <Rnd
                default={{
                  x: 0,
                  y: 0,
                  width: 500,
                  height: 190,
                }}
                disableDragging={true}
                minWidth={320}
                minHeight={190}
                maxWidth={1300}
                bounds="window"
                enableResizing={{
                  top: false,
                  right: true,
                  bottom: false,
                  left: false,
                  topRight: false,
                  bottomRight: false,
                  bottomLeft: false,
                  topLeft: false,
                }}
              >
                <iframe
                  height="300"
                  width="100%"
                  scrolling="no"
                  title="Responsive Example"
                  src="https://codepen.io/team/css-tricks/embed/meGOWx?default-tab=html%2Cresult"
                  frameborder="no"
                  loading="lazy"
                  allowtransparency="true"
                  allowfullscreen="true"
                >
                  See the Pen
                  <a href="https://codepen.io/team/css-tricks/pen/meGOWx">
                    Responsive Example
                  </a>
                  by CSS-Tricks (
                  <a href="https://codepen.io/team/css-tricks">@css-tricks</a>)
                  on
                  <a href="https://codepen.io">CodePen</a>.
                </iframe>
              </Rnd>
              <p className="text-center">
                Пример поведения отзывчивого (responsive) блока
              </p>
            </div>
            <p className="text-center for-phone">
              <img src={responsiveExample} alt="" />
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="text-center">
              Как сделать один сайт для всех устройств
            </h2>
            <h4 className="text-center mt-5">
              Устанавливаем пропорции в процентах
            </h4>
            <p>
              у нас есть макет psd с шириной 1000px. В нем есть два блока: один
              слева шириной 270px, другой справа 730px.
              <b>Не используем пиксели</b> и имеем отзывчивое поведение блоков
            </p>
            <SyntaxHighLighter language="css">
              {`.leftcolumn {
width: 27%; /* 270px / 1000px = 0,27 */
float: left;
}

.rightcolumn {
width: 73%; /* 730px / 1000px = 0,73 */
float: right;
}
`}
            </SyntaxHighLighter>
            <hr />
            <h4 className="text-center">Делаем изображения "резиновыми"</h4>
            <p>
              По умолчанию, картинка имеет оригинальные размеры и не
              подстраивается под родительский блок, тем самым, выходя за пределы
              блока.
            </p>
            <SyntaxHighLighter language="css">
              {`img { max-width: 100% }
`}
            </SyntaxHighLighter>
            <p>
              Задаем максимальную ширину и теперь изображение никогда не вылезет
              из своего блока-родителя
            </p>
            <hr />
            <h4 className="text-center">Media queries. Mobile first подход</h4>
            <SyntaxHighLighter language="css">
              {`
@media (min-width: 576px) { 
свойства применяются начиная с 576px
}


@media (min-width: 768px) { 
свойства применяются начиная с 768px
 }


@media (min-width: 992px) { 
свойства применяются начиная с 992px
 }


@media (min-width: 1200px) { 
свойства применяются начиная с 1200px
 }


@media (min-width: 1400px) { 
свойства применяются начиная с 1400px }
`}
            </SyntaxHighLighter>
            <h4 className="text-center">Media queries. Desktop first подход</h4>
            <div className="relative mt-5">
              <Rnd
                default={{
                  x: 0,
                  y: 0,
                  width: 500,
                  height: 190,
                }}
                disableDragging={true}
                minWidth={320}
                maxWidth={1300}
                minHeight={190}
                bounds="window"
                enableResizing={{
                  top: false,
                  right: true,
                  bottom: false,
                  left: false,
                  topRight: false,
                  bottomRight: false,
                  bottomLeft: false,
                  topLeft: false,
                }}
              >
                <iframe
                  height="300"
                  width="100%"
                  scrolling="no"
                  title="Media Queries - Project"
                  src="https://codepen.io/cjr85/embed/KKWZONO?default-tab=html%2Cresult"
                  frameborder="no"
                  loading="lazy"
                  allowtransparency="true"
                  allowfullscreen="true"
                >
                  See the Pen
                  <a href="https://codepen.io/cjr85/pen/KKWZONO">
                    Media Queries - Project
                  </a>
                  by Calvin Roberts (
                  <a href="https://codepen.io/cjr85">@cjr85</a>) on
                  <a href="https://codepen.io">CodePen</a>.
                </iframe>
              </Rnd>
              <p className="text-center">
                <small>
                  Для просмотра поведения состояния блока при изменении ширины
                  окна нажмите на кнопку <kbd> Result</kbd> и увеличивайте -
                  уменьшайте ширину окна iframe с codepen, используя ползунок с
                  правого края,
                </small>
              </p>
              <p>
                Главное отличие
                <b> Mobile first </b>
                от
                <b> Desktop first </b>
                заключается в том, что указывая правило
                <em>max-width</em>, свойства внутри этого правила (то, что
                находится внутри фигурных скобок этого @media запроса) будут
                действовать только
                <b> ДО указанной ширины.</b>
              </p>
              <div className="alert alert-primary mt-4" role="alert">
                Простыми словами о медиазапросах:
                <a
                  href="https://medium.com/nuances-of-programming/%D0%BC%D0%B5%D0%B4%D0%B8%D0%B0-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D1%8B-css-%D1%82%D0%BE%D1%87%D0%BA%D0%B8-%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0-%D1%82%D0%B8%D0%BF%D1%8B-%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2-%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%BD%D1%8B%D0%B5-%D1%80%D0%B0%D0%B7%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B8-%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE%D0%B5-%D0%B4%D1%80%D1%83%D0%B3%D0%BE%D0%B5-28a49fb66d3d"
                  target="blank"
                  className="alert-link"
                >
                  тут
                </a>
                .
              </div>
            </div>
            <hr />
            <hr />
            <h4 className="text-center">Viewport</h4>
            <p>
              Viewport - это видимая пользователю область веб-страницы, то, что
              может увидеть пользователь, не прибегая к прокрутке.
            </p>
            <div className="alert alert-dark" role="alert">
              <strong>Примечание:</strong>В head блоке всегда должен быть meta
              тег
              <SyntaxHighLighter language="css">
                {`<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>`}
              </SyntaxHighLighter>
            </div>
            <p>
              <AlertOutlined />
              Если initial-scale свойство равно единице - ширина картинок
              становится равной ширине экрана.
            </p>
            <p className="text-center">
              <p className="fw-bold">до meta тега:</p>
              <img className="w-25" src={viewportBefore} alt="" />
            </p>
            <p className="text-center mt-5">
              <p className="fw-bold">после meta тега:</p>
              <img className="w-25" src={viewportAfter} alt="" />
            </p>
          </div>
        </section>
        <section>
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
            <h2 className="mt-4 text-center">Домашнее задание</h2>
            <div class="bd-callout bd-callout-warning">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <a class="btn btn-primary" role="button">
                    1.
                  </a>{" "}
                  сверстать сетки на различные устройства, используя{" "}
                  <strong>медиа запросы</strong>
                  <p className="text-center">
                    <img src={hw} alt="" />
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

export default CSS7;
