import React, { Component } from "react";

class Advanced5 extends Component {
  render() {
    return (
      <div>
        <h1>
         Совместная работа над проектом, git merge, pull request, git branches. Trello, toogle трекер. Роли в IT компании
        </h1>
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
