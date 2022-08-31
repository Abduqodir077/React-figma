import sec4_1 from "../img/sec4_1.png"
import sec4_2 from "../img/sec4_2.png"
import sec4_3 from "../img/sec4_3.jpg"
import sec4_4 from "../img/sec4_4.png"
import sec4_5 from "../img/sec4_5.png"
import sec4_6 from "../img/sec4_6.png"
import sec4_7 from "../img/sec4_7.png"

function Section_4(){
    return(
        <>
        <section className="secion_4">
            <p>Клиенты нас рекомендуют</p>
            <div className="sec4_1">
            <div className="sec4_box1">
                <img src={sec4_1} alt="" />
                <span>тасова</span>
            </div>
            <div className="sec4_box2">
                <img src={sec4_2} alt="" />
                <span>Людмила Протасова</span>
                <b>@ludmila</b>
            </div>
            <div className="sec4_box2">
                <img src={sec4_3} alt="" />
                <span>Игорь Быков</span>
                <b>Директор по развитию <br /> завода Demetra</b>
            </div>
            <div className="sec4_box2">
                <img src={sec4_4} alt="" />
                <span>Антон Гладков</span>
                <b>Основатель посёлка Lagom</b>
            </div>
            <div className="sec4_box2">
                <img src={sec4_5} alt="" />
                <span>Николай Юшин</span>
                <b>Основатель и руководитель Technology House</b>
            </div>
            <div className="sec4_box2">
                <img src={sec4_6} alt="" />
                <span>Людмила Протасова</span>
                <b>@ludmila</b>
            </div>
            <div className="sec4_box3">
                <img src={sec4_7} alt="" />
                <span>Людмила Протасова</span>
                <b>@ludmila</b>
            </div>
            </div>
        </section>
        </>
    )
}

export default Section_4;