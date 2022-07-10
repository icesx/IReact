import Promise from "react";
static get(url){
    return new Promise((resolve, reject) => {
        fetch(url).then((response) => response.json())
            .then((responseData) => {
                if (responseData.c && responseData.c == 10000) {
                    resolve(responseData.d);
                } else {
                    reject(new Error(responseData.d));
                }
            }).catch((error) => {
                reject(new Error('网路异常'));
            }).done();
    });
}

get('http://yourhost/...').then((data) => {
    //正确请求的业务逻辑
}).catch((error) => {
    //处理请求失败业务逻辑
}).done();