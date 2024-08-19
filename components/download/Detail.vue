<template>
 <div class="download-container">
    <div class="download-contents">
      <h3 class="download-title">資料請求</h3>
      <p class="download-title-description">
        この度は、アイセックにご関心をお寄せいただき、誠にありがとうございます。<br>
        資料のダウンロードをご希望の場合は、以下のフォームにご記入の上、送信してください。<br>
        なお、<span> *</span>印が付いている項目は必須項目となりますので、必ずご記入ください。
      </p>
      <!--入力修正メッセージ-->
      <div id="errorMessages" ref="errorMessages" class="errorMessages">
        <p>※入力に不備があります。入力内容をご確認ください。</p>
      </div>
      <form class="download-form" id="form" @submit.prevent="handleSubmit" novalidate>
        <!--Enterで送信されるのを防ぐ-->
        <button type="submit" disabled style="display: none;"></button>
        <!--企業名/団体名-->
        <div class="item" id="item">
          <label class="question">企業名/団体名<span> *</span></label>
          <input type="text" name="entry.448556317" v-model="form.companyName" :class="{ 'input-error': errors.companyName }" id="companyName" class="input" placeholder="株式会社ABC" required>
          <span class="errorMessage">{{ errors.companyName }}</span>
        </div>
        <!--お名前-->
        <div class="item">
          <label class="question">お名前<span> *</span></label>
          <input type="text" name="entry.2031729231" v-model="form.name" :class="{ 'input-error': errors.name }"  id="name" class="input" placeholder="山田 太郎" required>
          <span class="errorMessage">{{ errors.name }}</span>
        </div>
        <!--お名前（フリガナ）-->
        <div class="item">
          <label class="question">お名前（フリガナ）<span> *</span></label>
          <input type="text" name="entry.102832780" v-model="form.kanaName" :class="{ 'input-error': errors.kanaName }" class="input" placeholder="ヤマダ タロウ" required>
          <span class="errorMessage">{{ errors.kanaName }}</span>

        </div>
        <!--部門-->
        <div class="item">
          <label class="question">部門<span> *</span></label>
          <select name="entry.1481233185" v-model="form.department" :class="{ 'input-error': errors.department }"  class="input pull-down" required>
            <option value="" class="default" selected disabled><p>選択してください</p></option>
            <option value="営業部門"><p>営業部門</p></option>
            <option value="マーケティング部門"><p>マーケティング部門</p></option>
            <option value="人事部門"><p>人事部門</p></option>
            <option value="総務部門"><p>総務部門</p></option>
            <option value="経営企画部門"><p>経営企画部門</p></option>
            <option value="IR部門"><p>IR部門</p></option>
            <option value="その他"><p>その他</p></option>
          </select>
          <span class="errorMessage">{{ errors.department }}</span>
        </div>
        <!--役職-->
        <div class="item">
          <label class="question">役職<span> *</span></label>
          <select name="entry.1939228692" v-model="form.position" :class="{ 'input-error': errors.position }"  class="input pull-down" required>
            <option value="" class="default" selected disabled><p>選択してください</p></option>
            <option value="社長"><p>社長</p></option>
            <option value="取締役"><p>取締役</p></option>
            <option value="執行役員"><p>執行役員</p></option>
            <option value="本部長"><p>本部長</p></option>
            <option value="部長"><p>部長</p></option>
            <option value="課長"><p>課長</p></option>
            <option value="社員"><p>社員</p></option>
          </select>
          <span class="errorMessage">{{ errors.position }}</span>
        </div>
        <!--メールアドレス-->
        <div class="item">
          <label class="question">メールアドレス<span> *</span></label>
          <input type="email" name="entry.866706725" v-model="form.email" :class="{ 'input-error': errors.email }"  class="input" placeholder="aiesec@gmail.jp" required>
          <span class="errorMessage">{{ errors.email }}</span>
        </div>
        <!--電話番号-->
        <div class="item">
          <label class="question">電話番号<span> *</span></label>
          <input type="tel" name="entry.1589753976" v-model="form.phone" :class="{ 'input-error': errors.phone }"  class="input" placeholder="012-3456-7890" required>
          <span class="errorMessage">{{ errors.phone }}</span>
        </div>
        <!--興味を持ったきっかけ-->
        <div class="item">
          <label class="question">弊団体に興味を持たれたきっかけを教えてください。<span> *</span></label>
          <div class="radio-group">
            <label><input type="radio" name="entry.930982233" v-model="form.radio1" value="インターネット" class="radio"><p>インターネット</p></label>
            <label><input type="radio" name="entry.930982233" v-model="form.radio1" value="メールマガジン" class="radio"><p>メールマガジン</p></label>
            <label><input type="radio" name="entry.930982233" v-model="form.radio1" value="プレスリリース" class="radio"><p>プレスリリース</p></label>
            <label><input type="radio" name="entry.930982233" v-model="form.radio1" value="OBOG向けmonthly newsletter" class="radio"><p>OBOG向けmonthly newsletter</p></label>
            <label><input type="radio" name="entry.930982233" v-model="form.radio1" value="OBOG向けFacebookグループ" class="radio"><p>OBOG向けFacebookグループ</p></label>
            <label><input type="radio" name="entry.930982233" v-model="form.radio1" value="OBOG向け記念式典" class="radio"><p>OBOG向け記念式典</p></label>
            <label><input type="radio" name="entry.930982233" v-model="form.radio1" value="所属メンバーからの口コミ" class="radio"><p>所属メンバーからの口コミ</p></label>
          </div>
          <span class="errorMessage">{{ errors.radio1 }}</span>
        </div>
        <!--回答者について-->
        <div class="item">
          <label class="question">以下の中で当てはまるものにチェックをつけてください。<span> *</span></label>
          <div class="radio-group">
            <label><input type="radio" name="entry.872960953" v-model="form.radio2" value="アイセックとはこれまで関わりがなく、これまでアイセックを知らなかった企業様" class="radio"><p>アイセックとはこれまで関わりがなく、これまでアイセックを知らなかった企業様</p></label>
            <label><input type="radio" name="entry.872960953" v-model="form.radio2" value="アイセックとはこれまで関わりがなかったが、アイセックを知っていた企業様" class="radio"><p>アイセックとはこれまで関わりがなかったが、アイセックを知っていた企業様</p></label>
            <label><input type="radio" name="entry.872960953" v-model="form.radio2" value="アイセックを介してインターンシップ生を受け入れた経験はないが、過去にアイセックと関わりがある企業様" class="radio"><p>アイセックを介してインターンシップ生を受け入れた経験はないが、過去にアイセックと関わりがある企業様</p></label>
            <label><input type="radio" name="entry.872960953" v-model="form.radio2" value="アイセックを介してインターンシップ生を受け入れた経験がある企業様" class="radio"><p>アイセックを介してインターンシップ生を受け入れた経験がある企業様</p></label>
            <label><input type="radio" name="entry.872960953" v-model="form.radio2" value="アイセックOBOGの方" class="radio"><p>アイセックOBOGの方</p></label>
          </div>
          <span class="errorMessage">{{ errors.radio2 }}</span>
        </div>
        <div class="item">
          <label class="question">プライバシーポリシーについて<span> *</span></label>
          <div class="check-group">
            <input type="checkbox" name="entry.1484907787" v-model="form.agree"  value="同意する" id="agree" class="checkbox">
            <p>同意する</p>
          </div>
          <span class="errorMessage">{{ errors.agree }}</span>
        </div>
        <div class="item">
          <button type="submit" id="btnSubmit" value="送信する" class="out">送信する&nbsp;&nbsp;&nbsp;&nbsp;</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        companyName: '',
        name: '',
        kanaName: '',
        department: '',
        position: '',
        email: '',
        phone: '',
        radio1:'',
        radio2:'',
        agree: false,
      },
      errors: {},
      googleFormUrl: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScViI6Ctm_K4FmRwE3vI0IPrcvmTR9vJXI9RCaxdGW5k4GjmQ/formResponse',
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.form.companyName) {
        this.errors.companyName = '企業名/団体名を入力してください。';
      }
      if (!this.form.name) {
        this.errors.name = 'お名前を入力してください。';
      }
      if (!this.form.kanaName) {
        this.errors.kanaName = 'お名前（フリガナ）を入力してください。';
      }
      if (!this.form.department) {
        this.errors.department = '部門を選択してください。';
      }
      if (!this.form.position) {
        this.errors.position = '役職を選択してください。';
      }
      if (!this.form.email) {
        this.errors.email = 'メールアドレスを入力してください。';
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = '正しいメールアドレスを入力してください。';
      }
      if (!this.form.phone) {
        this.errors.phone = '電話番号を入力してください。';
      } else if (!this.isValidPhone(this.form.phone)) {
        this.errors.phone = '正しい電話番号を入力してください。';
      }
      if(!this.form.radio1){
        this.errors.radio1 = '回答を選択してください。';
      }
      if(!this.form.radio2){
        this.errors.radio2 = '回答を選択してください。';
      }
      if (!this.form.agree) {
        this.errors.agree = 'プライバシーポリシーへの同意は必須です。';
      }

      return Object.keys(this.errors).length === 0;
    },
    isValidEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
    },
    isValidPhone(phone) {
      const phonePattern = /^\d{2,4}-\d{3,4}-\d{4}$/;
      return phonePattern.test(phone);
    },
    handleSubmit() {
      if (this.validateForm()) {
        const form = document.getElementById("form");   
          
        fetch(this.googleFormUrl, {
          method: 'POST',
          body: this.provideUrlEncodedFormData(form),
          mode: 'no-cors',
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          }
        }).then(() => {
          //ダウンロード完了画面に遷移
          // this.$router.push('/download/completed');
          window.location.href = '/download/completed';
          // フォーム送信後にPDFをダウンロード
          this.downloadPDF();
          this.form = {  // フォームを初期化
            companyName: '',
            name: '',
            kanaName: '',
            department: '',
            position: '',
            email: '',
            phone: '',
            radio1: '',
            radio2: '',
            agree: false,
          };
        }).catch (error => {
          console.error('送信エラー:', error);
          alert('送信に失敗しました。');
        });
      }
      else if(Object.keys(this.errors).length > 0) {        
        const elementId = 'errorMessages';
        const element = this.$refs[elementId]
        element.classList.add('active');//エラーメッセージ表示
        const rect = element.getBoundingClientRect();
          window.scrollTo({
          top: window.scrollY + rect.top -200, 
          behavior: 'smooth'
        });

      } 
    },
    provideUrlEncodedFormData(form) {
      const formData = new FormData(form);
      const formDataObject = {};

      for (const [key, value] of formData.entries()) {
        formDataObject[key] = value;
      }
      return new URLSearchParams(Object.fromEntries(formData.entries())).toString();
    },
    downloadPDF() {
      const link = document.createElement('a');
      link.href = '/pdf/test_sales_doc.pdf'; // PDFファイルのパス
      link.download = 'test_ICX資料.pdf';  // ダウンロードされるファイル名
      link.click();
    }
  }
};
</script>

