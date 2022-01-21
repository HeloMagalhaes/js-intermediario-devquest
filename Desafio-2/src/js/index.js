const acordeonItems = document.querySelectorAll('.acordeon-item')
acordeonItems.forEach(function (item) {
    item.addEventListener('click', function () {
        const itemAtivo = item.classList.contains('ativo')
        
        acordeonItems.forEach(function (item) {
            item.classList.remove('ativo')
        })
        
        if (!itemAtivo) {
            item.classList.add('ativo')
        } else {
            item.classList.remove('ativo')
        }

    })
})
