export default function menuPreviewComponent(){
    function pizzaPreview (){
        const pizzaPreview = document.createElement('div');
            pizzaPreview.classList.add('pizza-preview');
            const pizzaPreviewItem1 = document.createElement('div');
                pizzaPreviewItem1.classList.add('pizza-preview-item');
                const pizzaPreviewItem1Title = document.createElement('h3');
                    pizzaPreviewItem1Title.innerHTML='Pizza Margherita';
                    pizzaPreviewItem1.appendChild(pizzaPreviewItem1Title);
                pizzaPreview.appendChild(pizzaPreviewItem1);
            const pizzaPreviewItem2 = document.createElement('div');
                pizzaPreviewItem2.classList.add('pizza-preview-item');
                const pizzaPreviewItem2Title = document.createElement('h3');
                    pizzaPreviewItem2Title.innerHTML='Pizza Capriciosa';
                    pizzaPreviewItem2.appendChild(pizzaPreviewItem2Title);
                pizzaPreview.appendChild(pizzaPreviewItem2);
            const pizzaPreviewItem3 = document.createElement('div');
                pizzaPreviewItem3.classList.add('pizza-preview-item');
                const pizzaPreviewItem3Title = document.createElement('h3');
                    pizzaPreviewItem3Title.innerHTML='Pizza Quattro Stagioni';
                    pizzaPreviewItem3.appendChild(pizzaPreviewItem3Title);
                pizzaPreview.appendChild(pizzaPreviewItem3);
            return pizzaPreview;
    }

    function burgerPreview (){
    const burgerPreview = document.createElement('div');
        burgerPreview.classList.add('burger-preview');
        const burgerPreviewItem1 = document.createElement('div');
            burgerPreviewItem1.classList.add('burger-preview-item');
            const burgerPreviewItem1Title = document.createElement('h3');
                burgerPreviewItem1Title.innerHTML='Burger Classic';
                burgerPreviewItem1.appendChild(burgerPreviewItem1Title);
            burgerPreview.appendChild(burgerPreviewItem1);
        const burgerPreviewItem2 = document.createElement('div');
            burgerPreviewItem2.classList.add('burger-preview-item');
            const burgerPreviewItem2Title = document.createElement('h3');
                burgerPreviewItem2Title.innerHTML='Burger Cheese';
                burgerPreviewItem2.appendChild(burgerPreviewItem2Title);    
            burgerPreview.appendChild(burgerPreviewItem2);
        const burgerPreviewItem3 = document.createElement('div');   
            burgerPreviewItem3.classList.add('burger-preview-item');
            const burgerPreviewItem3Title = document.createElement('h3');   
                burgerPreviewItem3Title.innerHTML='Burger Bacon';
                burgerPreviewItem3.appendChild(burgerPreviewItem3Title);    
            burgerPreview.appendChild(burgerPreviewItem3);
        return burgerPreview;
    }

    function mexicanPreview (){
    const mexicanPreview = document.createElement('div');
        mexicanPreview.classList.add('mexican-preview');
        const mexicanPreviewItem1 = document.createElement('div');  
            mexicanPreviewItem1.classList.add('mexican-preview-item');
            const mexicanPreviewItem1Title = document.createElement('h3');
                mexicanPreviewItem1Title.innerHTML='Quesadilla';
                mexicanPreviewItem1.appendChild(mexicanPreviewItem1Title);      
            mexicanPreview.appendChild(mexicanPreviewItem1);
        const mexicanPreviewItem2 = document.createElement('div');
            mexicanPreviewItem2.classList.add('mexican-preview-item');
            const mexicanPreviewItem2Title = document.createElement('h3');  
                mexicanPreviewItem2Title.innerHTML='Burrito';
                mexicanPreviewItem2.appendChild(mexicanPreviewItem2Title);  
            mexicanPreview.appendChild(mexicanPreviewItem2);
        const mexicanPreviewItem3 = document.createElement('div');  
            mexicanPreviewItem3.classList.add('mexican-preview-item');
            const mexicanPreviewItem3Title = document.createElement('h3');  
                mexicanPreviewItem3Title.innerHTML='Nachos';
                mexicanPreviewItem3.appendChild(mexicanPreviewItem3Title);  
            mexicanPreview.appendChild(mexicanPreviewItem3);
        return mexicanPreview;
    }

    function streetFoodPreview (){
    const streetFoodPreview = document.createElement('div');
        streetFoodPreview.classList.add('street-food-preview');
        const streetFoodPreviewItem1 = document.createElement('div');
            streetFoodPreviewItem1.classList.add('street-food-preview-item');
            const streetFoodPreviewItem1Title = document.createElement('h3');
                streetFoodPreviewItem1Title.innerHTML='Chifla Chef';
                streetFoodPreviewItem1.appendChild(streetFoodPreviewItem1Title);    
            streetFoodPreview.appendChild(streetFoodPreviewItem1);
        const streetFoodPreviewItem2 = document.createElement('div');   
            streetFoodPreviewItem2.classList.add('street-food-preview-item');
            const streetFoodPreviewItem2Title = document.createElement('h3');   
                streetFoodPreviewItem2Title.innerHTML='Shaorma';
                streetFoodPreviewItem2.appendChild(streetFoodPreviewItem2Title);    
            streetFoodPreview.appendChild(streetFoodPreviewItem2);  
        const streetFoodPreviewItem3 = document.createElement('div');   
            streetFoodPreviewItem3.classList.add('street-food-preview-item');
            const streetFoodPreviewItem3Title = document.createElement('h3');   
                streetFoodPreviewItem3Title.innerHTML='Cârnat';
                streetFoodPreviewItem3.appendChild(streetFoodPreviewItem3Title);    
            streetFoodPreview.appendChild(streetFoodPreviewItem3);  
        return streetFoodPreview;
    }

    function showPreview(option){
        menuPreviewContent.innerHTML='';
        switch(option){
            case 'pizza': menuPreviewContent.appendChild(pizzaPreview());
            break;
            case 'burger': menuPreviewContent.appendChild(burgerPreview());
            break;
            case 'mexican': menuPreviewContent.appendChild(mexicanPreview());
            break;
            case 'street food': menuPreviewContent.appendChild(streetFoodPreview());
            break;
        }
    }

    const menuPreview = document.createElement('div');
        menuPreview.classList.add('menu-preview');
    const menuPreviewTitle = document.createElement('h2');
        menuPreviewTitle.innerHTML='Meniul Teriff';
        menuPreview.appendChild(menuPreviewTitle);
    let previewOptions = [];
    let selectedPreviewOption = 'pizza';

    const menuPreviewParagraph = document.createElement('p');
        menuPreviewParagraph.classList.add('secondary');
        menuPreviewParagraph.innerHTML='pe gustul tău';
        menuPreview.appendChild(menuPreviewParagraph);

    const menuPreviewList = document.createElement('ul');
        menuPreviewList.classList.add('menu-preview-nav');
        const menuPreviewListItem1 = document.createElement('li');
            menuPreviewListItem1.innerHTML="pizza";
            previewOptions.push(menuPreviewListItem1);
            menuPreviewList.appendChild(menuPreviewListItem1);
        const menuPreviewListItem2 = document.createElement('li');
            menuPreviewListItem2.innerHTML="burger";
            previewOptions.push(menuPreviewListItem2);
            menuPreviewList.appendChild(menuPreviewListItem2);
        const menuPreviewListItem3 = document.createElement('li');
            menuPreviewListItem3.innerHTML="mexican";
            previewOptions.push(menuPreviewListItem3);
            menuPreviewList.appendChild(menuPreviewListItem3);
        const menuPreviewListItem4 = document.createElement('li');
            menuPreviewListItem4.innerHTML="street food";
            previewOptions.push(menuPreviewListItem4);
            menuPreviewList.appendChild(menuPreviewListItem4);
    menuPreview.appendChild(menuPreviewList);

    const menuPreviewContent = document.createElement('div');
        menuPreviewContent.classList.add('menu-preview-content');
    menuPreview.appendChild(menuPreviewContent);
    showPreview(selectedPreviewOption);

    previewOptions.forEach(option => {
        option.addEventListener('click', function(){
            selectedPreviewOption = option.innerHTML;
            console.log(selectedPreviewOption);
            showPreview(selectedPreviewOption);
        });
    }); 

    return menuPreview;
}   
