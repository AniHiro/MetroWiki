import React, { useEffect, useState } from "react";
import MonsterSidebar from "../components/MonsterSidebar";
import "../styles/GameMonster.scss";

import "../../public/Sounds/metro2033/Guardian/Watchman_aggr_1.ogg"



export default function GameMonster2033() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [activeMonster, setActiveMonster] = useState<string>("upyr");

    const openImage = (src: string) => setSelectedImage(src);
    const closeImage = () => setSelectedImage(null);

    useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      let mostVisible: { id: string; ratio: number } | null = null;

      entries.forEach((entry) => {
        const ratio = entry.intersectionRatio;
        if (!mostVisible || ratio > mostVisible.ratio) {
          mostVisible = { id: (entry.target as HTMLElement).id, ratio };
        }
      });

      if (mostVisible) {
        setActiveMonster(mostVisible.id);
      }
    },
    { threshold: 0.2 }
  );

  const sections = document.querySelectorAll<HTMLElement>(".monster-content");
  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
    }, []);

    return (
        <div className="monster-page">
             <main className="monster-list">

            <section className="monster-content" id="upyr">
                <h1>Упырь</h1>
                <img src="../../public/monster2033/2033_Nosach_samec.webp" alt="Monster Name" className="monster-img"/>
                <section>
                    <h2>Происхождение</h2>
                    <p>Неизвестно точно, от кого мутировали упыри. Скорее всего, это помесь свиньи и крота, 
                       поскольку упырьи самки — носачи — издают характерный для свиней визг.
                    </p>
                </section>

                <section>
                    <h2>Описание</h2>
                    <p>Большое и жилистое существо, ростом под два метра, имеющее серо-розовую
                       окраску и складчатую кожу, полностью обделённую шерстью. За счёт мускулистых и когтистых 
                       трёхпалых передних лап упырь может передвигаться с колоссальной скоростью, будь то охота 
                       или защита территории. Место обитания упырей — заброшенные тоннели, шахты, пещеры, 
                       катакомбы или мосты. Именно в них они могут чувствовать себя как дома, умело лавируя вдоль 
                       стен. Упыри имеют заострённый нос, очень похожий на свиной пятачок, или нос летучих мышей-
                       вампиров, а бритвенно-острые зубы, огромные когти почти не оставляют врагам шанса на 
                       выживание. Охотится данный мутант почти всегда в группах, зачастую подавляя жертву своим
                       количеством.
                    </p>
                </section>

                <section>
                    <h2>Звуки</h2>
                    <div className="section-divider"></div>

                    <div className="sound-item">
                        <p className="sound-title">Орда</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Ghoul/Nosachi_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Атака</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Ghoul/Nos_male_attack_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Удар</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Ghoul/Nosach_t3_hit_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Смерть</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Ghoul/Nosach_t4_death_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Дыхание</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Ghoul/Nosach_movement_0.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Рёв</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Ghoul/Nosach_voice_0.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                </section>

                <section>
                    <h2>Галерея</h2>
                    <div className="section-divider"></div>
                    <div className="monster-gallery">

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Ghoul/2033_Nosach_samec.webp")}>
                           <img src="../../public/Gallery/metro2033/Ghoul/2033_Nosach_samec.webp" alt="Классический" />
                           <p className="gallery-title">Классический</p>
                        </div>

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Ghoul/2033_Nosach_samec_2.webp")}>
                           <img src="../../public/Gallery/metro2033/Ghoul/2033_Nosach_samec_2.webp" alt="Классический" />
                           <p className="gallery-title">Шерстяной (частично)</p>
                        </div>

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Ghoul/2033_Nosach_samec_dark.webp")}>
                           <img src="../../public/Gallery/metro2033/Ghoul/2033_Nosach_samec_dark.webp" alt="Классический" />
                           <p className="gallery-title">Тёмный</p>
                        </div>

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Ghoul/2033_Nosach_samec_fur.webp")}>
                           <img src="../../public/Gallery/metro2033/Ghoul/2033_Nosach_samec_fur.webp" alt="Классический" />
                           <p className="gallery-title">Меховой</p>
                        </div>

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Ghoul/2033_Nosach_samec_insect.webp")}>
                           <img src="../../public/Gallery/metro2033/Ghoul/2033_Nosach_samec_insect.webp" alt="Классический" />
                           <p className="gallery-title">Насекомоподобный</p>
                        </div>

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Ghoul/2033_Nosach_samec_strong.webp")}>
                           <img src="../../public/Gallery/metro2033/Ghoul/2033_Nosach_samec_strong.webp" alt="Классический" />
                           <p className="gallery-title">Сильный</p>
                        </div>
                    </div>
                </section>
            </section>

            <hr className="monster-divider" />

            <section className="monster-content" id="nosach">
                <h1>Носач</h1>
                <img src="../../public/Gallery/metro2033/Gohol(female)/2033_Nosach_female.webp" alt="Monster Name" className="monster-img"/>
                <section>
                    <h2>Происхождение</h2>
                    <p>Вполне вероятно, что носач является по большей части помесью свиньи, 
                       поскольку издают характерное для них похрюкивание, а во время атаки — визжат подобно
                        своим четвероногим предшественникам. Обитает преимущественно в туннелях, но
                        периодически встречается и на поверхности.
                    </p>
                </section>

                <section>
                    <h2>Описание</h2>
                    <p>Внешность носача тяжело спутать с другими мутантами, ведь даже без фонаря его
                       легко определить. Место обитания носачей — заброшенные тоннели, шахты, пещеры и
                       катакомбы. Хотя некоторых особей можно встретить и в городских кварталах. Главным
                       признаком самки является длинный загнутый нос, лишь отдалённо напоминающий свиной 
                       пятачок. Шерсти у носача как таковой нет, а серо-розовая кожа начинает блестеть 
                       и переливаться при контакте со светом. Кроме того, мутант имеет крылья, которыми 
                       практически не пользуется то ли из-за большого веса, то ли из-за тесных помещений, 
                       но, как и самцы, может с легкостью лазать по стенам. Издают пронзающий инфразвук, 
                       который способен оглушить любое существо, тем самым введя его в лёгкий шок и 
                       растерянность. На брюхе имеется два ряда сосков, которыми самка вскармливает 
                       своё потомство.
                    </p>
                </section>

                <section>
                    <h2>Звуки</h2>
                    <div className="section-divider"></div>

                    <div className="sound-item">
                        <p className="sound-title">Брачный зов</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Ghoul(female)/Nosach_distant_idle_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Атака</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Ghoul(female)/Nosach_sonic_attack.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title"></p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Ghoul(female)/Nosach_sonic_attack_effect.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                </section>

                <section>
                    <h2>Галерея</h2>
                    <div className="section-divider"></div>
                    <div className="monster-gallery">

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Gohol(female)/2033_Nosach_female.webp")}>
                           <img src="../../public/Gallery/metro2033/Gohol(female)/2033_Nosach_female.webp" alt="Самка(релиз)" />
                           <p className="gallery-title">Самка(релиз)</p>
                        </div>

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Gohol(female)/2033_Nosach_female_375.webp")}>
                           <img src="../../public/Gallery/metro2033/Gohol(female)/2033_Nosach_female_375.webp" alt="Классический" />
                           <p className="gallery-title">Самка (сбоника 375)</p>
                        </div>

                    </div>
                </section>
            </section>

            <hr className="monster-divider" />

            <section className="monster-content" id="Guardian">
                <h1>Страж</h1>
                <img src="../../public/Gallery/metro2033/Guardian/2033_Murzik.webp" alt="Monster Name" className="monster-img"/>
                <section>
                    <h2>Происхождение</h2>
                    <p>
                        Согласно большинству фактов, стражи произошли от обыкновенных крыс, на что указывает 
                        характерный хвост. Однако некоторые считают, что «предками» этих тварей стали собаки 
                        и кошки.
                    </p>
                </section>

                <section>
                    <h2>Описание</h2>
                    <p>
                        После войны стражи стали одним из самых первых видов мутантов, расплодившихся в Москве. 
                        Согласно большинству фактов, стражи произошли от крыс, на что указывает характерный хвост. 
                        Однако некоторые считают, что «предками» этих тварей стали собаки и кошки.
                    </p>

                    <p>
                        Детёныши стражей лысы и имеют кожу розоватого цвета. Слепы и слабы, потому не 
                        представляют никакой опасности. Взрослые особи обладают гибким, мускулистым телом, 
                        обильным шерстяным покровом, длинными лапами и маленькой, но сильной челюстью. Они имеют 
                        самый разный окрас: чёрный, коричневый, серый и даже белый.
                    </p>

                    <p>
                        Их редко можно встретить в заброшенных туннелях, ведь они отдают предпочтение зданиям на 
                        поверхности, где мутанты устраивают себе надёжные убежища, в которых не место любому незваному 
                        гостю.
                    </p>

                    <p>
                        Живут и передвигаются довольно крупными стаями, в которых насчитывается от нескольких десятков 
                        особей до нескольких сотен. Данные мутанты являются крайне территориальными существами, и в случае, 
                        если на их территории окажется незваный гость, то они будут яростно её защищать, однако, если он 
                        тут же покинет их дом, то будут шансы, что стражи оставят его в покое.
                    </p>

                    <p>
                        Стражи всегда действуют осторожно, стремясь сохранить основной костяк стаи, высылая вперёд своих 
                        разведчиков. Если неприятель силен, то они отступают. В случае опасности страж встаёт на задние 
                        лапы, начинает выть, и на его зов прибегают сородичи. На врага нападают только имея значительное 
                        численное преимущество либо же сильно оголодав или будучи атакованными.
                    </p>

                    <p>
                        В целом, благодаря высокому уровню интеллекта, передвижению группами, в сочетании с огромной 
                        физической силой и ловкостью, стражи по праву могут считаться одними из самых опасных мутантов 
                        Москвы. По уровню интеллекта уступают лишь библиотекарям и Чёрным.
                    </p>

                </section>

                <section>
                    <h2>Звуки</h2>
                    <div className="section-divider"></div>

                    <div className="sound-item">
                        <p className="sound-title">Агрессия</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Guardian/Watchman_aggr_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title"></p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Guardian/Watchman_aggressive_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Атака</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Guardian/Watchman_attack_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Удар</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Biomass/Biomassa_hit_2.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Вой</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Biomass/Biomassa_hit_2.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>




                </section>

                <section>
                    <h2>Галерея</h2>
                    <div className="section-divider"></div>
                    <div className="monster-gallery">

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Guardian/2033_Murzik.webp")}>
                           <img src="../../public/Gallery/metro2033/Guardian/2033_Murzik.webp" alt="Самка(релиз)" />
                           <p className="gallery-title">Классический</p>
                        </div>

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Guardian/2033_Murzik_green.webp")}>
                           <img src="../../public/Gallery/metro2033/Guardian/2033_Murzik_green.webp" alt="Самка(релиз)" />
                           <p className="gallery-title">Зелёный</p>
                        </div>

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Guardian/2033_Murzik_grey.webp")}>
                           <img src="../../public/Gallery/metro2033/Guardian/2033_Murzik_grey.webp" alt="Самка(релиз)" />
                           <p className="gallery-title">Серый</p>
                        </div>

         





                    </div>
                </section>
            </section>

            <hr className="monster-divider" />

            <section className="monster-content" id="demon">
                <h1>Демон</h1>
                <img src="../../public/Gallery/metro2033/Demon/2033_Demon.webp" alt="Monster Name" className="monster-img"/>
                <section>
                    <h2>Происхождение</h2>
                    <p>
                        Демоны по своему строению напоминают летучих мышей или некоторых хищных птиц.
                    </p>
                </section>

                <section>
                    <h2>Описание</h2>
                    <p>
                        Тупорылая морда, развитые грудные мышцы, серая лысая или с редкими волосинками 
                        кожа, длинные и острые когти. У некоторых особей даже присутствует клюв. Имеют 
                        крылья для полета (у некоторых особей есть дыры в крыльях).
                    </p>
                </section>

                <section>
                    <h2>Звуки</h2>
                    <div className="section-divider"></div>

                    <div className="sound-item">
                        <p className="sound-title">Атака</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Demon/Demon_attack_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Удар</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Demon/Demon_hit_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Смерть</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Demon/Demon_death_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                </section>

                <section>
                    <h2>Галерея</h2>
                    <div className="section-divider"></div>
                    <div className="monster-gallery">

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Demon/2033_Demon.webp")}>
                           <img src="../../public/Gallery/metro2033/Demon/2033_Demon.webp" alt="Самка(релиз)" />
                           <p className="gallery-title">Классический</p>
                        </div>

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Demon/2033_Demon_dark.webp")}>
                           <img src="../../public/Gallery/metro2033/Demon/2033_Demon_dark.webp" alt="Классический" />
                           <p className="gallery-title">Тёмный</p>
                        </div>

                    </div>
                </section>
            </section>
           
           <hr className="monster-divider" />

            <section className="monster-content" id="librarian">
                <h1>Библиотекарь</h1>
                <img src="../../public/Gallery/metro2033/Librarian/2033_Bibliotekar.webp" alt="Monster Name" className="monster-img"/>
                <section>
                    <h2>Происхождение</h2>
                    <p>Ходит мнение, что библиотекари произошли от горилл, сбежавших из зоопарка 
                       спустя некоторое время после Катаклизма. Это доказывает схожая внешность
                       мутантов, их походка, огромные лапы и то, как они величаво бьют ими себя 
                       в грудь. При этом все, кто имел дело с библиотекарями и выжил, считают, 
                       что библиотекари — не звери, а более разумные существа.
                    </p>
                </section>

                <section>
                    <h2>Описание</h2>
                    <p>Выглядит как деформированный гуманоид, своим внешним видом напоминающий 
                       обычных горилл с длинными и тонкими лапами. На покрытой серебристой шерстью 
                       голове спрятаны треугольные уши, а острые акульи зубы прикрывает тонкая губа, 
                       сливаемая с носом. Начиная с Metro: Last Light мутант прибавил в мышечной 
                       массе, полностью лишился волосяного покрова, а его пасть стала больше напоминать 
                       ротовой аппарат Чужого. Библиотекари противостоят всему, что окажется в их 
                       поле зрения и территории. Свои признаки агрессии они демонстрируют рёвом и 
                       обнажая зубы путём задирания верхней губы, как это делают большинство современных 
                       приматов. Будучи крайне опасным и хитрым противником, библиотекарь способен в 
                       одиночку одолеть демона и группу хорошо вооружённых сталкеров.
                    </p>
                </section>

                <section>
                    <h2>Звуки</h2>
                    <div className="section-divider"></div>

                    <div className="sound-item">
                        <p className="sound-title">Храп</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Librarian/Bib_slip_0.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Критическое ранение</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Librarian/Crit_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Вой</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Librarian/Idle_far_0.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Расслабленный</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Librarian/Relax_look_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Удар</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Librarian/Udar_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Напряжённый</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Librarian/Strong_look_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                </section>

                <section>
                    <h2>Галерея</h2>
                    <div className="section-divider"></div>
                    <div className="monster-gallery">

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Librarian/2033_Bibliotekar.webp")}>
                           <img src="../../public/Gallery/metro2033/Librarian/2033_Bibliotekar.webp" alt="Самка(релиз)" />
                           <p className="gallery-title">Классический</p>
                        </div>

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Librarian/2033_Bibliotekar_black.webp")}>
                           <img src="../../public/Gallery/metro2033/Librarian/2033_Bibliotekar_black.webp" alt="Классический" />
                           <p className="gallery-title">Чёрный</p>
                        </div>


                    </div>
                </section>
            </section>

            <hr className="monster-divider" />

            <section className="monster-content" id="dark">
                <h1>Чёрный</h1>
                <img src="../../public/Gallery/metro2033/Black/Dark_One.webp" alt="Monster Name" className="monster-img"/>
                <section>
                    <h2>Происхождение</h2>
                    <p>
                        Доподлинно неизвестно, от какого существа произошёл данный вид мутантов, но,
                        судя по записям Артёма, Чёрные были созданы в качестве «суперсолдат» в 
                        правительственных бункерах Метро-2 за некоторое время до ядерной катастрофы 
                        как последующая ступень эволюции человека.
                    </p>
                </section>

                <section>
                    <h2>Описание</h2>
                    <p>
                        <strong>Детёныш:</strong>Голова детёныша и взрослой особи Чёрных сильно отличаются. Первая имеет
                        щупальца розоватового оттенка на месте челюсти, а вторая имеет человеческий 
                        рот и не имеет жвал. Возможно, и у детёнышей имеется ротовая полость, однако 
                        она скрыта за щупальцами, которые с возрастом рассасываются, или же вовсе 
                        отпадают. В плане телосложения они во многом копируют своих родителей. 
                        Глаза имеют зеленоватый оттенок и тонкие (как у кошек) зрачки.
                    </p>
                    <p>
                        <strong>Взрослая особь:</strong>Внешне взрослые Чёрные больше похожи на 
                        инопланетян-гуманоидов, нежели на мутантов. Они имеют чёрную лоснящуюся 
                        кожу (оттого и прозвище) и крупные глаза без белков и зрачков. Взрослая 
                        особь на две головы выше взрослого человека. Чёрные способны издавать 
                        громкий заунывный вой.
                    </p>
                </section>

                <section>
                    <h2>Звуки</h2>
                    <div className="section-divider"></div>

                    <p>Они не издают звуков</p>

                </section>

                <section>
                    <h2>Галерея</h2>
                    <div className="section-divider"></div>
                    <div className="monster-gallery">

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Black/Dark_One.webp")}>
                           <img src="../../public/Gallery/metro2033/Black/Dark_One.webp" alt="Самка(релиз)" />
                           <p className="gallery-title">Классический</p>
                        </div>



                    </div>
                </section>
            </section>

            <hr className="monster-divider" />

            <section className="monster-content" id="kikimora">
                <h1>Кикимора</h1>
                <img src="../../public/Gallery/metro2033/Kikimora/2033_Churzik.webp" alt="Monster Name" className="monster-img"/>
                <section>
                    <h2>Происхождение</h2>
                    <p>
                        Скорее всего, произошли от кошек. Отдалённо напоминают стражей, хотя у них
                         присутствует в малых количествах шерсть и они значительно меньше по своим размерам.
                    </p>
                </section>

                <section>
                    <h2>Описание</h2>
                    <p>
                        Мутант-падальщик, пожирающий трупы. Группы людей они стараются обходить или при их 
                        виде сразу прячутся в норы. Однако с лёгкостью нападают на неудачно зашедшего одинокого 
                        путника.
                    </p>
                </section>

                <section>
                    <h2>Звуки</h2>
                    <div className="section-divider"></div>

                    <div className="sound-item">
                        <p className="sound-title">Атака</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Kikimora/Churzik_attack_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Ранение</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Kikimora/Churzik_hit_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Смерть</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Kikimora/Churzik_death_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>


                </section>

                <section>
                    <h2>Галерея</h2>
                    <div className="section-divider"></div>
                    <div className="monster-gallery">

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Kikimora/2033_Churzik.webp")}>
                           <img src="../../public/Gallery/metro2033/Kikimora/2033_Churzik.webp" alt="Самка(релиз)" />
                           <p className="gallery-title">Классический</p>
                        </div>



                    </div>
                </section>
            </section>

            <hr className="monster-divider" />

            <section className="monster-content" id="Amoeba">
                <h1>Амёба</h1>
                <img src="../../public/Gallery/metro2033/Amoeba/2033_Ameba.webp" alt="Monster Name" className="monster-img"/>
                <section>
                    <h2>Происхождение</h2>
                    <p>
                        Амёбы — шары зелёно-жёлтого цвета, определённо бактериального происхождения.
                    </p>
                </section>

                <section>
                    <h2>Описание</h2>
                    <p>
                        Амёбы светятся в темноте и покрыты защитной плёнкой, не дающей ей развалиться
                        от любого механического повреждения. В центре монстра находится кислота. 
                        Амёба распыляет её, медленно превращая среду своего обитания в весьма 
                        токсичную зону.
                    </p>
                    <p>
                        Амёбы предпочитают обитать в безлюдных, пустых и иногда влажных местах.
                        Размножаются за счёт яйцекладов, которые порождают амёб с необычайной 
                        скоростью. Живут мутанты стаями, но особым интеллектом не владеют. 
                        Если подойти к ним достаточно близко - взрываются.
                    </p>
                    <p>
                        Уникальна амёба так же тем, что имеет возможность парить над землёй при 
                        этом ощущать изменения в пространстве не имея абсолютно никаких осязательных 
                        органов.
                    </p>
                </section>

                <section>
                    <h2>Звуки</h2>
                    <div className="section-divider"></div>

                    <div className="sound-item">
                        <p className="sound-title">Подготовка к атаке</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Amoeba/Ameba_attack_prepare_4.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Атака</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Amoeba/Ameba_shoot_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Ранение</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Amoeba/Demon_hit_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Взрыв</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Amoeba/Ameba_explosion.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Рождение</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Amoeba/Bubble_ameba_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Смерть</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Amoeba/Ameba_die_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>


                </section>

                <section>
                    <h2>Галерея</h2>
                    <div className="section-divider"></div>
                    <div className="monster-gallery">

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Amoeba/2033_Ameba.webp")}>
                           <img src="../../public/Gallery/metro2033/Amoeba/2033_Ameba.webp" alt="Самка(релиз)" />
                           <p className="gallery-title">Классический</p>
                        </div>



                    </div>
                </section>
            </section>

            <hr className="monster-divider" />

            <section className="monster-content" id="biomass">
                <h1>Биомасса</h1>
                <img src="../../public/Gallery/metro2033/Biomass/2033_Biomassa.webp" alt="Monster Name" className="monster-img"/>
                <section>
                    <h2>Происхождение</h2>
                    <p>
                        Во время ядерно-бактериологической войны на территорию Кремля сбросили некое
                        биологическое оружие, которое позволило памятнику архитектуры остаться целым 
                        и невредимым. Однако то самое «последствие» от удара смогло сопротивляться и 
                        уйти под землю, в помещения правительственной сети убежищ и туннелей Метро-2, 
                        и затаиться там вплоть до 2020 года. Тогда, решив вновь заявить о себе, оно 
                        проникло на правительственную станцию «Генштаб». Персонал, состоящий из военных 
                        и учёных, успели эвакуировать в Полис, а то, что впоследствии назвали «биомассой», 
                        осесть под Кремлём. Именно оно и завлекало к себе сталкеров, проходивших Красную площадь, 
                        и пожирало их. Те, кому удавалось сопротивляться зову, сваливали это на сияющие кремлёвские 
                        звёзды, манящие взор.
                    </p>
                </section>

                <section>
                    <h2>Описание</h2>
                    <p>
                        Это разумное биологическое существо представляет собой шевелящийся гигантский яйцеклад, 
                        держащимися за топливные стержни ядерного реактора. У него непонятный цвет. Палитра его 
                        бесформенной туши обладает разными оттенками. Однако, можно выделить самые преобладающие 
                        из них: серый, красный, розовый и коричневый цвет. Опасна для человека тем, что бактерии 
                        биомассы выделяют токсичные вещества, лишая человека рассудка. Ему хочется подойти поближе 
                        к биомассе, окунуться в неё.
                    </p>
                </section>

                <section>
                    <h2>Звуки</h2>
                    <div className="section-divider"></div>

                    <div className="sound-item">
                        <p className="sound-title">Атака(начало)</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Biomass/Biomassa_attack_start.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Атака(стоп)</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Biomass/Biomassa_attack_stop_1.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Смерть</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Biomass/Biomassa_death.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="sound-item">
                        <p className="sound-title">Отрывание щупальца</p>
                    <audio controls>
                        <source src="../../public/Sounds/metro2033/Biomass/Biomassa_hit_2.ogg" type="audio/mpeg"/>
                    </audio>
                    </div>




                </section>

                <section>
                    <h2>Галерея</h2>
                    <div className="section-divider"></div>
                    <div className="monster-gallery">

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Biomass/2033_Biomassa.webp")}>
                           <img src="../../public/Gallery/metro2033/Biomass/2033_Biomassa.webp" alt="Самка(релиз)" />
                           <p className="gallery-title">Классический</p>
                        </div>

                        <div className="gallery-item" onClick={() => openImage("../../public/Gallery/metro2033/Biomass/2033R_Biomassa.webp")}>
                           <img src="../../public/Gallery/metro2033/Biomass/2033R_Biomassa.webp" alt="Самка(релиз)" />
                           <p className="gallery-title">Redux</p>
                        </div>

         





                    </div>
                </section>
            </section>



            </main>


            <aside>
                <MonsterSidebar activeMonster={activeMonster} />
            </aside>
          

            {selectedImage && (
                <div className="image-modal" onClick={closeImage}>
                    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Просмотр" />
                        <button className="close-btn" onClick={closeImage}>✖</button>
                    </div>
                </div>
            )}
            </div>
    );
}