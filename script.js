const prompt = document.getElementById('prompt');
const msg = document.getElementById('msg');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', async () => {
  let text = prompt.value.trim();
  if (!text) return;

  msg.innerText = "清宁知泽思考中...";

  // ========== 这里可以对接你的 DeepSeek API ==========
  // 我先给你做一个演示效果
  setTimeout(() => {
    msg.innerText = "【清宁知泽】\n已收到你的问题：" + text + "\n\n可在此接入 API 获得真实回复。";
  }, 800);
});