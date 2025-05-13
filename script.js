
const itemsInfo = {


  "espresso": {
    image: "images/espresso.jpg",
    description: "یک شات غلیظ و قوی از قهوه، پایه اصلی بسیاری از نوشیدنی‌های دیگر."
  },


  "v60": {
    image: "images/v60.jpg",
    description: "قهوه‌ای ملایم با طعمی شفاف که با دستگاه V60 دم می‌شود."
  },


  "cappuccino": {
    image: "images/cappuccino.jpg",
    description: "ترکیب مساوی اسپرسو، شیر داغ و کف شیر؛ نوشیدنی‌ای متعادل و خامه‌ای."
  },


  "latte": {
    image: "images/latte.jpg",
    description: "شات اسپرسو با مقدار زیادی شیر داغ و کمی کف؛ مناسب برای کسانی که طعم ملایم‌تری می‌خواهند."
  },


  "mocha": {
    image: "images/mocha.jpg",
    description: "ترکیب شکلات داغ، اسپرسو و شیر؛ نوشیدنی‌ای شیرین و خوشمزه."
  },


  "hot-chocolate": {
    image: "images/hot-chocolate.png",
    description: "نوشیدنی گرم و شیرین تهیه‌شده از شیر و پودر شکلات با بافتی نرم و خامه‌ای."
  },


  "white-chocolate": {
    image: "images/white-chocolate.jpg",
    description: "نوشیدنی گرم تهیه‌شده از شکلات سفید و شیر، با طعمی لطیف و شیرین."
  },


  "choco-milk": {
    image: "images/choco-milk.jpg",
    description: "ترکیب شیر سرد یا گرم با پودر کاکائو؛ نوشیدنی‌ای انرژی‌بخش و نوستالژیک."
  },


  "karak-tea": {
    image: "images/karak-tea.jpg",
    description: "چای سنتی هندی با شیر، هل و شکر که طعمی گرم و معطر دارد."
  },


  "masala-tea": {
    image: "images/masala-tea.jpg",
    description: "چای معطر هندی با ترکیبی از ادویه‌های خاص، شیر و شکر."
  },


  "pistachio-milk": {
    image: "images/pistachio-milk.jpg",
    description: "نوشیدنی‌ای مقوی و خاص از ترکیب شیر و عصاره پسته، با رنگی سبز و طعمی ملایم."
  },


  "plain-tea": {
    image: "images/plain-tea.jpg",
    description: "چای کلاسیک ایرانی، دم‌کرده با عطر سنتی و مناسب برای هر زمان."
  },


  "flavored-tea": {
    image: "images/flavored-tea.jpg",
    description: "چای معطر با طعم‌های میوه‌ای یا گیاهی متنوع برای سلیقه‌های خاص."
  },


  "herbal-tea": {
    image: "images/herbal-tea.jpg",
    description: "نوشیدنی‌ای آرام‌بخش و گیاهی از ترکیب گل‌ها و گیاهان دارویی."
  },


  "milkshake-chocolate": {
    image: "images/milkshake-chocolate.jpg",
    description: "میلک‌شیک شکلاتی غلیظ با طعم قوی و شیرین برای دوست‌داران شکلات."
  },


  "milkshake-banana-choco": {
    image: "images/milkshake-banana-choco.jpg",
    description: "ترکیبی دل‌پذیر از بستنی، موز و شکلات برای تجربه‌ای شیرین و خاص."
  },


  "milkshake-nutella": {
    image: "images/milkshake-nutella.jpg",
    description: "میلک‌شیکی غنی از نوتلا با طعمی فندقی-شکلاتی که عاشقش می‌شوید."
  },


  "milkshake-oreo": {
    image: "images/milkshake-oreo.jpg",
    description: "میلک‌شیکی با بیسکوییت‌های اورئو خردشده؛ شیرین، ترد و خاص."
  },


  "milkshake-peanut": {
    image: "images/milkshake-peanut.jpg",
    description: "نوشیدنی‌ای مقوی با طعم کره بادام‌زمینی و شیر؛ خاص و انرژی‌زا."
  },


  "milkshake-espresso": {
    image: "images/milkshake-espresso.jpg",
    description: "میلک‌شیکی خنک و قهوه‌ای برای دوست‌داران اسپرسو با حس تازگی."
  },


  "mojito": {
    image: "images/mojito.jpg",
    description: "نوشیدنی‌ای خنک با نعنا و لیمو، مناسب برای روزهای گرم تابستان."
  },


  "black-mojito": {
    image: "images/black-mojito.jpg",
    description: "موهیتویی خاص با رنگ تیره و طعمی متفاوت از لیمو و نعنا."
  },


  "lemonade": {
    image: "images/lemonade.jpg",
    description: "نوشیدنی‌ای کلاسیک و خنک از آب لیمو تازه، شکر و یخ."
  },


  "syrup-drink": {
    image: "images/syrup-drink.jpg",
    description: "شربت سنتی ایرانی با طعم‌هایی مانند بهارنارنج، زعفران یا گل محمدی."
  },


  "avocado": {
    image: "images/avocado.jpg",
    description: "نوشیدنی‌ای خاص و مغذی از پوره آووکادو و شیر؛ نرم و مقوی."
  },


  "banana-milk": {
    image: "images/banana-milk.jpg",
    description: "ترکیب شیر و موز تازه؛ نوشیدنی‌ای مقوی و محبوب در میان ورزشکاران."
  },


  "natural-juice": {
    image: "images/natural-juice.jpg",
    description: "آبمیوه تازه و طبیعی بدون مواد افزودنی؛ طعم واقعی میوه."
  },


  "ice-latte": {
    image: "images/ice-latte.jpg",
    description: "ترکیب شیر سرد با شات اسپرسو و یخ؛ نوشیدنی‌ای ملایم و خنک."
  },


  "ice-mocha": {
    image: "images/ice-mocha.jpg",
    description: "ترکیبی شیرین و شکلاتی از قهوه و شیر خنک با یخ."
  },


  "ice-americano": {
    image: "images/ice-americano.jpg",
    description: "آب سرد ترکیب‌شده با اسپرسو برای طعمی ساده، تلخ و خنک."
  },


  "daily-cake": {
    image: "images/daily-cake.jpg",
    description: "کیک تازه و خانگی که هر روز متفاوت است. از صندوق بپرسید."
  },


  "cookie": {
    image: "images/cookie.jpg",
    description: "بیسکوییت‌های نرم با چیپس شکلات یا طعم‌های متنوع."
  },


  "flavoring": {
    image: "images/flavoring.jpg",
    description: "افزودنی‌های طعم‌دار مانند وانیل، کارامل، فندق و غیره."
  },


  "omelette": {
    image: "images/omelette.jpg",
    description: "تخم‌مرغ هم‌زده با سبزیجات یا پنیر؛ صبحانه‌ای گرم و خوشمزه."
  },


  "sausage-egg": {
    image: "images/sausage-egg.jpg",
    description: "ترکیب سوسیس سرخ‌شده و تخم‌مرغ؛ انتخابی انرژی‌زا برای شروع روز."
  },


  "fried-egg": {
    image: "images/fried-egg.jpg",
    description: "تخم‌مرغ سرخ‌شده ساده با نمک و فلفل؛ کلاسیک و خوشمزه."
  },


  "sausage-tomato": {
    image: "images/sausage-tomato.jpg",
    description: "سوسیس تفت‌داده‌شده در رب گوجه؛ طعمی قوی و لذیذ."
  },


  "panini": {
    image: "images/panini.jpg",
    description: "ساندویچ گرم شده با ژامبون، پنیر و نان پرس‌شده."
  },

  
  "peanut-toast": {
    image: "images/peanut-toast.jpg",
    description: "نان تست شده با کره بادام‌زمینی؛ سالم، خوشمزه و مقوی."
  }


  // مابقی آیتم ها


};





document.querySelectorAll('.item').forEach(item => {
  const name = item.getAttribute('data-name');
  item.addEventListener('click', () => {
    if (itemsInfo[name]) {
      document.getElementById('modalImage').src = itemsInfo[name].image;
      document.getElementById('modalDescription').innerText = itemsInfo[name].description; // توضیحات را به تگ اضافه میکند
      const modal = document.getElementById('imageModal');
      modal.style.display = 'flex';
      setTimeout(() => modal.classList.add('show'), 10); // برای انیمیشن
    }
  });
});


// بستن مودال با کلیک روی فضای خالی
document.getElementById('imageModal').addEventListener('click', (e) => {
  if (e.target.id === 'imageModal') closeModal();
});


// تابع بستن مودال
function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 0);
}
