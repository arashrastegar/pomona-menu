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
