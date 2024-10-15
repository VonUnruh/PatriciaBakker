ScrollTrigger.defaults({
	markers: false
});


const header = document.querySelector('.header');

// ScrollTrigger for detecting scroll up or down
ScrollTrigger.create({
	start: "top top", // Start the trigger at the top of the page
	end: "bottom bottom", // End the trigger at the bottom of the page
  onUpdate: (self) => {
    if (self.direction === 1) {
      // Scrolling down: move the header up (y: -100%)
      gsap.to(header, {
        yPercent: -100,
        duration: 0.7, // Animation duration
        ease: "ease-in",
        backgroundColor: "transparent"
      });
    } else {
      // Scrolling up: move the header back (y: 0)
      gsap.to(header, {
        yPercent: 0,
        duration: 0.7, // Animation duration
        ease: "ease-out",
        backgroundColor: "var(--surface--surface)"
      });
    }
  }
});

/* Scroll Animation Hero */
gsap.from('.hero_welcome_text', {
	yPercent: 150,
  opacity: 0,
  scrollTrigger: {
  	trigger: '.hero_welcome_text_wrapper',
    //toggleActions: "play none none none",
    scrub: true,
    start: "top bottom",
    end: "bottom 80%"
  }
});

/* Scroll Animation About */
let tlAbout = gsap.timeline();

tlAbout.from("#about1", {
  x: -100,
  opacity: 0
});

tlAbout.from("#aboutImage", {
	x: 100,
  opacity: 0
});

tlAbout.from("#about2", {
	x: -100,
  opacity: 0
});

ScrollTrigger.create({
	animation: tlAbout,
  trigger: ".section_about",
  start: "-100px center",
  end: "75% center",
  scrub: true,
  toggleActions: "play none none none",
  id: "about"
});

/* Animation of the story section */

let tlStory1 = gsap.timeline();

tlStory1.from("#story1", { yPercent: 100, opacity: 0 })
        .from("#story2", { yPercent: 100, opacity: 0 })
        .from("#story3", { yPercent: 100, opacity: 0 })
        .fromTo("#story4", { opacity: 0 }, { yPercent: -5, opacity: 0.7 }, "<")
	.to("#storyBlock1", { yPercent: 100 });

ScrollTrigger.create({
  animation: tlStory1,
  trigger: '#storyBlock1',
  scrub: true,
  toggleActions: "play none none none",
  id: 'storyBlock1',
  markers: true,
  //pin: '#storyBlock1',
  start: "top center",
  end: "center center"
});
