window.addEventListener('DOMContentLoaded',()=>{
    //табы
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabParent = document.querySelector('.tabheader');

    function hideTabContent(){
        tabsContent.forEach(item =>{
            item.style.display = 'none';
        });
        tabs.forEach(item =>{
            item.classList.remove('tabheader__item_active');
        })
    }
    
    function showTabContent(i=0){
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click',(event)=>{
        if(event.target && event.target.classList.contains('tabheader__item')){
            tabs.forEach((item,i)=>{
                if(event.target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
    //слайдер
    const slides = document.querySelectorAll('.offer__slide'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          current = document.querySelector('#current'),
          total = document.querySelector('#total');
    let slideIndex = 1;

    function showSlides(n){
        if(n>slides.length){ 
            slideIndex=1;
        }
        if(n<1){
            slideIndex = slides.length;
        }

        if(slides.length<10){
            total.textContent=`0${slides.length}`;
        }else{
            total.textContent = slides.length;
        }

        if(slideIndex < 10){
            current.textContent = `0${slideIndex}`;
        }else{
            current.textContent = slideIndex;
        }
        slides.forEach(item => item.style.display ="none");
        slides[slideIndex-1].style.display = "block";
    }
    showSlides(slideIndex);

    function plusSlide(n){
        showSlides(slideIndex+=n);//slideIndex = slideIndex + 1//2//3
    }

    next.addEventListener('click',()=>{
        plusSlide(1);
    })
    prev.addEventListener('click',()=>{
        plusSlide(-1);
    })
    // таймер
    const timeEnd = '2023-02-05 13:00:00';
    let timer = document.querySelector('.timer'),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        t = Date.parse(timeEnd)-Date.parse(new Date());
        





















})