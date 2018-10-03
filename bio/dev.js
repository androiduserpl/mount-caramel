var products = [
    //COFFEE
{ name: 'Caramel', category: 'COFFEE', image: 'http://mountcaramel.pl/mc-v3/bio/img/caramel500px.png', link: 'COFFEE' },
{ name: 'Salted caramel', category: 'COFFEE', image: 'http://mountcaramel.pl/mc-v3/bio/img/salted_caramel500.png', link: 'COFFEE' },
{ name: 'Caramel with rosemary', category: 'COFFEE', image: 'http://mountcaramel.pl/mc-v3/bio/img/caramel_with_rosemary500.png', link: 'COFFEE' },
{ name: 'Vanilla', category: 'COFFEE', image: 'http://mountcaramel.pl/mc-v3/bio/img/vanilla500.png', link: 'COFFEE' },
{ name: 'Cinnamon', category: 'COFFEE', image: 'http://mountcaramel.pl/mc-v3/bio/img/cinnamon500.png', link: 'COFFEE' },
{ name: 'Chocolate', category: 'COFFEE', image: 'http://mountcaramel.pl/mc-v3/bio/img/chocolate500.png', link: 'COFFEE' },
{ name: 'Walnut', category: 'COFFEE', image: 'http://mountcaramel.pl/mc-v3/bio/img/walnut500.png', link: 'COFFEE' },
{ name: 'Lavender', category: 'COFFEE', image: 'http://mountcaramel.pl/mc-v3/bio/img/lavender500.png', link: 'COFFEE' },
{ name: 'Mint', category: 'COFFEE', image: 'http://mountcaramel.pl/mc-v3/bio/img/mint500.png', link: 'COFFEE' },
    //TEA
{ name: 'Ginger', category: 'TEA', image: 'http://mountcaramel.pl/mc-v3/bio/img/ginger500.png', link: 'TEA' },
{ name: 'Rose', category: 'TEA', image: 'http://mountcaramel.pl/mc-v3/bio/img/rose500.png', link: 'TEA' },
{ name: 'Gingerbread', category: 'TEA', image: 'http://mountcaramel.pl/mc-v3/bio/img/gingerbread500.png', link: 'TEA' },
{ name: 'Flower bouquet', category: 'TEA', image: 'http://mountcaramel.pl/mc-v3/bio/img/flower_bouquet_lemonade500.png', link: 'TEA' },
{ name: 'Elder fruit', category: 'TEA', image: 'http://mountcaramel.pl/mc-v3/bio/img/elder_fruit500.png', link: 'TEA' },
{ name: 'Glögg', category: 'TEA', image: 'http://mountcaramel.pl/mc-v3/bio/img/glogg500.png', link: 'TEA' },
{ name: 'Honey', category: 'TEA', image: 'http://mountcaramel.pl/mc-v3/bio/img/honey500.png', link: 'TEA' },
{ name: 'Rosehip with ginger', category: 'TEA', image: 'http://mountcaramel.pl/mc-v3/bio/img/rosehip-with-ginger500.png', link: '#' },
    //LEMONADE
{ name: 'Lemonade', category: 'LEMONADE', image: 'http://mountcaramel.pl/mc-v3/bio/img/01.png', link: 'LEMONADE' },
{ name: 'Natural cola', category: 'LEMONADE', image: 'http://mountcaramel.pl/mc-v3/bio/img/natural_cola_lemonade500.png', link: 'LEMONADE' },
{ name: 'Orange', category: 'LEMONADE', image: 'http://mountcaramel.pl/mc-v3/bio/img/orange_lemonade500.png', link: 'LEMONADE' },
{ name: 'Lemongrass', category: 'LEMONADE', image: 'http://mountcaramel.pl/mc-v3/bio/img/lemongrass_lemonade500.png', link: 'LEMONADE' },
{ name: 'Cinnamon honey', category: 'LEMONADE', image: 'http://mountcaramel.pl/mc-v3/bio/img/cinnamon_honey_lemonade500.png', link: 'LEMONADE' },
    //PRESERVE
{ name: 'Rose petals', category: 'PRESERVE', image: 'http://mountcaramel.pl/mc-v3/bio/img/01.png', link: 'PRESERVE' },
{ name: 'Walnut caramel', category: 'PRESERVE', image: 'http://mountcaramel.pl/mc-v3/bio/img/01.png', link: 'PRESERVE' },
{ name: 'Walnuts in chocolate', category: 'PRESERVE', image: 'http://mountcaramel.pl/mc-v3/bio/img/01.png', link: 'PRESERVE' },
    //DECORATION
{ name: 'Chocolate', category: 'DECORATION', image: 'http://mountcaramel.pl/mc-v3/bio/img/chocolate500.png', link: 'DECORATION' },
{ name: 'Orange chocolate', category: 'DECORATION', image: 'http://mountcaramel.pl/mc-v3/bio/img/orange_chocolate500.png', link: 'DECORATION' },
{ name: 'Mint chocolate', category: 'DECORATION', image: 'http://mountcaramel.pl/mc-v3/bio/img/mint_chocolate500.png', link: 'DECORATION' },
{ name: 'Chili chocolate', category: 'DECORATION', image: 'http://mountcaramel.pl/mc-v3/bio/img/chili_chocolate500.png', link: 'DECORATION' },

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
//slidesToScroll: productsArrayLength

function showDataOnSlider(productsArrayLength) {
    $('.multiple-items').slick({
        infinite: true,
        arrows: true,
        slidesToShow: itemsToSlide,
        slidesToScroll: itemsToSlide
    });
}

function addImagesFromCategoryToSlider(category) {
    var productsFromCategory = findProductFromCategory(category);
    var slider = document.getElementById("mc-slider");
    slider.innerHTML = '';
    productsFromCategory.forEach(function (product) {
        slider.innerHTML += '<div><a href="' + product.name + '"><img src="' + product.image + '"></a><p>' + product.name + '</p></div>';
    });
    showDataOnSlider(productsFromCategory.length);
    $('.multiple-items').slick('unslick').slick('reInit');
}

//pobranie wszystkich z danej kategori i wrzucenie na widok:

//var firstToView = 'COFFEE';

addImagesFromCategoryToSlider('COFFEE');


