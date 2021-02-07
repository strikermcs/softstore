<template>
            <div class="sidebar__container">
        <div class="sidebar__header">
         <a href="#" class="sidebar__logo">
           <img src="../assets/images/logo/logo.png" width="200" height="200" alt="logo">
         </a>
          <div class="sidebar__user-account">
            <div class="sidebar__user-accout-item item-user">
               <a href="#" class="item-user__icon">
                   <img class="item-user__icon-img" src="../assets/images/icons/logout.svg" alt="">
               </a> 
               <div class="item-user__content">
                 <div class="item-user__name">DesHellArt</div>
                 <a href="#" class="item-user__user-room">Личный кабинет</a>
               </div>
               <a href="#" class="item-user__basket">
                 <img class="item-user__icon-img" src="../assets/images/icons/shopping-basket.svg" alt="">
              <span>5</span> 
              </a>
            </div>
          </div>
        </div>
        <div class="sidebar__menu menu">
          <nav class="menu__main-menu">
            <ul class="menu__list">
              <li class="menu__item" :class="{ 'is-active': isActive == 1}">
                <div class="menu__item-content">
                <a href="#" @click.prevent="menuClickHandler(1, '/')" class="menu__link">
                    <img class="menu-img" src="../assets/images/icons/key.svg" alt="">
                  <div class="menu-txt"> Продукция</div></a>
              </div>
              </li>
              <li class="menu__item" :class="{ 'is-active': isActive == 2}">
                <div class="menu__item-content">
                <a href="#"  @click.prevent="menuClickHandler(2, '/guarantee')" class="menu__link">
                   <img class="menu-img" src="../assets/images/icons/garantia.svg" alt="">
                  <div class="menu-txt">Гарантия</div>
                </a>
            </div>
              </li>
              <li class="menu__item" :class="{ 'is-active': isActive == 3}">
                <div class="menu__item-content">
               
                <a href="#" @click.prevent="menuClickHandler(3, '/pay')" class="menu__link">
                   <img class="menu-img" src="../assets/images/icons/payment-method.svg" alt="">
                 <div class="menu-txt">Оплата и доставка </div> 
                </a>
                </div>
              </li>
              <li class="menu__item " :class="{ 'is-active': isActive == 4}">
                <div class="menu__item-content">
               <a href="#" @click.prevent="menuClickHandler(4, '/exchange')" class="menu__link">
                  <img class="menu-img" src="../assets/images/icons/exchange.svg" alt="">
                <div class="menu-txt">Обмен и возврат </div> 
               </a>
              </div>
              </li>
              <li class="menu__item" :class="{ 'is-active': isActive == 5}">
                <div class="menu__item-content">
                  <a href="#" @click.prevent="menuClickHandler(5, '/about')" class="menu__link">
                  <img class="menu-img" src="../assets/images/icons/aboutus.svg" alt="">
                   <div class="menu-txt">О компании</div> 
                  </a>
                </div>
              </li>
              <li class="menu__item" :class="{ 'is-active': isActive == 6}">
                <div class="menu__item-content">
                    <a href="#" @click.prevent="menuClickHandler(6, '/contacts')" class="menu__link">
                       <img class="menu-img" src="../assets/images/icons/Contacts.svg" alt="">
                     <div class="menu-txt">Контакты</div> 
                    </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
         <div class="lang-menu">
                <div class="selected-lang">
                  <img class="lang-flag-img" src="../assets/images/lang/Russia.png" alt="">
                   <div>Русский</div>
                </div>
                <ul class="lang-list">
                    <li>
                        <a href="#" class="ua">
                          <img class="img-flag-list" src="../assets/images/lang/Ukraine.png"  alt="">
                          <div>Українська</div></a>
                    </li>
                    <li>
                         <a href="#" class="ru">
                          <img class="img-flag-list" src="../assets/images/lang/Russia.png"  alt="">
                          <div>Русский</div></a>
                    </li>
                    <li>
                        <a href="#" class="us">
                          <img class="img-flag-list" src="../assets/images/lang/USA.png"  alt="">
                          <div>English</div></a>
                    </li>
                  
                </ul>
                
            </div>
      </div>
      
</template>


<script>
// import localizeFilter from '../filters/localize.filter'

export default {

  data: () => ({
      isActive: 1,
  }),

  methods:{
    menuClickHandler(num, path) {
      this.isActive = num
      this.$router.push(path)
    }
  },
  // computed:{
  //   localize(){
  //     return "dgcvshd"
  //   }
  // }

}
</script>


<style lang="scss">
.sidebar{
 
  &__container{
    width: 240px;
    margin-left: 65px;
  }

	

		&__header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
     
		}

		&__logo {
      img{
        filter: drop-shadow(0px 10px 0px #e8eff4);
        // border-image: 10px solid ;
      }

      
		}

    &__user-account{
       margin-bottom: 52px;
    }

		&__user-accout-item {
      display: flex;
      align-items: center;
      
		}

}

