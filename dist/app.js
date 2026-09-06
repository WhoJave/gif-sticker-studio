const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const translations = {
  en: {
    title: 'Loopi — GIF Sticker Studio', localProcessing: '● Local processing', languageLabel: 'Language', exportGif: 'Export GIF',
    eyebrow: 'GIF STICKER STUDIO', heroOne: 'Make it move.', heroTwo: 'Make it yours.', lede: 'Turn a handful of images into a polished, looping sticker—right in your browser.',
    addFrames: 'Add your frames', dropImages: 'Drop images here', chooseImages: 'or tap to choose PNG, JPG, WebP', needTry: 'Need something to try?', useDemo: 'Use demo frames',
    tuneLoop: 'Tune the loop', frameSpeed: 'Frame speed', loopStyle: 'Loop style', normal: 'Normal', pingpong: 'Ping-pong', reverse: 'Reverse',
    stickerText: 'Sticker text', captionPlaceholder: 'e.g. WAIT FOR ME!', textSize: 'Text size', export: 'Export', exportAnimated: 'Export animated GIF',
    livePreview: 'LIVE PREVIEW', stickerAppears: 'Your sticker appears here', addOrDemo: 'Add frames or load the demo', infiniteLoop: '∞ loop',
    privateDefault: 'Private by default', framesStay: 'Your frames stay on this device.', madeForStickers: 'Made for stickers', squareCanvas: 'Square canvas, smooth loops, transparent PNG support.',
    noAccount: 'No account needed', openCreate: 'Open, create, download.', processedLocally: 'Images are processed locally in your browser.',
    addTwo: 'Add at least two frames to export.', addOneMore: 'Add one more frame to export.', ready: 'Ready to export. Drag in more frames anytime.', demoReady: 'Demo loaded — try changing the speed and loop style.',
    pleaseAddTwo: 'Please add at least two frames first.', building: 'Building your GIF…', downloaded: 'Downloaded {size} MB GIF.', frames: '{count} frame', framesPlural: '{count} frames', pause: 'Pause preview', play: 'Play preview', thumb: 'Click to preview', demoCaption: 'CATCH IT!'
  },
  'zh-CN': {
    title: 'Loopi — GIF 动态贴纸工作室', localProcessing: '● 本地处理', languageLabel: '语言', exportGif: '导出 GIF',
    eyebrow: 'GIF 动态贴纸工作室', heroOne: '让画面动起来。', heroTwo: '让创意属于你。', lede: '只需几张图片，即可在浏览器中制作精致、循环播放的动态贴纸。',
    addFrames: '添加画面帧', dropImages: '将图片拖放到这里', chooseImages: '或点击选择 PNG、JPG、WebP', needTry: '想先体验一下？', useDemo: '使用演示画面',
    tuneLoop: '调整循环', frameSpeed: '每帧时长', loopStyle: '循环方式', normal: '正常', pingpong: '往返', reverse: '倒放',
    stickerText: '贴纸文字', captionPlaceholder: '例如：等等我！', textSize: '文字大小', export: '导出', exportAnimated: '导出动态 GIF',
    livePreview: '实时预览', stickerAppears: '你的贴纸会显示在这里', addOrDemo: '添加图片或载入演示画面', infiniteLoop: '∞ 无限循环',
    privateDefault: '默认保护隐私', framesStay: '你的图片始终保留在本设备。', madeForStickers: '专为贴纸设计', squareCanvas: '方形画布、流畅循环，并支持透明 PNG。',
    noAccount: '无需账户', openCreate: '打开、制作、下载。', processedLocally: '图片仅在你的浏览器中进行本地处理。',
    addTwo: '至少添加两帧才能导出。', addOneMore: '再添加一帧即可导出。', ready: '可以导出了，也可继续拖入更多图片。', demoReady: '演示已载入——试试调整速度和循环方式。',
    pleaseAddTwo: '请先添加至少两帧图片。', building: '正在生成 GIF…', downloaded: '已下载 {size} MB 的 GIF。', frames: '{count} 帧', framesPlural: '{count} 帧', pause: '暂停预览', play: '播放预览', thumb: '点击预览', demoCaption: '抓住它！'
  },
  'zh-TW': {
    title: 'Loopi — GIF 動態貼圖工作室', localProcessing: '● 本機處理', languageLabel: '語言', exportGif: '匯出 GIF',
    eyebrow: 'GIF 動態貼圖工作室', heroOne: '讓畫面動起來。', heroTwo: '讓創意屬於你。', lede: '只需幾張圖片，即可在瀏覽器中製作精緻、循環播放的動態貼圖。',
    addFrames: '加入畫面格', dropImages: '將圖片拖放到這裡', chooseImages: '或點擊選擇 PNG、JPG、WebP', needTry: '想先體驗一下？', useDemo: '使用示範畫面',
    tuneLoop: '調整循環', frameSpeed: '每格時長', loopStyle: '循環方式', normal: '正常', pingpong: '往返', reverse: '倒放',
    stickerText: '貼圖文字', captionPlaceholder: '例如：等等我！', textSize: '文字大小', export: '匯出', exportAnimated: '匯出動態 GIF',
    livePreview: '即時預覽', stickerAppears: '你的貼圖會顯示在這裡', addOrDemo: '加入圖片或載入示範畫面', infiniteLoop: '∞ 無限循環',
    privateDefault: '預設保護隱私', framesStay: '你的圖片始終保留在本裝置。', madeForStickers: '專為貼圖設計', squareCanvas: '方形畫布、流暢循環，並支援透明 PNG。',
    noAccount: '無需帳戶', openCreate: '開啟、製作、下載。', processedLocally: '圖片僅在你的瀏覽器中進行本機處理。',
    addTwo: '至少加入兩格才能匯出。', addOneMore: '再加入一格即可匯出。', ready: '可以匯出了，也可繼續拖入更多圖片。', demoReady: '示範已載入——試試調整速度和循環方式。',
    pleaseAddTwo: '請先加入至少兩格圖片。', building: '正在產生 GIF…', downloaded: '已下載 {size} MB 的 GIF。', frames: '{count} 格', framesPlural: '{count} 格', pause: '暫停預覽', play: '播放預覽', thumb: '點擊預覽', demoCaption: '抓住它！'
  },
  ja: {
    title: 'Loopi — GIF スタンプスタジオ', localProcessing: '● ローカル処理', languageLabel: '言語', exportGif: 'GIFを書き出す',
    eyebrow: 'GIF スタンプスタジオ', heroOne: '動きをつけよう。', heroTwo: 'あなたらしく。', lede: '数枚の画像から、なめらかにループするスタンプをブラウザだけで作れます。',
    addFrames: 'フレームを追加', dropImages: '画像をここにドロップ', chooseImages: 'またはクリックして PNG、JPG、WebP を選択', needTry: 'まず試してみますか？', useDemo: 'デモを使う',
    tuneLoop: 'ループを調整', frameSpeed: 'フレーム速度', loopStyle: 'ループ方法', normal: '通常', pingpong: '往復', reverse: '逆再生',
    stickerText: 'スタンプの文字', captionPlaceholder: '例：待って！', textSize: '文字サイズ', export: '書き出し', exportAnimated: 'アニメーションGIFを書き出す',
    livePreview: 'ライブプレビュー', stickerAppears: 'スタンプがここに表示されます', addOrDemo: 'フレームを追加するか、デモを読み込んでください', infiniteLoop: '∞ 無限ループ',
    privateDefault: 'プライバシーを保護', framesStay: '画像はこの端末内に保存されます。', madeForStickers: 'スタンプ向け設計', squareCanvas: '正方形キャンバス、滑らかなループ、透過PNG対応。',
    noAccount: 'アカウント不要', openCreate: '開いて、作って、ダウンロード。', processedLocally: '画像はブラウザ内でローカル処理されます。',
    addTwo: '書き出すには2フレーム以上追加してください。', addOneMore: 'あと1フレーム追加すると書き出せます。', ready: '書き出し可能です。さらに画像を追加することもできます。', demoReady: 'デモを読み込みました。速度やループ方法を調整してみましょう。',
    pleaseAddTwo: '先に2フレーム以上追加してください。', building: 'GIFを作成中…', downloaded: '{size} MB のGIFをダウンロードしました。', frames: '{count} フレーム', framesPlural: '{count} フレーム', pause: 'プレビューを一時停止', play: 'プレビューを再生', thumb: 'クリックしてプレビュー', demoCaption: 'つかまえて！'
  }
};

