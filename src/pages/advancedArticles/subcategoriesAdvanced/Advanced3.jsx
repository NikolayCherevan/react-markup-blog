import React, { Component } from "react";
import hw1 from "./imagesAdvanced3/mobilehw.jpg";
import { ArrowRightOutlined, ArrowDownOutlined } from "@ant-design/icons";
import hw2 from "./imagesAdvanced3/pchw.jpg";
import Zoom from "react-medium-image-zoom";
import banner from "./imagesAdvanced3/banner.png";
import packageImg from "./imagesAdvanced3/package.png";
import { HashLink as Link } from "react-router-hash-link";
import { AlertOutlined } from "@ant-design/icons";
import SyntaxHighLighter from "react-syntax-highlighter";
class Advanced3 extends Component {
  render() {
    return (
      <div>
        <section className="mt-4">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced3#forwhat">
                    Зачем нам все эти инструменты?
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced3#node">Node модули</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced3#webpack">Webpack</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced3#gulp">Gulp</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced3#grunt">Grunt</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced3#SCSS">SCSS</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced3#less">LESS</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced3#resources">
                    Дополнительные ресурсы{" "}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced3#hw">Домашнее задание </Link>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        <h1>Node modules, npm, Webpack (Gulp, Grunt). SCSS, LESS</h1>
        <section id="forwhat">
          <div className="container">
            <p className="text-center">
              <img className="image-base" src={banner} alt="" />
            </p>
            <h2 className="mt-4 text-center">Зачем нам все эти инструменты?</h2>
            <p className="bd-callout bd-callout-info">
              В настоящее время мы вынуждены использовать множество
              дополнительных инструментов для облегчения,{" "}
              <b> ускорения и оптимизации рабочего процесса </b> веб-разработки.
              Однако часто такие инструменты добавляют дополнительный уровень
              сложности в стек. В результате нам необходимо использовать
              дополнительное время и усилия, чтобы изучить, понять и правильно
              использовать эти инструменты.
            </p>
          </div>
        </section>
        <section id="node">
          <div className="container">
            <h2 className="mt-4 text-center">Node модули</h2>
            <p className="bd-callout bd-callout-info">
              Перед началом знакомства с <em> node_module, npm </em> вам нужно
              настроить окружение на вашем компьютере, установив требуемое ПО:
            </p>
            <div className="alert alert-primary mt-4" role="alert">
              Установка node:{" "}
              <a
                href="https://nodejs.org/uk/download/"
                target="blank"
                className="alert-link"
              >
                тут
              </a>
              .
            </div>
            <p className="bd-callout bd-callout-info">
              <b>npm</b> важен для нормальной разработки. Доступны тысячи
              модулей, которые решают почти все типичные проблемы, с которыми
              вы, вероятно, столкнетесь. Не забудьте проверить нет ли npm
              библиотеки, прежде чем "изобретать велосипед". Нередко типичное
              приложение имеет десятки зависимостей.
            </p>
            <h4 className="text-center fw-bold">package.json</h4>
            <p className="bd-callout bd-callout-info">
              Любой проект, использующий Node.js, должен иметь файл{" "}
              <code> package.json </code> <b>(в корне проекта)</b> , известный
              как патент вашего проекта, который включает модули и приложения,
              от которых он зависит, информацию об управлении версиями и
              определенные метаданные, такие как название проекта, объяснение и
              источник. Файл <code> package.json </code> всегда форматируется в
              формате <code>JSON</code>.
            </p>
            <hr />
            <p>
              {" "}
              <AlertOutlined /> <code> package.json </code> создается
              автоматически, при запуске команды <kbd>npm init -y </kbd>{" "}
            </p>
            <hr />
            <p>
              {" "}
              <AlertOutlined /> <code> пакеты</code> npm устанавливаются при
              помощи команды <kbd>npm i name_of_module</kbd> , например,
              установим{" "}
              <em>
                <Link to="/advancedMain/Advanced3#webpack">Webpack</Link>
              </em>{" "}
              - <kbd> npm i -D webpack webpack-cli </kbd>{" "}
            </p>
            <p>
              {" "}
              <small>
                {" "}
                <b>-D</b> флаг говорит о том, что этот пакет нам нужен лишь для
                разработки, но пока не думайте об этом ;) , а для любопытных -{" "}
                <a href="https://qna.habr.com/q/170263">#гуглвпомощь</a>{" "}
              </small>
            </p>
            <div className="text-center">
              {" "}
              <Zoom>
                {" "}
                <img className="image-base" src={packageImg} alt="" />
              </Zoom>{" "}
            </div>
            <div>
              {" "}
              <b>Вот и все...</b> хотели бы мы сказать, но стоит учесть одну
              вещь - при команде <kbd>npm i name_of_module</kbd> создается папка
              node_modules, в которой хранятся все пакеты (зависимости).{" "}
              <b>Обратите внимание! </b> эта папка{" "}
              <b> не заливается на гит и не скидывается архивом </b> клиенту или
              коллеге по разработке (скидывайте архивом, только если только
              попросят, это прошлый век).{" "}
            </div>
            <p className="bd-callout bd-callout-info">
              Условный Вася, получив от вас package.json файл, в котором
              обьявлены эти все пакеты и их версии, выполнит команду{" "}
              <kbd>npm i</kbd> и у него создастся папка{" "}
              <code>node_modules</code> с пакетами, которые нужны для
              разработки(которые вы ранее установили себе и они оставили след в
              виде записи в package.json). Лишь одной командой он настроит
              локальное окружение проекта.
            </p>
          </div>
        </section>
        <section id="webpack">
          <div className="container">
            <hr />
            <hr />
            <p className="text-center bg-secondary p-3">
              <img
                src="https://webpack.js.org/site-logo.1fcab817090e78435061.svg"
                style={{ maxWidth: "200px" }}
                alt=""
              />
            </p>
            <div className="alert alert-primary mt-4" role="alert">
              Чуть <Link to="/advancedMain/Advanced3#resources">ниже</Link> вы
              найдете поробную инструкцию о настройке{" "}
              <a href="https://webpack.js.org/"> Webpack </a> с нуля{" "}
            </div>
            <p className="bd-callout bd-callout-info">
              <b>Все что вам нужно знать о webpack:</b> нужно настроить{" "}
              <a href="https://www.npmjs.com/package/autoprefixer">
                {" "}
                автопрефиксеры{" "}
              </a>{" "}
              к свойствам стилей - webpack, нужно{" "}
              <a href="https://www.npmjs.com/package/image-minimizer-webpack-plugin">
                {" "}
                минимизировать картинки{" "}
              </a>{" "}
              во всем проекте - вебпак. Нужно компилировать стили через
              препроцессор, допустим{" "}
              <a href="https://SCSS-scss.ru/guide/">SCSS</a> - нужен webpack.{" "}
              <br />
              <br /> <b>Webpack</b> - нунчаки в руках фронтенд разработчика в
              сравнении со сломанной палкой в руках верстальщика (в виде папки с
              типичной html,css,js структурой проекта сайта)
            </p>
            <kbd>npm install --global webpack</kbd>
            <hr />
            <hr />
          </div>
        </section>

        <section id="gulp">
          <div className="container">
            <h2 className="mt-4 p-3 text-center bg-danger">
              <img
                style={{ maxWidth: "200px" }}
                src="https://gulpjs.com/img/gulp.svg"
                alt=""
              />
            </h2>
            <div className="alert alert-primary mt-4" role="alert">
              Набор инструментов для автоматизации и улучшения рабочего процесса{" "}
              <a
                href="https://gulpjs.com/"
                target="blank"
                className="alert-link"
              >
                Gulp
              </a>
            </div>

            <p className="bd-callout bd-callout-info">
              "Используйте <code>Gulp</code> и JavaScript, чтобы
              автоматизировать медленные, повторяющиеся рабочие процессы и
              объединить их в эффективную сборку".
            </p>
            <kbd>npm install --global gulp-cli</kbd>
            <p className="text-center">
              <Zoom>
                <img
                  style={{ maxWidth: "600px" }}
                  src="https://i1.wp.com/css-tricks.com/wp-content/uploads/2015/08/bs-change-bg.gif"
                  alt=""
                />
              </Zoom>
            </p>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/qKcO04nJMu4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="alert alert-dark mt-4" role="alert">
              <AlertOutlined /> Совет: Не стоит изучать все сборщики, достаточно
              попробовать и владеть одним, чтобы понимать общий подход и логику
              работы таких инструментов. Если мы говорим о webpack - в нем
              присутствуют плагины для работы с емкими задачами, у Gulp - таски,
              у Grunt - тоже таски. Изучив webpack, у вас не должно быть
              трудностей с иными сборщиками и наоборот.
            </div>
            <hr />
            <hr />
          </div>
        </section>
        <section id="grunt">
          <div className="container">
            <h2 className="mt-4 text-center">
              <img
                style={{ maxWidth: "200px" }}
                src="https://gruntjs.com/img/grunt-logo.svg"
                alt=""
              />
            </h2>
            <div className="alert alert-primary mt-4" role="alert">
              <a
                href="https://gruntjs.com/"
                target="blank"
                className="alert-link"
              >
                Grunt
              </a>{" "}
              незаменимый инструмент любого font-end разработчика. Он поможет
              автоматизировать основные задачи сборки проекта
            </div>
            <kbd>npm install -g grunt-cli</kbd>
            <p className="bd-callout bd-callout-info">
              <b> Grunt</b> автоматизирует множество общих задач веб-дизайна,
              таких как <b> объединение нескольких файлов Javascript в один </b>
              (также известное как конкатенация), что{" "}
              <b>ускорит ваш веб-сайт</b>, поскольку серверу придется
              запрашивать меньше файлов.{" "}
              <b>Grunt также сожмет и уменьшит ваш CSS и Javascript</b>, что
              уменьшит размер ваших файлов. Он также может{" "}
              <b>оптимизировать ваши изображения</b> и делать сотни других
              полезных вещей. Поможет вам сделать ваш сайт быстрее и
              автоматизировать процессы для этого
            </p>
            Конечно же, компилировать{" "}
            <Link to="/advancedMain/Advanced3#less">LESS</Link> и{" "}
            <Link to="/advancedMain/Advanced3#SCSS">SCSS</Link> он тоже умеет.
            <iframe
              className="mt-5"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/3Xem8LgoIMw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p className="text-center">
              {" "}
              Настройка простой сборки на{" "}
              <a href="https://gruntjs.com/"> Grunt </a>{" "}
            </p>
          </div>
        </section>
        <div className="container">
          <hr />
          <hr />
          <h2 className="text-center mb-5">Препроцессоры CSS</h2>
        </div>
        <section id="SCSS">
          <div className="container">
            <h2 className="mt-4 text-center">
              <img
                style={{ maxWidth: "200px" }}
                src="https://sass-scss.ru/assets/img/logos/logo-b6e1ef6e.svg"
                alt=""
              />
            </h2>
            <div className="alert alert-primary mt-4" role="alert">
              "CSS с суперсилой"© , его величество - {" "}
              <a href="https://sass-scss.ru/">SCSS</a>
            </div>
            <p className="bd-callout bd-callout-info">
              Документация на русском, легко начать использовать (невозможно
              остановиться), ускоряет процесс разработки в разы, не требователен к сборкам, и в сочетании с <Link to="/advancedMain/Advanced3#webpack">Webpack</Link> - очень могущ.
            </p>
            <p className="bd-callout bd-callout-info">
              Используются переменные, миксины(блоки кода, которые можно переиспользовать), условия, строгая вложенность, импортирование отдельных компонентов (автономные файлы, допустим, только для header или footer)...
            </p>
              <SyntaxHighLighter language="scss">
             {`/* КОД НА SCCS: */

$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

/* КОД НА CCS: */

body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}`}
</SyntaxHighLighter>
        <small> И вроде бы, на SCSS больше кода получилось... Но представьте, если заказчик скажет менять цвет во многих элементах на сайте. В CSS - цвет прописан каждому элементу по отдельности, а в SCSS - переменная с цветом находится в одном месте. Сменить цвет на всем сайте, по всех страницах можно будет, изменив лишь одну строку<div className=""></div></small>
         <div className="alert alert-primary mt-4" role="alert">
              Можно перечислять множество преимуществ препроцессора. Но лучше просмотреть документацию
              <a href=" https://sass-scss.ru/documentation/"> SCSS </a>
            </div>
          <kbd>npm install -g sass</kbd>
        </div>
        </section>
        <section id="less">
          <div className="container">
  <hr />
          <hr />
            <h2 className="mt-4 text-center"><img style={{ maxWidth: "200px" }} src="https://lesscss.org/public/img/less_logo.png"/></h2>
               <div className="alert alert-primary mt-4" role="alert">
              "Это CSS, только немного больше."© , скромен, но не менее мощный - {" "}
              <a href="https://sass-scss.ru/">LESS</a>
            </div>
            <p className="bd-callout bd-callout-info">
              Очень схож на SCCS (после SCCS не будет трудностей пересеть на LESS), отличаются лишь в именованиях и некоторых символах для определения миксинов, перменных и тд 
            </p>
          <div className="alert alert-primary mt-4" role="alert">
              Документация <a href="https://lesscss.org/features/">  LESS </a>
            </div>
            <kbd>npm install less -g</kbd>
          </div>
        </section>
        <section id="resources">
          <div className="container">
            <h2 className="text-center mt-5">Дополнительные ресурсы</h2>
            <div className="alert bg-dark" role="alert">
              <a
                className="d-block text-decoration-underline text-light"
                href="https://skillbox.ru/media/code/34_luchshikh_instrumenta_dlya_frontend_razrabotchika/"
              >
                Актуальные инструменты front-end разработчика
              </a>
              <a
                className="d-block text-decoration-underline text-light"
                href="https://habr.com/ru/post/243335/"
              >
                О важности npm на простом языке
              </a>
              <a
                className="d-block text-decoration-underline text-light"
                href="https://habr.com/ru/post/524260/"
              >
                Актуальная статья о настройке Webpack с нуля
              </a>
            </div>

            <p className="text-center">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/eSaF8NXeNsA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p className="text-center">
                Полный курс по webpack +1 отличный блогер в IT сфере
              </p>
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="mt-4 text-center">Презентация</h2>
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vS6PNazYusLmS20TJ8AJ3Oj_BJLAaQTPTAlPflWxYDI1dOIBZpy_KBSR6ze1Zapwwx4cvozbZTkoaY4/embed?start=false&loop=false&delayms=3000"
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
                  Cверстать секции по примеру, используя{" "}
                  <strong>webpack</strong> сборщик, переменные и миксины{" "}
                  <strong>SCCS</strong>{" "}
                  <p className="text-center layout">
                    <Zoom>
                      {" "}
                      <img className="fit-image" src={hw1} alt="" />
                    </Zoom>
                    <div className="for-phone">
                      <ArrowDownOutlined />
                      <ArrowDownOutlined />
                    </div>
                    <div className="relative">
                      <ArrowRightOutlined />
                      <ArrowRightOutlined />
                    </div>
                    <Zoom>
                      {" "}
                      <img className="fit-image base" src={hw2} alt="" />
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

export default Advanced3;
