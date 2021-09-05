import React, { Component } from 'react';
import hw1 from "./imagesAdvanced3/mobilehw.jpg";
import { ArrowRightOutlined, ArrowDownOutlined } from "@ant-design/icons";
import hw2 from "./imagesAdvanced3/pchw.jpg";
class Advanced3 extends Component {
    render() {
        return (
            <div>
                <h1>Node modules, npm, Webpack (Gulp, Grunt). SASS, LESS, SCSS.</h1>
                <section id="hw">
          <div className="container">
            <h2 className="mt-4 text-center">Домашнее задание</h2>
            <div className="bd-callout bd-callout-warning">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a className="btn btn-primary" role="button">
                    1.
                  </a>{" "}
                  Cверстать секции по примеру, используя <strong>webpack</strong> сборщик, переменные и миксины  <strong>SCCS</strong>{" "}
                  <p className="text-center layout">
                    <img className="fit-image" src={hw1} alt="" />
                    <div className="for-phone">
                      <ArrowDownOutlined />
                      <ArrowDownOutlined />
                    </div>
                    <div className="relative">
                      <ArrowRightOutlined />
                      <ArrowRightOutlined />
                    </div>
                    <img className="fit-image large" src={hw2} alt="" />
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


export default Advanced3;