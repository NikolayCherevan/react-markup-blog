import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SyntaxHighLighter from 'react-syntax-highlighter';

class CSS2 extends Component {
    render() {
        return (
            <div>
              <h1>Псевдоклассы, псевдоэлементы, комментарии</h1>
              <section className="mt-4">
                <div className="container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS2#pseudoclasses">Псевдоклассы</Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS2#pseudoelements">Псевдоэлементы</Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS2#examples">Примеры использования</Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS2#comments">Комментарии</Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS2#homework">Домашнее задание</Link></li>
                  </ol>
                </nav>
                </div>
              </section> 
              <section id="pseudoclasses">
                  <div className="container">
                      <h2 className="text-center mt-4">Что такое псевдокласс?</h2>
                      <p><strong>Псевдокласс</strong> в CSS — это ключевое слово, добавленное к селектору, которое определяет его особое состояние. 
                      Например, <kbd>:hover</kbd> может быть использован для изменения цвета кнопки при наведении курсора на неё.</p>
                    <p>
                    Псевдоклассы — это ключевые слова, которые начинаются с двоеточия:
                    </p>
                    <SyntaxHighLighter language="css">
                      {`
                        div:hover {
                            background-color: #F89B4D;
                          }
                      `}
                    </SyntaxHighLighter>
                    <p>
                    Псевдоклассы дают возможность стилизовать элемент на основе не только отношений в DOM-дереве,
                     но и основываясь на внешних факторах, таких как история посещений (например, <kbd>:visited</kbd>), состояние содержимого 
                     (вроде <kbd>:checked</kbd> у некоторых элементов формы) или позиции курсора мыши 
                    (например, <kbd>:hover</kbd> определяет, находится ли курсор мыши над элементом).
                    </p>
                    <p>
                        Как и с обычными классами, можно совмещать вместе в одном селекторе любое число псевдоклассов.
                    </p>
                    <h3 className="text-center mt-4">Распространенные псевдоклассы</h3>
                    <ul className="list-group">
                      <li className="list-group-item" aria-current="true"><code>:active</code> - Подходит, когда пользователь активирует (например, щёлкает мышью) элемент.</li>
                      <li className="list-group-item"><code>:checked</code> - Соответствует переключателю или флажку в выбранном состоянии.</li>
                      <li className="list-group-item"><code>:first-child</code> - Соответствует элементу, который является первым среди других дочерних элементов одного предка.</li>
                      <li className="list-group-item"><code>:hover</code> -  Соответствует элементу, на который наведён курсор мыши.</li>
                      <li className="list-group-item"><code>:nth-child</code> -  Соответствует элементам из списка дочерних элементов одного предка, которые подобраны по формуле вида an+b (например, 2n + 1 будет соответствовать элементам 1, 3, 5, 7 и т. д. Все нечётные числа.)</li>
                      <li className="list-group-item"><code>:required</code> - Соответствует обязательным элементам формы.</li>
                      <li className="list-group-item"><code>:visited</code> -  Соответствует посещённым ссылкам.</li>
                    </ul>
                    <iframe id="ytplayer" className="w-100 mt-4" type="text/html" width="640" height="520"
                        src="https://www.youtube.com/embed/cbbER36qRIE"
                        frameborder="0"/>
                    <h3 className="mt-4">Пример:</h3>
                    <iframe height="520" width="100%" scrolling="no" title="Lesson 5. Pseudoclasses" src="https://codepen.io/creativeeconomy-school/embed/xxrEybg?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                      See the Pen <a href="https://codepen.io/creativeeconomy-school/pen/xxrEybg">
                      Lesson 5. Pseudoclasses</a> by Creative (<a href="https://codepen.io/creativeeconomy-school">@creativeeconomy-school</a>)
                      on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                    <div className="alert alert-primary mt-4" role="alert">
                    Полный список псевдоклассов: <a href="https://developer.mozilla.org/ru/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements" target="blank" className="alert-link">тут</a>.
                  </div>
                  </div>
              </section>
              <section id="pseudoelements">
                  <div className="container">
                      <h2 className="text-center mt-4">Что такое псевдоэлемент?</h2>
                      <p><strong>Псевдокласс</strong> в CSS — это ключевое слово, добавляемое к селектору, которое позволяет стилизовать определённую
                       часть выбранного элемента. 
                      </p>
                    <p>
                    Например, псевдоэлемент <kbd>::first-line</kbd> может быть использован для изменения шрифта первой строки абзаца.
                    </p>
                    <SyntaxHighLighter language="css">
                      {`
                        /* Первая строка каждого элемента <p>. */
                        p::first-line {
                          color: blue;
                          text-transform: uppercase;
                        }
                      `}
                    </SyntaxHighLighter>
                    <p>
                    Как правило, следует использовать двойное двоеточие <kbd>(::)</kbd> вместо одинарного <kbd>(:)</kbd>. 
                    В этом состоит различие между псевдоклассами и псевдоэлементами. Однако, так как это различие не присутствовало
                     в старых версиях спецификации W3C, 
                    большинство браузеров поддерживают оба синтаксиса для псевдоэлементов.
                    </p>
                    <div className="alert alert-dark" role="alert">
                      <strong>Примечание:</strong> В отличие от <code>псевдоэлементов</code>, псевдоклассы могут быть использованы для стилизации элемента на основе его состояния.
                    </div>
                    <h3 className="text-center mt-4">Распространенные псевдоэлементы</h3>
                    <ul className="list-group">
                      <li className="list-group-item" aria-current="true"><code>::after</code> - Соответствует элементу, который допускает стилизацию и появляется после текущего содержимого порождающего элемента.</li>
                      <li className="list-group-item"><code>::before</code> - Соответствует элементу, который допускает стилизацию и появляется перед текущим содержимым порождающего элемента.</li>
                      <li className="list-group-item"><code>::first-line</code> - Соответствует первой строке содержимого порождающего элемента.</li>
                    </ul>
                    <iframe id="ytplayer" className="w-100 mt-4" type="text/html" width="640" height="520"
                        src="https://www.youtube.com/embed/gM_9k1eWiXA"
                        frameborder="0"/>
                    <h3 className="mt-4">Пример:</h3>
                    <iframe height="520" width="100%" scrolling="no" title="Lesson 5. Pseudoelements" src="https://codepen.io/creativeeconomy-school/embed/GREjYgG?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                      See the Pen <a href="https://codepen.io/creativeeconomy-school/pen/GREjYgG">
                      Lesson 5. Pseudoelements</a> by Creative (<a href="https://codepen.io/creativeeconomy-school">@creativeeconomy-school</a>)
                      on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                    <div className="alert alert-primary mt-4" role="alert">
                    Полный список псевдоэлементов: <a href="https://developer.mozilla.org/ru/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements" target="blank" className="alert-link">тут</a>.
                  </div>
                  </div>
              </section>
              <section id="examples">
                    <div className="container">
                    <h2 className="mt-4 text-center">Примеры использования</h2>
                    <iframe height="520" width="100%" scrolling="no" title="" src="https://codepen.io/creativeeconomy-school/embed/yLXaRNL?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                      See the Pen <a href="https://codepen.io/creativeeconomy-school/pen/yLXaRNL">
                      </a> by Creative (<a href="https://codepen.io/creativeeconomy-school">@creativeeconomy-school</a>)
                      on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                    <small>Распространенный пример <kbd>:hover</kbd> + <kbd>::after, ::before</kbd> вместе при реализации хедера</small>
                    <iframe height="520" width="100%" scrolling="no" title="" src="https://codepen.io/creativeeconomy-school/embed/dyRpgoZ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/creativeeconomy-school/pen/dyRpgoZ">
                        </a> by Creative (<a href="https://codepen.io/creativeeconomy-school">@creativeeconomy-school</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                    <small>Пример совместного использования <code>псевдоклассов</code> и <code>псевдоэлементов</code> для реализации формы.</small>
                    </div>
              </section>
              <section id="comments">
                    <div className="container">
                    <h2 className="mt-4 text-center">Комментарии</h2>
                    <p>Текст внутри комментария не отображается браузером на странице. Комментарии обычно используются в следующих случаях:</p>
                    <ul>
                        <li>Для комментирования кода. Всегда полезно оставить подсказку.</li>
                        <li>Для временного отключения кода. Удалять код неудобно, так как его надо будет восстанавливать, а закомментировать и потом раскомментировать — самое лучшее решение.</li>
                    </ul>
                    <div className="alert alert-dark" role="alert">
                      <strong>Примечание:</strong> Комментарии можно использовать в любом месте страницы, кроме тега <kbd>&lt;title&gt;</kbd> — внутри него они не работают. 
                    </div>
                    <div className="row f-flex flex-row mt-4">
                        <div className="col-6">
                        <h3 className="text-center">HTML:</h3>
                            <SyntaxHighLighter language="html">
                      {`
                        <div id="section-1">
                        <h1>Комментарии для пояснений</h1>
                        <!--<p>Бывает, что в HTML-коде есть сложные участки, назначение которых не совсем понятно.</p>-->
                        <!--<p>В этом случае можно использовать комментарии, чтобы пояснить другому разработчику некоторые тонкости.</p>-->
                      </div>
                      `}
                    </SyntaxHighLighter>
                        </div>
                        <div className="col-6">
                            <h3 className="text-center">CSS:</h3>
                            <SyntaxHighLighter language="css">
                      {`
                        // this line comment will not compile into a CSS comment
                        .thing {
                         /* but this block comment will */
                         color: #FFBB00;
                        }
                      `}
                    </SyntaxHighLighter>
                        </div>
                    </div>
                    <div className="alert alert-dark" role="alert">
                      <strong>Примечание:</strong> Чтобы быстро закомментировать или раскомментировать строку кода в <strong>HTML</strong> или <strong>CSS</strong> редакторе, можете использовать сочетание клавиш <kbd>ctrl + /</kbd> или <kbd>cmd + /</kbd>. 
                    </div>
                    </div>
              </section>
              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Презентация</h2>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSZyWRZMwpYtwZPziv8y_uFXZbW7LR92n-3U5KWbNfLaGELbTXeGbkpF-cRt31QJP11Pmw2IsfWyBj2/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="520" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </div>
              </section>

              <section id="homework">
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


export default CSS2;