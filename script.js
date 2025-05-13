const itemsInfo = {
  "اسپرسو": {
    image: "images/espresso.jpg",
    description: "یک شات غلیظ و قوی از قهوه، پایه اصلی بسیاری از نوشیدنی‌های دیگر."
  },
  "دمی (v60)": {
    image: "images/v60.jpg",
    description: "قهوه‌ای ملایم با طعمی شفاف که با دستگاه V60 دم می‌شود."
  },
  "کاپوچینو": {
    image: "images/cappuccino.jpg",
    description: "ترکیب مساوی اسپرسو، شیر داغ و کف شیر؛ نوشیدنی‌ای متعادل و خامه‌ای."
  },
  "لاته": {
    image: "images/latte.jpg",
    description: "شات اسپرسو با مقدار زیادی شیر داغ و کمی کف؛ مناسب برای کسانی که طعم ملایم‌تری می‌خواهند."
  },
  "موکا": {
    image: "images/mocha.jpg",
    description: "ترکیب شکلات داغ، اسپرسو و شیر؛ نوشیدنی‌ای شیرین و خوشمزه."
  },
  // ادامه بده برای آیتم‌های دیگه...
};

document.querySelectorAll('.item').forEach(item => {
  const name = item.querySelector('span')?.innerText?.trim();
  item.addEventListener('click', () => {
    if (itemsInfo[name]) {
      document.getElementById('modalImage').src = itemsInfo[name].image;
      document.getElementById('modalDescription').innerText = itemsInfo[name].description; // توضیحات را به تگ اضافه کنید
      const modal = document.getElementById('imageModal');
      modal.style.display = 'flex';
      setTimeout(() => modal.classList.add('show'), 10); // برای انیمیشن
    }
  });
});


function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}
