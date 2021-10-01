

export function updateDelay(delay) {
  return {
    type: 'SETTINGS_UPDATE',
    payload: {
      delay
    }
  }
}

export function updateAutoScroll(autoScroll) {
  return {
    type: 'SETTINGS_UPDATE',
    payload: {
      autoScroll
    }
  }
}
