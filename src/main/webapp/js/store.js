//----------------------------------------------------------------
// store (contains the products)
//
// NOTE: nutritional info from http://www.cspinet.org/images/fruitcha.jpg
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//


 


function store() {
	
	
	
	
	
	var xml = new XMLHttpRequest();
	xml.open("GET", "products.xml",false);
	xml.send();
	var xmlData = xml.responseXML;
	var temp= [];
	   $(xmlData).find('data_item').each(function(index){
		   var sku = $(this).find('sku').text();
           var name = $(this).find('name').text();
           var description = $(this).find('description').text();
           var price = $(this).find('regular_price_with_tax').text();
           var image = $(this).find('image_url').text();
           var product1 = new product(sku,image, name, description,price, 90, 0, 2, 0, 1, 2);
           temp[index]= (product1);
           //alert(image);
	   });
	   this.products =temp;
	
	
    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
