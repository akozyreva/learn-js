'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function Element(name, buildYear) {
	_classCallCheck(this, Element);

	this.name = name;
	this.buildYear = buildYear;
};

var Park = function (_Element) {
	_inherits(Park, _Element);

	function Park(name, buildYear, numTrees, area, age) {
		_classCallCheck(this, Park);

		var _this = _possibleConstructorReturn(this, (Park.__proto__ || Object.getPrototypeOf(Park)).call(this, name, buildYear));

		_this.numTrees = numTrees;
		_this.area = area;
		_this.age = age;
		return _this;
	}

	_createClass(Park, [{
		key: 'treeDensity',
		value: function treeDensity() {
			var density = this.numTrees / this.area;
			console.log(this.name + ' has density ' + density);
		}
	}]);

	return Park;
}(Element);

var Street = function (_Element2) {
	_inherits(Street, _Element2);

	function Street(name, buildYear, len) {
		var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;

		_classCallCheck(this, Street);

		var _this2 = _possibleConstructorReturn(this, (Street.__proto__ || Object.getPrototypeOf(Street)).call(this, name, buildYear));

		_this2.len = len;
		_this2.size = size;
		return _this2;
	}

	_createClass(Street, [{
		key: 'classifyStreet',
		value: function classifyStreet() {
			var classification = new Map();
			classification.set(1, 'tiny');
			classification.set(2, 'small');
			classification.set(3, 'normal');
			classification.set(4, 'big');
			classification.set(5, 'huge');
			console.log(this.name + ' has size = ' + classification.get(this.size));
		}
	}]);

	return Street;
}(Element);

var park1 = new Park('Park 1', 1990, 1001, 1022, 100);
var park2 = new Park('Park 22', 199, 999, 150, 20);
var park3 = new Park('Park 33', 1980, 1050, 120, 2);

var street1 = new Street('Avenue', 1992, 12, 1);
var street2 = new Street('Avenue12', 192, 12, 5);
var street3 = new Street('Avenue test', 1920, 12);
var street4 = new Street('Avenue788', 19921, 12);

//function for calc average for streets and parks
function calc(arr) {
	// good methos from es5 to calc prev + cur
	var sum = arr.reduce(function (prev, cur, index) {
		return prev + cur;
	}, 0);
	return [sum, sum / arr.length];
}

function reportParks() {
	for (var _len = arguments.length, p = Array(_len), _key = 0; _key < _len; _key++) {
		p[_key] = arguments[_key];
	}

	//density
	p.forEach(function (el) {
		return el.treeDensity();
	});

	//average
	var ages = p.map(function (el) {
		return 2018 - el.buildYear;
	});

	var _calc = calc(ages),
	    _calc2 = _slicedToArray(_calc, 2),
	    totalAge = _calc2[0],
	    avgAge = _calc2[1];

	console.log(totalAge, avgAge);

	//which park is biggest
	// using method findIndex we'll find index of el
	var i = p.map(function (el) {
		return el.numTrees;
	}).findIndex(function (el) {
		return el >= 1000;
	});
	console.log('' + p[i].name);
}

function reportStreets() {
	for (var _len2 = arguments.length, s = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		s[_key2] = arguments[_key2];
	}

	//total age and average
	var _calc3 = calc(s.map(function (el) {
		return el.len;
	})),
	    _calc4 = _slicedToArray(_calc3, 2),
	    totalLength = _calc4[0],
	    avgLength = _calc4[1];

	console.log(totalLength, avgLength);

	//classify Street
	s.forEach(function (el) {
		return el.classifyStreet();
	});
}

reportParks(park1, park2, park3);
reportStreets(street1, street2, street3, street4);
