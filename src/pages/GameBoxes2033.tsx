import React, { useEffect, useState } from "react";
import BoxesSidebar from "../components/BoxesSidebar";

import '../styles/GameBoxes2033.scss'

import '/boxes/metro2033/1.jpg'







export default function GameBoxes2033() {
    const [activeChapter, setActiveChapter] = useState("prologue");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveChapter(entry.target.id);
                    }
                });
            },
            { threshold: 0.1}
        );

        sections.forEach((s) => observer.observe(s));

        return () => {
            sections.forEach((s) => observer.unobserve(s));
        };
    }, []);

    return (
        <div className="boxes-page">
            <main className="boxes-content">
                <section id="safe">
                    <h1>Сейф № 1 и ключ № 1.</h1>
                    <p>
                        Рижская.
                    </p>
                    <p>
                        Сейф и ключ находятся в районе туалетов.
                    </p>
                    <img src="/boxes/metro2033/1.jpg" alt="" />
                    <img src="/boxes/metro2033/2.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe2">
                    <h1>Сейф № 2 и ключ № 2.</h1>
                    <p>
                        Заброшенные туннели.
                    </p>
                    <p>
                        Ключ находится в туннеле, перед сигнализацией из банок, сейф - в первой комнате, где мы проводим бой с бандитами.
                    </p>
                    <img src="/boxes/metro2033/3.jpg" alt="" />
                    <img src="/boxes/metro2033/4.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe3">
                    <h1>Сейф № 3 и ключ № 3.</h1>
                    <p>
                        Заброшенные туннели.
                    </p>
                    <p>
                        Ключ находится в круглом каменном колодце, сейф - в новом тайнике внизу напротив входа на Базар. Чтобы добраться 
                        до сейфа, необходимо вентилем перекрыть струи пара.
                    </p>
                    <img src="/boxes/metro2033/5.jpg" alt="" />
                    <img src="/boxes/metro2033/6.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe4">
                    <h1>Сейф № 4 и ключ № 4.</h1>
                    <p>
                        Базар.
                    </p>
                    <p>
                        Сейф находится сразу после охраны Базара справа в вагоне метро, ключ - дальше возле радиста.
                    </p>
                    <img src="/boxes/metro2033/7.jpg" alt="" />
                    <img src="/boxes/metro2033/8.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe5">
                    <h1>Сейф № 5 и ключ № 5.</h1>
                    <p>
                        Мертвый город.
                    </p>
                    <p>
                        Ключ находится на первом этаже справа на настенном телефоне, сейф - на втором этаже за дверью.
                    </p>
                    <img src="/boxes/metro2033/9.jpg" alt="" />
                    <img src="/boxes/metro2033/10.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe6">
                    <h1>Сейф № 6 и ключ № 6.</h1>
                    <p>
                        Мертвый город.
                    </p>
                    <p>
                        После того, как Бурбон отправит нас обходным путем, Артем должен будет пройти через здание. Ключ находится в 
                        радиоактивной комнате на первом этаже, как только зайдешь в здание, на трупе, сейф дальше перед подъемом по 
                        лестнице слева в тупичке.
                    </p>
                    <img src="/boxes/metro2033/11.jpg" alt="" />
                    <img src="/boxes/metro2033/12.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe7">
                    <h1>Сейф № 7 и ключ № 7.</h1>
                    <p>
                        Мертвый город.
                    </p>
                    <p>
                        В Мертвом городе после нахождения Бурбона будет небольшой подвальчик и мужик с ключом, а рядом окно разбито и в 
                        квартире будет сейф.
                    </p>
                    <img src="/boxes/metro2033/13.jpg" alt="" />
                    <img src="/boxes/metro2033/14.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe8">
                    <h1>Сейф № 8 и ключ № 8.</h1>
                    <p>
                        Призраки.
                    </p>
                    <p>
                        Почти в самой середине уровня в комнате справа находится сейф, после нападения мутантов, откроется дверь 
                        напротив сейфа, там будет ключ.
                    </p>
                    <img src="/boxes/metro2033/15.jpg" alt="" />
                    <img src="/boxes/metro2033/16.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe9">
                    <h1>Сейф № 9 и ключ № 9.</h1>
                    <p>
                        Линия фронта.
                    </p>
                    <p>
                        Ключ - на территории Красных, за ранеными солдатами в остатках металлического ящика на стене, сейф - после 
                        взятия ключа, спускаемся до радиоактивной воды и идем до конца туннеля.
                    </p>
                    <img src="/boxes/metro2033/17.jpg" alt="" />
                    <img src="/boxes/metro2033/18.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe10">
                    <h1>Сейф № 10 и ключ № 10.</h1>
                    <p>
                        Линия фронта.
                    </p>
                    <p>
                        Ключ и сейф находятся почти в конце уровня, справа будет вагон метро. Ключ находится в головном вагоне 
                        метропоезда, а сейф - в последнем вагоне.
                    </p>
                    <img src="/boxes/metro2033/19.jpg" alt="" />
                    <img src="/boxes/metro2033/20.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe11">
                    <h1>Сейф № 11 и ключ № 11.</h1>
                    <p>
                        Битва на дрезинах.
                    </p>
                    <p>
                        После того, как вы сойдете с дрезины, после небольшого коридора будет дверь слева. За ней комната с сейфом и 
                        ключом.
                    </p>
                    <img src="/boxes/metro2033/21.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe12">
                    <h1>Сейф № 12 и ключ № 12.</h1>
                    <p>
                        Павелецкая.
                    </p>
                    <p>
                        На станции напротив закрытого перехода с надписью "Оружейная", решетчатая дверь, там труп и 3 открытых сейфа, 
                        на стене ключ, в самой оружейной сейф.
                    </p>
                    <img src="/boxes/metro2033/22.jpg" alt="" />
                    <img src="/boxes/metro2033/23.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe13">
                    <h1>Сейф № 13 и ключ № 13.</h1>
                    <p>
                        Павелецкая.
                    </p>
                    <p>
                        Сейф увидите возле костра, после того , как с ребенком на спине дойдете до места, где он говорит, что потолок 
                        слабый, ключ чуть дальше в радиоактивной воде.
                    </p>
                    <img src="/boxes/metro2033/24.jpg" alt="" />
                    <img src="/boxes/metro2033/25.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe14">
                    <h1>Сейф № 14 и ключ № 14.</h1>
                    <p>
                        Форпост.
                    </p>
                    <p>
                        Ключ находится на крыше Форпоста, где мы можем отправить сообщение по радио.
                    </p>
                    <p>
                        Сейф находится на первом этаже Форпоста слева от выхода на Черную станцию.
                    </p>
                    <img src="/boxes/metro2033/26.jpg" alt="" />
                    <img src="/boxes/metro2033/27.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe15">
                    <h1>Сейф № 15 и ключ № 15.</h1>
                    <p>
                        Черная станция.
                    </p>
                    <p>
                        Сейф находится примерно в середине уровня в комнатке с керосинкой. Ключ - чуть дальше в туннеле с газом.
                    </p>
                    <img src="/boxes/metro2033/28.jpg" alt="" />
                    <img src="/boxes/metro2033/29.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe16">
                    <h1>Сейф № 16 и ключ № 16.</h1>
                    <p>
                        Черная станция.
                    </p>
                    <p>
                        Сейф находится примерно в середине уровня в комнатке с керосинкой, там же, где и Сейф № 15.
                    </p>
                    <p>
                        Ключ - пройти через другой проход из комнаты с сейфами в туннель метро и взять его с щитка за решеткой.
                    </p>
                    <img src="/boxes/metro2033/30.jpg" alt="" />
                    <img src="/boxes/metro2033/31.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe17">
                    <h1>Сейф № 17 и ключ № 17.</h1>
                    <p>
                        Аллея.
                    </p>
                    <p>
                        На локации Аллея, сразу после заскочившего на машину стража, справа будет еще один страж обгладывающий труп. 
                        Между Вами и ним будет небольшая расщелина. Стража можно убить метательным ножом, но вместо того, чтобы 
                        перепрыгнуть к нему, спрыгните в эту самую расщелину. Далее поверните налево и в конце Вы увидите труп на 
                        котором будет ключ. Сам сейф находится перед входом в библиотеку (не локацию, а здание на локации Аллея), 
                        слева от памятника Достоевскому, в перевернутом грузовичке.
                    </p>
                    <img src="/boxes/metro2033/32.jpg" alt="" />
                    <img src="/boxes/metro2033/33.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe18">
                    <h1>Сейф № 18 и ключ № 18.</h1>
                    <p>
                        Аллея.
                    </p>
                    <p>
                        Сейф находится в библиотеке на первом этаже справа. Ключ - на втором этаже над входом в библиотеку.
                    </p>
                    <img src="/boxes/metro2033/34.jpg" alt="" />
                    <img src="/boxes/metro2033/35.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe19">
                    <h1>Сейф № 19 и ключ № 19.</h1>
                    <p>
                        Аллея.
                    </p>
                    <p>
                        Ключ находится в подземелье с Библиотекарем, перед подъемом к архивному хранилищу. Сейф - справа от архивного 
                        хранилища.
                    </p>
                    <img src="/boxes/metro2033/36.jpg" alt="" />
                    <img src="/boxes/metro2033/37.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe20">
                    <h1>Сейф № 20 и ключ № 20.</h1>
                    <p>
                        Пещера.
                    </p>
                    <p>
                        Сейф находится сразу в начале уровня слева. Ключ - дальше по коридору подойдем к закрытой двери. Мельник 
                        попросит понажимать кнопки, запустить электричество. Слева будет комната. В ней в металлическом ящике и будет 
                        ключ.
                    </p>
                    <img src="/boxes/metro2033/38.jpg" alt="" />
                    <img src="/boxes/metro2033/39.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe21">
                    <h1>Сейф № 21 и ключ № 21.</h1>
                    <p>
                        Пещера.
                    </p>
                    <p>
                        Сейф и ключ находятся за гермозатвором, где Артем будет сражаться с пауками.
                    </p>
                    <img src="/boxes/metro2033/40.jpg" alt="" />
                    <img src="/boxes/metro2033/41.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe22">
                    <h1>Сейф № 22 и ключ № 22.</h1>
                    <p>
                        Д-6.
                    </p>
                    <p>
                        Ключ находится в небольшом помещении слева от входа в центр запуска ракет. Сейф - в центре запуска ракет в 
                        левом дальнем углу на второй полке слева. Остальные сейфы неактивные.
                    </p>
                    <img src="/boxes/metro2033/42.jpg" alt="" />
                    <img src="/boxes/metro2033/43.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="safe23">
                    <h1>Сейф № 23 и ключ № 23.</h1>
                    <p>
                        Башня.
                    </p>
                    <p>
                        На уровне Башня, после того как машину перевернут демоны, Вы с Мельником будете пробиваться к Останкинской 
                        башне. Уже почти у башни, перед входом, вы будете пробегать мимо двух больших автобусов, они будут справа от 
                        вас. Под ними лежит труп с которым можно взаимодействовать. Переверните труп и под ним будет ключ.
                    </p>
                    <p>
                        После взятия ключа, в самой башне на первом этаже, когда Мельник говорит вам идти за ним, вместо этого 
                        повернитесь налево и пройдите пока не упретесь в стену с граффити противогаза.
                    </p>
                    <img src="/boxes/metro2033/44.jpg" alt="" />
                    <img src="/boxes/metro2033/45.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="links">
                    <h1>Ссылки</h1>
                    <div className="links-buttons">
                      <a href="https://steamcommunity.com/id/Samum" target="_blank" rel="noopener noreferrer">АВТОР</a>
                    </div>
                </section>













            </main>
            <BoxesSidebar activeChapter={activeChapter} />
        </div>
    )
}