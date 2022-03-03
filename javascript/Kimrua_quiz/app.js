const quiz = [
    {
        question: '僕の名前は？',
        answers: [
            'ベジータ',
            '食べる牧場ミルク',
            '木村龍太郎',
            'はげ'
        ],
        correct: '木村龍太郎'
    },
    {
        question: '僕の年齢は？',
        answers: [
            '18',
            '19',
            '20',
            '21'
        ],
        correct: '20'
    },
    {
        question: '僕が通っている学校は？',
        answers: [
            '田奈高校',
            'マサチューセッツ工科大学',
            '九州工業大学',
            '佐賀大学'
        ],
        correct: '佐賀大学'
    }
    // {
    //     question: '僕の誕生日は？',
    //     answers: [
    //         '4/16',
    //         '6/17',
    //         '8/18',
    //         '10/19'
    //     ],
    //     correct: '10/19'
    // }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// htmlのオブジェクト（情報の塊）には＄をつける
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢が入った定数の文字列をHTMLに反映させる
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    // 正誤判定
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解');
        score++;
    } else if (quiz[0].answers[0] === e.target.textContent) {
        window.alert('カカロットォ！って、やかましいわ！')
    } else if (quiz[0].answers[1] === e.target.textContent) {
        window.alert('わからんこともないけどちゃう')
    } else if(quiz[0].answers[3] === e.target.textContent){
        window.alert('ぶっ殺すぞ！')
    }　else if(quiz[2].answers[0] === e.target.textContent){
        window.alert('やりらふぃ〜！')
    }else {
        window.alert('不正解');
    }
    // クイズがあれば実行
    quizIndex++;
    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    // クリックしたら正誤判定
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
};

