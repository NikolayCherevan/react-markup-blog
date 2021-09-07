import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import banner from './imagesAdvanced4/banner.png';
import cross from './imagesAdvanced4/cross.png';
import bugs from './imagesAdvanced4/bugs.png';
import audit from './imagesAdvanced4/audit.gif';
import { AlertOutlined } from "@ant-design/icons";
class Advanced4 extends Component {
  render() {
    return (
      <div>
        <h1>
          Верстка “под ключ”. Pixel perfect extension, валидация верстки,
          кроссбраузерность, адаптивность.
        </h1>
        <section className="mt-4">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced4#forwhat">
                    Верстка "под ключ", как это?
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced4#pixelperfect"> Pixel perfect extension</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced4#valid">Валидация верстки</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced4#crossbrowser">Кроссбраузерность</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced4#lighthouse">Lighthouse extension </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced4#pagespeed">Pagespeed</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced4#adaptive">Адаптивность</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced4#resources">
                    Дополнительные ресурсы{" "}
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/advancedMain/Advanced4#hw">Домашнее задание </Link>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        <section id="forwhat">
          <div className="container">
            <p className="text-center">
              <img className="image-base" src={banner} alt="" />
            </p>
            <h2 className="mt-4 text-center">Верстка "под ключ", как это?</h2>
            <p className="bd-callout bd-callout-info">
              Нынче недостаточно просто отобразить некоторую информацию на сайте, чтобы заказчик был доволен, стоит <b>проверять работоспособность  сайта в различных браузерах</b>, 
              сайт должен <b>быстро загружаться</b>, <b>быть адаптивным под различные устройства</b>, <b>выполнять SEO рекомендации</b>, дабы быть ликвидным в поисковых системах и многое другое. В этой статье 
              вы узнаете как сделать так, чтобы клиент был доволен, чтобы <b>исключить наличие багов</b> и тем самым, показать свою возможность идеально справляться с поставленными задачами.
            </p>
          </div>
        </section>
        <section id="pixelperfect">
          <div className="container">
            <p className="text-center">
              <img className="image-base" src={bugs} alt="" />
              <p><small>Пример отклонения верстки от макета</small></p>
            </p>
            <h2 className="mt-4 text-center">Pixel perfect extension</h2>
            <p className="bd-callout bd-callout-info">
             Получая сайт в разработку, первое, что вы увидите - макеты. Макеты разрабатываются дизайнерами и согласуются с клиентамим. Многие заказчики будут требовать идеального отображения сайта, в точности, как на макете. В этом деле вам поможет <a href="https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=ru"> Pixel perfect</a> расширение для браузера. 
            </p>
            <div className="alert alert-primary mt-4" role="alert">
            Много практики - это то, что поможет вам достичь успеха в вашем деле. Практиковаться во фронтенд разработке можно, используя готовые макеты, превращая их в понятный для браузера код.
            Много бесплатных макетов находится на просторах сети. Выбирайте понравившийся и разрабатывайте - <a href="http://psd-html-css.ru/">макеты</a>
            </div>
            <div className="alert alert-dark mt-4" role="alert">
              <AlertOutlined /> Совет: не все заказчики проверяют "пиксель в пиксель". Не всегда использование расширения вызовет восторг у клиента, тк для всего идеального, требуется в идеале много времени, которого, зачастую у вас не будет. Думаю, что стоит для себя попробовать попользоваться первое время расширением, а дальше вы уже на глаз сможете вычленять важные моменты по отступам и размерам блоков, делая все в идеале.
            </div>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/IQX0IqjZ9i8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p className="text-center"><small>Пример использования плагина на практике</small></p>
          </div>
        </section>
        <section id="valid">
          <div className="container">
          <h2 className="mt-4 text-center">Валидация верстки</h2>
            <p className="text-center">
              <img className="image-base" style={{ maxWidth: "500px" }} src="https://lh3.googleusercontent.com/proxy/_oC7zy7uzpNPbOIwAh75Oovz8nCA-OUs35Sjxy4XJn01IRKAXJ9s3iENXp5Kn--UA7nbFRt6JSeP4Y9XRHWxo3HXQxAoz_GSHZLQyKOBzw" alt="" />
            </p>
            <p className="bd-callout bd-callout-info">
             Редко, но метко посредник, или заказчик вам может рассказать о том "как правильно делать свою работу", пользусь различными сервисами для проверки валидности кода. Чтобы избежать таких ситуаций - будьте на шаг впереди, проверяйте свой код.
            </p>
            <div className="alert alert-primary mt-4" role="alert">
              HTML валидатор - <a href="https://validator.w3.org/"> здесь</a>
            </div>
            <div className="alert alert-primary mt-4" role="alert">
              CSS валидатор - <a href="https://jigsaw.w3.org/css-validator/"> здесь</a>
            </div>
            <div className="alert alert-danger mt-4" role="alert">
              Первое время, валидаторы - <b>must have!</b>
            </div>
          </div>
        </section>
        <section id="crossbrowser">
          <div className="container">
            <p className="text-center">
              <img className="image-base" src={cross} style={{ maxWidth: "500px" }}  alt="" />
            </p>
            <h2 className="mt-4 text-center">Кроссбраузерность</h2>
            <p className="bd-callout bd-callout-info">
            <b> Кросс-браузерное тестирование </b>- это практика обеспечения уверенности в том, что веб-сайты и веб-приложения, которые вы создаёте, работают в приемлемом количестве браузеров. Обязанность веб-разработчика быть уверенным, что проект работает не только у вас, а у всех ваших пользователей, независимо от браузера, устройства, или других вспомогательных инструментов, которые они используют.
            </p>
            <p className="text-center fw-bold">Вы должны думать о:</p>
            <ul class="list-group">
            <li class="list-group-item">Других браузерах. Не тех нескольких, которые вы регулярно используете, а о довольно старых, которые некоторые люди могут использовать до сих пор, и которые не поддерживают современные возможности CSS и JavaScript.</li>
            <li class="list-group-item">Разных устройствах с разными возможностями, начиная от последних лучших планшетов, смартфонов и "умных" телевизоров, до дешёвых устройств и самых старых смартфонов, в которых браузеры могут работать с ограниченными возможностями.</li>
            <li class="list-group-item">Людях с инвалидностью, которые используют Web с помощью вспомогательных технологий, таких как скринридеры, или не используют мышь (некоторые используют только клавиатуру).</li>
          </ul>
          <p className="text-center fw-bold mt-5">Как проверить себя?</p>
                      <ul class="list-group">
            <li class="list-group-item">Протестируйте его в паре стабильных браузеров в вашей системе, таких как Firefox, Safari, Chrome или IE / Edge.</li>
            <li class="list-group-item">Проведите небольшое тестирование доступности, например, попробуйте использовать свой сайт только с клавиатурой или используйте свой сайт с помощью программы чтения с экрана, чтобы проверить, доступен ли он для навигации.</li>
            <li class="list-group-item">Протестируйте на мобильной платформе, например Android или iOS.</li>
          </ul>
          <div className="alert alert-primary mt-4" role="alert">
              <AlertOutlined /> Проблему с доступностью стилей в различных браузерах решит <a href="https://habr.com/ru/company/evilmartians/blog/176909/">Автопрефиксер</a>
            </div>
            <div className="alert alert-primary mt-4" role="alert">
              <AlertOutlined /> Навигация по сайту будет доступна, если вы не будете обнулять свойство <code>outline</code> на элементах кнопок и ссылок. Нажимая на <kbd>tab</kbd> клавишу вы сможете премещаться по ссылкам и кнопкам.
            </div>
          </div>
        </section>
        <section id="lighthouse">
          <div className="container">
     
            <h2 className="mt-4 text-center">Lighthouse extension</h2>
            <p className="bd-callout bd-callout-info">
             <b>Lighthouse</b>  - это автоматизированный инструмент с открытым исходным кодом для улучшения качества веб-страниц. Вы можете запустить его на любой веб-странице, публичной или требующей аутентификации. Он проводит аудит производительности, доступности, прогрессивных веб-приложений, SEO и многого другого.
            </p>
            <p className="text-center">
              <img className="image-base" src={audit} alt="" />
            </p>
            <p>Вы можете запустить Lighthouse в Chrome DevTools. Вы даете Lighthouse URL-адрес для аудита, он запускает серию аудитов страницы, а затем генерирует отчет о том, насколько хорошо страница работает. Оттуда используйте неудавшиеся аудиты как индикаторы того, как улучшить страницу. У каждого аудита есть справочная документация, в которой объясняется, почему аудит важен, а также как его исправить.</p>
            <div className="alert alert-danger mt-4" role="alert">
            <b>Максимально полезный инструмент!!!</b> <a href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=ru"> ссылка на расширение </a>
            </div>
          </div>
         
        </section>
        <section id="pagespeed">
          <div className="container">
            <p className="text-center">
              <img style={{ maxWidth: "100px" }} src="https://www.gstatic.com/images/icons/material/product/2x/pagespeed_64dp.png" alt="" />
            </p>
            <h2 className="mt-4 text-center">Pagespeed</h2>
            <p className="bd-callout bd-callout-info">
              <a href="https://developers.google.com/speed/pagespeed/insights/?hl=ru"> Pagespeed</a> - один из самых популярных сервисов для проверки скорости загрузки сайтов.
            </p>
            <div className="alert alert-danger mt-4" role="alert">
            Обратите внимание, что на финальную скорость может повлиять текущая скорость интернета на вашем устройстве. Поэтому стоит несколько раз выполнять проверку, чтобы получить средний результат.
            </div>
            <p className="text-center fw-bold"> Советов по оптимизации скорости загрузки <u><a href="https://medium.com/webbdev/speed-31716013b5e1"> множество </a></u>, вот некоторые из них: </p>
            <ul class="list-group">
            <li class="list-group-item"> Использовать минимизацию html, css, js</li>
            <li class="list-group-item"> Использовать кеширование страниц </li>
            <li class="list-group-item"> Сжимать картинки (или использовать современные форматы картинок - <b>WebP</b>)</li>
            <li class="list-group-item"> Ипользовать lazy load для загрузки больших изображений </li>
            <li class="list-group-item"> Использовать асинхронную подгрузку файлов </li>
          </ul>
          </div>
        </section>
        <section id="adaptive">
          <div className="container">
            <h2 className="mt-4 text-center">Адаптивность</h2>
            <p className="bd-callout bd-callout-info">
              Понятие адаптивности уже рассматривалось <Link to="/cssMain/CSS7"> в этой статье </Link> 
            </p>
            <p className="bd-callout bd-callout-info">
              А для дебага и чтобы "держать руку на пульсе" не забывайте открывать devtools Chrome <kbd>F12</kbd> , а после <kbd>Сntrl</kbd> + <kbd>Shift</kbd> + <kbd> M</kbd> и выбирайте различные устройства (начиная с galaxy fold)
            </p>
          </div>
        </section>
        <section id="resources">
          <div className="container">
            <h2 className="text-center mt-5">Дополнительные ресурсы</h2>
            <div className="alert bg-dark" role="alert">
              <a
                className="d-block text-decoration-underline text-light"
                href="https://developer.mozilla.org/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
              >
               Кросс-браузерное тестирование
              </a>
              <a
                className="d-block text-decoration-underline text-light"
                href="https://medium.com/webbdev/speed-31716013b5e1"
              >
                Увеличиваем скорость загрузки 
              </a>
              <a
                className="d-block text-decoration-underline text-light"
                href="https://www.toptal.com/designers/responsive/responsive-design-best-practices"
              >
                Делаем сайт "респонсивным"
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="mt-4 text-center">Презентация</h2>
            <p className="text-center">
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vQl77iJJVGeZhS4zRMrh9ISw5aJ6FALdfrFrTvPsFDONHqdj8alhzMblygygdIvU06NY_yPYNgAavPn/embed?start=false&loop=false&delayms=3000"
                frameborder="0"
                width="100%"
                height="569"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
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
                  Самостоятельно определите для себя понравившийся макет и
                  выполните верстку, учитывая все валидаторы, кроссбраузерность
                  и скорость загрузки
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Advanced4;
