import React, { Component } from "react";
import banner from './imagesAdvanced5/teamwork.png';
import trello from './imagesAdvanced5/trello.jpg';
import jira from './imagesAdvanced5/jira.png';
import { HashLink as Link } from "react-router-hash-link";
import Zoom from "react-medium-image-zoom";
import SyntaxHighLighter from "react-syntax-highlighter";
import { SmileOutlined} from "@ant-design/icons";
class Advanced5 extends Component {
  render() {
    return (
      <div>
        <h1>
          Совместная работа над проектом, git merge, pull request, git branches. Trello, toogle трекер. Роли в IT компании
        </h1>
        <section className="mt-4">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced5#forwhat">
                    Совместная работа над проектом
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced5#role"> Определение ролей</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced5#tasker">Таски</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced5#tracker">Отслеживание активности сотрудников</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced5#git">Git </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced5#gitmethodology"> Правильная организация работы на Git</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced5#terminology">Сленг IT сферы </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced5#resources">
                    Дополнительные ресурсы{" "}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced5#hw">Домашнее задание </Link>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        <section id="teamwork">
          <div className="container">
            <p className="text-center"><img style={{ maxWidth: "400px" }} src={banner} alt="" /></p>
            <h2 className="mt-4 text-center">Совместная работа над проектом</h2>
            <p>
              Представьте в своей руке связку воздушных шаров. Каждый из них представляет собой участника команды. Если вы разожмете кулак, ветер ожиданий и сроков унесет их в разные стороны или загонит на крону безнадежно высокого дерева.
            </p>
            <p>Напротив, если вы свяжете шары вместе и будете крепко держать, даже ураган так просто не вырвет их из ваших рук. Нельзя контролировать ветер, но вы можете помочь команде идти в одной связке при любой погоде.</p>
            <p>В основе совместной работы над проектом лежат три столпа: <b> эффективная коммуникация</b>, <b> согласованные процессы</b> и подходящие <b> инструменты для совместной работы</b>. Наши стили и технологии работы быстро развиваются, а значит, инструменты для совместной работы и соответствующие методы тоже должны развиваться.</p>
          </div>
        </section>
        <section id="role">
          <div className="container">
            <h2 className="mt-4 text-center">Определение ролей</h2>
            <h5 className="text-center fw-bold">
              <u> Developer</u>
            </h5>
            <ul>
              <li> занимается производством программных алгоритмов;</li>
              <li> не несёт ответственности за применение результата и по финансовым рискам;</li>
            </ul>
            <p className="text-center"> Cегментируется по разделению ответственности: </p>
            <ul>
              <li> <b>Back-end developer </b> — разработчик программно-аппаратной части комплексного ПО;</li>
              <li> <b>Front-end developer </b> — разработчик клиентской стороны пользовательского интерфейса к программно-аппаратной части.
              </li>
            </ul>
            <h5 className="text-center fw-bold mt-5">
              <u> User Experience Designer (UX)</u></h5>
            <p>Эта роль изучает и оценивает, как пользователи относятся к разрабатываемому программному обеспечению. Они выявляют простоту использования ПО, восприятие ценности ПО, полезность ПО, эффективность ПО. Продумывают и оценивают процессы и сценарии использования ПО.</p>
            <h5 className="text-center fw-bold mt-5">
              <u> User Interface Designer (UI)</u></h5>
            <p>Эта роль разрабатывает визуальную часть пользовательского интерфейса. Основными целями работы UI дизайнера являются: интуитивность восприятия, простота, юзабильность и эстетика интерфейса ПО.</p>
            <h5 className="text-center fw-bold mt-5">
              <u> Quality Assurance (QA)
              </u></h5>
            <p>QA занимается тестированием всего</p>
            <h5 className="text-center fw-bold mt-5">
              <u> Human Resource (HR)
              </u></h5>
            <p>занимается первичным подбором кандидатов согласно требованиям</p>
            <h5 className="text-center fw-bold mt-5">
              <u> Team Leader
              </u></h5>
            <p>Team Leader обеспечивает комфортные условия работы коллектива и поддерживая высокий уровень её эффективности</p>
            <h5 className="text-center fw-bold mt-5">
              <u> Tech Leader
              </u></h5>
            <p>отвечает за грамотный аргументированный выбор технических решений</p>
            <h5 className="text-center fw-bold mt-5">
              <u> Scrum Master
              </u></h5>
            <p>при появлении <a href="https://brainrain.com.ua/%d1%81%d0%ba%d1%80%d0%b0%d0%bc-%d1%8d%d1%82%d0%be/">Scrum</a> ,
              <a href="https://habr.com/ru/company/edison/blog/313410/"> Agile</a>,
              <a href="https://scrumtrek.ru/blog/kanban/1360/chto-takoe-kanban-metod-maksimalno-korotko/">KanBan</a> , гибкие методологии, и прочие теоретические знания, которые крайне бесполезны без практики/опыта, к командам разработки стали прикреплять роль <b> Scram Master</b> </p>
            <h5 className="text-center fw-bold mt-5">
              <u> Project Manager (PM)
              </u></h5>
            <p>Эта роль классического управленца процессами. Работа над проектом начинается с Project Manager`а, ведётся (ставятся задачи), контролируется (контроль качества и эффективности), и сдаётся тоже им. </p>
          </div>
        </section>
        <section id="tasker">
          <div className="container">
            <h2 className="mt-4 text-center">Таски</h2>
            <p className="bd-callout bd-callout-info">
            Когда необходимо <b>оптимизировать перенасыщенные рабочие процессы</b> , обычных to-do листов может быть недостаточно. В этом случае стоит поискать волшебный функционал, который будет <b>отслеживать все задачи</b> , над которыми работает ваша команда, <b>задачи, которые только планируются</b>, а также показывать <b>полную картину по уже выполненным</b>.
            </p>
          
            <p className="bd-callout bd-callout-info">
            <b>TODO-доска</b> — отличное решение. Этот инструмент для совместной работы над проектами широко используется в разработке ПО, маркетинге, строительстве, логистике и в любых решениях, где присутствует постоянный поток задач. TODO-доска помогает командам визуализировать рабочие процессы, грамотно анализировать их и повышать эффективность управления задачами
            </p>
            <p className="text-center"><Zoom><img style={{ maxWidth: "600px" }} src={trello} alt="" /></Zoom>
            <p><small><a href="https://trello.com/">trello</a> пример доски</small></p>
            </p>
            <p className="text-center"><Zoom><img style={{ maxWidth: "600px" }} src={jira} alt="" /></Zoom>
            <p><small><a href="https://www.atlassian.com/ru/software/jira">jira</a> пример доски</small></p>
            </p>
            <div className="alert alert-primary mt-4" role="alert">
            Могут повстречаться и другие  <a href="https://habr.com/ru/company/hygger/blog/460985/">доски</a>
            </div>
          </div>
        </section>
        <section id="tracker">
          <div className="container">
            <h2 className="mt-4 text-center">Отслеживание активности сотрудников</h2>
            <p>
              Пока Вася рубится в косынку, Анатолий работает. А все потому, что Анатолий работает на трекере <a href="https://hubstaff.com/"> Hubstaff</a>
            </p>
            <p className="bd-callout bd-callout-info">
              Трекеры позволять отслеживать личную активность и активность подчиненных, а именно количество времени, потраченного на тот или иной таск
            </p>
            <p> Еще один пример трекера - <a href="https://toggl.com/">Toggl</a></p>
            <p><em> Первый трекер </em>имеет платную основу, а так же у него функционал, который делает скрины того, чем занимается разработчик и трекает активность разработчика. За бездействие может быть штраф в виде отнятого времени работы</p>
            <p><em> Второй трекер </em> трекер более терпим, в нем лишь фиксируется время работы. Есть возможность выбрать проект, над которым осуществляется работа и изменить колличество потраченного времени</p>
          </div>
        </section>
        <section id="git">
          <div className="container">
            <h2 className="mt-4 text-center">Git</h2>
            <p>
              Тема гита в полной мере раскрыта в предыдущей статье -  <Link to="/advancedMain/Advanced1"> здесь </Link>. 
            </p>
            <p className="bd-callout bd-callout-info">
            Что же касается командной работы на гите, рассмотрим в этой теме. 
            </p>
            <p className="bd-callout bd-callout-info">
            Каждому разработчику требуется собственная задача, над которой он работает, но что если задачи переплетаются? В таком случает нам поможет <a href="https://github.com/">github</a> или <a href="https://bitbucket.org/product?&aceid=&adposition=&adgroup=92266804557&campaign=9128560941&creative=414680964926&device=c&keyword=bitbucket&matchtype=e&network=g&placement=&ds_kids=p51241778146&ds_e=GOOGLE&ds_eid=700000001551985&ds_e1=GOOGLE&gclid=Cj0KCQjwm9yJBhDTARIsABKIcGap4oSxFV0MyUZjfNzBqUiEMn16hhXzEI9VoWW2xaAQLVbKw9Y3wbYaArfMEALw_wcB&gclsrc=aw.ds"> bitbucket</a> или <a href="https://gitlab.com/gitlab-org">gitlab</a>
            </p> 
            <p className="bd-callout bd-callout-info  alert-danger">
            Гит позволит отследить кто и когда, и какие изменения вносил в тот или иной проект. Важно понимать, что гит - очень серьезная вещь и незнание базовых принципов может повлечь за собой 
            возникновение конфликтов и потерю огромного колличества наработок.
            </p>
          </div>
        </section>
        <section id="gitmethodology">
          <div className="container">
            <h2 className="mt-4 text-center"> Правильная организация работы на Git </h2>
            <p className="text-center fw-bold">1. Создаем репозиторий или клонируем существующий проект</p>
            <p>Эти действия ясны. Если нам нужно создать репозиторий с нуля - заходим на один из сервисов удаленного хранения проектов, создаем там пустой репозиторий.  
            </p>
            <p>После, локально выполняем команды:</p>
            <SyntaxHighLighter language="bash">
             {`
git init

git remote add <name> <url>

git add relative_path_to

git commit -m "xxxxx"

git push origin master
             `}
</SyntaxHighLighter>
<p> Создаем рабочую ветку <kbd>develop</kbd> (в дальнейшем, она будет закреплена на хостинге для разработки - "на деве")</p>
<SyntaxHighLighter language="bash">
             {`
git checkout develop
...
git push origin develop
             `}
</SyntaxHighLighter>
<p> Если нам нужно делать новый таск - создаем ветку от девелоп -  <kbd>features/name_of_task_or_id</kbd> </p>
<SyntaxHighLighter language="bash">
             {`
git checkout develop 

git pull origin develop

git checkout -b "features/name_of_branch"
             `}
</SyntaxHighLighter>
<div className="alert alert-danger mt-4" role="alert">
             <em>Чаще "пулишься" - меньше проблем</em> . Пока Вася рубился в косынку, Анатолий много залил(запушил) на <kbd>develop</kbd> ветку. Теперь Васе стоит спулиться с нее перед созданием новой, чтобы не перезатереть изменения Анатолия
            </div>
            <p> После выполнения таска, Вася заливает все изменения в features-ветку, а после - выливает ее в <kbd>develop:</kbd></p>
            <SyntaxHighLighter language="bash">
             {`

git add xxxxxx

git commit -m "xxxxx"

git push origin "features/name_of_branch"

git checkout develop

git pull origin develop

git merge features/name_of_branch

git push origin develop

             `}
</SyntaxHighLighter>
<p> Вася запушил ветку с "фичей" в удаленный репозиторий, но ему стоит отобразить изменения на сайте (на деве):</p>
<p> <a href="https://firstvds.ru/technology/how-to-connect-to-the-server-via-ssh">Подключаемся по ssh </a> к серверу, заходим в директорию проекта и там делаем </p> 

<SyntaxHighLighter language="bash">
             {`
git pull origin develop
             `}
</SyntaxHighLighter>
<p>ЕЕЕ. Таск выполнен, но <del>злобный</del> клиент нашел баг. Теперь Васе нужно его фиксить</p>
Действия все те же, кроме того, что теперь ветка будет иметь префикс <kbd>bugfix/name_of_task_or_id</kbd> :
<SyntaxHighLighter language="bash">
  {`
git checkout develop 

git pull origin develop

git checkout -b "bugfix/name_of_branch"
             `}
             </SyntaxHighLighter>
             <p> Ну и повторяем дальше действия с заливом на дев</p>
             <p> Что же с <kbd>master</kbd> веткой?</p>
             <div className="alert alert-danger mt-4" role="alert">
             <kbd>master</kbd> ветка привязывается чаще всего к "лайву"- сайту, с которым взаимодействуют клиенты самого сайта (делают покупки и тд)
            </div>
            Когда клиент апрувит(одобряет таск) на деве, делаются следующие действия:
            <SyntaxHighLighter language="bash">
  {`
git checkout master 

git merge develop

git push origin master
             `}
             </SyntaxHighLighter>

            <p>Вот и все, клиент доволен, фичи на сайте, ПМ купается в деньгах, Анатолий все так же на трекере, а Вася пошел дальше рубиться в косынку <SmileOutlined/></p> 
          </div>
        </section>
       
        <section id="terminology">
          <div className="container">
            <h2 className="mt-4 text-center">Сленг IT сферы</h2>
            <p>
              Поработав некоторое время в айти сфере так и хочет юзать (но вот опять) словечки, которые просто вьедаются в разум за счет частого использования английских слов в сочетании с техническими понятиями. Вот некоторые из них: 
            </p>
            <p> Чтобы быть в курсе того, о чем говорят твои коллеги, вот список некоторых из них : </p>
            <p><a href="https://www.englishdom.com/blog/35-poleznyx-slov-i-vyrazhenij-iz-it-slenga-na-anglijskom-yazyke/"> Сленг IT</a>
            </p>
            <p><a href="https://ru.hexlet.io/blog/posts/ponimaem-sleng-programmistov-mini-slovar-dlya-nachinayuschih-razrabotchikov"> И еще </a></p>
          </div>
        </section>
        <section id="resources">
          <div className="container">
            <h2 className="text-center mt-5">Дополнительные ресурсы</h2>
            <div className="alert bg-dark" role="alert">
              <a
                className="d-block text-decoration-underline text-light"
                href="https://bitworks.software/2019-03-12-gitflow-workflow.html"
              >
                git flow модель (без flow можно почерпнуть что-то чисто в подходе)
              </a>
              <a
                className="d-block text-decoration-underline text-light"
                href="https://www.atlassian.com/ru/git/tutorials/using-branches/merge-conflicts"
              >
                <b>ВАЖНО</b> конфликты слияния и как их фиксить
              </a>
              <a
                className="d-block text-decoration-underline text-light"
                href="https://habr.com/ru/post/178827/"
              >
                Инструменты для командной разработки
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="mt-4 text-center">Презентация</h2>
            <p className="text-center">
              <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRAOw6V9L_pOzOaHTT_SUIMC0TLCTqREzcb3onXrdeACh7y8XmjqldiQyJ8UZ4MsUohp0rbVXQYAwbM/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </p>
          </div>
        </section>
        <section id="hw">
          <div className="container">
            <h2 className="mt-4 text-center">Домашнее задание</h2>
            <div className="bd-callout bd-callout-warning">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a className="btn btn-primary" role="button">
                    1.
                  </a>{" "}
                  Работаем совместно в одном репозитории над проектом, используя трекер и trello. Преподаватель в роли тимлида
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Advanced5;
