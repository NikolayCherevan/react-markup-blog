import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SyntaxHighLighter from 'react-syntax-highlighter';

class CSS3 extends Component {
    render() {
        return (
            <div>
              <h1>Свойства для форматирования текста, background свойства, градиент, тень, прозрачность, цвета. Определение цвета, шрифта, прозрачности и тени в Photoshop</h1>
              <section className="mt-4">
                <div className="container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS3#format">Форматирование текста</Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS3#background">Background</Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS3#colors">Цвета</Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS3#photoshop">Photoshop</Link></li>
                    <li className="breadcrumb-item"><Link to="/cssMain/CSS3#homework">Домашнее задание</Link></li>
                  </ol>
                </nav>
                </div>
              </section>
              <section id="format">
                  <div className="container">
                      <h2 className="mt-4 text-center">Форматирование текста. Это как?</h2>
                      <p>
                      <strong>Форматирование текста</strong> - средства его изменения, такие как выбор начертания шрифта 
                      и использование эффектов, позволяющих менять вид текста.
                      </p>
                      <div className="alert alert-dark" role="alert">
                      <strong>Примечание:</strong> Грамотно отформатированный текст дает понять поисковым системам,
                       какие слова несут важную смысловую нагрузку, 
                      по каким из них предпочтительно ранжировать веб-страницу в поисковой выдаче.
                    </div>
                    <h3 className="text-center mt-4">Основные теги для форматирования текста</h3>
                    <ul className="list-group">
                      <li className="list-group-item" aria-current="true"><code>strong</code> - важный фрагмент текста, жирный.</li>
                      <li className="list-group-item"><code>code</code> - программный код.</li>
                      <li className="list-group-item"><code>h1-h6</code> - заголовки.</li>
                      <li className="list-group-item"><code>kbd</code> -  клавиатурный ввод.</li>
                      <li className="list-group-item"><code>small</code> - текст меньшего размера.</li>
                    </ul>
                    <SyntaxHighLighter language="html">
                      {`
                        <strong>Важный фрагмент текста</strong>

                        <! -- Тег <strong> используется для выделения важных участков текста. 
                        Браузеры обычно отображают текст внутри тега <strong> жирным шрифтом.
                        <strong> - тег логического выделения. Используя его, вы указываете на важность текста в выделенной области.
                        --> 
                      `}
                    </SyntaxHighLighter>
                    <div className="alert alert-primary mt-4" role="alert">
                    Все HTML-теги для форматирования с описанием тут: <a href="https://html5book.ru/html-text/" target="blank" className="alert-link">тут</a>.
                  </div>
                  </div>
                  
              </section>
              <section id="background">
                  <div className="container">
                      <h2 className="mt-4 text-center">Всемогущий background</h2>
                      <p>
                      <strong>CSS-свойство background</strong> - устанавливает сразу все свойства стиля фона, такие как цвет, 
                      изображение, источник и размер, или метод повтора.
                      </p>
                    <h3 className="text-center mt-4">Пример использования:</h3>
                    <SyntaxHighLighter language="css">
                      {`
                        /* Использование свойства <background-color> */
                        background: green;
                        
                        /* Использование свойств <bg-image> и <repeat-style> */
                        background: url("test.jpg") repeat-y;
                        
                        /* Использование <box> и <background-color> */
                        background: border-box red;
                        
                        /* Одно изображение, центрированное и масштабированное */
                        background: no-repeat center/80% url("../img/image.png");
                      `}
                    </SyntaxHighLighter>
                    <iframe id="ytplayer" className="w-100 mt-4" type="text/html" width="640" height="520"
                        src="https://www.youtube.com/embed/8sHgyURhAkM"
                        frameborder="0"/>
                        <small>Максимально развернутое объяснение</small>
                        <iframe className="mt-4" height="520" width="100%" scrolling="no" title="background-Hero-div" src="https://codepen.io/Numras/embed/LYyvNMY?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                            See the Pen <a href="https://codepen.io/Numras/pen/LYyvNMY">
                            background-Hero-div</a> by Namras (<a href="https://codepen.io/Numras">@Numras</a>)
                            on <a href="https://codepen.io">CodePen</a>.
                        </iframe>
                        <small>Пример работы с background изображением</small>
                  </div>
                  
              </section>
              <section id="colors">
                  <div className="container">
                      <h2 className="mt-4 text-center">Цвета</h2>
                      <p>
                      Использование цвета - одна из фундаментальных форм человеческого восприятия, так дети экспериментируют с
                           цветом ещё до того, как начинают осознанно рисовать. Возможно, именно поэтому цвет - одна из первых вещей, с
                            которой люди хотят экспериментировать, изучая разработку веб-сайтов. 
                          С помощью <strong>CSS</strong>, существует множество способов присвоить цвет <strong>HTML элементам</strong>, чтобы придать им желаемый вид
                      </p>
                      <div className="alert alert-dark" role="alert">
                      <strong>Примечание:</strong> На уровне элементов <strong>HTML</strong>, всему можно присвоить цвет. С точки зрения отдельных составляющих элементов, 
                      таких как текст, границы и т.д., существует ряд свойств CSS, 
                      с помощью которых можно присвоить цвет. 
                    </div>
                    <h3 className="text-center mt-4">Как задать цвет?</h3>
                    <ul className="list-group">
                      <li className="list-group-item" aria-current="true"><code>Ключевые слова</code> - <kbd>red</kbd>, <kbd>black</kbd> и т.д.</li>
                      <li className="list-group-item"><code>RGB значения</code> - <kbd>rgb(100%, 0, 0, 50%)</kbd> - пример с прозрачностью</li>
                      <li className="list-group-item"><code>Шестнадцатеричная запись в виде строки</code> - <kbd>"#rrggbb"</kbd>, <kbd>"#rrggbbaa"</kbd> - значения с прозрачностью.</li>
                    </ul>
                        
                        <iframe className="mt-4" height="520" width="100%" scrolling="no" title="All Named CSS Colors" src="https://codepen.io/dudleystorey/embed/XKVRoJ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                            See the Pen <a href="https://codepen.io/dudleystorey/pen/XKVRoJ">
                            All Named CSS Colors</a> by Dudley Storey (<a href="https://codepen.io/dudleystorey">@dudleystorey</a>)
                            on <a href="https://codepen.io">CodePen</a>.
                        </iframe>
                        <small>Все цвета и их задание</small>
                  </div>
                  
              </section>
              <section id="photoshop">
                  <div className="container">
                      <h2 className="mt-4 text-center">Photoshop</h2>
                      <p>
                      Знание, как работать с Photoshop, хотя бы, на базовом уровне - обязательное знание для верстальщика!
                      </p>
                      <div className="alert alert-primary mt-4" role="alert">
                    Подробно с картинками о том, как взаимодействовать с Photoshop <a href="https://tpverstak.ru/photoshop-dlya-verstaka/" target="blank" className="alert-link">тут</a>.
                  </div>
                  <iframe id="ytplayer" className="w-100 mt-4" type="text/html" width="640" height="520"
                        src="https://www.youtube.com/embed/ow2XKBYtddY"
                        frameborder="0"/>
                        <small>Наглядный пример</small>
                  </div>
                  
              </section>
              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Презентация</h2>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSl38tB9ucqrJCF6MCgGjHifIdXAR_2ZVHPbld02Kg_xlupdB_eTRsHs7SJALPhu7xHkJMLX4fkfblv/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="520" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
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


export default CSS3;