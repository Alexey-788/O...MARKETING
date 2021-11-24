$(function() {

    //Burger menu

    (function() {
        let burgerBtn = document.getElementsByClassName('header__menu-burger')[0];
        burgerBtn.addEventListener('click', function() {
            let headerTopRow = document.getElementsByClassName('header__top-row')[0];
            headerTopRow.classList.toggle('header__top-row--active');
        });
    })();
    
    //Portfolio filter
    (function() {
        
        let filterButtons =
        Array.from(document.getElementsByClassName('portfolio__filter-button'));
        filterButtons.forEach(button => {
            button.addEventListener('click', event => {
                changeActiveButton(button);

                let filterName = getFilterName();

                updatePhotosState(filterName);
            });
        });

        function changeActiveButton(activeButton) {
            filterButtons.forEach(button => {
                button.classList.remove('portfolio__filter-button--active');
            });
            activeButton.classList.add('portfolio__filter-button--active');
        }

        function getFilterName() {

            let currentButton = document.getElementsByClassName('portfolio__filter-button--active')[0];
            let buttonFilterClass = Array.from(currentButton.classList).find(btnClass => {
                return btnClass.startsWith('portfolio__filter-filter');
            });
            let filterName = buttonFilterClass.replace('portfolio__filter-filter-', '');

            return filterName;
        }

        function updatePhotosState(filterName) {
            let photoItems =
            Array.from(document.getElementsByClassName('portfolio__photos-item'));
            
            photoItems.forEach(photoItem => {
                let satisfiesFilter = false;

                Array.from(photoItem.classList).forEach(photoClass => {
                    if (photoClass == 'portfolio__photos-filter-'+filterName || filterName == 'all') {
                        satisfiesFilter = true;
                    }
                });

                let photoLink = photoItem.getElementsByClassName('portfolio__phots-link')[0];

                if (satisfiesFilter) {
                    photoItem.classList.remove('portfolio__photos-disabled');
                    photoLink.setAttribute('data-fancybox', 'portfolio');
                } else {
                    photoItem.classList.add('portfolio__photos-disabled');
                    photoLink.removeAttribute('data-fancybox');
                }
            });
        }
    })();

    $('.slider__inner').slick({
        prevArrow: '<button class="slick-prev"><img src="img/arrow-left.svg" alt="Показать предыдущий слайд"></button>',
        nextArrow: '<button class="slick-next"><img src="img/arrow-right.svg" alt="Показать предыдущий слайд"></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                  arrows: false,
                }
              },
        ],
    });
})