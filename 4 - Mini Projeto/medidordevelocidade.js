// Velocidade de 80km 
// O limite é de até 80km, a cada 5km a cima do limite você ganha um ponto na carteira
// Math.floor
verificarVelocidade(85);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('Ok');
        else {
           const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto));
            if (pontos >= 12) 
                console.log('Carteira suspensa');
            else
                console.log('Pontos', pontos);
           
           }
        }

    
