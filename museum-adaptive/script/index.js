const _0x534826=_0x5976;(function(_0x43f578,_0x415e86){const _0x7a9155=_0x5976,_0x1d124c=_0x43f578();while(!![]){try{const _0x2dfc7e=parseInt(_0x7a9155(0xd9))/0x1+parseInt(_0x7a9155(0x11f))/0x2+parseInt(_0x7a9155(0x136))/0x3+parseInt(_0x7a9155(0x118))/0x4+-parseInt(_0x7a9155(0xb6))/0x5+parseInt(_0x7a9155(0xe6))/0x6+parseInt(_0x7a9155(0x115))/0x7*(-parseInt(_0x7a9155(0x103))/0x8);if(_0x2dfc7e===_0x415e86)break;else _0x1d124c['push'](_0x1d124c['shift']());}catch(_0x10ca1d){_0x1d124c['push'](_0x1d124c['shift']());}}}(_0x268b,0x6a94f));const sliderContainer=document[_0x534826(0x111)](_0x534826(0xc5)),upArrow=document[_0x534826(0x111)](_0x534826(0x129)),downArrow=document[_0x534826(0x111)]('.slider-right__arrow'),rightSlides=document[_0x534826(0xcb)]('.slider-right__item'),pagination=document[_0x534826(0x111)](_0x534826(0x132)),sliderCurrentNumber=document[_0x534826(0x111)](_0x534826(0xa6)),sliderAmountSlides=document[_0x534826(0x111)]('.slider__amount-slides'),length=rightSlides[_0x534826(0xf3)];let currentLeftIdx=0x0,currentRightIdx=0x0,isActive=!![],paginationItems;createPagination(),sliderAmountSlides[_0x534826(0xaa)]='0'+length,upArrow[_0x534826(0xac)](_0x534826(0xf4),slideLeft),downArrow[_0x534826(0xac)](_0x534826(0xf4),slideRight),pagination[_0x534826(0xac)]('click',slideOnPag);function delPrevSlide(_0x15d20c,_0x5a4f84,_0x3ae0ed){const _0x20d7ba=_0x534826;isActive=![],_0x15d20c[_0x3ae0ed][_0x20d7ba(0xd2)][_0x20d7ba(0x13b)](_0x5a4f84),_0x15d20c[_0x3ae0ed][_0x20d7ba(0xac)](_0x20d7ba(0x12f),function(){const _0x1f881c=_0x20d7ba;this[_0x1f881c(0xd2)][_0x1f881c(0xae)](_0x1f881c(0xd3),_0x5a4f84);});}function addNextSlide(_0x54bbb2,_0x3e5ca4,_0x1058a9){const _0x501b74=_0x534826;_0x54bbb2[_0x1058a9][_0x501b74(0xd2)][_0x501b74(0x13b)](_0x501b74(0x11d),_0x3e5ca4),_0x54bbb2[_0x1058a9][_0x501b74(0xac)](_0x501b74(0x12f),function(){const _0x1c13a0=_0x501b74;this['classList'][_0x1c13a0(0xae)](_0x1c13a0(0x11d),_0x3e5ca4),this['classList'][_0x1c13a0(0x13b)]('active'),isActive=!![];});}function clearPagination(){const _0x3c0c0d=_0x534826;Array[_0x3c0c0d(0x119)](paginationItems)[_0x3c0c0d(0x100)](_0x515678=>{const _0x5024e6=_0x3c0c0d;_0x515678[_0x5024e6(0xd2)][_0x5024e6(0xe5)](_0x5024e6(0x11c))&&_0x515678[_0x5024e6(0xd2)][_0x5024e6(0xae)]('active-pagination');});}function slideLeft(){const _0x538866=_0x534826;isActive&&(clearPagination(),delPrevSlide(rightSlides,_0x538866(0x102),currentRightIdx),currentRightIdx=(currentRightIdx-0x1+length)%length,addNextSlide(rightSlides,_0x538866(0xef),currentRightIdx),paginationItems[currentRightIdx]['classList'][_0x538866(0x13b)](_0x538866(0x11c)),sliderCurrentNumber[_0x538866(0xaa)]='0'+(currentRightIdx+0x1));}function slideRight(){const _0x1f1c4d=_0x534826;isActive&&(clearPagination(),delPrevSlide(rightSlides,_0x1f1c4d(0x10c),currentRightIdx),currentRightIdx=(currentRightIdx+0x1+length)%length,addNextSlide(rightSlides,'from-left',currentRightIdx),paginationItems[currentRightIdx][_0x1f1c4d(0xd2)][_0x1f1c4d(0x13b)]('active-pagination'),sliderCurrentNumber[_0x1f1c4d(0xaa)]='0'+(currentRightIdx+0x1));}function createPagination(){const _0x39502a=_0x534826;for(let _0x276d08=0x0;_0x276d08<length-0x1;_0x276d08++){const _0x3eeed0=document[_0x39502a(0xb8)](_0x39502a(0x104));_0x3eeed0['setAttribute'](_0x39502a(0xcf),'pagination-item'),_0x3eeed0['setAttribute'](_0x39502a(0xc3),_0x276d08+0x1),pagination[_0x39502a(0x130)](_0x3eeed0);}paginationItems=document[_0x39502a(0x106)](_0x39502a(0x12e));}function slideOnPag(_0x3d8860){const _0x536a8a=_0x534826,_0x3066ec=Number(_0x3d8860['target'][_0x536a8a(0xc1)][_0x536a8a(0xea)]);if(currentRightIdx===_0x3066ec)return;_0x3066ec<currentRightIdx&&isActive&&(clearPagination(),delPrevSlide(rightSlides,_0x536a8a(0x102),currentRightIdx),currentRightIdx=_0x3066ec,addNextSlide(rightSlides,'from-right',currentRightIdx),paginationItems[currentRightIdx]['classList'][_0x536a8a(0x13b)]('active-pagination'),sliderCurrentNumber[_0x536a8a(0xaa)]='0'+(currentRightIdx+0x1)),_0x3066ec>currentRightIdx&&isActive&&(clearPagination(),delPrevSlide(rightSlides,_0x536a8a(0x10c),currentRightIdx),currentRightIdx=_0x3066ec,addNextSlide(rightSlides,'from-left',currentRightIdx),paginationItems[currentRightIdx]['classList'][_0x536a8a(0x13b)]('active-pagination'),sliderCurrentNumber[_0x536a8a(0xaa)]='0'+(currentRightIdx+0x1));}let startX=0x0,startY=0x0,distX=0x0,distY=0x0,swipeTime=0x0,startTime=0x0;const distHorizontal=0x96,distVertical=0x64,allowedTime=0x3e8;sliderContainer[_0x534826(0xac)]('mousedown',function(_0x515818){const _0x239e44=_0x534826;sliderContainer['style'][_0x239e44(0x12d)]=_0x239e44(0xdc),startX=_0x515818[_0x239e44(0xe4)],startY=_0x515818[_0x239e44(0xcd)],startTime=new Date()[_0x239e44(0xdd)](),_0x515818['preventDefault']();}),sliderContainer[_0x534826(0xac)](_0x534826(0xbb),function(_0x2d4a27){const _0x355e82=_0x534826;sliderContainer['style']['cursor']='pointer',distX=_0x2d4a27[_0x355e82(0xe4)]-startX,distY=_0x2d4a27[_0x355e82(0xcd)]-startY,swipeTime=new Date()[_0x355e82(0xdd)]()-startTime,swipeTime<=allowedTime&&(Math['abs'](distX)>=distHorizontal&&Math[_0x355e82(0xfa)](distY)<=distVertical&&(distX>0x0?isActive&&slideRight():isActive&&slideLeft())),_0x2d4a27[_0x355e82(0xf5)]();});const burgerIcon=document[_0x534826(0x111)](_0x534826(0x10b)),headerMenuWrap=document['querySelector']('.header__menu-wrapper'),welcomeContent=document[_0x534826(0x111)](_0x534826(0x10e)),menuLinks=document[_0x534826(0xcb)]('.header__menu-item'),footerSocial=document[_0x534826(0x111)](_0x534826(0xe7)),container=document['querySelector'](_0x534826(0xcc));document[_0x534826(0xac)]('DOMContentLoaded',()=>{const _0x39f6a4=_0x534826;[burgerIcon,...menuLinks][_0x39f6a4(0x100)](_0x578667=>_0x578667[_0x39f6a4(0xac)](_0x39f6a4(0xf4),showHideMenu)),document[_0x39f6a4(0xac)](_0x39f6a4(0xf4),hideMenuDocClick);});function hideMenuDocClick(_0x383ffb){const _0x5ae835=_0x534826;if(_0x383ffb[_0x5ae835(0x11a)][_0x5ae835(0xd2)][_0x5ae835(0xe5)]('burger__icon'))return;[headerMenuWrap,burgerIcon][_0x5ae835(0x100)](_0x2e3e93=>_0x2e3e93[_0x5ae835(0xd2)][_0x5ae835(0xae)](_0x5ae835(0xb2))),headerMenuWrap['addEventListener'](_0x5ae835(0xf4),_0x551c0c=>_0x551c0c[_0x5ae835(0x134)]()),welcomeContent[_0x5ae835(0xd2)][_0x5ae835(0xae)](_0x5ae835(0x117));}function showHideMenu(){const _0x106fb8=_0x534826;headerMenuWrap[_0x106fb8(0xd2)][_0x106fb8(0xa9)](_0x106fb8(0xb2)),burgerIcon['classList'][_0x106fb8(0xa9)](_0x106fb8(0xb2)),welcomeContent[_0x106fb8(0xd2)]['toggle'](_0x106fb8(0x117)),footerSocial[_0x106fb8(0xd2)][_0x106fb8(0xa9)](_0x106fb8(0x11b));}const exploreScroller=document['querySelector'](_0x534826(0xf2)),exploreSlider=document[_0x534826(0x111)](_0x534826(0xba)),exploreAfter=document[_0x534826(0x111)](_0x534826(0x126));let active=![];exploreScroller['addEventListener'](_0x534826(0xfb),function(){const _0xdb6e49=_0x534826;active=!![],exploreScroller[_0xdb6e49(0xd2)][_0xdb6e49(0x13b)](_0xdb6e49(0x107));}),document[_0x534826(0xc7)]['addEventListener'](_0x534826(0xbb),function(){const _0x4a6494=_0x534826;active=![],exploreScroller[_0x4a6494(0xd2)]['remove'](_0x4a6494(0x107));}),document[_0x534826(0xc7)]['addEventListener'](_0x534826(0x12b),function(){const _0x1bb78c=_0x534826;active=![],exploreScroller[_0x1bb78c(0xd2)][_0x1bb78c(0xae)](_0x1bb78c(0x107));}),document[_0x534826(0xc7)][_0x534826(0xac)](_0x534826(0x12a),function(_0x2a39e7){const _0x27f02c=_0x534826;if(!active)return;let _0x3c4d80=_0x2a39e7[_0x27f02c(0xe4)];_0x3c4d80-=exploreSlider[_0x27f02c(0x10f)]()['left'],scrollIt(_0x3c4d80);});function scrollIt(_0x2642d3){const _0x27801a=_0x534826;let _0x4887f2=Math[_0x27801a(0xe3)](0x0,Math['min'](_0x2642d3,exploreSlider[_0x27801a(0xf9)]));exploreAfter[_0x27801a(0x137)][_0x27801a(0xed)]=_0x4887f2+'px',exploreScroller['style']['left']=_0x4887f2-0x13+'px';}scrollIt(0x1b8),exploreScroller[_0x534826(0xac)](_0x534826(0x113),function(){const _0x2bdca9=_0x534826;active=!![],exploreScroller[_0x2bdca9(0xd2)][_0x2bdca9(0x13b)](_0x2bdca9(0x107));}),document['body'][_0x534826(0xac)]('touchend',function(){const _0x4b98f0=_0x534826;active=![],exploreScroller[_0x4b98f0(0xd2)]['remove'](_0x4b98f0(0x107));}),document['body']['addEventListener']('touchcancel',function(){const _0x49a7a4=_0x534826;active=![],exploreScroller['classList'][_0x49a7a4(0xae)]('scrolling');}),console['log']('\x0aВниманию\x20проверяющих:\x0a\x20\x20-\x20разработка\x20велась\x20на\x20мониторе\x20с\x20разрешением\x201366px;\x0a\x20\x20-\x20желательно\x20обновлять\x20страницу\x20перед\x20проверкой\x20адаптива\x20каждого\x20разрешения\x0a\x20\x20-\x20проверять\x20желательно\x20используя\x20device\x20toolbar\x20браузера\x20в\x20режиме\x20responsive\x20выставив\x201920px\x20\x0a\x20\x20\x20\x20(ctrl\x20+\x200\x20\x20для\x20выравнивания);\x0a\x20\x20-\x20согласно\x20техзадания,\x20допускается\x20отклонение\x20вёрстки\x20от\x20макета\x20до\x20+/-\x2010px\x20по\x20горизонтали\x20и\x20вертикали\x0a\x0aСамооценка:\x20\x0a\x0a1.\x20Вёрстка\x20соответствует\x20макету.\x20Ширина\x20экрана\x201024px(в\x20допустимых\x20отклон.)\x20\x20\x20\x20\x20\x20\x20\x20\x20(+40)\x20\x0a2.\x20Вёрстка\x20соответствует\x20макету.\x20Ширина\x20экрана\x20768px(в\x20допустимых\x20отклон.)\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(+40)\x0a3.\x20Вёрстка\x20соответствует\x20макету.\x20Ширина\x20экрана\x20420px(в\x20допустимых\x20отклон.)\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(+40)\x0a4.\x20Ни\x20на\x20одном\x20из\x20разрешений\x20до\x20320px\x20не\x20появляется\x20горизонтальная\x20полоса\x20прокрутки\x20(+6\x20)\x20\x0a5.\x20Совмещается\x20адаптивная\x20и\x20резиновая\x20вёрстка:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(+14)\x0a\x20\x20\x20\x20-\x20слайдера\x20в\x20секции\x20Welcome\x20+2\x0a\x20\x20\x20\x20-\x20слайдера\x20сравнения\x20изображений\x20в\x20секции\x20Explore\x20+2\x0a\x20\x20\x20\x20-\x20кастомного\x20видеоплеера\x20в\x20секции\x20Video\x20+2\x0a\x20\x20\x20\x20-\x20слайдера\x20в\x20секции\x20Video\x20+2\x0a\x20\x20\x20\x20-\x20YouTube-видео\x20в\x20плейлисте\x20в\x20секции\x20Video,\x20маленькие\x20видео\x20выровнены\x20по\x20краям\x20большого\x20+2\x0a\x20\x20\x20\x20-\x20галереи\x20изображений\x20и\x20изображений\x20в\x20ней\x20+2\x0a\x20\x20\x20\x20-\x20карты\x20+2\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a6.\x20На\x20ширине\x20экрана\x201024рх\x20и\x20меньше\x20реализовано\x20адаптивное\x20меню\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(+12)\x0a7.\x20Оптимизация\x20скорости\x20загрузки\x20страницы\x20(>90)\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(+8\x20)\x0a\x20\x20\x0aИтого:\x20160.\x0a');const galleryInnerContainer=document[_0x534826(0x111)]('.gallery__picture-inner-container'),galleryLeft=document[_0x534826(0x111)](_0x534826(0xe1)),galleryCenter=document[_0x534826(0x111)]('.gallery__center'),galleryRight=document[_0x534826(0x111)](_0x534826(0x139));window[_0x534826(0xac)]('load',addGalleryReload),window[_0x534826(0xac)](_0x534826(0xc4),addGallery);const galleryImages=[_0x534826(0x131),_0x534826(0xc9),_0x534826(0xb5),'./assets/images/gallery/galery4.webp',_0x534826(0xf7),'./assets/images/gallery/galery6.webp',_0x534826(0xb7),'./assets/images/gallery/galery8.webp',_0x534826(0xf6),'./assets/images/gallery/galery10.webp',_0x534826(0xd8),'./assets/images/gallery/galery12.webp',_0x534826(0x133),_0x534826(0xc0),'./assets/images/gallery/galery15.webp'];let newImageArr=shuffle(galleryImages);createGallery();window['innerWidth']>0x300&&setInterval(()=>{const _0x3d8e0d=_0x534826;while(galleryLeft[_0x3d8e0d(0xbd)]){galleryLeft['removeChild'](galleryLeft[_0x3d8e0d(0xbd)]);}while(galleryCenter['firstChild']){galleryCenter['removeChild'](galleryCenter[_0x3d8e0d(0xbd)]);}while(galleryRight[_0x3d8e0d(0xbd)]){galleryRight[_0x3d8e0d(0xb3)](galleryRight[_0x3d8e0d(0xbd)]);}newImageArr=shuffle(galleryImages),createGallery();},0x1388);function shuffle(_0xe29563){const _0x21ea42=_0x534826;return _0xe29563[_0x21ea42(0xf8)](()=>Math[_0x21ea42(0xd4)]()-0.5);}function createImage(_0x32aa6a,_0x21c6a7,_0x3f23d6){const _0x4ed2c6=_0x534826,_0x4449f1=document[_0x4ed2c6(0xb8)](_0x4ed2c6(0x13c));_0x4449f1[_0x4ed2c6(0xd2)][_0x4ed2c6(0x13b)](_0x4ed2c6(0x125)),_0x4449f1['src']=''+_0x21c6a7,_0x4449f1[_0x4ed2c6(0xd1)]=_0x4ed2c6(0xf0)+_0x3f23d6,_0x32aa6a[_0x4ed2c6(0x130)](_0x4449f1);}function createGallery(){const _0x4dc486=_0x534826;window[_0x4dc486(0x135)]>0x300&&newImageArr[_0x4dc486(0x109)]((_0x3dd124,_0x2f80cf)=>{const _0x28fa38=_0x4dc486;if(galleryLeft[_0x28fa38(0xdb)]['length']<0x5)createImage(galleryLeft,_0x3dd124,_0x2f80cf);else galleryCenter[_0x28fa38(0xdb)][_0x28fa38(0xf3)]<0x5?createImage(galleryCenter,_0x3dd124,_0x2f80cf):createImage(galleryRight,_0x3dd124,_0x2f80cf);});}window[_0x534826(0xac)](_0x534826(0x10a),addGalleryReload),window['addEventListener'](_0x534826(0xc4),addGallery);function addGalleryReload(_0x1ebfb3){window['innerWidth']<=0x300&&createGallery768();}function addGallery(_0x3225ae){const _0x358bbd=_0x534826;_0x3225ae[_0x358bbd(0x11a)]['innerWidth']<=0x300&&createGallery768();}function createGallery768(){const _0x4187fc=_0x534826;while(galleryLeft[_0x4187fc(0xbd)]){galleryLeft[_0x4187fc(0xb3)](galleryLeft[_0x4187fc(0xbd)]);}while(galleryCenter[_0x4187fc(0xbd)]){galleryCenter[_0x4187fc(0xb3)](galleryCenter['firstChild']);}while(galleryRight['firstChild']){galleryRight[_0x4187fc(0xb3)](galleryRight[_0x4187fc(0xbd)]);}newImageArr[_0x4187fc(0x109)]((_0xa64414,_0x58117e)=>{const _0x3dc1e9=_0x4187fc;galleryLeft[_0x3dc1e9(0xdb)][_0x3dc1e9(0xf3)]<0x8?createImage(galleryLeft,_0xa64414,_0x58117e):createImage(galleryRight,_0xa64414,_0x58117e);});}const ticketsBuyBtn=document[_0x534826(0x111)](_0x534826(0xca)),formBookBtn=document[_0x534826(0x111)](_0x534826(0xda)),ticketsOverlay=document[_0x534826(0x111)]('.tickets__overlay'),ticketsFormItem=document[_0x534826(0x111)]('.tickets__form-item'),closeBtn=document[_0x534826(0x111)]('.close-form');document[_0x534826(0xac)](_0x534826(0x11e),()=>{const _0x57df5f=_0x534826;ticketsBuyBtn[_0x57df5f(0xac)](_0x57df5f(0xf4),openTicketsForm),formBookBtn['addEventListener'](_0x57df5f(0xf4),_0x22b6bd=>_0x22b6bd[_0x57df5f(0xf5)]()),formBookBtn[_0x57df5f(0xac)](_0x57df5f(0xf4),createRipple),ticketsFormItem['addEventListener'](_0x57df5f(0xf4),_0x2d98f2=>_0x2d98f2['stopPropagation']()),[ticketsOverlay,closeBtn][_0x57df5f(0x100)](_0x5728c9=>_0x5728c9[_0x57df5f(0xac)](_0x57df5f(0xf4),()=>{const _0x2458d5=_0x57df5f;setTimeout(()=>{const _0x34c7c0=_0x5976;ticketsOverlay[_0x34c7c0(0xd2)][_0x34c7c0(0xae)](_0x34c7c0(0xd3));},0x12c),ticketsFormItem[_0x2458d5(0xd2)]['remove'](_0x2458d5(0xc8));}));});function openTicketsForm(){const _0x5f0481=_0x534826;ticketsOverlay[_0x5f0481(0xd2)][_0x5f0481(0x13b)](_0x5f0481(0xd3)),setTimeout(()=>{const _0x2b7d12=_0x5f0481;ticketsFormItem[_0x2b7d12(0xd2)][_0x2b7d12(0x13b)]('form-animation');},0x12c);}function createRipple(_0x33bc44){const _0x33ddee=_0x534826,_0x2d4a61=document[_0x33ddee(0xb8)](_0x33ddee(0x104));_0x2d4a61[_0x33ddee(0xd2)][_0x33ddee(0x13b)]('circle'),_0x2d4a61[_0x33ddee(0x137)][_0x33ddee(0x127)]=_0x33bc44[_0x33ddee(0xfd)]+'px',_0x2d4a61['style'][_0x33ddee(0xee)]=_0x33bc44[_0x33ddee(0x110)]+'px',this['appendChild'](_0x2d4a61),setTimeout(()=>_0x2d4a61[_0x33ddee(0xae)](),0x1f4);}const player=document[_0x534826(0x111)]('.video__player'),videoItem=document[_0x534826(0xcb)](_0x534826(0xaf)),play=document['querySelector'](_0x534826(0x128)),playImage=document[_0x534826(0x111)]('.small-play__item'),largePlay=document['querySelector'](_0x534826(0x112)),videoContent=document['querySelector'](_0x534826(0xa7)),videoControl=document['querySelector'](_0x534826(0xfc)),ranges=document[_0x534826(0xcb)](_0x534826(0xd5)),videoProgress=document['querySelector'](_0x534826(0xd7)),soundProgress=document[_0x534826(0x111)](_0x534826(0xe8)),speaker=document[_0x534826(0x111)]('.speaker'),fullscreenBtn=document[_0x534826(0x111)](_0x534826(0xbc)),playRate=document[_0x534826(0x111)](_0x534826(0xb9));let currentItem=0x0,mouseActive=![],video=videoItem[currentItem],ended=![];video[_0x534826(0xff)]=0.4,document[_0x534826(0xac)](_0x534826(0xd0),handleKeys),document[_0x534826(0xac)](_0x534826(0xfe),handleKeys),play['addEventListener'](_0x534826(0xf4),playVideo),largePlay['addEventListener'](_0x534826(0xf4),playVideo),video[_0x534826(0xac)](_0x534826(0x114),handleProgress),video[_0x534826(0xac)]('ended',handleEnd),player['addEventListener'](_0x534826(0x12c),toogleControl),speaker[_0x534826(0xac)](_0x534826(0xf4),muteVideo),fullscreenBtn[_0x534826(0xac)](_0x534826(0xf4),toggleFullscreen),videoContent[_0x534826(0xac)](_0x534826(0xf4),playVideo),videoProgress[_0x534826(0xac)](_0x534826(0x138),handleProgressChange),videoProgress['addEventListener'](_0x534826(0xf4),handleProgressClick),videoProgress['addEventListener'](_0x534826(0x12a),_0x17e5f5=>mouseActive&&handleProgressClick(_0x17e5f5)),videoProgress['addEventListener'](_0x534826(0xfb),()=>mouseActive=!![]),videoProgress[_0x534826(0xac)](_0x534826(0xbb),()=>mouseActive=![]),soundProgress[_0x534826(0xac)](_0x534826(0x138),handleVolumeChange);function playVideo(){const _0x15e5a5=_0x534826;largePlay[_0x15e5a5(0xd2)][_0x15e5a5(0xa9)](_0x15e5a5(0xf1)),largePlay[_0x15e5a5(0xd2)][_0x15e5a5(0xe5)](_0x15e5a5(0xf1))?(playImage[_0x15e5a5(0xbe)](_0x15e5a5(0x105),_0x15e5a5(0xb4)),video[_0x15e5a5(0xe2)](),setInterval(()=>{handleProgress();},0xa)):(playImage[_0x15e5a5(0xbe)](_0x15e5a5(0x105),'./assets/images/video/small-play-button.svg'),video[_0x15e5a5(0xd6)]());}function rangePosition(_0x5a60e7,_0x16f0b3){const _0x5c8252=_0x534826;return _0x5a60e7['style'][_0x5c8252(0xce)]=_0x5c8252(0x101)+_0x16f0b3+_0x5c8252(0xde)+_0x16f0b3+_0x5c8252(0xc6);}function handleProgressChange(){const _0x788585=_0x534826;rangePosition(videoProgress,videoProgress[_0x788585(0x120)]);}function handleProgressClick(_0x2768f1){const _0x4c2b0e=_0x534826;video[_0x4c2b0e(0x13a)]=_0x2768f1[_0x4c2b0e(0x110)]/videoProgress[_0x4c2b0e(0xf9)]*video[_0x4c2b0e(0x116)];}function _0x268b(){const _0x187bf0=['1323315VfrxDL','duration','hide-welcome-content','2837576vNOrQp','from','target','menu-class','active-pagination','next','DOMContentLoaded','1063126zrBSdL','value','toFixed','.video','muted','exitFullscreen','gallery-img','.explore__after','top','.small-play','.slider-left__arrow','mousemove','mouseleave','fullscreenchange','cursor','pagination-item','animationend','append','./assets/images/gallery/galery1.webp','.slider__pagination','./assets/images/gallery/galery13.webp','stopPropagation','innerWidth','468537uQushe','style','input','.gallery__right','currentTime','add','img','.slider__current-number','.video__content','fullscreenElement','toggle','innerHTML','./assets/images/video/small-play-button.svg','addEventListener','video','remove','.video-item','.mySwiper','video__active','menu__active','removeChild','./assets/images/video/pause-button.png','./assets/images/gallery/galery3.webp','1820605QrZRmc','./assets/images/gallery/galery7.webp','createElement','.play-back-rate','.explore__image','mouseup','.fullscreen','firstChild','setAttribute','requestFullscreen','./assets/images/gallery/galery14.webp','dataset','mute','data-idx','resize','.slider__container','%,\x20#fff\x20100%)','body','form-animation','./assets/images/gallery/galery2.webp','.tickets__buy','querySelectorAll','.container','pageY','background','class','keypress','alt','classList','active','random','.ranges','pause','.video__progress','./assets/images/gallery/galery11.webp','265123sawAkE','.card-form-submit','children','pointer','getTime','%,\x20#fff\x20','show-control','./assets/images/video/poster1024.webp','.gallery__left','play','max','pageX','contains','1636146HQFZKu','.footer__social','.sound__progress','.poster','idx','.swiper-pagination','.swiper-button-next','width','left','from-right','galery','hide__large-button','.explore__scroller','length','click','preventDefault','./assets/images/gallery/galery9.webp','./assets/images/gallery/galery5.webp','sort','offsetWidth','abs','mousedown','.video__controls','offsetY','keydown','volume','forEach','linear-gradient(to\x20right,\x20#660606\x200%,\x20#660606\x20','to-left','48KSKxPQ','span','src','getElementsByClassName','scrolling','poster','map','load','.burger__icon','to-right','playbackRate','.welcome__content','getBoundingClientRect','offsetX','querySelector','.video__large-play-button','touchstart','timeupdate'];_0x268b=function(){return _0x187bf0;};return _0x268b();}function handleProgress(){const _0x34b37d=_0x534826;let _0x326a67=video[_0x34b37d(0x13a)]/video[_0x34b37d(0x116)]*0x64;videoProgress[_0x34b37d(0x120)]=_0x326a67,rangePosition(videoProgress,_0x326a67),video['currentTime']===video['duration']&&!ended&&(handleEnd(),ended=!ended);}function handleProgressKeyNum(_0x287ebe){const _0x277719=_0x534826;video[_0x277719(0x13a)]=_0x287ebe/0x64*video[_0x277719(0x116)];}function handleEnd(){const _0x7daada=_0x534826;largePlay[_0x7daada(0xd2)][_0x7daada(0xa9)](_0x7daada(0xf1)),playImage['setAttribute'](_0x7daada(0x105),'./assets/images/video/small-play-button.svg'),rangePosition(videoProgress,0x0),videoProgress['value']=0x0;}function handleVolumeChange(){const _0x4bdcf3=_0x534826;video['volume']=soundProgress[_0x4bdcf3(0x120)],video[_0x4bdcf3(0xff)]===0x0?(speaker[_0x4bdcf3(0xd2)]['add']('mute'),video[_0x4bdcf3(0x123)]=!![]):(speaker[_0x4bdcf3(0xd2)][_0x4bdcf3(0xae)](_0x4bdcf3(0xc2)),video[_0x4bdcf3(0x123)]=![]),rangePosition(soundProgress,soundProgress['value']*0x64);}function muteVideo(){const _0x1497ef=_0x534826;video[_0x1497ef(0x123)]=!video[_0x1497ef(0x123)],video[_0x1497ef(0x123)]?speaker[_0x1497ef(0xd2)]['add'](_0x1497ef(0xc2)):speaker[_0x1497ef(0xd2)][_0x1497ef(0xae)](_0x1497ef(0xc2)),video['muted']?(video[_0x1497ef(0xff)]=0x0,soundProgress[_0x1497ef(0x120)]=0x0,rangePosition(soundProgress,video['volume']*0x64)):(video[_0x1497ef(0xff)]=0.4,soundProgress[_0x1497ef(0x120)]=0.4,rangePosition(soundProgress,video[_0x1497ef(0xff)]*0x64));}function launchFS(_0x2f5c64){const _0x58dfbc=_0x534826;_0x2f5c64['requestFullscreen']?_0x2f5c64[_0x58dfbc(0xbf)]():null;}function exitFS(){const _0xf76f68=_0x534826;document[_0xf76f68(0x124)]?document[_0xf76f68(0x124)]():null;}function toggleFullscreen(){const _0x1a11e6=_0x534826;document[_0x1a11e6(0xa8)]?exitFS():launchFS(player);}function toogleControl(){const _0x1d47f8=_0x534826;videoControl[_0x1d47f8(0xd2)][_0x1d47f8(0xa9)](_0x1d47f8(0xdf));}function arrowUpVolume(){const _0x306a39=_0x534826;if(video['volume']===0x1)return;speaker[_0x306a39(0xd2)][_0x306a39(0xae)](_0x306a39(0xc2)),video[_0x306a39(0x123)]=![],video[_0x306a39(0xff)]=+video[_0x306a39(0xff)][_0x306a39(0x121)](0x2)+0.1,soundProgress['value']=video['volume'],rangePosition(soundProgress,video[_0x306a39(0xff)]*0x64);}function _0x5976(_0x162aa4,_0x335661){const _0x268bd4=_0x268b();return _0x5976=function(_0x597616,_0x39019d){_0x597616=_0x597616-0xa6;let _0x64263=_0x268bd4[_0x597616];return _0x64263;},_0x5976(_0x162aa4,_0x335661);}function arrowDownVolume(){const _0x266a86=_0x534826;video[_0x266a86(0xff)]!==0x0&&(video[_0x266a86(0xff)]=+video[_0x266a86(0xff)]['toFixed'](0x2)-0.1,video[_0x266a86(0xff)]===0x0&&(video[_0x266a86(0x123)]=!![],speaker['classList'][_0x266a86(0x13b)]('mute')),soundProgress[_0x266a86(0x120)]=video['volume'],rangePosition(soundProgress,video[_0x266a86(0xff)]*0x64));}function showPlayBackRate(){const _0x2bee41=_0x534826;playRate[_0x2bee41(0xaa)]='X\x20'+video[_0x2bee41(0x10d)],setTimeout(()=>{const _0x487e5b=_0x2bee41;playRate[_0x487e5b(0xaa)]='';},0x3e8);}function faster(){const _0x289b16=_0x534826;if(video['playbackRate']>=0x2)return;video[_0x289b16(0x10d)]+=0.25,showPlayBackRate();}function slower(){const _0x4f679f=_0x534826;if(video[_0x4f679f(0x10d)]<=0.5)return;video[_0x4f679f(0x10d)]-=0.25,showPlayBackRate();}function resetParams(){const _0x18f759=_0x534826;videoItem[currentItem][_0x18f759(0xd6)](),videoItem[currentItem]['currentTime']=0x0,rangePosition(videoProgress,0x0),videoProgress['value']=0x0,videoItem[currentItem][_0x18f759(0xff)]=0.4,soundProgress[_0x18f759(0x120)]=0.4,rangePosition(soundProgress,video[_0x18f759(0xff)]*0x64),speaker['classList'][_0x18f759(0xae)](_0x18f759(0xc2)),largePlay[_0x18f759(0xd2)]['remove'](_0x18f759(0xf1)),playImage['setAttribute'](_0x18f759(0x105),_0x18f759(0xab)),videoItem[currentItem]['classList'][_0x18f759(0xae)](_0x18f759(0xb1),_0x18f759(0xad)),ended=![];}function handleNextBtn(){const _0x166e9e=_0x534826;resetParams();if(currentItem===videoItem[_0x166e9e(0xf3)]-0x1)currentItem=-0x1;currentItem++,videoItem[currentItem][_0x166e9e(0xd2)]['add']('video__active',_0x166e9e(0xad)),video=document[_0x166e9e(0x111)](_0x166e9e(0x122));}function handlePrevBtn(){const _0x361ea3=_0x534826;resetParams();if(currentItem===0x0)currentItem=videoItem[_0x361ea3(0xf3)]-0x1;currentItem--,videoItem[currentItem][_0x361ea3(0xd2)]['add']('video__active',_0x361ea3(0xad)),video=document[_0x361ea3(0x111)]('.video');}function plusTenSec(){const _0x498929=_0x534826;video[_0x498929(0x13a)]+=0xa;}function minusTenSec(){const _0x48bb89=_0x534826;video[_0x48bb89(0x13a)]-=0xa;}function handleKeys(_0x13c82d){}let swiper=new Swiper(_0x534826(0xb0),{'slidesPerView':0x3,'spaceBetween':0x2a,'loop':!![],'autoHeight':!![],'pagination':{'el':_0x534826(0xeb),'clickable':!![]},'navigation':{'nextEl':_0x534826(0xec),'prevEl':'.swiper-button-prev'},'preloadImages':!![],'lazy':{'loadOnTransitionStart':!![],'loadPrevNext':![]},'breakpoints':{0x400:{'slidesPerView':0x3,'spaceBetween':0x29},0x300:{'slidesPerView':0x2,'spaceBetween':0x14},0x1a4:{'slidesPerView':0x2,'spaceBetween':0x14}}});const poster1024=document[_0x534826(0x111)](_0x534826(0xe9));window[_0x534826(0xac)](_0x534826(0xc4),changePoster),window[_0x534826(0xac)](_0x534826(0x10a),changePosterReload);function changePosterReload(_0x5c6a84){const _0x556f49=_0x534826;window[_0x556f49(0x135)]<=0x400&&poster1024[_0x556f49(0xbe)](_0x556f49(0x108),_0x556f49(0xe0));}function changePoster(_0x5ad7cc){const _0x4744e2=_0x534826;_0x5ad7cc[_0x4744e2(0x11a)][_0x4744e2(0x135)]<=0x400&&poster1024['setAttribute']('poster',_0x4744e2(0xe0));}