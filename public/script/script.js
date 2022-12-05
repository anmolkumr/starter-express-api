function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("reactive");
    } else {
      reveals[i].classList.remove("reactive");
    }
  }
}
function playPauseVideo() {
  let videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    video.muted = true;
    let playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then((_) => {
        let observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                entry.intersectionRatio !== 1 &&
                !video.paused
              ) {
                video.pause();
              } else if (video.paused) {
                video.play();
              }
            });
          },
          { threshold: 0.2 }
        );
        observer.observe(video);
      });
    }
  });
}

// And you would kick this off where appropriate with:
playPauseVideo();
window.addEventListener("scroll", reveal);

$(window).load(function () {
    $(".loaer").delay(3000).fadeOut('slow');
});

setTimeout(function () {
  $('.loader').fadeOut('slow');
}, 3000);

function onClickMenu() {
  document.getElementById("menu").classList.toggle("icon");
  // document.getElementById("nav").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
}
var lastScrollTop;

navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

function onClickMenu() {
  document.getElementById("menu").classList.toggle("icon");
  document.getElementById("nav").classList.toggle("change");
}
// let bar = document.querySelector(".bar")
// let nav= document.querySelector(".nav")
// bar.addEventListener('click', show);
// function show() {
//     nav.style.display= 'grid';
//     // cross.style.display='inline-block';
//     // hamburger.style.display='none';
// }
// hero ------------------------------------------------------
var wideScreen = window.matchMedia("(min-width: 800px)");
var narrowScreen = window.matchMedia("(max-width: 799px)");

if (wideScreen.matches) {
  gsap.to(".hero-bg", {
    y: -200,
    duration: 10,
    scrollTrigger: {
      trigger: "hero-bg",
      scrub: true,
      smooth: 3,
      // pin:true,
      start: "top top",
      // end:".wayslider",
      // markers:true
    },
  });
  gsap.to(".hero-hills", {
    y: 100,
    duration: 5,
    scrollTrigger: {
      trigger: ".hero-hills",
      scrub: true,
      smooth: 1,
      // pin:true,
      start: "left left",
      // end:"bottom",
      // markers:true
    },
  });

  // gsap.to(".pronites", {
  //     y: 100,
  //     duration: 5,
  //     scrollTrigger: {
  //         trigger: ".wayslider",
  //         scrub: true,
  //         smooth: 1,
  //         // pin:true,
  //         start: "left left",
  //         // end:"top bottom",
  //         // markers:true

  //     },
  // })

  gsap.to(".hero", {
    y: 100,
    duration: 5,
    scrollTrigger: {
      trigger: ".hero",
      scrub: true,
      smooth: 1,
      // pin:true,
      start: "left left",
      // end:"top bottom",
      // markers:true
    },
  });
} else {
}

// event section

(function () {
  // Use these to target scroll position
  var $indicator1,
    $indicator2,
    $indicator3,
    $indicator4,
    $slide1,
    $slide2,
    $slide3,
    $slide4;

  $indicator1 = $(".wayslider__slide-1");

  $indicator2 = $(".wayslider__slide-2");

  $indicator3 = $(".wayslider__slide-3");

  $indicator4 = $(".wayslider__slide-4");

  // Use these to target your slides
  $slide1 = $(".wayslider__indicator-1");

  $slide2 = $(".wayslider__indicator-2");

  $slide3 = $(".wayslider__indicator-3");

  $slide4 = $(".wayslider__indicator-4");

  // Slide 1 settings
  $slide1.waypoint(
    function (direction) {
      if (direction === "down") {
        $indicator1.addClass("animate");
      } else {
        $indicator1.removeClass("animate");
      }
    },
    {
      offset: "70%",
    }
  );

  // Slide 2 settings
  $slide2.waypoint(
    function (direction) {
      if (direction === "down") {
        $indicator1.addClass("animateBg");
        $indicator2.addClass("animate");
        document.getElementById("register").getAttributeNode("onclick").value =
          "location.href='./register/synchr.html'";
        document.getElementById("register").getAttributeNode("onclick").value =
          "location.href='./register/synchr.html'";
      } else {
        $indicator1.removeClass("animateBg");
        $indicator2.removeClass("animate");
        document.getElementById("register").getAttributeNode("onclick").value =
          "location.href='./register/panache.html'";
      }
    },
    {
      offset: "50%",
    }
  );

  // Slide 3 settings
  $slide3.waypoint(
    function (direction) {
      if (direction === "down") {
        $indicator2.addClass("animateBg");
        $indicator3.addClass("animate");
        document.getElementById("register").getAttributeNode("onclick").value =
          "location.href='/register/antaragnee.html'";
      } else {
        $indicator2.removeClass("animateBg");
        $indicator3.removeClass("animate");
        document.getElementById("register").getAttributeNode("onclick").value =
          "location.href='/register/synchr.html'";
      }
    },
    {
      offset: "100%",
    }
  );

  // Slide 4 settings
  $slide4.waypoint(
    function (direction) {
      if (direction === "down") {
        $indicator3.addClass("animateBg");
        $indicator4.addClass("animate");
        document.getElementById("more").getAttributeNode("onclick").value =
          "location.href='\/events'";
      } else {
        $indicator3.removeClass("animateBg");
        $indicator4.removeClass("animate");
      }
    },
    {
      offset: "100%",
    }
  );
}.call(this));


var heroBg = document.getElementById('hero')
window.addEventListener('scroll', function () {
    if (this.window.scrollY < 600) {
      
      heroBg.style.opacity = 1 - +this.window.scrollY / 550 + ''
      heroBg.style.top = - +this.window.scrollY + 'px'
      heroBg.style.backgroundPositionY = - +this.window.scrollY / 2 + 'px'
    }
})