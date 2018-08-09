const blur = {}

function setBlur (el, binding) {
  el.style.filter = !binding.value ? 'blur(3px)' : 'none'
  el.style.cursor = !binding.value ? 'not-allowed' : 'pointer'

  el.querySelectorAll('button').forEach(a => {
    if (!binding.value) {
      a.setAttribute('disabled', true)
    } else {
      a.removeAttribute('disable')
    }
  })
}

// creamos la directiva
blur.install = function (Vue) {
  // Vue.directive( name, funcion u objeto de configuracion)
  Vue.directive('blur', {
    bind (el, binding) { setBlur(el, binding) }
  })
}

export default blur
