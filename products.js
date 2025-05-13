const itemsInfo = {
  "espresso": {
    title: "اسپرسو",
    image: "images/espresso.jpg",
    description: "یک شات غلیظ و قوی از قهوه، پایه اصلی بسیاری از نوشیدنی‌های دیگر.",
    price: "55 - 40"
  },
  "v60": {
    title: "دمی (v60)",
    image: "images/v60.jpg",
    description: "قهوه‌ای ملایم با طعمی شفاف که با دستگاه V60 دم می‌شود.",
    price: "120"
  },
  "cappuccino": {
    title: "کاپوچینو",
    image: "images/cappuccino.jpg",
    description: "ترکیب مساوی اسپرسو، شیر داغ و کف شیر؛ نوشیدنی‌ای متعادل و خامه‌ای.",
    price: "75 - 65"
  },
  "latte": {
    title: "لاته",
    image: "images/latte.jpg",
    description: "شات اسپرسو با مقدار زیادی شیر داغ و کمی کف؛ مناسب برای کسانی که طعم ملایم‌تری می‌خواهند.",
    price: "85 - 75"
  },
  "mocha": {
    title: "موکا",
    image: "images/mocha.jpg",
    description: "ترکیب شکلات داغ، اسپرسو و شیر؛ نوشیدنی‌ای شیرین و خوشمزه.",
    price: "105 - 95"
  },
  "hot-chocolate": {
    title: "هات چاکلت",
    image: "images/hot-chocolate.png",
    description: "نوشیدنی گرم و شیرین تهیه‌شده از شیر و پودر شکلات با بافتی نرم و خامه‌ای.",
    price: "70"
  },
  "white-chocolate": {
    title: "وایت چاکلت",
    image: "images/white-chocolate.jpg",
    description: "نوشیدنی گرم تهیه‌شده از شکلات سفید و شیر، با طعمی لطیف و شیرین.",
    price: "70"
  },
  "choco-milk": {
    title: "شیر کاکائو",
    image: "images/choco-milk.jpg",
    description: "ترکیب شیر سرد یا گرم با پودر کاکائو؛ نوشیدنی‌ای انرژی‌بخش و نوستالژیک.",
    price: "60"
  },
  "karak-tea": {
    title: "چای کرک",
    image: "images/karak-tea.jpg",
    description: "چای سنتی هندی با شیر، هل و شکر که طعمی گرم و معطر دارد.",
    price: "75"
  },
  "masala-tea": {
    title: "چای ماسالا",
    image: "images/masala-tea.jpg",
    description: "چای معطر هندی با ترکیبی از ادویه‌های خاص، شیر و شکر.",
    price: "70"
  },
  "pistachio-milk": {
    title: "شیر پسته",
    image: "images/pistachio-milk.jpg",
    description: "نوشیدنی‌ای مقوی و خاص از ترکیب شیر و عصاره پسته، با رنگی سبز و طعمی ملایم.",
    price: "75"
  },
  "plain-tea": {
    title: "چای ساده",
    image: "images/plain-tea.jpg",
    description: "چای کلاسیک ایرانی، دم‌کرده با عطر سنتی و مناسب برای هر زمان.",
    price: "45"
  },
  "flavored-tea": {
    title: "چای طعم‌دار",
    image: "images/flavored-tea.jpg",
    description: "چای معطر با طعم‌های میوه‌ای یا گیاهی متنوع برای سلیقه‌های خاص.",
    price: "60"
  },
  "herbal": {
    title: "دمنوش",
    image: "images/herbal.jpg",
    description: "نوشیدنی‌ای آرام‌بخش و گیاهی از ترکیب گل‌ها و گیاهان دارویی.",
    price: "60"
  },
  "milkshake-chocolate": {
    title: "شکلات",
    image: "images/milkshake-chocolate.jpg",
    description: "میلک‌شیک شکلاتی غلیظ با طعم قوی و شیرین برای دوست‌داران شکلات.",
    price: "110"
  },
  "milkshake-banana-chocolate": {
    title: "موز شکلات",
    image: "images/milkshake-banana-chocolate.jpg",
    description: "ترکیبی دل‌پذیر از بستنی، موز و شکلات برای تجربه‌ای شیرین و خاص.",
    price: "120"
  },
  "milkshake-nutella": {
    title: "نوتلا",
    image: "images/milkshake-nutella.jpg",
    description: "میلک‌شیکی غنی از نوتلا با طعمی فندقی-شکلاتی که عاشقش می‌شوید.",
    price: "140"
  },
  "milkshake-oreo": {
    title: "اوروئو",
    image: "images/milkshake-oreo.jpg",
    description: "میلک‌شیکی با بیسکوییت‌های اورئو خردشده؛ شیرین، ترد و خاص.",
    price: "110"
  },
  "milkshake-peanut": {
    title: "کره بادام‌زمینی",
    image: "images/milkshake-peanut.jpg",
    description: "نوشیدنی‌ای مقوی با طعم کره بادام‌زمینی و شیر؛ خاص و انرژی‌زا.",
    price: "120"
  },
  "milkshake-espresso": {
    title: "اسپرسو",
    image: "images/milkshake-espresso.jpg",
    description: "میلک‌شیکی خنک و قهوه‌ای برای دوست‌داران اسپرسو با حس تازگی.",
    price: "130"
  },
  "mojito": {
    title: "موهیتو",
    image: "images/mojito.jpg",
    description: "نوشیدنی‌ای خنک با نعنا و لیمو، مناسب برای روزهای گرم تابستان.",
    price: "90"
  },
  "black-mojito": {
    title: "بلک موهیتو",
    image: "images/black-mojito.jpg",
    description: "موهیتویی خاص با رنگ تیره و طعمی متفاوت از لیمو و نعنا.",
    price: "105"
  },
  "lemonade": {
    title: "لیموناد",
    image: "images/lemonade.jpg",
    description: "نوشیدنی‌ای کلاسیک و خنک از آب لیمو تازه، شکر و یخ.",
    price: "80"
  },
  "syrup-drink": {
    title: "شربت",
    image: "images/syrup-drink.jpg",
    description: "شربت سنتی ایرانی با طعم‌هایی مانند بهارنارنج، زعفران یا گل محمدی.",
    price: "60"
  },
  "avocado": {
    title: "آووکادو",
    image: "images/avocado.jpg",
    description: "نوشیدنی‌ای خاص و مغذی از پوره آووکادو و شیر؛ نرم و مقوی.",
    price: "110"
  },
  "banana-milk": {
    title: "شیر موز",
    image: "images/banana-milk.jpg",
    description: "ترکیب شیر و موز تازه؛ نوشیدنی‌ای مقوی و محبوب در میان ورزشکاران.",
    price: "100"
  },
  "natural-juice": {
    title: "آبمیوه طبیعی",
    image: "images/natural-juice.jpg",
    description: "آبمیوه تازه و طبیعی بدون مواد افزودنی؛ طعم واقعی میوه.",
    price: "80"
  },
  "ice-latte": {
    title: "آیس لاته",
    image: "images/ice-latte.jpg",
    description: "ترکیب شیر سرد با شات اسپرسو و یخ؛ نوشیدنی‌ای ملایم و خنک.",
    price: "90 - 80"
  },
  "ice-mocha": {
    title: "آیس موکا",
    image: "images/ice-mocha.jpg",
    description: "ترکیبی شیرین و شکلاتی از قهوه و شیر خنک با یخ.",
    price: "110 - 100"
  },
  "ice-americano": {
    title: "آیس امریکانو",
    image: "images/ice-americano.jpg",
    description: "آب سرد ترکیب‌شده با اسپرسو برای طعمی ساده، تلخ و خنک.",
    price: "75 - 65"
  },
  "daily-cake": {
    title: "کیک روز",
    image: "images/daily-cake.jpg",
    description: "کیک تازه و خانگی که هر روز متفاوت است. از صندوق بپرسید.",
    price: "؟"
  },
  "cookie": {
    title: "کوکی",
    image: "images/cookie.jpg",
    description: "بیسکوییت‌های نرم با چیپس شکلات یا طعم‌های متنوع.",
    price: "؟"
  },
  "flavoring": {
    title: "طعم‌دهنده",
    image: "images/flavoring.jpg",
    description: "افزودنی‌های طعم‌دار مانند وانیل، کارامل، فندق و غیره.",
    price: "؟"
  },
  "omelette": {
    title: "املت",
    image: "images/omelette.jpg",
    description: "تخم‌مرغ هم‌زده با سبزیجات یا پنیر؛ صبحانه‌ای گرم و خوشمزه.",
    price: ""
  },
  "sausage-egg": {
    title: "سوسیس تخم‌مرغ",
    image: "images/sausage-egg.jpg",
    description: "ترکیب سوسیس سرخ‌شده و تخم‌مرغ؛ انتخابی انرژی‌زا برای شروع روز.",
    price: ""
  },
  "fried-egg": {
    title: "نیمرو",
    image: "images/fried-egg.jpg",
    description: "تخم‌مرغ سرخ‌شده ساده با نمک و فلفل؛ کلاسیک و خوشمزه.",
    price: ""
  },
  "sausage-tomato": {
    title: "سوسیس ربی",
    image: "images/sausage-tomato.jpg",
    description: "سوسیس تفت‌داده‌شده در رب گوجه؛ طعمی قوی و لذیذ.",
    price: ""
  },
  "panini": {
    title: "پنینی ژامبون",
    image: "images/panini.jpg",
    description: "ساندویچ گرم شده با ژامبون، پنیر و نان پرس‌شده.",
    price: ""
  },
  "peanut-toast": {
    title: "تست کره بادام‌زمینی",
    image: "images/peanut-toast.jpg",
    description: "نان تست شده با کره بادام‌زمینی؛ سالم، خوشمزه و مقوی.",
    price: ""
  }
};
