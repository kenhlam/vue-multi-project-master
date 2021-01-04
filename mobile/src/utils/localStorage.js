
const date = new Date().getTime();
const SessionKey = 'userToken'

export function setlocalStorage(params) {
    return localStorage.setItem(SessionKey, JSON.stringify({
        value: params, 
        expirse: (new Date() - 1) + 7*24*60*60 * 1000
    }))
}

export function getlocalStorage() {
    let data = JSON.parse(localStorage.getItem(SessionKey));
    if (data !== null) {
        if (data.expirse != null && data.expirse < new Date().getTime()) {
            localStorage.removeItem(SessionKey);
        } else {
            return data.value;
        }
    }
    return null;
}

export function removelocalStorage() {
    return localStorage.setItem(SessionKey, null)
}
