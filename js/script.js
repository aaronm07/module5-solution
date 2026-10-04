(function (window) {
  "use strict";

  var categories = [
    { short_name: "L", name: "Lunch" },
    { short_name: "D", name: "Dinner" },
    { short_name: "S", name: "Sushi" }
  ];

  var menuItems = {
    L: [
      { name: "Lunch Special", description: "Chicken with vegetables and rice.", price: "$9.95" },
      { name: "Beef Lunch", description: "Tender beef with mixed vegetables.", price: "$10.95" },
      { name: "Chicken Rice", description: "Grilled chicken served with rice.", price: "$8.95" }
    ],
    D: [
      { name: "Dinner Chicken", description: "Chicken in a light house sauce.", price: "$13.95" },
      { name: "Beef Dinner", description: "Beef with fresh vegetables.", price: "$14.95" },
      { name: "House Fried Rice", description: "Fried rice with egg and vegetables.", price: "$11.95" }
    ],
    S: [
      { name: "California Roll", description: "Crab, avocado and cucumber.", price: "$7.95" },
      { name: "Salmon Roll", description: "Fresh salmon and cucumber.", price: "$8.95" },
      { name: "Sushi Combo", description: "A small selection of house sushi.", price: "$12.95" }
    ]
  };

  window.$dc = {};

  /*
   * STEP 0:
   * The Specials tile needs a random category short name.
   */
  window.loadSpecials = function () {
    var randomIndex = Math.floor(Math.random() * categories.length);
    var randomCategoryShortName = "'" + categories[randomIndex].short_name + "'";

    $dc.loadMenuItems(randomCategoryShortName);
  };

  /*
   * STEP 1 - 4:
   * Pick a category, build the category page, and show its menu items.
   */
  $dc.loadMenuItems = function (categoryShortName) {
    var shortName = categoryShortName.replace(/'/g, "");
    var category = null;

    for (var i = 0; i < categories.length; i++) {
      if (categories[i].short_name === shortName) {
        category = categories[i];
        break;
      }
    }

    if (!category) {
      return;
    }

    var items = menuItems[shortName] || [];
    var html = "";

    html += '<section class="category-page">';
    html += '<a href="#" class="back" onclick="showHome(); return false;">&larr; Back to Home</a>';
    html += '<h1>' + category.name + '</h1>';

    for (var j = 0; j < items.length; j++) {
      html += '<div class="menu-item">';
      html += '<div>';
      html += '<h2>' + items[j].name + '</h2>';
      html += '<p>' + items[j].description + '</p>';
      html += '</div>';
      html += '<strong>' + items[j].price + '</strong>';
      html += '</div>';
    }

    html += '</section>';

    document.getElementById("main-content").innerHTML = html;
    window.scrollTo(0, 0);
  };

  window.showHome = function () {
    document.getElementById("main-content").innerHTML =
      '<section class="home">' +
      '<h1>Welcome to Our Restaurant</h1>' +
      '<p>Good food, simple choices.</p>' +
      '<div class="tiles">' +
      '<a class="tile" href="#" onclick="$dc.loadMenuItems(\'L\'); return false;"><span>Menu</span></a>' +
      '<a class="tile special" href="#" onclick="loadSpecials(); return false;"><span>Specials</span></a>' +
      '<a class="tile" href="#" onclick="showMap(); return false;"><span>Map</span></a>' +
      '</div>' +
      '</section>';
  };

  window.showMap = function () {
    document.getElementById("main-content").innerHTML =
      '<section class="category-page">' +
      '<a href="#" class="back" onclick="showHome(); return false;">&larr; Back to Home</a>' +
      '<h1>Map</h1>' +
      '<p class="map-text">Our restaurant location would be shown here.</p>' +
      '</section>';
  };

})(window);
