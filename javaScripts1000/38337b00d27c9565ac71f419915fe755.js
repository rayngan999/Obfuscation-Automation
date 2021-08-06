/*
	Simple library to mak working with local storage a little easier. It is not 100% yet, but it is functional.
	Version 1.0
*/

// BEGIN LIB
let truncate = 65; // Default === 65 which means NO TRUNCATION
let expires = 365; // Default expiration period
let miliday = 86400000;
var date = new Date();
let ustamp = date.getTime();

function isStorageSupported() {
	return( typeof(Storage) !== "undefined" );
}

function truncateItem( item ) {
		return( item.substring( 0, truncate ) );
}

function storeData( dataID, data ) {
	if (isStorageSupported()) {
		window.localStorage.setItem( dataID, data );
		return data;
	}
}

function removeData( dataID ) {
	if (isStorageSupported()) {
		window.localStorage.removeItem( dataID );
	}
}

function retrieveData( dataID ) {
	if (isStorageSupported()) {
		if ( window.localStorage.getItem( dataID ) ) {
			return( window.localStorage.getItem( dataID ) );
		}
	}
}

function retrieveDataObject( dataID ) {
	if (isStorageSupported()) {
		if ( window.localStorage.getItem( dataID ) ) {
			return( JSON.parse( window.localStorage.getItem( dataID ) ) );
		}
	}
}

function readStorage() {
	if (isStorageSupported()) {
		// Iterate over the localstorage opbject
		Object.keys(localStorage).forEach(key => console.log(key+" => "+localStorage[key]));
	}
}

function getExpiration() {
	return( ustamp + ( miliday * expires ) );
}


function sha256( str ) {
	var dg = new Digest.SHA256();
	var buf = dg.digest( str );
	var byteArray = new Uint8Array( buf );
	return toHexString( byteArray );
}

function toHexString( byteArray ) {
	return Array.from( byteArray, function( byte ) {
		return ( '0' + ( byte & 0xFF ).toString( 16 ) ).slice( -2 );
	} ).join( '' )
}

/*
 * Simple truncation to save on setTargeting space.
 */
function truncateHash( data ) {
	//window.npiDebug && console.log( '2' );
	var sha256length = truncateLen; // default sha256 length is 64 characters
	if ( sha256length < hashLen ) {
		//window.npiDebug && console.log( '3',data );
		return( data.substring( 0, sha256length ) );
	}
	//window.npiDebug && console.log( '4',data );
	return( data );
}


// END Lib
/*
let ID = 'hmi';
var hmi = {};
hmi.npi = '43b88305fc635dea0b68c5f77d8e021e4e4b2469c256c11acf4e8bd990baa7e2';
hmi.npiX = getExpiration();

//hmi.npi = truncateItem( hmi.npi );

data=JSON.stringify(hmi);
storeData( ID, data )

readStorage();
*/
