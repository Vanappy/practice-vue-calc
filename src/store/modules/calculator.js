const state = {
  result: "0"
}

const actions = {
  tap ({ commit, state }, { number } ) {
    // Cボタン押下時
    if (isClear(number)) {
      commit("clear")
      return;
    }

    if (isAnswer(number)) {
      commit("answer")
      return;
    }

    commit("add", number)
  }
}

const mutations = {
  add(state, number) {
    if (state.result === "0") {
      state.result = number;
      return;
    }
    if ("+-*/".includes(number) && "+-*/".includes(state.result.slice(-1))) {
      state.result = state.result.slice(0, -1) + number
      return;
    }
    state.result += number;
  },

  clear(state) {
    state.result = "0";
  },

  answer(state) {
    let tokens = state.result.split(/([\+\-\*\/]+)/)

    const buffer = []
    const stack = []
    tokens.forEach(token => {
      if (!isNaN(token)) buffer.push(token)
      else {
        while(true) {
          if(stack.length === 0) {
            stack.push(token)
            break
          }
          else if("*/".includes(stack[stack.length-1]) && "+-".includes(token)) buffer.push(stack.pop())
          else {
            stack.push(token)
            break
          }
        }
      }
    })

    while(stack.length !== 0) {
      buffer.push(stack.pop())
    }

    const result = buffer.reduce((res, op) => {
      if (!isNaN(op)) res.push(parseInt(op, 10))
      else if (op === '+') res.push(res.pop() + res.pop())
      else if (op === '-') res.push(res.pop() - res.pop())
      else if (op === '*') res.push(res.pop() * res.pop())
      else if (op === '/') res.push(res.pop() / res.pop())
      return res
    }, [])
    console.log(result)
  }
}

const isAnswer = (input) => input === "="
const isClear = (input) => input === "C"

export default {
  namespaced: true,
  state,
  actions,
  mutations
}