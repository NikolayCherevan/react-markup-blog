import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import banner from "./imagesCSS6/banner.jpg";
import flexDirection from "./imagesCSS6/flex-direction.svg";
import flexWrap from "./imagesCSS6/flex-wrap.svg";
import justifyContent from "./imagesCSS6/justify-content.svg";
import alignItems from "./imagesCSS6/align-items.svg";
import alignContent from "./imagesCSS6/align-content.svg";
import orderImage from "./imagesCSS6/order.svg";
import flexGrow from "./imagesCSS6/flex-grow.svg";
import alignSelf from "./imagesCSS6/align-self.svg";
import froggy from "./imagesCSS6/froggy.png";
import { AlertOutlined } from "@ant-design/icons";
import "./stylesCSS6/_stylesCSS6.scss";
import SyntaxHighLighter from "react-syntax-highlighter";
import hw from "./imagesCSS6/hw.jpg";
class CSS6 extends Component {
  render() {
    return (
      <div>
    
        <h1>Flex. Верстка layout по макету. Flex-froggy</h1>
        <section className="mt-4">
                <div className="container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS6#for_what">Что такое flexbox</Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS6#props_for_parent">Fexbox свойства для родительского элемента</Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS6#props_for_child">Fexbox свойства для дочерних элементов </Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS6#example"> Практический пример </Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS6#flex-froggy"> Flexbox игра </Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS6#resources">Дополнительные ресурсы </Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS6#hw">Домашнее задание </Link></li>
                  </ol>
                </nav>
                </div>
              </section> 

    
        <section  id="for_what">
          <div className="container">
        <div className="banner-wrapper text-center mt-5">
          <img src={banner} alt="" />
        </div>
            <h2 className="text-center mt-3">Зачем, а главное - для чего?</h2>
            <div>
              Основная идея
              <span className="border border-1 p-1">flex</span>
              заключается в том, чтобы дать контейнеру возможность изменять
              ширину / высоту (и порядок) своих элементов, чтобы наилучшим
              образом заполнить доступное пространство (в основном для
              размещения всех типов устройств отображения и размеров экрана).
              <span className="border border-1 p-1">flex</span>
              расширяет элементы, чтобы заполнить доступное свободное
              пространство, или сжимает их, чтобы предотвратить переполнение.
            </div>
          </div>
        </section>
        <section id="props_for_parent">
          <div className="container">
            <h2 className="text-center mt-3">
              Fexbox свойства для
              <em>родительского элемента</em>
              <small>(flexbox контейнера)</small>
            </h2>
            <p className="text-center mt-3 fw-bold text-decoration-underline">
              display
            </p>
            <div className="code ">
              <SyntaxHighLighter language="css">
                {`.container { 
display: flex; /* or inline-flex */
}`}
              </SyntaxHighLighter>
            </div>
            <p>
              Определляет флекс контейнер. Все дочерние элементы будут пытаться
              выстроиться в линию по горизонтали
            </p>
            <p className="text-center mt-3 fw-bold text-decoration-underline">
              flex-direction
            </p>
            <div className="text-center">
              <img src={flexDirection} alt="" />
            </div>

            <div className="code ">
              <SyntaxHighLighter language="css">
                {`.container { 
flex-direction: row | row-reverse | column | column-reverse;
}`}
              </SyntaxHighLighter>
            </div>
            <p>
              Это свойство устанавливает главную ось, тем самым определяя
              направление размещения гибких элементов в гибком контейнере.
              устанавливает расположение дочерних элементов в виде
              горизонтальных строк, либо вертикальных столбцов.
            </p>
            <p className="text-center mt-3 fw-bold text-decoration-underline">
              flex-wrap
            </p>
            <div className="text-center">
              <img src={flexWrap} alt="" />
            </div>

            <div className="code ">
              <SyntaxHighLighter language="css">
                {`.container { 
flex-wrap: nowrap | wrap | wrap-reverse;
}`}
              </SyntaxHighLighter>
            </div>
            <p>
              По умолчанию все гибкие элементы будут пытаться уместиться в одну
              строку. Вы можете изменить это и разрешить перенос элементов по
              мере необходимости с помощью этого свойства.
            </p>
            <p className="text-center mt-3 fw-bold text-decoration-underline">
              flex-flow
            </p>
            <div className="text-center"></div>

            <div className="code ">
              <SyntaxHighLighter language="css">
                {`.container { 
flex-flow: column wrap;
}`}
              </SyntaxHighLighter>
            </div>
            <p>
              Это сокращение для
              <span className="font-monospace">flex-direction</span>и
              <span className="font-monospace">flex-wrap</span>
              свойств, которые вместе определяют основные и поперечные оси
              гибкого контейнера
            </p>
            <p className="text-center mt-3 fw-bold text-decoration-underline">
              justify-content
            </p>
            <div className="text-center">
              <img src={justifyContent} alt="" />
            </div>

            <div className="code ">
              <SyntaxHighLighter language="css">
                {`.container { 
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
}`}
              </SyntaxHighLighter>
            </div>
            <p>
              Это свойство определяет выравнивание по главной оси. Оно помогает
              распределить лишнее свободное пространство, когда все дочерние
              элементы имеют фиксированную ширину, либо гибкие, но достигли
              своего максимального размера. Он также дает некоторый контроль над
              выравниванием элементов, когда они выходят за пределы строки.
            </p>
            <ul class="list-group">
              <li class="list-group-item">
                <span className="font-monospace">flex-start</span>(по
                умолчанию): элементы перемещаются к началу контейнера
              </li>
              <li class="list-group-item">
                <span className="font-monospace">flex-end</span>: элементы
                перемещаются к концу контейнера
              </li>
              <li class="list-group-item">
                <span className="font-monospace">space-between</span>: дочерние
                элементы равномерно распределяются в строке; первый элемент
                находится в начале строки, последний элемент в конце строки
              </li>
              <li class="list-group-item">
                <span className="font-monospace">space-around</span>: элементы
                равномерно распределены в строке с равным пространством вокруг
                них
              </li>
              <li class="list-group-item">
                <span className="font-monospace">space-evenly</span>: элементы
                распределяются таким образом, чтобы расстояние между любыми
                двумя элементами (и расстояние до краев) было одинаковым
              </li>
            </ul>
            <hr />
            <p className="mt-3">
              <AlertOutlined />
              Обратите внимание, что поддержка этих значений браузером имеет
              нюансы. Например,
              <span className="font-monospace">space-between</span>
              некоторые версии Edge никогда не поддерживали, а
              <span className="font-monospace">start/end/left/right</span>
              еще нет в Chrome. У MDN
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content">
                есть подробные графики
              </a>
              . Самые безопасные значения
              <span className="font-monospace">
                flex-start, flex-end и center
              </span>
              .
            </p>
            <hr />
            <p className="text-center mt-3 fw-bold text-decoration-underline">
              align-items
            </p>
            <div className="text-center">
              <img src={alignItems} alt="" />
            </div>

            <div className="code ">
              <SyntaxHighLighter language="css">
                {`.container { 
align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
}`}
              </SyntaxHighLighter>
            </div>
            <p>
              Свойство определяет поведение для расположения дочерних элементов
              вдоль поперечной оси в текущей строке. Думайте об этом свойстве,
              как о<span className="font-monospace">justify-content</span>
              версии для поперечной оси
            </p>
            <ul class="list-group">
              <li class="list-group-item">
                <span className="font-monospace">stretch</span>(по умолчанию):
                растянуть дочерние элементы, чтобы заполнить контейнер
              </li>
              <li class="list-group-item">
                <span className="font-monospace">flex-start</span>: элементы
                помещаются в начало поперечной оси
              </li>
              <li class="list-group-item">
                <span className="font-monospace">flex-end</span>: элементы
                помещаются в конец поперечной оси
              </li>
              <li class="list-group-item">
                <span className="font-monospace">center</span>: элементы
                центрируются по поперечной оси
              </li>
              <li class="list-group-item">
                <span className="font-monospace">baseline</span>: элементы
                выровнены во содержимому
              </li>
            </ul>
            <p className="text-center mt-3 fw-bold text-decoration-underline">
              align-content
            </p>
            <div className="text-center">
              <img src={alignContent} alt="" />
            </div>

            <div className="code ">
              <SyntaxHighLighter language="css">
                {`.container { 
align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
}`}
              </SyntaxHighLighter>
            </div>
            <p>
              Свойство выравнивает дочерние элементы внутри контейнера, когда
              есть дополнительное пространство на поперечной оси, подобно тому,
              как при
              <span className="font-monospace">justify-content</span>
              выравниваются отдельные элементы внутри главной оси.
            </p>
          </div>
        </section>
        <section id="props_for_child">
          <div className="container">
            <h2 className="text-center mt-3">
              Fexbox свойства для
              <em> отдельных дочерних элементов</em>
            </h2>
            <p className="text-center mt-3 fw-bold text-decoration-underline">
              order
            </p>
            <div className="text-center">
              <img src={orderImage} alt="" />
            </div>

            <div className="code ">
              <SyntaxHighLighter language="css">
                {`.item { 
order: 5; /* default is 0 */
}`}
              </SyntaxHighLighter>
            </div>
            <p>
              По умолчанию дочерние элементы располагаются в исходном порядке.
              Однако
              <span className="font-monospace">order</span>
              свойство может контролировать порядок, в котором они располагаются
              в контейнере.
            </p>

            <p className="text-center mt-3 fw-bold text-decoration-underline">
              flex-grow
            </p>
            <div className="text-center">
              <img src={flexGrow} alt="" />
            </div>

            <div className="code ">
              <SyntaxHighLighter language="css">
                {`.item { 
flex-grow: 4; /* default 0 */
}`}
              </SyntaxHighLighter>
            </div>
            <p>
              Чем больше значение свойства, тем больше свободной ширины
              контейнера заполняет дочерний элемент
            </p>
            <div class="alert alert-primary mt-4" role="alert">
              Читать подробнее о flex-grow
              <a
                href="https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow"
                target="blank"
                class="alert-link"
              >
                {" "}
                тут
              </a>
              .
            </div>
            <p className="text-center mt-3 fw-bold text-decoration-underline">
              flex-shrink
            </p>
            <div className="code ">
              <SyntaxHighLighter language="css">
                {`.item { 
flex-shrink: 3; /* default 1 */
}`}
              </SyntaxHighLighter>
            </div>
            <p>
              Указывает на способность элемента к сжатию при необходимости. при
              значении 0 , дочерний элемент сжиматься не будет
            </p>
            <div class="alert alert-primary mt-4" role="alert">
              Читать подробнее о flex-shrink
              <a
                href="https://developer.mozilla.org/ru/docs/Web/CSS/flex-shrink"
                target="blank"
                class="alert-link"
              >
                {" "}
                тут
              </a>
              .
            </div>
            <p className="text-center mt-3 fw-bold text-decoration-underline">
              flex-basis
            </p>
            <div className="code ">
              <SyntaxHighLighter language="css">
                {`.item { 
flex-basis:  | auto; /* default auto */
}`}
              </SyntaxHighLighter>
            </div>
            <p>Свойство задаёт базовый размер флекс элемента по основной оси</p>
            <div class="alert alert-primary mt-4" role="alert">
              Читать подробнее о flex-basis
              <a
                href="https://developer.mozilla.org/ru/docs/Web/CSS/flex-basis"
                target="blank"
                class="alert-link"
              >
                {" "}
                тут
              </a>
              .
            </div>
            <p className="text-center mt-3 fw-bold text-decoration-underline">
              flex
            </p>
            <div className="code ">
              <SyntaxHighLighter language="css">
                {`.item { 
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}`}
              </SyntaxHighLighter>
            </div>
            <p>
              Свойство, которое содержит в себе flex-grow, flex-shrinkи в
              flex-basis
            </p>
            <p className="text-center mt-3 fw-bold text-decoration-underline">
              align-self
            </p>
            <div className="text-center">
              <img src={alignSelf} alt="" />
            </div>

            <div className="code ">
              <SyntaxHighLighter language="css">
                {`.item { 
align-self: auto | flex-start | flex-end | center | baseline | stretch;
}`}
              </SyntaxHighLighter>
            </div>
            <p>
              Помогает выровнять отдельные дочерние элементы внутри
              родительского контейнера
            </p>
          </div>
        </section>
        <section id="example">
          <div className="container">
            <h2 className="text-center mt-5">Попробуйте сами:</h2>
            <small>
              Нажать на кнопку <kbd> Result</kbd> и смотреть как меняется состояние и поведение
              элементов при разных свойствах, используя радио кнопки
            </small>
            <iframe
              height="520"
              width="100%"
              scrolling="no"
              title="Flexbox playground"
              src="https://codepen.io/enxaneta/embed/adLPwv?default-tab=html%2Cresult"
              frameborder="no"
              loading="lazy"
              allowtransparency="true"
              allowfullscreen="true"
            >
              See the Pen
              <a href="https://codepen.io/enxaneta/pen/adLPwv">
                Flexbox playground
              </a>
              by Gabi (<a href="https://codepen.io/enxaneta">@enxaneta</a>) on
              <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </div>
        </section>
        <section id="flex-froggy">
          <div className="container">
            <h2 className="text-center mt-5">
              Изучить flexbox свойства в игре
            </h2>
            <div className="m-auto">
              <img
                style={{
                  display: "block",
                  maxWidth: "100%",
                }}
                src={froggy}
                alt=""
              />
            </div>
            <p>
              Пройдите игру, чтобы запомнить поведение элементов во флексбокс
              контейнере при различных свойствах. Логика проста - лягушенок в
              игре - дочерний блок, его нужно переместить на листик, применяя
              flexbox свойства
            </p>
            <p className="text-center">
              <a
                type="button"
                href="https://flexboxfroggy.com/#ru"
                class="btn btn-success"
              >
                Cсылка на игру
              </a>
            </p>
          </div>
        </section>
        <section id="resources">
          <div className="container">
            <h2 className="text-center mt-5">Дополнительные ресурсы</h2>
            <div className="alert bg-dark" role="alert">
              <a
                className="d-block text-decoration-underline text-light"
                href="https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox"
              >
                Виды верстки
              </a>
              <a
                className="d-block text-decoration-underline text-light"
                href="https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox"
              >
                Общая информация по адаптивности, респонсивности
              </a>
            </div>

            <p className="text-center">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/eVZEwEQg4pg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>Подробный курс о свойствах, лучший блогер в IT сфере</p>
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="mt-4 text-center">Презентация</h2>
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vRQc1lX1C3Ia4PwWu_WwtLcrSENCmkYLtFsDbZi4XRo9qtckFykUR4S1gzKxxaL9NUZCNk-8EWeBrbP/embed?start=false&loop=false&delayms=3000"
              frameborder="0"
              width="100%"
              height="569"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          </div>
        </section>
        <section  id="hw">
          <div className="container">
            <h2 className="mt-4 text-center">Домашнее задание</h2>
            <div class="bd-callout bd-callout-warning">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <a class="btn btn-primary" role="button">
                    1.
                  </a>{" "}
                  Cверстать <strong><a href="https://codepen.io/creativeeconomy-school/pen/vYZXVjV">сетку</a></strong>, используя <strong>флексы</strong>
                </li>
                <li class="list-group-item">
                  <a class="btn btn-primary" role="button">
                    2.
                  </a>{" "}
                  Пройти игру{" "}
                  <strong><a href="https://flexboxfroggy.com/#ru"> Flex froggy</a></strong>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CSS6;
