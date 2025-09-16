document.addEventListener('DOMContentLoaded', () => {
  const wrap = new Swiper('#wrap', {
    direction: 'vertical',
    mousewheel: true,
    speed: 550,
  });

  wrap.on('slideChange', function () {
    const idx = this.activeIndex;

    // 항상 초기화
    gsap.set('.brand-story .text p', {opacity:0, y:50});

    // 두 번째 슬라이드일 때만 애니메이션 실행
    if (idx === 1) {
      gsap.to('.brand-story .text p', {
        opacity:1, y:0, duration:1, stagger:0.3
      });
    }
  });
});
