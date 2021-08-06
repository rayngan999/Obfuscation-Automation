
// ë¼ì¸ ë±ë¡(ë§¨ ë§ì§ë§)/ì­ì  deprecated function
	function lineControl(tableName, pos)
	{
		lineControls(tableName, tableName + '_SOURCE', pos);
	}

	function lineControls(tableName, sourceName, pos)
	{
		tableObject 	= document.getElementById(tableName);
		sourceObject	= document.getElementById(sourceName);

		if(typeof(tableObject) != 'undefined' && typeof(sourceObject) != 'undefined')
		{
			if(typeof(pos) == 'undefined')
				lineInsert(tableObject, sourceObject);
			else
				lineDelete(tableObject, pos);
		}
	}

	// ë¼ì¸ ë±ë¡

	function insertLine(tableName, pos)
	{
		if(typeof(pos) == 'undefined')
			insertLines(tableName, tableName + '_SOURCE');
		else
			insertLines(tableName, tableName + '_SOURCE', pos);

	}

	function insertLines(tableName, sourceName, pos)
	{
		tableObject 	= document.getElementById(tableName);
		sourceObject	= document.getElementById(sourceName);

		if(typeof(tableObject) != 'undefined' && typeof(sourceObject) != 'undefined')
		{
			if(typeof(pos) == 'undefined')
				lineInsert(tableObject, sourceObject);
			else
				lineInsert(tableObject, sourceObject, pos);
		}

	}

	// ë¼ì¸ ì­ì 

	function deleteLine(tableName, pos)
	{
		tableObject 	= document.getElementById(tableName);

		if(typeof(tableObject) != 'undefined')
		{
			if(typeof(pos) != 'undefined' && pos > -1)
				lineDelete(tableObject, pos);
		}
		addFocus.focus();
	}


//////////////////////////////////////////////////////////////////

	// ë³µì ê°ì ë¼ì¸ ì¶ê°

	function unionLines(tableName, lineCnt)
	{
		unionLine(tableName, tableName + '_SOURCE', lineCnt);
	}

	function unionLine(tableName, sourceName, lineCnt)
	{
		var tableObject = document.getElementById(tableName);
		var sourceObject = document.getElementById(sourceName);

		if(typeof(tableObject) != 'undefined')
		{
			var rowLen = tableObject.rows.length;

			if(lineCnt > 0)
			{
				for(i=0; i<lineCnt; i++)
					lineInsert(tableObject, sourceObject);
			}
		}
	}

	// ì ì²´ ë¼ì¸ ì­ì 

	function clearLines(tableName)
	{
		var tableObject = document.getElementById(tableName);

		if(typeof(tableObject) != 'undefined')
		{
			var rowLen = tableObject.rows.length;

			if(rowLen > 0)
			{
				for(i=0; i<rowLen; i++)
					lineDelete(tableObject, i);
			}
		}
	}

//////////////////////////////////////////////////////////////////

	// ë¼ì¸ ë³µì¬

	function lineInsert(tableObject, sourceObject, pos)
	{
		var lineNum = 0;
		var tempNum = 0;

		var insertPosition = 0;

		var rowLen = tableObject.rows.length;


		for(var j=0; j<rowLen; j++)
		{
			if(typeof(tableObject.rows[j].line) == 'undefined')
				tempNum = 0;
			else
				tempNum = tableObject.rows[j].line;

			// line Number êµ¬íê¸°

			if((new Number(lineNum) - new Number(tempNum)) <= 0)
				lineNum = new Number(tempNum) + 1;

			// pos ê° ì¡´ì¬ í ë ìë ¥í  ìì¹ êµ¬íê¸°

			if(typeof(pos) != 'undefined' && (new Number(pos) - new Number(tempNum)) == 0)
				insertPosition = j+1;
		}

		if(typeof(pos) == 'undefined' || insertPosition == 0)
			insertPosition = rowLen;


		var lineObject = tableObject.insertRow(insertPosition);

		lineObject.line = lineNum;
		lineObject.insertCell();
		lineObject.getElementsByTagName("td")[0].innerHTML = changeParameter(sourceObject, tableObject, lineNum);

	}

	// ë³ìë¬¸ì ì¹í

	function changeParameter(sourceObject, tableObject, lineNum)
	{
		var tempStr = sourceObject.innerHTML;

		tempStr = new String(tempStr).replace(/_TARGET/g, new String("'" + tableObject.id + "'"));
		tempStr = new String(tempStr).replace(/_POSITION/g, new String(lineNum));
		tempStr = new String(tempStr).replace(/_NUMBER/g, new String(lineNum+1));
		tempStr = new String(tempStr).replace(/_TEM/g, '');

		return tempStr;
	}


	// ë¼ì¸ ì ê±°

	function lineDelete(tableObject, pos)
	{
		var rowLen = tableObject.rows.length;

		for(var i = rowLen - 1; i >= 0; i--)
		{
			if(tableObject.rows[i].line == pos)
			{
				tableObject.deleteRow(i);
				break;
			}
		}
	}

	// ì íí ì¸ë±ì¤ íëì ìì¹ê°ì êµ¬íë¤.

	function searchIndex(fields, pos)
	{
		var result = -1;

		if(typeof(fields) != 'undefined' && fields.length)
		{
			for(i=0; i<fields.length; i++)
			{
				if(fields[i].value == pos)
				{
					result = i;
					break;
				}
			}
		}

		return result;
	}

