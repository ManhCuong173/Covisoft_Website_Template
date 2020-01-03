$.fn.rangeslider=function(options){var obj=this;var defautValue=obj.attr("value");obj.attr("oninput","updateSlider(this)");updateSlider(this);return obj};function removeActiveClass(list,className){for(let index=0;index<list.length;index++){const element=list[index];element.classList.remove(`${className}`)}
return list}
function scrollToSection(navbarCollapseItems,navbarHeight){navbarCollapseItems.unbind('click').on('click',function(){let idDiv=$(this).find('a').attr('href');let divs=$(idDiv).offset().top;let finalOffset=divs-navbarHeight;if(navbarCollapseItems.offset().top==0){$("html,body").animate({scrollTop:finalOffset-navbarHeight},1800)}
else{$("html,body").animate({scrollTop:finalOffset},1800)}})}
function chooseImageForScaling(portfolioItems){for(let index=0;index<portfolioItems.length;index++){const element=portfolioItems[index];element.addEventListener('click',function(){let imgSrc=element.getElementsByTagName('img')[0].getAttribute('src');let darkBackground=document.getElementById('darkBackgroundAndShowImage');darkBackground.style.display='block';darkBackground.getElementsByTagName('img')[0].setAttribute('src',imgSrc)
darkBackground.addEventListener('click',function(){this.style.display='none'},!1)},!1)}}
function updateSlider(passObj){var obj=$(passObj);var value=obj.val();var min=obj.attr("min");var max=obj.attr("max");var range=Math.round(max-min);var percentage=Math.round((value-min)*100/range);var barWrapper=$('.bar-wrapper').find(".bar");barWrapper.css("marginLeft",percentage+"%");var barProcessedDiv=$('.fcontact-notification-bar').find(".thumb-processed-background ");barProcessedDiv.css("width",percentage/3*2.5+"%");barWrapper.find(".thumb").text(value*500)};nextParticle=document.all.logo.nextParticle;nextParticle.width=window.innerWidth;nextParticle.height=window.innerHeight;window.onresize=function(){nextParticle.width=window.innerWidth;nextParticle.height=window.innerHeight;nextParticle.start()};function chooseProductItem(productItem,productItems){removeActiveClass(productItems,'portfolioItemActived');productItem.classList.add('portfolioItemActived');let parentNode=productItem.closest('.our-products').getElementsByClassName('product');for(let index=0;index<parentNode.length;index++){parentNode[index].style.color='#1a1a1a'}
productItem.parentElement.style.color='#FF9051'}
$("document").ready(function(){var navbar=$('.navbar');var ul=$('ul.navbar-nav');var navbarHeight=navbar.outerHeight();var productSection=$('.our-products');let navbarItems=navbar.find('ul.navbar-nav .nav-item');let navbarItemsGetByJS=document.getElementsByClassName('nav-item');let serviceSectionOffsetTop=$('.our-services').offset().top;let productSectionOffsetTop=productSection.offset().top;let technologySectionOffsetTop=$('.section-technology').offset().top;let aboutusSectionOffsetTop=$('.our-activities').offset().top;let contactFormOffsetTop=$('#footer').offset().top;let scrollUpToTopButton=$('.scrollUpIcon');scrollUpToTopButton.on('click',function(evnet){$('html,body').animate({scrollTop:0},1500)})
if(navigator.userAgent.search("Firefox")>-1){serviceSectionOffsetTop-=400;productSectionOffsetTop-=400;technologySectionOffsetTop-=400;aboutusSectionOffsetTop-=400;contactFormOffsetTop-=600};if($(window).width()>=$(window).height()){serviceSectionOffsetTop-=200;productSectionOffsetTop-=200;technologySectionOffsetTop-=200;aboutusSectionOffsetTop-=200;contactFormOffsetTop-=200}
let productEachSection=productSection.find('.product');let portfolioSection=$('.portfolio');let portfolioItems=$('.portfolio .item');let currentAddingHeight=0;chooseImageForScaling(portfolioItems);let productItems=productSection.find('.product-info');let productItemsGetByJS=document.getElementsByClassName('product-info');let dataFilter;for(let index=0;index<productItemsGetByJS.length;index++){productItemsGetByJS[index].addEventListener('click',function(){if(this.classList.contains('portfolioItemActived')){portfolioSection.removeClass('scrollDown');technologySectionOffsetTop-=currentAddingHeight;aboutusSectionOffsetTop-=currentAddingHeight;contactFormOffsetTop-=currentAddingHeight;currentAddingHeight=0;this.classList.remove('portfolioItemActived')
this.style.color='#1a1a1a'}else{let parentProductClass=this.parentElement;if(currentAddingHeight==0){portfolioSection.addClass('scrollDown');dataFilter=parentProductClass.getAttribute('data-filter');dataFilter=dataFilter.split('.')[1];grid.filter(`.${dataFilter}`);let portfolioSectionHeight=$('.allProducts').height();technologySectionOffsetTop+=portfolioSectionHeight;aboutusSectionOffsetTop+=portfolioSectionHeight;contactFormOffsetTop+=portfolioSectionHeight;currentAddingHeight=portfolioSectionHeight}else{technologySectionOffsetTop-=currentAddingHeight;aboutusSectionOffsetTop-=currentAddingHeight;contactFormOffsetTop-=currentAddingHeight;portfolioSection.addClass('scrollDown');dataFilter=parentProductClass.getAttribute('data-filter');dataFilter=dataFilter.split('.')[1];grid.filter(`.${dataFilter}`);let portfolioSectionHeight=$('.allProducts').height();technologySectionOffsetTop+=portfolioSectionHeight;aboutusSectionOffsetTop+=portfolioSectionHeight;contactFormOffsetTop+=portfolioSectionHeight;currentAddingHeight=portfolioSectionHeight}
chooseProductItem(this,productItems)}},!0)}
$(window).scroll(function(){if($(this).scrollTop()<serviceSectionOffsetTop){removeActiveClass(navbarItems,'active')
navbarItemsGetByJS[0].classList.add('active')}
else if($(this).scrollTop()>serviceSectionOffsetTop&&$(this).scrollTop()<=productSectionOffsetTop){removeActiveClass(navbarItems,'active')
navbarItemsGetByJS[1].classList.add('active')}
else if($(this).scrollTop()>=productSectionOffsetTop&&$(this).scrollTop()<=technologySectionOffsetTop){removeActiveClass(navbarItems,'active')
navbarItemsGetByJS[2].classList.add('active')}
else if($(this).scrollTop()>technologySectionOffsetTop&&$(this).scrollTop()<=aboutusSectionOffsetTop){removeActiveClass(navbarItems,'active')
navbarItemsGetByJS[3].classList.add('active')}
else if($(this).scrollTop()>aboutusSectionOffsetTop&&$(this).scrollTop()<=contactFormOffsetTop){removeActiveClass(navbarItems,'active')
navbarItemsGetByJS[4].classList.add('active')}
else{removeActiveClass(navbarItems,'active')
navbarItemsGetByJS[5].classList.add('active')}});$(".slider").rangeslider();scrollToSection(navbarItems,navbarHeight);$(".cta-img-container").slick({centerMode:!0,centerPadding:"20px",speed:300,slidesToShow:7,dots:!0,focusOnSelect:!0,responsive:[{breakpoint:1201,settings:{centerMode:!1,slidesToShow:4,slidesToScroll:4,infinite:!0,}},{breakpoint:768,settings:{centerMode:!1,slidesToShow:3,slidesToScroll:3,infinite:!0,}},{breakpoint:600,settings:{centerMode:!1,slidesToShow:3,slidesToScroll:3}},{breakpoint:480,settings:{centerMode:!1,slidesToShow:2,slidesToScroll:2}},{breakpoint:340,settings:{centerMode:!1,slidesToShow:1,slidesToScroll:1}}]});$("#submit").on('click',function(e){var form=$("form")[0];name=$("#fname").val();email=$("#femail").val();phonenumber=$("#fphonenumber").val();comment=$("#comment").val();if(!name||!email||!phonenumber||!comment){e.preventDefault();return}});$('.cta-img').on('click',function(event){event.preventDefault();var domElement=$(this);setTimeout(()=>{window.open(domElement.find('a').attr('href'),'_blank')},1000)})
var grid=new Muuri('.grid',{dragAxis:'xy',showDuration:300,showEasing:'ease',showEasing:'ease',hideDuration:300,hideEasing:'ease',layout:{fillGaps:!0}})})