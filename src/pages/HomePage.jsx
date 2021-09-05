import { HashLink as Link } from 'react-router-hash-link';

export default function HomePage() {
    return (
        <div>
            <h1>Welcome page</h1>
            <section>
                <div className="container">
                    <p className="mt-4"><strong>Салют!</strong> Ты попал на этот портал, а значит ищешь знаний. Тогда - ты по попал по адресу!</p>
                    <div className="alert alert-dark mt-2" role="alert">
                      <strong>Примечание:</strong> Во вкладках <kbd>HTML</kbd>, <kbd>CSS</kbd>, <kbd>Advanced</kbd>, <kbd>JS</kbd> - 
                      ты найдешь всю необходимую информацию, чтобы получение знаний прошло максимально с пользой.
                    </div>
                    <div className="alert alert-primary mt-2" role="alert">
                    Таким образом дальше в уроках будут отмечены действительно полезные <a href="https://creativeeconomy.school/ua/course/front-end" target="blank" className="alert-link">ссылки</a>.
                  </div>
                  <div className="alert alert-warning mt-2" role="alert">
                      <strong>Спойлер:</strong> <a href="https://creativeeconomy.school/ua/course/front-end" target="blank" className="alert-link" download>Тут</a> ты сможешь найти программу курса и скачать ее!
                  </div>
                  <p className="mt-4">Во время прохождения <strong>курса</strong> - обращай внимания на блоки, как те, которые написаны выше. 
                  В них действительно много полезной информации!</p>
                  <div className="row d-flex flex-row justify-content-center mt-4">
                    <Link class="btn btn-primary w-75" to="/htmlMain/HTML1">Начать курс!</Link>
                  </div>
                </div>
            </section>
        </div>
    );
}