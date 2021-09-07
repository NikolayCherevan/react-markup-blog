import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import hw1 from "./imagesJS1/anim2.gif";
import banner from "./imagesJS1/jsbanner.png";
import Zoom from "react-medium-image-zoom";
import SyntaxHighLighter from "react-syntax-highlighter";
import js1_1 from "./imagesJS1/javascript1_1.png";
import js8_1 from "./imagesJS1/javascript8_1.png";
import './stylesJS1/_stylesJS1.scss';
class JS1 extends Component {
  componentDidMount() {
    let target = null;
    document.querySelector('.first').addEventListener('click', function(event) {
      target = event.target;
      checkTarget();
    })
    document.querySelector('.second').addEventListener('click', function(event) {
      target = event.target;
      checkTarget();
    })
    document.querySelector('.third').addEventListener('click', function(event) {
      target = event.target;
      checkTarget();
    })

    function checkTarget() {
      if (target.innerText == "Красная") {
        alert("Красная")
      } else if (target.innerText == "Синяя") {
        alert("Синяя")
      } else {
        alert("Другая")
      }
    }
 }
  render() {
    return (
      <div>
        <h1>JS basic. DOM</h1>
        <section className="mt-4">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/jsMain/JS1#jsstarter">Что такое JavaScript?</Link></li>
                <li className="breadcrumb-item"><Link to="/jsMain/JS1#debug">Дебаг</Link></li>
                <li className="breadcrumb-item"><Link to="/jsMain/JS1#variables">Переменные JavaScript</Link></li>
                <li className="breadcrumb-item"><Link to="/jsMain/JS1#operators"> Операторы, комментарии </Link></li>
                <li className="breadcrumb-item"><Link to="/jsMain/JS1#cond_statements">Условные операторы </Link></li>
                <li className="breadcrumb-item"><Link to="/jsMain/JS1#js_DOM">JS DOM</Link></li>
                <li className="breadcrumb-item">
                  <Link to="/jsMain/JS1#resources">Дополнительные ресурсы </Link>
                </li>
                <li className="breadcrumb-item"><Link to="/jsMain/JS1#homework">Домашнее задание</Link></li>
              </ol>
            </nav>
          </div>
        </section>
        <section>
          <section id="jsstarter">
            <div className="container">
              <div className="text-center mt-5">
                <img style={{ maxWidth: "400px" }} src={banner} alt="" />
              </div>
              <h2 className="text-center mt-5"> Что такое JavaScript?</h2>
              <p className="bd-callout bd-callout-info">
                <b>JavaScript</b>  - это самый популярный <em> клиентский язык</em>, <b>поддерживаемый всеми браузерами</b>. JavaScript в основном используется для улучшения взаимодействия веб-страницы с пользователями, делая ее более живой и интерактивной. Он также используется для разработки игр и мобильных приложений.
              </p>
              <div className="text-center mt-5">
                <Zoom><img style={{ maxWidth: "500px" }} src={js1_1} alt="" /></Zoom>
              </div>
              <p className="bd-callout bd-callout-info">
                JavaScript не может работать сам по себе. Фактически,<b> браузер отвечает за выполнение кода JavaScript </b>. Когда пользователь запрашивает HTML-страницу с JavaScript в ней, сценарий отправляется в браузер, и браузер должен его выполнить.
              </p>
              <h5 className="text-center fw-bold mt-5">Инструменты, которые вам нужны </h5>
              <p className="bd-callout bd-callout-info">
                Для начала вам понадобится <em> редактор кода</em> и
                <em>браузер для отображения разрабатываемых вами веб-страниц</em> .
                <br />
                Вы можете использовать любой редактор по вашему выбору, включая <b>Notepad ++, Visual Studio Code, Sublime Text, Atom</b>  или любой другой.
                Вы можете использовать любой веб-браузер, включая <b>Google Chrome, Firefox, Microsoft Edge, Internet Explorer</b> и т.д.
              </p>
              <h5 className="text-center fw-bold mt-5">Простая программа на JavaScript</h5>
              <p>Чтобы запустить скрипт в браузере, прямо в html документе нужно написать тег<code>{`<script></script>`}</code> и поместить в него программу:</p>
              <SyntaxHighLighter language="javascript">
                {`
<button> RUN </button>



<script>
document.querySelector('button').addEventListener('click',function() {
alert('Hello world')
})
</script>
             `}
              </SyntaxHighLighter>
              <button onClick={() => alert('Hello world')} className="btn btn-danger">RUN</button>
              <p className="mt-5">Это пример самого простого подключения скрипта на страницу, но лучше всего отдельно создать файл JS и поместить в него программу,
                а сам файл подключить перед закрывающим тегом <code>body</code>
              </p>
              <SyntaxHighLighter language="html">
                {`
...

<script src="path_to_file/index.js"> </script>
</body>
`}
              </SyntaxHighLighter>
            </div>
          </section>
          <section id="debug">
            <div className="container">
              <h2 className="text-center mt-5"> Где баг? </h2>
              <p> Знакомство с js начинается с методов вывода в консоль - <code>console.log('Hello world')</code> или с метода вывода оповещений - <code>alert('Hello world')</code> . Это требуется для
                того, чтобы можно было дебажить(иследовать код на наличие ошибок, либо просто отслеживать ход выполнения программы)
              </p>
              <div className="alert alert-primary mt-4" role="alert">
                Помимо этого, есть и другие способы дебага JS <a href="https://learn.javascript.ru/debugging-chrome"> здесь</a>
              </div>

            </div>
          </section>
          <section id="variables">
            <div className="container">
              <h2 className="text-center mt-5"> Переменные </h2>
              <p className="bd-callout bd-callout-info">
                Переменные используются для <b>хранения значений</b>  (name = «John») или <b>выражений</b> (sum = x + y).
              </p>
              <p> Представьте себе корзину, в которое вы кладете яблоко, но ведь вы можете достать с нее яблоко и положить в нее сливы. Корзина в данном случае у нас - переменная, а яблоко - значение переменнной</p>
              Но корзин так-то в комнате может быть много, чтобы вспомнить в какую мы положили яблоко, надо ее подписать. Этот процес называется <b>обьявлением переменной:</b>
              <SyntaxHighLighter language="javascript">
                {`
let basket;
             `}
              </SyntaxHighLighter>
              <p> А процесс помещения в нее значения называется <b>присваиванием значения</b>: </p>

              <SyntaxHighLighter language="javascript">
                {`
let basket = 'apple';
             `}
              </SyntaxHighLighter>
              <p> Таким образом, мы присвоили значение переменной <kbd>basket</kbd></p>
              <div className="alert alert-primary mt-4" role="alert">
                Более подробно о переменных <a href="https://learn.javascript.ru/variables"> здесь</a>
              </div>
            </div>
          </section>
          <section id="operators">
            <div className="container">
              <h2 className="text-center mt-5"> Операторы, комментарии </h2>
              Есть <a href="https://learn.javascript.ru/operators"> базовые операторы </a>, вцелом, они выполняют действия как и в математике :
              <code> 1+1=2, 2+5=7</code>. Это логично. Но есть моменты, которые связаны с <a href="https://learn.javascript.ru/types"> типами данных </a>
              Например, сумма числа и строки со значением <code>1</code> будет выполняться таким образом: <code>'1'+ 1 </code> и результат будет равна <code>{1 + '1 '}</code>
              В таком случае, происходит <a href="https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Strings#%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0%D1%82%D0%B5%D0%BD%D0%B0%D1%86%D0%B8%D1%8F_%D1%81%D1%82%D1%80%D0%BE%D0%BA">конкатенация</a>
              
              <p className="bd-callout bd-callout-info">
                Что касается комментарией в js, все так же просто: 
              </p>
              <SyntaxHighLighter language="javascript">
                {`
/* 
многострочный комментарий
 */


//однострочный комментарий
             `}
              </SyntaxHighLighter>
              <div className="alert alert-primary mt-4" role="alert">
                Более подробно о базовых операторах <a href="https://learn.javascript.ru/operators"> здесь</a>, a так же о операторах сравнения - <a href="https://learn.javascript.ru/comparison"> здесь </a>
              </div>
            </div>
          </section>
          <section id="cond_statements">
            <div className="container">
              <h2 className="text-center mt-5"> Условные операторы (условное ветвление) </h2>
              Рассмотрим на примере программы:
              <p className="bd-callout bd-callout-info">
              Есть три кнопки, при нажатии на одну из них мы будем считывать текст кнопки, проверять его значение и выводить сообщение о том, на какую кнопку мы нажали
              </p>
              <SyntaxHighLighter language="javascript">
                {`
function checkTarget() {
  if (target.innerText == "Красная") {
    alert("Красная")
  } else if (target.innerText == "Синяя") {
    alert("Синяя")
  } else {
    alert("Другая")
  }
}

             `}
              </SyntaxHighLighter>
              <button class="first btn btn-danger m-2">
Красная
</button>
<button class="second btn btn-primary">
Синяя
</button>
<button class="third btn btn-info m-2">
Другая
</button>
              <p> Попадая в блок определенного условия, выполнится лишь та часть кода, которая находится в блоке с истинным значением </p>
              <div className="alert alert-primary mt-4" role="alert">
                Более подробно об условных операторах <a href="https://learn.javascript.ru/ifelse"> здесь</a> 
              </div>
            </div>
          </section>
          <section id="js_DOM">
            <div className="container">
              <h2 className="text-center mt-5"> Манипуляции с DOM </h2>
              <p className="bd-callout bd-callout-info">
              JavaScript может получить доступ ко всем элементам на веб-странице, используя <b>объектную модель документа</b>  ( <u>DOM</u> ). Фактически, веб-браузер создает DOM веб-страницы при загрузке.
              </p>
              <p> <small> Модель DOM создается в виде дерева таких объектов:</small></p>
              <p className="text-center"> <Zoom><img style={{ maxWidth: "400px" }} src={js8_1} alt="" /></Zoom> </p>
                Благодаря DOM мы можем изменять, перемещать, удалять, заменять элементы на странице, получать их координаты, атрибуты...  
              <p>А для наглядности:</p>
               <p className="bd-callout bd-callout-info"> Давайте создадим <code>colorpicker</code> и при выборе цвета, в реальном времени будем менять цвет <b className="some-text">ВОТ ЭТОГО ТЕКСТА</b> </p>
              <input type="color" name="" id="" onChange={function(event){document.querySelector('.some-text').style.color = event.target.value}}/> - вот colorpicker, пробуйте
              <p className="bd-callout bd-callout-info"> Если вам понравилось, то просто не останавливайтесь на достигнутом! Впереди много крутецкого!!</p>
              <small> А вот и код для любопытных. Попробуйте разобраться: </small>
            <SyntaxHighLighter language="html">
                {`
<!--html-->
<input type="color">
<b className="some-text">ВОТ ЭТОГО ТЕКСТА</b>
             `}
              </SyntaxHighLighter>
       <SyntaxHighLighter language="javascript">
                {`
//JS
document.querySelector('[type="color"]').addEventListener('input', function(event) {
  document.querySelector('.some-text').style.color = event.target.value
})

             `}
              </SyntaxHighLighter>
              <div className="alert alert-primary mt-4" role="alert">
                Более подробно об элементах DOM дерева <a href="https://learn.javascript.ru/dom-nodes"> здесь</a> 
              </div>
                <div className="alert alert-primary mt-4" role="alert">
                Все возможности DOM <a href=" https://learn.javascript.ru/"> здесь, во второй части учебника, </a> в разделе <em>"Браузер: документ, события, интерфейсы"</em>
              </div>
             
            
            </div>
          </section>
          <section id="resources">
            <div className="container">
              <h2 className="text-center mt-5">Дополнительные ресурсы</h2>
              <div className="alert bg-dark" role="alert">
                <a
                  className="d-block text-decoration-underline text-light"
                  href="https://readster.me/book/javascript-dlya-detej-samouchitel-po-programmirovaniyu/"
                >
                  C этого можно начать. Не только для детей :)
                </a>
                <a
                  className="d-block text-decoration-underline text-light"
                  href="https://learn.javascript.ru/"
                >
                  <b>Кладезь знаний по JS</b>
                </a>
                <a
                  className="d-block text-decoration-underline text-light"
                  href="https://www.codewars.com/"
                >
                  Тренироваться по JS на практике
                </a>
              </div>

              <p className="text-center">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/Bluxbh9CaQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>
                  JavaScript Основы для Начинающих - Полный Курс за 6 часов <b> 10/10</b>
                </p>
              </p>
            </div>
          </section>
          <div className="container">
            <h2 className="mt-4 text-center">Презентация</h2>
            <p className="text-center">
              <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRCbGPWhnMgkzv9mV4QPllGzCM35U0QFbGj7ZYUuoPTJCHQBGRuWqzth566TzDaANfWNng9YZ-STU_D/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
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
                  Реализовать <em>выпадающее меню</em>
                  <p className="text-center layout">
                    <Zoom><img className="fit-image gif-js" src={hw1} alt="" /></Zoom>
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


export default JS1;