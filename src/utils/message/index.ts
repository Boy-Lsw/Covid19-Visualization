import Message from '@/component/Message/index.vue'

import { createVNode, render } from 'vue'

type Message = {
  title: string,
  content: string,
  dur?: number,
  type?: 'success' | 'warn'
}

let counts = 0

const message = (info: Message) => {
  let div = document.createElement('div')
  counts++
  const y = counts * 35 <= 180 ? counts * 35 : 180
  div.style.transform = `translateY(-${y}px)`
  document.querySelector('.g-covid19-message')?.appendChild(div)
  const dur = info.dur ? info.dur : 1000 * 3
  let Vnode = createVNode(Message, { ...info, dur, isBoxShadow: !(counts > 5) })
  render(Vnode, div)
  setTimeout(() => {
    setTimeout(() => {
      //清除Vnode
      render(null, div)
      //清除div
      div.remove()
      counts--
    }, 500);
  }, dur);
}

export default message