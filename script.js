function Calc() {
  var A = Number(document.getElementById('valor_a').value)
  var B = Number(document.getElementById('valor_b').value)
  var C = Number(document.getElementById('valor_c').value)
  var Res = document.getElementById('RES')
  var x1 = 0
  var x2 = 0
  var Delta = B * B - 4 * A * C

  if (Delta < 0 || Delta == 0) {
    window.alert(
      '[ERROR] Valores de a , b e c não possuem resposta no campo dos números Reais. Por favor, utilizar outros valores.'
    )
  } else {
    x1 = (-B + Math.sqrt(Delta)) / (2 * A)
    x2 = (-B - Math.sqrt(Delta)) / (2 * A)
    Res.innerHTML = ''
    Res.innerHTML +=
      '<p>Para a seguinte equação: ' + A + 'x² + ' + B + 'x + ' + C + ' = 0</p>'
    Res.innerHTML += '<p>Temos:</p>'
    Res.innerHTML += '<p>x1 = ' + x1.toFixed(3) + '</p>'
    Res.innerHTML += '<p>x2 = ' + x2.toFixed(3) + '</p>'
  }
  document.getElementById('valor_a').value = ''
  document.getElementById('valor_b').value = ''
  document.getElementById('valor_c').value = ''
  document.getElementById('valor_a').focus()
}
