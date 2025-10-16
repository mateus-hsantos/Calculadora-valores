 let mensagem = document.getElementById("msg");
            let btn = document.getElementById("clique")
            btn.addEventListener("click", function(){
                msg.innerText = "Você clicou no botão!!!"
            });

            let paragrafo = document.getElementsByTagName("p");
            paragrafo[0].style.color = "blue";
            paragrafo[2].style.color = "blue";

            let titulos = document.getElementsByClassName("titulo");
            document.getElementById("botao").onclick = function () {
                for (let i = 0; i < titulos.length; i++) {
                    titulos[i].innerText = "Texto alterado pelo JS."
                }
            }
