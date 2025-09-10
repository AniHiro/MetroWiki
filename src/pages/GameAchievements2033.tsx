import React, { useEffect, useState } from "react";
import AchievementsSidebar from "../components/AchievementsSidebar";

import '../styles/GameAchievements2033.scss'

import "/achievements/metro2033/2935791948_preview_OPKT43OKTPO43POT.png"






export default function GameAchievements2033() {
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
            { threshold: 0.3}
        );

        sections.forEach((s) => observer.observe(s));

        return () => {
            sections.forEach((s) => observer.unobserve(s));
        };
    }, []);

    return (
        <div className="achievements-page">
            <main className="achievements-content">
                <section id="spartan2033">
                    <h1>Спартанец 2033</h1>
                    <img src="/achievements/metro2033/2935791948_preview_OPKT43OKTPO43POT.png" alt="" />
                    <p>
                        В режиме "Спартанец" сложность боёв и скрытного приближены к стандартному режиму Метро: Луч Надежды, а патроны, 
                        фильтры и другие ресурсы более доступны. Этот режим идеален для игроков, предпочитающих активное действие.
                    </p>
                    <p>
                        Этот режим легче чем "Выживание".
                    </p>
                    <img src="/achievements/metro2033/2935791948_preview_-09-09--09867.png" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="survivalist2033">
                    <h1>Выживальщик 2033</h1>
                    <img src="/achievements/metro2033/2935791948_preview_']few]'f']we]f.png" alt="" />
                    <p>
                        Режим "Выживание" делающий патроны и фильтры редкостью, а перестрелки и скрытное прохождение - более сложными, 
                        позволяет игрокам по-настоящему погрузиться в выживание в мире Метро 2033, заставляя уделять особое внимание 
                        сбору ресурсов.
                    </p>
                    <p>
                       Особые отличия от режима "Спартанец"
                    </p>
                    <p>
                        1.Часы заменены на оригинальные из Метро 2033; время до того момента, когда фильтр противогаза будет израсходован,
                         показывает красная стрелка, движущаяся от цифры пять к нулю; при достижении предпоследней отметки, единицы, 
                         раздастся характерный звук механизма.
                    </p>
                    <p>
                        2. Заметно уменьшена скорость перезарядки оружия.
                    </p>
                    <p>
                        3. Уменьшена скорость зарядки батареи.
                    </p>
                    <p>
                        4. Батарея быстрее расходует заряд.
                    </p>
                    <img src="/achievements/metro2033/2935791948_preview_][T43][PT][43GRE.png" alt="" />
                </section>
                
                <hr className="monster-divider" />

                <section id="blogger">
                    <h1>Блоггер</h1>
                    <img src="/achievements/metro2033/2935791948_preview_г65г56г65г65г34.png" alt="" />
                    <p>
                        Глава: Башня - Башня.
                        Найдите все 51 страницу дневника Артёма. Все дневники разбросаны по всему игровому миру Metro 2033.
                    </p>
                    <img src="/achievements/metro2033/Без названия.jpg" alt="" />
                    <div className="video-wrapper">
                    <iframe
                      width="560"
                      height="315" 
                      src="https://www.youtube.com/embed/61ugk1xKR9Y"
                      title="YouTube video player" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    </div>
                </section>

                 <hr className="monster-divider" />

                <section id="nimble">
                    <h1>Шустрый</h1>
                    <img src="/achievements/metro2033/2935791948_preview_шустый.png" alt="" />
                    <p>
                        Глава: Хантер.
                        Защитите все 4 решётки, чтобы упыри не смогли их выломать. Если они выломают решётку, то им будет легче вас убить.
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (2).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (1).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (3).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (4).jpg" alt="" />
                    </div>
                </section>

                <hr className="monster-divider" />

                <section id="tank">
                    <h1>Танк</h1>
                    <img src="/achievements/metro2033/2935791948_preview_танк.png" alt="" />
                    <p>
                        Глава: Хантер.
                        Когда упыри будет лесть по вентиляции, вы сможете их убивать, а они до вас не смогут добраться и нанести вам урон.
                    </p>
                    <img src="/achievements/metro2033/Без названия (5).jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="generous">
                    <h1>Щедрый</h1>
                    <img src="/achievements/metro2033/2935791948_preview_щедрый.png" alt="" />
                    <p>
                        Глава: ВДНХ.
                    </p>
                    <p>
                        1. Дайте 2 пули отцу на лечение сына. Возле рынка с оружием на лавочке будут сидеть отец с ребёнком.
                    </p>
                    <img src="/achievements/metro2033/Без названия (6).jpg" alt="" />
                    <p>
                        Глава: Рижская.
                    </p>
                    <p>
                        2. Дайте 1 пулю нищему человеку. Когда мы будем спускаться с бара, слева будет сидеть мужчина на полу с тарелкой.
                    </p>
                    <img src="/achievements/metro2033/Без названия (7).jpg" alt="" />
                    <p>
                        Дайте 1 пулю маленькому мальчику. За 1 пулю, он отведёт нас к Бурбону.
                    </p>
                    <img src="/achievements/metro2033/Без названия (8).jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="burglar">
                    <h1>Взломщик</h1>
                    <img src="/achievements/metro2033/2935791948_preview_взломщик.png" alt="" />
                    <p>
                        Глава: Рижская - Башня.
                    </p>
                    <p>
                        Всего в игре 23 тайника. Для начала вам нужно будет найти ключ, чтобы открыть сейф. Найдите 15 тайников, в них 
                        лежат ценные ресурсы. Например, золотые патроны, патроны, гранаты и т.д.
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (9).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (10).jpg" alt="" />
                    </div>
                    <div className="video-wrapper">
                    <iframe
                      width="560"
                      height="315" 
                      src="https://www.youtube.com/embed/Gqtnk_ydDqI"
                      title="YouTube video player" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    </div>
                </section>

                <hr className="monster-divider" />

                <section id="stalker">
                    <h1>Сталкер</h1>
                    <img src="/achievements/metro2033/2935791948_preview_сталкер.png" alt="" />
                    <p>
                        Глава: Мёртвый город.
                    </p>
                    <p>
                        Найдите все Тайники в Мёртвом городе. Они разбросаны повсюду.
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (11).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (12).jpg" alt="" />
                    </div>
                    <div className="video-wrapper">
                    <iframe
                      width="560"
                      height="315" 
                      src="https://www.youtube.com/embed/9Efp1xy3rDk"
                      title="YouTube video player" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    </div>
                </section>
                
                <hr className="monster-divider" />

                <section id="liquidator">
                    <h1>Ликвидатор</h1>
                    <img src="/achievements/metro2033/2935791948_preview_ъ521ъх5ъх 21ъцук.png" alt="" />
                    <p>
                        Глава: Мёртвый город.
                    </p>
                    <p>
                        Когда мы разделимся с Бурбоном, мы пойдём в здание, а в здании напротив будет банкомат, лезем через него и 
                        попадаем в маленькую комнату, где очень большая радиация. Вам понадобятся аптечки. В радиации очень быстро 
                        кончается фильтр.
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (13).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (14).jpg" alt="" />
                    </div>
                </section>

                <hr className="monster-divider" />

                <section id="cleanliness">
                    <h1>Чистюля</h1>
                    <img src="/achievements/metro2033/2935791948_preview_чистюля.png" alt="" />
                    <p>
                        Глава: Любая, где можно использовать противогаз.
                    </p>
                    <p>
                        Протрите 20 раз противогаз. Кнопка "G", чтобы протереть противогаз. Протирать противогаз нужно для того, чтобы 
                        вам было видно экран.
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (15).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (16).jpg" alt="" />
                    </div>
                </section>

                <hr className="monster-divider" />

                <section id="sapper">
                    <h1>Сапер</h1>
                    <img src="/achievements/metro2033/2935791948_preview_САПЁР.png" alt="" />
                    <p>
                        Глава: Любая.
                    </p>
                    <p>
                        Обезвредьте 15 ловушке, которые приготовили для вас. Подходим к одному из концов верёвки и режем верёвку кнопкой "E".
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (17).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (18).jpg" alt="" />
                    </div>
                </section>

                <hr className="monster-divider" />

                <section id="demolitionist">
                    <h1>Подрывник</h1>
                    <img src="/achievements/metro2033/2935791948_preview_подрывник.png" alt="" />
                    <p>
                        Глава: Тургеневская.
                    </p>
                    <p>
                        Сначала можем подорвать переход.
                    </p>
                    <p>
                        Справа бежим по лестнице вверх и можем просто кинуть гранату и тем самым переход подорвётся или можем поставить 
                        гранату в угол и тем самым взорвать его.
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (19).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (20).jpg" alt="" />
                    </div>
                    <p>
                        Потом бежим подрывать туннель.
                    </p>
                    <p>
                        Бежим сначала за канистрой с бензином в конец правой части туннеля, там будет лежать канистра.
                    </p>
                    <p>
                        Затем бежим в левую часть туннеля и подрываем туннель.
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (21).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (22).jpg" alt="" />
                    </div>
                </section>

                <hr className="monster-divider" />

                <section id="mes">
                    <h1>МЧС</h1>
                    <img src="/achievements/metro2033/2935791948_preview_МЧС.png" alt="" />
                    <p>
                        Глава: Линия фронта.
                    </p>
                    <p>
                        Спускаемся в самый низ и бежим по трубам и прибегаем в спину к фашисту. Убиваем фашиста и спасаем трёх 
                        военнопленных советских солдат.
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (23).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (24).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (25).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (26).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (27).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (28).jpg" alt="" />
                    </div>
                    <img src="/achievements/metro2033/Без названия (30).jpg" alt="" />
                    <div className="video-wrapper">
                    <iframe
                      width="560"
                      height="315" 
                      src="https://www.youtube.com/embed/jf7G917POVs"
                      title="YouTube video player" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    </div>
                </section>

                <hr className="monster-divider" />

                <section id="invisible">
                    <h1>Невидимка</h1>
                    <img src="/achievements/metro2033/2935791948_preview_неведимка.png" alt="" />
                    <p>
                        Глава: Линия фронта.
                    </p>
                    <p>
                        Пройдите "Линию фронта" никого не убив. НИКОГО!
                    </p>
                    <img src="/achievements/metro2033/Без названия (31).jpg" alt="" />
                    <div className="video-wrapper">
                    <iframe
                      width="560"
                      height="315" 
                      src="https://www.youtube.com/embed/vYCulprsY0w"
                      title="YouTube video player" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    </div>
                </section>

                <hr className="monster-divider" />

                <section id="stormtrooper">
                    <h1>Штурмовик</h1>
                    <img src="/achievements/metro2033/2935791948_preview_штурмовик.png" alt="" />
                    <p>
                        Глава: Линия фронта.
                    </p>
                    <p>
                        Пройдите "Линию фронта" всех убив. ВСЕХ!
                    </p>
                    <img src="/achievements/metro2033/Без названия (32).jpg" alt="" />
                    <div className="video-wrapper">
                    <iframe
                      width="560"
                      height="315" 
                      src="https://www.youtube.com/embed/G9WcdhwkHKo"
                      title="YouTube video player" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    </div>
                </section>

                <hr className="monster-divider" />

                <section id="sniper">
                    <h1>Снайпер</h1>
                    <img src="/achievements/metro2033/2935791948_preview_снайпер.png" alt="" />
                    <p>
                        Глава: Любая, где есть люди.
                    </p>
                    <p>
                        Убиваем 30 врагов в голову. Целимся в голову с оружия и убиваем. Советую купить оптический прицел на Калашников.
                    </p>
                    <img src="/achievements/metro2033/Без названия (33).jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="sharpshooter">
                    <h1>Меткий стрелок</h1>
                    <img src="/achievements/metro2033/2935791948_preview_меткий стрелок.png" alt="" />
                    <p>
                        Глава: Любая, где есть люди.
                    </p>
                    <p>
                        Легче всего убивать во главе "Линия фронта" там и врагов много и расстояние большое. Берём в магазине оптический 
                        прицел на Калашников и бегаем всех убиваем в голову.
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (34).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (35).jpg" alt="" />
                    </div>
                </section>

                <hr className="monster-divider" />

                <section id="raider">
                    <h1>Рейдер</h1>
                    <img src="/achievements/metro2033/2935791948_preview_РЕЙДЕР.png" alt="" />
                    <p>
                        Глава: Депо.
                    </p>
                    <p>
                        Убейте врага, который будет идти по рельсам со включенным фонариком. Убейте его до того как он поднимет тревогу.
                    </p> 
                    <img src="/achievements/metro2033/Без названия (36).jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="dj">
                    <h1>Диджей</h1>
                    <img src="/achievements/metro2033/2935791948_preview_диджей.png" alt="" />
                    <p>
                        Глава: Павелецкая - Форпост.
                    </p>
                    <p>
                        После поражения над упырями, нужно будет взять у раненого солдата кассету с сообщением. Бежим во главу "Форпост", 
                        и поднимаемся через кран на самый вверх здания и видим радиопередатчик, вставляем кассету с сообщением в 
                        радиопередачик.
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (37).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (38).jpg" alt="" />
                    </div> 
                    <img src="/achievements/metro2033/Без названия (39).jpg" alt="" />
                    <div className="video-wrapper">
                    <iframe
                      width="560"
                      height="315" 
                      src="https://www.youtube.com/embed/dutGC1f8cCQ"
                      title="YouTube video player" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    </div>
                </section>

                <hr className="monster-divider" />

                <section id="merciful">
                    <h1>Милосердный</h1>
                    <img src="/achievements/metro2033/2935791948_preview_хуйх уйхуйхуй.png" alt="" />
                    <p>
                        Глава: Чёрная станция.
                    </p>
                    <p>
                        Пройдите станцию незаметно, никого не оглушая и не убивая.
                    </p>
                    <img src="/achievements/metro2033/Без названия (40).jpg" alt="" />
                    <div className="video-wrapper">
                    <iframe
                      width="560"
                      height="315" 
                      src="https://www.youtube.com/embed/MmhONj9KThU"
                      title="YouTube video player" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    </div>
                </section>

                <hr className="monster-divider" />

                <section id="third">
                    <h1>Третий</h1>
                    <img src="/achievements/metro2033/2935791948_preview_ТРЕТИЙ.png" alt="" />
                    <p>
                        Глава: Полис.
                    </p>
                    <p>
                        Выпейте 3 кружки водки в баре.
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (41).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (42).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (43).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (44).jpg" alt="" />
                    </div> 
                </section>

                <hr className="monster-divider" />

                <section id="dealer">
                    <h1>Торговец</h1>
                    <img src="/achievements/metro2033/2935791948_preview_торговец.png" alt="" />
                    <p>
                        Глава: Базар, Кузнецкий мост, Полис и т.д.
                    </p>
                    <p>
                        Покупаем всякие модификация для оружия. Например, берём самую дешёвую оптику, самый дешёвый ствол и самое дешёвое 
                        разное. Можете все модификации купить, а потом перезагрузить уровень. Все покупки суммируются даже после 
                        перезагрузки сохранения.
                    </p>
                    <img src="/achievements/metro2033/Без названия (45).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (46).jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="miser">
                    <h1>Скряга</h1>
                    <img src="/achievements/metro2033/2935791948_preview_скряга.png" alt="" />
                    <p>
                        Глава: Любая.
                    </p>
                    <p>
                        Легче всего, всё собирать и открывать сейфы, в сейфах бывает много патронов попадается.
                    </p>
                    <p>
                        Сейфы, в которых много золотых патронов:
                    </p>
                    <ul className="story-list">
                        <li>
                           Рижская - 30 золотых патронов.
                        </li>
                        <li>
                            Заброшенные тоннели - 38 золотых патронов.
                        </li>
                        <li>
                            Базар - 32 золотых патронов.
                        </li>
                        <li>
                            Мёртвый город - 38 золотых патронов.
                        </li>
                        <li>
                            Мёртвый город - 90 золотых патронов.
                        </li>
                        <li>
                            Мёртвый город - 45 золотых патронов.
                        </li>
                        <li>
                            Признаки - 24 золотых патронов.
                        </li>
                        <li>
                            Линия фронта - 150 золотых патронов.
                        </li>
                        <li>
                            Линия фронта - 150 золотых патронов.
                        </li>
                        <li>
                            Битва на дрезинах - 150 золотых патронов.
                        </li>
                        <li>
                            Павелецкая - 53 золотых патронов.
                        </li>
                        <li>
                            Павелецкая - 24 золотых патронов.
                        </li>
                        <li>
                            Форпост - 45 золотых патронов.
                        </li>
                        <li>
                            Чёрная станция - 23 золотых патронов.
                        </li>
                        <li>
                            Чёрная станция - 16 золотых патронов.
                        </li>
                        <li>
                            Аллея - 45 золотых патронов.
                        </li>
                        <li>
                            Аллея - 16 золотых патронов.
                        </li>
                        <li>
                            Архивы - 24 золотых патронов.
                        </li>
                        <li>
                            Пещера - 16 золотых патронов.
                        </li>
                        <li>
                            Пещера - 42 золотых патронов.
                        </li>
                        <li>
                            Д-6 - 225 золотых патронов.
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (47).jpg" alt="" />
                    <div className="video-wrapper">
                    <iframe
                      width="560"
                      height="315" 
                      src="https://www.youtube.com/embed/Gqtnk_ydDqI"
                      title="YouTube video player" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    </div>
                </section>

                <hr className="monster-divider" />

                <section id="tone">
                    <h1>Тонус</h1>
                    <img src="/achievements/metro2033/2935791948_preview_тонус.png" alt="" />
                    <p>
                        Глава: Любая.
                    </p>
                    <p>
                        Полечитесь 75 раз аптечкой. Аптечку можно применить когда вас ранят пули и укусы 
                        монстров. Использовать аптечку можно на букву "Q".
                    </p>
                    <p>
                        Сейфы, в которых много золотых патронов:
                    </p>
                    <img src="/achievements/metro2033/Без названия (48).jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="speculator">
                    <h1>Спекулянт</h1>
                    <img src="/achievements/metro2033/2935791948_preview_спекулянт.png" alt="" />
                    <p>
                        Глава: Базар, Кузнецкий мост, Полис и т.д.
                    </p>
                    <p>
                        Вам понадобиться примерно 500 золотых пуль. Покупаем и продаём патроны калибра 5.45 
                        (Для автоматов).
                    </p>
                    <img src="/achievements/metro2033/Без названия (49).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (50).jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="gunsmith">
                    <h1>Оружейник</h1>
                    <img src="/achievements/metro2033/2935791948_preview_оружейник.png" alt="" />
                    <p>
                        Глава: Любая.
                    </p>
                    <p>
                        Убейте одного врага со всех оружий в Metro 2033.
                    </p>
                    <p>
                        Дробовики:
                    </p>
                    <ul className="story-list">
                        <li>
                           Дуплет
                        </li>
                        <li>
                            Убойник
                        </li>
                        <li>
                            Велопал
                        </li>
                        <li>
                            Абзац
                        </li>
                    </ul>
                    <p>
                        Автоматы:
                    </p>
                    <ul className="story-list">
                        <li>
                           Ублюдок
                        </li>
                        <li>
                            Калашников
                        </li>
                        <li>
                            ВСВ
                        </li>
                        <li>
                            Калашников 2012
                        </li>
                    </ul>
                    <p>
                        Револьверы:
                    </p>
                    <ul className="story-list">
                        <li>
                           Револьвер
                        </li>
                    </ul>
                    <p>
                        Пневматические оружия:
                    </p>
                    <ul className="story-list">
                        <li>
                           Тихарь
                        </li>
                        <li>
                            Хельсинг
                        </li>
                    </ul>
                    <p>
                        Электрические оружие:
                    </p>
                    <ul className="story-list">
                        <li>
                           Рельса
                        </li>
                    </ul>
                    <p>
                        Метальные оружия:
                    </p>
                    <ul className="story-list">
                        <li>
                           Метательный нож
                        </li>
                        <li>
                            Нож
                        </li>
                        <li>
                            Зажигательная граната
                        </li>
                        <li>
                            Осколочная граната
                        </li>
                        <li>
                            Осколочная граната (Другая)
                        </li>
                    </ul>
                    <p>
                        Огненное оружие:
                    </p>
                    <ul className="story-list">
                        <li>
                           Огнемёт
                        </li>
                    </ul>
                    

                </section>

                <hr className="monster-divider" />

                <section id="boom">
                    <h1>Бум!</h1>
                    <img src="/achievements/metro2033/2935791948_preview_бум!.png" alt="" />
                    <p>
                        Глава: Любая.
                    </p>
                    <p>
                        Взрываем врагов. Советую взрывать врагов во главе "Линия фронта", там много врагов и их очень легко подрывать.
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (51).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (52).jpg" alt="" />
                    </div>                    
                </section>

                <hr className="monster-divider" />

                <section id="fire">
                    <h1>Огонь!</h1>
                    <img src="/achievements/metro2033/2935791948_preview_огонЬ!.png" alt="" />
                    <p>
                        Глава: Любая.
                    </p>
                    <p>
                        Сжигать врагов. Советую сжигать врагов во главе "Линия фронта", там много врагов и их очень легко сжигать.
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (53).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (54).jpg" alt="" />
                    </div>                    
                </section>

                <hr className="monster-divider" />

                <section id="cowboy">
                    <h1>Ковбой</h1>
                    <img src="/achievements/metro2033/2935791948_preview_ковбой.png" alt="" />
                    <p>
                        Глава: Любая.
                    </p>
                    <p>
                        Убивайте всех с револьвера.
                    </p>
                    <ul className="story-list">
                        <li>
                           Револьвер
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (55).jpg" alt="" />      
                </section>

                <hr className="monster-divider" />

                <section id="sieve">
                    <h1>Решето</h1>
                    <img src="/achievements/metro2033/2935791948_preview_решето.png" alt="" />
                    <p>
                        Глава: Любая.
                    </p>
                    <p>
                        Убивайте всех с автомата.
                    </p>
                    <p>
                        Автоматы:
                    </p>
                    <ul className="story-list">
                        <li>
                           Ублюдок
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (56).jpg" alt="" />
                    <ul className="story-list">
                        <li>
                           Калашников
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (57).jpg" alt="" />
                    <ul className="story-list">
                        <li>
                           ВСВ
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (58).jpg" alt="" />
                    <ul className="story-list">
                        <li>
                           Калашников 2012
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (59).jpg" alt="" />     
                </section>

                <hr className="monster-divider" />

                <section id="su">
                    <h1>Стендовик</h1>
                    <img src="/achievements/metro2033/2935791948_preview_стнедовик.png" alt="" />
                    <p>
                        Глава: Любая.
                    </p>
                    <p>
                        Убивайте всех с дробовика.
                    </p>
                    <p>
                        Дробовики:
                    </p>
                    <ul className="story-list">
                        <li>
                           Дуплет
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (60).jpg" alt="" />
                    <ul className="story-list">
                        <li>
                           Убойник
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (61).jpg" alt="" />
                    <ul className="story-list">
                        <li>
                           Велопал
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (62).jpg" alt="" />
                    <ul className="story-list">
                        <li>
                           Абзац
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (63).jpg" alt="" />     
                </section>

                <hr className="monster-divider" />

                <section id="draft">
                    <h1>Сквозняк</h1>
                    <img src="/achievements/metro2033/2935791948_preview_сквозняк.png" alt="" />
                    <p>
                        Глава: Любая.
                    </p>
                    <p>
                        Убивайте всех с пневматического оружия.
                    </p>
                    <p>
                        Пневматические оружия:
                    </p>
                    <ul className="story-list">
                        <li>
                           Тихарь
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (64).jpg" alt="" />
                    <ul className="story-list">
                        <li>
                           Хельсинг
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (65).jpg" alt="" />     
                </section>

                <hr className="monster-divider" />

                <section id="shock">
                    <h1>Шок</h1>
                    <img src="/achievements/metro2033/2935791948_preview_шок.png" alt="" />
                    <p>
                        Глава: Любая.
                    </p>
                    <p>
                        Убивайте всех с оружия рельса.
                    </p>
                    <ul className="story-list">
                        <li>
                           Рельса
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (66).jpg" alt="" />   
                </section>

                <hr className="monster-divider" />

                <section id="pyromaniac">
                    <h1>Пироман</h1>
                    <img src="/achievements/metro2033/2935791948_preview_пироман.png" alt="" />
                    <p>
                        Глава: Храм.
                    </p>
                    <p>
                        На пути у нас будет закрытая дверь, и затем к нам будут бежать упыри, берём огнемёт и поджигаем их.
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (67).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (68).jpg" alt="" />
                    </div>   
                </section>

                <hr className="monster-divider" />

                <section id="cas">
                    <h1>Руби и Круши!</h1>
                    <img src="/achievements/metro2033/2935791948_preview_руби и круши!.png" alt="" />
                    <p>
                        Глава: Любая.
                    </p>
                    <p>
                        Убивайте всех врагов с ножа. Во главе "Линия фронта" больше всего врагов и там можно играть по стелсу.
                    </p>
                    <img src="/achievements/metro2033/Без названия (69).jpg" alt="" />   
                </section>

                <hr className="monster-divider" />

                <section id="ninja">
                    <h1>Ниндзя</h1>
                    <img src="/achievements/metro2033/2935791948_preview_убийства метательного ножа.png" alt="" />
                    <p>
                        Глава: Любая, если у вас есть метательные ножи.
                    </p>
                    <p>
                        Выбираем в TAB'e метательные ножи и кидаем во врагов. Кинуть нож можно на букву "C".
                    </p>
                    <img src="/achievements/metro2033/Без названия (70).jpg" alt="" />   
                </section>

                <hr className="monster-divider" />

                <section id="ars">
                    <h1>Оглушительный успех</h1>
                    <img src="/achievements/metro2033/2935791948_preview_оглушительный процесс.png" alt="" />
                    <p>
                        Глава: Любая.
                    </p>
                    <p>
                        Оглушайте врагов на кнопку "E". Во главе "Линия фронта" больше всего врагов и там можно играть по стелсу.
                    </p>
                    <img src="/achievements/metro2033/Без названия (71).jpg" alt="" />   
                </section>

                <hr className="monster-divider" />

                <section id="snake">
                    <h1>Снейк</h1>
                    <img src="/achievements/metro2033/2935791948_preview_CYTQR.png" alt="" />
                    <p>
                        Глава: Любая.
                    </p>
                    <p>
                        Подкрадывайтесь сзади к врагу и убиваем его ножом. Убить врага можно зажав кнопку "V".
                    </p>
                    <img src="/achievements/metro2033/Без названия (72).jpg" alt="" />   
                </section>

                <hr className="monster-divider" />

                <section id="gh">
                    <h1>Охотник на Стражей.</h1>
                    <img src="/achievements/metro2033/2935791948_preview_охотник на стражей.png" alt="" />
                    <p>
                        Глава: Любая, где есть стражи.
                    </p>
                    <p>
                        Убивайте всех стражей. Они чем-то похожи на упырей.
                    </p>
                    <p>
                        Главы, где встречаются стражи:
                    </p>
                    <ul className="story-list">
                        <li>
                           Башня
                        </li>
                        <li>
                            Мёртвый город
                        </li>
                        <li>
                            Аллея
                        </li>
                        <li>
                            Башня
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (73).jpg" alt="" />   
                </section>

                <hr className="monster-divider" />

                <section id="gh1">
                    <h1>Охотник на упырей</h1>
                    <img src="/achievements/metro2033/2935791948_preview_охотник на упрыей.png" alt="" />
                    <p>
                        Глава: Любая, где есть упыри.
                    </p>
                    <p>
                        Убиваем всех упырей. Они чем-то похожи на стражей.
                    </p>
                    <p>
                        Главы, где встречаются упыри:
                    </p>
                    <ul className="story-list">
                        <li>
                           Хантер
                        </li>
                        <li>
                            Погоня
                        </li>
                        <li>
                            Заброшенные туннели
                        </li>
                        <li>
                            Призраки
                        </li>
                        <li>
                            Тургеневская
                        </li>
                        <li>
                            Депо
                        </li>
                        <li>
                            Павелецкая
                        </li>
                        <li>
                            Туннель на Киевскую
                        </li>
                        <li>
                            Пещера
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (74).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (75).jpg" alt="" />    
                </section>

                <hr className="monster-divider" />

                <section id="warrior">
                    <h1>Воин</h1>
                    <img src="/achievements/metro2033/2935791948_preview_воин.png" alt="" />
                    <p>
                        Глава: Любая, где есть люди.
                    </p>
                    <p>
                        Убивайте всех людей, которых увидите. Легче всего убивать во главе "Линия фронта" там врагов много.
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (76).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (77).jpg" alt="" />
                    </div>    
                </section>

                <hr className="monster-divider" />

                <section id="fth">
                    <h1>Огонь по норам</h1>
                    <img src="/achievements/metro2033/2935791948_preview_огонь по норма.png" alt="" />
                    <p>
                        Глава: Любая, где есть кикиморы.
                    </p>
                    <p>
                        Больше всего кикимор находится в главе "Павелецкая", заходим в разрушенный город и там на каждом шагу кикиморы.
                    </p>
                    <p>
                        Главы, где встречаются кикиморы:
                    </p>
                    <ul className="story-list">
                        <li>
                           Павелецкая
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (78).jpg" alt="" /> 
                </section>

                <hr className="monster-divider" />

                <section id="sh">
                    <h1>Охотник на пауков</h1>
                    <img src="/achievements/metro2033/2935791948_preview_охотник на пауков.png" alt="" />
                    <p>
                        Глава: Пещера.
                    </p>
                    <p>
                        Убивайте всех пауков, которых встретите на своём пути. Пауки боятся света, и если на них посветить фонариком, 
                        они будут убегать.
                    </p>
                    <p>
                        Главы, где встречаются пауки.
                    </p>
                    <ul className="story-list">
                        <li>
                           Пещера
                        </li>
                    </ul>
                    <img src="/achievements/metro2033/Без названия (79).jpg" alt="" /> 
                </section>

                <hr className="monster-divider" />

                <section id="hunter">
                    <h1>Охотник</h1>
                    <img src="/achievements/metro2033/2935791948_preview_охотник.png" alt="" />
                    <p>
                        Глава: Любая.
                    </p>
                    <p>
                        Убиваем всех мутантов начиная от кикимор до библиотекаря.
                    </p>
                    <ul className="story-list">
                        <li>
                           Кикимора
                        </li>
                        <li>
                            Упырь
                        </li>
                        <li>
                            Страж
                        </li>
                        <li>
                            Носач
                        </li>
                        <li>
                            Амёба (Возможно)
                        </li>
                        <li>
                            Жукопаук
                        </li>
                        <li>
                            Демон
                        </li>
                        <li>
                            Библиотекарь
                        </li>
                    </ul>
                </section>

                <hr className="monster-divider" />

                <section id="inquisitor">
                    <h1>Инквизитор</h1>
                    <img src="/achievements/metro2033/2935791948_preview_инквизитор.png" alt="" />
                    <p>
                        Глава: Аллея и Башня.
                    </p>
                    <p>
                        Убейте двух демонов.
                    </p>
                    <p>
                        Самые лёгкие убийства демонов это в главе "Аллея" и "Башня".
                    </p>
                    <p>
                        Глава: Аллея.
                    </p>
                    <p>
                        Когда мы проберёмся в здание, посмотрев в окно, к нам прилетит демон, стреляем в него всю обойму и он упадёт.
                    </p>
                    <img src="/achievements/metro2033/Без названия (80).jpg" alt="" />
                    <p>
                        Глава: Башня.
                    </p>
                    <p>
                        Когда вы будете уже на башне, демон влетит в башню прям в Мельника, стреляем в демона и убиваем.
                    </p>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (81).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (82).jpg" alt="" />
                    </div>
                    <div className="video-wrapper">
                    <iframe
                      width="560"
                      height="315" 
                      src="https://www.youtube.com/embed/cGvoKHSGTzA"
                      title="YouTube video player" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    </div>
                </section>

                <hr className="monster-divider" />

                <section id="reader">
                    <h1>Инквизитор</h1>
                    <img src="/achievements/metro2033/2935791948_preview_читатель.png" alt="" />
                    <p>
                        Глава: Книгохранилище
                    </p>
                    <p>
                        Убить библиотекаря не так трудно. Нужно запастись патронами и аптечками и просто бегать по кругу.
                    </p>
                    <p>
                        Главы, где встречаются библиотекари
                    </p>
                    <ul className="story-list">
                        <li>
                           Хантер
                        </li>
                        <li>
                            Архивы
                        </li>
                    </ul>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (83).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (84).jpg" alt="" />
                    </div>
                </section>

                <hr className="monster-divider" />

                <section id="pathologist">
                    <h1>Паталогоанатом</h1>
                    <img src="/achievements/metro2033/2935791948_preview_43643634пку.png" alt="" />
                    <p>
                        Глава: Д-6.
                    </p>
                    <p>
                        Убиваем всех амёб.
                    </p>
                    <p>
                        Амёба - это маленькие шарики, которые вылупляются из гнезда, и если вы будете стрелять по гнезду, то из него 
                        не вылупиться амёба.
                    </p>
                    <p>
                        Главы, где встречаются амёбы:
                    </p>
                    <ul className="story-list">
                        <li>
                           Д-6
                        </li>
                    </ul>
                    <div className="image-grid"> 
                    <img src="/achievements/metro2033/Без названия (85).jpg" alt="" />
                    <img src="/achievements/metro2033/Без названия (86).jpg" alt="" />
                    </div>
                </section>

                <hr className="monster-divider" />

                <section id="eme">
                    <h1>Врагов надо истреблять</h1>
                    <img src="/achievements/metro2033/2935791948_preview_врагов надо истреблять.png" alt="" />
                    <p>
                        Глава: Башня.
                    </p>
                    <p>
                        Пройдите игру на плохую концовку.
                    </p>
                    <p>
                        Запустите ракеты в логово чёрных.
                    </p>
                    <img src="/achievements/metro2033/Без названия (87).jpg" alt="" />
                </section>

                <hr className="monster-divider" />

                <section id="enlightened">
                    <h1>Просвещенный</h1>
                    <img src="/achievements/metro2033/2935791948_preview_просверщённый.png" alt="" />
                    <p>
                        Глава: Башня.
                    </p>
                    <p>
                        Пройдите игру на хорошую концовку.
                    </p>
                    <p>
                        Спасите чёрных не запускайте ракеты в логово чёрных.
                    </p>
                    <p>
                        Для того чтобы пройти игру на хорошую концовку, нужно делать хорошие дела, когда вы делаете хорошее действие, 
                        оно подсвечивается яркой искрой.
                    </p>
                    <img src="/achievements/metro2033/Без названия (88).jpg" alt="" />
                    <div className="video-wrapper">
                    <iframe
                      width="560"
                      height="315" 
                      src="https://www.youtube.com/embed/LYn_RyPm3rM"
                      title="YouTube video player" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    </div>
                </section>

                 <hr className="monster-divider" />

                <section id="links">
                    <h1>Ссылки</h1>
                    <div className="links-buttons">
                      <a href="steam://openurl/https://steamcommunity.com/profiles/76561198964272764/" target="_blank" rel="noopener noreferrer">АВТОР</a>
                      <a href="https://www.youtube.com/@KOHTPAFUCKT" target="_blank" rel="noopener noreferrer">Автор по достижениям "Блоггер, Взломщик, МЧС, Невидимка, Скряга, Милосердный, Просвещенный"</a>
                      <a href="https://www.youtube.com/@newowlder1269" target="_blank" rel="noopener noreferrer">Автор по достижению "Инквизитор"</a>
                      <a href="https://www.youtube.com/@HitchHikerAch" target="_blank" rel="noopener noreferrer">Автор по достижениям "Сталкер, Штурмовик, Диджей"</a>
                    </div>
                </section>








            </main>
            <AchievementsSidebar activeChapter={activeChapter} />
        </div>
    )
}