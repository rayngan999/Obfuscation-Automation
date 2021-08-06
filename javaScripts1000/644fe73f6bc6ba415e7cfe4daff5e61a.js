/* =========================================================
 * bootstrap-datepicker.js 
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

!function ($) {

	// Picker object

	var Datepicker = function (element, options) {

		if (options.language == 'pl_PL') {
			DPGlobal = {
				modes: [
					{
						clsName: 'days',
						navFnc: 'Month',
						navStep: 1
					},
					{
						clsName: 'months',
						navFnc: 'FullYear',
						navStep: 1
					},
					{
						clsName: 'years',
						navFnc: 'FullYear',
						navStep: 10
					}],

				dates: {
					days: ["Niedziela", "PoniedziaÅek", "Wtorek", "Åroda", "Czwartek", "PiÄtek", "Sobota", "Niedziela"],
					daysShort: ["Nd", "Pn", "Wt", "Sr", "Czw", "Pt", "Sob", "Nd"],
					daysMin: ["Nd", "Pn", "Wt", "År", "Czw", "Pt", "Sob", "Nd"],
					months: ["StyczeÅ", "Luty", "Marzec", "KwiecieÅ", "Maj", "Czerwiec", "Lipiec", "SierpieÅ", "WrzesieÅ", "PaÅºdziernik", "Listopad", "GrudzieÅ"],
					monthsShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paz", "Lis", "Gru"],
				},
				isLeapYear: function (year) {
					return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
				},
				getDaysInMonth: function (year, month) {
					return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
				},
				parseFormat: function (format) {
					var separator = format.match(/[.\/\-\s].*?/),
						parts = format.split(/\W+/);
					if (!separator || !parts || parts.length === 0) {
						throw new Error("Invalid date format.");
					}
					return { separator: separator, parts: parts };
				},
				parseDate: function (date, format) {
					var parts = date.split(format.separator),
						date = new Date(),
						val;
					date.setHours(0);
					date.setMinutes(0);
					date.setSeconds(0);
					date.setMilliseconds(0);
					if (parts.length === format.parts.length) {
						var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
						for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
							val = parseInt(parts[i], 10) || 1;
							switch (format.parts[i]) {
								case 'dd':
								case 'd':
									day = val;
									date.setDate(val);
									break;
								case 'mm':
								case 'm':
									month = val - 1;
									date.setMonth(val - 1);
									break;
								case 'yy':
									year = 2000 + val;
									date.setFullYear(2000 + val);
									break;
								case 'yyyy':
									year = val;
									date.setFullYear(val);
									break;
							}
						}
						date = new Date(year, month, day, 0, 0, 0);
					}
					return date;
				},
				formatDate: function (date, format) {
					var val = {
						d: date.getDate(),
						m: date.getMonth() + 1,
						yy: date.getFullYear().toString().substring(2),
						yyyy: date.getFullYear()
					};
					val.dd = (val.d < 10 ? '0' : '') + val.d;
					val.mm = (val.m < 10 ? '0' : '') + val.m;
					var date = [];
					for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
						date.push(val[format.parts[i]]);
					}
					return date.join(format.separator);
				},
				headTemplate: '<thead>' +
					'<tr>' +
					'<th class="prev">&lsaquo;</th>' +
					'<th colspan="5" class="switch"></th>' +
					'<th class="next">&rsaquo;</th>' +
					'</tr>' +
					'</thead>',
				contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
			};
		}
		else if (options.language == 'cy_GB') {
			DPGlobal = {
				modes: [
					{
						clsName: 'days',
						navFnc: 'Month',
						navStep: 1
					},
					{
						clsName: 'months',
						navFnc: 'FullYear',
						navStep: 1
					},
					{
						clsName: 'years',
						navFnc: 'FullYear',
						navStep: 10
					}],
				dates: {
					days: ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"],
					daysShort: ["Dl.", "Dt.", "Dc.", "Dj.", "Dv.", "Ds.", "Dg."],
					daysMin: ["Dl.", "Dt.", "Dc.", "Dj.", "Dv.", "Ds.", "Dg."],

					months: ["Gener", "Febrer", "MarÃ§", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
					monthsShort: ["Gen.", "Febr.", "MarÃ§", "Abr.", "Maig", "Juny", "Jul.", "Ag.", "Set.", "Oct.", "Nov.", "Des."],
				},
				isLeapYear: function (year) {
					return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
				},
				getDaysInMonth: function (year, month) {
					return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
				},
				parseFormat: function (format) {
					var separator = format.match(/[.\/\-\s].*?/),
						parts = format.split(/\W+/);
					if (!separator || !parts || parts.length === 0) {
						throw new Error("Invalid date format.");
					}
					return { separator: separator, parts: parts };
				},
				parseDate: function (date, format) {
					var parts = date.split(format.separator),
						date = new Date(),
						val;
					date.setHours(0);
					date.setMinutes(0);
					date.setSeconds(0);
					date.setMilliseconds(0);
					if (parts.length === format.parts.length) {
						var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
						for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
							val = parseInt(parts[i], 10) || 1;
							switch (format.parts[i]) {
								case 'dd':
								case 'd':
									day = val;
									date.setDate(val);
									break;
								case 'mm':
								case 'm':
									month = val - 1;
									date.setMonth(val - 1);
									break;
								case 'yy':
									year = 2000 + val;
									date.setFullYear(2000 + val);
									break;
								case 'yyyy':
									year = val;
									date.setFullYear(val);
									break;
							}
						}
						date = new Date(year, month, day, 0, 0, 0);
					}
					return date;
				},
				formatDate: function (date, format) {
					var val = {
						d: date.getDate(),
						m: date.getMonth() + 1,
						yy: date.getFullYear().toString().substring(2),
						yyyy: date.getFullYear()
					};
					val.dd = (val.d < 10 ? '0' : '') + val.d;
					val.mm = (val.m < 10 ? '0' : '') + val.m;
					var date = [];
					for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
						date.push(val[format.parts[i]]);
					}
					return date.join(format.separator);
				},
				headTemplate: '<thead>' +
					'<tr>' +
					'<th class="prev">&lsaquo;</th>' +
					'<th colspan="5" class="switch"></th>' +
					'<th class="next">&rsaquo;</th>' +
					'</tr>' +
					'</thead>',
				contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
			};
		}
		else if (options.language == 'cs_CZ') {
			DPGlobal = {
				modes: [
					{
						clsName: 'days',
						navFnc: 'Month',
						navStep: 1
					},
					{
						clsName: 'months',
						navFnc: 'FullYear',
						navStep: 1
					},
					{
						clsName: 'years',
						navFnc: 'FullYear',
						navStep: 10
					}],

				dates: {
					days: ["NedÄle", "PondÄlÃ­", "ÃterÃ½", "StÅeda", "Ätvrtek", "PÃ¡tek", "Sobota"],
					daysShort: ["Ne", "Po", "Ãt", "St", "Ät", "PÃ¡", "So"],
					daysMin: ["Ne", "Po", "Ãt", "St", "Ät", "PÃ¡", "So"],

					months: ["Leden", "Ãnor", "Brezen", "Duben", "Kveten", "Cerven", "Cervenec", "Srpen", "ZÃ¡rÃ­", "RÃ­jen", "Listopad", "Prosinec"],
					monthsShort: ["Leden", "Ãnor", "Brezen", "Duben", "Kveten", "Cerven", "Cervenec", "Srpen", "ZÃ¡rÃ­", "RÃ­jen", "Listopad", "Prosinec"],
				},
				isLeapYear: function (year) {
					return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
				},
				getDaysInMonth: function (year, month) {
					return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
				},
				parseFormat: function (format) {
					var separator = format.match(/[.\/\-\s].*?/),
						parts = format.split(/\W+/);
					if (!separator || !parts || parts.length === 0) {
						throw new Error("Invalid date format.");
					}
					return { separator: separator, parts: parts };
				},
				parseDate: function (date, format) {
					var parts = date.split(format.separator),
						date = new Date(),
						val;
					date.setHours(0);
					date.setMinutes(0);
					date.setSeconds(0);
					date.setMilliseconds(0);
					if (parts.length === format.parts.length) {
						var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
						for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
							val = parseInt(parts[i], 10) || 1;
							switch (format.parts[i]) {
								case 'dd':
								case 'd':
									day = val;
									date.setDate(val);
									break;
								case 'mm':
								case 'm':
									month = val - 1;
									date.setMonth(val - 1);
									break;
								case 'yy':
									year = 2000 + val;
									date.setFullYear(2000 + val);
									break;
								case 'yyyy':
									year = val;
									date.setFullYear(val);
									break;
							}
						}
						date = new Date(year, month, day, 0, 0, 0);
					}
					return date;
				},
				formatDate: function (date, format) {
					var val = {
						d: date.getDate(),
						m: date.getMonth() + 1,
						yy: date.getFullYear().toString().substring(2),
						yyyy: date.getFullYear()
					};
					val.dd = (val.d < 10 ? '0' : '') + val.d;
					val.mm = (val.m < 10 ? '0' : '') + val.m;
					var date = [];
					for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
						date.push(val[format.parts[i]]);
					}
					return date.join(format.separator);
				},
				headTemplate: '<thead>' +
					'<tr>' +
					'<th class="prev">&lsaquo;</th>' +
					'<th colspan="5" class="switch"></th>' +
					'<th class="next">&rsaquo;</th>' +
					'</tr>' +
					'</thead>',
				contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
			};
		}
		else if (options.language == 'sk_SK') {
			DPGlobal = {
				modes: [
					{
						clsName: 'days',
						navFnc: 'Month',
						navStep: 1
					},
					{
						clsName: 'months',
						navFnc: 'FullYear',
						navStep: 1
					},
					{
						clsName: 'years',
						navFnc: 'FullYear',
						navStep: 10
					}],

				dates: {
					days: ["nedeÄ¾a", "pondelok", "utorok", "streda", "Å¡tvrtok", "piatok", "sobota"],
					daysShort: ["Ne", "Po", "Ut", "St", "Å t", "Pi", "So"],
					daysMin: ["Ne", "Po", "Ut", "St", "Å t", "Pi", "So"],

					months: ["januÃ¡r", "februÃ¡r", "marec", "aprÃ­l", "mÃ¡j", "jÃºn", "jÃºl", "august", "september", "oktÃ³ber", "november", "december"],
					monthsShort: ["jan", "feb", "mar", "apr", "mÃ¡j", "jÃºn", "jÃºl", "aug", "sep", "okt", "nov", "dec"],
				},
				isLeapYear: function (year) {
					return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
				},
				getDaysInMonth: function (year, month) {
					return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
				},
				parseFormat: function (format) {
					var separator = format.match(/[.\/\-\s].*?/),
						parts = format.split(/\W+/);
					if (!separator || !parts || parts.length === 0) {
						throw new Error("Invalid date format.");
					}
					return { separator: separator, parts: parts };
				},
				parseDate: function (date, format) {
					var parts = date.split(format.separator),
						date = new Date(),
						val;
					date.setHours(0);
					date.setMinutes(0);
					date.setSeconds(0);
					date.setMilliseconds(0);
					if (parts.length === format.parts.length) {
						var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
						for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
							val = parseInt(parts[i], 10) || 1;
							switch (format.parts[i]) {
								case 'dd':
								case 'd':
									day = val;
									date.setDate(val);
									break;
								case 'mm':
								case 'm':
									month = val - 1;
									date.setMonth(val - 1);
									break;
								case 'yy':
									year = 2000 + val;
									date.setFullYear(2000 + val);
									break;
								case 'yyyy':
									year = val;
									date.setFullYear(val);
									break;
							}
						}
						date = new Date(year, month, day, 0, 0, 0);
					}
					return date;
				},
				formatDate: function (date, format) {
					var val = {
						d: date.getDate(),
						m: date.getMonth() + 1,
						yy: date.getFullYear().toString().substring(2),
						yyyy: date.getFullYear()
					};
					val.dd = (val.d < 10 ? '0' : '') + val.d;
					val.mm = (val.m < 10 ? '0' : '') + val.m;
					var date = [];
					for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
						date.push(val[format.parts[i]]);
					}
					return date.join(format.separator);
				},
				headTemplate: '<thead>' +
					'<tr>' +
					'<th class="prev">&lsaquo;</th>' +
					'<th colspan="5" class="switch"></th>' +
					'<th class="next">&rsaquo;</th>' +
					'</tr>' +
					'</thead>',
				contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
			};
		}
		else if (options.language == 'de_DE') {
			DPGlobal = {
				modes: [
					{
						clsName: 'days',
						navFnc: 'Month',
						navStep: 1
					},
					{
						clsName: 'months',
						navFnc: 'FullYear',
						navStep: 1
					},
					{
						clsName: 'years',
						navFnc: 'FullYear',
						navStep: 10
					}],

				dates: {
					days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
					daysMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
					//daysSho: ["Niedz", "Pon", "Wt", "År", "Czw", "Pt", "So", "Niedz"],
					months: ["Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
					monthsShort: ["Jan", "Feb", "MÃ¤rz", "Apr", "Mai", "Juni", "Juli", "Aug", "Sept", "Okt", "Nov", "Dez"],
				},
				isLeapYear: function (year) {
					return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
				},
				getDaysInMonth: function (year, month) {
					return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
				},
				parseFormat: function (format) {
					var separator = format.match(/[.\/\-\s].*?/),
						parts = format.split(/\W+/);
					if (!separator || !parts || parts.length === 0) {
						throw new Error("Invalid date format.");
					}
					return { separator: separator, parts: parts };
				},
				parseDate: function (date, format) {
					var parts = date.split(format.separator),
						date = new Date(),
						val;
					date.setHours(0);
					date.setMinutes(0);
					date.setSeconds(0);
					date.setMilliseconds(0);
					if (parts.length === format.parts.length) {
						var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
						for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
							val = parseInt(parts[i], 10) || 1;
							switch (format.parts[i]) {
								case 'dd':
								case 'd':
									day = val;
									date.setDate(val);
									break;
								case 'mm':
								case 'm':
									month = val - 1;
									date.setMonth(val - 1);
									break;
								case 'yy':
									year = 2000 + val;
									date.setFullYear(2000 + val);
									break;
								case 'yyyy':
									year = val;
									date.setFullYear(val);
									break;
							}
						}
						date = new Date(year, month, day, 0, 0, 0);
					}
					return date;
				},
				formatDate: function (date, format) {
					var val = {
						d: date.getDate(),
						m: date.getMonth() + 1,
						yy: date.getFullYear().toString().substring(2),
						yyyy: date.getFullYear()
					};
					val.dd = (val.d < 10 ? '0' : '') + val.d;
					val.mm = (val.m < 10 ? '0' : '') + val.m;
					var date = [];
					for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
						date.push(val[format.parts[i]]);
					}
					return date.join(format.separator);
				},
				headTemplate: '<thead>' +
					'<tr>' +
					'<th class="prev">&lsaquo;</th>' +
					'<th colspan="5" class="switch"></th>' +
					'<th class="next">&rsaquo;</th>' +
					'</tr>' +
					'</thead>',
				contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
			};
		}
		else if (options.language == 'it_IT') {
			DPGlobal = {
				modes: [
					{
						clsName: 'days',
						navFnc: 'Month',
						navStep: 1
					},
					{
						clsName: 'months',
						navFnc: 'FullYear',
						navStep: 1
					},
					{
						clsName: 'years',
						navFnc: 'FullYear',
						navStep: 10
					}],

				dates: {
					days: ["domencia", "lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato"],
					daysMin: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
					months: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
					monthsShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
				},
				isLeapYear: function (year) {
					return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
				},
				getDaysInMonth: function (year, month) {
					return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
				},
				parseFormat: function (format) {
					var separator = format.match(/[.\/\-\s].*?/),
						parts = format.split(/\W+/);
					if (!separator || !parts || parts.length === 0) {
						throw new Error("Invalid date format.");
					}
					return { separator: separator, parts: parts };
				},
				parseDate: function (date, format) {
					var parts = date.split(format.separator),
						date = new Date(),
						val;
					date.setHours(0);
					date.setMinutes(0);
					date.setSeconds(0);
					date.setMilliseconds(0);
					if (parts.length === format.parts.length) {
						var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
						for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
							val = parseInt(parts[i], 10) || 1;
							switch (format.parts[i]) {
								case 'dd':
								case 'd':
									day = val;
									date.setDate(val);
									break;
								case 'mm':
								case 'm':
									month = val - 1;
									date.setMonth(val - 1);
									break;
								case 'yy':
									year = 2000 + val;
									date.setFullYear(2000 + val);
									break;
								case 'yyyy':
									year = val;
									date.setFullYear(val);
									break;
							}
						}
						date = new Date(year, month, day, 0, 0, 0);
					}
					return date;
				},
				formatDate: function (date, format) {
					var val = {
						d: date.getDate(),
						m: date.getMonth() + 1,
						yy: date.getFullYear().toString().substring(2),
						yyyy: date.getFullYear()
					};
					val.dd = (val.d < 10 ? '0' : '') + val.d;
					val.mm = (val.m < 10 ? '0' : '') + val.m;
					var date = [];
					for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
						date.push(val[format.parts[i]]);
					}
					return date.join(format.separator);
				},
				headTemplate: '<thead>' +
					'<tr>' +
					'<th class="prev">&lsaquo;</th>' +
					'<th colspan="5" class="switch"></th>' +
					'<th class="next">&rsaquo;</th>' +
					'</tr>' +
					'</thead>',
				contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
			};
		}
		else if (options.language == 'es_US') {
			DPGlobal = {
				modes: [
					{
						clsName: 'days',
						navFnc: 'Month',
						navStep: 1
					},
					{
						clsName: 'months',
						navFnc: 'FullYear',
						navStep: 1
					},
					{
						clsName: 'years',
						navFnc: 'FullYear',
						navStep: 10
					}],

				dates: {
					days: ["Domingo", "Lunes", "Martes", "MiÃ©rcoles", "Jueves", "Viernes", "SÃ¡bado"],
					daysMin: ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"],
					months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
					monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
				},
				isLeapYear: function (year) {
					return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
				},
				getDaysInMonth: function (year, month) {
					return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
				},
				parseFormat: function (format) {
					var separator = format.match(/[.\/\-\s].*?/),
						parts = format.split(/\W+/);
					if (!separator || !parts || parts.length === 0) {
						throw new Error("Invalid date format.");
					}
					return { separator: separator, parts: parts };
				},
				parseDate: function (date, format) {
					var parts = date.split(format.separator),
						date = new Date(),
						val;
					date.setHours(0);
					date.setMinutes(0);
					date.setSeconds(0);
					date.setMilliseconds(0);
					if (parts.length === format.parts.length) {
						var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
						for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
							val = parseInt(parts[i], 10) || 1;
							switch (format.parts[i]) {
								case 'dd':
								case 'd':
									day = val;
									date.setDate(val);
									break;
								case 'mm':
								case 'm':
									month = val - 1;
									date.setMonth(val - 1);
									break;
								case 'yy':
									year = 2000 + val;
									date.setFullYear(2000 + val);
									break;
								case 'yyyy':
									year = val;
									date.setFullYear(val);
									break;
							}
						}
						date = new Date(year, month, day, 0, 0, 0);
					}
					return date;
				},
				formatDate: function (date, format) {
					var val = {
						d: date.getDate(),
						m: date.getMonth() + 1,
						yy: date.getFullYear().toString().substring(2),
						yyyy: date.getFullYear()
					};
					val.dd = (val.d < 10 ? '0' : '') + val.d;
					val.mm = (val.m < 10 ? '0' : '') + val.m;
					var date = [];
					for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
						date.push(val[format.parts[i]]);
					}
					return date.join(format.separator);
				},
				headTemplate: '<thead>' +
					'<tr>' +
					'<th class="prev">&lsaquo;</th>' +
					'<th colspan="5" class="switch"></th>' +
					'<th class="next">&rsaquo;</th>' +
					'</tr>' +
					'</thead>',
				contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
			};
		}
		else if (options.language == 'fr_FR') {
			DPGlobal = {
				modes: [
					{
						clsName: 'days',
						navFnc: 'Month',
						navStep: 1
					},
					{
						clsName: 'months',
						navFnc: 'FullYear',
						navStep: 1
					},
					{
						clsName: 'years',
						navFnc: 'FullYear',
						navStep: 10
					}],

				dates: {
					days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
					daysShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
					daysMin: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
					months: ["Janvier", "FÃ©vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "AoÃ»t", "Septembre", "Octobre", "Novembre", "DÃ©cembre"],
					monthsShort: ["Jan", "FÃ©v", "Mar", "Avr", "Mai", "Jun", "Jul", "AoÃ»", "Sep", "Oct", "Nov", "DÃ©c"],
				},
				isLeapYear: function (year) {
					return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
				},
				getDaysInMonth: function (year, month) {
					return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
				},
				parseFormat: function (format) {
					var separator = format.match(/[.\/\-\s].*?/),
						parts = format.split(/\W+/);
					if (!separator || !parts || parts.length === 0) {
						throw new Error("Invalid date format.");
					}
					return { separator: separator, parts: parts };
				},
				parseDate: function (date, format) {
					var parts = date.split(format.separator),
						date = new Date(),
						val;
					date.setHours(0);
					date.setMinutes(0);
					date.setSeconds(0);
					date.setMilliseconds(0);
					if (parts.length === format.parts.length) {
						var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
						for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
							val = parseInt(parts[i], 10) || 1;
							switch (format.parts[i]) {
								case 'dd':
								case 'd':
									day = val;
									date.setDate(val);
									break;
								case 'mm':
								case 'm':
									month = val - 1;
									date.setMonth(val - 1);
									break;
								case 'yy':
									year = 2000 + val;
									date.setFullYear(2000 + val);
									break;
								case 'yyyy':
									year = val;
									date.setFullYear(val);
									break;
							}
						}
						date = new Date(year, month, day, 0, 0, 0);
					}
					return date;
				},
				formatDate: function (date, format) {
					var val = {
						d: date.getDate(),
						m: date.getMonth() + 1,
						yy: date.getFullYear().toString().substring(2),
						yyyy: date.getFullYear()
					};
					val.dd = (val.d < 10 ? '0' : '') + val.d;
					val.mm = (val.m < 10 ? '0' : '') + val.m;
					var date = [];
					for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
						date.push(val[format.parts[i]]);
					}
					return date.join(format.separator);
				},
				headTemplate: '<thead>' +
					'<tr>' +
					'<th class="prev">&lsaquo;</th>' +
					'<th colspan="5" class="switch"></th>' +
					'<th class="next">&rsaquo;</th>' +
					'</tr>' +
					'</thead>',
				contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
			};
		}
		else if (options.language == 'ro_RO') {
			DPGlobal = {
				modes: [
					{
						clsName: 'days',
						navFnc: 'Month',
						navStep: 1
					},
					{
						clsName: 'months',
						navFnc: 'FullYear',
						navStep: 1
					},
					{
						clsName: 'years',
						navFnc: 'FullYear',
						navStep: 10
					}],

				dates: {
					days: ["DuminicÄ", "Luni", "MarÅ£i", "Miercuri", "Joi", "Vineri", "SÃ¢mbÄtÄ"],
					daysMin: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "SÃ¢"],
					//daysSho: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "SÃ¢m"],
					months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
					monthsShort: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				},
				isLeapYear: function (year) {
					return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
				},
				getDaysInMonth: function (year, month) {
					return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
				},
				parseFormat: function (format) {
					var separator = format.match(/[.\/\-\s].*?/),
						parts = format.split(/\W+/);
					if (!separator || !parts || parts.length === 0) {
						throw new Error("Invalid date format.");
					}
					return { separator: separator, parts: parts };
				},
				parseDate: function (date, format) {
					var parts = date.split(format.separator),
						date = new Date(),
						val;
					date.setHours(0);
					date.setMinutes(0);
					date.setSeconds(0);
					date.setMilliseconds(0);
					if (parts.length === format.parts.length) {
						var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
						for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
							val = parseInt(parts[i], 10) || 1;
							switch (format.parts[i]) {
								case 'dd':
								case 'd':
									day = val;
									date.setDate(val);
									break;
								case 'mm':
								case 'm':
									month = val - 1;
									date.setMonth(val - 1);
									break;
								case 'yy':
									year = 2000 + val;
									date.setFullYear(2000 + val);
									break;
								case 'yyyy':
									year = val;
									date.setFullYear(val);
									break;
							}
						}
						date = new Date(year, month, day, 0, 0, 0);
					}
					return date;
				},
				formatDate: function (date, format) {
					var val = {
						d: date.getDate(),
						m: date.getMonth() + 1,
						yy: date.getFullYear().toString().substring(2),
						yyyy: date.getFullYear()
					};
					val.dd = (val.d < 10 ? '0' : '') + val.d;
					val.mm = (val.m < 10 ? '0' : '') + val.m;
					var date = [];
					for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
						date.push(val[format.parts[i]]);
					}
					return date.join(format.separator);
				},
				headTemplate: '<thead>' +
					'<tr>' +
					'<th class="prev">&lsaquo;</th>' +
					'<th colspan="5" class="switch"></th>' +
					'<th class="next">&rsaquo;</th>' +
					'</tr>' +
					'</thead>',
				contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
			};
		}
		else if (options.language == 'ja_JP') {
			DPGlobal = {
				modes: [
					{
						clsName: 'days',
						navFnc: 'Month',
						navStep: 1
					},
					{
						clsName: 'months',
						navFnc: 'FullYear',
						navStep: 1
					},
					{
						clsName: 'years',
						navFnc: 'FullYear',
						navStep: 10
					}],

				dates: {
					days: [ "æ¥ææ¥","æææ¥","ç«ææ¥","æ°´ææ¥","æ¨ææ¥","éææ¥","åææ¥" ],
					daysShort: [ "æ¥","æ","ç«","æ°´","æ¨","é","å" ],
					daysMin: [ "æ¥","æ","ç«","æ°´","æ¨","é","å" ],
					months: [ "1æ","2æ","3æ","4æ","5æ","6æ", "7æ","8æ","9æ","10æ","11æ","12æ" ],
					monthsShort: [ "1æ","2æ","3æ","4æ","5æ","6æ", "7æ","8æ","9æ","10æ","11æ","12æ" ],
				},
				isLeapYear: function (year) {
					return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
				},
				getDaysInMonth: function (year, month) {
					return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
				},
				parseFormat: function (format) {
					var separator = format.match(/[.\/\-\s].*?/),
						parts = format.split(/\W+/);
					if (!separator || !parts || parts.length === 0) {
						throw new Error("Invalid date format.");
					}
					return { separator: separator, parts: parts };
				},
				parseDate: function (date, format) {
					var parts = date.split(format.separator),
						date = new Date(),
						val;
					date.setHours(0);
					date.setMinutes(0);
					date.setSeconds(0);
					date.setMilliseconds(0);
					if (parts.length === format.parts.length) {
						var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
						for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
							val = parseInt(parts[i], 10) || 1;
							switch (format.parts[i]) {
								case 'dd':
								case 'd':
									day = val;
									date.setDate(val);
									break;
								case 'mm':
								case 'm':
									month = val - 1;
									date.setMonth(val - 1);
									break;
								case 'yy':
									year = 2000 + val;
									date.setFullYear(2000 + val);
									break;
								case 'yyyy':
									year = val;
									date.setFullYear(val);
									break;
							}
						}
						date = new Date(year, month, day, 0, 0, 0);
					}
					return date;
				},
				formatDate: function (date, format) {
					var val = {
						d: date.getDate(),
						m: date.getMonth() + 1,
						yy: date.getFullYear().toString().substring(2),
						yyyy: date.getFullYear()
					};
					val.dd = (val.d < 10 ? '0' : '') + val.d;
					val.mm = (val.m < 10 ? '0' : '') + val.m;
					var date = [];
					for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
						date.push(val[format.parts[i]]);
					}
					return date.join(format.separator);
				},
				headTemplate: '<thead>' +
					'<tr>' +
					'<th class="prev">&lsaquo;</th>' +
					'<th colspan="5" class="switch"></th>' +
					'<th class="next">&rsaquo;</th>' +
					'</tr>' +
					'</thead>',
				contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
			};
		}
		else if (options.language == 'pt_BR') {
			DPGlobal = {
				modes: [
					{
						clsName: 'days',
						navFnc: 'Month',
						navStep: 1
					},
					{
						clsName: 'months',
						navFnc: 'FullYear',
						navStep: 1
					},
					{
						clsName: 'years',
						navFnc: 'FullYear',
						navStep: 10
					}],
				dates: {
					days: ["Domingo", "Segunda-feira", "terÃ§a", "Quarta-feira", "Quinta-feira", "Sexta-feira", "sÃ¡bado"],
					daysShort: ["Do", "Se", "Te", "Qa", "Qi", "Sx", "Sa"],
					daysMin: ["Do", "Se", "Te", "Qa", "Qi", "Sx", "Sa"],

					months: ["Janeiro", "Fevereiro", "MarÃ§o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
					monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dez"]
				},
				isLeapYear: function (year) {
					return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
				},
				getDaysInMonth: function (year, month) {
					return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
				},
				parseFormat: function (format) {
					var separator = format.match(/[.\/\-\s].*?/),
						parts = format.split(/\W+/);
					if (!separator || !parts || parts.length === 0) {
						throw new Error("Invalid date format.");
					}
					return { separator: separator, parts: parts };
				},
				parseDate: function (date, format) {
					var parts = date.split(format.separator),
						date = new Date(),
						val;
					date.setHours(0);
					date.setMinutes(0);
					date.setSeconds(0);
					date.setMilliseconds(0);
					if (parts.length === format.parts.length) {
						var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
						for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
							val = parseInt(parts[i], 10) || 1;
							switch (format.parts[i]) {
								case 'dd':
								case 'd':
									day = val;
									date.setDate(val);
									break;
								case 'mm':
								case 'm':
									month = val - 1;
									date.setMonth(val - 1);
									break;
								case 'yy':
									year = 2000 + val;
									date.setFullYear(2000 + val);
									break;
								case 'yyyy':
									year = val;
									date.setFullYear(val);
									break;
							}
						}
						date = new Date(year, month, day, 0, 0, 0);
					}
					return date;
				},
				formatDate: function (date, format) {
					var val = {
						d: date.getDate(),
						m: date.getMonth() + 1,
						yy: date.getFullYear().toString().substring(2),
						yyyy: date.getFullYear()
					};
					val.dd = (val.d < 10 ? '0' : '') + val.d;
					val.mm = (val.m < 10 ? '0' : '') + val.m;
					var date = [];
					for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
						date.push(val[format.parts[i]]);
					}
					return date.join(format.separator);
				},
				headTemplate: '<thead>' +
					'<tr>' +
					'<th class="prev">&lsaquo;</th>' +
					'<th colspan="5" class="switch"></th>' +
					'<th class="next">&rsaquo;</th>' +
					'</tr>' +
					'</thead>',
				contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
			};
		}
		else {
			DPGlobal = {
				modes: [
					{
						clsName: 'days',
						navFnc: 'Month',
						navStep: 1
					},
					{
						clsName: 'months',
						navFnc: 'FullYear',
						navStep: 1
					},
					{
						clsName: 'years',
						navFnc: 'FullYear',
						navStep: 10
					}],

				dates: {
					days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
					daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
					daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
					months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
				},
				isLeapYear: function (year) {
					return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
				},
				getDaysInMonth: function (year, month) {
					return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
				},
				parseFormat: function (format) {
					var separator = format.match(/[.\/\-\s].*?/),
						parts = format.split(/\W+/);
					if (!separator || !parts || parts.length === 0) {
						throw new Error("Invalid date format.");
					}
					return { separator: separator, parts: parts };
				},
				parseDate: function (date, format) {
					var parts = date.split(format.separator),
						date = new Date(),
						val;
					date.setHours(0);
					date.setMinutes(0);
					date.setSeconds(0);
					date.setMilliseconds(0);
					if (parts.length === format.parts.length) {
						var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
						for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
							val = parseInt(parts[i], 10) || 1;
							switch (format.parts[i]) {
								case 'dd':
								case 'd':
									day = val;
									date.setDate(val);
									break;
								case 'mm':
								case 'm':
									month = val - 1;
									date.setMonth(val - 1);
									break;
								case 'yy':
									year = 2000 + val;
									date.setFullYear(2000 + val);
									break;
								case 'yyyy':
									year = val;
									date.setFullYear(val);
									break;
							}
						}
						date = new Date(year, month, day, 0, 0, 0);
					}
					return date;
				},
				formatDate: function (date, format) {
					var val = {
						d: date.getDate(),
						m: date.getMonth() + 1,
						yy: date.getFullYear().toString().substring(2),
						yyyy: date.getFullYear()
					};
					val.dd = (val.d < 10 ? '0' : '') + val.d;
					val.mm = (val.m < 10 ? '0' : '') + val.m;
					var date = [];
					for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
						date.push(val[format.parts[i]]);
					}
					return date.join(format.separator);
				},
				headTemplate: '<thead>' +
					'<tr>' +
					'<th class="prev">&lsaquo;</th>' +
					'<th colspan="5" class="switch"></th>' +
					'<th class="next">&rsaquo;</th>' +
					'</tr>' +
					'</thead>',
				contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
			};
		}

		DPGlobal.template = '<div class="datepicker dropdown-menu">' +
			'<div class="datepicker-days">' +
			'<table class=" table-condensed">' +
			DPGlobal.headTemplate +
			'<tbody></tbody>' +
			'</table>' +
			'</div>' +
			'<div class="datepicker-months">' +
			'<table class="table-condensed">' +
			DPGlobal.headTemplate +
			DPGlobal.contTemplate +
			'</table>' +
			'</div>' +
			'<div class="datepicker-years">' +
			'<table class="table-condensed">' +
			DPGlobal.headTemplate +
			DPGlobal.contTemplate +
			'</table>' +
			'</div>' +
			'</div>';

		this.element = $(element);
		this.format = DPGlobal.parseFormat(options.format || this.element.data('date-format') || 'mm/dd/yyyy');
		this.picker = $(DPGlobal.template)
			.appendTo('body')
			.on({
				click: $.proxy(this.click, this)//,
				//mousedown: $.proxy(this.mousedown, this)
			});
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on') : false;

		if (this.isInput) {
			this.element.on({
				focus: $.proxy(this.show, this),
				//blur: $.proxy(this.hide, this),
				keyup: $.proxy(this.update, this)
			});
		} else {
			if (this.component) {
				this.component.on('click', $.proxy(this.show, this));
			} else {
				this.element.on('click', $.proxy(this.show, this));
			}
		}

		this.minViewMode = options.minViewMode || this.element.data('date-minviewmode') || 0;
		if (typeof this.minViewMode === 'string') {
			switch (this.minViewMode) {
				case 'months':
					this.minViewMode = 1;
					break;
				case 'years':
					this.minViewMode = 2;
					break;
				default:
					this.minViewMode = 0;
					break;
			}
		}
		this.viewMode = options.viewMode || this.element.data('date-viewmode') || 0;
		if (typeof this.viewMode === 'string') {
			switch (this.viewMode) {
				case 'months':
					this.viewMode = 1;
					break;
				case 'years':
					this.viewMode = 2;
					break;
				default:
					this.viewMode = 0;
					break;
			}
		}



		this.startViewMode = this.viewMode;
		this.weekStart = options.weekStart || this.element.data('date-weekstart') || 0;
		this.weekEnd = this.weekStart === 0 ? 6 : this.weekStart - 1;
		this.onRender = options.onRender;
		this.fillDow();
		this.fillMonths();
		this.update();
		this.showMode();
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		show: function (e) {
			this.picker.show();
			this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
			this.place();
			$(window).on('resize', $.proxy(this.place, this));
			if (e) {
				e.stopPropagation();
				e.preventDefault();
			}
			if (!this.isInput) {
			}
			var that = this;
			$(document).on('mousedown', function (ev) {
				if ($(ev.target).closest('.datepicker').length == 0) {
					that.hide();
				}
			});
			$(document).on('keydown', function (ev) {
				if ($(ev.target).closest('.datepicker').length == 0) {
					that.hide();
				}
			});
			this.element.trigger({
				type: 'show',
				date: this.date
			});
		},

		hide: function () {
			this.picker.hide();
			$(window).off('resize', this.place);
			this.viewMode = this.startViewMode;
			this.showMode();
			if (!this.isInput) {
				$(document).off('mousedown', this.hide);
			}
			//this.set();
			this.element.trigger({
				type: 'hide',
				date: this.date
			});
		},

		set: function () {
			var formated = DPGlobal.formatDate(this.date, this.format);
			if (!this.isInput) {
				if (this.component) {
					this.element.find('input').prop('value', formated);
				}
				this.element.data('date', formated);
			} else {
				this.element.prop('value', formated);
			}
		},

		setValue: function (newDate) {
			if (typeof newDate === 'string') {
				this.date = DPGlobal.parseDate(newDate, this.format);
			} else {
				this.date = new Date(newDate);
			}
			this.set();
			this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
			this.fill();
		},

		place: function () {
			var offset = this.component ? this.component.offset() : this.element.offset();
			this.picker.css({
				top: offset.top + this.height,
				left: offset.left
			});
		},

		update: function (newDate) {
			this.date = DPGlobal.parseDate(
				typeof newDate === 'string' ? newDate : (this.isInput ? this.element.prop('value') : this.element.data('date')),
				this.format
			);
			this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
			this.fill();
		},

		fillDow: function () {
			var dowCnt = this.weekStart;
			var html = '<tr>';
			while (dowCnt < this.weekStart + 7) {
				html += '<th class="dow">' + DPGlobal.dates.daysMin[(dowCnt++) % 7] + '</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function () {
			var html = '';
			var i = 0
			while (i < 12) {
				html += '<span class="month">' + DPGlobal.dates.monthsShort[i++] + '</span>';
			}
			this.picker.find('.datepicker-months td').append(html);
		},

		fill: function () {
			var d = new Date(this.viewDate),
				year = d.getFullYear(),
				month = d.getMonth(),
				currentDate = this.date.valueOf();
			this.picker.find('.datepicker-days th:eq(1)')
				.text(DPGlobal.dates.months[month] + ' ' + year);
			var prevMonth = new Date(year, month - 1, 28, 0, 0, 0, 0),
				day = DPGlobal.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
			prevMonth.setDate(day);
			prevMonth.setDate(day - (prevMonth.getDay() - this.weekStart + 7) % 7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setDate(nextMonth.getDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName,
				prevY,
				prevM;
			while (prevMonth.valueOf() < nextMonth) {
				if (prevMonth.getDay() === this.weekStart) {
					html.push('<tr>');
				}
				clsName = this.onRender(prevMonth);
				prevY = prevMonth.getFullYear();
				prevM = prevMonth.getMonth();
				if ((prevM < month && prevY === year) || prevY < year) {
					clsName += ' old';
				} else if ((prevM > month && prevY === year) || prevY > year) {
					clsName += ' new';
				}
				if (prevMonth.valueOf() === currentDate) {
					clsName += ' active';
				}
				html.push('<td class="day ' + clsName + '">' + prevMonth.getDate() + '</td>');
				if (prevMonth.getDay() === this.weekEnd) {
					html.push('</tr>');
				}
				prevMonth.setDate(prevMonth.getDate() + 1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
			var currentYear = this.date.getFullYear();

			var months = this.picker.find('.datepicker-months')
				.find('th:eq(1)')
				.text(year)
				.end()
				.find('span').removeClass('active');
			if (currentYear === year) {
				months.eq(this.date.getMonth()).addClass('active');
			}

			html = '';
			year = parseInt(year / 10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
				.find('th:eq(1)')
				.text(year + '-' + (year + 9))
				.end()
				.find('td');
			year -= 1;
			for (var i = -1; i < 11; i++) {
				html += '<span class="year' + (i === -1 || i === 10 ? ' old' : '') + (currentYear === year ? ' active' : '') + '">' + year + '</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		click: function (e) {
			e.stopPropagation();
			e.preventDefault();
			var target = $(e.target).closest('span, td, th');
			if (target.length === 1) {
				switch (target[0].nodeName.toLowerCase()) {
					case 'th':
						switch (target[0].className) {
							case 'switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								this.viewDate['set' + DPGlobal.modes[this.viewMode].navFnc].call(
									this.viewDate,
									this.viewDate['get' + DPGlobal.modes[this.viewMode].navFnc].call(this.viewDate) +
									DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1)
								);
								this.fill();
								this.set();
								break;
						}
						break;
					case 'span':
						if (target.is('.month')) {
							var month = target.parent().find('span').index(target);
							this.viewDate.setMonth(month);
						} else {
							var year = parseInt(target.text(), 10) || 0;
							this.viewDate.setFullYear(year);
						}
						if (this.viewMode !== 0) {
							this.date = new Date(this.viewDate);
							this.element.trigger({
								type: 'changeDate',
								date: this.date,
								viewMode: DPGlobal.modes[this.viewMode].clsName
							});
						}
						this.showMode(-1);
						this.fill();
						this.set();
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')) {
							var day = parseInt(target.text(), 10) || 1;
							var month = this.viewDate.getMonth();
							if (target.is('.old')) {
								month -= 1;
							} else if (target.is('.new')) {
								month += 1;
							}
							var year = this.viewDate.getFullYear();
							this.date = new Date(year, month, day, 0, 0, 0, 0);
							this.viewDate = new Date(year, month, Math.min(28, day), 0, 0, 0, 0);
							this.fill();
							this.set();
							this.element.trigger({
								type: 'changeDate',
								date: this.date,
								viewMode: DPGlobal.modes[this.viewMode].clsName
							});
						}
						break;
				}
			}
		},

		mousedown: function (e) {
			e.stopPropagation();
			e.preventDefault();
		},

		showMode: function (dir) {
			if (dir) {
				this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + dir));
			}
			this.picker.find('>div').hide().filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName).show();
		}
	};

	$.fn.datepicker = function (option, val) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data) {
				$this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults, options))));
			}
			if (typeof option === 'string') data[option](val);
		});
	};

	$.fn.datepicker.defaults = {
		onRender: function (date) {
			return '';
		}
	};
	$.fn.datepicker.Constructor = Datepicker;

	var DPGlobal;





}(window.jQuery);