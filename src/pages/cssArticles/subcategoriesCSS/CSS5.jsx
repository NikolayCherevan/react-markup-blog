import React, { Component } from 'react';
import SyntaxHighLighter from 'react-syntax-highlighter';

class CSS5 extends Component {
    render() {
        return (
            <div>
              <h1>Позиционирование , слои, координаты, z-index, transition, transform, центрирование элемента относительно родителя</h1>
              <section className="mt-4">
                <div className="container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Position</a></li>
                    <li className="breadcrumb-item"><a href="#">Значения position + примеры использования</a></li>
                    <li className="breadcrumb-item"><a href="#">Примеры использования</a></li>
                    <li className="breadcrumb-item"><a href="#">Комментарии</a></li>
                    <li className="breadcrumb-item"><a href="#">Домашнее задание</a></li>
                  </ol>
                </nav>
                </div>
              </section> 
              <section>
                  <div className="container">
                      <h2 className="text-center mt-4">Position</h2>
                      <div className="alert alert-warning mt-2" role="alert">
                      <strong>Напоминание:</strong> Как вы помните с прошлого урока - <strong>HTML-документ</strong> состоит из большого количества элементов,
                      вложенных друг в друга. Чтобы из этих элементов и CSS построить изображение страницы, их необходимо как-то в ней расположить. 
                      По умолчанию размещение всех элементов на странице осуществляется в <strong>нормальном или базовом потоке</strong>.
                    </div>
                      <p>CSS свойство <strong>position</strong> - это одно из свойств с помощью которого можно изменить базовое поведение элементов в потоке. 
                      Другими словами, данное свойство позволяет <code>«выдернуть»</code> любой элемент
                       из потока документа и разместить его в другом месте относительно окна браузера или других элементов на веб-странице.</p>
                    <h3 className="text-center mt-4">Свойство <strong>position</strong> имеет 5 значений:</h3>
                    <ul className="list-group">
                      <li className="list-group-item" aria-current="true"><code>static</code> - значение по умолчанию. Оно означает что элемент находится в базовом потоке.</li>
                      <li className="list-group-item"><code>relative</code> - установка относительного позиционирования элементу ( проще говоря - относительно себя ).</li>
                      <li className="list-group-item"><code>absolute</code> - установка абсолютного позиционирования.</li>
                      <li className="list-group-item"><code>fixed</code> -  фиксированное позиционирование, привязывается к краям viewport ( окна браузера ).</li>
                      <li className="list-group-item"><code>sticky</code> -  элемент с "липким" позиционированием.</li>
                    </ul>
                    <h3 className="text-center mt-4">position: relative</h3>
                    <p className="mt-4">Относительно позиционированный элемент ведёт себя как элемент в потоке за исключением того, 
                    что его текущее положение можно при помощи определённых CSS свойств сместить. 
                    К этим CSS свойствам относятся <kbd>left</kbd>, <kbd>top</kbd>, <kbd>right</kbd> и <kbd>bottom</kbd>.</p>
                    <SyntaxHighLighter language="css">
                      {`
                        position: relative;
                        /* для сдвига элемента вверх на 10px */
                        top: -10px; /* или bottom: 10px; */
                        /* для сдвига элемента вниз на 10px */
                        top: 10px; /* или bottom: -10px; */  
                      `}
                    </SyntaxHighLighter>
                    <p className="mt-2">Если одновременно установить top и bottom, то будет применено значение <kbd>top</kbd>, т.к. оно является более приоритетным, чем <kbd>bottom</kbd>:</p>
                    <SyntaxHighLighter language="css">
                      {`
                        position: relative;
                        /* элемент или элементы, к которым применяется эти стили будут сдвинуты на 15px вверх, а не на 10px как указано в bottom */
                        top: -15px;
                        bottom: 10px; 
                      `}
                    </SyntaxHighLighter>
                    <h3 className="text-center mt-4">position: absolute</h3>
                    <p className="mt-4">Позиционирование выполняется относительно ближайшего позиционированного предка.</p>
                    <SyntaxHighLighter language="html">
                      {`
                        <div id="id-1" style="position: absolute">
                        <div id="id-2" style="position: relative">
                          <div id="id-3" style="position: absolute">
                            ...
                          </div>
                        </div>
                      </div> 
                      `}
                    </SyntaxHighLighter>
                    <p className="mt-2">В этом примере позиционирование элемента <kbd>#id-3</kbd> будет выполнять относительно <kbd>#id-2</kbd>, 
                    т.к. он является позиционированным и является по отношению к нему более близким предком.</p>
                    <p className="mt-2">Если данный элемент не был бы позиционированным, то позиционирование <kbd>#id-3</kbd> выполнялось бы относительно <kbd>#id-1</kbd>:</p>
                    <SyntaxHighLighter language="html">
                      {`
                        <div id="id-1" style="position: absolute">
                        <div id="id-2">
                          <div id="id-3" style="position: absolute">
                            ...
                          </div>
                        </div>
                      </div> 
                      `}
                    </SyntaxHighLighter>
                    <h3 className="text-center mt-4">position: fixed</h3>
                    <p className="mt-4">Фиксированное позиционирование похоже на абсолютное, но в отличии от него оно всегда
                    привязывается к <strong>краям окна браузера (viewport)</strong>, 
                    и остаётся в таком положении даже <strong>при скроллинге страницы.</strong></p>
                    <SyntaxHighLighter language="html">
                      {`
                        <body>
                        <div style="width: 200px; height: 2000px; border: 1px solid black; background: green;"></div>
                        <div style="width: 600px; height: 200px; position: fixed; top: 100px; left: 100px; border: 1px solid black; background:red;"></div>
                      </body>
                      `}
                    </SyntaxHighLighter>
                      <iframe className="mt-4" height="520" width="100%" scrolling="no" title="CSS position example" src="https://codepen.io/chnbohwr/embed/woJMGy?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                            See the Pen <a href="https://codepen.io/chnbohwr/pen/woJMGy">
                            CSS position example</a> by chnbohwr (<a href="https://codepen.io/chnbohwr">@chnbohwr</a>)
                            on <a href="https://codepen.io">CodePen</a>.
                        </iframe>
                        <small>Наглядный пример того, как работает позиционирование</small>
                        <iframe id="ytplayer" className="w-100 mt-4" type="text/html" width="100%" height="520"
                        src="https://www.youtube.com/embed/mpykT40_VBc"
                   frameborder="0"/>
                  </div>
              </section>
              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Z-INDEX</h2>
                    <p>Свойство z-index определяет положение элемента и нижестоящих элементов по оси z. 
                        В случае перекрытия элементов, это значение определяет порядок наложения.
                         В общем случае, элементы с большим z-index перекрывают элементы с меньшим.</p>
                    </div>
              </section>
            </div>
        );
    }
}


export default CSS5;