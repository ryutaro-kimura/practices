#返答を決める変数
def judge(A):
    if A == -1:
        message = "なるほど！"
    elif A == 0:
        num = random.randint(1,101)
        message = "今" + str(num) + "％だよ！"
    elif A == 1:
        message = "完全に理解した！"
    elif A == 2:
        message = "ピエンなう！"
    elif A == 0:
        message = "元気！！"
    elif A == 1:
        message = "元気100倍アンパンマン！"
    elif A == 2:
        message = "うん！"
    elif A == 0:
        message = "気にすんな！"
    elif A == 1:
        message = "困った時はお互い様だろ？？"
    elif A == 2:
        message = "どいたま！"

    return message


@handler.add(MessageEvent, message=TextMessage)
def handle_message(event):
    #文字が入力された時、数字を代入
    if event.message.text == "進捗どう？":
        a = random.randint(0,2)
    #文字が入力された時、数字を代入
    elif event.message.text == "元気？":
        a = random.randint(3,5)
    #文字が入力された時、数字を代入
    elif event.message.text == "ありがとう":
        a = random.randint(6,7)
    #文字が入力された時、数字を代入
    else:
        a = -1

    message += judge(a)

    line_bot_api.reply_message(
        event.reply_token,
        TextSendMessage(text=message))
