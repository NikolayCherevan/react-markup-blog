import React, { Component } from 'react';
import adaptiveRespoonsive from './imagesCSS7/rwd-vs-adapt-example.gif';
import { Rnd } from 'react-rnd';
import {
    SmileOutlined,
} from '@ant-design/icons';
import './stylesCSS7/_stylesCSS7.scss';
class CSS7 extends Component {
    render() {
        return (
            <div>
                <h1>Adaptive, responsive верстка. Breakpoints. Бургер меню. Mobile first подход.</h1>
                <section>
                    <div className="container">

                        <h2 className="text-center mt-3">
                            Что значит "верстать адаптивно"?
                        </h2>
                        <div className="text-center mt-5">
                            <img src={adaptiveRespoonsive} alt="" />
                        </div>
                        <div> Приятно, когда ваш сайт выглядит одинаково хорошо на разных устройствах. В этом и вся суть <SmileOutlined /></div>
                        <p>Адаптивные, отзывчивые сайты меняют внешний вид в зависимости от ширины окна браузера, в которой они просматриваются. </p>
                        </div>
                </section>
                <section>
                    <div className="container">
                        <hr />
                        <h2 className="text-center mt-3">
                            Пример адаптивного поведения
                        </h2>
                        <p> Адаптация веб-сайтов к ширине окна браузера происходит в определенных точках</p>
                        <div className="relative">
                            <Rnd
                                default={{
                                    x: 0,
                                    y: 0,
                                    width: 500,
                                    height: 190,
                                }}

                                disableDragging={true}
                                minWidth={320}
                                minHeight={190}
                                bounds="window"
                                enableResizing={{
                                    top: false,
                                    right: true,
                                    bottom: false,
                                    left: false,
                                    topRight: false,
                                    bottomRight: false,
                                    bottomLeft: false,
                                    topLeft: false
                                }}
                            >
                                <iframe height="300" width="100%" scrolling="no" title="Adaptive Example" src="https://codepen.io/team/css-tricks/embed/RWYoYB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                    See the Pen <a href="https://codepen.io/team/css-tricks/pen/RWYoYB">
                                        Adaptive Example</a> by CSS-Tricks (<a href="https://codepen.io/team/css-tricks">@css-tricks</a>)
                                    on <a href="https://codepen.io">CodePen</a>.
                                </iframe>
                            </Rnd>
                            
                        <p className="text-center"> Пример поведения отзывчивого (responsive) блока</p>
                        <small> Для просмотра поведения блока при изменении ширины окна нажмите на кнопку <kbd>Result</kbd> и увеличивайте - уменьшайте ширину окна iframe с codepen, используя ползунок с правого края </small>
                            </div>
                        </div>
                </section>
             
                <section>
                    <div className="container">
                    <hr />
                        <h2 className="text-center mt-3">
                            Пример отзывчивого (responsive) поведения
                        </h2>
                        <p>Отзывчивые веб-сайты реагируют на размер браузера в любой момент. Независимо от ширины браузера, сайт настраивает свой макет (и, возможно, функциональность) таким образом, чтобы он оптимизировался для экрана</p>
                        <div className="relative">
                            <Rnd
                                default={{
                                    x: 0,
                                    y: 0,
                                    width: 500,
                                    height: 190,
                                }}

                                disableDragging={true}
                                minWidth={320}
                                minHeight={190}
                                bounds="window"
                                enableResizing={{
                                    top: false,
                                    right: true,
                                    bottom: false,
                                    left: false,
                                    topRight: false,
                                    bottomRight: false,
                                    bottomLeft: false,
                                    topLeft: false
                                }}
                            >
                                <iframe height="300" width="100%" scrolling="no" title="Responsive Example" src="https://codepen.io/team/css-tricks/embed/meGOWx?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                    See the Pen <a href="https://codepen.io/team/css-tricks/pen/meGOWx">
                                        Responsive Example</a> by CSS-Tricks (<a href="https://codepen.io/team/css-tricks">@css-tricks</a>)
                                    on <a href="https://codepen.io">CodePen</a>.
                                </iframe>
                            </Rnd>
                            <p className="text-center"> Пример поведения отзывчивого (responsive) блока</p>
                            </div>
                        </div>
                </section>
            </div>
        );
    }
}


export default CSS7;