import React, { Component } from 'react';
import banner from './imagesCSS6/banner.jpg';
import flexDirection from './imagesCSS6/flex-direction.svg';
import flexWrap from './imagesCSS6/flex-wrap.svg';
import justifyContent from './imagesCSS6/justify-content.svg';
import {
    AlertOutlined,
} from '@ant-design/icons';
import './stylesCSS6/_stylesCSS6.scss';
import SyntaxHighLighter from 'react-syntax-highlighter';
class CSS6 extends Component {
    render() {
        return (
            <div>
                <h1>Flex. Верстка layout по макету. Flex-froggy</h1>
                <div className="banner-wrapper text-center mt-5"><img src={banner} alt="" /></div>
                <section>
                    <div className="container">
                        <h2 className="text-center mt-3">
                            Зачем, а главное - для чего?
                        </h2>
                        <div> Основная идея <span className="border border-1 p-1">flex</span>  заключается в том, чтобы дать контейнеру возможность изменять ширину / высоту (и порядок) своих элементов, чтобы наилучшим образом заполнить доступное пространство (в основном для размещения всех типов устройств отображения и размеров экрана). <span className="border border-1 p-1">flex</span> расширяет элементы, чтобы заполнить доступное свободное пространство, или сжимает их, чтобы предотвратить переполнение.</div>
                    </div>

                </section>
                <section>
                    <div className="container">
                        <h2 className="text-center mt-3">
                            Fexbox свойства
                        </h2>
                        <p className="text-center mt-3 fw-bold text-decoration-underline">
                            display
                        </p>
                        <div className="code ">
                            <SyntaxHighLighter language="css">
{`.container { 
display: flex; /* or inline-flex */
}`}
                            </SyntaxHighLighter>
                        </div>
                        <p> Определляет флекс контейнер. Все дочерние элементы будут пытаться выстроиться в линию по горизонтали</p>
                        <p className="text-center mt-3 fw-bold text-decoration-underline">
                        flex-direction
                        
                        </p>
                        <div className="text-center">
                        <img src={flexDirection} alt=""/>
                        </div>
                      
                        <div className="code ">
                            <SyntaxHighLighter language="css">
{`.container { 
flex-direction: row | row-reverse | column | column-reverse;
}`}
                            </SyntaxHighLighter>
                        </div>
                        <p> Это свойство устанавливает главную ось, тем самым определяя направление размещения гибких элементов в гибком контейнере. устанавливает расположение дочерних элементов в виде горизонтальных строк, либо вертикальных столбцов.</p>
                        <p className="text-center mt-3 fw-bold text-decoration-underline">
                        flex-wrap
                        
                        </p>
                        <div className="text-center">
                        <img src={flexWrap} alt=""/>
                        </div>
                      
                        <div className="code ">
                            <SyntaxHighLighter language="css">
{`.container { 
flex-wrap: nowrap | wrap | wrap-reverse;
}`}
                            </SyntaxHighLighter>
                        </div>
                        <p> По умолчанию все гибкие элементы будут пытаться уместиться в одну строку. Вы можете изменить это и разрешить перенос элементов по мере необходимости с помощью этого свойства.</p>
                        <p className="text-center mt-3 fw-bold text-decoration-underline">
                        flex-flow
                        
                        </p>
                        <div className="text-center">
                        </div>
                      
                        <div className="code ">
                            <SyntaxHighLighter language="css">
{`.container { 
flex-flow: column wrap;
}`}
                            </SyntaxHighLighter>
                        </div>
                        <p> Это сокращение для <span className="font-monospace">flex-direction</span>  и <span className="font-monospace">flex-wrap</span> свойств, которые вместе определяют основные и поперечные оси гибкого контейнера </p>
                        <p className="text-center mt-3 fw-bold text-decoration-underline">
                        justify-content
                        
                        </p>
                        <div className="text-center">
                        <img src={justifyContent} alt=""/>
                        </div>
                      
                        <div className="code ">
                            <SyntaxHighLighter language="css">
{`.container { 
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
}`}
                            </SyntaxHighLighter>
                        </div>
                        <p> Это свойство определяет выравнивание по главной оси. Оно помогает распределить лишнее свободное пространство, когда все дочерние элементы имеют фиксированную ширину, либо гибкие, но достигли своего максимального размера. Он также дает некоторый контроль над выравниванием элементов, когда они выходят за пределы строки.</p>
                        <ul class="list-group">
  <li class="list-group-item"><span className="font-monospace">flex-start </span>(по умолчанию): элементы перемещаются к началу контейнера</li>
  <li class="list-group-item"><span className="font-monospace">flex-end</span> : элементы перемещаются к концу контейнера</li>
  <li class="list-group-item"><span className="font-monospace">space-between</span>: дочерние элементы равномерно распределяются в строке; первый элемент находится в начале строки, последний элемент в конце строки</li>
  <li class="list-group-item"><span className="font-monospace">space-around</span>: элементы равномерно распределены в строке с равным пространством вокруг них</li>
  <li class="list-group-item"><span className="font-monospace">space-evenly</span>: элементы распределяются таким образом, чтобы расстояние между любыми двумя элементами (и расстояние до краев) было одинаковым</li>
</ul>
<hr />
<p className="mt-3"> <AlertOutlined/> Обратите внимание, что поддержка этих значений браузером имеет нюансы. Например, <span className="font-monospace">space-between </span> некоторые версии Edge никогда не поддерживали, а <span className="font-monospace">start / end / left / right </span> еще нет в Chrome. У MDN  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content">есть подробные графики</a>. Самые безопасные значения <span className="font-monospace">flex-start, flex-endи center</span>.</p>
<hr />              
                    </div>
                </section>

            </div>
        );
    }
}


export default CSS6;