$.fn.rangeslider = function (options) {
  var obj = this;
  var defautValue = obj.attr("value");
  obj.attr("oninput", "updateSlider(this)");
  updateSlider(this);
  return obj;
};

function removeActiveClass(list, className) {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    element.classList.remove(`${className}`);
  }
  return list;
}

function scrollToSection(navbarCollapseItems, navbarHeight) {

  navbarCollapseItems.unbind('click').on('click', function () {
    let idDiv = $(this).find('a').attr('href');
    let divs = $(idDiv).offset().top;
    $("html,body").animate({
      scrollTop: divs
    }, 1800);
  });

}

function scaleImage(portfolioItems) {
  for (let index = 0; index < portfolioItems.length; index++) {
    const element = portfolioItems[index];
    element.addEventListener('click', function () {
      let imgSrc = element.getElementsByTagName('img')[0].getAttribute('src');
      let darkBackground = document.getElementById('darkBackgroundAndShowImage');
      darkBackground.style.display = 'block';
      darkBackground.getElementsByTagName('img')[0].setAttribute('src', imgSrc)
      darkBackground.addEventListener('click', function () {
        this.style.display = 'none';
      }, false)
    }, false)
  }
}

function updateSlider(passObj) {
  var obj = $(passObj);
  var value = obj.val();
  var min = obj.attr("min");
  var max = obj.attr("max");
  var range = Math.round(max - min);
  var percentage = Math.round((value - min) * 100 / range);
  var barWrapper = $('.bar-wrapper').find(".bar");
  barWrapper.css("marginLeft", percentage + "%");
  var barProcessedDiv = $('.fcontact-notification-bar').find(".thumb-processed-background ");
  barProcessedDiv.css("width", percentage / 3 * 2.5 + "%");
  barWrapper.find(".thumb").text(value * 500);
};

nextParticle = document.all.logo.nextParticle;
nextParticle.width = window.innerWidth;
nextParticle.height = window.innerHeight;

window.onresize = function () {
  nextParticle.width = window.innerWidth;
  nextParticle.height = window.innerHeight;
  nextParticle.start();
};

function chooseProductItem(item, productItems, portfolioActivedItem) {

  removeActiveClass(productItems,portfolioActivedItem);
  item.classList.add(portfolioActivedItem);
  // Find all product div and attach black background color
  let parentNode = item.closest('.our-products').getElementsByClassName('product');
  for (let index = 0; index < parentNode.length; index++) {
    parentNode[index].style.color = '#1a1a1a';
  }
  //Attach highlight color to clicked item
  item.parentElement.style.color = '#FF9051';
}

