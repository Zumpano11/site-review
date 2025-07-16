function mostrarReview(jogo) {
    const titulo = document.getElementById('jogo-titulo');
    const texto =  document.getElementById('jogo-texto');
    const container =  document.getElementById('review-container');

    document.querySelectorAll('nav button').forEach(btn => {
        btn.classList.remove('ativo');
    });

    const botaoClicado = document.querySelector(`button[onclick="mostrarReview('${jogo}')"]`);
    if (botaoClicado) {
        botaoClicado.classList.add('ativo');
    }
    
    container.style.opacity = 0;
    container.style.transform = "translateY(20px)";

    setTimeout(() => {
        if (jogo === 'hollow') {
            titulo.innerText = 'Hollow Knight';
            texto.innerText = 'Hollow Knight é um jogo de ação e aventura em plataforma desenvolvido pela Team Cherry. Lançado em 2017, o jogo se passa em um mundo subterrâneo chamado Hallownest, onde os jogadores controlam um cavaleiro em uma jornada para descobrir os segredos do reino abandonado. Sua trilha sonora e os chefes desafiadores são muito marcantes. Muitos conhecem Hollow Knight por ser um jogo difícil, e realmente é, só que o jogo te envolve dentro do mundo de Hallownest, e essa dificuldade passa a ser um prazer. Você vivencia cada momento como se fosse real. Cada luta é como um marco na sua jornada. Hollow Knight é amplamente considerado um dos melhores jogos indies de todos os tempos.';
        } else if (jogo ===  'rdr2') {
            titulo.innerText = 'Red Dead Redemption 2';
            texto.innerText = 'Red Dead Redemption 2 é um jogo de ação e aventura desenvolvido pela Rockstar Games, lançado em 2018. O jogo segue a história de Arthur Morgan, um fora da lei membro da gangue Van der Linde. O jogo é conhecido por seus gráficos extremamente realistas e detalhes impressionantes, além de uma narrativa envolvente e reviravoltas inesperadas. A ambientação do velho oeste é incrivelmente imersiva e detalhada, com florestas ricas, cidades vibrantes e trilha sonora incrível. Red Dead Redemption 2 é amplamente considerado um dos melhores jogos de todos os tempos.';
        } else if (jogo === 'undertale') {
            titulo.innerText = 'Undertale';
            texto.innerText = 'Undertale é um jogo de RPG indie criado por Toby Fox, lançado em 2015. O jogo se passa em um mundo subterrâneo habitado por monstros, onde os jogadores controlam um humano que caiu nesse mundo. Undertale é conhecido por sua narrativa envolvente, trilha sonora incrível, finais traumatizantes e memoráveis e mecânicas de combate únicas, permitindo que os jogadores escolham entre matar ou poupar seus inimigos, os levando a diferentes finais e experiências de jogo. Undertale é amplamente elogiado por sua originalidade e impacto emocional, tornando-se um dos jogos indies mais amados e influentes de todos os tempos.';
        } else if (jogo === 'gow') {
            titulo.innerText = 'God of War';
            texto.innerText = 'God of War é um jogo de ação e aventura desenvolvido pela Santa Monica Studio e lançado pela Sony Interactive Entertainment. Lançado em 2018, o jogo segue a história de Kratos, um ex deus da guerra, que agora vive em um mundo caótico e perigoso, com seu filho Atreus, após a morte de sua esposa. O jogo é conhecido por sua história emocionante e envolvente, jogabilidade fluida e combate brutal. A relação entre Kratos e Atreus é um dos pontos altos do jogo, mostrando o crescimento e desenvolvimento de ambos os personagens ao longo da jornada. God of War é considerado por muitos como um dos melhores e mais memoráveis jogos de todos os tempos, recebendo diversos prêmios como o Game of the Year de 2018, competindo diretamente com Red Dead Redemption 2.';
        }

        document.body.className = `tema-${jogo}`;

        container.style.opacity = 1;
        container.style.transform = "translateY(0)";
    }, 400);
}
