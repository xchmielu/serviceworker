// Czy SW działa, navigoator - przeglądarka
if ('serviceWorker' in navigator) {
  console.log('Serive worker działa')
  window.addEventListener('load', () => { //inicjalizacja w momencie odpalenia strony
    navigator.serviceWorker
      .register('../sw_cached_pages.js')
      .then(reg => console.log('Service Worker: Registered (Pages)')) //tutaj mamy promise dlatego then/catch
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}
