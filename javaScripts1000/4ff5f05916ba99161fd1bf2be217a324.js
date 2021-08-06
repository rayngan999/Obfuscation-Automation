var _thumbs = new Array();
function changeThumb(index, i, num_thumbs, path)
{
    if (_thumbs[index])
    {
        document.getElementById(index).src = path + i + ".jpg";

        preload = new Image();
        preload_image_id = (i + 1 > num_thumbs) ? 1 : i + 1;
        preload.src = path + preload_image_id + ".jpg";

        i = i % num_thumbs;
        i++;
        setTimeout("changeThumb('" + index + "'," + i + ", " + num_thumbs + ", '" + path + "')", 600);
    }
}
function startThumbChange(index, num_thumbs, path)
{
    if (num_thumbs < 2) return false;
    _thumbs[index] = true;
    changeThumb(index, 1, num_thumbs, path);
}
function endThumbChange(index, image)
{
    _thumbs[index] = false;
    document.getElementById(index).src = image;
}