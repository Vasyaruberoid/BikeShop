import React,{useState, useEffect} from 'react';
import cl from './Main.module.css';
import basket from '../../assets/icons/basket.png';
import search from '../../assets/icons/search.png';
import user from '../../assets/icons/user.png';
import like from '../../assets/icons/like.png';
import burger from '../../assets/icons/burger.png';
import bike from '../../assets/catalog/Bike.png';
import trade from '../../assets/catalog/Trade.png';
import spare from '../../assets/catalog/Spare.png';
import equipment from '../../assets/catalog/Equipment.png';
import accessories from '../../assets/catalog/Accessories.png';
import racks from '../../assets/catalog/Racks.png';
import diamon from '../../assets/tutorial/diamond.png';
import hours from '../../assets/tutorial/24-hours.png';
import settings from '../../assets/tutorial/settings.png';
import garanty from '../../assets/tutorial/sticker.png';
import ReactPlayer from 'react-player';
import {Link } from "react-router-dom";
import Modal from 'react-modal';
import {onAuthStateChanged,linkWithPopup} from 'firebase/auth';
import {auth,googleAuthProvider} from '../../firebase';


const Main = () => {
  const [authUser, setAuthUser] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        closeModal();
 
      } else {
        setAuthUser(null);
        if (!initialLoad) {
          openModal();
        }
    
      }

    linkWithPopup(auth, googleAuthProvider)
      .then(credentials => setAuthUser(credentials.user))
      .catch((e) => console.log(e));
   
        });
      
    if (initialLoad) {
      setTimeout(() => {
        setInitialLoad(false);
        if (!authUser) {
          openModal();
        }
      }, 2000);
    }
  
    return () => listen();
  }, [authUser, initialLoad,auth]);



  function openModal() {
    setIsOpen(true);
  }
  


  function closeModal() {
    setIsOpen(false);
  }
    return (
    <>
   <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={cl.modal}
      >
       <div>
        <button onClick={closeModal} className={cl.btnClose}></button>
        <h1 className={cl.titleModal}>Войти в World Bike </h1>
<div className={cl.btnGroup}>
<button className={cl.btn1}> почту / имя пользователя</button>
<button sclassName={cl.btn2}>Продолжить как в Google</button>
<button className={cl.btn3}>Продолжить в Apple</button>
<button className={cl.btn4}>Продолжить в Yahoo</button>
</div>
<div className={cl.wrapper_if}>
<span className={cl.left}></span><p className={cl.if}>Или</p><span className={cl.right}></span>
</div>
<button className={cl.btn} onClick={closeModal}>Продолжить как гость</button>

        <p className={cl.rules}>Продолжая пользоваться аккаунтом,
           относящимся к региону Russia,
            вы принимаете Условия использования и подтверждаете,
             что ознакомились с документом « Политика конфиденциальности».
        </p>
             <div className={cl.wrapper_None}>
             <p className={cl.accNone}>Ещё нету аккаунта?</p>
             <Link to = {'/BikeShop/auth'}  className={cl.btn_close}>Регистрация</Link>
             </div>
     
      </div>
      </Modal>
    <div className={cl.back}>
<header className={cl.header}>
  <div className={cl.container}>
     <div className={cl.flex_box}>

<div id='main' className={cl.logo}> WB </div>

   <div className={cl.navigate}>
<a className={cl.nav_link}  href='/'>TRADE IN</a>
<a className={cl.nav_link} href='/'>ВЕЛОСИПЕДЫ</a>
<a className={cl.nav_link} href='/'>ЗАПЧАСТИ</a>
<a className={cl.nav_link} href='/'>ЭКИПИРОВКА</a>
<a className={cl.nav_link} href='/'>АКССЕСУАРЫ</a>
<a className={cl.nav_link} href='/'>ВЕЛОСТАНКИ</a>

<a className={cl.icon_link} href='/'><img src={search} alt='alt'/></a>
<Link to = {'/BikeShop/auth'} className={cl.icon_link}><img src={user} alt='alt'/></Link>
<a className={cl.icon_link} href='/'><img src={like} alt='alt'/></a>
<a className={cl.icon_link} href='/'><img src={basket} alt='alt'/></a>
<a className={cl.burger} href='/'><img src={burger} alt='alt'/></a>

</div>
</div>
</div>

</header>

<section className={cl.section1}>
<div className={cl.title}>
<h1 className={cl.title_h1}>ЭЛЕКТРО ВЕЛОСИПЕДЫ</h1>
<p className={cl.title_text}>Cento10 Hybrid — это гоночный велосипед с помогающим педалированию электроприводом,
   который устанавливает новый,
   очень высокий стандарт для данной категории
</p>
<button className={cl.btn_title}>Подробнее</button>
</div>

<div className={cl.banners}>
<div className={cl.block1}>
  <p className={cl.text_block}>Экстремальное вождение на горном велосипеде</p>
</div>
<div className={cl.block2}>
<p className={cl.text_block}>Велосипеды для профессионалов</p>
</div>
<div className={cl.block3}>
<p className={cl.text_block}> Долгая поездка на шоссейном велосипеде</p>
</div>
</div>
</section>
</div>

<section className={cl.section2}>
 <div className={cl.partners}>
<p className={cl.partner1}></p>
<p className={cl.partner2}></p>
<p className={cl.partner3}></p>
<p className={cl.partner4}></p>
<p className={cl.partner5}></p>
<p className={cl.partner6}></p>
<p className={cl.partner7_1}></p>
</div>

 <div className={cl.new_items}>
<h1 className={cl.new_h1}>НОВИНКИ</h1>
  
  <div className={cl.wrapper_new}>
<div className={cl.new}>
  <div className={cl.wrapper}>
  <p className={cl.flag1}></p>
<p style={{color: 'red'}}>Нет в наличии</p>
  </div>
<div className={cl.card}>
  <p className={cl.img1}></p>
  <p className={cl.tutorial}>Trek Marlin 7 Matte Nautical Navy Matte Anth ATB 29 2022</p>
  <p className={cl.price}>50$</p>
</div>
</div>
<div  className={cl.new}>
  <div className={cl.wrapper}>
  <p className={cl.flag2}></p>
<p style={{color: 'red'}}> Нет в наличии</p>
  </div>
  <div className={cl.card}>
  <p className={cl.img2}></p>
  <p className={cl.tutorial}> Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021</p>
  <p className={cl.price}>150$</p>
</div>
</div>
<div  className={cl.new}>
  <div className={cl.wrapper}>
  <p className={cl.flag3}></p>
<p style={{color: 'green'}}>Есть в наличии</p>
  </div>
  <div className={cl.card}>
  <p className={cl.img3}></p>
  <p className={cl.tutorial}> Trek Verve 2 Disc Lithium Grey HYBD 2022</p>
  <p className={cl.price}>250$</p>
</div>
</div>
</div>
<p className={cl.about}>Показать всё</p>
 </div>
</section>



<section className={cl.section3}>
<div className={cl.catalog}>
<h1 className={cl.catalog_h1}>КАТАЛОГ</h1>
<div className={cl.wrapper_cat}>
  <div className={cl.Bike}>
    <a className={cl.catalog_bike} href='/'>ВЕЛОСИПЕДЫ</a>
    <img  alt='bike' src={bike}/>
  </div>
  <div className={cl.Trade_In}>
    <p className={cl.catalog_h22} >TRADE IN</p>
    <img  alt='trade' src={trade}/>
    </div>
  <div className={cl.Spare}>
    <a className={cl.catalog_h2} href='/'>ЗАПЧАСТИ</a>
    <img className={cl.spare} alt='spare' src={spare}/>
    </div> 
  <div className={cl.Equipment}>
    <a className={cl.catalog_h23} href='/'>ЭКИПИРОВКА</a>
    <img className={cl.eq} alt='Equipment' src={equipment}/>
    </div>
  <div className={cl.Accessories}>
    <img alt='Accessories' src={accessories}/>
    <a className={cl.catalog_h2} href='/'>АКССЕСУАРЫ</a>
    </div>
  <div className={cl.Bike_racks}>
    <a className={cl.catalog_h24} href='/'>ВЕЛОСТАНКИ</a>
    <img className={cl.rack} alt='racks' src={racks}/>
    </div>
</div>

</div> 

</section>


<section className={cl.section4}>
<div className={cl.wrapper_4}>
<h1 className={cl.header_4}>Ничего не сможет остановить вас</h1>
<div className={cl.wrapper_title}>
<p className={cl.title_4}>Наша компания специализируется на
   продаже товаров для
   велосипедного спорта
   — велосипедов, запасных частей,
   аксессуаров и различного спортивного
   инвентаря для активного спорта и отдыха.
   </p>
   <p className={cl.about4}>Подробнее</p>
</div>
</div>
<div className={cl.player}>
<ReactPlayer width='100vw' controls height='600px' url='https://www.youtube.com/watch?v=UnTB4h-KAS0'/>
</div>

<div className={cl.tutorial4}>

<div className={cl.wrapper_container}>
<div className={cl.wrapper_tuturial4}>
<img alt='diamod' src={diamon}/>
<h2 className={cl.tuturial_h2}>Европейские бренды</h2>
</div>
<p className={cl.tutorial_text}>Представляем десятки европейских брендов</p>
</div>

<div className={cl.wrapper_container}>
  <div className={cl.wrapper_tutorial4}>
    <img width='40px' height='40px' src={garanty} alt="garannty" />
  <h2 className={cl.tuturial_h2}>Вечная гарантия</h2>
  </div>
<p className={cl.tutorial_text}>На некоторые бренды предоставляем пожизненную гарантию</p>
</div>

<div className={cl.wrapper_container}>
  <div className={cl.wrapper_tutorial4}>
    <img  width='40px' height='40px' alt='settings' src={settings}/>
  <h2 className={cl.tuturial_h2}>Предпродажная настройка</h2>
  </div>
<p className={cl.tutorial_text}>Специалисты настроят ваш велосипед наилучшим образом</p>
</div>

<div className={cl.wrapper_container}>
  <div className={cl.wrapper_tutorial4}>
    <img width='40px' height='40px' alt='24hours' src={hours}/>
    <h2 className={cl.tuturial_h2}>Доставка за 24 часа</h2>
  </div>
<p className={cl.tutorial_text}>Доставляем товар всеми популярными транспортными компаниями</p>
</div>
</div>
</section>


<section className={cl.section5}> 
<div className={cl.cont_best}>
<h1 className={cl.title5}>Лучшие модели для зимней езды</h1>

<div className={cl.wrapper_new1}>
<div className={cl.new}>
  <div className={cl.wrapper}>
  <p className={cl.flag1}></p>
<p style={{color: 'red'}}>Нет в наличии</p>
  </div>
<div className={cl.card}>
  <p className={cl.img1}></p>
  <p className={cl.tutorial}>Trek Marlin 7 Matte Nautical Navy Matte Anth ATB 29 2022</p>
  <p className={cl.price}>50$</p>
</div>
</div>
<div  className={cl.new}>
  <div className={cl.wrapper}>
  <p className={cl.flag2}></p>
<p style={{color: 'red'}}> Нет в наличии</p>
  </div>
  <div className={cl.card}>
  <p className={cl.img2}></p>
  <p className={cl.tutorial}> Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021</p>
  <p className={cl.price}>150$</p>
</div>
</div>
<div  className={cl.new}>
  <div className={cl.wrapper}>
  <p className={cl.flag3}></p>
<p style={{color: 'red'}}>Нет в наличии</p>
  </div>
  <div className={cl.card}>
  <p className={cl.img3}></p>
  <p className={cl.tutorial}> Trek Verve 2 Disc Lithium Grey HYBD 2022</p>
  <p className={cl.price}>250$</p>
</div>
</div>
</div>
</div>

</section>

<section className={cl.section6}>
  <h1 className={cl.title6}>ГОРНЫЕ ВЕЛОСИПЕДЫ</h1>
  
  <div className={cl.wrapper6}>
<div className={cl.container6}>
  <div className={cl.container6_1}>
  <h2 className={cl.title6_1}>Рама</h2>
  <div className={cl.pics1}></div>
  </div>
<p className={cl.text6}>It is a long established fact that
 a reader will be distracted by the readable content of
 </p>
</div>

<div className={cl.container6}>
  <div className={cl.container6_1}>
  <h2 className={cl.title6_2}>Бортовой компьютер</h2>
  <div className={cl.pic2}></div>
  </div>

<p className={cl.text6}>The point of using lorem ipsum is that
 it has a more-or-less normal distribution of letters
 </p>
</div>

<div className={cl.container6}>
  <div className={cl.container6_1}>
  <h2 className={cl.title6_3}>Трансмиссия</h2>
  <div className={cl.pic3}></div>
  </div>
<p className={cl.text6}>Many desktop publishing packages
 and web page editors now use lorem ipsum as 
 </p>
</div>

<div className={cl.container6}>
  <div className={cl.container6_1 }>
  <h2 className={cl.title6_4}>Оборудование</h2>
  <div className={cl.pic4}></div>
  </div>

<p className={cl.text6}>Contrary to popular belief,
 lorem ipsum is not simply random text. It has roots in
 </p>
</div>
  </div>
  <div className={cl.a6}>
    <div className={cl.pic}></div>
    <p className={cl.text66}>Горный велосипед несмотря на свое название часто и активно используются в условиях города,
       так как обладает рядом характеристик, позволяющих сделать велопрогулку максимально приятной
        и комфортной
    </p>
    <button style={{background: 'orange', borderRadius: '10px', width:'180px', height: '50px', border:'none', marginTop: '40px'}}>Каталог</button>
  </div>

</section>

<section className={cl.section7}>
<h1 className={cl.title7}>ПРЕИМУЩЕСТВА</h1>
<div className={cl.display}>
<div className={cl.rider}></div>
<div className={cl.wrapper7}>
  <div className={cl.container7}>
<h2 className={cl.title7_1}>БЕСПЛАТНАЯ ДОСТАВКА</h2>
<p className={cl.text7}>Мы пользуемся всеми популярными видами доставки</p>
<a className={cl.a7} href='/'>Подробнее</a>
  </div>
  <div className={cl.container7}>
<h2 className={cl.title7_1}>ОБМЕН И ВОЗВРАТ</h2>
<p className={cl.text7}>Все товары обеспечены фирменной гарантией фирм-производителей</p>
<a className={cl.a7} href='/'>Подробнее</a>
  </div>
  <div className={cl.container7}>
<h2 className={cl.title7_1}>ДОП. ОБСЛУЖИВАНИЕ</h2>
<p className={cl.text7}>Мы выполняем ремонт велосипеда любой сложности</p>
<a className={cl.a7} href='/'>Подробнее</a>
  </div>
  <div className={cl.container7}>
<h2 className={cl.title7_1}>ОНЛАЙН ОПЛАТА</h2>
<p className={cl.text7}>Для удобства вы можете оплатить товар банковской картой через сайт</p>
<a className={cl.a7} href='/'>Подробнее</a>
  </div>
</div>
<div className={cl.bc3}></div>
</div>
</section>

<section className={cl.section8}>
<h1 className={cl.title8}>ЭКИПИРОВКА</h1>
<div className={cl.wrapper8}>

<div className={cl.wrapper_new2}>
<div className={cl.new}>
  <div className={cl.wrapper8_1}>
<p style={{color: 'red'}}>Нет в наличии</p>
  </div>
<div className={cl.card}>
  <p className={cl.img8_1}></p>
  <p className={cl.tutorial}>Rudy Project Airstorm Lime Fluo White Shiny</p>
  <div className={cl.Price}>
  <p className={cl.price}>7 990 ₽</p>
  <p className={cl.price8}>12 236 ₽</p>
  </div>
  
</div>
</div>
<div  className={cl.new}>
  <div className={cl.wrapper8_1}>
<p style={{color: 'red'}}> Нет в наличии</p>
  </div>
  <div className={cl.card}>
  <p className={cl.img8_2}></p>
  <p className={cl.tutorial}>Rudy Project Protera Blue Orange Matt</p>
  <div className={cl.Price}>
  <p className={cl.price}>9 420 ₽</p>
  <p className={cl.price8}>12 529 ₽</p>
  </div>
</div>
</div>
<div  className={cl.new}>
  <div className={cl.wrapper8_1}>
<p style={{color: 'red'}}>Нет в наличии</p>
  </div>
  <div className={cl.card}>
  <p className={cl.img8_3}></p>
  <p className={cl.tutorial}>Rudy Project Protera Blue Orange Matt</p>
  <div className={cl.Price}>
  <p className={cl.price}>9 200 ₽</p>
  <p className={cl.price8}>10 627 ₽</p>
</div>
</div>
</div>
</div>
<p  className={cl.about8}>Показать всё</p>
</div>
</section>

<section className={cl.section9}>
<h1 className={cl.title9}>ПОСЛЕДНИЕ ОБЗОРЫ</h1>
<div className={cl.wrapper9}>
<div className={cl.container9}>
<p className={cl.view1}></p>
<div className={cl.wrapper9_1}>
  <p>25.01.2023</p>
<a style={{color: 'orange'}} href='/'>#Обзор</a>
<p className={cl.text9}>BMC Kaius 01 идеальный гоночный гравийный велосипед</p>
<p className={cl.details}>Подробнее</p></div>
</div>
<div className={cl.container9}>
<p className={cl.view2}></p>
<div className={cl.wrapper9_1}>
<p>24.01.2023</p>
<a  style={{color: 'orange', marginTop:'20px'}} href='/'>#Обзор</a>
<p className={cl.text9}>Первые поездки на новой гоночной ракете Wilier Urta SLR 100mm XC MTB, всего 9,8 кг!</p>
<p className={cl.details}>Подробнее</p>
</div>

</div>
<div className={cl.container9}>
<p className={cl.view3}></p>
<div className={cl.wrapper9_1}>
<p>25.01.2023</p>
<a style={{color: 'orange', marginTop:'20px'}} href='/'>#Обзор</a>
<p className={cl.text9}>Все новые гоночные велосипеды BMC Fourstroke XC оснащены волшебным подседельным штырем Autodrop.</p>
<p className={cl.details}>Подробнее</p>
</div>
</div>
</div>

</section>

<section className={cl.section10}>
<h1 className={cl.title10}>КОНТАКТЫ</h1>
<p className={cl.map}></p>
<div className={cl.wrapper10}>
  <div className={cl.container10}>
    <p className={cl.con1}></p>
<div>
  <p>+7 (495) 055-75-86</p>
  <p>+7 (965) 142-22-99</p>
</div>
  </div>
  <div className={cl.container10}>
    <p className={cl.con2}></p>
<div>
  <p>г. Москва, ул. Доватора, 7/8 с1</p>
</div>
  </div>
  <div className={cl.container10}>
    <p className={cl.con3}></p>
<div>
  <p>order@world-bike.ru</p>
  <p></p>
</div>
  </div>  
  <div className={cl.container10}>
    <p className={cl.con4}></p>
<div>
  <p>Без выходных </p>
  <p>10:00-20:00</p>
</div>
  </div>
</div>
</section>

<section className={cl.section11}>
<div className={cl.wrapper11}>
  <h1 className={cl.title11}>ПОДПИШИТЕСЬ НА НАШИ НОВОСТИ</h1>

  <div className={cl.form}>
<form className={cl.form11}>
  <input className={cl.input} type='text' placeholder='E - mail'/>
  <button className={cl.btnForm}>Подписаться</button>
  <input  style={{float:'left', width:'24px',height:'24px'}}  type='checkbox'/>
  <label style={{color: 'white', float:'left',fontSize:'12px'}}>Согласен на на оброботку персональных данных</label>
</form>
  </div>
</div>
<p className={cl.formPng}></p>
</section>

<footer className={cl.footer}>

  <div className={cl.wrapper_footer}>

<div className={cl.column1}>
<a href='#main'><h1 className={cl.logo2}>WB</h1></a>
<p className={cl.text12}>Компания World-bikes специализируется
 на продаже товаров для велосипедного спорта.
</p>
</div>

<div className={cl.footer_cont}>

<div className={cl.navigate2}>
  <h1  className={cl.tCatalog}>Каталог</h1>
<a className={cl.nav_link2}  href='/'>TRADE IN</a>
<a className={cl.nav_link2} href='/'>ВЕЛОСИПЕДЫ</a>
<a className={cl.nav_link2} href='/'>ЗАПЧАСТИ</a>
<a className={cl.nav_link2} href='/'>ЭКИПИРОВКА</a>
<a className={cl.nav_link2} href='/'>ВЕЛОСТАНКИ</a>
<a className={cl.nav_link2} href='/'>АКССЕСУАРЫ</a>
</div>

<div className={cl.client}>
  <h1  className={cl.tClient}>Для клиента</h1>
  <a className={cl.nav_link2} href='/'>О нас</a>
  <a className={cl.nav_link2} href='/'>Доставка и оплата</a>
  <a className={cl.nav_link2} href='/'>Блог</a>
  <a className={cl.nav_link2} href='/'>Контакты</a>
  <a className={cl.nav_link2} href='/'>Веломастерская</a>
  <a className={cl.nav_link2} href='/'>Хранения</a>
  <a className={cl.nav_link2} href='/'>Гарантии</a>
</div>

<div className={cl.contact}>
  <h1  className={cl.tContact}>Контакты</h1>

  <div className={cl.container12}>
    <p className={cl.con1}></p>
<div>
  <p>+7 (495) 055-75-86</p>
  <p>+7 (965) 142-22-99</p>
</div>
  </div>

  <div className={cl.container12}>
    <p className={cl.con2}></p>
<div>
  <p>г. Москва, ул. Доватора, 7/8 с1</p>
</div>
  </div>

  <div className={cl.container12}>
    <p className={cl.con3}></p>
<div>
  <p>order@world-bike.ru</p>
</div>
  </div>

  </div>
</div>
  </div>
      <div className={cl.solid}></div>
      <div className={cl.cube}>
      <p className={cl.garant}>© 2024 world bike</p>
      <p className={cl.garant}>Пользовательское соглашение</p>
      </div>
     
</footer>
    </>
  )
}

export default Main;