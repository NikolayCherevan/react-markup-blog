import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import banner from "./imagesHTML3/form.jpg";
import styledHW from "./imagesHTML3/formstyled.jpg";
import HW2 from "./imagesHTML3/hw2.jpg";
import SyntaxHighLighter from "react-syntax-highlighter";
import "./stylesHTML3/_stylesHTML3.scss";
import Zoom from 'react-medium-image-zoom'
import {
  AlertOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
class HTML3 extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value === "выбрать кем быть по жизни") {
      alert(
        "Вы не смогли определиться кем быть по жизни(( форма не отправлена"
      );
    } else {
      alert(
        `АГААА теперь ЕЛОН Макс узнает что вы хотите быть ${this.state.value}. Форма отправлена`
      );
    }
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>HTML - формы</h1>
        <section className="mt-4">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="HTML3#for_what">Зачем нужны формы?</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="HTML3#form-tag">Тег {`<form>`}</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="HTML3#form-control">
                    Элементы управления HTML-формы
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="HTML3#fields_n_attr">
                    {" "}
                    Множество элементов формы + атрибуты{" "}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="HTML3#custom-elements">
                    {" "}
                    Кастомная стилизация checkbox, radio button
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="HTML3#resources">Дополнительные ресурсы </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="HTML3#hw">Домашнее задание </Link>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <section id="for_what">
          <div className="container">
            <div className="banner-wrapper text-center">
              <figure>
                <img src={banner} alt="" />
                <figcaption>Пример формы с сайта facebook</figcaption>
              </figure>
            </div>
            <h2 className="text-center mt-5">Зачем формы?</h2>

            <p className="bd-callout bd-callout-info">
              HTML-формы необходимы, когда вы хотите собрать некоторые данные о
              посетителе сайта. Например, во время регистрации пользователя вы
              хотите получить такую ​​информацию, как <em> имя </em> ,{" "}
              <em> адрес электронной почты </em> , номер кредитной карты и тд
            </p>
            <p className="bd-callout bd-callout-info">
              Форма будет принимать входные данные от посетителя сайта, а затем
              отправлять их в файл с прописанной серверной логикой{" "}
              <em> (например, на языке PHP) </em>
            </p>
            <p className="bd-callout bd-callout-info">
              Доступны различные элементы формы, такие как текстовые поля, поля
              текстового поля, раскрывающиеся меню, переключатели, флажки и т.д.
            </p>
          </div>
        </section>
        <section id="form-tag">
          <div className="container">
            <h2 className="text-center mt-5">Тег {`<form>`}</h2>

            <p className="bd-callout">
              Тег HTML {`<form>`} используется для создания HTML-формы и имеет
              следующий синтаксис:
              <SyntaxHighLighter className="mt-5" language="html">
                {`<form action = "Script URL" method = "GET|POST">
  здесь будут другие элементы формы - их рассмотрим ниже в статье 
</form>`}
              </SyntaxHighLighter>
            </p>
            <h4 className="text-center mt-5"> Атрибуты формы </h4>
            <div class="accordion mt-5" id="accordionExample">
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
                    action
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    URI-адрес программы, которая обрабатывает информацию
                    переданную через форму
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
                    method
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    HTTP метод, который браузер использует, для отправки формы
                    Наиболее часто используются методы GET и POST.
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
                    target
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Ключевое слово, показывающее где отображать ответ, который
                    будет получен, после отправки формы Принимает такие
                    значения, как <code>_blank</code> , <code>_self</code>,{" "}
                    <code>_parent</code> и т.д.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="form-control">
          <div className="container">
            <h2 className="text-center mt-5">Элементы управления HTML-формы</h2>

            <p className="bd-callout">
              Существуют различные типы элементов управления формами, которые вы
              можете использовать для сбора данных с помощью HTML-формы:
            </p>
            <form action="" onSubmit={this.handleSubmit}>
              <ol class="list-group list-group-numbered">
                <li class="list-group-item">
                  {" "}
                  <code>input</code>{" "}
                  <input type="text" placeholder="Сюда можно ввести текст" />
                  <SyntaxHighLighter className="mt-5" language="html">
                    {`<input type="text" placeholder="Сюда можно ввести текст" />`}
                  </SyntaxHighLighter>
                </li>
                <li class="list-group-item">
                  {" "}
                  <p>
                    <code>checkbox</code> + кликабельный label правее чекбокса
                  </p>{" "}
                  <input type="checkbox" name="" id="learn-form" />{" "}
                  <label htmlFor="learn-form">Учить html формы</label>
                  <SyntaxHighLighter className="mt-5" language="html">
                    {`<input type="checkbox" name="" id="learn-form" /> <label htmlFor="learn-form">Учить html формы</label>`}
                  </SyntaxHighLighter>
                </li>
                <li class="list-group-item">
                  {" "}
                  <p>
                    <code>radio</code> + кликабельный label правее radio
                  </p>{" "}
                  <input type="radio" name="tobe_or_not" id="tobe" />{" "}
                  <label htmlFor="tobe"> Быть</label>{" "}
                  <input type="radio" name="tobe_or_not" id="nottobe" />{" "}
                  <label htmlFor="nottobe"> Не быть</label>
                  <SyntaxHighLighter className="mt-5" language="html">
                    {`<input type="radio" name="tobe_or_not" id="tobe" /> <label for="tobe"> Быть</label>
<input type="radio" name="tobe_or_not" id="nottobe" /> <label for="nottobe"> Не быть</label>`}
                  </SyntaxHighLighter>
                </li>
                <li class="list-group-item">
                  <p>
                    <code>select</code> + <code>option</code>
                  </p>{" "}
                  <select
                    name=""
                    id=""
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <option value="выбрать кем быть по жизни">
                      выбрать кем быть по жизни
                    </option>
                    <option value="фронтом">фронтом</option>
                    <option value="обычным человеком">
                      обычным человеком :)
                    </option>
                  </select>
                  <SyntaxHighLighter className="mt-5" language="html">
                    {`<select name="" id="">
        <option value="">выбрать кем быть по жизни</option>
        <option value="">фронтом</option>
        <option value="">обычным человеком :)</option>
</select>`}
                  </SyntaxHighLighter>
                </li>
                <li class="list-group-item">
                  <code>input</code> + <code>type="file"</code>
                  <input type="file" name="" id="file" />
                  <label className="fw-bold" htmlFor="file">
                    {" "}
                    Загрузить файл (сюда тоже можно нажать, это label, он
                    привязан к input по <code>id</code> )
                  </label>
                  <SyntaxHighLighter className="mt-5" language="html">
                    {`<input type="file" name="" id="file" />
<label for="file"> Загрузить файл</label>`}
                  </SyntaxHighLighter>
                </li>
                <li class="list-group-item">
                  <code>button</code> + <code>type="submit"</code> +{" "}
                  <code>type="reset"</code>
                  <p>
                    <button type="reset">
                      Сбросить все записи элементов формы
                    </button>
                  </p>
                  <p>
                    <button type="submit">Отправить форму</button>{" "}
                  </p>
                  <SyntaxHighLighter className="mt-5" language="html">
                    {`<input type="file" name="" id="file" />
<label for="file"> Загрузить мозг</label>`}
                  </SyntaxHighLighter>
                </li>
              </ol>
            </form>
          </div>
        </section>
        <section id="fields_n_attr" className="mt-4">
          <div className="container">
            <h2 className="text-center mt-5">
              Больше о элементах управления HTML-формы и их атрибутах{" "}
            </h2>
            <div className="alert alert-dark mt-4" role="alert">
              У каждого элемента формы есть различные атрибуты, например, у{" "}
              <code> input </code> элемента с атрибутом{" "}
              <code> type равным </code>
              <code> password </code>
              есть атрибут <code> maxlength </code> и вы не сможете ввести более
              5 знаков в следующий input элемент(аx да, и не увидете что ввели в
              поле)):
              <input
                type="password"
                name=""
                placeholder="только 5 символов"
                maxLength="5"
                id=""
              />
              <p className="mt-5">
                <b>
                  {" "}
                  Интерес проснулся? Почему оно так работает? Читать подробнее о
                  различных элементах формы и их атрибутах -{" "}
                  <a href="https://html5book.ru/html5-forms/">здесь</a>.{" "}
                </b>
              </p>
              <p>
                {" "}
                Не забывайте набивать руку и пробовать различные штуки в{" "}
                <a href="https://jsfiddle.net/"> jsfiddle </a>{" "}
              </p>
            </div>
          </div>
        </section>
        <section id="custom-elements">
          <div className="container">
            <h2 className="mt-4 text-center"> Кастомная стилизация checkbox, radio</h2>
            <p>
              {" "}
              Такой запрос от клиентов поступает часто - дефолтные переключатели
              некрасивые. А кастомные стили к ним не применяются
              (сложнопридуманные элементы, которые являются наследием{" "}
              <a href="https://learn.javascript.ru/shadow-dom">
                {" "}
                shadow dom
              </a>{" "}
              имеют такое поведение)
            </p>
            <p>
              {" "}
              Алгоритм действий прост - нажимая на label, у нас активируется
              чекбокс. То бишь, его можно вовсе скрыть и оставить лишь label. А
              дальше -{" "}
              <a href="https://itchief.ru/html-and-css/styling-checkbox-and-radio">
                дело техники
              </a>
              <div className="alert bg-dark text-light" role="alert">
                <AlertOutlined/> Не стоит расстраиваться, если стилзация непонятна с первого
                раза, тк я считаю эти методы стилизации излишне перегруженными,
                понимание происходящего придет со временем
              </div>
            </p>
          </div>
        </section>
        <section id="resources">
          <div className="container">
            <h2 className="text-center mt-5">Дополнительные ресурсы</h2>
            <div className="alert bg-dark" role="alert">
              <a
                className="d-block text-decoration-underline text-light"
                href="https://www.w3.org/TR/html401/interact/forms.html"
              >
                Как на счет официальной документации по формам?)
              </a>
              <a
                className="d-block text-decoration-underline text-light"
                href="https://codepen.io/collection/KuDsH/"
              >
                Позаимствовать <del>готовые формы</del> идеи для стилизации форм
              </a>
            </div>

            <p className="text-center">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/fNcJuPIZ2WE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>
                {" "}
                Понять формы за 25 минут <ArrowUpOutlined />
                <ArrowUpOutlined />
                <ArrowUpOutlined />
              </p>
            </p>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="mt-4 text-center">Презентация</h2>
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vSoI_OgoTPaEL0OwP0wvhUCPMQHHJzaxDijy3tN5oc1LE-TUDDJq5hHrJ1fsi7YimK2UzO-yyXc3SE_/embed?start=false&loop=false&delayms=3000"
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
                  </a>
                  <p>Стилизовать форму по примеру:</p>
                  <Zoom><img className="image-base" src={styledHW} alt="" /></Zoom>
                </li>
                <li class="list-group-item">
                  <a class="btn btn-primary" role="button">
                    2.
                  </a>
                  <p>Стилизовать элементы формы по примеру:</p>
                  <Zoom><img style={{maxWidth: "100px"}} src={HW2} alt="" /></Zoom>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HTML3;
