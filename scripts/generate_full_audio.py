from gtts import gTTS

phonics_data = {
    "fr": ["fr says /fr/", "frog", "fruit", "frame"],
    "gr": ["gr says /gr/", "grass", "grape", "grow"]
}

for blend, words in phonics_data.items():
    # 生成引导音频（组合发音）
    intro = gTTS(text=words[0], lang='en', slow=True)
    intro.save(f"{blend}_introduction.mp3")
    
    # 生成单词示例音频
    for word in words[1:]:
        example = gTTS(text=word, lang='en', slow=False)
        example.save(f"{blend}_example_{word}.mp3")

    # 生成完整练习音频（组合 + 单词 + 静音）
    full_text = " ... ".join(words)
    practice = gTTS(text=full_text, lang='en', slow=True)
    practice.save(f"{blend}_full_practice.mp3")

print("自然拼读音频生成完毕！")