import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import tag from './imagesHTML2/tag.jpg';
import lipsum from './imagesHTML2/lipsum.png';
import formats from './imagesHTML2/formats.jpg';
import layout from './imagesHTML2/layout.gif';
import SyntaxHighLighter from 'react-syntax-highlighter';

class HTML2 extends Component {
    render() {
        return (
            <div>
              <h1>HTML теги, типы тегов, layout веб страницы</h1>
              <section className="mt-4">
                <div className="container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML2#html">HTML</Link></li>
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML2#tag">HTML тег</Link></li>
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML2#blocks">Блочные/строчные</Link></li>
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML2#basic">Базовые теги</Link></li>
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML2#tables">Таблицы</Link></li>
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML2#lorem">Lorem Ipsum</Link></li>
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML2#links">Ссылки</Link></li>
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML2#images">Изображения</Link></li>
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML2#layout">HTML basic layouts</Link></li>
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML2#homework">Домашнее задание</Link></li>
                  </ol>
                </nav>
                </div>
              </section>
              <section id="html">
                  <div className="container">
                      <h2 className="mt-4 text-center">HTML. Что за зверь?</h2>
                      <p>
                      <strong>HTML</strong> <code>(HyperText Markup Language - язык гипертекстовой разметки)</code> - не является языком программирования; 
                      это язык разметки, используемый для определения структуры веб-страниц, посещаемых пользователями. 
                      Они могут иметь сложную или простую структуру, всё зависит от замысла и желания веб-разработчика. 
                      <code>HTML</code> состоит из ряда элементов, которые вы используете для того, чтобы охватить, 
                      обернуть или разметить различные части содержимого, чтобы оно имело определённый вид или срабатывало определённым способом. 
                      Встроенные тэги могут преобразовать часть содержимого в гиперссылку, по которой можно перейти на другую веб-страницу, 
                      выделить курсивом слова и так далее. 
                      </p>
                      <div className="alert alert-dark" role="alert">
                      <strong>Примечание:</strong> Метки в HTML нечувствительны к регистру, то есть они могут быть записаны в верхнем или нижнем регистре. 
                      Лучшей практикой, однако, является запись всех тегов в нижнем регистре для обеспечения согласованности, удобочитаемости и других причин.
                    </div>
                  </div>
              </section>
              <section>
                  <div className="container">
                      <h2 className="mt-4 text-center">HTML тег</h2>
                      <div className="row d-flex flex-row justify-content-center">
                        <img className="w-50" src={tag} alt="" />
                      </div>
                      <h3 className="mt-3">Основными частями элемента являются:</h3>
                      <ul className="mt-3">
                          <li><code>Открывающий тег:</code> Он состоит из названия (обозначения) элемента (в нашем случае, p), помещённого внутри угловых скобок. 
                              Данный тег служит признаком начала элемента, с этого момента тег начинает влиять на следующее после него содержимое.</li>
                          <li><code>Закрывающий тег:</code> выглядит как и открывающий, но содержит слеш перед названием тега. Он служит признаком конца элемента. 
                              Пропуски закрывающих тегов — типичная ошибка новичков, которая может приводить к неопределённым результатам — в лучшем случае всё сработает правильно,
                               в других страница может вовсе не прорисоваться или прорисоваться не как ожидалось.</li>
                          <li><code>Аттрибут</code> и его значение</li>
                          <li><code>Контент</code></li>
                      </ul>
                      <iframe id="ytplayer" className="w-100" type="text/html" width="640" height="520"
                        src="https://www.youtube.com/embed/V1_2mV48lOk"
                        frameborder="0"/>
                  </div>
              </section>
              <section>
                  <div className="container">
                      <h2 className="mt-4 text-center">Блочные и строчные элементы</h2>
                      <div className="d-flex align-items-start w-100 mt-4">
                      <div className="nav flex-column nav-pills me-3 w-25" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Блочные</button>
                        <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Строчные</button>
                      </div>
                      <div className="tab-content w-75" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                          <div className="tab-pane-inner d-flex flex-row justify-content-center">
                            <div className="row w-100">
                          <p>
                          Элементы блочного уровня формируют видимый блок на странице — они окажутся на новой строке после любого контента, который шёл до них, 
                          и любой контент после них также окажется на новой строке. Чаще всего элементами блочного уровня бывают структурные элементы страницы, 
                          представляющие собой, например, параграфы (абзацы), списки, меню навигации, футеры, или подвалы, и т. п. 
                          Элементы блочного уровня не вкладываются в строчные элементы, но иногда могут вкладываться в другие элементы блочного уровня.
                          </p>
                            </div>
                          
                          </div>
                          
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <div className="tab-pane-inner d-flex flex-row justify-content-center">
                            <div className="row w-100">
                            <p>
                            Строчные элементы — это те, которые содержатся в элементах блочного уровня и окружают только малые части содержимого документа, не целые абзацы и группировки контента. Строчные элементы не приводят к появлению новой строки в документе: 
                            они обычно встречаются внутри абзаца текста, например, элемент &lt;a&gt; (ссылка) или акцентирующие элементы вроде &lt;em&gt; или &lt;strong&gt;.
                            </p>
                            </div>
                          
                          </div>
                        </div>
                        </div>  
                  </div>
                  <h3 className="mt-4 text-center">Базовые теги</h3>
                  <iframe height="300" width="100%" scrolling="no" title="Basic HTML Tags" src="https://codepen.io/dylanfisher/embed/rjpPxb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                    See the Pen <a href="https://codepen.io/dylanfisher/pen/rjpPxb">
                    Basic HTML Tags</a> by Dylan Fisher (<a href="https://codepen.io/dylanfisher">@dylanfisher</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                  </iframe>
                  <small>Нажми на <kbd>edit on CODEPEN</kbd> и попробуй прописать несколько своих тегов.</small>
                  <div className="alert alert-primary mt-4" role="alert">
                    Читать подробнее об аттрибутах и базовых тегах: <a href="https://developer.mozilla.org/ru/docs/Learn/HTML/Introduction_to_HTML/Getting_started" target="blank" className="alert-link">тут</a> и <a href="https://webref.ru/html" target="blank" className="alert-link">тут</a>.
                  </div>
                  </div>
              </section>
              <section>
                  <div className="container">
                      <h2 className="mt-4 text-center">Таблицы</h2>
                        <p>
                        &lt;table&gt; (от англ. table — таблица) служит контейнером для элементов, определяющих содержимое таблицы. 
                           Любая таблица состоит из строк и ячеек, которые задаются с помощью элементов <kbd>&lt;tr&gt;</kbd> и <kbd>&lt;td&gt;</kbd>.
                          Внутри <kbd>&lt;table&gt;</kbd> допустимо использовать следующие элементы: <kbd>&lt;caption&gt;</kbd>, <kbd>&lt;col&gt;</kbd>, <kbd>&lt;colgroup&gt;</kbd>, <kbd>&lt;tbody&gt;</kbd>, <kbd>&lt;td&gt;</kbd>, <kbd>&lt;tfoot&gt;</kbd>, <kbd>&lt;th&gt;</kbd>, <kbd>&lt;thead&gt;</kbd> и <kbd>&lt;tr&gt;</kbd>.
                        </p>
                        <iframe height="300" width="100%" scrolling="no" title="Round corner table" src="https://codepen.io/seiko-yamaguchi/embed/powyrYy?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                            See the Pen <a href="https://codepen.io/seiko-yamaguchi/pen/powyrYy">
                            Round corner table</a> by Seiko Yamaguchi (<a href="https://codepen.io/seiko-yamaguchi">@seiko-yamaguchi</a>)
                            on <a href="https://codepen.io">CodePen</a>.
                        </iframe>
                        <h3 className="mt-4 text-center">Основные аттрибуты:</h3>
                        <ul className="list-group">
                      <li className="list-group-item" aria-current="true"><code>colspan="х"</code> - объединить ячейки по горизонтали, где x - количество ячеек для объединения.</li>
                      <li className="list-group-item"><code>rowspan="х"</code> -  объединить ячейки по вертикали, где x - количество ячеек для объединения.</li>
                    </ul>
                        <div className="alert alert-dark mt-4" role="alert">
                        <strong>Таблицы не реагируют автоматически на тип устройства:</strong> У надлежащих контейнеров (например, <kbd>&lt;header&gt;</kbd>, <kbd>&lt;section&gt;</kbd>, <kbd>&lt;article&gt;</kbd>, или <kbd>&lt;div&gt;</kbd>) ширина по умолчанию равна 100% от их родительского элемента.
                        У таблиц же размер по умолчанию подстраивается под их содержимое, так что чтобы они одинаково хорошо работали на разных типах устройств необходимо принимать дополнительные меры.
                    </div>
                    <div className="alert alert-primary mt-4" role="alert">
                    Читать подробнее о таблицах и их использовании: <a href="https://developer.mozilla.org/ru/docs/Learn/HTML/Tables/Basics" target="blank" className="alert-link">тут</a>.
                  </div>
                  </div>
              </section>
              <section>
                  <div className="container">
                      <h2 className="mt-4 text-center">Lorem Ipsum</h2>
                      <p>
                      Разработчики используют текст <code>Lorem ipsum</code> в качестве заполнителя макета страницы.
                      После настройки шаблона весь подобный текст необходимо заменить на уникальный и соответствующий тематике сайта, иначе поисковые системы могут посчитать страницу не релевантной или дублирующей. 
                      </p>
                      <div className="alert alert-dark" role="alert">
                      <strong>Примечание:</strong> С помощью плагина <code>Emmet</code> возможно автоматически добавлять в HTML-код Lorem ipsum с помощью специальных сокращений. 
                      Например, можно вывести семь слов текста с помощью сокращения lorem7.
                    </div>
                    <div className="alert alert-dark" role="alert">
                      <strong>Примечание:</strong> В настоящее время данная заготовка, на профессиональном жаргоне — «рыба», 
                      также используется веб-разработчиками для тестирования внешнего вида HTML-шаблонов с реальным содержимым.
                    </div>
                    <div className="row d-flex flex-row justify-content-center">
                        <img className="w-75" src={lipsum} alt="" />
                    </div>
                  </div>
              </section>
              <section>
                  <div className="container">
                      <h2 className="mt-4 text-center">Ссылки</h2>
                      <p>
                      <strong>Гиперссылки</strong> — одно из самых интересных нововведений Интернета. 
                      Они были особенностью Сети с самого начала, но именно они превращают Интернет в Интернет. 
                      Они позволяют нам связывать наши документы с любым другим документом (или ресурсом), с которым мы хотим. 
                      С их помощью мы также можем связывать документы с их конкретными частями, и мы можем сделать приложения доступными 
                      на простом веб-адресе (сравните это с локальными приложениями, которые должны быть установлены, и другими такими же вещами). 
                      </p>
                      <div className="alert alert-dark" role="alert">
                      Простая ссылка создаётся путём обёртывания текста (или другого содержимого), который вы хотите превратить в ссылку, в элемент <kbd>&lt;a&gt;</kbd>, и придания этому элементу атрибута <kbd>href</kbd>. 
                    </div>
                    <SyntaxHighLighter language="html">
                      {`
                        <p> Теперь я умею создавать ссылки и вот пример:
                        <a href="https://creativeeconomy.school/ua/">Главную страница Школы Креативной Экономики</a>.
                        </p>
                      `}
                            </SyntaxHighLighter>
                            <div className="alert alert-primary mt-4" role="alert">
                    О том, как открывать ссылки в новом окне и делать ссылку загрузочной - читай: <a href="https://webref.ru/layout/html5-css3/link" target="blank" className="alert-link">тут</a>.
                  </div>
                  <div className="alert alert-primary mt-4" role="alert">
                    URL-адреса, пути, фрагменты документа: <a href="https://developer.mozilla.org/ru/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks" target="blank" className="alert-link">здесь</a>.
                  </div>
                  </div>
              </section>
              <section>
                  <div className="container">
                      <h2 className="mt-4 text-center">Изображения</h2>
                      <p>
                      <strong>HTML-элемент</strong> <kbd>&lt;img&gt;</kbd> встраивает изображение в документ. 
                      </p>
                    <SyntaxHighLighter language="html">
                      {`
                        <img className="picture"
                        src="/path-to/file.png"
                        alt="Here is short description in case of fire">
                      `}
                            </SyntaxHighLighter>
                        <p>
                        Приведённый выше пример показывает очень простое использование элемента <kbd>&lt;img&gt;</kbd>. 
                        Атрибут <code>src</code> обязателен и содержит путь к изображению, которое вы хотите встроить в документ. 
                        Атрибут <code>alt</code> содержит текстовое описание изображения, которое не обязательно, но невероятно полезно для доступности —
                         программы чтения с экрана читают это описание своим пользователям, так они знают какое изображение показано,
                          и так же оно отображается на странице, 
                        если изображение не может быть загружено по какой-либо причине.
                        </p>
                        <h3 className="mt-4 text-center">
                            Основные форматы изображений
                        </h3>
                        <div className="row d-flex flex-row justify-content-center">
                        <img className="w-50" src={formats} alt="" />
                      </div>
                      <h3 className="mt-4 text-center">Основные аттрибуты:</h3>
                        <ul className="list-group">
                      <li className="list-group-item" aria-current="true"><code>alt</code> - этим атрибутом задаётся альтернативное текстовое описание изображения.</li>
                      <li className="list-group-item"><code>src</code> - <strong>URL</strong> изображения. Этот атрибут является обязательным для элемента <kbd>&lt;img&gt;</kbd>.</li>
                      <li className="list-group-item"><code>loading</code> -  указывает на то, как браузер должен загрузить изображение.</li>
                      <li className="list-group-item"><code>width, height</code> -  внутрення ширина и высота.</li>
                    </ul>
                  <div className="alert alert-primary mt-4" role="alert">
                    Больше информации об изображениях <a href="https://developer.mozilla.org/ru/docs/Web/HTML/Element/img" target="blank" className="alert-link">здесь</a>.
                  </div>
                  </div>
              </section>
              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Базовая сетка HTML (HTML basic layouts)</h2>
                    <p></p>
                    <div className="row f-flex flex-row">
                        <div className="col-6 d-flex flex-row justify-content-center">
                        <img className="w-100" src={layout} alt="" />
                        </div>
                        <div className="col-6 d-flex flex-column justify-content-center">
                        <ul>
                        <li> <code className="w3-codespan">&lt;header&gt;</code> - Определяет заголовок для документа или раздела</li>
                        <li> <code className="w3-codespan">&lt;nav&gt;</code> - Определяет набор навигационных ссылок</li>
                        <li> <code className="w3-codespan">&lt;section&gt;</code> - Определяет раздел в документе</li>
                        <li> <code className="w3-codespan">&lt;article&gt;</code> - Определяет независимый, автономный контент</li>
                        <li> <code className="w3-codespan">&lt;aside&gt;</code> - Определяет контент помимо контента (например, боковую панель)</li>
                        <li> <code className="w3-codespan">&lt;footer&gt;</code> - Определяет нижний колонтитул для документа или раздела</li>
                        <li> <code className="w3-codespan">&lt;details&gt;</code> - Определяет дополнительные детали, которые пользователь может открывать и закрывать по запросу.</li>
                        </ul>
                        </div>
                    </div>
                    </div>
              </section>
              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Презентация</h2>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSQOqy3nB1ujXlb26fo6DSJsYyZZ6TPoX22T9cW-skYRlC30qj0huARyIwGJaH-T65Q_yNF05JRaXTF/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="520" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </div>
              </section>

              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Домашнее задание</h2>
                    <div className="bd-callout bd-callout-warning">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"><a className="btn btn-primary" href="#" role="button">1.</a> Сверстай свою первую <strong>HTML</strong> страницу</li>
                      <li className="list-group-item"><a className="btn btn-primary" href="#" role="button">2.</a> Верстай свою первую <strong>таблицу</strong> </li>
                      <li className="list-group-item"><a className="btn btn-primary" href="#" role="button">3.</a> Примени якорные ссылки в сверстанной статье </li>
                    </ul>
                    </div>
                    </div>
              </section>
            </div>
        );
    }
}


export default HTML2;