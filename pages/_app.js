import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    
      <div class="container">
        <div class="sidebar">
          <input
            type="checkbox"
            name="toggle"
            id="sidebar-toggle"
            class="sidebar__input"
          />
          <label for="sidebar-toggle" class="sidebar__label">
            <div class="sidebar__btn"></div>
          </label>

          <div class="sidebar__bg"></div>
          <ul class="list">
            <li class="list__item">
              <a href="index.html" class="list__link">
                صفحه اصلی
              </a>
            </li>
            <li class="list__item">
              <a href="#" class="list__link">
                ویژگی ها
              </a>
            </li>
            <li class="list__item">
              <a href="" class="list__link">
                نظرات
              </a>
            </li>
            <li class="list__item">
              <a href="houses.html" class="list__link">
                خانه ها
              </a>
            </li>
            <li class="list__item">
              <a href="#" class="list__link">
                گالری
              </a>
            </li>
          </ul>
        </div>

        <header class="header">
          <img src="img/logo.png" alt="Nexter Logo" class="header__logo" />
          <h3 class="u-heading-3 u-heading--light">خانه خودتان:</h3>
          <h1 class="u-heading-1">با خرید خانه نهایت آزادی را احساس کنید</h1>
          <button class="btn header__btn btn-brown">
            املاک ما را مشاهده کنید
          </button>

          <p class="seeon__text">دیده می شود در</p>
          <figure class="seeon__box-img">
            <img src="img/logo-bbc.png" alt="BBC" class="seeon__img" />
            <img src="img/logo-bi.png" alt="BBC" class="seeon__img" />
            <img src="img/logo-forbes.png" alt="BBC" class="seeon__img" />
            <img src="img/logo-techcrunch.png" alt="BBC" class="seeon__img" />
          </figure>
        </header>

        <div class="real-tors">
          <p class="real-tors__tittle">سه مالک برتر</p>
          <div class="real-tors__list">
            <img
              src="img/realtor-1.jpeg"
              alt="real-tors top 1"
              class="real-tors__img"
            />
            <div class="real-tors__details">
              <h3 class="u-heading-3 u-heading--white">مهدی ایلخانی نسب</h3>
              <p class="real-tors__text">869 فروش خانه</p>
            </div>

            <img
              src="img/realtor-2.jpeg"
              alt="real-tors top 2"
              class="real-tors__img"
            />
            <div class="real-tors__details">
              <h3 class="u-heading-3 u-heading--white">کوثر بهشتی</h3>
              <p class="real-tors__text">243 فروش خانه</p>
            </div>

            <img
              src="img/realtor-3.jpeg"
              alt="real-tors top 3"
              class="real-tors__img"
            />
            <div class="real-tors__details">
              <h3 class="u-heading-3 u-heading--white">عرشیا احسنی</h3>
              <p class="real-tors__text">130 فروش خانه</p>
            </div>
          </div>
        </div>

        <Component {...pageProps} />

        <footer class="footer">
          <ul class="nav">
            <li class="nav__item">
              <a href="#" class="nav__link">
                خانه رویایی خود را پیدا کنید
              </a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">
                درخواست پروپوزال
              </a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">
                برنامه اجاره خانه ها
              </a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">
                با ما تماس بگیرید
              </a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">
                ملک خود را ارسال کنید
              </a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">
                با ما کار کنید
              </a>
            </li>
          </ul>

          <p class="copyright">
            &copy; حقوق مادی معنوی این سایت برای
            <strong class="copyright__name">مهدی ایلخانی نسب</strong>
            محفوظ میباشد
          </p>
        </footer>
      </div>
    
  )
}
