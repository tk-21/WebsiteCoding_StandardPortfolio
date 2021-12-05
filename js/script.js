/* 背景動画 */
$(function () {
  $("#youtube").YTPlayer();
});

/* フェードイン */
$(function () {
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

/* スライダー */
$(function () {
  $(".slider").slick({
    dots: false,
    arrows: false,
    variableWidth: true,
    slidesToShow: 1,
    centerMode: true, //要素を中央寄せ
    // centerPadding: "273px", //両サイドの見えている部分のサイズ
    autoplay: true, //自動再生
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
        },
      },
    ],
  });
});
