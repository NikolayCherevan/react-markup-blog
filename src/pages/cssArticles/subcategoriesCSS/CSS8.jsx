import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import banner from "./imagesCSS8/grid-highlight-grid.png";
import gridInspector from "./imagesCSS8/grid-basic.jpg";
import gridGarden from "./imagesCSS8/grid-garden.jpg";
import SyntaxHighLighter from "react-syntax-highlighter";
import "./stylesCSS8/_stylesCSS8.scss";
class CSS8 extends Component {
  render() {
    return (
      <div>
        <h1>Grid. Поддержка браузерами. Debug tools in Chrome</h1>
        <section className="mt-4">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS8#for_what">Что такое grid</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS8#props_for_parent">
                    Fexbox свойства для родительского элемента
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS8#props_for_child">
                    Fexbox свойства для дочерних элементов{" "}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS8#example"> Практический пример </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS8#flex-froggy"> Grid игра </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS8#resources">
                    Дополнительные ресурсы{" "}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/cssMain/CSS8#hw">Домашнее задание </Link>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <section id="for_what">
          <div className="banner-wrapper text-center mt-5">
            <img src={banner} alt="" />
          </div>
          <div className="container">
            <h2 className="text-center mt-5">Что такое grid?</h2>

            <p className="text-center">
              Двумерная сетка. Набора пересекающихся <em>горизонтальных</em> и{" "}
              <em>вертикальных</em> линий (столбцы, строки соответственно)
            </p>
            <p className="text-center fw-bold">В чем отличие от flex?</p>
            <p>
              Введена новая относительная единица <kbd>fr</kbd> и теперь можно{" "}
              <em> присваивать дочерним элементам имена </em> , вдальнейшем
              используя их в "схеме сетки". Интересно? Разберемся!
            </p>
          </div>
        </section>
        <section id="grid-props-parent">
          <div className="container">
            <h2 className="text-center mt-5">
              {" "}
              Свойства для <b>grid</b> контейнера:{" "}
            </h2>

            <h4 className="text-center fw-bold">display</h4>
            <p> Дана разметка: </p>
            <SyntaxHighLighter language="html">
              {`<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
</div>`}
            </SyntaxHighLighter>
            <p>
              {" "}
              Делаем блок с <b>классом</b> wrapper грид контейнером:{" "}
            </p>
            <SyntaxHighLighter language="css">
              {`.wrapper {
  display: grid;
}`}
            </SyntaxHighLighter>
            <p className="text-center">
              С первого взгляда ничего непредсказуемого не произошло:
            </p>
            <div class="wrapper">
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
              <div>Four</div>
              <div>Five</div>
            </div>
            <p className="text-center mt-5">
              Но в инспекторе мы теперь можем увидеть grid контейнер:
            </p>
            <img src={gridInspector} alt="" />

            <h4 className="text-center fw-bold mt-5">grid-template-columns</h4>
            <p>Определяем столбцы</p>
            <SyntaxHighLighter language="css">
              {`.wrapper {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}`}
            </SyntaxHighLighter>
            <p className="text-center">Результат:</p>
            <div class="wrapper wrapper2">
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
              <div>Four</div>
              <div>Five</div>
            </div>
            <div className="alert alert-primary mt-4" role="alert">
              Логика проста - сколько значений идет в свойстве{" "}
              <kbd>grid-template-columns</kbd> - столько колонок будет создано
              гридом
            </div>
            <h4 className="text-center fw-bold mt-5">grid-template-rows</h4>
            <p>
              Определяем ряды - аналогично с <kbd>grid-template-columns</kbd> но
              применимо к строкам{" "}
            </p>
            <h4 className="text-center fw-bold mt-5">Единица измерения fr</h4>
            <p>
              fr - доля пространства от общей ширины контейнера. Пример ниже
            </p>
            <SyntaxHighLighter language="css">
              {`.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}`}
            </SyntaxHighLighter>
            <p className="text-center">Результат:</p>
            <div class="wrapper wrapper3">
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
              <div>Four</div>
              <div>Five</div>
            </div>
            <div className="alert alert-dark mt-4" role="alert">
              Обратите внимание, что теперь колонки респонсивные, на просмотре с
              телефона исчез нижний скролл, так как мы разделили их на равные
              фракции, которые занимают равные доли от всей ширины контейнера.
            </div>
            <p>
              {" "}
              <em> Попробуем дать первой колонке </em> 2fr,{" "}
              <em> посмотрим на результат</em>{" "}
            </p>
            <SyntaxHighLighter language="css">
              {`.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}`}
            </SyntaxHighLighter>
            <p className="text-center">Результат:</p>
            <div class="wrapper wrapper4">
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
              <div>Four</div>
              <div>Five</div>
            </div>
            <div className="alert alert-dark mt-4" role="alert">
              Вполне ожидаемое поведение, не так ли? Первой колонке мы дали
              возможность "захватить" больше пространства. Если быть более
              точным - первая колонка занимает 50% от ширины родителя, вторая и
              третья - по 25, соответственно
            </div>
            <h4 className="text-center fw-bold mt-5">repeat()</h4>
            <p>
              Фронты -{" "}
              <span className="text-decoration-line-through">
                {" "}
                люди ленивые{" "}
              </span>
              . Представьте, что нам нужно отрисовать 50 колонок! Значение
              свойства будет иметь 50 фракций - 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr
              1fr... Можно и так. Но мы нарушаем тем самым чистоту кода.
              Представьте такую колбасину в файле css среди иного кода -
              некрасиво, непрактично.
            </p>
            <em>Решение есть!</em>
            <SyntaxHighLighter language="css">
              {`.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr); //аналогично к grid-template-columns: 1fr 1fr 1fr;
}`}
            </SyntaxHighLighter>
            <p className="text-center">Результат ожидаем:</p>
            <div class="wrapper wrapper3">
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
              <div>Four</div>
              <div>Five</div>
            </div>
            <h4 className="text-center fw-bold mt-5">Отступы (gap)</h4>
            <p>
              Ранее требовалось знание понятия "отрицательные маржины", чтобы
              получить отступы между колонками и строками. Сейчас у нас есть gap
            </p>
            <SyntaxHighLighter language="css">
              {`.wrapper {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-column-gap: 10px;
   grid-row-gap: 20px;
}`}
            </SyntaxHighLighter>
            <p className="text-center">Результат:</p>
            <div class="wrapper wrapper-gap">
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
              <div>Four</div>
              <div>Five</div>
            </div>
            <div className="alert alert-primary mt-4" role="alert">
              Более подробно о grid свойствах и дополнительные (редко
              используемые свойства):{" "}
              <a
                href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#grid-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8"
                target="blank"
                className="alert-link"
              >
                тут
              </a>
              .
            </div>
          </div>
        </section>
        <section id="grid-game">
          <div className="container">
            <h2 className="text-center mt-5">Изучить grid свойства в игре</h2>
            <div className="m-auto">
              <img
                style={{
                  display: "block",
                  maxWidth: "100%",
                }}
                src={gridGarden}
                alt=""
              />
            </div>
            <p>
              Пройдите игру, чтобы запомнить поведение элементов в grid сетке
              при различных свойствах. Логика проста - вода в игре - дочерний
              блок, его нужно переместить на овощи, применяя grid свойства
            </p>
            <p className="text-center">
              <a
                type="button"
                href="https://cssgridgarden.com/#ru"
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
                href="https://medium.com/@stasonmars/%D0%B2%D0%B5%CC%88%D1%80%D1%81%D1%82%D0%BA%D0%B0-%D0%BD%D0%B0-grid-%D0%B2-css-%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5-%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%B8-%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA-220508316f8b"
              >
                Все о гридах на доступном языке
              </a>
              <a
                className="d-block text-decoration-underline text-light"
                href="https://html5book.ru/css-grid/"
              >
                Все, что вообще можно знать о grid
              </a>
            </div>

            <p className="text-center">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/uuOXPWCh-6o"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p> 2 минуты, чтобы понять базу grid. Отличный канал про IT</p>
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="mt-4 text-center">Презентация</h2>
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vT27N5pT_yTmDayz_wuAROypS-TlsSWyEMjqt__iDLvBOXe-a9_P3Snsni-ko5pUJcpcTSWzopb-aw1/embed?start=false&loop=false&delayms=3000"
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
                  Cверстать сайт по макету, используя <strong>гриды</strong>{" "}
                  <a
                    href="https://www.figma.com/file/pCnknSqrUpWEHUHxSHhUrl/MANUAL?node-id=2%3A660"
                    className="border border-1 p-1"
                  >
                    {" "}
                    Ccылка на макет{" "}
                  </a>
                </li>
                <li class="list-group-item">
                  <a class="btn btn-primary" role="button">
                    2.
                  </a>{" "}
                  Пройти игру{" "}
                  <a href="https://cssgridgarden.com/#ru"> Grid garden </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CSS8;
