import React from 'react';
import cl from './Main.module.css';
import basket from '../../assets/icons/basket.png';
import search from '../../assets/icons/search.png';
import user from '../../assets/icons/user.png';
import like from '../../assets/icons/like.png';
import burger from '../../assets/icons/burger.png'


const Main = () => {


    return (
    <>
<header className={cl.header}>
  <div className={cl.container}>
     <div className={cl.flex_box}>

<div className={cl.logo}> WB </div>

   <div className={cl.navigate}>
<a className={cl.nav_link} style={{color: 'orange'}} href='/'>TRADE IN</a>
<a className={cl.nav_link} href='/'>ВЕЛОСИПЕДЫ</a>
<a className={cl.nav_link} href='/'>ЗАПЧАСТИ</a>
<a className={cl.nav_link} href='/'>ЭКИПИРОВКА</a>
<a className={cl.nav_link} href='/'>АКССЕСУАРЫ</a>
<a className={cl.nav_link} href='/'>ВЕЛОСТАНКИ</a>

<a className={cl.icon_link} href='/'><img src={search} alt='alt'/></a>
<a className={cl.icon_link} href='/'><img src={user} alt='alt'/></a>
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
  <p>Экстремальное вождение на горном велосипеде</p>

</div>
<div className={cl.block2}>
<p>Велосипеды для профессионалов</p>
</div>
<div className={cl.block3}>
<p> Долгая поездка на шоссейном велосипеде</p>
</div>
</div>
</section>
<section className={cl.section2}>
<div className={cl.partner}>

</div>
</section>
    </>
  )
}

export default Main;