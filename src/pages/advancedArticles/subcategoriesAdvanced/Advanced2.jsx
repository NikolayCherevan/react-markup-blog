import React, { Component } from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { HashLink as Link } from 'react-router-hash-link';
import Zoom from 'react-medium-image-zoom';
import hw1 from "./imagesAdvanced2/hw1.jpg";
import hw2 from "./imagesAdvanced2/hw2.jpg";
import hw3 from "./imagesAdvanced2/hw3.jpg";
import shortCSS from "./imagesAdvanced2/shortcode.gif";
import banner from "./imagesAdvanced2/nesting-elements-within-block.png";
import itCSS from "./imagesAdvanced2/itCSS.png";
import codeCoverage from "./imagesAdvanced2/diecode.png";
import coverage from "./imagesAdvanced2/coverage.jpg";

class Advanced2 extends Component {
  render() {
    return (
      <div>
        <h1>
          Best practices в мире верстки. Правильное название классов, id. БЭМ.
          Семантика. Emmet плагин
        </h1>
        <section className="mt-4">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced2#howto">Что значит "делать хорошо"?</Link></li>
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced2#framewors_needed">Нужны ли фреймворки?</Link></li>
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced2#methodology">Выбираем CSS методологию</Link></li>
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced2#preprocessors">Настройте препроцессор</Link></li>
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced2#usetag">Используем встроенные стили тегов</Link></li>
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced2#cssshort">Используем короткие записи свойств</Link></li>
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced2#resources">Дополнительные ресурсы </Link></li>
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced2#hw">Домашнее задание </Link></li>
              </ol>
            </nav>
          </div>
        </section>
        <section id="howto">
          <div className="container">
            <p className="text-center"><img className="image-base" src={banner} alt="" /></p>
            <h2 className="mt-4 text-center">Что значит "делать хорошо"?</h2>
            <p className="bd-callout bd-callout-info">
              В процессе написания кода, зачастую, разработчики ищут быстрые пути реализации чего либо, многие разработчики не хотят заниматься написанием CSS кода и разработкой HTML структуры, тк процесс этот кропотливый и не из легких, если делать все правильно и пользоваться методологиями. О правильности написания кода, а так же о лучших практиках и пойдет речь в статье.
            </p>
          </div>
        </section>
        <section id="framewors_needed">
          <div className="container">
            <h2 className="mt-4 text-center">Нужны ли фреймворки?</h2>
            <p className="bd-callout bd-callout-info">
              Прежде всего, решите, действительно ли вам нужно использовать CSS-фреймворк. Сейчас есть много легких альтернатив надежным фреймворкам. Обычно вы не будете использовать все селекторы из фреймворка, поэтому ваш пакет будет содержать <em>мертвый код</em>.
            </p>
            <p className="bd-callout bd-callout-info">Если вы используете стили только для кнопок, перенесите их в свой собственный файл CSS и избавьтесь от всего остального. Кроме того, вы можете определить неиспользуемые правила CSS, используя покрытие кода в DevTools.</p>
            <p className="text-center"><Zoom><img className="image-small" src={coverage} alt="" /></Zoom></p>
            <p className="text-center"><img className="image-base" src={codeCoverage} alt="" /></p>
            <p>Вы можете видеть, что в приведенном выше примере говорится, что <span className="text-danger"> 98% CSS не используется</span>. Обратите внимание, что на самом деле <span className="text-danger"> это не так </span> - некоторые стили CSS применяются только после того, как пользователь взаимодействует с сайтом. Стили для мобильных устройств также помечаются как неиспользуемые байты. Поэтому, <b> прежде чем удалять все, убедитесь, что вы убедились, что он действительно нигде не используется.</b></p>
            <div className="alert alert-primary mt-4" role="alert">
              Инструмент, который вам поможет избавиться от лишнего кода <a href="https://purifycss.online/" target="blank" className="alert-link">тут</a>.
            </div>
          </div>
        </section>
        <section id="methodology">
          <div className="container">
            <h2 className="mt-4 text-center">Выбираем CSS методологию</h2>
            <p className="bd-callout bd-callout-info">
              Рассмотрите возможность использования методологии CSS для вашего проекта. Вы можете использовать методологии CSS для обеспечения единообразия в ваших файлах CSS. Они помогают масштабировать и поддерживать ваши проекты. Вот несколько популярных методологий CSS, которые мы можем порекомендовать:
            </p>
            <ul class="list-group">
              <li class="list-group-item">
                <h5 className="text-center"> <u><a className="text-body" href="http://getbem.com/"> БЭМ </a></u> </h5>
                <p><b>БЭМ</b>  - <b>Блок</b> , <b>Элемент</b>, <b>Модификатор</b>  -  одна из самых популярных методологий CSS. Это набор соглашений об именах, которые вы можете использовать для простого создания повторно используемых компонентов. Соглашения об именах следуют этому шаблону:</p>
                <SyntaxHighLighter language="css">
                  {`.block { ... } - Блоки представляют собой компонент. Они автономные сущности и значимы сами по себе
.block__element { ... } -Это части .block элемента. Они не имеют отдельного значения и должны быть привязаны к блоку.
.block--modifier { ... } - Используются как флаги для блоков или элементов. Мы можем использовать их для изменения внешнего вида, поведения или состояния элементов. Например, чтобы использовать скрытый флаг, мы могли бы сказать  .block--hidden.`}
                </SyntaxHighLighter>
              </li>
              <li class="list-group-item bg-dark">
                <h5 className="text-center"> <u><a className="text-light" href="https://itcss.io/"> ITCSS </a></u> </h5>
                <p> Следуя этапам в перевернутом треугольнике - вы сможете лучше организовать файлы, добавляя различные слои с разной спецификой. Чем глубже вы пойдете, тем круче будет ваша архитектура.</p>
                <p className="text-center"><img className="image-base" src={itCSS} alt="" /></p>
              </li>
              <li class="list-group-item">
                <h5 className="text-center"> <u><a className="text-body" href="https://github.com/stubbornella/oocss/wiki"> OOCSS </a></u> </h5>
                <p><b>Разделение структуры и оболочки </b></p>
                <SyntaxHighLighter language="css">
                  {`/* Вместо общих стилей для выделенного блока тенью и границей: */
.box {
    width: 250px;
    height: 250px;
    padding: 10px;
    border: 1px solid #CCC;
    box-shadow: 1px 2px 5px #CCC;
    border-radius: 5px;
}

/* Разделяем стили на свойства для класса самого блока и свойства, которые будут его выделять среди остальных для класса "состояния": */
.box {
    width: 250px;
    height: 250px;
    padding: 10px;
}

.elevated {
    border: 1px solid #CCC;
    box-shadow: 1px 2px 5px #CCC;
    border-radius: 5px;
}`}
                </SyntaxHighLighter>
                <p><b>Разделение контейнера и содержимого </b></p>
                <p>Это означает, что вы не хотите, чтобы какой-либо элемент зависел от его местоположения. Одни и те же элементы должны выглядеть одинаково независимо от того, где они находятся на странице.</p>
                <SyntaxHighLighter language="css">
                  {`/* Вместо: */
.main span.breadcumb { ... }

/* Пишем: */
.breadcrumb { ... }`}
                </SyntaxHighLighter>
              </li>
            </ul>

          </div>
        </section>
        <section id="preprocessors">
          <div className="container">
            <h2 className="mt-4 text-center">Настройте препроцессор</h2>
            <p className="bd-callout bd-callout-info">
              Настройка препроцессора может принести вам пользу по-разному. Препроцессор - это инструмент, который позволяет использовать расширенные функции, которых нет в CSS. Это могут быть переменные для циклов или даже функции.
            </p>
            <p className="bd-callout bd-callout-info"><p>Существует множество препроцессоров. Вероятно, самые известные три - это <a href="https://sass-lang.com/" rel="noreferrer noopener" target="_blank">Sass</a>, <a href="http://lesscss.org/" rel="noreferrer noopener" target="_blank">Less</a>, and <a href="https://stylus-lang.com/" rel="noreferrer noopener" target="_blank">Stylus</a>. Мы рекомендуем использовать Sass из-за его процветающего сообщества и обширной документации, которую вы можете найти в Интернете.</p></p>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/_a5j7KoflTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </section>
        <section id="usetag">
          <div className="container">
            <h2 className="mt-4 text-center">Используем встроенные стили тегов</h2>
            <p className="bd-callout bd-callout-info">
              <b>На это часто не обращают внимания. </b>
              Мы можем уменьшить размер файлов CSS, просто используя правильные элементы HTML.
            </p>
            <p> Допустим, у вас есть заголовок:
              <SyntaxHighLighter language="html">
                {`<span class="heading"> Заголовок </span>`}
              </SyntaxHighLighter>
              <p> со следующим набором правил:</p>
              <SyntaxHighLighter language="css">
                {`span.heading {
    display: block;
    font-size: 1.2em;
    margin-top: 1em;
    margin-bottom: 1em; 
}`}
              </SyntaxHighLighter>
              Имеем вот такой результат: <span className="heading"> Заголовок </span>
            </p>
            <p className="bd-callout bd-callout-info"> Добиться такого же результата можно, используя <SyntaxHighLighter language="html">
              {`<h5> Заголовок </h5>`}
            </SyntaxHighLighter>

            </p>
            <p>Имеем аналогичный результат(правда без отступов, тк к этому сайту применен css reset ): <h5> Заголовок </h5></p>
          </div>
        </section>
        <section id="cssshort">
          <div className="container">
            <h2 className="mt-4 text-center">Используем сокращенные записи свойств</h2>
            <p className="bd-callout bd-callout-info">
              <p>Чтобы еще больше сократить количество правил, всегда старайтесь использовать <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties" rel="noreferrer noopener" target="_blank">сокращенные свойства</a>. Это возможно для таких свойств, таких как отступы, границы или фон:</p>
            </p>
            <p className="text-center"><img className="image-base" src={shortCSS} alt="" /></p>
          </div>
        </section>
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
        <section id="resources">
          <div className="container">
            <h2 className="text-center mt-5">Дополнительные ресурсы</h2>
            <div className="alert bg-dark" role="alert">
              <a
                className="d-block text-decoration-underline text-light"
                href="https://medium.com/webbdev/%D0%BF%D0%B8%D1%88%D0%B5%D0%BC-css-%D0%BB%D1%83%D1%87%D1%88%D0%B5-%D0%B8-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B5%D0%B5-1916c87cd51e"
              >
                Пишем CSS лучше и красивее
              </a>
              <a
                className="d-block text-decoration-underline text-light"
                href="https://webref.ru/layout/learn-html-css/writing-your-best-code"
              >
                Написание хорошего кода
              </a>
            </div>

            <p className="text-center">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/Nb4Nw34eZxQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
                    <Zoom>
                      <img className="fit-image" src={hw1} alt="" />
                    </Zoom>
                    <Zoom>
                      <img className="fit-image" src={hw2} alt="" />
                    </Zoom>
                    <Zoom>
                    <img className="fit-image" src={hw3} alt="" />
                    </Zoom>
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
