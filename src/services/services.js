export async function restaurants() {
    let response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=34.0836708&lng=74.7972825&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
     return await response.json()
}

export let MENU_URl = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=34.0836708&lng=74.7972825&restaurantId='

export let IMAGE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

export let LOGO_URL = "https://cdn.iconscout.com/icon/premium/png-512-thumb/food-delivery-2570501-2143639.png?f=webp&w=512"


// const ApiKey = '7362a5661ade3ec5';
// const EDUCORS_URL = 'https://educorssolver.host/api/getData';
// const Target = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=34.0836708&lng=74.7972825&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
// export async function getData(){
//   const response = await fetch(`${EDUCORS_URL}?ApiKey=${ApiKey}&Target=${encodeURIComponent(Target)}`);
//   return await response.json();
// }

