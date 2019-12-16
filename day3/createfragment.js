var element  = document.getElementById('ul'); // assuming ul exists
var fragment = document.createDocumentFragment();
var browsers = ['Firefox', 'Chrome', 'Opera', 
    'Safari', 'Internet Explorer'];

browsers.forEach(function(browser) {
    var li = document.createElement('li');
    li.textContent = browser;
    fragment.appendChild(li);
});

element.appendChild(fragment);