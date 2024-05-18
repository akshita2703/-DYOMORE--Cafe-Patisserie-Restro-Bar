  document.getElementById('next').onclick = function() {
      let lists = document.querySelectorAll('.item');
      document.getElementById('slide').appendChild(lists[0]);
  }
  document.getElementById('prev').onclick = function() {
      let lists = document.querySelectorAll('.item');
      document.getElementById('slide').prepend(lists[lists.length - 1]);
  }
  document.querySelector("#ftext button").addEventListener("mouseover", function() {
      gsap.to("#future video", {
          opacity: 1,
          duration: 1,
          ease: Power4

      }) 
  })
  document.querySelector("#ftext button").addEventListener("mouseleave", function() {
      gsap.to("#future video", {
          opacity: 0,
          duration: 1,
          ease: Power4

      })
  })

  gsap.to(".partyimgcontainer", {
      width: "100%",
      ease: Expo.easInOut,
      //   duration: 2,
      stagger: 2

  })
  gsap.to(".partytext h1", {

      ease: Expo.easInOut,
      stagger: 2,
      top: 0


  })
  gsap.to(".partytext h1", {
      delay: 2,
      ease: Expo.easInOut,
      stagger: 2,
      top: "-100%"

  })

  const fxn = () => {


      gsap.to(".partyimgcontainer", {
          width: "100%",
          ease: Expo.easInOut,
          //   duration: 2,
          stagger: 2

      })
      gsap.to(".partytext h1", {

          ease: Expo.easInOut,
          stagger: 2,
          top: 0


      })
      gsap.to(".partytext h1", {
          delay: 2,
          ease: Expo.easInOut,
          stagger: 2,
          top: "-100%"

      })
  }

  const fx = () => {


      gsap.to(".partyimgcontainer", {
          width: "100%",
          ease: Expo.easInOut,
          //   duration: 2,
          stagger: 2

      })
      gsap.to(".partyimgcontainer", {
          delay: 2,
          width: "0%",
          ease: Expo.easInOut,
          //   duration: 2,
          stagger: 2

      })

  }

  setInterval(fxn, 6000);
  setInterval(fx, 6000);

  const opd = () => {
      document.getElementById("dialog").showModal()
  }