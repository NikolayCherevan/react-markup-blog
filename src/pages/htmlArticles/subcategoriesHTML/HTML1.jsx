import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import domImage from './imagesHTML1/dom2.png';
import SyntaxHighLighter from 'react-syntax-highlighter';

class HTML1 extends Component {
    render() {
        return (
            <div>
              <h1>Этапы разработки web проекта. Верстальщик vs Frontend-developer.
                 Рендеринг страниц. Инструменты разработки. Кроссбраузерность, валидность верстки. Браузеры. 
                  Базовая HTML - структура. Дерево документа
              </h1>
              <section className="mt-4">
                <div className="container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML1#steps">Этапы разрабокти</Link></li>
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML1#front">Верстальщик vs Frontend-developer</Link></li>
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML1#development">Инструменты разработки</Link></li>
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML1#cross">Кроссбраузерность, валидность верстки</Link></li>
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML1#browsers">Браузеры</Link></li>
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML1#basic-html">Базовая HTML - структура</Link></li>
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML1#dom">Дерево документа</Link></li>
                    <li className="breadcrumb-item"><Link to="/htmlMain/HTML1#homeworks">Домашнее задание</Link></li>
                  </ol>
                </nav>
                </div>
              </section>
              <section id="steps">
                <div className="container">
                <h2 className="mt-4 text-center">Жизненный цикл разработки IT-продукта</h2>
                <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Исследование и анализ
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      На этом этапе важно визуализировать, для каких людей ваш сайт будет обслуживать. Принимая во внимание их возраст, пол, предпочтения и потребности, ставьте цели и создайте документы для сбора требований.
                      Если этот шаг игнорируется, все остальные этапы веб-разработки становятся неактуальными и не могут дать желаемых результатов. 
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Планирование
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Этап планирования включает разработку стратегии всех аспектов веб-сайта, включая дизайн, технологии, контент и маркетинг. На основе информации, собранной и проанализированной на последнем этапе, принимаются обоснованные решения о структуре и функциях веб-сайта. 
                    На этапе планирования формируется специальная команда, каждый член которой выполняет определенную роль и получает четкие задания.
                    Выбор структуры контента, каркаса (схем и эскизов), выбора технологического стека и методологии разработки программного обеспечения - важные решения, которые необходимо принять перед созданием веб-сайта.
                    Стек технологий - это набор языков программирования, фреймворков и программного обеспечения, которые используются для создания любого веб-приложения.
                    Создание карты сайта , оценка сроков , определение результатов и распределение ресурсов также являются важными частями фазы планирования. Наконец, вы должны определиться с брендингом своего веб-сайта, прежде чем переходить к этапу проектирования. 
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Дизайн
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Этап веб-дизайна включает в себя разработку макета веб-сайта и вывод на первый план креативных дизайнеров UI-UX.
                      Макет включает в себя разработку грубого наброска, который может быть графическим, чтобы получить представление о дизайне веб-сайта. Цель макета - представить информационную структуру, позволяющую визуально просматривать контент и основные функции для ваших клиентов. 
                      Каркас, разработанный на последнем этапе, преобразуется в кнопки, вкладки, меню, информационные панели, цветовые темы, типографику и графику для создания базового макета веб-сайта. 
                      Принимая во внимание исследования аудитории, создайте интерактивный веб-сайт , соответствующий их предпочтениям и требованиям. Убедитесь, что ваш веб-сайт или приложение не стали обыденными. Включите графику, цвета и другие материалы, чтобы привлечь пользователей, не отклоняясь от фирменного стиля и цели вашего веб-сайта. 
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Контент
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      В конце концов, контент - это король. Если вы не можете общаться со своими покупателями и читателями, никакой модный дизайн вам не поможет.
                      Создание канала связи через пользовательский интерфейс - основная цель этапа создания контента. 
                      Написание контента подразумевает предоставление актуальной информации о вашей компании в понятной и привлекательной форме. Добавление призывов к действию, креативных заголовков, форматирования, редактирования строк, написания и обновления текстов происходит на протяжении всего жизненного цикла веб-разработки. 
                      На этом этапе разрабатывается брендинг и маркетинг вашего сайта или веб-приложения, а также вы можете определять цели своего веб-сайта посредством написания контента. Контент - это единственный способ взаимодействовать с конечными пользователями и превращать их в клиентов, поэтому обязательно уделяйте должное внимание и сосредоточьтесь на проблемах пользователей и на том, какие решения вы можете предложить.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Разработка
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Front-End и Back-end разработка
                  </div>
                </div>
              </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      Тестирование
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      После разработки веб-сайта проводится ряд тщательных тестов для устранения любых ошибок в системе. Группа обеспечения качества тщательно выполняет повторяющиеся методы тестирования, такие как модульное тестирование, стресс-тестирование и нагрузочное тестирование , проверяя функциональность, удобство использования, совместимость и производительность веб-приложения.  
                      Согласованность проекта важна для хорошо функционирующего сайта, обеспечивающего беспроблемный пользовательский интерфейс. Также важно проверить работу всех функций на всех устройствах и платформах. 
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                      Поддержка
                    </button>
                  </h2>
                  <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Как только вы получите одобрение от команды QA, веб-сайт или приложение, наконец, готовы к развертыванию. Используя протокол передачи файлов, приложение размещается на веб-серверах и доступно для просмотра. 
                      Но работа на этом не закончена. Постоянная обратная связь от взаимодействия с пользователем позволяет узнать масштабы улучшения. Соответственно, жизненный цикл разработки веб-приложения выполняется для внесения необходимых изменений.
                      Помимо этого, регулярное обслуживание и обновления абсолютно необходимы для поддержания безупречной работы сайта и привлечения новых пользователей. 
                    </div>
                  </div>
                </div>
              </div>
                </div>
              </section>
              <section id="front">
                    <div className="container">
                    <h2 className="mt-4 text-center">Верстальщик vs Front-End Dev</h2>
                      <iframe id="ytplayer" className="w-100" type="text/html" width="640" height="720"
                        src="https://www.youtube.com/embed/A7ilFPHbYtI"
                        frameborder="0"/>
                    </div>
              </section>
              <section id="development">
                    <div className="container">
                    <h2 className="mt-4 text-center">Инструменты разработки</h2>
                    <ul className="list-group">
                      <li className="list-group-item" aria-current="true">VS Code/Atom/Sublime Text 3/IntelliJ IDEA</li>
                      <li className="list-group-item">Google Chrome + DevTools</li>
                      <li className="list-group-item">Terminal</li>
                      <li className="list-group-item">Git ( GitHub, GitLab, Atlassian )</li>
                      <li className="list-group-item">Figma/Photoshop/Avocode/Gimp</li>
                      <li className="list-group-item">MDN/StackOverflow/Dash</li>
                      <li className="list-group-item">OpenServer/MAMP</li>
                    </ul>
                    </div>
              </section>
              <section id="cross">
                    <div className="container">
                      <h2 className="mt-4 text-center">Хорошая верстка. Такое бывает?</h2>
                      <p className="mt-4">
                      Рассмотрим основные показатели качественной верстки, и то, как влияет на них валидность кода.
                      </p> 
                    <div class="d-flex align-items-start w-100 mt-4">
                      <div class="nav flex-column nav-pills me-3 w-25" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Кроссбраузерность</button>
                        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Скорость загрузки</button>
                        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Микроразметка</button>
                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Валидность</button>
                      </div>
                      <div class="tab-content w-75" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                          <div className="tab-pane-inner d-flex flex-row justify-content-center">
                            <div className="row w-100">
                          <p>
                            <code>Кроссбраузерность</code> — это одинаковое отображение и работа сайта в различных браузерах. Если не задуматься над этим вопросом на этапе верстки, то, создав сайт, вы увидите, что в разных браузерах он отображается по-разному и не везде корректно.
                          </p> 
                          <p>
                          <strong>Откуда возникла такая проблема?</strong> Дело в том, что браузеры используют разные движки. Браузерный движок занимается загрузкой, обработкой, отображением и расчетами данных. И хоть сегодня существует большое количество различных браузеров, если мы их разложим по используемым движкам,
                          то увидим, что этих движков не так и много, так как создание своего движка является очень трудоемкой задачей
                          </p>
                            </div>
                          
                          </div>
                          
                        </div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <div className="tab-pane-inner d-flex flex-row justify-content-center">
                            <div className="row w-100">
                            <p>
                            Правильное отображение всех элементов сайта в соответствии с макетом — не залог того, что валидация сайта полностью выполнена.
                             Ошибки в коде страниц как правило уменьшают <code>скорость их загрузки</code>, даже если незаметны.
                             Это влияет на первое впечатление посетителя о сайте и увеличивает показатель отказов.
                            </p>
                            <p>
                            Поведенческие факторы, в свою очередь, являются сигналом для поисковых систем. 
                            Также скорость загрузки посадочной страницы говорит о ее качестве и влияет на результат аукционов в контекстно-медийной сети.
                            </p>
                            </div>
                          
                          </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <div className="tab-pane-inner d-flex flex-row justify-content-center">
                            <div className="row w-100">
                            <p>
                            Проверка верстки на валидность не является необходимым условием для индексации сайта роботом и не имеет прямой связи с позициями веб-ресурса в поисковой выдаче.
                             Однако ошибки в коде могут отрицательно сказаться на сканировании <code>микроразметки</code>.
                            </p>
                            <p>
                            Некорректная работа элементов страницы может блокировать часть кода, в том числе и важную для <code>SEO</code> информацию: метатеги, ссылки, структурированные данные. 
                            Работа над ошибками микроразметки поможет роботу автоматически извлекать метаданные сайта.
                            </p>
                            </div>
                          
                          </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                          <div className="tab-pane-inner d-flex flex-row justify-content-center">
                            <div className="row w-100">
                            <p>
                            Страница сайта состоит из текста и графики. Задача верстки в том, чтобы привести все элементы страницы к единой структуре в формате <code>html</code> и обеспечить корректное отображение для всех пользователей. 
                            Структурированный и чистый код без ошибок — 
                            знак качества сайта, необходимая база для дальнейшего его продвижения.
                            </p>
                            <p>
                            <strong>Валидность верстки</strong> — это соответствие html-кода сайта утвержденным критериям. 
                            Стандарты валидности были разработаны <code>The World Wide Web Consortium (W3C)</code>. У организации есть онлайн-сервис автоматической проверки кода сайта.
                            </p>
                            <p>
                            Протестировать верстку и выявить ее ошибки также могут специальные программы — <code>валидаторы кода</code>.
                            </p>
                            </div>
                          
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              </section>
              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Как проверить валидность своего кода?</h2>
                    <ul className="list-group">
                      <li className="list-group-item" aria-current="true">Офицальный валидатор W3C</li>
                      <li className="list-group-item">WDG HTML Validator</li>
                      <li className="list-group-item">XML Validator</li>
                      <li className="list-group-item">XML Schema Validator</li>
                    </ul>
                    </div>
              </section>
              <section id="basic-html">
                    <div className="container">
                    <h2 className="mt-4 text-center">HTML: Базовая структура</h2>
                    <p>
                    Любой <strong>HTML-документ</strong> можно разбить на несколько основных составляющих:
                      <ul className="mt-3">
                        <li>Блок <code>head</code>, содержащий мета-информацию о нашем сайте. 
                          Данные из этого блока не отображаются непосредственно на странице, а служат для её описания, подключения стилей и скриптов.</li>
                        <li>
                            Блок <code>body</code> является основным местом, где строится HTML-разметка. Данные в этом блоке будут обработаны и выведены в браузер.
                        </li>
                      </ul>
                      Простейшая разметка в <code>HTML5</code> выглядит следующим образом:
                    </p>
                    <SyntaxHighLighter language="html">
                      {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello {{ dearUser }}!</h1>
    <p>We are glad to see you here.</p>
</body>
</html>`}
                            </SyntaxHighLighter>
                            <div class="alert alert-primary mt-4" role="alert">
                              Читать подробнее о каждой составляющей <a href="https://habr.com/ru/company/macloud/blog/555082/" target="blank" class="alert-link">тут</a>.
                            </div>
                    </div>
              </section>
              <section id="dom">
                    <div className="container">
                    <h2 className="mt-4 text-center">DOM-дерево <code>( дерево документа )</code></h2>
                    <p>
                      Основой HTML-документа являются теги.
                      В соответствии с объектной моделью документа <strong>(«Document Object Model», коротко DOM)</strong>, каждый HTML-тег является объектом.
                      Вложенные теги являются «детьми» родительского элемента. 
                      Текст, который находится внутри тега, также является объектом.
                      Все эти объекты доступны при помощи <strong>JavaScript</strong>, мы можем использовать их для изменения страницы.  
                    </p>
                    <div className="row d-flex flex-row justify-content-center">
                    <img className="w-50" src={domImage} alt="" />
                      </div>
                      <div class="alert alert-primary mt-4" role="alert">
                              Читать подробнее о DOM: <a href="https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model/Introduction" target="blank" class="alert-link">тут</a>.
                            </div> 
                    </div>
              </section>

              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Презентация</h2>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS7QMHn4TWPhAX1O8q1Uxmr0YtLNMTe-qDit7FsbkrqRris4Wtc5OaIw5vHnIJJakzT9kABYJ9ApGrd/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </div>
              </section>

              <section id="homework">
                    <div className="container">
                    <h2 className="mt-4 text-center">Домашнее задание</h2>
                    <div class="bd-callout bd-callout-warning">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"><a class="btn btn-primary" href="#" role="button">1.</a> Выучить базовую структуру <strong>HTML</strong></li>
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


export default HTML1;