!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=82)}({11:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(9);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return s(e,[])}function s(e,t){switch(r(e)){case"string":return JSON.stringify(e);case"function":return e.name?"[function ".concat(e.name,"]"):"[function]";case"object":return null===e?"null":function(e,t){if(-1!==t.indexOf(e))return"[Circular]";var n=[].concat(t,[e]),r=function(e){var t=e[String(i.a)];if("function"==typeof t)return t;if("function"==typeof e.inspect)return e.inspect}(e);if(void 0!==r){var a=r.call(e);if(a!==e)return"string"==typeof a?a:s(a,n)}else if(Array.isArray(e))return function(e,t){if(0===e.length)return"[]";if(t.length>2)return"[Array]";for(var n=Math.min(10,e.length),i=e.length-n,r=[],a=0;a<n;++a)r.push(s(e[a],t));1===i?r.push("... 1 more item"):i>1&&r.push("... ".concat(i," more items"));return"["+r.join(", ")+"]"}(e,n);return function(e,t){var n=Object.keys(e);if(0===n.length)return"{}";if(t.length>2)return"["+function(e){var t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===t&&"function"==typeof e.constructor){var n=e.constructor.name;if("string"==typeof n&&""!==n)return n}return t}(e)+"]";return"{ "+n.map((function(n){return n+": "+s(e[n],t)})).join(", ")+" }"}(e,n)}(e,t);default:return String(e)}}},23:function(e,t,n){"use strict";function i(e){var t=e.split(/\r\n|[\n\r]/g),n=function(e){for(var t=null,n=1;n<e.length;n++){var i=e[n],a=r(i);if(a!==i.length&&((null===t||a<t)&&0===(t=a)))break}return null===t?0:t}(t);if(0!==n)for(var i=1;i<t.length;i++)t[i]=t[i].slice(n);for(;t.length>0&&a(t[0]);)t.shift();for(;t.length>0&&a(t[t.length-1]);)t.pop();return t.join("\n")}function r(e){for(var t=0;t<e.length&&(" "===e[t]||"\t"===e[t]);)t++;return t}function a(e){return r(e)===e.length}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=-1===e.indexOf("\n"),r=" "===e[0]||"\t"===e[0],a='"'===e[e.length-1],s=!i||a||n,o="";return!s||i&&r||(o+="\n"+t),o+=t?e.replace(/\n/g,"\n"+t):e,s&&(o+="\n"),'"""'+o.replace(/"""/g,'\\"""')+'"""'}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}))},82:function(e,t,n){var i=n(91).parse;function r(e){return e.replace(/[\s,]+/g," ").trim()}var a={},s={};var o=!0;var c=!1;function u(e){var t=r(e);if(a[t])return a[t];var n=i(e,{experimentalFragmentVariables:c});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");return n=function e(t,n){var i=Object.prototype.toString.call(t);if("[object Array]"===i)return t.map((function(t){return e(t,n)}));if("[object Object]"!==i)throw new Error("Unexpected input.");n&&t.loc&&delete t.loc,t.loc&&(delete t.loc.startToken,delete t.loc.endToken);var r,a,s,o=Object.keys(t);for(r in o)o.hasOwnProperty(r)&&(a=t[o[r]],"[object Object]"!==(s=Object.prototype.toString.call(a))&&"[object Array]"!==s||(t[o[r]]=e(a,!0)));return t}(n=function(e){for(var t,n={},i=[],a=0;a<e.definitions.length;a++){var c=e.definitions[a];if("FragmentDefinition"===c.kind){var u=c.name.value,l=r((t=c.loc).source.body.substring(t.start,t.end));s.hasOwnProperty(u)&&!s[u][l]?(o&&console.warn("Warning: fragment with name "+u+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"),s[u][l]=!0):s.hasOwnProperty(u)||(s[u]={},s[u][l]=!0),n[l]||(n[l]=!0,i.push(c))}else i.push(c)}return e.definitions=i,e}(n),!1),a[t]=n,n}function l(){for(var e=Array.prototype.slice.call(arguments),t=e[0],n="string"==typeof t?t:t[0],i=1;i<e.length;i++)e[i]&&e[i].kind&&"Document"===e[i].kind?n+=e[i].loc.source.body:n+=e[i],n+=t[i];return u(n)}l.default=l,l.resetCaches=function(){a={},s={}},l.disableFragmentWarnings=function(){o=!1},l.enableExperimentalFragmentVariables=function(){c=!0},l.disableExperimentalFragmentVariables=function(){c=!1},e.exports=l},9:function(e,t,n){"use strict";var i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):void 0;t.a=i},91:function(e,t,n){"use strict";n.r(t),n.d(t,"parse",(function(){return S})),n.d(t,"parseValue",(function(){return b})),n.d(t,"parseType",(function(){return g}));var i=n(11);function r(e,t){if(!Boolean(e))throw new Error(t)}var a=n(9);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.prototype.toString;e.prototype.toJSON=t,e.prototype.inspect=t,a.a&&(e.prototype[a.a]=t)}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n,i=/\r\n|[\n\r]/g,r=1,a=t+1;(n=i.exec(e.body))&&n.index<t;)r+=1,a=t+1-(n.index+n[0].length);return{line:r,column:a}}function u(e){return l(e.source,c(e.source,e.start))}function l(e,t){var n=e.locationOffset.column-1,i=h(n)+e.body,r=t.line-1,a=e.locationOffset.line-1,s=t.line+a,o=1===t.line?n:0,c=t.column+o,u="".concat(e.name,":").concat(s,":").concat(c,"\n"),l=i.split(/\r\n|[\n\r]/g),f=l[r];if(f.length>120){for(var d=Math.floor(c/80),E=c%80,T=[],v=0;v<f.length;v+=80)T.push(f.slice(v,v+80));return u+p([["".concat(s),T[0]]].concat(T.slice(1,d+1).map((function(e){return["",e]})),[[" ",h(E-1)+"^"],["",T[d+1]]]))}return u+p([["".concat(s-1),l[r-1]],["".concat(s),f],["",h(c-1)+"^"],["".concat(s+1),l[r+1]]])}function p(e){var t=e.filter((function(e){e[0];return void 0!==e[1]})),n=Math.max.apply(Math,t.map((function(e){return e[0].length})));return t.map((function(e){var t,i=e[0],r=e[1];return h(n-(t=i).length)+t+(r?" | "+r:" |")})).join("\n")}function h(e){return Array(e+1).join(" ")}function f(e,t,n,i,r,a,s){var u=Array.isArray(t)?0!==t.length?t:void 0:t?[t]:void 0,l=n;if(!l&&u){var p=u[0];l=p&&p.loc&&p.loc.source}var h,d=i;!d&&u&&(d=u.reduce((function(e,t){return t.loc&&e.push(t.loc.start),e}),[])),d&&0===d.length&&(d=void 0),i&&n?h=i.map((function(e){return c(n,e)})):u&&(h=u.reduce((function(e,t){return t.loc&&e.push(c(t.loc.source,t.loc.start)),e}),[]));var E,T=s;if(null==T&&null!=a){var v=a.extensions;"object"==o(E=v)&&null!==E&&(T=v)}Object.defineProperties(this,{message:{value:e,enumerable:!0,writable:!0},locations:{value:h||void 0,enumerable:Boolean(h)},path:{value:r||void 0,enumerable:Boolean(r)},nodes:{value:u||void 0},source:{value:l||void 0},positions:{value:d||void 0},originalError:{value:a},extensions:{value:T||void 0,enumerable:Boolean(T)}}),a&&a.stack?Object.defineProperty(this,"stack",{value:a.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,f):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}function d(e,t,n){return new f("Syntax Error: ".concat(n),void 0,e,[t])}f.prototype=Object.create(Error.prototype,{constructor:{value:f},name:{value:"GraphQLError"},toString:{value:function(){return function(e){var t=e.message;if(e.nodes)for(var n=0,i=e.nodes;n<i.length;n++){var r=i[n];r.loc&&(t+="\n\n"+u(r.loc))}else if(e.source&&e.locations)for(var a=0,s=e.locations;a<s.length;a++){var o=s[a];t+="\n\n"+l(e.source,o)}return t}(this)}}});var E=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"});var T,v=function(e,t,n){this.body=e,this.name=t||"GraphQL request",this.locationOffset=n||{line:1,column:1},this.locationOffset.line>0||r(0,"line in locationOffset is 1-indexed and must be positive"),this.locationOffset.column>0||r(0,"column in locationOffset is 1-indexed and must be positive")};T=v,"function"==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(T.prototype,Symbol.toStringTag,{get:function(){return this.constructor.name}});var N=n(23),I=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"});function m(){return this.lastToken=this.token,this.token=this.lookahead()}function y(){var e=this.token;if(e.kind!==I.EOF)do{e=e.next||(e.next=x(this,e))}while(e.kind===I.COMMENT);return e}function O(e,t,n,i,r,a,s){this.kind=e,this.start=t,this.end=n,this.line=i,this.column=r,this.value=s,this.prev=a,this.next=null}function _(e){return isNaN(e)?I.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function x(e,t){var n=e.source,i=n.body,r=i.length,a=function(e,t,n){var i=e.length,r=t;for(;r<i;){var a=e.charCodeAt(r);if(9===a||32===a||44===a||65279===a)++r;else if(10===a)++r,++n.line,n.lineStart=r;else{if(13!==a)break;10===e.charCodeAt(r+1)?r+=2:++r,++n.line,n.lineStart=r}}return r}(i,t.end,e),s=e.line,o=1+a-e.lineStart;if(a>=r)return new O(I.EOF,r,r,s,o,t);var c=i.charCodeAt(a);switch(c){case 33:return new O(I.BANG,a,a+1,s,o,t);case 35:return function(e,t,n,i,r){var a,s=e.body,o=t;do{a=s.charCodeAt(++o)}while(!isNaN(a)&&(a>31||9===a));return new O(I.COMMENT,t,o,n,i,r,s.slice(t+1,o))}(n,a,s,o,t);case 36:return new O(I.DOLLAR,a,a+1,s,o,t);case 38:return new O(I.AMP,a,a+1,s,o,t);case 40:return new O(I.PAREN_L,a,a+1,s,o,t);case 41:return new O(I.PAREN_R,a,a+1,s,o,t);case 46:if(46===i.charCodeAt(a+1)&&46===i.charCodeAt(a+2))return new O(I.SPREAD,a,a+3,s,o,t);break;case 58:return new O(I.COLON,a,a+1,s,o,t);case 61:return new O(I.EQUALS,a,a+1,s,o,t);case 64:return new O(I.AT,a,a+1,s,o,t);case 91:return new O(I.BRACKET_L,a,a+1,s,o,t);case 93:return new O(I.BRACKET_R,a,a+1,s,o,t);case 123:return new O(I.BRACE_L,a,a+1,s,o,t);case 124:return new O(I.PIPE,a,a+1,s,o,t);case 125:return new O(I.BRACE_R,a,a+1,s,o,t);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return function(e,t,n,i,r){var a=e.body,s=a.length,o=t+1,c=0;for(;o!==s&&!isNaN(c=a.charCodeAt(o))&&(95===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122);)++o;return new O(I.NAME,t,o,n,i,r,a.slice(t,o))}(n,a,s,o,t);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return function(e,t,n,i,r,a){var s=e.body,o=n,c=t,u=!1;45===o&&(o=s.charCodeAt(++c));if(48===o){if((o=s.charCodeAt(++c))>=48&&o<=57)throw d(e,c,"Invalid number, unexpected digit after 0: ".concat(_(o),"."))}else c=A(e,c,o),o=s.charCodeAt(c);46===o&&(u=!0,o=s.charCodeAt(++c),c=A(e,c,o),o=s.charCodeAt(c));69!==o&&101!==o||(u=!0,43!==(o=s.charCodeAt(++c))&&45!==o||(o=s.charCodeAt(++c)),c=A(e,c,o),o=s.charCodeAt(c));if(46===o||69===o||101===o)throw d(e,c,"Invalid number, expected digit but got: ".concat(_(o),"."));return new O(u?I.FLOAT:I.INT,t,c,i,r,a,s.slice(t,c))}(n,a,c,s,o,t);case 34:return 34===i.charCodeAt(a+1)&&34===i.charCodeAt(a+2)?function(e,t,n,i,r,a){var s=e.body,o=t+3,c=o,u=0,l="";for(;o<s.length&&!isNaN(u=s.charCodeAt(o));){if(34===u&&34===s.charCodeAt(o+1)&&34===s.charCodeAt(o+2))return l+=s.slice(c,o),new O(I.BLOCK_STRING,t,o+3,n,i,r,Object(N.a)(l));if(u<32&&9!==u&&10!==u&&13!==u)throw d(e,o,"Invalid character within String: ".concat(_(u),"."));10===u?(++o,++a.line,a.lineStart=o):13===u?(10===s.charCodeAt(o+1)?o+=2:++o,++a.line,a.lineStart=o):92===u&&34===s.charCodeAt(o+1)&&34===s.charCodeAt(o+2)&&34===s.charCodeAt(o+3)?(l+=s.slice(c,o)+'"""',c=o+=4):++o}throw d(e,o,"Unterminated string.")}(n,a,s,o,t,e):function(e,t,n,i,r){var a=e.body,s=t+1,o=s,c=0,u="";for(;s<a.length&&!isNaN(c=a.charCodeAt(s))&&10!==c&&13!==c;){if(34===c)return u+=a.slice(o,s),new O(I.STRING,t,s+1,n,i,r,u);if(c<32&&9!==c)throw d(e,s,"Invalid character within String: ".concat(_(c),"."));if(++s,92===c){switch(u+=a.slice(o,s-1),c=a.charCodeAt(s)){case 34:u+='"';break;case 47:u+="/";break;case 92:u+="\\";break;case 98:u+="\b";break;case 102:u+="\f";break;case 110:u+="\n";break;case 114:u+="\r";break;case 116:u+="\t";break;case 117:var l=(h=a.charCodeAt(s+1),f=a.charCodeAt(s+2),E=a.charCodeAt(s+3),T=a.charCodeAt(s+4),k(h)<<12|k(f)<<8|k(E)<<4|k(T));if(l<0){var p=a.slice(s+1,s+5);throw d(e,s,"Invalid character escape sequence: \\u".concat(p,"."))}u+=String.fromCharCode(l),s+=4;break;default:throw d(e,s,"Invalid character escape sequence: \\".concat(String.fromCharCode(c),"."))}++s,o=s}}var h,f,E,T;throw d(e,s,"Unterminated string.")}(n,a,s,o,t)}throw d(n,a,function(e){if(e<32&&9!==e&&10!==e&&13!==e)return"Cannot contain the invalid character ".concat(_(e),".");if(39===e)return"Unexpected single quote character ('), did you mean to use a double quote (\")?";return"Cannot parse the unexpected character ".concat(_(e),".")}(c))}function A(e,t,n){var i=e.body,r=t,a=n;if(a>=48&&a<=57){do{a=i.charCodeAt(++r)}while(a>=48&&a<=57);return r}throw d(e,r,"Invalid number, expected digit but got: ".concat(_(a),"."))}function k(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}s(O,(function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}));var D=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"});function S(e,t){return new C(e,t).parseDocument()}function b(e,t){var n=new C(e,t);n.expectToken(I.SOF);var i=n.parseValueLiteral(!1);return n.expectToken(I.EOF),i}function g(e,t){var n=new C(e,t);n.expectToken(I.SOF);var i=n.parseTypeReference();return n.expectToken(I.EOF),i}var C=function(){function e(e,t){var n="string"==typeof e?new v(e):e;n instanceof v||r(0,"Must provide Source. Received: ".concat(Object(i.a)(n))),this._lexer=function(e,t){var n=new O(I.SOF,0,0,0,0,null);return{source:e,options:t,lastToken:n,token:n,line:1,lineStart:0,advance:m,lookahead:y}}(n),this._options=t||{}}var t=e.prototype;return t.parseName=function(){var e=this.expectToken(I.NAME);return{kind:E.NAME,value:e.value,loc:this.loc(e)}},t.parseDocument=function(){var e=this._lexer.token;return{kind:E.DOCUMENT,definitions:this.many(I.SOF,this.parseDefinition,I.EOF),loc:this.loc(e)}},t.parseDefinition=function(){if(this.peek(I.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(I.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},t.parseOperationDefinition=function(){var e=this._lexer.token;if(this.peek(I.BRACE_L))return{kind:E.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(e)};var t,n=this.parseOperationType();return this.peek(I.NAME)&&(t=this.parseName()),{kind:E.OPERATION_DEFINITION,operation:n,name:t,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseOperationType=function(){var e=this.expectToken(I.NAME);switch(e.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(e)},t.parseVariableDefinitions=function(){return this.optionalMany(I.PAREN_L,this.parseVariableDefinition,I.PAREN_R)},t.parseVariableDefinition=function(){var e=this._lexer.token;return{kind:E.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(I.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(I.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(e)}},t.parseVariable=function(){var e=this._lexer.token;return this.expectToken(I.DOLLAR),{kind:E.VARIABLE,name:this.parseName(),loc:this.loc(e)}},t.parseSelectionSet=function(){var e=this._lexer.token;return{kind:E.SELECTION_SET,selections:this.many(I.BRACE_L,this.parseSelection,I.BRACE_R),loc:this.loc(e)}},t.parseSelection=function(){return this.peek(I.SPREAD)?this.parseFragment():this.parseField()},t.parseField=function(){var e,t,n=this._lexer.token,i=this.parseName();return this.expectOptionalToken(I.COLON)?(e=i,t=this.parseName()):t=i,{kind:E.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(I.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(n)}},t.parseArguments=function(e){var t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(I.PAREN_L,t,I.PAREN_R)},t.parseArgument=function(){var e=this._lexer.token,t=this.parseName();return this.expectToken(I.COLON),{kind:E.ARGUMENT,name:t,value:this.parseValueLiteral(!1),loc:this.loc(e)}},t.parseConstArgument=function(){var e=this._lexer.token;return{kind:E.ARGUMENT,name:this.parseName(),value:(this.expectToken(I.COLON),this.parseValueLiteral(!0)),loc:this.loc(e)}},t.parseFragment=function(){var e=this._lexer.token;this.expectToken(I.SPREAD);var t=this.expectOptionalKeyword("on");return!t&&this.peek(I.NAME)?{kind:E.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(e)}:{kind:E.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseFragmentDefinition=function(){var e=this._lexer.token;return this.expectKeyword("fragment"),this._options.experimentalFragmentVariables?{kind:E.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}:{kind:E.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},t.parseValueLiteral=function(e){var t=this._lexer.token;switch(t.kind){case I.BRACKET_L:return this.parseList(e);case I.BRACE_L:return this.parseObject(e);case I.INT:return this._lexer.advance(),{kind:E.INT,value:t.value,loc:this.loc(t)};case I.FLOAT:return this._lexer.advance(),{kind:E.FLOAT,value:t.value,loc:this.loc(t)};case I.STRING:case I.BLOCK_STRING:return this.parseStringLiteral();case I.NAME:return"true"===t.value||"false"===t.value?(this._lexer.advance(),{kind:E.BOOLEAN,value:"true"===t.value,loc:this.loc(t)}):"null"===t.value?(this._lexer.advance(),{kind:E.NULL,loc:this.loc(t)}):(this._lexer.advance(),{kind:E.ENUM,value:t.value,loc:this.loc(t)});case I.DOLLAR:if(!e)return this.parseVariable()}throw this.unexpected()},t.parseStringLiteral=function(){var e=this._lexer.token;return this._lexer.advance(),{kind:E.STRING,value:e.value,block:e.kind===I.BLOCK_STRING,loc:this.loc(e)}},t.parseList=function(e){var t=this,n=this._lexer.token;return{kind:E.LIST,values:this.any(I.BRACKET_L,(function(){return t.parseValueLiteral(e)}),I.BRACKET_R),loc:this.loc(n)}},t.parseObject=function(e){var t=this,n=this._lexer.token;return{kind:E.OBJECT,fields:this.any(I.BRACE_L,(function(){return t.parseObjectField(e)}),I.BRACE_R),loc:this.loc(n)}},t.parseObjectField=function(e){var t=this._lexer.token,n=this.parseName();return this.expectToken(I.COLON),{kind:E.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e),loc:this.loc(t)}},t.parseDirectives=function(e){for(var t=[];this.peek(I.AT);)t.push(this.parseDirective(e));return t},t.parseDirective=function(e){var t=this._lexer.token;return this.expectToken(I.AT),{kind:E.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e),loc:this.loc(t)}},t.parseTypeReference=function(){var e,t=this._lexer.token;return this.expectOptionalToken(I.BRACKET_L)?(e=this.parseTypeReference(),this.expectToken(I.BRACKET_R),e={kind:E.LIST_TYPE,type:e,loc:this.loc(t)}):e=this.parseNamedType(),this.expectOptionalToken(I.BANG)?{kind:E.NON_NULL_TYPE,type:e,loc:this.loc(t)}:e},t.parseNamedType=function(){var e=this._lexer.token;return{kind:E.NAMED_TYPE,name:this.parseName(),loc:this.loc(e)}},t.parseTypeSystemDefinition=function(){var e=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(e.kind===I.NAME)switch(e.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(e)},t.peekDescription=function(){return this.peek(I.STRING)||this.peek(I.BLOCK_STRING)},t.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},t.parseSchemaDefinition=function(){var e=this._lexer.token;this.expectKeyword("schema");var t=this.parseDirectives(!0),n=this.many(I.BRACE_L,this.parseOperationTypeDefinition,I.BRACE_R);return{kind:E.SCHEMA_DEFINITION,directives:t,operationTypes:n,loc:this.loc(e)}},t.parseOperationTypeDefinition=function(){var e=this._lexer.token,t=this.parseOperationType();this.expectToken(I.COLON);var n=this.parseNamedType();return{kind:E.OPERATION_TYPE_DEFINITION,operation:t,type:n,loc:this.loc(e)}},t.parseScalarTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");var n=this.parseName(),i=this.parseDirectives(!0);return{kind:E.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:i,loc:this.loc(e)}},t.parseObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");var n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseDirectives(!0),a=this.parseFieldsDefinition();return{kind:E.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:a,loc:this.loc(e)}},t.parseImplementsInterfaces=function(){var e=[];if(this.expectOptionalKeyword("implements")){this.expectOptionalToken(I.AMP);do{e.push(this.parseNamedType())}while(this.expectOptionalToken(I.AMP)||this._options.allowLegacySDLImplementsInterfaces&&this.peek(I.NAME))}return e},t.parseFieldsDefinition=function(){return this._options.allowLegacySDLEmptyFields&&this.peek(I.BRACE_L)&&this._lexer.lookahead().kind===I.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(I.BRACE_L,this.parseFieldDefinition,I.BRACE_R)},t.parseFieldDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(I.COLON);var r=this.parseTypeReference(),a=this.parseDirectives(!0);return{kind:E.FIELD_DEFINITION,description:t,name:n,arguments:i,type:r,directives:a,loc:this.loc(e)}},t.parseArgumentDefs=function(){return this.optionalMany(I.PAREN_L,this.parseInputValueDef,I.PAREN_R)},t.parseInputValueDef=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(I.COLON);var i,r=this.parseTypeReference();this.expectOptionalToken(I.EQUALS)&&(i=this.parseValueLiteral(!0));var a=this.parseDirectives(!0);return{kind:E.INPUT_VALUE_DEFINITION,description:t,name:n,type:r,defaultValue:i,directives:a,loc:this.loc(e)}},t.parseInterfaceTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseFieldsDefinition();return{kind:E.INTERFACE_TYPE_DEFINITION,description:t,name:n,directives:i,fields:r,loc:this.loc(e)}},t.parseUnionTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseUnionMemberTypes();return{kind:E.UNION_TYPE_DEFINITION,description:t,name:n,directives:i,types:r,loc:this.loc(e)}},t.parseUnionMemberTypes=function(){var e=[];if(this.expectOptionalToken(I.EQUALS)){this.expectOptionalToken(I.PIPE);do{e.push(this.parseNamedType())}while(this.expectOptionalToken(I.PIPE))}return e},t.parseEnumTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseEnumValuesDefinition();return{kind:E.ENUM_TYPE_DEFINITION,description:t,name:n,directives:i,values:r,loc:this.loc(e)}},t.parseEnumValuesDefinition=function(){return this.optionalMany(I.BRACE_L,this.parseEnumValueDefinition,I.BRACE_R)},t.parseEnumValueDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseDirectives(!0);return{kind:E.ENUM_VALUE_DEFINITION,description:t,name:n,directives:i,loc:this.loc(e)}},t.parseInputObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");var n=this.parseName(),i=this.parseDirectives(!0),r=this.parseInputFieldsDefinition();return{kind:E.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:i,fields:r,loc:this.loc(e)}},t.parseInputFieldsDefinition=function(){return this.optionalMany(I.BRACE_L,this.parseInputValueDef,I.BRACE_R)},t.parseTypeSystemExtension=function(){var e=this._lexer.lookahead();if(e.kind===I.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)},t.parseSchemaExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var t=this.parseDirectives(!0),n=this.optionalMany(I.BRACE_L,this.parseOperationTypeDefinition,I.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return{kind:E.SCHEMA_EXTENSION,directives:t,operationTypes:n,loc:this.loc(e)}},t.parseScalarTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var t=this.parseName(),n=this.parseDirectives(!0);if(0===n.length)throw this.unexpected();return{kind:E.SCALAR_TYPE_EXTENSION,name:t,directives:n,loc:this.loc(e)}},t.parseObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return{kind:E.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r,loc:this.loc(e)}},t.parseInterfaceTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseFieldsDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:E.INTERFACE_TYPE_EXTENSION,name:t,directives:n,fields:i,loc:this.loc(e)}},t.parseUnionTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseUnionMemberTypes();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:E.UNION_TYPE_EXTENSION,name:t,directives:n,types:i,loc:this.loc(e)}},t.parseEnumTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseEnumValuesDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:E.ENUM_TYPE_EXTENSION,name:t,directives:n,values:i,loc:this.loc(e)}},t.parseInputObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseInputFieldsDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:E.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:i,loc:this.loc(e)}},t.parseDirectiveDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(I.AT);var n=this.parseName(),i=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var a=this.parseDirectiveLocations();return{kind:E.DIRECTIVE_DEFINITION,description:t,name:n,arguments:i,repeatable:r,locations:a,loc:this.loc(e)}},t.parseDirectiveLocations=function(){this.expectOptionalToken(I.PIPE);var e=[];do{e.push(this.parseDirectiveLocation())}while(this.expectOptionalToken(I.PIPE));return e},t.parseDirectiveLocation=function(){var e=this._lexer.token,t=this.parseName();if(void 0!==D[t.value])return t;throw this.unexpected(e)},t.loc=function(e){if(!this._options.noLocation)return new R(e,this._lexer.lastToken,this._lexer.source)},t.peek=function(e){return this._lexer.token.kind===e},t.expectToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw d(this._lexer.source,t.start,"Expected ".concat(e,", found ").concat(L(t)))},t.expectOptionalToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t},t.expectKeyword=function(e){var t=this._lexer.token;if(t.kind!==I.NAME||t.value!==e)throw d(this._lexer.source,t.start,'Expected "'.concat(e,'", found ').concat(L(t)));this._lexer.advance()},t.expectOptionalKeyword=function(e){var t=this._lexer.token;return t.kind===I.NAME&&t.value===e&&(this._lexer.advance(),!0)},t.unexpected=function(e){var t=e||this._lexer.token;return d(this._lexer.source,t.start,"Unexpected ".concat(L(t)))},t.any=function(e,t,n){this.expectToken(e);for(var i=[];!this.expectOptionalToken(n);)i.push(t.call(this));return i},t.optionalMany=function(e,t,n){if(this.expectOptionalToken(e)){var i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i}return[]},t.many=function(e,t,n){this.expectToken(e);var i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i},e}();function R(e,t,n){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=n}function L(e){var t=e.value;return t?"".concat(e.kind,' "').concat(t,'"'):e.kind}s(R,(function(){return{start:this.start,end:this.end}}))}})}));