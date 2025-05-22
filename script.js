function calcular() {
  const resultado = document.getElementById("resultado");
  const nome = document.getElementById("nome").value;
  const contrato = document.getElementsByClassName("contrato");
  const beneficio = document.querySelectorAll(".beneficios");
  const cargo = parseFloat(document.querySelector("#cargo").value);

  let porcentagem_desconto = 0;
  let total_beneficio = 0;
  let descontos = 0;
  let salario_liquido = 0;

  if (nome == "") {
    alert("Digite o nome do funcionário!");
  } 
  else {
    for (let i = 0; i < contrato.length; i++) {
      if (contrato[i].checked) {
        porcentagem_desconto = parseFloat(contrato[i].value);
        break;
      }
    }

    let valor_beneficio = 0;
    for (let x = 0; x < beneficio.length; x++) {
      if (beneficio[x].checked) {
        valor_beneficio = parseFloat(beneficio[x].value);
        total_beneficio += valor_beneficio;
      }
    }

    if (cargo == 0) {
      alert("Selecione um cargo!");
    } else {
      descontos = cargo * (porcentagem_desconto / 100);
      salario_liquido = cargo - descontos - total_beneficio;

      resultado.innerHTML =
        "<p><b>Funcionário: </b> " +nome + "</p>"
        "<p><b>Salário Base: </b>R$ " +cargo.toFixed(2).replace(".", ",") + "</p>"
        "<p><b>Benefícios: </b>R$ " +total_beneficio.toFixed(2).replace(".", ",") + "</p>"
        "<p><b>Descontos (" +porcentagem_desconto +"%): </b> R$ " +descontos.toFixed(2).replace(".", ",") + "</p>"
        "<p><b>Salário Líquido: </b>R$ " +salario_liquido.toFixed(2).replace(".", ",") +"</p>";
    }
  }
}
