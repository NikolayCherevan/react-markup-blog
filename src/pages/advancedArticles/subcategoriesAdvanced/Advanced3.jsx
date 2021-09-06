import React, { Component } from "react";
import hw1 from "./imagesAdvanced3/mobilehw.jpg";
import { ArrowRightOutlined, ArrowDownOutlined } from "@ant-design/icons";
import hw2 from "./imagesAdvanced3/pchw.jpg";
import Zoom from 'react-medium-image-zoom';
import banner from "./imagesAdvanced3/banner.png";
import packageImg from "./imagesAdvanced3/package.png";
import { HashLink as Link } from 'react-router-hash-link';
import { AlertOutlined } from "@ant-design/icons";
class Advanced3 extends Component {
  render() {
    return (
      <div>
        <section className="mt-4">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced3#forwhat">Зачем нам все эти инструменты?</Link></li>
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced3#node">Node модули</Link></li>
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced3#webpack">Webpack</Link></li>
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced3#gulp">Gulp</Link></li>
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced3#grunt">Grunt</Link></li>
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced3#sass">SASS</Link></li>
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced3#less">LESS</Link></li>
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced3#resources">Дополнительные ресурсы </Link></li>
                <li className="breadcrumb-item"><Link to="/advancedMain/Advanced3#hw">Домашнее задание </Link></li>
              </ol>
            </nav>
          </div>
        </section>
        <h1>Node modules, npm, Webpack (Gulp, Grunt). SASS, LESS</h1>
        <section id="forwhat">
          <div className="container">
            <p className="text-center"><img className="image-base" src={banner} alt="" /></p>
            <h2 className="mt-4 text-center">Зачем нам все эти инструменты?</h2>
            <p className="bd-callout bd-callout-info">
              В настоящее время мы вынуждены использовать множество дополнительных инструментов для облегчения, <b> ускорения и оптимизации рабочего процесса </b> веб-разработки. Однако часто такие инструменты добавляют дополнительный уровень сложности в стек.
              В результате нам необходимо использовать дополнительное время и усилия, чтобы изучить, понять и правильно использовать эти инструменты.
            </p>
          </div>
        </section>
        <section id="node">
          <div className="container">
            <h2 className="mt-4 text-center">Node модули</h2>
            <p className="bd-callout bd-callout-info">
              Перед началом знакомства с <em> node_module, npm </em>  вам нужно настроить окружение на вашем компьютере, установив требуемое ПО:
            </p>
            <div className="alert alert-primary mt-4" role="alert">
              Установка node: <a href="https://nodejs.org/uk/download/" target="blank" className="alert-link">тут</a>.
            </div>
            <p className="bd-callout bd-callout-info"><b>npm</b> важен для нормальной разработки. Доступны тысячи модулей, которые решают почти все типичные проблемы, с которыми вы, вероятно, столкнетесь. Не забудьте проверить нет ли npm библиотеки, прежде чем "изобретать велосипед". Нередко типичное приложение имеет десятки зависимостей.</p>
            <h4 className="text-center fw-bold">package.json</h4>
            <p className="bd-callout bd-callout-info">
              Любой проект, использующий Node.js, должен иметь файл <code> package.json </code> <b>(в корне проекта)</b> , известный как патент вашего проекта, который включает модули и приложения, от которых он зависит, информацию об управлении версиями и определенные метаданные, такие как название проекта, объяснение и источник.
              Файл <code> package.json </code> всегда форматируется в формате <code>JSON</code>.
            </p>
            <hr />
            <p> <AlertOutlined /> <code> package.json </code> создается автоматически, при запуске команды <kbd>npm init -y  </kbd>  </p>
            <hr />
            <p> <AlertOutlined /> <code> пакеты</code> npm устанавливаются при помощи команды <kbd>npm i name_of_module</kbd> , например, установим <em><Link to="/advancedMain/Advanced3#webpack">Webpack</Link></em> - <kbd> npm i -D webpack webpack-cli </kbd> </p>
            <p> <small> <b>-D</b>  флаг говорит о том, что этот пакет нам нужен лишь для разработки, но пока не думайте об этом ;) , а для любопытных - <a href="https://qna.habr.com/q/170263">#гуглвпомощь</a> </small></p>
            <div className="text-center"> <Zoom> <img className="image-base" src={packageImg} alt="" /></Zoom> </div>
            <div> <b>Вот и все...</b> хотели бы мы сказать, но стоит учесть одну вещь - при команде <kbd>npm i name_of_module</kbd> создается папка node_modules, в которой хранятся все пакеты (зависимости). <b>Обратите внимание! </b> эта папка <b> не заливается на гит и не скидывается архивом  </b> клиенту или коллеге по разработке (скидывайте архивом, только если только попросят, это прошлый век).  </div>
            <p className="bd-callout bd-callout-info">
              Условный Вася, получив от вас package.json файл, в котором обьявлены эти все пакеты и их версии, выполнит команду <kbd>npm i</kbd> и  у него создастся папка <code>node_modules</code> с пакетами, которые нужны для разработки(которые вы ранее установили себе и они оставили след в виде записи в package.json). Лишь одной командой он настроит локальное окружение проекта.
            </p>
          </div>
        </section>
        <section id="webpack">
          <div className="container">
            <h2 className="mt-4 text-center">Webpack</h2>
            <div className="alert alert-primary mt-4" role="alert">
              Чуть <Link to="/advancedMain/Advanced3#resources">ниже</Link> вы найдете поробную инструкцию о настройке <a href="https://webpack.js.org/"> Webpack </a> с нуля </div>
            <p className="bd-callout bd-callout-info">
              <b>Все что вам нужно знать о webpack:</b> нужно настроить <a href="https://www.npmjs.com/package/autoprefixer"> автопрефиксеры </a> к свойствам стилей - webpack, нужно <a href="https://www.npmjs.com/package/image-minimizer-webpack-plugin"> минимизировать картинки </a> во всем проекте -  вебпак. Нужно компилировать стили через препроцессор, допустим <a href="https://sass-scss.ru/guide/">SASS</a> - нужен webpack. <b>Webpack</b> - нунчаки в руках фронтенд разработчика в сравнении с сломанной палкой в виде папки с типичной html,css,js структурой проекта сайта.  
            </p>
          </div>
        </section>
        <section id="gulp">
          <div className="container">
            <h2 className="mt-4 text-center">Gulp</h2>
            <div className="alert alert-primary mt-4" role="alert">
              О GIT простым языком: <a href="https://git-scm.com/book/ru/v2" target="blank" className="alert-link">тут</a>.
            </div>
            <p className="bd-callout bd-callout-info">

            </p>
          </div>
        </section>
        <section id="grunt">
          <div className="container">
            <h2 className="mt-4 text-center">Grunt</h2>
            <div className="alert alert-primary mt-4" role="alert">
              О GIT простым языком: <a href="https://git-scm.com/book/ru/v2" target="blank" className="alert-link">тут</a>.
            </div>
            <p className="bd-callout bd-callout-info">

            </p>
          </div>
        </section>
        <section id="sass">
          <div className="container">
            <h2 className="mt-4 text-center">SASS</h2>
            <div className="alert alert-primary mt-4" role="alert">
              О GIT простым языком: <a href="https://git-scm.com/book/ru/v2" target="blank" className="alert-link">тут</a>.
            </div>
            <p className="bd-callout bd-callout-info">

            </p>
          </div>
        </section>
        <section id="less">
          <div className="container">
            <h2 className="mt-4 text-center">LESS</h2>
            <div className="alert alert-primary mt-4" role="alert">
              О GIT простым языком: <a href="https://git-scm.com/book/ru/v2" target="blank" className="alert-link">тут</a>.
            </div>
            <p className="bd-callout bd-callout-info">

            </p>
          </div>
        </section>
        <section id="resources">
          <div className="container">
            <h2 className="text-center mt-5">Дополнительные ресурсы</h2>
            <div className="alert bg-dark" role="alert">
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
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/eSaF8NXeNsA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className="text-center">Полный курс по webpack +1 отличный блогер в IT сфере</p>
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="mt-4 text-center">Презентация</h2>
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS6PNazYusLmS20TJ8AJ3Oj_BJLAaQTPTAlPflWxYDI1dOIBZpy_KBSR6ze1Zapwwx4cvozbZTkoaY4/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
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
                    <Zoom> <img className="fit-image" src={hw1} alt="" /></Zoom>
                    <div className="for-phone">
                      <ArrowDownOutlined />
                      <ArrowDownOutlined />
                    </div>
                    <div className="relative">
                      <ArrowRightOutlined />
                      <ArrowRightOutlined />
                    </div>
                    <Zoom> <img className="fit-image base" src={hw2} alt="" /></Zoom>
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
