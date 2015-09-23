xweb-country
========================
country object

- name
- code (iso  alpha2 alpha3)
- short name
- region code



Quick Start
------------

	// install from npm
	npm install xweb-country --save

    // usage
    var Country = require('xweb-country');
    var c = new Country('USA');
    console.log(c.toName());  // United States
    console.log(c.toFullName());  // United States
    console.log(c.toCode());  // US
    console.log(c.toAlphaCode());  // US
    console.log(c.toAlpha3Code());  // USA
    console.log(c.toRegionCode());  // [19,21]

    // you can new country with other fields
    var c = new Country('United States');   // with name
    var c = new Country('United States');   // with full name
    var c = new Country('US');   // with iso-3166 code
    var c = new Country('US');   // with Alpha2 code
    var c = new Country('USA');   // with Alpha3 code


for *Delveloper*
-------------
1.  a text editor for hbs、js、html、nodejs and etc.
1.  nodejs(>=0.10.13)
1.  npm install -g gulp mocha


To test, run:

```bash
npm test
```


License
-------
  [MIT](LICENSE)
