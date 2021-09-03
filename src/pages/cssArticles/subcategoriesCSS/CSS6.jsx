import React, { Component } from 'react';
import banner from './imagesCSS6/banner.jpg';
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
                    <div className="code">
                    <SyntaxHighLighter language="css">
{`.container { 
display: flex; /* or inline-flex */
      }`}
</SyntaxHighLighter>
                        </div>
                  
                    </div>
                   
                </section>

            </div>
        );
    }
}


export default CSS6;