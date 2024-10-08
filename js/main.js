const headerNav = document.querySelector(".header-nav");

const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  headerNav.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});

const headerNavMenus = document.querySelectorAll(
  ".headerNavMenu, .link, .btn"
)

headerNavMenus.forEach((headerNavMenu) => {
  headerNavMenu.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active")
    headerNav.classList.remove("active")
  })
})

// kasuya修正 linkタグを全て取得したいのでquerySelectorAllを使います。
const links = document.querySelectorAll(".link")
// const links = document.querySelector(".link")

links.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active")
    headerNav.classList.remove("active")
  })
})

// kasuya追記 BBBが選ばれる理由と受験生の声アニメーション

 // .slide クラスの要素をすべて取得
 const reasonElements = document.querySelectorAll('.slide');
 // .inview-balloon クラスの要素をすべて取得
 const balloonElements = document.querySelectorAll('.inview-balloon');

 // Intersection Observer のオプションを設定
 const options = {
     root: null, // ビューポートをルートとする（null はデフォルトでビューポートを意味する）
     rootMargin: '0px', // ルートマージンを設定（オフセットなし）
     threshold: 0.1 // 要素の10%がビューポート内に入った時にコールバックを実行
 };

 // Intersection Observer のコールバック関数
 const callback = (entries, observer) => {
     // 各エントリ（監視対象）を処理
     entries.forEach(entry => {
         // 要素がビューポートに入ったかどうかをチェック
         if (entry.isIntersecting) {
             // ビューポートに入った場合、visible クラスを追加
             entry.target.classList.add('visible');
             // 一度クラスを追加したら監視を解除
             observer.unobserve(entry.target);
         }
     });
 };

 // Intersection Observer のインスタンスを作成
 const observer = new IntersectionObserver(callback, options);

 // .slide クラスの要素をすべて監視対象に追加
 reasonElements.forEach(element => {
     observer.observe(element);
 });

 // .inview-balloon クラスの要素をすべて監視対象に追加
 balloonElements.forEach(element => {
     observer.observe(element);
 });
