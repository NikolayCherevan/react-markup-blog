import React, { Component } from 'react';
import boxModel from './imagesCSS4/box-model.png';
import fonts from './imagesCSS4/fonts.png';
import SyntaxHighLighter from 'react-syntax-highlighter';

class CSS4 extends Component {
    render() {
        return (
            <div>
              <h1>Блочная модель. Поток. Float. Font-awesome, icons(svg,png,fonts), google fonts</h1>
              <section className="mt-4">
                <div className="container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Блочная модель</a></li>
                    <li className="breadcrumb-item"><a href="#">Структура блочной модели</a></li>
                    <li className="breadcrumb-item"><a href="#">Примеры использования</a></li>
                    <li className="breadcrumb-item"><a href="#">Поток и способы его нарушить</a></li>
                    <li className="breadcrumb-item"><a href="#">Интересные свойства</a></li>
                    <li className="breadcrumb-item"><a href="#">Font Awesome</a></li>
                    <li className="breadcrumb-item"><a href="#">Google Fonts</a></li>
                    <li className="breadcrumb-item"><a href="#">Домашнее задание</a></li>
                  </ol>
                </nav>
                </div>
              </section> 
              <section>
                  <div className="container">
                      <h2 className="text-center mt-4">Блочная модель</h2>
                      <p>Каждый элемент в CSS заключён в блок, и понимание поведения этих блоков — 
                      это ключ к умению задавать раскладку с помощью CSS, 
                      то есть выстраивать одни элементы относительно других элементов.</p>
                      <div className="alert alert-warning mt-2" role="alert">
                      <strong>Напоминание:</strong> В CSS мы, говоря упрощённо, имеем два типа элементов — <strong>блочные</strong> и <strong>строчные</strong>!
                    </div>
                    <div className="alert alert-dark mt-2" role="alert">
                      <strong>Важно:</strong> Как именно отображаются элементы — как блочные или строчные или как-то ещё, определяется свойством <kbd>display</kbd>. 
                      Каждый элемент содержит значение свойства <kbd>display</kbd> по умолчанию, но как и с любым другим значением свойств, это значение может быть переписано. 
                      Есть немало значений для свойства <kbd>display</kbd>, но наиболее распространённые это <code>block</code>, <code>inline</code>, <code>inline-block</code> и <code>none</code>.
                    </div>
                    <SyntaxHighLighter language="css">
                      {`
                        p {
                          display: block;
                        }
                        
                        p {
                          display: inline;
                        }
                        
                        p {
                          display: inline-block;
                        }
                      `}
                    </SyntaxHighLighter>
                    <h3 className="text-center mt-4">Основные моменты в поведении элементов</h3>
                    <div className="d-flex align-items-start w-100 mt-4">
                      <div className="nav flex-column nav-pills me-3 w-25" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Блочные</button>
                        <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Строчные</button>
                        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Строчно-блочные</button>
                      </div>
                      <div className="tab-content w-75" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                          <div className="tab-pane-inner d-flex flex-row justify-content-center">
                            <div className="row w-100">
                            <ul>
                                <li>Начнётся с новой строки.</li>
                                <li>Будет расширяться вдоль строки таким образом, чтобы заполнить всё пространство, доступное в её контейнере. 
                                    В большинстве случаев это означает, что блок станет такой же ширины, как и его контейнер, заполняя 100% доступного пространства.</li>
                                <li>Будут применяться свойства <kbd>width</kbd> и <kbd>height</kbd>.</li>
                                <li>Внешние и внутренние отступы, рамка будут отодвигать от него другие элементы.</li>
                            </ul>
                            </div>
                          
                          </div>
                          
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <div className="tab-pane-inner d-flex flex-row justify-content-center">
                        <div className="row w-100">
                            <ul>
                                <li>Высота и ширина элемента вычисляется браузером автоматически, исходя из содержимого блока.</li>
                                <li>Размеры содержимого можно устанавливать через свойства <kbd>width</kbd> и <kbd>height</kbd>.</li>
                                <li>Ширина и высота блока получаются сложением значений <kbd>width/height</kbd>,<kbd>margin</kbd>, <kbd>border</kbd> и <kbd>padding</kbd>.</li>
                                <li>Несколько элементов идущих подряд располагаются на одной строке и переносятся на другую строку при необходимости.</li>
                                <li>Элементы можно выравнивать по вертикали с помощью свойства <kbd>vertical-align</kbd>.</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        </div>
                  </div>
                  <h3 className="text-center mt-4">Распространенные блочные элементы:</h3>
                    <ul className="list-group">
                      <li className="list-group-item" aria-current="true"><code>h1-h6</code> - заголовки разного уровня.</li>
                      <li className="list-group-item"><code>div</code> - division - тег обозначающий блочную область на сайте.</li>
                      <li className="list-group-item"><code>header, aside, main, section, footer</code> - семантичная версия тега <kbd>div</kbd>.</li>
                      <li className="list-group-item"><code>ul, ol</code> - теги списков.</li>
                      <li className="list-group-item"><code>p</code> -  параграф.</li>
                      </ul>
                      <div className="alert alert-primary mt-4" role="alert">
                    Полный список блочных элементов и подробная информация по их использованию: <a href="https://webref.ru/course/block-inline/block" target="blank" className="alert-link">тут</a>.
                  </div>
                  <h3 className="text-center mt-4">Распространенные строчные элементы:</h3>
                    <ul className="list-group">
                      <li className="list-group-item" aria-current="true"><code>a</code> - тег гиперссылки.</li>
                      <li className="list-group-item"><code>span</code> - тег для отображения текста.</li>
                      </ul>
                      <div className="alert alert-primary mt-4" role="alert">
                    Полный список строчных элементов и подробная информация по их использованию: <a href="https://webref.ru/course/block-inline/inline" target="blank" className="alert-link">тут</a>.
                  </div>
                  <h3 className="text-center mt-4">Распространенные строчно-блочные элементы:</h3>
                    <ul className="list-group">
                      <li className="list-group-item" aria-current="true"><code>img</code> - вставляет изображение на вашу страницу.</li>
                      <li className="list-group-item"><code>input</code> - поле ввода.</li>
                      <li className="list-group-item"><code>button</code> - кнопка.</li>
                      <li className="list-group-item"><code>textarea</code> - расширенное поле ввода.</li>
                      <li className="list-group-item"><code>select</code> - элемент с возможностью выбора.</li>
                      </ul>
                      <div className="alert alert-primary mt-4" role="alert">
                    Полный список строчных элементов и подробная информация по их использованию: <a href="https://webref.ru/course/block-inline/inline-block" target="blank" className="alert-link">тут</a>.
                  </div>
                  <iframe id="ytplayer" className="w-100 mt-4" type="text/html" width="640" height="520"
                        src="https://www.youtube.com/embed/WJ8Yoi04XvQ"
                        frameborder="0"/>
                    <small>Блочная модель в примерах</small>
                  </div>
              </section>
              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Структура блочной модели</h2>
                    <p>Если мы говорим о блочной модели, то я бы посмотрел на нее, как на луковицу - она выстраивается слой за слоем.
                    </p>
                    <p>Ниже посмотрим, что это за <strong>слои</strong> и за что они отвечают:
                    </p>      
                    <div className="row d-flex flex-row mt-4">
                        <img className="w-75" src={boxModel} alt="" />
                    </div>
                    <ul className="list-group mt-4">
                      <li className="list-group-item" aria-current="true"><code>content</code> - поле с контентом.</li>
                      <li className="list-group-item"><code>padding</code> - внутренний отступ.</li>
                      <li className="list-group-item"><code>border</code> - граница.</li>
                      <li className="list-group-item"><code>margin</code> - внешний отступ.</li>
                      </ul>
                      <iframe className="mt-4" height="520" width="100%" scrolling="no" title="CSS padding and margin practice" src="https://codepen.io/danielrlc/embed/LjEwq?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/danielrlc/pen/LjEwq">
                        CSS padding and margin practice</a> by Daniel Clarke (<a href="https://codepen.io/danielrlc">@danielrlc</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                      </iframe>
                      <h3 className="text-center mt-4">Как использовать:</h3>
                      <p>Допустим у нас с вами есть блочный элемент с классом <kbd>box</kbd> и мы хотим менять его отступы и границы.
                      Как вы понимаете - поменять можно значение с любой стороны.</p>
                      <p>Пример ниже:</p>
                            <SyntaxHighLighter language="css">
                      {`
                        .box{
                            padding: 10px 100px 20px 40px;
                         }
                         
                         // Equals
                         .box{
                            padding-top: 10px;
                            padding-right: 100px;
                            padding-bottom: 20px;
                            padding-left: 40px;
                         }
                      `}
                    </SyntaxHighLighter>
                    <p>Так же работает и с margin:</p>
                            <SyntaxHighLighter language="css">
                      {`
                        .box{
                            margin: 10px 100px 20px 40px;
                         }
                         
                         // Equals
                         .box{
                            margin-top: 10px;
                            margin-right: 100px;
                            margin-bottom: 20px;
                            margin-left: 40px;
                         }
                      `}
                    </SyntaxHighLighter>
                    <div className="alert alert-primary mt-4" role="alert">
                    Подробнее о работе с блоками: <a href="https://habr.com/ru/post/569530/" target="blank" className="alert-link">тут</a>.
                  </div>
                    </div>
              </section>
              <section>
                  <div className="container">
                      <h2 className="text-center mt-4">Поток</h2>
                      <p><strong>Поток</strong> — еще одно понятие, знакомство с которым обязательно. 
                      Так называется порядок вывода элементов на страницу. В обычном виде все блоки выводятся в том порядке, в котором они записаны внутри HTML-документа. 
                      Этот порядок можно менять, и этому будет посвящён данный курс.</p>
                    <p>
                    Схема, при которой блочные и строчные HTML-элементы выводятся друг за другом в том порядке, в котором они размечены в файле, называется <strong>"Нормальный поток документа"</strong>.
                    </p>
                    <h3 className="text-center mt-4">
                        Слои наложения
                    </h3>
                    <p>У браузера есть <strong>три измерения</strong>.</p>
                    <p>Каждый элемент HTML принадлежит воображаемому <strong>слою</strong>.</p>
                    <p><strong>Порядок наложения</strong> зависит от того, как элементы вложены друг в друга: дочерние элементы появляются поверх своих родителей.</p>
                    <iframe width="100%" height="520" src="//jsfiddle.net/webref/qwhf4k41/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                    <p>Как можно нарушить порядок вещей - так можно и нарушить нормальный поток документа.</p>
                    <h3 className="text-center mt-4">Способы</h3>
                    <ul className="list-group">
                      <li className="list-group-item" aria-current="true"><code>height, width</code> - Подходит, когда пользователь активирует (например, щёлкает мышью) элемент.</li>
                      <li className="list-group-item"><code>float</code> - Соответствует переключателю или флажку в выбранном состоянии.</li>
                      <li className="list-group-item"><code>position:absolute, position:fixed</code> - удаляют элемент из потока.</li>
                      <li className="list-group-item"><code>z-index</code> -  может менять порядок наложения элементов по оси Z.</li>
                    </ul>
                  </div>
              </section>
              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Интересные свойства:</h2>
                    <div className="alert alert-warning mt-2" role="alert">
                      <strong>Box-sizing:</strong> <code>border-box</code> говорит браузеру учитывать любые границы и внутренние отступы в значениях, которые вы указываете в ширине и высоте элемента. Если вы выставите элементу ширину 100 пикселей, то эти 100 пикселей будут включать в себя границы и внутренние отступы, а контент сожмётся, чтобы выделить для них место. Обычно это упрощает работу с размерами элементов..
                    </div>
                    <div className="alert alert-warning mt-2" role="alert">
                      <strong>Overflow:</strong> <code>hidden</code> Контент обрезается, без предоставления прокрутки.
                    </div>
                    <div className="alert alert-warning mt-2" role="alert">
                      <strong>Clear:</strong> указывает, может ли элемент быть рядом с плавающими  floating элементами,
                       которые предшествуют ему или должны быть перемещены вниз (очищены) под ними. 
                      Свойство clear применяется как к плавающим, так и к неплавающим элементам.
                    </div>
                    <div className="alert alert-primary mt-4" role="alert">
                    Подробнее о clear: <a href="https://developer.mozilla.org/ru/docs/Web/CSS/clear" target="blank" className="alert-link">тут</a>.
                  </div>
                    </div>
              </section>
              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Font Awesome</h2>
                    <p>Иконочный шрифт и CSS-инструментарий. Font Awesome предлагает вам масштабируемые векторные иконки, 
                        которые вы можете с легкостью персонализировать —
                         размер, цвет, тени и все, что можно сделать силами CSS.</p>
                    <p>Легко кастомизируется под ваши нужды и легко добавляется в проект.</p>
                    <SyntaxHighLighter language="bash">
                      {`
                        npm install --save @fortawesome/fontawesome-free

                        //or

                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

                      `}
                    </SyntaxHighLighter>
                    <iframe height="520" width="100%" scrolling="no" title="Font Awesome Icon Font Example #2" src="https://codepen.io/SitePoint/embed/hFbBL?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/SitePoint/pen/hFbBL">
                        Font Awesome Icon Font Example #2</a> by SitePoint (<a href="https://codepen.io/SitePoint">@SitePoint</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                    <small>Пример использования <code>font-awesome</code></small>
                    </div>
              </section>
              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Google Fonts</h2>
                    <p>Есть простой и удобный способ подключить нестандартный шрифт — использовать <kbd>Google Fonts</kbd>. 
                        Это бесплатный сервис, с помощью которого можно подключать шрифты, но не хранить их на своём сервере. 
                        Чтобы им воспользоваться, необходимо выбрать шрифт и добавить одно или несколько нужных начертаний, 
                        а затем вставить в <kbd>head</kbd> ссылку, которую сгенерирует Google Fonts во вкладке <kbd>Embed</kbd>.</p>
                        <div className="row d-flex flex-row mt-4">
                        <img className="w-75" src={fonts} alt="" />
                        </div>
                    <p>Этого достаточно, чтобы шрифт подключился. Теперь его можно использовать в свойстве <kbd>font-family</kbd> без каких-либо дополнительных действий.</p>
                    <SyntaxHighLighter language="css">
                      {`
                        body {
                            font-family: "Roboto", "Arial", sans-serif;
                          }

                      `}
                    </SyntaxHighLighter>
                    <iframe height="520" width="100%" scrolling="no" title="css @import google fonts example" src="https://codepen.io/jcfausto/embed/JEmeax?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/jcfausto/pen/JEmeax">
                        css @import google fonts example</a> by Julio Cesar Fausto (<a href="https://codepen.io/jcfausto">@jcfausto</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                    <small>Пример использования <code>google fonts</code></small>
                    </div>
              </section>
              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Презентация</h2>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQtABMqkrXouc_i6brzziIhd4IN6Ea2GQ_tnTgnxDmp9DC5LUh9NNUlrAnFuBDsGrVw9SWX0O56zCHB/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </div>
              </section>

              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Домашнее задание</h2>
                    <div class="bd-callout bd-callout-warning">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"><a class="btn btn-primary" href="#" role="button">1.</a> Создайте новый проект с <strong>HTML и CSS</strong>  файлами. Проанализируйте, какой из стилей имеет наивысший приоритет.</li>
                      <li class="list-group-item"><a class="btn btn-primary" href="#" role="button">2.</a> Установить <strong>VS Code</strong>, <a href="https://www.youtube.com/watch?v=2ntJ1ETtHi8">дополнительные плагины</a></li>
                      <li class="list-group-item"><a class="btn btn-primary" href="#" role="button">3.</a> Читать дополнительную информацию (история мира WEB, о архитектуре “сервер-клиент”, передача данных, известные разработчики) </li>
                    </ul>
                    </div>
                    </div>
              </section>  
            </div>
        );
    }
}


export default CSS4;