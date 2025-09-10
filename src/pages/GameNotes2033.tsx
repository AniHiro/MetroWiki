import React, { useEffect, useState } from "react";
import NotesSidebar from "../components/NotesSidebar";

import '../styles/GameNotes2033.scss'

import "/notes/metro2033/3467484730_preview_Скриншот 22-04-2025 175318.jpg"








export default function GameNotes2033() {
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
        <div className="notes-page">
            <main className="notes-content">
                <section id="tower">
                    <h1>Башня (Начало)</h1>
                    <p>
                        Заметка 1:
                    </p>
                    <p>
                        Поднимаемся с Мельником по лестнице, поворачиваем налево, там будет полка на которой лежит заметка.
                    </p>
                    <img src="/notes/metro2033/3467484730_preview_Скриншот 22-04-2025 175318.jpg" alt="" />
                    <img src="/notes/metro2033/2.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="hunter">
                    <h1>Хантер</h1>
                    <p>
                        Заметка 1:
                    </p>
                    <p>
                        Заметка находится в лазарете, справа от входа.
                    </p>
                    <img src="/notes/metro2033/3.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="vdnk">
                    <h1>ВДНХ</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        Как только заспавнились смотрим вниз, там на книгах лежит первая заметка.
                    </p>
                    <img src="/notes/metro2033/4.jpg" alt="" />
                    <p>
                        Заметка 2: 
                    </p>
                    <p>
                        Вторая заметка находится в комнате отчима Артёма.
                    </p>
                    <img src="/notes/metro2033/5.jpg" alt="" />
                    <img src="/notes/metro2033/6.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="riga">
                    <h1>Рижская</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        После того как заспавнились в баре, подходим к барной стойке, там нас ждёт первая заметка.
                    </p>
                    <img src="/notes/metro2033/7.jpg" alt="" />
                    <p>
                        Заметка 2 
                    </p>
                    <p>
                        Спускаемся из бара вниз, но к мальчику не идём, а поворачиваем налево, там за углом нас будет ждать вторая 
                        заметка.
                    </p>
                    <img src="/notes/metro2033/8.jpg" alt="" />
                    <img src="/notes/metro2033/9.jpg" alt="" />
                    <p>
                        Заметка 3:
                    </p>
                    <p>
                        Теперь идём к мальчику и следуем за ним, он приведёт нас к Бурбону, за дальним столом от него лежит третья 
                        заметка.
                    </p>
                    <img src="/notes/metro2033/10.jpg" alt="" />
                    <img src="/notes/metro2033/11.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="at">
                    <h1>Заброшенные туннели</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        После того как расправились с бандитами, на щитке нас будет ждать первая заметка.
                    </p>
                    <img src="/notes/metro2033/12.jpg" alt="" />
                    <p>
                        Заметка 2 
                    </p>
                    <p>
                        С Бурбоном доходим до железных ворот которые ведут на базар и тут нам надо посмотреть налево, там в углу будет 
                        лестница, спускаемся по ней и идём к левой колоне, там будет труп а рядом с ним вторая заметка.
                    </p>
                    <img src="/notes/metro2033/13.jpg" alt="" />
                    <img src="/notes/metro2033/14.jpg" alt="" />
                    <img src="/notes/metro2033/15.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="bazaar">
                    <h1>Базар</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        Как только заспавнились сразу проходим к посту, там на ящиках нас будет ждать первая заметка.
                    </p>
                    <img src="/notes/metro2033/16.jpg" alt="" />
                    <img src="/notes/metro2033/17.jpg" alt="" />
                    <p>
                        Заметка 2 
                    </p>
                    <p>
                        Вторая заметка будет лежать у оружейника на столе.
                    </p>
                    <img src="/notes/metro2033/18.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="dc">
                    <h1>Мёртвый город</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        Как только заспавнились слева от нас будет вход наверх, аккуратно поднимаемся (так как там много растяжек) и идём 
                        до двери, проходим через неё и на столе нас ждёт первая заметка.
                    </p>
                    <img src="/notes/metro2033/19.jpg" alt="" />
                    <img src="/notes/metro2033/20.jpg" alt="" />
                    <img src="/notes/metro2033/21.jpg" alt="" />
                    <p>
                        Заметка 2 
                    </p>
                    <p>
                        Выходим с продуктового и идём в сторону первого подземного перехода, как только мы дошли до него поворачиваем 
                        налево и за угол, там нас ждёт разрушенное здание, заходим в него и натыкаемся на комнату с призраком, проходим 
                        в дверь за ним и во второй комнате справа, на столе лежит вторая заметка.
                    </p>
                    <img src="/notes/metro2033/22.jpg" alt="" />
                    <img src="/notes/metro2033/23.jpg" alt="" />
                    <img src="/notes/metro2033/24.jpg" alt="" />
                    <img src="/notes/metro2033/25.jpg" alt="" />
                    <img src="/notes/metro2033/26.jpg" alt="" />
                    <p>
                        Заметка 3:
                    </p>
                    <p>
                        Когда мы нашли Бурбона следуем за ним, но вместо того чтобы подниматься наверх по ступенькам, нам надо повернуть 
                        направо, там будет окно, забираемся в него и на столе нас ждёт третья заметка.
                    </p>
                    <img src="/notes/metro2033/27.jpg" alt="" />
                    <img src="/notes/metro2033/28.jpg" alt="" />
                    <img src="/notes/metro2033/29.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="sukharevskaya">
                    <h1>Сухаревская</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        Вылезаем из вентиляции и сразу же поворачиваем за угол, там на ящике лежит первая заметка.
                    </p>
                    <img src="/notes/metro2033/30.jpg" alt="" />
                    <img src="/notes/metro2033/31.jpg" alt="" />
                    <p>
                        Заметка 2 
                    </p>
                    <p>
                        В комнате где убили Бурбона на столе будет лежать вторая заметка.
                    </p>
                    <img src="/notes/metro2033/32.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="ghosts">
                    <h1>Призраки</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        Проходя через вагон на сиденье справа будет лежать первая заметка.
                    </p>
                    <img src="/notes/metro2033/33.jpg" alt="" />
                    <p>
                        Заметка 2 
                    </p>
                    <p>
                        После того как проедет призрачный поезд, нам надо пройти чуть вперёд пока по правой стороне мы не увидим скелет, 
                        а рядом с ним будет вторая заметка.
                    </p>
                    <img src="/notes/metro2033/34.jpg" alt="" />
                    <img src="/notes/metro2033/35.jpg" alt="" />
                    <p>
                        Заметка 3: 
                    </p>
                    <p>
                         В конце уровня перед дрезиной, край третьей заметки торчит из чемодана на полу.
                    </p>
                    <img src="/notes/metro2033/36.jpg" alt="" />
                    <img src="/notes/metro2033/37.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="turgenevskaya">
                    <h1>Тургеневская</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        От Хана с его людьми идём по прямой пока не увидим по правой стороне ступеньки наверх, поднимаемся по ним и около 
                        трупа нас ждёт заметка.
                    </p>
                    <img src="/notes/metro2033/38.jpg" alt="" />
                    <img src="/notes/metro2033/39.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="km">
                    <h1>Кузнецкий мост</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        В комнате Андрея Мастера лежит первая заметка.
                    </p>
                    <img src="/notes/metro2033/40.jpg" alt="" />
                    <p>
                        Заметка 2:
                    </p>
                    <p>
                        Вторая заметка лежит в яме в которую нам Андрей скажет прыгнуть.
                    </p>
                    <img src="/notes/metro2033/41.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="fl">
                    <h1>Линия фронта</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        В конце уровня где комната со стеллажами нам надо подойти к дальнему левому углу, там будет стоять стол, а на 
                        нём лежит заметка.
                    </p>
                    <img src="/notes/metro2033/42.jpg" alt="" />
                    <img src="/notes/metro2033/43.jpg" alt="" />                  
                </section>

                <hr className="monster-divider" />

                <section id="br">
                    <h1>Битва на дрезинах</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        После того как спрыгнули с дрезины следуйте за Павлом, на первом повороте будут стоять железные ящики, а на них 
                        будет лежать заметка.
                    </p>
                    <img src="/notes/metro2033/44.jpg" alt="" />
                    <img src="/notes/metro2033/45.jpg" alt="" />                  
                </section>

                <hr className="monster-divider" />

                <section id="depot">
                    <h1>Депо</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        После того как дрезина перевернулась, идём прямо по тоннелю в сторону вагонов, заходим в них(вход находится 
                        в конце вагонов), и идём в переднюю часть, там нас ждёт заметка.
                    </p>
                    <img src="/notes/metro2033/46.jpg" alt="" />
                    <img src="/notes/metro2033/47.jpg" alt="" />
                    <img src="/notes/metro2033/48.jpg" alt="" />                  
                </section>

                <hr className="monster-divider" />

                <section id="paveletskaya">
                    <h1>Павелецкая</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        После того как взяли кассету у умирающего командира, справа будет вход на платформу (их там два не перепутайте), 
                        поднимаемся и на кровати нас ждёт первая заметка.
                    </p>
                    <img src="/notes/metro2033/49.jpg" alt="" />
                    <img src="/notes/metro2033/50.jpg" alt="" />
                    <p>
                        Заметка 2:
                    </p>
                    <p>
                        Доходим до левой части Павелецкой и слева на повороте около лестницы сворачиваем и мы выходим к жилым вагонам, 
                        нам нужно подняться на второй этаж этих вагонов, там около трупа нас будет ждать вторая заметка.
                    </p>
                    <img src="/notes/metro2033/51.jpg" alt="" />
                    <img src="/notes/metro2033/52.jpg" alt="" />
                    <img src="/notes/metro2033/53.jpg" alt="" />
                    <p>
                        Заметка 3:
                    </p>
                    <p>
                        В комнате где мы нашли мальчика, около трупа лежит третья заметка.
                    </p>
                    <img src="/notes/metro2033/54.jpg" alt="" />
                    <img src="/notes/metro2033/55.jpg" alt="" />
                    <p>
                        Заметка 4:
                    </p>
                    <p>
                        После того как мы отдали мальчика матери, проходим дальше по тоннелю и в конце будет много людей, рядом с ними 
                        на дрезине лежит четвёртая заметка.
                    </p>
                    <img src="/notes/metro2033/56.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="outpost">
                    <h1>Форпост</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        Как только вышли наверх в левом дальнем углу будет подъём наверх, идём к нему, забираемся и спрыгиваем на трубу и 
                        бежим по ней к правой части здания, от туда потом в сторону ящиков, на одном из них будет лежать первая заметка.
                    </p>
                    <img src="/notes/metro2033/57.jpg" alt="" />
                    <img src="/notes/metro2033/58.jpg" alt="" />
                    <img src="/notes/metro2033/59.jpg" alt="" />
                    <p>
                        Заметка 2:
                    </p>
                    <p>
                        По пути к проигрывателю мы доходим до здания с двумя растяжками, и в первой комнате справа на столе лежит вторая 
                        заметка.
                    </p>
                    <img src="/notes/metro2033/60.jpg" alt="" />
                    <img src="/notes/metro2033/62.jpg" alt="" />
                    <img src="/notes/metro2033/63.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="bs">
                    <h1>Чёрная станция</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        Почти в самом начале уровня, где два фашиста разговаривают у костра нас ждёт первая заметка.
                    </p>
                    <img src="/notes/metro2033/63.jpg" alt="" />
                    <p>
                        Заметка 2:
                    </p>
                    <p>
                        Почти в самом конце уровня, чуть дальше щитка со светом нас ждёт вторая заметка.
                    </p>
                    <img src="/notes/metro2033/64.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="policy">
                    <h1>Полис</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        Первая заметка находится на полке в самом начале (на посту).
                    </p>
                    <img src="/notes/metro2033/65.jpg" alt="" />
                    <p>
                        Заметка 2:
                    </p>
                    <p>
                        Вторая заметка находится на мешках после переговоров с советом.
                    </p>
                    <img src="/notes/metro2033/66.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="alley">
                    <h1>Аллея</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        Выходим из здания и поворачиваем налево, около трупа нас ждёт первая заметка.
                    </p>
                    <img src="/notes/metro2033/67.jpg" alt="" />
                    <img src="/notes/metro2033/68.jpg" alt="" />
                    <p>
                        Заметка 2:
                    </p>
                    <p>
                        Когда Мельник и Данила будут держать дверь от нападения демона, слева от них на столе будет лежать вторая 
                        заметка.
                    </p>
                    <img src="/notes/metro2033/69.jpg" alt="" />
                    <img src="/notes/metro2033/70.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="bd">
                    <h1>Книгохранилище</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        В комнате где будет мёртвый библеотекарь на полке лежит заметка.
                    </p>
                    <img src="/notes/metro2033/71.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="archives">
                    <h1>Архивы</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        Как заспавнились, идём в следующую комнату и в левом углу комнаты на полках будет 
                        лежать заметка.
                    </p>
                    <img src="/notes/metro2033/72.jpg" alt="" />
                    <img src="/notes/metro2033/73.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="temple">
                    <h1>Храм</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        Первая заметка находится на втором этаже рядом с Ханом.
                    </p>
                    <img src="/notes/metro2033/74.jpg" alt="" />
                    <p>
                        Заметка 2:
                    </p>
                    <p>
                        Как только вышли с машины впереди нас будет бочка, на ней лежит вторая заметка.
                    </p>
                    <img src="/notes/metro2033/75.jpg" alt="" />
                    <img src="/notes/metro2033/76.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="tk">
                    <h1>Тоннель на Киевскую</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        После того как отбились от мутантов и сбежали от аномалии, спрыгиваем с дрезины 
                        и сразу поворачиваем направо и идём прямо пока не встретите скелет, около него 
                        будет лежать заметка.
                    </p>
                    <img src="/notes/metro2033/77.jpg" alt="" />
                    <img src="/notes/metro2033/78.jpg" alt="" />
                    <img src="/notes/metro2033/79.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="cave">
                    <h1>Пещера</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        Когда мы откроем первый гермозатвор и разберёмся с мутантами, в дальнем левом углу 
                        у скелета будет лежать первая заметка.
                    </p>
                    <img src="/notes/metro2033/80.jpg" alt="" />
                    <img src="/notes/metro2033/81.jpg" alt="" />
                    <p>
                        Заметка 2:
                    </p>
                    <p>
                        Вторая заметка находится в комнате где умер Борис, рядом с лифтом.
                    </p>
                    <img src="/notes/metro2033/82.jpg" alt="" />
                    <img src="/notes/metro2033/83.jpg" alt="" />
                    <p>
                        Заметка 3:
                    </p>
                    <p>
                        В середине круглой пещеры рядом со скелетом находится третья заметка.
                    </p>
                    <img src="/notes/metro2033/84.jpg" alt="" />
                    <img src="/notes/metro2033/85.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="d6">
                    <h1>Д6</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        Как только заспавнились в поезде, надо повернуть назад и пройти чуть вперёд, 
                        там по левой стороне на сиденье лежит первая заметка.
                    </p>
                    <img src="/notes/metro2033/86.jpg" alt="" />
                    <p>
                        Заметка 2:
                    </p>
                    <p>
                        В центре запуска ракет на одном из столов лежит вторая заметка.
                    </p>
                    <img src="/notes/metro2033/87.jpg" alt="" />
                    <p>
                        Заметка 3:
                    </p>
                    <p>
                        На этаже со слизнями когда мы дойдём до лифта, надо пройти чуть дальше, там на 
                        сиденье у кары нас ждёт третья заметка.
                    </p>
                    <img src="/notes/metro2033/88.jpg" alt="" />
                    <img src="/notes/metro2033/89.jpg" alt="" />
                    <p>
                        Заметка 4:
                    </p>
                    <p>
                        Когда мы извлекли стержни и запустили реактор, мы с Мельником пойдём к запасному 
                        лифту, и на входе у лифта на стене в ящике будет четвёртая заметка.
                    </p>
                    <img src="/notes/metro2033/90.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="tower2">
                    <h1>Башня (Концовка)</h1>
                    <p>
                        Заметка 1: 
                    </p>
                    <p>
                        Как только мы с Мельником поднимемся на лифте, перед нами будет лежать первая заметка.
                    </p>
                    <img src="/notes/metro2033/94.jpg" alt="" />
                    <p>
                        Заметка 2:
                    </p>
                    <p>
                        После того как мы услышали голос Чёрного, проходим в дверь с вентилем и идём 
                        направо до тех пор пока не наткнёмся на скелет, рядом будет лежать финальная 
                        вторая заметка.
                    </p>
                    <img src="/notes/metro2033/91.jpg" alt="" />
                    <img src="/notes/metro2033/92.jpg" alt="" />
                    <img src="/notes/metro2033/93.jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="links">
                    <h1>Ссылки</h1>
                    <div className="links-buttons">
                      <a href="https://steamcommunity.com/profiles/76561199439349960" target="_blank" rel="noopener noreferrer">АВТОР</a>
                    </div>
                </section>










            </main>
            <NotesSidebar activeChapter={activeChapter} />
        </div>
    )
}