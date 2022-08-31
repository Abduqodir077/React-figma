import sec3_1 from "../img/sec3_1.png"
import sec3_2 from "../img/sec3_2.png"
import sec3_3 from "../img/sec3_3.png"
import sec3_4 from "../img/sec3_4.png"
import sec3_5 from "../img/sec3_5.png"

function Section_3() {
    return (
        <>
            <section className="section_3">
                <div className="sec3_1">
                    <p>Выполнили <span> более 50 проектов</span> различной сложности  </p>
                </div>
                <div className="sec3_2">
                    <button>Остекление <br /> для факверк</button>
                    <button>Беседки и террасы</button>
                    <button>Различные типы <br /> монтажа</button>
                    <button>Панорманые стёкла</button>
                    <button>Изделия из стекла</button>
                    <button>Электрика под ключ</button>
                </div>
                <div className="sec3_3">
                    <div className="sec3_box">
                        <img src={sec3_1} alt="" />
                        <p>двери и портальные <br />  для современного </p>
                        <span>х решений - это полноразмерные,  <br /> ери с портальным типом <br /> торые мы монтировали в посёлке </span>
                    </div>
                    <div className="sec3_box2">
                        <img src={sec3_2} alt="" />
                        <p>Безрамное остекление террасы <br /> и балкона CLAROFLEX PIVOT </p>
                        <span>Монтаж скрытого профиля для увеличения обзора, установка скрытых петель, ручек и механизмой открывания. Проектирование и разработка профиля для скрытого монтажа ограждений балкона</span>
                    </div>
                    <div className="sec3_box2">
                        <img src={sec3_3} alt="" />
                        <p>Панорамные окна для загородных домов в стиле барнхаус</p>
                        <span>Панорамные окна из стекла, выполненного по технологии триплекс из ПВХ профиля и аллюминия, для разногабаритных проемов. Реализация параллельно-сдвижнуых конструкцию (портал PSK). </span>
                    </div>
                    <div className="sec3_box2">
                        <img src={sec3_4} alt="" />
                        <p>Выносной монтаж окон ПВХ в зону утеплителя </p>
                        <span>Технология выносного монтажа выдвигает окна вашего дома в зону утеплителя, что снижает теплопотери всего дома на 30% и более. Современная технология реализована на основе кронштейна KNELSEN</span>
                    </div>
                    <div className="sec3_box3">
                        <img src={sec3_5} alt="" />
                        <p>Монтаж стеклопакетов в брус для <br /> бани в стеле фахверк </p>
                        <span>Простое и надежное решение для стр <br /> стиле фахверк, которое позволяет сэк <br /> на материалах и визуально расширяет <br /> окна за счет отсутствия профилей</span>
                    </div>
                </div>
                <div className="sec3_4">
                    <button>ХОЧУ ТАКОЙ ЖЕ!</button>
                </div>
            </section>
        </>
    )
}

export default Section_3;