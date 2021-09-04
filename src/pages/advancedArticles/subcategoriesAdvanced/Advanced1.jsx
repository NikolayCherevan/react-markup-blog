import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SyntaxHighLighter from 'react-syntax-highlighter';

class Advanced1 extends Component {
    render() {
        return (
            <div>
                <h1>Терминал. GIT, github, инициализация репозитория локально, загрузка проекта на гит. Встроенные стили браузера. CSS reset</h1>
                <section className="mt-4">
                <div className="container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/advancedMain/Advanced1#git">GIT</Link></li>
                    <li className="breadcrumb-item"><Link to="/advancedMain/Advanced1#terminal">Терминал</Link></li>
                    <li className="breadcrumb-item"><Link to="/advancedMain/Advanced1#workflow">Работа с GIT / Основные команды</Link></li>
                    <li className="breadcrumb-item"><Link to="/advancedMain/Advanced1#github-pages">GitHub Pages</Link></li>
                    <li className="breadcrumb-item"><Link to="/advancedMain/Advanced1#styles">Встроенные стили браузера</Link></li>
                    <li className="breadcrumb-item"><Link to="/advancedMain/Advanced1#css-reset">CSS Reset / CSS Normalize</Link></li>
                    <li className="breadcrumb-item"><Link to="/advancedMain/Advanced1#homework">Домашнее задание</Link></li>
                  </ol>
                </nav>
                </div>
              </section> 
              <section id="git">
                  <div className="container">
                      <h2 className="text-center mt-4">GIT</h2>
                      <p><strong>Git</strong> — система управления версиями с распределенной архитектурой.
                       В отличие от некогда популярных систем вроде <code>CVS</code> и <code>Subversion (SVN)</code>, где полная история версий проекта доступна лишь в одном месте, в 
                       Git каждая рабочая копия кода сама по себе является репозиторием.
                       Это позволяет всем разработчикам хранить историю изменений в полном объеме.</p>
                    <p>
                    Разработка в Git ориентирована на обеспечение высокой производительности, безопасности и гибкости распределенной системы.
                    </p>
                    <div className="alert alert-dark" role="alert">
                      <strong>Примечание:</strong> Гибкость — одна из основных характеристик Git. Она проявляется в поддержке различных нелинейных циклов разработки, 
                      эффективности использования с малыми и крупными проектами, а также совместимости со многими системами и протоколами.
                    </div>
                    <div className="alert alert-primary mt-4" role="alert">
                    О GIT простым языком: <a href="https://git-scm.com/book/ru/v2" target="blank" className="alert-link">тут</a>.
                  </div>
                  </div>
              </section>
              <section id="terminal">
                  <div className="container">
                      <h2 className="text-center mt-4">Терминал</h2>
                      <p><strong>Интерфейс командной строки</strong> <code>(Command line interface или CLI)</code> - это один из первых интерфейсов взаимодействия с пользоватлем. Но до сих пор очень даже актуальный и востребованный.</p>
                      <p><strong>CLI</strong> - это текстовый способ ввода и вывода информации. То есть вы печатаете команду и видите текстовый результат её работы.</p>
                      <div className="alert alert-dark" role="alert">
                      <strong>Примечание:</strong> В операционных системах Linux подобное взаимодействие обеспечивается специальным программным продуктом - оболочкой <strong>( shell )</strong>.
                      Наиболее распространенной из них, является оболочка проекта <strong>GNU bash ( Bourne Again SHell )</strong>.
                      </div>
                      <h3 className="text-center mt-4">Распространенные команды в терминале</h3>
                    <ul className="list-group">
                    <li className="list-group-item" aria-current="true"><code>sudo</code> - права суперюзера.</li>
                      <li className="list-group-item"><code>ls</code> - содержимое папки.</li>
                      <li className="list-group-item"><code>pwd</code> - путь к текущей папке.</li>
                      <li className="list-group-item"><code>cd</code> - change directory - возможность "шагать" по папкам.</li>
                      <li className="list-group-item"><code>mkdir</code> -  создание папки в консоли.</li>
                      <li className="list-group-item"><code>rmdir</code> -  удаление папки.</li>
                      <li className="list-group-item"><code>touch</code> - создание файла.</li>
                      <li className="list-group-item"><code>~</code> -  означает что вы находитесь в вашей домашней директории.</li>
                    </ul>
                    <h3 className="text-center mt-4">Пример использования команд:</h3>
                    <p>Командами ниже - мы создадим папку <kbd>"hello"</kbd>, перейдем вовнутрь, создадим файл <kbd>"hello.html"</kbd> и откроем его с помощью <kbd>VS Code</kbd> . </p>
                           <SyntaxHighLighter language="bash">
                      {`
                        mkdir hello
                        cd hello
                        touch hello.html
                        code hello.html
                      `}
                    </SyntaxHighLighter>  
                    <div className="alert alert-primary mt-4" role="alert">
                    Подробнее о консольных командах и их использовании: <a href="https://white55.ru/console.html" target="blank" className="alert-link">тут</a>.
                  </div> 
                    <div className="alert alert-dark mt-4" role="alert">
                      <strong>Примечание:</strong> <strong>Nano</strong> — текстовый редактор для консоли. Используется в Unix-подобных ОС, распространяется свободно.
                    </div>
                    <div className="alert alert-dark mt-4" role="alert">
                      <strong>Примечание:</strong> Для установки программ через консоль в Ubuntu, Debora используй конструкцию: <strong>apt-get install nano</strong> 
                    </div>
                    <div className="alert alert-primary mt-4" role="alert">
                    Подробнее о текстовом редакторе: <a href="https://vps.ua/wiki/text-editor-nano/" target="blank" className="alert-link">тут</a>.
                  </div> 
                  <iframe id="ytplayer" className="w-100 mt-4" type="text/html" width="100%" height="520"
                        src="https://www.youtube.com/embed/PMopSb1fxuw"
                   frameborder="0"/>
                  </div>
              </section>
              <section id="workflow">
                  <div className="container">
                      <h2 className="text-center mt-4">Начать работу с GIT</h2>
                      <div className="alert alert-warning mt-2" role="alert">
                      <strong>!:</strong> Прежде чем начинать работь с GIT - установи его в свою систему! <a href="https://git-scm.com/book/ru/v2/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-Git" target="blank" className="alert-link">Руководство</a>
                    </div>
                      <p>Если вы никогда ранее не использовали git, для начала вам необходимо осуществить установку.
                           Выполните следующие команды, чтобы git узнал ваше имя и электронную почту. </p>
                           <SyntaxHighLighter language="bash">
                      {`
                        git config --global user.name "Your Name"
                        git config --global user.email "your_email@whatever.com"
                      `}
                    </SyntaxHighLighter>
                    <p>Будем пользоваться ранее созданной папкой <kbd>Hello</kbd> и файлом <kbd>Hello.htm</kbd>.</p>
                    <h3>Создадим репозиторий</h3>
                    <p>Чтобы создать git репозиторий из этого каталога, выполните команду <strong>git init</strong>.</p>
                           <SyntaxHighLighter language="bash">
                      {`
                        $ git init

                        //result:
                        Initialized empty Git repository in /Users/alex/Documents/Presentations/githowto/auto/hello/.git/
                      `}
                    </SyntaxHighLighter>
                    <h3>Добавим страницу в репозиторий</h3>
                    <p>Теперь давайте добавим в репозиторий страницу <kbd>Hello.htm</kbd>.</p>
                           <SyntaxHighLighter language="bash">
                      {`
                        $ git add hello.html
                        $ git commit -m "First Commit"

                        //result:
                        [master (root-commit) 911e8c9] First Commit
                         1 files changed, 1 insertions(+), 0 deletions(-)
                         create mode 100644 hello.html
                      `}
                    </SyntaxHighLighter>
                    <h3>Проверем состояние</h3>
                    <p>Используйте команду <code>git status</code>, чтобы проверить текущее состояние репозитория.</p>
                           <SyntaxHighLighter language="bash">
                      {`
                        $ git status

                        //result:
                        # On branch master
                        nothing to commit (working directory clean)
                      `}
                    </SyntaxHighLighter> 
                    <h3 className="text-center mt-4">Команды GIT в порядке выполнения</h3>
                    <ul className="list-group">
                      <li className="list-group-item" aria-current="true"><code>git clone</code> - склонить репозиторий для работы локально.</li>
                      <li className="list-group-item"><code>git pull</code> - спуллиться ( "скачать" изменения), если репозиторий уже присутствует локально.</li>
                      <li className="list-group-item"><code>git checkout -b "branchname"</code> - переключиться на новую ветку и внести нужные измения.</li>
                      <li className="list-group-item"><code>git status</code> - проверить состояние.</li>
                      <li className="list-group-item"><code>git add .</code> -  добавить изменения.</li>
                      <li className="list-group-item"><code>git commit -m "text of commit"</code> -  закоммитить.</li>
                      <li className="list-group-item"><code>git push origin branchname</code> - запушить на сервер.</li>
                      <li className="list-group-item"><code>git merge</code> - смерджить изменения.</li>
                    </ul>
                    <div className="alert alert-primary mt-4" role="alert">
                    Больше о командах GIT: <a href="https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html" target="blank" className="alert-link">тут</a>.
                  </div>
                  <iframe id="ytplayer" className="w-100 mt-4" type="text/html" width="100%" height="520"
                        src="https://www.youtube.com/embed/yZISr7LtlKQ"
                   frameborder="0"/>
                   <small>Наглядное пособие по работе с <code>GIT</code></small>    
                  </div>
              </section>
              <section id="github-pages">
                    <div className="container">
                    <h2 className="mt-4 text-center">GitHub Pages</h2>
                    <p>Сегодня мы хотим разместить нашу простую HTML-страницу в интернете таким образом, чтобы она стала доступна всем.
                        Если бы мы писали полноценное веб-приложение с какой-то логикой, например, с регистрацией и авторизацией пользователей, отправкой и 
                        сохранением информации, то нам требовалось бы достаточно комплексное решение с серверами и, возможно, базами данных. 
                        Конечному посетителю в любом случае будет приходить HTML, но на стороне сервера могут происходить самые разные сложные операции.</p>
                    <p>Но под задачи меньшего калибра требуется соответствующее решение.</p>
                    <p>Для того, чтобы на основе вашего репозитория создать GitHub Pages достаточно пары шагов:</p>
                    <ul className="list-group">
                      <li className="list-group-item" aria-current="true"><code>1.</code> - файл <kbd>index.html</kbd> должен лежать в корневом каталоге.</li>
                      <li className="list-group-item"><code>2.</code> - должны быть грамотно прописаны пути к остальным файлам (<kbd>style.css</kbd>, файлы изображений и т.д.).</li>
                      <li className="list-group-item"><code>3.</code> - зайти в <kbd>Settings</kbd> - <kbd>Pages</kbd> - <kbd>Save</kbd>.</li>
                      <li className="list-group-item"><code>4.</code> - через несколько мгновений страница станет доступна по вашему адресу https://username.github.io/repo-name</li>
                    </ul>
                    <iframe id="ytplayer" className="w-100 mt-4" type="text/html" width="100%" height="520"
                        src="https://www.youtube.com/embed/QyFcl_Fba-k"
                   frameborder="0"/>
                   <small>Полный путь с момента создания репозитория и до создания на его основе <code>GitHub Pages</code></small>
                    </div>
              </section>
              <section id="styles">
                    <div className="container">
                    <h2 className="mt-4 text-center">Встроенные стили браузеров</h2>
                    <p>С течением времени популярные браузеры обросли своими надстройками на CSS и он перестал быть таким уж чистым. 
                        Это значит, что когда мы используем какой-то из элементов, например - <kbd>h1</kbd>, то с ним в комплекте идут заготовленные браузером стили.
                        </p>
                        <p id="css-reset">И есть несколько способов ( больше 10, так точно - потому как они разные и у каждого разработчика свой пресет к которому он привыкает ) от этого избавиться.</p>
                        <h3 className="text-center mt-4">Сброс стилей reset.css</h3>
                        <h4>Сброс стилей Minimum</h4>
                           <SyntaxHighLighter language="css">
                      {`
                        * {
                            padding: 0;
                            margin: 0;
                            border: 0;
                            }
                      `}
                    </SyntaxHighLighter>
                    <h4>Сброс стилей Simpler</h4>
                           <SyntaxHighLighter language="css">
                      {`
                        a simpler reset
                        http://www.maxdesign.com.au/articles/css-reset/
                        */
                        html, body, ul, ol, li, form, fieldset, legend
                        {
                            margin: 0;
                            padding: 0;
                        }
                         
                        h1, h2, h3, h4, h5, h6, p { margin-top: 0; }
                         
                        fieldset,img { border: 0; }
                         
                        legend { color: #000; }
                         
                        li { list-style: none; }
                         
                        sup { vertical-align: text-top; }
                         
                        sub { vertical-align: text-bottom; }
                         
                        table
                        {
                            border-collapse: collapse;
                            border-spacing: 0;
                        }
                         
                        caption, th, td
                        {
                            text-align: left;
                            vertical-align: top;
                            font-weight: normal;
                        }
                         
                        input, textarea, select
                        {
                            font-size: 110%;
                            line-height: 1.1;
                        }
                         
                        abbr, acronym
                        {
                            border-bottom: .1em dotted;
                            cursor: help;
                        }
                      `}
                    </SyntaxHighLighter>
                    <div className="alert alert-primary mt-4" role="alert">
                    CSS Reset vs CSS Normalize: <a href="https://forwww.com/difference_between_normalize_css_and_reset_css/" target="blank" className="alert-link">тут</a>.
                  </div>
                  <div className="alert alert-warning mt-2" role="alert">
                      <strong>Спойлер:</strong> И <a href="https://cdnjs.com/libraries/reseter.css/1.0.8" target="blank" className="alert-link">Reset</a>, и <a href="https://cdnjs.com/libraries/normalize" target="blank" className="alert-link">Normalize</a> можно подключить с помощью <strong>cdnjs</strong>. 
                    </div>
                    </div>
              </section>
              <section>
                    <div className="container">
                    <h2 className="mt-4 text-center">Презентация</h2>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR4FCWW7HiGk6x5hnqa9qbsXJema5qqU-HzZtL0f9M2oqFnUAbRetVPK3YM28Jz6d2yS9yZP2TCzOLW/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="520" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </div>
              </section>

              <section id="homeworks">
                    <div className="container">
                    <h2 className="mt-4 text-center">Домашнее задание</h2>
                    <div class="bd-callout bd-callout-warning">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"><a class="btn btn-primary" href="#" role="button">1.</a> Установи <strong>GIT</strong>. Проделай все шаги по созданию репозитория, запушь туда первые изменения.</li>
                      <li class="list-group-item"><a class="btn btn-primary" href="#" role="button">2.</a> Верстай <strong>ДЗ</strong> (<a href="https://www.youtube.com/watch?v=2ntJ1ETtHi8">макет тут</a>)</li>
                      <li class="list-group-item"><a class="btn btn-primary" href="#" role="button">3.</a> Воспользуйся <strong>GitHub Pages</strong>, чтобы сдать задание выше.</li>
                    </ul>
                    </div>
                    </div>
              </section>
            </div>
        );
    }
}


export default Advanced1;