const browserLanguage = navigator.language.toLowerCase();
const detectedLanguage = browserLanguage.startsWith('ja') ? 'ja' : browserLanguage.startsWith('zh-tw') || browserLanguage.startsWith('zh-hk') ? 'zh-TW' : browserLanguage.startsWith('zh') ? 'zh-CN' : 'en';
const state = { frames: [], index: 0, speed: 140, loop: 'normal', playing: true, timer: null, language: localStorage.getItem('loopi-language') || detectedLanguage };
const canvas = $('#canvas');
const ctx = canvas.getContext('2d', { willReadFrequently: true });
const t = (key, params = {}) => { let value = (translations[state.language] || translations.en)[key] || translations.en[key] || key; for (const [name, replacement] of Object.entries(params)) value = value.replace(`{${name}}`, replacement); return value; };

function setStatus(key, params = {}) { const status = $('#status'); status.dataset.statusKey = key; status.dataset.statusParams = JSON.stringify(params); status.textContent = t(key, params); }
function applyLanguage() {
  document.documentElement.lang = state.language; document.title = t('title');
  $$('[data-i18n]').forEach((element) => { element.textContent = t(element.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  $('#languageSelect').value = state.language; $('#languageSelect').setAttribute('aria-label', t('languageLabel')); $('#playBtn').setAttribute('aria-label', t(state.playing ? 'pause' : 'play'));
  const status = $('#status'); setStatus(status.dataset.statusKey || 'addTwo', JSON.parse(status.dataset.statusParams || '{}')); rebuildStrip();
}
function orderedFrames() { let frames = [...state.frames]; if (state.loop === 'reverse') frames.reverse(); if (state.loop === 'pingpong' && frames.length > 2) frames = frames.concat(frames.slice(1, -1).reverse()); return frames; }
function draw(img) {
  ctx.clearRect(0, 0, 512, 512); const scale = Math.min(512 / img.naturalWidth, 512 / img.naturalHeight); const width = img.naturalWidth * scale; const height = img.naturalHeight * scale;
  ctx.drawImage(img, (512 - width) / 2, (512 - height) / 2, width, height); const text = $('#caption').value.trim();
  if (text) { const size = Number($('#captionSize').value); ctx.font = `900 ${size}px system-ui`; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'; ctx.lineJoin = 'round'; ctx.strokeStyle = 'white'; ctx.lineWidth = Math.max(6, size / 6); ctx.strokeText(text, 256, 490); ctx.fillStyle = '#201b18'; ctx.fillText(text, 256, 490); }
}
function render() {
  clearTimeout(state.timer); const frames = orderedFrames(); $('#emptyState').style.display = frames.length ? 'none' : 'flex'; $('#frameCounter').textContent = t(state.frames.length === 1 ? 'frames' : 'framesPlural', { count: state.frames.length });
  if (!frames.length) { ctx.clearRect(0, 0, 512, 512); return; } state.index %= frames.length; draw(frames[state.index].img);
  $$('.thumb').forEach((thumb) => thumb.classList.toggle('active', Number(thumb.dataset.i) === state.frames.indexOf(frames[state.index])));
  if (state.playing && frames.length > 1) state.timer = setTimeout(() => { state.index = (state.index + 1) % frames.length; render(); }, state.speed);
}
function rebuildStrip() {
  const strip = $('#filmstrip'); strip.innerHTML = '';
  state.frames.forEach((frame, index) => { const image = new Image(); image.src = frame.url; image.className = 'thumb'; image.dataset.i = index; image.title = t('thumb'); image.onclick = () => { state.index = index; draw(frame.img); }; strip.append(image); }); render();
}
async function addFiles(files) {
  const validFiles = [...files].filter((file) => file.type.startsWith('image/'));
  for (const file of validFiles) { const url = URL.createObjectURL(file); const img = new Image(); img.src = url; await img.decode(); state.frames.push({ img, url, name: file.name }); }
  state.index = 0; rebuildStrip(); setStatus(state.frames.length > 1 ? 'ready' : 'addOneMore');
}

$('#languageSelect').onchange = (event) => { state.language = event.target.value; localStorage.setItem('loopi-language', state.language); applyLanguage(); };
$('#fileInput').onchange = (event) => addFiles(event.target.files); const dropzone = $('#dropzone');
['dragenter', 'dragover'].forEach((name) => dropzone.addEventListener(name, (event) => { event.preventDefault(); dropzone.classList.add('drag'); }));
['dragleave', 'drop'].forEach((name) => dropzone.addEventListener(name, (event) => { event.preventDefault(); dropzone.classList.remove('drag'); }));
dropzone.addEventListener('drop', (event) => addFiles(event.dataTransfer.files));
$('#speed').oninput = (event) => { state.speed = Number(event.target.value); $('#speedValue').value = `${state.speed} ms`; render(); };
$('#captionSize').oninput = (event) => { $('#captionSizeValue').value = event.target.value; render(); }; $('#caption').oninput = render;
$$('#loopStyle button').forEach((button) => button.onclick = () => { $$('#loopStyle button').forEach((item) => item.classList.remove('active')); button.classList.add('active'); state.loop = button.dataset.value; state.index = 0; render(); });
$('#playBtn').onclick = () => { state.playing = !state.playing; $('#playBtn').textContent = state.playing ? 'Ⅱ' : '▶'; $('#playBtn').setAttribute('aria-label', t(state.playing ? 'pause' : 'play')); render(); };

function demoFrame(i) {
  const c = document.createElement('canvas'); c.width = c.height = 512; const x = c.getContext('2d'); x.clearRect(0, 0, 512, 512); const bounce = Math.sin(i / 8 * Math.PI) * 45; const wing = i % 2 ? 18 : -18; x.translate(0, -bounce);
  x.fillStyle = '#ffbf68'; x.beginPath(); x.ellipse(250, 315, 118, 103, 0, 0, 7); x.fill(); x.beginPath(); x.moveTo(170, 240); x.lineTo(185, 145); x.lineTo(235, 228); x.fill(); x.beginPath(); x.moveTo(275, 228); x.lineTo(335, 145); x.lineTo(340, 250); x.fill();
  x.fillStyle = '#fff0d8'; x.beginPath(); x.ellipse(250, 330, 70, 62, 0, 0, 7); x.fill(); x.fillStyle = '#241b18'; x.beginPath(); x.arc(217, 283, 10, 0, 7); x.arc(288, 283, 10, 0, 7); x.fill(); x.strokeStyle = '#241b18'; x.lineWidth = 7; x.beginPath(); x.arc(253, 308, 16, 0, Math.PI); x.stroke(); x.setTransform(1, 0, 0, 1, 0, 0);
  const butterflyX = 355 + Math.sin(i / 8 * Math.PI * 2) * 38; const butterflyY = 155 + Math.cos(i / 8 * Math.PI * 2) * 25; x.fillStyle = '#7654d6'; x.save(); x.translate(butterflyX, butterflyY); x.rotate(wing / 90); x.beginPath(); x.ellipse(-15, 0, 20, 30, -.5, 0, 7); x.ellipse(15, 0, 20, 30, .5, 0, 7); x.fill(); x.fillStyle = '#2b213c'; x.fillRect(-3, -18, 6, 40); x.restore(); return c;
}
$('#sampleBtn').onclick = async () => {
  state.frames.forEach((frame) => URL.revokeObjectURL(frame.url)); state.frames = [];
  for (let i = 0; i < 8; i++) { const c = demoFrame(i); const url = c.toDataURL(); const img = new Image(); img.src = url; await img.decode(); state.frames.push({ img, url, name: `demo-${i + 1}` }); }
  $('#caption').value = t('demoCaption'); rebuildStrip(); setStatus('demoReady');
};

function paletteIndex(r, g, b) { return ((r >> 5) << 5) | ((g >> 5) << 2) | (b >> 6); }
function bytes(target, ...values) { for (const value of values) target.push(value & 255); }
function word(target, value) { bytes(target, value, value >> 8); }
function lzw(indices, minCodeSize = 8) {
  const clear = 1 << minCodeSize; const end = clear + 1; const out = []; let bitBuffer = 0; let bitCount = 0; let codeSize = minCodeSize + 1; let next = end + 1; const dict = new Map();
  const write = (code) => { bitBuffer |= code << bitCount; bitCount += codeSize; while (bitCount >= 8) { out.push(bitBuffer & 255); bitBuffer >>= 8; bitCount -= 8; } };
  write(clear); let prefix = indices[0];
  for (let i = 1; i < indices.length; i++) { const key = `${prefix},${indices[i]}`; if (dict.has(key)) prefix = dict.get(key); else { write(prefix); if (next < 4096) { dict.set(key, next++); if (next === (1 << codeSize) && codeSize < 12) codeSize++; } else { write(clear); dict.clear(); codeSize = minCodeSize + 1; next = end + 1; } prefix = indices[i]; } }
  write(prefix); write(end); if (bitCount) out.push(bitBuffer & 255); return out;
}
async function exportGif() {
  if (state.frames.length < 2) { setStatus('pleaseAddTwo'); return; } setStatus('building'); await new Promise((resolve) => setTimeout(resolve, 30));
  const width = 512; const height = 512; const data = []; bytes(data, 71, 73, 70, 56, 57, 97); word(data, width); word(data, height); bytes(data, 0xf7, 0, 0);
  for (let i = 0; i < 256; i++) bytes(data, ((i >> 5) & 7) * 255 / 7, ((i >> 2) & 7) * 255 / 7, (i & 3) * 255 / 3); bytes(data, 0x21, 0xff, 11, ...new TextEncoder().encode('NETSCAPE2.0'), 3, 1, 0, 0, 0);
  for (const frame of orderedFrames()) { draw(frame.img); const rgba = ctx.getImageData(0, 0, width, height).data; const indexed = new Uint8Array(width * height); for (let pixel = 0, index = 0; pixel < rgba.length; pixel += 4, index++) indexed[index] = paletteIndex(rgba[pixel], rgba[pixel + 1], rgba[pixel + 2]); bytes(data, 0x21, 0xf9, 4, 0); word(data, Math.max(2, Math.round(state.speed / 10))); bytes(data, 0, 0, 0, 0x2c); word(data, 0); word(data, 0); word(data, width); word(data, height); bytes(data, 0, 8); const packed = lzw(indexed); for (let offset = 0; offset < packed.length; offset += 255) { const chunk = packed.slice(offset, offset + 255); bytes(data, chunk.length, ...chunk); } bytes(data, 0); }
  bytes(data, 0x3b); const blob = new Blob([new Uint8Array(data)], { type: 'image/gif' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'loopi-sticker.gif'; link.click(); setTimeout(() => URL.revokeObjectURL(link.href), 2000); setStatus('downloaded', { size: (blob.size / 1024 / 1024).toFixed(1) });
}
$('#exportBtn').onclick = exportGif; $('#exportTop').onclick = exportGif; applyLanguage();
