import React, { Component } from 'react';
import hw1 from "./imagesJS1/anim2.gif";
class JS1 extends Component {
    render() {
        return (
            <div>
                <h1>JS basic. DOM</h1>
                 <section>
          <div className="container">
            <h2 className="mt-4 text-center">Презентация</h2>
            <p className="text-center">
              <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRCbGPWhnMgkzv9mV4QPllGzCM35U0QFbGj7ZYUuoPTJCHQBGRuWqzth566TzDaANfWNng9YZ-STU_D/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
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
                    Реализовать <em>выпадающее меню</em>
                  <p className="text-center layout">
                    <img className="fit-image gif-js" src={hw1} alt="" />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
            </div>
        );
    }
}


export default JS1;