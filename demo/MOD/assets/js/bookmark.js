//全域變數
var mDefaultType;

//#region  getCookie
function getCookie(c_name) {
    var i, x, y, EachCookies = document.cookie.split(";");
    for (i = 0; i < EachCookies.length; i++) {
        x = EachCookies[i].substr(0, EachCookies[i].indexOf("="));
        //x為key
        y = EachCookies[i].substr(EachCookies[i].indexOf("=") + 1);
        //y為value
        x = x.replace(/^\s+|\s+$/g, "");
        //g:找到所有符合的字串
        //^：以甚麼開始的字串
        //\s：空白字元
        //+：前面的字元有一至多個
        //$：以前一個字元為結尾的字串
        //(以空白為開頭的一個或多個空白字元)或(一個或多個空白最後以空白結尾的字元)
        //去掉前後的空白
        if (x == c_name) {
            return unescape(y);
            //利用unescape()解碼在網路上傳遞的字串
            //需要在網路上傳遞的字串應該以escape()予以編碼
        }
    }
}
//#endregion

//#region  setCookie
function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    //設定一個日期為目前日期加上預設的期限
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    //toUTCString()根據世界時間，轉換成字串
    document.cookie = c_name + "=" + c_value + ";path=/";
}
//#endregion

//#region  新增頁面GUID紀錄 time, url, ItemID 至Cookie
function AddBookmark(ID, cookieName, type) {

    var c_name = cookieName || "bookmark";
    var array = new Array();
    var strBookmarks = getCookie(c_name);
    var bookmarkObject = CreateBookmark(ID, type);

    if (strBookmarks != null && strBookmarks != '') {

        array = JSON.parse(strBookmarks);
        findAndRemove(array, "ID", ID);
    }

    var objBookmarkBusiness = checkBookmarkBusiness(c_name, type);

    var isAddBookmark = false;

    switch (objBookmarkBusiness) {
        case false:
            break;

        default:
            array = objBookmarkBusiness;
        case true:
            isAddBookmark = true;
            break;
    }

    if (isAddBookmark) {
        array.push(bookmarkObject);
    }

    strBookmarks = JSON.stringify(array);
    setCookie(c_name, strBookmarks, 365);

}
//#endregion

//#region  移除bookmark物件
function RemoveBookmark(ID, cookieName) {

    var c_name = cookieName || "bookmark";
    var array = new Array();
    var strBookmarks = getCookie(c_name);

    if (strBookmarks != null && strBookmarks != '') {

        array = JSON.parse(strBookmarks);
        var hasRemove = findAndRemove(array, "ID", ID);
        if (hasRemove) {
            var strBookmarks = JSON.stringify(array);
            setCookie(c_name, strBookmarks, 365);
        }
    }
}
//#endregion

//#region  檢查是否存在Cookie
function hasBookmark(ID, cookieName, type) {

    var c_name = cookieName || "bookmark";
    var array = new Array();
    var strBookmarks = getCookie(c_name);
    var bookmarkObject = CreateBookmark(ID, type);

    if (strBookmarks != null && strBookmarks != '') {

        array = JSON.parse(strBookmarks);
        return findAndRemove(array, "ID", ID);
    }
    return false;
}
//#endregion

//#region  是否加入邏輯層
function checkBookmarkBusiness(cookieName, type) {

    var array = new Array();
    var strBookmarks = getCookie(cookieName);

    if (strBookmarks != null && strBookmarks != '') {

        array = JSON.parse(strBookmarks);
    }

    if (array.length >= 99) {
        if (cookieName == "bookmark") {

            var message = '我的收藏商品項目已達到上限，請先刪除後再操作一次。';
            var t = type || 0;
            switch (t) {
                default:
                    alert(message);
                    break;
            }
            return false;

        } else {
            array.splice(0, 1);
            return array;
        }
    }

    return true;
}
//#endregion

//#region  創建一個新的bookmark物件
function CreateBookmark(ID, type) {
    var d = new Date();
    var t = type || 0;
    var queryString = location.search;
    //switch (t) {
    //    case 1:
    //        queryString = "?sno=" + sno;
    //        break;
    //}
    var bookmarkObject = new BookmarkJson(ID, queryString, d.getTime(), t);
    return bookmarkObject;
}
//#endregion

//#region  創建一個新的建構子 bookmarkJson元件
function BookmarkJson(ID, QueryStringUrl, DateTime, Type) {
    this.ID = ID;
    this.QueryStringUrl = QueryStringUrl;
    this.DateTime = DateTime;
    this.OpBookmark = Type;
}
//#endregion

//#region  remove item from json array using its name / value
function findAndRemove(array, property, value) {
    var IsRemove = false;

    for (var index = array.length - 1; index >= 0; index--) {
        if (array[index] !== undefined && array[index][property] == value) {

            array.splice(index, 1);
            IsRemove = true; //找到就true
        }
    }

    return IsRemove;
}
//#endregion
