typeaheadObj
============

Twitter Bootstrap Typeahead With Objects

---

## Sample Usage:

```javascript
var data = [
  {
    name: 'test',
    id: 22,
    page: '/test.php'
  },
  {
    name: 'test2',
    id: 23,
    page: '/test2.php'
  },
  {
    name: 'test3',
    id: 23,
    page: '/testpage.php'
  },
  {
    name: 'main',
    id: 15,
    page: '/index.php'
  }
];

$('#typeaheadObj').typeaheadObj({
    source: data,
    display: 'name',
    update: function(obj) {
      $('#result').append('<div>You chose ' + JSON.stringify(obj) + '</div>');
    }
});
```

## [DEMO](http://goo.gl/AyMLC)