$("document").ready(function () {
  const navbar = $('.navbar');
  const navbarHeight = navbar.outerHeight();
  const productSection = $('.our-products');
  const navbarItems = navbar.find('ul.navbar-nav .nav-item');
  const navbarItemsGetByJS = document.getElementsByClassName('nav-item');

  const portfolioActivedItem = 'portfolioActivedItem'

  let serviceSectionOffsetTop = $('.our-services').offset().top - navbarHeight;
  let productSectionOffsetTop = productSection.offset().top - navbarHeight;
  let technologySectionOffsetTop = $('.section-technology').offset().top - navbarHeight;
  let aboutusSectionOffsetTop = $('.our-activities').offset().top - navbarHeight;
  let contactFormOffsetTop = $('#footer').offset().top - navbarHeight; 
  let name = null, email = null , phonenumber =null , comment = null;

  const scrollUpToTopButton = $('.scrollUpIcon');

  scrollUpToTopButton.on('click', function (evnet) {
    $('html,body').animate({
      scrollTop: 0
    }, 1500);
  })

  //Filter type of product showing
  let productEachSection = productSection.find('.product');
  let portfolioSection = $('.portfolio');
  let portfolioItems = $('.portfolio .item');
  let currentAddingHeight = 0;

  scaleImage(portfolioItems);

  let productItems = productSection.find('.product-info');
  let productItemsGetByJS = document.getElementsByClassName('product-info');
  let dataFilter = null;
  let parentProductClass = null;
  let portfolioSectionHeight = null ;

  for (let index = 0; index < productItemsGetByJS.length; index++) {
    productItemsGetByJS[index].addEventListener('click', function () {
      if (this.classList.contains(portfolioActivedItem)) {
        portfolioSection.removeClass('scrollDown');
        technologySectionOffsetTop -= currentAddingHeight;
        aboutusSectionOffsetTop -= currentAddingHeight;
        contactFormOffsetTop -= currentAddingHeight;
        currentAddingHeight = 0;
        this.classList.remove(portfolioActivedItem)
        this.style.color = '#1a1a1a';
      } else {
         parentProductClass = this.parentElement;
        if (currentAddingHeight == 0) {
          portfolioSection.addClass('scrollDown');
          dataFilter = parentProductClass.getAttribute('data-filter');
          dataFilter = dataFilter.split('.')[1];
          grid.filter(`.${dataFilter}`);

          portfolioSectionHeight = $('.allProducts').height();
          technologySectionOffsetTop += portfolioSectionHeight;
          aboutusSectionOffsetTop += portfolioSectionHeight;
          contactFormOffsetTop += portfolioSectionHeight;
          currentAddingHeight = portfolioSectionHeight;
        } else {
          technologySectionOffsetTop -= currentAddingHeight;
          aboutusSectionOffsetTop -= currentAddingHeight;
          contactFormOffsetTop -= currentAddingHeight;

          portfolioSection.addClass('scrollDown');
          dataFilter = parentProductClass.getAttribute('data-filter');
          dataFilter = dataFilter.split('.')[1];
          grid.filter(`.${dataFilter}`);

          portfolioSectionHeight = $('.allProducts').height();
          technologySectionOffsetTop += portfolioSectionHeight;
          aboutusSectionOffsetTop += portfolioSectionHeight;
          contactFormOffsetTop += portfolioSectionHeight;
          currentAddingHeight = portfolioSectionHeight;
        }
        chooseProductItem(this, productItems, portfolioActivedItem);
      }
    }, true)
  }

  $(window).scroll(function () {
    //Set active class to each section in navbar 
    if ($(this).scrollTop() < serviceSectionOffsetTop) {
      removeActiveClass(navbarItems, 'active')
      navbarItemsGetByJS[0].classList.add('active');
    }
    else if ($(this).scrollTop() >= serviceSectionOffsetTop && $(this).scrollTop() < productSectionOffsetTop) {
      removeActiveClass(navbarItems, 'active')
      navbarItemsGetByJS[1].classList.add('active');
    }
    else if ($(this).scrollTop() >= productSectionOffsetTop && $(this).scrollTop() < technologySectionOffsetTop) {
      removeActiveClass(navbarItems, 'active')
      navbarItemsGetByJS[2].classList.add('active');
    }
    else if ($(this).scrollTop() >= technologySectionOffsetTop && $(this).scrollTop() < aboutusSectionOffsetTop) {
      removeActiveClass(navbarItems, 'active')
      navbarItemsGetByJS[3].classList.add('active');
    }
    else if ($(this).scrollTop() >= aboutusSectionOffsetTop && $(this).scrollTop() < contactFormOffsetTop) {
      removeActiveClass(navbarItems, 'active')
      navbarItemsGetByJS[4].classList.add('active');
    }
    else {
      removeActiveClass(navbarItems, 'active')
      navbarItemsGetByJS[5].classList.add('active');
    }
  });

  //Slider for calculating amount of money
  $(".slider").rangeslider();

  // Scroll to sections position from navbar 
  scrollToSection(navbarItems, navbarHeight);

  //Slider image partner 
  $(".cta-img-container").slick({
    centerMode: true,
    centerPadding: "20px",
    speed: 300,
    slidesToShow: 7,
    dots: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          centerMode: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 340,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //Submit form 
  $("#submit").on('click', function (e) {
    name = $("#fname").val();
    email = $("#femail").val();
    phonenumber = $("#fphonenumber").val();
    comment = $("#comment").val();

    if (!name || !email || !phonenumber || !comment) {
      e.preventDefault();
      alertify.error("You need to completely fill in this form");
      return;
    } else {
      alertify.success("Successfully send information")
    }
  });

  //Handle Slider Image 
  $('.cta-img').on('click', function (event) {
    event.preventDefault();
    var domElement = $(this);
    setTimeout(() => {
      window.open(domElement.find('a').attr('href'), '_blank');
    }, 1000);
  })

  //MuuriJS Actived
  var grid = new Muuri('.grid', {
    dragAxis: 'xy',
    // Default show animation
    showDuration: 300,
    showEasing: 'ease',
    showEasing: 'ease',

    // Default hide animation
    hideDuration: 300,
    hideEasing: 'ease',
    layout: {
      fillGaps: true
    }
  });

});
