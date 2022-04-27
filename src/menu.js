export default function menuPreviewComponent(){
    function pizzaPreview (){
        const pizzaPreview = document.createElement('div');
            pizzaPreview.classList.add('pizza-preview');
            const pizzaPreviewItem1 = document.createElement('div');
                pizzaPreviewItem1.classList.add('pizza-preview-item');
                const pizzaPreviewItem1Title = document.createElement('h3');
                    pizzaPreviewItem1Title.innerHTML='Pizza Margherita';
                    pizzaPreviewItem1.appendChild(pizzaPreviewItem1Title);
                const pizzaPreviewItem1Price = document.createElement('p');
                    pizzaPreviewItem1Price.innerHTML='Price: $9.99';
                    pizzaPreviewItem1.appendChild(pizzaPreviewItem1Price);
                const pizzaPreviewItem1Description = document.createElement('p');
                    pizzaPreviewItem1Description.innerHTML='A classic Margherita pizza with tomato sauce and mozzarella cheese';
                    pizzaPreviewItem1.appendChild(pizzaPreviewItem1Description);
                pizzaPreview.appendChild(pizzaPreviewItem1);
            const pizzaPreviewItem2 = document.createElement('div');
                pizzaPreviewItem2.classList.add('pizza-preview-item');
                const pizzaPreviewItem2Title = document.createElement('h3');
                    pizzaPreviewItem2Title.innerHTML='Pizza Capriciosa';
                    pizzaPreviewItem2.appendChild(pizzaPreviewItem2Title);
                const pizzaPreviewItem2Price = document.createElement('p');
                    pizzaPreviewItem2Price.innerHTML='Price: $12.99';
                    pizzaPreviewItem2.appendChild(pizzaPreviewItem2Price);
                const pizzaPreviewItem2Description = document.createElement('p');
                    pizzaPreviewItem2Description.innerHTML='A splendidly simple Capriciosa pizza with tomato sauce, mozzarella cheese, and prosciutto';
                    pizzaPreviewItem2.appendChild(pizzaPreviewItem2Description);
                pizzaPreview.appendChild(pizzaPreviewItem2);
            const pizzaPreviewItem3 = document.createElement('div');
                pizzaPreviewItem3.classList.add('pizza-preview-item');
                const pizzaPreviewItem3Title = document.createElement('h3');
                    pizzaPreviewItem3Title.innerHTML='Pizza Quattro Stagioni';
                    pizzaPreviewItem3.appendChild(pizzaPreviewItem3Title);
                const pizzaPreviewItem3Price = document.createElement('p');
                    pizzaPreviewItem3Price.innerHTML='Price: $14.99';
                    pizzaPreviewItem3.appendChild(pizzaPreviewItem3Price);
                const pizzaPreviewItem3Description = document.createElement('p');
                    pizzaPreviewItem3Description.innerHTML='A delicious quattro stagioni pizza with tomato sauce, mozzarella cheese, mushrooms, artichokes, and olives';
                    pizzaPreviewItem3.appendChild(pizzaPreviewItem3Description);
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
            const burgerPreviewItem1Price = document.createElement('p');
                burgerPreviewItem1Price.innerHTML='Price: $9.99';
                burgerPreviewItem1.appendChild(burgerPreviewItem1Price);
            const burgerPreviewItem1Description = document.createElement('p');
                burgerPreviewItem1Description.innerHTML='A classic burger with lettuce, tomato, pickles, mayo, and a juicy beef patty';
                burgerPreviewItem1.appendChild(burgerPreviewItem1Description);
            burgerPreview.appendChild(burgerPreviewItem1);
        const burgerPreviewItem2 = document.createElement('div');
            burgerPreviewItem2.classList.add('burger-preview-item');
            const burgerPreviewItem2Title = document.createElement('h3');
                burgerPreviewItem2Title.innerHTML='Burger Cheese';
                burgerPreviewItem2.appendChild(burgerPreviewItem2Title);
            const burgerPreviewItem2Price = document.createElement('p');
                burgerPreviewItem2Price.innerHTML='Price: $12.99';
                burgerPreviewItem2.appendChild(burgerPreviewItem2Price);
            const burgerPreviewItem2Description = document.createElement('p');
                burgerPreviewItem2Description.innerHTML='A delicious burger with added cheddar and monterey jack cheese';
                burgerPreviewItem2.appendChild(burgerPreviewItem2Description);
            burgerPreview.appendChild(burgerPreviewItem2);
        const burgerPreviewItem3 = document.createElement('div');   
            burgerPreviewItem3.classList.add('burger-preview-item');
            const burgerPreviewItem3Title = document.createElement('h3');   
                burgerPreviewItem3Title.innerHTML='Burger Bacon';
                burgerPreviewItem3.appendChild(burgerPreviewItem3Title);
            const burgerPreviewItem3Price = document.createElement('p');
                burgerPreviewItem3Price.innerHTML='Price: $14.99';
                burgerPreviewItem3.appendChild(burgerPreviewItem3Price);
            const burgerPreviewItem3Description = document.createElement('p');
                burgerPreviewItem3Description.innerHTML='The luxurious burger experience you already know and love, with added bacon';
                burgerPreviewItem3.appendChild(burgerPreviewItem3Description);
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
            const mexicanPreviewItem1Price = document.createElement('p');
                mexicanPreviewItem1Price.innerHTML='Price: $9.99';
                mexicanPreviewItem1.appendChild(mexicanPreviewItem1Price);
            const mexicanPreviewItem1Description = document.createElement('p');
                mexicanPreviewItem1Description.innerHTML='A delicious quesadilla lorem ipsum dolor sit amet';
                mexicanPreviewItem1.appendChild(mexicanPreviewItem1Description);
            mexicanPreview.appendChild(mexicanPreviewItem1);
        const mexicanPreviewItem2 = document.createElement('div');
            mexicanPreviewItem2.classList.add('mexican-preview-item');
            const mexicanPreviewItem2Title = document.createElement('h3');  
                mexicanPreviewItem2Title.innerHTML='Burrito';
                mexicanPreviewItem2.appendChild(mexicanPreviewItem2Title);
            const mexicanPreviewItem2Price = document.createElement('p');
                mexicanPreviewItem2Price.innerHTML='Price: $12.99';
                mexicanPreviewItem2.appendChild(mexicanPreviewItem2Price);
            const mexicanPreviewItem2Description = document.createElement('p');
                mexicanPreviewItem2Description.innerHTML='A delicious burrito lorem ipsum dolor sit amet';
                mexicanPreviewItem2.appendChild(mexicanPreviewItem2Description);
            mexicanPreview.appendChild(mexicanPreviewItem2);
        const mexicanPreviewItem3 = document.createElement('div');  
            mexicanPreviewItem3.classList.add('mexican-preview-item');
            const mexicanPreviewItem3Title = document.createElement('h3');  
                mexicanPreviewItem3Title.innerHTML='Nachos';
                mexicanPreviewItem3.appendChild(mexicanPreviewItem3Title);
            const mexicanPreviewItem3Price = document.createElement('p');
                mexicanPreviewItem3Price.innerHTML='Price: $14.99';
                mexicanPreviewItem3.appendChild(mexicanPreviewItem3Price);
            const mexicanPreviewItem3Description = document.createElement('p');
                mexicanPreviewItem3Description.innerHTML='Delicious nachos lorem ipsum dolor sit amet';
                mexicanPreviewItem3.appendChild(mexicanPreviewItem3Description);
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
            const streetFoodPreviewItem1Price = document.createElement('p');
                streetFoodPreviewItem1Price.innerHTML='Price: $9.99';
                streetFoodPreviewItem1.appendChild(streetFoodPreviewItem1Price);
            const streetFoodPreviewItem1Description = document.createElement('p');
                streetFoodPreviewItem1Description.innerHTML='A delicious chifla chef lorem ipsum dolor sit amet';
                streetFoodPreviewItem1.appendChild(streetFoodPreviewItem1Description);
                streetFoodPreview.appendChild(streetFoodPreviewItem1);
        const streetFoodPreviewItem2 = document.createElement('div');   
            streetFoodPreviewItem2.classList.add('street-food-preview-item');
            const streetFoodPreviewItem2Title = document.createElement('h3');   
                streetFoodPreviewItem2Title.innerHTML='Shaorma';
                streetFoodPreviewItem2.appendChild(streetFoodPreviewItem2Title);
            const streetFoodPreviewItem2Price = document.createElement('p');
                streetFoodPreviewItem2Price.innerHTML='Price: $12.99';
                streetFoodPreviewItem2.appendChild(streetFoodPreviewItem2Price);
            const streetFoodPreviewItem2Description = document.createElement('p');
                streetFoodPreviewItem2Description.innerHTML='A delicious shaorma lorem ipsum dolor sit amet';
                streetFoodPreviewItem2.appendChild(streetFoodPreviewItem2Description);
            streetFoodPreview.appendChild(streetFoodPreviewItem2);  
        const streetFoodPreviewItem3 = document.createElement('div');   
            streetFoodPreviewItem3.classList.add('street-food-preview-item');
            const streetFoodPreviewItem3Title = document.createElement('h3');   
                streetFoodPreviewItem3Title.innerHTML='Cârnat'; 
                streetFoodPreviewItem3.appendChild(streetFoodPreviewItem3Title);
            const streetFoodPreviewItem3Price = document.createElement('p');
                streetFoodPreviewItem3Price.innerHTML='Price: $14.99';
                streetFoodPreviewItem3.appendChild(streetFoodPreviewItem3Price);    
            const streetFoodPreviewItem3Description = document.createElement('p');
                streetFoodPreviewItem3Description.innerHTML='A delicious cârnat lorem ipsum dolor sit amet';
                streetFoodPreviewItem3.appendChild(streetFoodPreviewItem3Description);
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
