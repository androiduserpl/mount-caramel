//var products = [
//    {
//        name: 'kawa 1',
//        category: 'COFFEE',
//        image: 'src/images/kawa1.js'
//    },
//    {
//        name: 'syrop 1',
//        category: 'SYROP',
//        image: 'img/01.png',
//        link: '#'
//    },
//    {
//        name: 'syrop 2',
//        category: 'SYROP',
//        image: 'img/02.png',
//        link: '#'
//    },
//    {
//        name: 'syrop 3',
//        category: 'SYROP',
//        image: 'img/03.png',
//        link: '#'
//    }, 
//    {
//        name: 'syrop 4',
//        category: 'SYROP',
//        image: 'img/04.png',
//        link: '#'
//    }
//    ,
//    {
//        name: 'kawa 5',
//        category: 'SYROP',
//        image: 'img/05.png',
//        link: '#'
//    },
//]


var products = [
    //COFFEE
{ name: 'Caramel', category: 'COFFEE', image: 'img/caramel500px.png', link: 'COFFEE' },
{ name: 'Salted caramel', category: 'COFFEE', image: 'img/salted_caramel500.png', link: 'COFFEE' },
{ name: 'Caramel with rosemary', category: 'COFFEE', image: 'img/caramel_with_rosemary500.png', link: 'COFFEE' },
{ name: 'Vanilla', category: 'COFFEE', image: 'img/vanilla500.png', link: 'COFFEE' },
{ name: 'Cinnamon', category: 'COFFEE', image: 'img/cinnamon500.png', link: 'COFFEE' },
{ name: 'Chocolate', category: 'COFFEE', image: 'img/chocolate500.png', link: 'COFFEE' },
{ name: 'Walnut', category: 'COFFEE', image: 'img/walnut500.png', link: 'COFFEE' },
{ name: 'Lavender', category: 'COFFEE', image: 'img/lavender500.png', link: 'COFFEE' },
{ name: 'Mint', category: 'COFFEE', image: 'img/mint500.png', link: 'COFFEE' },
    //TEA
{ name: 'Ginger', category: 'TEA', image: 'img/ginger500.png', link: 'TEA' },
{ name: 'Rose', category: 'TEA', image: 'img/rose500.png', link: 'TEA' },
{ name: 'Gingerbread', category: 'TEA', image: 'img/gingerbread500.png', link: 'TEA' },
{ name: 'Flower bouquet', category: 'TEA', image: 'img/flower_bouquet_lemonade500.png', link: 'TEA' },
{ name: 'Elder fruit', category: 'TEA', image: 'img/elder_fruit500.png', link: 'TEA' },
{ name: 'Glögg', category: 'TEA', image: 'img/glogg500.png', link: 'TEA' },
{ name: 'Honey', category: 'TEA', image: 'img/honey500.png', link: 'TEA' },
{ name: 'Rosehip with ginger', category: 'TEA', image: 'img/rosehip-with-ginger500.png', link: '#' },
    //LEMONADE
{ name: 'Lemonade', category: 'LEMONADE', image: 'img/01.png', link: 'LEMONADE' },
{ name: 'Natural cola', category: 'LEMONADE', image: 'img/natural_cola_lemonade500.png', link: 'LEMONADE' },
{ name: 'Orange', category: 'LEMONADE', image: 'img/orange_lemonade500.png', link: 'LEMONADE' },
{ name: 'Lemongrass', category: 'LEMONADE', image: 'img/lemongrass_lemonade500.png', link: 'LEMONADE' },
{ name: 'Cinnamon honey', category: 'LEMONADE', image: 'img/cinnamon_honey_lemonade500.png', link: 'LEMONADE' },
    //PRESERVE
{ name: 'Rose petals', category: 'PRESERVE', image: 'img/01.png', link: 'PRESERVE' },
{ name: 'Walnut caramel', category: 'PRESERVE', image: 'img/01.png', link: 'PRESERVE' },
{ name: 'Walnuts in chocolate', category: 'PRESERVE', image: 'img/01.png', link: 'PRESERVE' },
    //DECORATION
{ name: 'Chocolate', category: 'DECORATION', image: 'img/chocolate500.png', link: 'DECORATION' },
{ name: 'Orange chocolate', category: 'DECORATION', image: 'img/orange_chocolate500.png', link: 'DECORATION' },
{ name: 'Mint chocolate', category: 'DECORATION', image: 'img/mint_chocolate500.png', link: 'DECORATION' },
{ name: 'Chili chocolate', category: 'DECORATION', image: 'img/chili_chocolate500.png', link: 'DECORATION' },

]

function findProductFromCategory(cat) {
    var buf = [];
    products.forEach(function (prod) {
        if (prod.category === cat) {
            buf.push(prod);
        }
    })
    return buf;
}

//slidesToShow: productsArrayLength

function showDataOnSlider(productsArrayLength) {
    $('.multiple-items').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: productsArrayLength
    });
}

function addImagesFromCategoryToSlider(category) {
    var productsFromCategory = findProductFromCategory(category);
    var slider = document.getElementById("mc-slider");
    slider.innerHTML = '';
    productsFromCategory.forEach(function (product) {
        slider.innerHTML += '<a href="' + product.name + '"><img src="' + product.image + '"></a>';
    })
    showDataOnSlider(productsFromCategory.length);
}

//pobranie wszystkich z danej kategori i wrzucenie na widok:
addImagesFromCategoryToSlider('COFFEE');
