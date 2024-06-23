

const newsLoader = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await response.json();
    const allData = data.data.news_category;
    console.log(allData);
    const newsNav = document.getElementById('news_nav');
    allData.forEach((item) => {
        console.log(item.category_name);

        // display category in the navigation Bar 

        const div = document.createElement('div');
        div.innerHTML = `<button onclick ="handleCategoryButton('${item.category_id}')" class="btn btn-accent">${item.category_name}</button>`

        newsNav.appendChild(div)


    });

}
newsLoader();

// handleCategoryButton

async function handleCategoryButton(item_categoryId) {
    console.log(item_categoryId);
    const spinner = document.getElementById('loading-spinner');
    spinner.classList.remove('hidden')
    spinner.classList.add('flex')
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${item_categoryId}`);
    const data = await response.json();
    allData = data.data;

    if (allData.length > 0) {
        const spinner = document.getElementById('loading-spinner');
        spinner.classList.add('hidden')
        
    }else if(allData.length == 0){
        const noData = document.getElementById('no_data');
        noData.classList.remove('hidden')
        noData.classList.add('flex');
        
        const spinner = document.getElementById('loading-spinner');
        spinner.classList.add('hidden')
       
    }

    console.log(allData);
    const displayNews = document.getElementById('display_news');
    displayNews.innerText = " ";
    allData.forEach((item) => {
        console.log(item.title);
        const div = document.createElement('div');
        div.innerHTML = `<div class="mb-3 border-red-500 flex justify-center border rounded-lg w-2/3 ml-56  shadow-lg shadow-black gap-y-2">
             <div class="w-full flex items-center justify-center">
                <img src="Resources/unsplash_EhTcC9sYXsw.png" alt="">
            </div>
             <div class="">

                <h2 class="text-xl font-bold">${item.title}</h2>
            
                <p class="mb-8">${item.details.slice(0, 338)}</p>

                
                <div class="flex items-center justify-around mt-3">

                    <div class="flex items-center  gap-1">
                        <img src="Resources/Rectangle 19.png" alt="">
                        <p>jene cooper</p>
                    </div>

                    <div class="flex items-center">
                        <img src="Resources/carbon_view.png" alt="">
                        <p>1.5M</p>
                    </div>

                    <!-- rating -->
                     <div class="flex justify-center items-center gap-2">
                        <div>2.5</div>
                        <div class="rating">
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" checked />
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" />
                          </div>
                     </div>
                     <div>
                        <button  class="btn btn-accent">Details</button>
                     </div>

                </div>
            </div>
    </div>`
        displayNews.appendChild(div);
    })

};

// handleBtn
 function handleBtn(categories_id){
    const getInputValue = document.getElementById('input_value');
    const inputValue = getInputValue.value;
    
    if(inputValue){
        handleCategoryButton(inputValue)
    }else{
        alert('enter a valid category id');
    }
 }

 handleCategoryButton('01');