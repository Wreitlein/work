(function () {
  function getCookie(name) {
    var value = '; ' + document.cookie,
    parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
      var readPart = parts.pop().split(';').shift();
      return readPart;
    }
  }

  function setCookie(name, value) {
    var days = 730; // Valid for 2 years
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    var expires = '; expires=' + date.toGMTString();
    document.cookie = name + '=' + value + expires;
  }

  function controlVariant() {
    return variantOne;
  }

  function testVariant() {
    return variantTwo;
  }
  
  var cookieName = 'splitVar',
  testName = '001',
  variantOne = testName + '_0', // control variant
  variantTwo = testName + '_1', // test variant
  cookieValue = getCookie(cookieName),
  variant = variantOne;

  if (!cookieValue) { // If cookie isn't set run code
 
    if(Math.random() < 0.5) {
      variant = testVariant(); // For 50 % of hits, fire Variation 2
    } else {
      variant = controlVariant(); // For 50 % of hits, fire Variation 1
    }
    setCookie(cookieName, variant);
  } else if (cookieValue === variantTwo) { 
    // If user has only seen Variation 2
    testVariant();
  } else { 
    // If user has only seen Variation 1
    controlVariant();
  }
})();
11
1
1
1