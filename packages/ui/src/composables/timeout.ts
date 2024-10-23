import { onBeforeUnmount, onDeactivated } from 'vue'

export function useTimeout() {
  let timer: NodeJS.Timeout | undefined

  function removeTimeout() {
    if (timer) {
      clearTimeout(timer)
      timer = undefined
    }
  }

  onDeactivated(removeTimeout)
  onBeforeUnmount(removeTimeout)

  function registerTimeout(fn: () => void, delay: number) {
    removeTimeout()
    timer = setTimeout(() => {
      timer = undefined
      fn()
    }, delay)
  }

  return {
    removeTimeout,
    registerTimeout,
  }
}
