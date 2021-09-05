import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import banner from "./imagesCSS10/1_yHqZAYzckbh6hymIduzGQQ.png";
import SyntaxHighLighter from "react-syntax-highlighter";
import hw1 from "./imagesCSS10/animHW.gif";
import drEx from "./imagesCSS10/exampleDrowing.png";
import correct from "./imagesCSS10/correctImage.png";
import "./stylesCSS10/_stylesCSS10.scss";
class CSS10 extends Component {
  render() {
    return (
      <div>
        <h1>CSS - advanced. CSS фигуры, animation keyframe , iframe. </h1>
        <section className="mt-4">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS10#for_what">Что такое CSS Art?</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS10#image_structure">
                    Структура css изображения
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS10#cssToolkit">
                    Набор инструментов CSS для начинающих
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS10#trialAndError">
                    {" "}
                    Методом проб и ошибок рисуем фигуры{" "}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS10#cssAnimation">CSS-анимация</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS10#resources">
                    Дополнительные ресурсы{" "}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS10#hw">Домашнее задание </Link>
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
            <h2 className="text-center mt-5">Что такое CSS Art?</h2>

            <p className="bd-callout bd-callout-info">
              Искусство CSS находится на пересечении векторной иллюстрации и
              интерфейсной разработки. Он включает в себя манипулирование{" "}
              <code> {`<div>`}</code> элементами HTML с помощью CSS, для
              визуализации фигур в браузере
            </p>
            <p className="bd-callout bd-callout-info">
              Эти формы настраиваются путем присвоения значения различных
              свойств , таких как <code>height</code>,<code>border-radius</code>
              ,<code> box-shadow</code> и <code> background-color </code>
            </p>
            <p className="bd-callout bd-callout-info">
              Благодаря бесчисленным{" "}
              <a href="https://www.w3schools.com/cssref/"> свойствам CSS </a>, с
              которыми можно работать, можно создавать сложные элементы без
              программного обеспечения для векторных иллюстраций, такого как
              Illustrator
            </p>
          </div>
        </section>
        <section id="image_structure">
          <div className="container">
            <h2 className="text-center mt-5">Структура css изображения</h2>
            <p>
              {" "}
              <code> {`<div>`}</code>Элемент является <b>строительным блоком</b>{" "}
              каждой CSS композиции. <code> {`<div>`}</code> - это просто пустой
              контейнер, часто используемый для размещения других элементов и
              создания структуры на веб-странице. Он не влияет на контент или
              макет, если он не стилизован с помощью CSS или не управляется
              скриптами, что делает его чрезвычайно универсальным.
            </p>
            <br />
            <p>
              {" "}
              Взгляните на пример ниже. Давайте разберемся в HTML-части
              CSS-арта:
            </p>
            <img src={drEx} alt="" />
            <div className="mt-5">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Родительский <kbd>{`<div>`} </kbd>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Каждая композиция CSS начинается с родительского div.
                      Думайте об нем, как о своем холсте.
                      <SyntaxHighLighter language="html" className="mt-5">
                        {`<div class='circle-container>действует как невидимая коробка, которая инкапсулирует(скрывает) все остальные элементы.
</div>`}
                      </SyntaxHighLighter>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Дочерний <kbd>{`<div>`} </kbd>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Стилизованные дочерние блоки <kbd>{`<div>`} </kbd> ,
                      вложенные в родительские элементы, придают структуру и
                      содержание вашей композиции. Вложенные элементы полезны,
                      потому что{" "}
                      <b>
                        вы можете расположить дочерний div относительно его
                        родителя
                      </b>{" "}
                      Как{" "}
                      <Link to=" /../CSS5#position-values">
                        {" "}
                        в прошлой теме{" "}
                      </Link>{" "}
                      с позиционированием элементов . По мере совершенствования
                      ваших навыков CSS вы сможете создавать сложные элементы с
                      помощью одного div. А пока разбейте свое видение на
                      простые части и создайте дочерний div для каждого
                      фигурного элемента.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Пользовательские классы
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Каждому <kbd>{`<div>`} </kbd> нужен собственный класс. В
                      вашей таблице стилей эти ссылки используются для
                      различения элементов. Будьте лаконичны и информативны,
                      когда даете значение класса определенному блоку. В
                      приведенном выше фрагменте кода,{" "}
                      <code>class='inner-circle'</code> , это более эффективно,
                      чем <code>class='circle'</code> потому, что он позволит
                      нацеливаться на конкретную сферу и придавать именно ей
                      различные стили.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="cssToolkit">
          <div className="container">
            <h2 className="text-center mt-5">
              Набор инструментов CSS для начинающих
            </h2>

            <p className="bd-callout bd-callout-info">
              <p>
                Вы можете многого добиться с помощью основ. Начните с малого и
                добавляйте новые свойства CSS в свой инструментарий по мере
                роста.
              </p>
            </p>
            <p className="bd-callout bd-callout-info mt-5">
              <p>
                Примените к блоку <code>background-color</code>, перед
                применением <code>gradient</code> и поэкспериментируйте с{" "}
                <code>border-radius</code>, прежде чем использовать{" "}
                <code>
                  {" "}
                  <a href="https://developer.mozilla.org/ru/docs/Web/CSS/clip-path">
                    clip-path
                  </a>{" "}
                </code>{" "}
                для создания пользовательских фигур. Попробуйте 2D версию своего
                дизайна, прежде чем преобразовывать ее в 3D-версию
              </p>
            </p>
            <h4>
              {" "}
              Ниже приведен краткий список свойств CSS, которые помогут вам
              начать работу c CSS фигурами{" "}
            </h4>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <code> height, width </code>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Эти свойства используются для установки высоты и ширины
                    вашего элемента. Размер div по умолчанию определяется
                    содержимым HTML, которое он содержит. Без какого-либо
                    содержимого ваш div не будет существовать. По этой причине
                    важно явно указать эти свойства. Используйте <b>px</b> или{" "}
                    <b>%</b> значения, чтобы определить размер вашего div
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <code> background-color </code>
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Это свойство устанавливает цвет вашего <kbd>{`<div>`} </kbd>{" "}
                    . Cтоит использовать{" "}
                    <a href="https://www.google.com/search?q=color+picker">
                      палитру цветов Google
                    </a>{" "}
                    , чтобы найти идеальный оттенок и соответствующее ему
                    значение <b>HEX</b> или <b>RGB</b>.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <code> border-radius </code>
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Это свойство устанавливает радиус углов вашего div. По
                    умолчанию блоки имеют квадратную форму, но вы можете
                    создавать другие формы, манипулируя границами. Если вы
                    присвоите этому свойству одно значение, этот радиус
                    применяется ко всем четырем углам. Например,{" "}
                    <b>border-radius: 50% </b> делает круг
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse4"
                    aria-expanded="false"
                    aria-controls="flush-collapse4"
                  >
                    <code> transform:translateY/translateX </code>
                  </button>
                </h2>
                <div
                  id="flush-collapse4"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Это свойство перемещает ваш div по вертикали / горизонтали
                    вдоль 2D-плоскости. Размещение элементов - важная часть
                    создания более сложных дизайнов. Используйте{" "}
                    <code> px </code> значения, чтобы перемещать компоненты по
                    холсту
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="trialAndError">
          <div className="container">
            <h2 className="text-center mt-5">
              {" "}
              Методом проб и ошибок рисуем фигуры{" "}
            </h2>
            <p className="bd-callout bd-callout-info">
              Будьте готовы к серьезным пробам и ошибкам. Рисование с помощью
              кода может быть кропотливым процессом, требующим терпения и
              настойчивости. В отличие от создания векторной графики с помощью
              программного обеспечения для иллюстраций, вы не можете точно
              увидеть, с чем работаете, пока ваш код не отобразится в браузере.
              Получение формы в нужном месте может потребовать бесчисленных
              мелких корректировок. Терпение!
            </p>
            <img src={correct} alt="" />
          </div>
        </section>
        <section id="cssAnimation">
          <div className="container">
            <h2 className="text-center mt-5"> CSS-анимация </h2>
            <p className="bd-callout bd-callout-info">
              CSS анимации позволяют анимировать переходы от одной конфигурации
              CSS стилей к другой. CSS-анимации состоят из двух компонентов:
              стилевое описание анимации и набор ключевых кадров, определяющих
              начальное, конечное и, возможно, промежуточное состояние
              анимируемых стилей.
            </p>
            <h4 className="text-center"> Как анимировать в CSS?</h4>
            <p className="bd-callout bd-callout-info">
              Чтобы создать CSS-анимацию вы должны добавить в стиль элемента,
              который хотите анимировать, свойство{" "}
              <a href="https://developer.mozilla.org/ru/docs/Web/CSS/animation">
                animation
              </a>{" "}
              или его подсвойства. Это позволит вам настроить ускорение и
              продолжительность анимации, а также другие детали того, как
              анимация должна протекать
            </p>
            <h5 className="text-center"> Подсвойства animation</h5>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <code>animation-name</code>{" "}
                    <a href="https://developer.mozilla.org/ru/docs/Web/CSS/animation-name">
                      подробнее о свойстве
                    </a>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Определяет имя @keyframes (en-US), настраивающего кадры
                    анимации.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <code>animation-duration</code>{" "}
                    <a href="https://developer.mozilla.org/ru/docs/Web/CSS/animation-duration">
                      подробнее о свойстве
                    </a>
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Определяет время, в течение которого должен пройти один цикл
                    анимации
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <code>animation-timing-function</code>{" "}
                    <a href="https://developer.mozilla.org/ru/docs/Web/CSS/animation-timing-function">
                      подробнее о свойстве
                    </a>
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Настраивает ускорение анимации.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse4"
                    aria-expanded="false"
                    aria-controls="flush-collapse4"
                  >
                    <code>animation-delay</code>{" "}
                    <a href="https://developer.mozilla.org/ru/docs/Web/CSS/animation-delay">
                      подробнее о свойстве
                    </a>
                  </button>
                </h2>
                <div
                  id="flush-collapse4"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Настраивает задержку между временем загрузки элемента и
                    временем начала анимации.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse5"
                    aria-expanded="false"
                    aria-controls="flush-collapse5"
                  >
                    <code>animation-iteration-count</code>{" "}
                    <a href="https://developer.mozilla.org/ru/docs/Web/CSS/animation-iteration-count">
                      подробнее о свойстве
                    </a>
                  </button>
                </h2>
                <div
                  id="flush-collapse5"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Определяет количество повторений анимации; вы можете
                    использовать значение infinite для бесконечного повторения
                    анимации.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse6"
                    aria-expanded="false"
                    aria-controls="flush-collapse6"
                  >
                    <code>animation-direction</code>{" "}
                    <a href="https://developer.mozilla.org/ru/docs/Web/CSS/animation-direction">
                      подробнее о свойстве
                    </a>
                  </button>
                </h2>
                <div
                  id="flush-collapse6"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Даёт возможность при каждом повторе анимации идти по
                    альтернативному пути, либо сбросить все значения и повторить
                    анимацию.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse7"
                    aria-expanded="false"
                    aria-controls="flush-collapse7"
                  >
                    <code>animation-fill-mode</code>{" "}
                    <a href="https://developer.mozilla.org/ru/docs/Web/CSS/animation-fill-mode">
                      подробнее о свойстве
                    </a>
                  </button>
                </h2>
                <div
                  id="flush-collapse7"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Настраивает значения, используемые анимацией, до и после
                    исполнения.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-collapse8">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse8"
                    aria-expanded="false"
                    aria-controls="flush-collapse8"
                  >
                    <code>animation-play-state</code>{" "}
                    <a href="https://developer.mozilla.org/ru/docs/Web/CSS/animation-play-state">
                      подробнее о свойстве
                    </a>
                  </button>
                </h2>
                <div
                  id="flush-collapse8"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Позволяет приостановить и возобновить анимацию.
                  </div>
                </div>
              </div>
            </div>
            <h4 className="text-center">
              {" "}
              Определение последовательности анимации с помощью ключевых кадров?
            </h4>
            <p className="bd-callout bd-callout-info">
              После того, как вы настроили временные свойства
              (продолжительность, ускорение) анимации, вы должны определить
              внешний вид анимации. Это делается с помощью двух и более ключевых
              кадров после{" "}
              <a href="https://webref.ru/css/keyframes">@keyframes </a>. Каждый
              кадр описывает, как должен выглядеть анимированный элемент в
              текущий момент.
            </p>
            <p className="bd-callout bd-callout-info fw-bold">
              Проще всего анимацию понять на
              <a href="https://webref.ru/css/keyframes"> примере </a>. Кратко
              говоря - представьте шкалу загрузки чего либо. сначала у нас 0%,
              потом идет 1% и тд, до 100%. Так вот, на этапе 0% - мы задаем
              начальное положение? состояние обьекта, а когда будет 100% - задаем ожидаемое финальное
              состояние, положение обьекта.
            </p>
          </div>
        </section>
        <section id="resources">
          <div className="container">
            <h2 className="text-center mt-5">Дополнительные ресурсы</h2>
            <div className="alert bg-dark" role="alert">
              <a
                className="d-block text-decoration-underline text-light"
                href="https://blog.prototypr.io/how-i-started-drawing-css-images-3fd878675c89"
              >
                Примеры изображеий на css
              </a>
              <a
                className="d-block text-decoration-underline text-light"
                href="https://html5book.ru/css3-animation/"
              >
                Подробно о css анимации
              </a>
            </div>

            <p className="text-center">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/uXBoQ4WRD9A"
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
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vS6bHfDVJ3ZcSopQumTrPmhvnNi_inFqAzPvPa1Tvikmdwrn6U2BGX6INo5sMcxFPe_nQAZkt25HtKK/embed?start=false&loop=false&delayms=3000"
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
                  Добиться следующего результата, используя css анимацию:
                  <p className="text-center layout">
                    <img className="fit-image animation" src={hw1} alt="" />
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

export default CSS10;
