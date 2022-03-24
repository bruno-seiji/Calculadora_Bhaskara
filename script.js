function Calc() {
  var A = Number(document.querySelector('.valor_a').value)
  var B = Number(document.querySelector('.valor_b').value)
  var C = Number(document.querySelector('.valor_c').value)
  var Res = document.getElementById('RES')
  var Ndecimal = Number(document.querySelector('.dec').value)
  var x1 = 0
  var x2 = 0
  var Delta = B * B - 4 * A * C

  if (Ndecimal < 1 || Ndecimal > 50) {
    alert('[ERROR] Inserir valores de casas decimais entre 0 e 50')
  } else {
    if (Delta <= 0) {
      window.alert(
        '[ERROR] Valores de a , b e c não possuem resposta no campo dos números Reais. Por favor, utilizar outros valores.'
      )
    } else {
      x1 = (-B + Math.sqrt(Delta)) / (2 * A)
      x2 = (-B - Math.sqrt(Delta)) / (2 * A)
      Res.innerHTML = ''
      Res.innerHTML +=
        '<p>Para a seguinte equação: ' +
        A +
        'x² + ' +
        B +
        'x + ' +
        C +
        ' = 0</p>'
      Res.innerHTML += '<p>Temos:</p>'
      Res.innerHTML += '<p>x1 = ' + x1.toFixed(Ndecimal) + '</p>'
      Res.innerHTML += '<p>x2 = ' + x2.toFixed(Ndecimal) + '</p>'
    }
    document.querySelector('.valor_a').value = ''
    document.querySelector('.valor_b').value = ''
    document.querySelector('.valor_c').value = ''
    document.querySelector('.dec').value = ''
    document.querySelector('.valor_a').focus()
  }
}
