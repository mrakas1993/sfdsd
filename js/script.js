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


























})