const sumitSelectorBtn = document.querySelector('#sumit-selector')  
const hariSelectorBtn = document.querySelector('#hari-selector') 
const chatHeader = document.querySelector('.chat-header') 
const chatMessages = document.querySelector('.chat-messages') 
const chatInputForm = document.querySelector('.chat-input-form') 
const chatInput = document.querySelector('.chat-input') 
const clearChatBtn = document.querySelector('.clear-chat-buttn')    

const createChatMessageElement = (message) => `
<div class="message ${message.sender === 'Sumit' ? 'blue-bg' : 'grey-bg'}">
<div class="message-sender">${message.sender}</div>
<div class="message-text">${message.text}</div>
<div class="message-timestamp">${message.timestamp}</div>
</div>
`
let messageSender = 'Sumit'

const updateMessageSender = (name) => {
  messageSender = name
  chatHeader.innerText = `${messageSender} chatting...`
  chatInput.placeholder = `Type here, ${messageSender}...`

  if (name === 'Sumit') {
    sumitSelectorBtn.classList.add('active-person')
    hariSelectorBtn.classList.remove('active-person')
  }

  if (name === 'Hari') {
    hariSelectorBtn.classList.add('active-person')
   sumitSelectorBtn.classList.remove('active-person')
    }

    chatInput.focus()
}

sumitSelectorBtn.onclick = () => updateMessageSender('Sumit')
hariSelectorBtn.onclick = () => updateMessageSender('Hari')


const sendMessage = (e) => {
    e.preventDefault()

    const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const message = {
        sender: messageSender,
        text: chatInput.value,
        timestamp,
    }

    chatMessages.innerHTML += createChatMessageElement(message)

    chatInputForm.reset()
    chatMessages.scrollTop = chatMessages.scrollHeight
}

chatInputForm.addEventListener('submit', sendMessage)

clearChatBtn.addEventListener('click', () => {
    chatMessages.innerHTML = ''
})