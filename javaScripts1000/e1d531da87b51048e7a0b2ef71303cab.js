// Array.reduce
if (!Array.prototype.reduce) {
	Array.prototype.reduce = function reduce(accumulator){
		if (this===null || this===undefined) throw new TypeError("Object is null or undefined");
		var i = 0, l = this.length >> 0, curr;

		if(typeof accumulator !== "function") // ES5 : "If IsCallable(callbackfn) is false, throw a TypeError exception."
			throw new TypeError("First argument is not callable");

		if(arguments.length < 2) {
			if (l === 0) throw new TypeError("Array length is 0 and no second argument");
			curr = this[0];
			i = 1; // start accumulating at the second element
		}
		else
			curr = arguments[1];

		while (i < l) {
			if(i in this) curr = accumulator.call(undefined, curr, this[i], i, this);
			++i;
		}

		return curr;
	};
}

// Array.map
if (!Array.prototype.map) {
	Array.prototype.map = function(callback, thisArg) {
	 
		var T, A, k;
	 
		if (this == null) {
		  throw new TypeError(" this is null or not defined");
		}
	 
		// 1. Let O be the result of calling ToObject passing the |this| value as the argument.
		var O = Object(this);
	
		// 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
		// 3. Let len be ToUint32(lenValue).
		var len = O.length >>> 0;
	
		// 4. If IsCallable(callback) is false, throw a TypeError exception.
		// See: http://es5.github.com/#x9.11
		if (typeof callback !== "function") {
		  throw new TypeError(callback + " is not a function");
		}
	
		// 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
		if (thisArg) {
			T = thisArg;
		}
	
		// 6. Let A be a new array created as if by the expression new Array(len) where Array is
		// the standard built-in constructor with that name and len is the value of len.
		A = new Array(len);
	 
		// 7. Let k be 0
		k = 0;
	
		// 8. Repeat, while k < len
		while(k < len) {
	 
			var kValue, mappedValue;
	
			// a. Let Pk be ToString(k).
			//	 This is implicit for LHS operands of the in operator
			// b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
			//	 This step can be combined with c
			// c. If kPresent is true, then
			if (k in O) {
	
			// i. Let kValue be the result of calling the Get internal method of O with argument Pk.
			kValue = O[ k ];
	
			// ii. Let mappedValue be the result of calling the Call internal method of callback
			// with T as the this value and argument list containing kValue, k, and O.
			mappedValue = callback.call(T, kValue, k, O);
	
			// iii. Call the DefineOwnProperty internal method of A with arguments
			// Pk, Property Descriptor {Value: mappedValue, : true, Enumerable: true, Configurable: true},
			// and false.
	
			// In browsers that support Object.defineProperty, use the following:
			// Object.defineProperty(A, Pk, { value: mappedValue, writable: true, enumerable: true, configurable: true });
	
			// For best browser support, use the following:
			A[ k ] = mappedValue;
			}
			// d. Increase k by 1.
			k++;
		}
	
		// 9. return A
		return A;
	};	  
}

// Array.reduceRight
if (!Array.prototype.reduceRight) {
	Array.prototype.reduceRight = function(callbackfn /*, initialValue */)
	{
		"use strict";

		if (this == null)
			throw new TypeError();

		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof callbackfn != "function")
			throw new TypeError();

		// no value to return if no initial value, empty array
		if (len === 0 && arguments.length === 1)
			throw new TypeError();

		var k = len - 1;
		var accumulator;
		if (arguments.length >= 2)
		{
			accumulator = arguments[1];
		}
		else
		{
			do
			{
				if (k in this)
				{
					accumulator = this[k--];
					break;
				}

				// if array contains no values, no initial value to return
				if (--k < 0)
					throw new TypeError();
			}
			while (true);
		}

		while (k >= 0)
		{
			if (k in t)
				accumulator = callbackfn.call(undefined, accumulator, t[k], k, t);
			k--;
		}

		return accumulator;
	};
}

// Array.forEach
if ( !Array.prototype.forEach ) {
	Array.prototype.forEach = function forEach( callback, thisArg ) {

		var T, k;

		if ( this == null ) {
			throw new TypeError( "this is null or not defined" );
		}

		// 1. Let O be the result of calling ToObject passing the |this| value as the argument.
		var O = Object(this);

		// 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
		// 3. Let len be ToUint32(lenValue).
		var len = O.length >>> 0; // Hack to convert O.length to a UInt32

		// 4. If IsCallable(callback) is false, throw a TypeError exception.
		// See: http://es5.github.com/#x9.11
		if ( {}.toString.call(callback) !== "[object Function]" ) {
			throw new TypeError( callback + " is not a function" );
		}

		// 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
		if ( thisArg ) {
			T = thisArg;
		}

		// 6. Let k be 0
		k = 0;

		// 7. Repeat, while k < len
		while( k < len ) {

			var kValue;

			// a. Let Pk be ToString(k).
			//	 This is implicit for LHS operands of the in operator
			// b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
			//	 This step can be combined with c
			// c. If kPresent is true, then
			if ( Object.prototype.hasOwnProperty.call(O, k) ) {

				// i. Let kValue be the result of calling the Get internal method of O with argument Pk.
				kValue = O[ k ];

				// ii. Call the Call internal method of callback with T as the this value and
				// argument list containing kValue, k, and O.
				callback.call( T, kValue, k, O );
			}
			// d. Increase k by 1.
			k++;
		}
		// 8. return undefined
	};
}

// Object.keys
if (!Object.keys) {
	Object.keys = (function () {
		var hasOwnProperty = Object.prototype.hasOwnProperty,
			hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
			dontEnums = [
				'toString',
				'toLocaleString',
				'valueOf',
				'hasOwnProperty',
				'isPrototypeOf',
				'propertyIsEnumerable',
				'constructor'
			],
			dontEnumsLength = dontEnums.length;
 
		return function (obj) {
			if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');
 
			var result = [];
 
			for (var prop in obj) {
				if (hasOwnProperty.call(obj, prop)) result.push(prop);
			}
 
			if (hasDontEnumBug) {
				for (var i=0; i < dontEnumsLength; i++) {
					if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
				}
			}
			return result;
		};
	})();
};

if(!String.prototype.trim) {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, '');
	}
};

if (!String.prototype.startsWith) {
	String.prototype.startsWith = function(str){
		return this.indexOf(str) === 0;
	};
};