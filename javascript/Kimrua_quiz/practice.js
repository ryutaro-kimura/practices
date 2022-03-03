// 変数
let unko = 'Hello World!';

unko = 'hello'

//定数
const bigUnko = 'hello guys';

//配列
let inoki = ['1','2','3'];

// ループ分
// let index = 0;
// while(index < inoki.length){
//     // 繰り返したい命令
//     console.log(inoki[index]);
//     index++;
// }

// if else
if(inoki.length > 2){
    console.log('こんにちは')
}

let a = ['a','b','c']

// 関数
const test = (arg) => {
    if (a.length > arg){
        console.log(a[arg]);
    } else {
        console.log('範囲を超えてます')
    }
};

// オブジェクト 機能や情報が詰まった塊のこと
const a2 = {
    color:'pink',
    size: 'big'
}

// 便利なオブジェクト
// document　コード内の要素を取ってこれる
// 今回はタグをとってくる
document.getElementsByTagName('button')[0].addEventListener('click', () => {
    window.alert('Hello world!')
})


// window ページの情報を取ってこれる
// event イベントをしたときに何するか指定できる

test(2);

console.log(a2);

console.log(unko);