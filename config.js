// 本番導入準備版: 公開可能なPublishable keyだけを設定。secret/service_roleは絶対に書かない。
// 初期値は未設定・ロック中です。施設の審査前は staging と架空データで検証。
window.MEDCHECK_CONFIG = {
  environment: 'staging', // 検証中は staging。本番移行承認後だけ production に変更。
  url: 'https://btathpncbmngcbetdhtt.supabase.co',
  publishableKey: 'sb_publishable_632UyxGGeRKZ-znla3VJ3g__Uk1cTds',
  releaseApproved: false, // 実運用の承認が完了するまで false のまま
  allowedHost: 'YOUR-PRODUCTION-DOMAIN' // 例: medcheck-prod.example.jp（http等は不要）
};
