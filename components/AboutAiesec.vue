<template>
    <div class="about-container">
        <h2 class="about-aiesec">About AIESEC</h2>
        <div class="explain">
            <p>AIESEC(アイセック)は、海外ボランティアや海外ボランティアプログラムなどの</p>
            <p>主観事業を通して、世界中の若者のリーダーシップを育むことを目指している</p>
            <p>グローバルプラットフォームです。1948年にヨーロッパで創設されて以来、</p>
            <p>「平和で、人々の可能性が最大限発揮された社会」の実現を目指して活動しています。</p>
        </div>
        <div class="about-contents">
            <div class="about-content">
                <img src="" alt="">
                <p>114の国と地域</p>
                <p>の支部</p>
            </div>
            <div class="about-content">
                <img src="" alt="">
                <p>7000以上の</p>
                <p>パートナー団体</p>
            </div>
            <div class="about-content">
                <img src="" alt="">
                <p>年間30000件以上の</p>
                <p>経験を提供</p>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped lang="scss">
.about-aiesec{
    color: $blue;
    font-size: 24px;
    padding: 20px;
    letter-spacing: 2px;
    font-family: "Lato";
}
.explain{
    font-size: 16px;
    letter-spacing: 2px;
    font-family: "游ゴシック";
}
.about-content{
    float: left;
    margin: 0 40px;
    p{
        font-family: "Lato","游ゴシック";
    }
    img{
        padding: 100px 100px;
        margin: 2em 0;
        background: $gray;
        border-radius: 10px;/*角の丸み*/
    }
}

</style>