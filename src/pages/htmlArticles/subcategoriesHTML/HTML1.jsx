import React, { Component } from 'react';
import SyntaxHighLighter from 'react-syntax-highlighter';

class HTML1 extends Component {
    render() {
        return (
            <div>
              <h1>Этапы разработки web проекта. Верстальщик vs Frontend-developer.
                 Рендеринг страниц. Инструменты разработки. Кроссбраузерность, валидность верстки. Браузеры. 
                  Базовая HTML - структура. Дерево документа
              </h1>
              <section>
                <div className="container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Этапы разрабокти</a></li>
                    <li className="breadcrumb-item"><a href="#">Верстальщик vs Frontend-developer</a></li>
                    <li className="breadcrumb-item"><a href="#">Рендеринг страниц</a></li>
                    <li className="breadcrumb-item"><a href="#">Инструменты разработки</a></li>
                    <li className="breadcrumb-item"><a href="#">Кроссбраузерность, валидность верстки</a></li>
                    <li className="breadcrumb-item"><a href="#">Браузеры</a></li>
                    <li className="breadcrumb-item"><a href="#">Базовая HTML - структура</a></li>
                    <li className="breadcrumb-item"><a href="#">Дерево документа</a></li>
                  </ol>
                </nav>
                </div>
              </section>
              <section>
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
              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Верстальщик vs Front-End Dev</h2>
                      <iframe id="ytplayer" className="w-100" type="text/html" width="640" height="720"
                        src="https://www.youtube.com/embed/A7ilFPHbYtI"
                        frameborder="0"/>
                    </div>
              </section>
              <h2 className="mt-4 text-center">Инструменты разработки</h2>
              <section>
                    <div className="container">
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
              </div>
        );
    }
}


export default HTML1;