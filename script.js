const prompt = document.getElementById('prompt')
const msg = document.getElementById('msg')
const sendBtn = document.getElementById('sendBtn')

sendBtn.addEventListener('click', async () => {
  const text = prompt.value.trim()
  if (!text) return

  msg.innerText = '清宁知泽思考中...'

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: text })
    })

    const data = await res.json()
    msg.innerText = data.choices?.[0]?.message?.content || '无回复'
  } catch (e) {
    msg.innerText = '错误：' + e.message
  }
})