.item-user {

  // .item-user__icon

  &__icon {
    padding-right: 15px;
    transition: all 0.4s ease;
    fill: #d8d8db;
    &:hover{
      fill: #6880f8;
    }
    
  }

  // .item-user__content

  &__content {
    text-align: center;
    padding-right: 15px;
  }

  // .item-user__name

  &__name {
    font-size: 18px;
    line-height: 10px;
    color: #6880f8;
    font-weight: 700;
    text-align: center;
    padding-bottom: 10px;
    text-shadow: 3px 5px 20px #6880f8;
  }

  // .item-user__user-room

  &__user-room {
    font-size: 14px;
    line-height: 10px;
    color: #95a0c2;
    font-weight: 500;
    text-align: center;
    &:hover{
      text-decoration: underline;
    }
  }

  // .item-user__basket

  &__basket {
    transition: all 0.4s ease;
    position: relative;
    

    span{
      position: absolute;
      display: inline-flex;
      width: 35px;
      height: 35px;
      font-size: 18px;
      line-height: 10px;
      color: #95a0c2;
      font-weight: 700;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      top: -18px;
      left: 23px;
      background-color: #e7eff3;

    }

  
   
  }
  &__icon-img {
    width: 35px;
    height: 35px;
    opacity: .3;
    transition: all 0.2s ease;

    &:hover{
      opacity: 1;
    }
  }


}
  
  .menu {
  // margin-top: 52px;
  display: flex;
  // justify-content: center;
 
  &__item-content{
    height: 75px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
   
  }
  
 
  &__item {
   
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    // transition: border 0.8s ease;

    

    &.is-active{
      position: relative;
      // display: block;
      padding-left: 10px;
      width: 331px;
      height: 102px;
      border: solid 15px #e8eff4;
      border-right: solid 40px e8eff4; 
      border-radius: 48px;
      margin-bottom: 20px;
       left: -45px;
       z-index: 150;

       &:before{
         content: "";
         position: absolute;
         width: 63px;
         height: 62px;
         background-image: url('../assets/images/icons/corner-top.png');
         background-color: #e8eff4;
         right: -14px;
         top: -67px;
       }

       &:after{
        content: "";
        position: absolute;
        width: 80px;
        height: 183px;
        background-image: url('../assets/images/icons/corner.png');
       
        right: -14px;
        top: -26px;
       }

      .menu-img{
        margin-right: 0;
        opacity: .1;
        width: 110px;
        height: 110px;
        transform: translate(90px, 0);
        
      }

      
      .menu-txt{
        color: #6880f8;
        text-shadow: 3px 5px 20px #6880f8;
        margin: 0;
        position: absolute;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, 0%);
    
      }
        &:hover{

          .menu-img{
        opacity: .1;
      }
        }
    }

 
   
  }



.menu-img{
  height: 25px;
  width: 25px;
  margin-right: 30px;
  opacity: .6;
  transition: all 0.8s ease;
}



  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    line-height: 10px;
    color: #95a0c2;
    font-weight: 500;
    z-index: 9999;
    transition: all 0.22s ease;
    
    &:hover{
      color: #6880f8;
      text-shadow: 3px 5px 10px #6880f8;
      .menu-img{
        opacity: 1;
      }
    }

    

    &.is-active{
      display: inline-block;
      //position: relative;
      z-index: 100;
      align-self: center;
      justify-self: center;
      font-size: 18px;
      line-height: 10px;
      color: #6880f8;
      font-weight: 500;
      text-shadow: 3px 5px 20px #6880f8;
      
    }
  }
}

.user-active{
      position: relative;
      padding-left: 10px;
      width: 331px;
      height: 102px;
      border: solid 15px #e8eff4;
      border-right: solid 40px e8eff4; 
      border-radius: 48px;
      margin-bottom: 20px;
       left: 1px;
       z-index: 150;

        &:before{
         content: "";
         position: absolute;
         width: 63px;
         height: 62px;
         background-image: url('../assets/images/icons/corner-top.png');
         background-color: #e8eff4;
         right: -14px;
         top: -67px;
       }

       &:after{
        content: "";
        position: absolute;
        width: 80px;
        height: 183px;
        background-image: url('../assets/images/icons/corner.png');
       
        right: -14px;
        top: -26px;
       }

       .item-user{
         position: relative;
         top: 19px;
         &__icon{
               margin-left: 16px;

         }
       }
       
      
}

.lang-menu {
    width: 100%;
    position: absolute;
    bottom: 50px;
    left: 50%;
    display: flex; 
    justify-content: center;
    padding: 0;
    transform: translate(-50%, 0);
}
 .selected-lang {
  display: flex;
  align-items: center;
  background:  radial-gradient(#e8eff4, #d4e0e8);
  line-height: 2;
  cursor: pointer;
      padding: 6px;
    border-radius: 26px;
    color: #a5afcb;
    text-decoration: underline;
}

.selected-lang:hover .lang-flag-img{
animation-duration: 3s;
  animation-name: flag;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes flag{
  0%{
    transform: rotate(0);

  }

  50%{
    transform: scale(1.2);
  }
  
    80%{
      transform: rotate(1);
    }
    100%{
      transform: rotate(1.1deg);
    }
}

.lang-flag-img{
  width: 35px;
  height: 35px;
  margin-right: 5px;
  // transition: all 0.3s;
}

.img-flag-list{
  width: 25px;
  height: 25px;
  margin-right: 5px;
}

.lang-list {
    margin: 0;
    padding: 0;
   
    display: none;
    background-color: #fff;
    border: 1px solid #f8f8f8;
    position: absolute;
    top: -85px;
    right: -15px;
    width: 125px;
    border-radius: 5px;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
}


.lang-menu ul li {
    list-style: none;
    text-align: left;
    display: flex;
    justify-content: space-between;
}

.lang-menu ul li a {
    display: flex;
    align-items: center;
    padding: 5px 10px;
 
}

.lang-menu ul li:hover {
    background-color: #f2f2f2;
}


</style>