<style lang="scss" scoped>
.download-container {
  position: relative;
  margin: 5rem 0 0 0;
  width: 100vw;

  .download-contents{
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 5rem;
    align-items: center;

    .download-title{
      font-size: 1.35rem;
      margin-bottom: 1.8rem;
      line-height: 4rem;
      border-bottom: $blue 3px solid;

      &-description{
        font-size: 1rem;
        text-align: center;

        span{
          color: $red;
        }
      }
    }

    .errorMessages{
      width: 60%;
      p{
        display: none;
       }
    }
    .active{
      p{
        text-align: center;
        display: block;
        color: $red;
        font-size: 1rem;
        margin-top: 2rem;
      }
    }


    .download-form{
      position: relative;
      width: 60%;
      display: flex;
      flex-direction: column;
      margin: 5rem 0  ;
      font-family: $TsukuGoPro;


      .item{
        margin-bottom: 2rem;
        text-align: center;

        .question{
          font-size: 1rem;
          display: block;
          width: 100%;
          margin-bottom: 1rem;
          text-align:left;
          color: $dark-gray;

          span{
            color: $red;
          }
  
        }
        .errorMessage {
            display: block;
            color: $red;
            font-size: 0.9rem;
            text-align: left;
          }
        .input{
          font: $TsukuGoPro;
          width: 100%;
          height: 4rem;
          padding: 0.8rem;
          background-color: $light-gray;
          box-sizing: border-box;
          margin: 0.5em 0;
          align-items: center;
          color: $dark-gray;
          border-radius:0.3rem;
          &::placeholder{
            color: $gray;
          }
          &:focus{
            outline-color: $blue;
          }
        }
        .input-error {
          border:solid 1.5px $red;
          background-color: #FDF0ED;
        }
        .pull-down{
          background-image: url(../../assets/images/download/arrow_down.svg);
          background-position: right 20px center;
          background-repeat: no-repeat;
          background-size: 18px 18px;
          .default{
            color: $gray;//プルダウン表示時の初期値
            }
          option{
            p{
              color: $dark-gray;    
            }           
          }
        }
        .radio-group{
          padding: 5px 0px 5px 0px;
          text-align:left;

          label{
            display: flex;
            align-items: center;
            margin-bottom: 0.9rem;
            
            .radio{
              // appearance: none;
              border: 1.8px solid $gray;
              border-radius: 50%;
              height: 18px;
              margin: 0;
              position: relative;
              width: 18px;
              cursor: pointer;
              top: 2px;

              &::before {
                background-color: $blue;
                border-radius: 50%;
                bottom: 0;
                content: "";
                height: 12px;
                left: 0;
                margin: auto;
                opacity: 0;
                position: absolute;
                right: 0;
                top: 0;
                width: 12px;
              }
              &:checked::before {
                opacity: 1;
              }
            }
            p{
              margin: 0;
              padding-left: 10px;
              align-items: center;
            }
          }
        }

        .check-group{
          display: flex;
          .checkbox{
              appearance: none;
              border: 1.8px solid $gray;
              border-radius: 5%;
              height: 18px;
              margin: 0;
              position: relative;
              width: 18px;
              cursor: pointer;
              top: 2px;

              &:checked{
                background-image: url(../../assets/images/download/checked_box.svg);
                background-repeat: no-repeat;
                background-position: center;
                border: none;
              }
          }
          p{
            margin-bottom: 0;
            margin-left: 10px;
          }
        }

        .out{
          color: white;
          display: inline-block;
          position: relative;
          background-color: $blue;
          width: 24rem;
          height: 5.4rem;
          padding: auto;
          margin-top: 1rem;
          border-radius: 5rem;
          border: 2px solid $blue;
          box-shadow:  0 0 24.5px rgba(3, 126, 243,0.22);
          transition: all 0.3s ease 0s;
          font-size: 1.1rem;

          &:hover{
            transition-duration: .3s;
            transform: scale(1.04);
          }

          &::before {
            content: "";
            position: absolute;
            margin: auto;
            top: 3px;
            bottom: 0;
            right: 38%;
            width: 10px;
            height: 10px;
            border-top: 1.5px solid #fff;
            border-right: 1.5px solid #fff;
            transform: rotate(45deg);
          }

        }
      }
      

    }
  }
}

</style>
