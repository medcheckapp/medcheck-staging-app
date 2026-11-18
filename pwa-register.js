// PWA登録のみ。服薬確認の既存処理には干渉しません。
(() => {
  if (!('serviceWorker' in navigator) || !window.isSecureContext) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js', {
      scope: './',
      updateViaCache: 'none'
    }).catch(error => {
      console.warn('PWA service worker registration failed:', error);
    });
  }, { once: true });
})();
