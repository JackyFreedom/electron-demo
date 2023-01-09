const information = document.getElementById('info')
information.innerText = `111本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`
const func = async () => {
    const response = await window.versions.ping()
    console.log('func')
    console.log(response) // 打印 'pong'
  }
  console.log('use-func')
  func()