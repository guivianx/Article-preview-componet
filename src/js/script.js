var c = window.document.getElementsByTagName('body')[0]

var b = window.document.getElementById('btshare')

var st = window.document.getElementById('setashare')

var bl = window.document.getElementsByClassName('balao')[0]


function abrir() {
        bl.style.visibility = 'visible' 
        b.style.background = '#6d7f97'
        st.style.fill = '#ecf2f8' 
    
    

}

function fechar() {
    b.style.background = '#ecf2f8'
    st.style.fill = '#6d7f97'
    bl.style.visibility = 'hidden'
}

