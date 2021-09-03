import React, { Component } from 'react';
import rules from './imagesCSS1/rules.png';
import source from './imagesCSS1/source.jpg';
import without_source from './imagesCSS1/without_source.jpg';
import SyntaxHighLighter from 'react-syntax-highlighter';

class CSS1 extends Component {
    render() {
        return (
            <div>
              <h1>CSS introduction. Инструменты разработчика в браузере </h1>
              <section className="mt-4">
                <div className="container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">CSS</a></li>
                    <li className="breadcrumb-item"><a href="#">CSS правила</a></li>
                    <li className="breadcrumb-item"><a href="#">Внешние/Внутренние/Встроенные</a></li>
                    <li className="breadcrumb-item"><a href="#">Class & id</a></li>
                    <li className="breadcrumb-item"><a href="#">CSS-селекторы</a></li>
                    <li className="breadcrumb-item"><a href="#">Вес CSS-селекторов</a></li>
                    <li className="breadcrumb-item"><a href="#">Source Map</a></li>
                    <li className="breadcrumb-item"><a href="#">Домашнее задание</a></li>
                  </ol>
                </nav>
                </div>
              </section>
              <section>
                  <div className="container">
                      <h2 className="mt-4 text-center">CSS. Кто такой?</h2>
                      <p>
                      <strong>CSS</strong> <code>(Cascading Style Sheets)</code> - это код, который вы используете для стилизации вашей веб-страницы. 
                      Как и <code>HTML, CSS</code> на самом деле не является языком программирования.
                      Это не язык разметки - это <code>язык таблицы стилей</code>. Это означает, что он позволяет применять стили выборочно к элементам в документах HTML. 
                      Например, мы можем найти все элементы абзаца на HTML странице и изменить текст внутри них с чёрного на красный.
                      Для этого - нужно написать такой <code>CSS</code>:
                      </p>
                      <SyntaxHighLighter language="css">
                      {`
                        p {
                            color: red;
                          }
                      `}
                            </SyntaxHighLighter>
                      <div className="alert alert-dark" role="alert">
                      <strong>Примечание:</strong> Для того, чтобы все заработало - создайте файл <kbd>style.css</kbd> и поместите свои стили в него.
                      После - подключите этот документ к своему <kbd>index.html</kbd> для того, чтобы применить CSS к вышему HTML-документу.
                      Для этого в тег <kbd>&lt;head&gt;</kbd> - поместите такую строку:
                    </div>
                    <SyntaxHighLighter language="html">
                      {`
                        <link href="styles/style.css" rel="stylesheet" type="text/css">
                      `}
                            </SyntaxHighLighter>
                            <div className="alert alert-warning mt-2" role="alert">
                      <strong>Помни:</strong> CTRL + S - твой лучший друг! 
                    </div>
                        <p class="text-danger mt-4">Вуаля: теперь твои параграфы - красного цвета!</p>
                  </div>
                  
              </section>
              <section>
                  <div className="container">
                      <h2 className="mt-4 text-center">CSS-правила</h2>
                      <div className="row d-flex flex-row justify-content-center">
                        <img className="w-75" src={rules} alt="" />
                      </div>
                      <h3 className="mt-3">Основные элементы:</h3>
                      <ul className="mt-3">
                          <li><code>Селектор (Selector)</code> Имя HTML элемента в начале набора правил. 
                          Он выбирает элемент(ы) для применения стиля (в данном случае, элементы p ). 
                          Для стилизации другого элемента, просто измените селектор.</li>
                          <li><code>Свойства (Properties)</code> Способы, которыми вы можете стилизовать определённый HTML элемент 
                          (в данном случае, <code>color</code> является свойством для элементов <kbd>&lt;p&gt;</kbd>).
                               В CSS вы выбираете, какие свойства вы хотите затронуть в вашем правиле.</li>
                          <li><code>Значение свойства (Property value)</code> Справа от свойства, после двоеточия, у нас есть значение свойства, 
                          которое выбирает одно из множества возможных признаков для данного свойства (существует множество значений <code>color</code>, помимо <span className="text-primary">blue</span>).</li>
                          <li><code>Объявление (Declaration)</code></li>
                      </ul>
                      <iframe id="ytplayer" className="w-100" type="text/html" width="640" height="520"
                        src="https://www.youtube.com/embed/GoBvYPwv-g8"
                        frameborder="0"/>
                        <small>Максимально доступное объяснение</small>
                        <div className="alert alert-primary mt-4" role="alert">
                    Все CSS свойства: <a href="https://webref.ru/css" target="blank" className="alert-link">тут</a>.
                  </div>
                  </div>
              </section>
              <section>
                  <div className="container">
                      <h2 className="mt-4 text-center">Внешние <code>vs</code> Внутренние <code>vs</code> Встроенные</h2>
                      <p>Существует 3 способа, как осуществить подключение <code>CSS стилей</code> для вашего сайта: вы можете использовать глобальные стили CSS, 
                          добавив CSS правила в контейнер <kbd>&lt;head&gt;</kbd> HTML документа, вы можете добавить ссылку на внешний <kbd>.css</kbd> файл, 
                          содержащий все необходимые правила или использовать встроенный CSS для применения правил к определенному элементу.</p>
                      <p>Теперь давай разберемся - какие стили лучше использовать? Безусловно - выбирать, исключительно тебе, но ниже есть спойлер.</p>
                      <div className="alert alert-warning mt-2" role="alert">
                      <strong>Спойлер:</strong> внешние. Не благодари!
                    </div>
                      <div className="d-flex align-items-start w-100 mt-4">
                      <div className="nav flex-column nav-pills me-3 w-25" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Внешние</button>
                        <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Внутренние</button>
                        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Встроенные</button>
                      </div>
                      <div className="tab-content w-75" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                          <div className="tab-pane-inner d-flex flex-row justify-content-center">
                            <div className="row w-100">
                          <p>
                            <code class="display-6">+:</code>
                            <ul>
                                <li>Меньший размер страницы HTML , чистая структура файла.</li>
                                <li>Скорость загрузки оптимальная.</li>
                                <li>Для разных страниц может быть использован один и тот же .css файл.</li>
                            </ul>
                            <code class="display-6">-:</code>
                            <ul>
                                <li>Страница может некорректно отображаться до полной загрузки внешнего CSS.</li>
                            </ul>
                          </p>
                            </div>
                          
                          </div>
                          
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <div className="tab-pane-inner d-flex flex-row justify-content-center">
                            <div className="row w-100">
                            <p>
                            <code class="display-6">+:</code>
                            <ul>
                                <li>В глобальном CSS могут быть использованы классы и идентификаторы (ID).</li>
                                <li>Нет необходимости загружать несколько файлов. HTML и CSS могут быть в одном и том же файле.</li>
                            </ul>
                            <code class="display-6">-:</code>
                            <ul>
                                <li>Увеличенное время загрузки страницы.</li>
                                <li>Подключается только к одной странице — неэффективно, если вы хотите использовать одну и ту же CSS для нескольких страниц.</li>
                            </ul>
                          </p>
                            </div>
                          
                          </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <div className="tab-pane-inner d-flex flex-row justify-content-center">
                            <div className="row w-100">
                            <p>
                            <code class="display-6">+:</code>
                            <ul>
                                <li>Полезен для проверки и предпросмотра изменений.</li>
                                <li>Полезен для быстрых исправлений.</li>
                                <li>Меньше HTTP запросов.</li>
                            </ul>
                            <code class="display-6">-:</code>
                            <ul>
                                <li>Такой CSS долен быть применен для каждого элемента в отдельности.</li>
                            </ul>
                          </p>
                            </div>
                          
                          </div>
                        </div>
                        </div>  
                  </div>
                  <div className="alert alert-primary mt-4" role="alert">
                    Детальнее о подключении стилей читай <a href="https://www.hostinger.ru/rukovodstva/podklyucheniye-css-stiley" target="blank" className="alert-link">тут</a>.
                  </div>
                  </div>
              </section>
              <section>
                  <div className="container">
                      <h2 className="text-center mt-4">Как разделять одинаковые элементы? <strong>Class & id</strong></h2>
                      <p>Согласись - писать встроенные элементы для каждого элемента не очень-то и удобно,
                           а особенно тогда - когда таких элементов у тебя больше 1000! И тогда, когда, казалось бы, выхода нет - приходят на помощь они.
                           Рассмотрим на примере параграфов.</p>
                    <p>
                        Нужно сделать следующее: добавить параграфам разные классы, а в CSS использовать селекторы не по тегу, а по классам. 
                        <strong> Класс</strong> — это всего лишь один из атрибутов HTML-тегов, например:
                    </p>
                    <SyntaxHighLighter language="html">
                      {`
                        <p class="important">…</p>
                        <p class="help">…</p>
                      `}
                            </SyntaxHighLighter>
                     <p>
                     В CSS можно задавать стили только для элементов с определённым классом. 
                     Для этого используется селектор по классу, который пишется так <kbd>.имя-класса</kbd>, например:
                     </p>
                     <SyntaxHighLighter language="css">
                      {`
                        .important { color: red; } — выберет все теги с классом "important"
                        .help { color: green; }    — выберет все теги с классом "help"
                      `}
                            </SyntaxHighLighter>
                    <p>
                    Классы гибкие, их можно создавать много и называть понятными именами.
                     Например, можно создать класс, который отмечает раздел курса, который сейчас изучается.
                    </p>
                    <iframe height="520" width="100%" scrolling="no" title="Basic CSS: Using a Class" src="https://codepen.io/mandybee/embed/eBJwYm?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/mandybee/pen/eBJwYm">
                        Basic CSS: Using a Class</a> by Mandy Bee (<a href="https://codepen.io/mandybee">@mandybee</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                    <div className="alert alert-warning mt-2" role="alert">
                      <strong>Спойлер:</strong> существуют целые методологии по тому, как правильно формировать имена для элементов.
                      Одна из них - БЭМ-методология. Подробнее - читай: <a href="https://webref.ru/css" target="blank" className="alert-link">тут</a>.
                    </div>
                  </div>
              </section>
            <section>
                <div className="container">
                    <h2 className="text-center mt-4">CSS-селекторы</h2>
                    <ul className="list-group">
                      <li className="list-group-item" aria-current="true"><code>*</code> - любые элементы.</li>
                      <li className="list-group-item"><code>div</code> - селектор типа. Выберет все элементы с таким тегом.</li>
                      <li className="list-group-item"><code>.classname</code> - элементы с таким классом.</li>
                      <li className="list-group-item"><code>#id</code> -  элемент с данным <kbd>id</kbd>.</li>
                      <li className="list-group-item"><code>p b</code> -  селектор потомка.</li>
                      <li className="list-group-item"><code>h1+p</code> - селектор сестринского элемента. Выберет элемент, следующий в дереве.</li>
                      <li className="list-group-item"><code>h1~p</code> -  селектор обобщенных родственных элементов.</li>
                    </ul>
                    <h3 className="text-center mt-4">Примеры использования:</h3>
                    <SyntaxHighLighter language="css">
                      {`
                        /*+ no-beautify */
                        #languages li {
                          color: brown;   /* потомки #languages, подходящие под селектор  LI */
                        }
                        
                        #languages > li {
                          color: black;   /* первый уровень детей #languages подходящих под LI */
                        }
                        
                        #e-slavic { font-style: italic; }
                        
                        #e-slavic ~ li {  /* правые соседи #e-slavic с селектором LI */
                          color: red;
                        }
                        
                        #latvian {
                          font-style: italic;
                        }
                        
                        #latvian * {      /* потомки #latvian, подходяще под * (т.е. любые) */
                          font-style: normal;
                        }
                        
                        #latvian + li {  /* первый правый сосед #latvian с селектором LI */
                         color: green;
                        }
                      `}
                            </SyntaxHighLighter>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2 className="text-center mt-4">Вес CSS-селекторов</h2>
                    <p>Нет, здесь не идёт речь об их реальном весе (его нет), а также о количестве символов. 
                        Такой вес нельзя измерить весами, так как он не вещественен в обычном понимании и вообще не существует в нашем с вами мире людей. 
                        Зато он есть в виде нулей и единиц. Получается, что селектор можно взвесить, используя некую систему, о которой мы и будем говорить дальше.</p>
                    <p>Вес селектора — это условные четыре позиции <kbd>x, x, x, x</kbd>, которые заполняются нулями и единицами в соответствии с содержимым селектора.</p>
                    <iframe height="520" width="100%" scrolling="no" title="Specificity calculator" src="https://codepen.io/certainlyakey/embed/ycEAh?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/certainlyakey/pen/ycEAh">
                        Specificity calculator</a> by certainlyakey (<a href="https://codepen.io/certainlyakey">@certainlyakey</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                    <div className="alert alert-primary mt-4" role="alert">
                    Подробнее о высчитывании веса: <a href="https://canonium.com/articles/css-understanding-weight-selectors/" target="blank" className="alert-link">тут</a>.
                  </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2 className="text-center mt-4">Source Map. Что делать, если файлов много?</h2>
                    <p>Source Maps нужны для проектов, где происходит сборка нескольких файлов в один, например, компиляция файлов scss в один 
                        файл <kbd>main.min.css</kbd> или конкатенация js-файлов в один <kbd>scripts.min.js</kbd>. Карты источников нужны для того, чтобы быстро вносить правки, 
                        и не искать в каком файле задано определенное правило или функция, 
                        особенно когда для сборки используются десятки файлов или различных библиотек.</p>
                    <div className="row d-flex flex-row mt-4">
                        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                        <h2 className="text-center">Без Source Map</h2>
                        <img className="w-100" src={source} alt="" />
                        </div>
                        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                        <h2 className="text-center">C Source Map</h2>
                        <img className="w-100" src={without_source} alt="" />
                        </div>
                    </div>
                    <p className="mt-12">И по итогу, если нам нужно увеличить отступ снизу у элемента <kbd>.icon</kbd>, то нам не нужно искать по всем файлам scss где задано это правило,
                         а с помощью карты источников видим, 
                        что данное правило указано в файле <kbd>_general.scss</kbd> на 44 строке.</p>
                        <div className="alert alert-primary mt-4" role="alert">
                    На опыте про Source Map: <a href="https://akochemasov.medium.com/sourcemap-%D0%BD%D0%B0-%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%BA%D1%88%D0%B5%D0%BD%D0%B5-826f88549a19" target="blank" className="alert-link">тут</a>.
                  </div>
                </div>
            </section>
            <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Презентация</h2>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQKL-746KPlO7sJCYFLLhJ2kJsD4Vlny9122ZfkTkaG3PHVXtWh5JOzJHf8pxuq5rwVacz-UP0TYuZf/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="520" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
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


export default CSS1;