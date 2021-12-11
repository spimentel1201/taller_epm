const modalGuia = new bootstrap.Modal(document.getElementById('modalGuia'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode
    nombres_editar.value = fila.children[0].innerHTML
    apellidos_editar.value = fila.children[1].innerHTML
    nombres_editar.value = fila.children[2].innerHTML
    modalGuia.show()
})