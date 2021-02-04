setTimeout(() => {
    for (let i = 0; i < 1000; i++) {
        let div = document.createElement('div');
        div.style.height = '100px';
        div.style.width = '100px';
        div.style.backgroundColor = 'blue';
        let height = div.offsetHeight;
        div.style.height = height;
        div.style.height = '100px';
        document.getElementById('body').append(div);
    }
    
    // for (let i = 0; i < 1000; i++) {
    //     document.getElementById('body').backgroundColor = 'red';
    //     document.getElementById('body').backgroundColor = 'blue';
    // }
}, 1000)

