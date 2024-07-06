document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here!
  function PageTransition() {
    let t1 = gsap.timeline();
    t1.to(".transition", {
      duration: 1,
      scaleY: 1,
      transformOrigin: "bottom",
      ease: "power4.inOut",

    })
    t1.to(".transition", {
      duration: 1,
      scaleY: 0,
      transformOrigin: "top",
      ease: "power4.inOut",
      delay: 0.1,

    })
  }
  function contentAnimation() {
    const t1 = gsap.timeline();
    t1.from(".demo", {
      opacity: 0,
      ease: "power1.inOut"
    })
    t1.to(".demo", {
      opacity: 1,
      duration: 1,
      delay: 1.2,
      ease: "power1.inOut"
    })
  }
  function fadeAnimation(namespace) {
    console.log(namespace);
    gsap.to(namespace, {
      display: "none",
      backgroundColor: "red"
    })
  }


  barba.init({
    sync: true,
    transitions: [{

      async leave(data) {
        var done = this.async();
        // Your async code.
        setTimeout(function () {
          // Let's simulate an error, sometimes.          
          // All done!
          done();
        }, 1000);
        PageTransition()
        await delay(1000)
        done()

      },
      async enter(data) {
        contentAnimation(data.next.container);
      }
    }]
  });
});