const header = `<div class="container">
        <nav class="navbar navbar-expand-lg navbar-light row">
            <div class="d-flex align-items-center justify-content-between">
                <div class="col-4 d-lg-none d-xl-none d-xxl-none">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="col-4 col-md-3 text-center">
                  <a class="navbar-brand" href="#"><img src="./assets/images/img_logo-all-dark.svg"></a>
                </div>
                <div class="col-4 d-md-none text-end">
                    <a class="nav-link" href="#"><img src="assets/images/icon_shopping_cart.png"></a>
                </div>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">首頁</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">甜點</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">登入</a>
                        </li>
                        <li class="nav-item d-none d-sm-block d-md-block">
                            <a class="nav-link" href="#"><img src="assets/images/icon_shopping_cart.png"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>`
document.querySelector("#header").innerHTML = header

const footer =`<div class="container">
            <div class="row">
                <div class="col-12 col-md-6 flex-column d-flex align-items-start">
                    <div class="mb-4">
                        <img src="./assets/images/img_logotype-sm-dark.svg" width="60%">
                    </div>
                    <div class="mt-auto">
                        <ul>
                            <li><a href="tel:+886-7-12345678">07-1234-5678</a></li>
                            <li><a href="mailto:weetaste@email.com">weetaste@email.com</a></li>
                            <li><p>800 高雄市新興區幸福路 520 號</p></li>
                        </ui>
                    </div>
                </div>
                <div class="col-6 text-end d-none d-sm-block">
                    <div>
                        <img src="./assets/images/text_footer.svg" width="12%">
                    </div>
                </div>
            </div>
            <div class="row d-flex align-items-end mt-4 gy-3">
                <div class="col-12 col-md-6">
                    <img src="./assets/images/ic-line@.svg" width="32px">
                    <img src="./assets/images/ic-facebook.svg" width="32px">
                </div>
                <div class="col-12 col-md-6 text-md-end">
                    <p class="mb-0">© 2018 Sweetaste* All Rights Reserved</p>
                </div>
            </div>
        </div>`
document.querySelector("#footer").innerHTML = footer