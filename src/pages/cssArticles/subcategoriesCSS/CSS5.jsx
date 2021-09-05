import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import zIndex from './imagesCSS5/z-index.png';
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
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS5#position">Position</Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS5#position-values">Значения position + примеры использования</Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS5#z-index">z-index</Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS5#transition">Transition</Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS5#transform">Transform</Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS5#homework">Домашнее задание</Link></li>
                  </ol>
                </nav>
                </div>
              </section> 
              <section id="position">
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
                    <h3 id="position-values" className="text-center mt-4">position: relative</h3>
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
                    <iframe height="520" width="100%" scrolling="no" title="Lesson 10. Position " src="https://codepen.io/creativeeconomy-school/embed/vYZXVZa?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                      See the Pen <a href="https://codepen.io/creativeeconomy-school/pen/vYZXVZa">
                      Lesson 10. Position </a> by Creative (<a href="https://codepen.io/creativeeconomy-school">@creativeeconomy-school</a>)
                      on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                        <small>Наглядный пример того, как работает позиционирование</small>
                        <iframe id="ytplayer" className="w-100 mt-4" type="text/html" width="100%" height="520"
                        src="https://www.youtube.com/embed/mpykT40_VBc"
                   frameborder="0"/>
                  </div>
              </section>
              <section id="z-index">
                    <div className="container">
                    <h2 className="mt-4 text-center">Z-INDEX</h2>
                    <p>Свойство <strong>z-index</strong> определяет положение элемента и нижестоящих элементов по <strong>оси z</strong>. 
                        В случае перекрытия элементов, это значение определяет порядок наложения.
                         В общем случае, элементы с большим <strong>z-index</strong> перекрывают элементы с меньшим.</p>
                         <div className="alert alert-warning mt-2" role="alert">
                      <strong>Важно:</strong> <strong>z-index</strong> работает только с позиционируемыми элементами ( обязательно свойство position ) . <strong>z-index не работает с position:static</strong>.
                    </div>
                    <div className="alert alert-warning mt-2" role="alert">
                      <strong>Важно:</strong> <strong>z-index не работает с position:static</strong>.
                    </div>
                    <p>Свойство <strong>z-index</strong> влияет как на блочные элементы, так и на строчные <kbd>(inline)</kbd>. 
                      Значением может быть положительное или отрицательное число, либо значение по умолчанию - <kbd>auto</kbd>. 
                      Значение по умолчанию означает что элемент находится на том же уровне как и его родитель.</p>
                      <SyntaxHighLighter language="css">
                      {`
                        #grey_box {
                          width: 200px;
                          height: 200px;
                          border: solid 1px #ccc;
                          background: #ddd;
                          position: relative;
                          z-index: 9999;
                        }
                         
                        #blue_box {
                          width: 200px;
                          height: 200px;
                          border: solid 1px #4a7497;
                          background: #8daac3;
                          position: relative;
                          z-index: 500;
                        }
                         
                        #gold_box {
                          width: 200px;
                          height: 200px;
                          border: solid 1px #8b6125;
                          background: #ba945d;
                          position: relative;
                          z-index: 1;
                        }  
                      `}
                    </SyntaxHighLighter>
                    <h4>Результат:</h4>
                    <div className="row d-flex flex-row justify-content-center">
                        <img className="w-50" src={zIndex} alt="" />
                      </div>
                    </div>
              </section>
              <section id="transition">
                    <div className="container">
                    <h2 className="mt-4 text-center">CSS Transition</h2>
                    <p>
                    <strong>CSS transitions</strong> предоставляют способ контролировать скорость анимации, при изменении CSS свойств.
                     Вместо того, чтобы свойство применилось сразу, вы можете сделать это действие происходящим в течение какого-то момента времени. 
                     Например, если вы смените цвет элемента с белого на чёрный, изменение произойдёт моментально, а вот с CSS transitions, 
                     изменения произойдут за временные интервалы, 
                    следующих кривой ускорения, все из которых могут быть настроены.
                    </p>
                    <p>Анимация, которая возникает при переходе из начального в конечное состояние при использовании <strong>transition</strong> - называется <strong>неявным переходом</strong>.
                      Потому как, такое состояние неявно контролируется браузером.
                    </p>
                    <h4 className="mt-2 text-center">С какими стилями отрабатывает transition?</h4>
                    <p>
                    Во-первых, анимированию поддаются все трансформации (<kbd>scale()</kbd>, <kbd>rotate()</kbd>, <kbd>skew()</kbd> и т. д.). 
                    Во-вторых, можно создавать переходы между значениями таких свойств, 
                    как <kbd>color</kbd>, <kbd>background</kbd>, <kbd>width</kbd>, <kbd>height</kbd>, <kbd>opacity</kbd>и т. д.
                    </p>
                    <div className="alert alert-primary mt-2" role="alert">
                    Полный список смотри тут: <a href="https://www.w3.org/TR/css-transitions-1/#animatable-properties" target="blank" className="alert-link">тут</a>.
                  </div> 
                    <h4 className="mt-2 text-center">Пример использования</h4>
                    <iframe height="520" width="100%" scrolling="no" title="" src="https://codepen.io/creativeeconomy-school/embed/JjJRmyr?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                      See the Pen <a href="https://codepen.io/creativeeconomy-school/pen/JjJRmyr">
                      </a> by Creative (<a href="https://codepen.io/creativeeconomy-school">@creativeeconomy-school</a>)
                      on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                    <small>+ использование <code>animation</code> бонусом</small>
                    </div>
              </section>
              <section id="transform">
                    <div className="container">
                    <h2 className="mt-4 text-center">CSS Transform</h2>
                    <p>
                    <strong>CSS transform</strong> - трансформирует элемент, в частности, позволяет его масштабировать, вращать, сдвигать, наклонять, 
                    а также комбинировать виды трансформаций, перечисляя функции трансформации через пробел.
                    </p>
                    <h4 className="text-center mt-2">Распространенные значения</h4>
                    <ul className="list-group">
                      <li className="list-group-item" aria-current="true"><code>rotateX()</code> - Поворачивает элемент на заданный угол относительно оси X.</li>
                      <li className="list-group-item"><code>scale()</code> - Масштабирует элемент по горизонтали и вертикали.</li>
                      <li className="list-group-item"><code>skew()</code> - Наклоняет элемент на заданный угол по горизонтали и вертикали.</li>
                      <li className="list-group-item"><code>translate()</code> - Сдвигает элемент на заданное значение по горизонтали и вертикали.</li>
                      <li className="list-group-item"><code>perspective()</code> - Задает перспективу.</li>
                    </ul>
                    <div className="alert alert-primary mt-2" role="alert">
                    Полный список смотри тут: <a href="https://webref.ru/css/transform" target="blank" className="alert-link">тут</a>.
                  </div> 
                    <h4 className="mt-2 text-center">Пример использования</h4>
                    <iframe height="520" width="100%" scrolling="no" title="" src="https://codepen.io/creativeeconomy-school/embed/QWgKZaw?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                      See the Pen <a href="https://codepen.io/creativeeconomy-school/pen/QWgKZaw">
                      </a> by Creative (<a href="https://codepen.io/creativeeconomy-school">@creativeeconomy-school</a>)
                      on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                    </div>
              </section>
              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Презентация</h2>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ-p4bGlTO8gdzjMuNFjfnogMDKhVqaLB8wU6qukmJ3FUHCScqwkN2ZpuVdkQAFiW76aYZkLoQL6ad_/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
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


export default CSS5;