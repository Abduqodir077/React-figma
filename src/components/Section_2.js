import circle from "../img/circle.png"
import sec2_1 from "../img/sec2_1.png"
import sec2_2 from "../img/sec2_2.png"
import sec2_3 from "../img/sec2_3.png"
import sec2_4 from "../img/sec2_4.png"
import sec2_5 from "../img/sec2_5.png"

function Section_2(){
    return(
        <>
        <section className="section_2">
            <div className="circle">
                <img src={circle} alt="" />
            </div>

            <div className="sec2_imgs" >
                <div className="sec2_1" id="sec2_box1">
                    <img src={sec2_1} alt="" />
                    <p>Панорамное остекление</p>
                    <span>Идеально подходит для современных домов и лоджий. Используем надежные конструкции из качественного профиля, подхоящие под Сибирский климат</span>
                </div>
                <div className="sec2_1 sec2_pad" id="s1">
                    <img src={sec2_2} alt="" />
                    <p>Портальные конструкции</p>
                    <span>Проектирование и изготовление даже самых смелых идей. Даем гарантию до 5 лет на работы и конструкции</span>
                </div>
                <div className="sec2_1 sec2_pad" id="sec2_box1">
                    <img src={sec2_3} alt="" />
                    <p>Безрамное и выносное остекление </p>
                    <span>Остекление премиум-объектов наш профиль! Используем проверенные и инновационные методы остекления</span>
                </div>
                <div className="sec2_1 sec2_pad" id="s2">
                    <img src={sec2_4} alt="" />
                    <p>Умное стекло</p>
                    <span>Энергосбережение, защита от излучения, подстройка под интерьер и эргономика - инновации, которые мы используем</span>
                </div>
                <div className="sec2_1 sec2_pad" id="s3">
                    <img src={sec2_5} alt="" />
                    <p>Стекло в интерьере</p>
                    <span>Стеклянные ограждения, перегородки, безрамочные створки и множество других изделий, которые можем встроить в задуманный интерьер вашего дома</span>
                </div>
            </div>
        </section>
        </>
    )
}

export default Section_2;