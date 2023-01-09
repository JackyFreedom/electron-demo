console.log('render-before')
const information  = document.getElementById('info')
information.innerText = `this app useing chrome (v${versions.chome()}) nodejs(${versions.node()}) electron(${versions.electron()})`

const func = async ()=>{
    const response = await window.versions.ping()
    console.log('response',response)

}

// func()
let source = document.getElementById('source');
document.getElementById('toggle-dark-mode').addEventListener('click',async()=>{
    const isDarkMode = await window.darkMode.toggle()
    source.innerText = isDarkMode ? 'Dark':"Light";

})

document.getElementById('system').addEventListener('click',async()=>{
   await window.darkMode.systeme()
   source.innerText = 'system'
} )