import React from 'react';
import {Link } from "react-router-dom";
import cl from './PersInfo.module.css';
import basket from '../../assets/icons/basket.png';
import search from '../../assets/icons/search.png';
import user from '../../assets/icons/user.png';
import like from '../../assets/icons/like.png';
import burger from '../../assets/icons/burger.png';


const PersInfo = () => {
return (
   <>
   <header className={cl.header}>
  <div className={cl.container}>
     <div className={cl.flex_box}>
<Link id='main' to = {'/BikeShop'}><div className={cl.logo}> WB </div></Link>

   <div className={cl.navigate}>
<a className={cl.nav_link}  href='/'>TRADE IN</a>
<a className={cl.nav_link} href='/'>ВЕЛОСИПЕДЫ</a>
<a className={cl.nav_link} href='/'>ЗАПЧАСТИ</a>
<a className={cl.nav_link} href='/'>ЭКИПИРОВКА</a>
<a className={cl.nav_link} href='/'>АКССЕСУАРЫ</a>
<a className={cl.nav_link} href='/'>ВЕЛОСТАНКИ</a>

<a className={cl.icon_link} href='/'><img src={search} alt='alt'/></a>
<Link to = {'/BikeShop/auth'} className={cl.icon_link}  ><img src={user} alt='alt'/></Link>
<a className={cl.icon_link} href='/'><img src={like} alt='alt'/></a>
<a className={cl.icon_link} href='/'><img src={basket} alt='alt'/></a>
<a className={cl.burger} href='/'><img src={burger} alt='alt'/></a>

</div>
</div>
</div>

</header>
<main>
  <div className={cl.wrapper}>
<div className={cl.menuBtn}>
  <h1 className={cl.title1}>Мой аккаунт</h1>
  <div className={cl.Btn}>
<button className={cl.btn_acc}>История заказов</button>
<button className={cl.btn_acc}>Персональные данные</button>
<button className={cl.btn_acc}>Смена пороля</button>
<button className={cl.btn_acc}>Список желаний</button>
<button className={cl.btn_acc}>Выйти</button>
  </div>
</div>
<div className={cl.persInfo}>
<h1 className={cl.title2}>Персональные Данные</h1>
<div className={cl.forma}>
  <p className={cl.text}>Имя</p>
  <input type='text' />
</div>
<div className={cl.forma}> 
  <p className={cl.text}>Фамилия</p>
  <input type="text" />
</div>
<div className={cl.forma}>
  <p className={cl.text}>Отброжаемое имя</p>
  <input type="text" />
</div>
<div className={cl.forma}>
  <p className={cl.text}>E - mail</p>
  <input type="email" />
</div>
<div className={cl.forma}>
  <p className={cl.text}>Телефон</p>
  <input type="number" />
</div>
<div className={cl.forma}>
  <p className={cl.text}>Город</p>
  <input type="text" />
</div>
<div className={cl.forma}>
  <p className={cl.text}>Улица</p>
  <input type="text" />
</div>
<div className={cl.forma}>
  <p className={cl.text}>Дом</p>
  <input type="text" />
</div>
<div className={cl.forma}>
  <p className={cl.text}>Квартира</p>
  <input type="text" />
</div>
<button className={cl.btn_Change}>Изменить</button>
</div>

  </div>

</main>

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
<a className={cl.nav_link2}  href='/'>ВЕЛОСИПЕДЫ</a>
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

export default PersInfo