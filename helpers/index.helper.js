

const storeData = (key, data) => {
    window.localStorage.removeItem(key)
    window.localStorage.setItem(key, JSON.stringify({
        dataType: typeof data,
        dataValue: data
    }))
}

const fetchData = (key) => {
    let result = window.localStorage.getItem(key)
    if (result) {
        result = JSON.parse(result)
        return result.dataValue
    }

    return null
}

const deleteData = (key) => {
    window.localStorage.removeItem(key)
}

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }
    return result;
}

const clearChildrenWithQuerySelector = (elementIdName) => {
    const elementToClearChildren = document.querySelector(`${elementIdName}`)
    if (elementToClearChildren) {
        let child = elementToClearChildren.lastElementChild
        while (child) {
            elementToClearChildren.removeChild(child)
            child = elementToClearChildren.lastElementChild
        }
    }
}

const shortenText = (text, maxLength, suffix = '...') => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + suffix
    }
    return text
}

const clearCookies = () => {
    let cookies = document.cookie.split("; ")
    for (let c = 0; c < cookies.length; c++) {
        let d = window.location.hostname.split(".")
        while (d.length > 0) {
            let cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path='
            let p = location.pathname.split('/')
            document.cookie = cookieBase + '/'
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/')
                p.pop()
            };
            d.shift()
        }
    }
}

const clearStorage = () => {
    window.localStorage.clear()
}

const fullDateTime = (value) => {
    let date
    if (value) {
        date = new Date(value)
    } else {
        date = new Date()
    }

    let hh = date.getUTCHours()
    hh = hh < 10 ? '0' + hh : hh

    let mm = date.getUTCMinutes() + 1
    mm = mm < 10 ? '0' + mm : mm

    let ss = date.getUTCSeconds()
    ss = ss < 10 ? '0' + ss : ss

    return date.toDateString() + ' - Time ' + hh + ':' + mm
}


module.exports = {
    storeData,
    fetchData,
    deleteData,
    clearCookies,
    clearStorage,
    shortenText,
    generateRandomString,
    clearChildrenWithQuerySelector,
    fullDateTime
}