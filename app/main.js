//  Criação do bot utilizando api para o whatsapp 

const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true}); 
}); 

client.on('ready', () => {
    console.log('Client is ready!');
}); 

//  Configurando sistema de envio de mensagens da aplicação

//  Mensagem de boas vindas / primeiro contato do cliente
client.on('message', message => {
    const userMessage = message.body.toLowerCase();
    
    //  Mensagens de boas-vindas
    if(userMessage === 'oi' || userMessage === 'olá' || userMessage === 'ola'){
        client.sendMessage(message.from, `🟣 *20Pilla - Headshop Premium* 🟣

Olá! Seja bem-vindo à 20Pilla! 👋

Somos a mais nova marca brasileira de HEADSHOP, especializada em produtos exclusivos com design autêntico e qualidade premium.

*Nossa identidade:*
• Roxo para a Ousadia
• Preto para a Presença  
• Branco para a Essência

Como posso te ajudar hoje? 😊

*Digite um número para mais informações:*
1️⃣ - Ver produtos disponíveis
2️⃣ - Formas de pagamento
3️⃣ - Informações de entrega
4️⃣ - Garantia e trocas
5️⃣ - Falar com atendente
6️⃣ - Ver avaliações de clientes`);

    } else if(userMessage === 'bom dia' || userMessage === 'boa tarde' || userMessage === 'boa noite'){
        client.sendMessage(message.from, `🟣 *20Pilla - Headshop Premium* 🟣

${userMessage === 'bom dia' ? 'Bom dia' : userMessage === 'boa tarde' ? 'Boa tarde' : 'Boa noite'}! Seja bem-vindo à 20Pilla! 👋

Somos especialistas em produtos exclusivos com design autêntico e qualidade premium.

Como posso te ajudar hoje? 😊

*Digite um número para mais informações:*
1️⃣ - Ver produtos disponíveis
2️⃣ - Formas de pagamento
3️⃣ - Informações de entrega
4️⃣ - Garantia e trocas
5️⃣ - Falar com atendente
6️⃣ - Ver avaliações de clientes`);

    //  Menu de produtos
    } else if(userMessage === '1' || userMessage === 'produtos' || userMessage === 'ver produtos'){
        client.sendMessage(message.from, `🟣 *Nossos Produtos Premium* 🟣

*PITEIRAS DE VIDRO:*
• Piteira de Vidro Premium - Design exclusivo, vidro borossilicato
• Piteira de Vidro Azul - Detalhes azuis, exclusividade 20Pilla
• Piteira com Espiral de Mel - Acabamento premium diferenciado
• Kit Piteiras Coloridas - Variedade e estilo

*ACESSÓRIOS:*
• Seda King Size Premium - 32 folhas + filtros inclusos
• Kit Dichavador Premium - Alumínio aeronáutico, 4 partes
• Bandeja 20Pilla Signature - Madeira tratada, design exclusivo
• Cinzeiro 20Pilla - Design moderno e resistente

*Todos os produtos possuem:*
⭐ Qualidade premium
⭐ Design exclusivo 20Pilla
⭐ Garantia de 90 dias
⭐ Entrega segura e discreta

Para ver preços e fazer pedido, digite: *"preços"* ou *"comprar"*

Ou fale diretamente com nosso vendedor: *+55 11 96439-3246*`);

    //  Formas de pagamento
    } else if(userMessage === '2' || userMessage === 'pagamento' || userMessage === 'formas de pagamento'){
        client.sendMessage(message.from, `💳 *Formas de Pagamento* 💳

*PIX* 💜
• 5% de desconto
• Aprovação imediata
• Mais econômico

*Cartões de Crédito* 💳
• Até 12x sem juros
• Principais bandeiras aceitas
• Parcelamento facilitado

*Cartão de Débito* 💳
• Pagamento à vista
• Aprovação imediata

*Boleto Bancário* 📄
• Aprovação em até 2 dias úteis
• Pagamento seguro

*Transferência Bancária* 🏦
• Aprovação em até 1 dia útil

*Todas as transações são processadas com segurança através de gateways confiáveis.*

Para fazer seu pedido, entre em contato: *+55 11 96439-3246*`);

    //  Informações de entrega
    } else if(userMessage === '3' || userMessage === 'entrega' || userMessage === 'frete'){
        client.sendMessage(message.from, `📦 *Informações de Entrega* 📦

*ENTREGA NACIONAL:*
• Correios (PAC e SEDEX)
• Entrega expressa disponível
• Rastreamento em tempo real
• Embalagem discreta e segura

*PRAZOS MÉDIOS:*
• Capital e região metropolitana: 1-3 dias úteis
• Interior do estado: 3-5 dias úteis
• Outros estados: 5-10 dias úteis

*SEGURANÇA:*
• Embalagem discreta
• Produtos bem protegidos
• Código de rastreamento enviado por e-mail
• Entrega com confirmação

*RETIRADA EM SÃO PAULO:*
• Centro de distribuição
• Agendamento prévio
• Economia no frete

Para calcular frete ou fazer pedido: *+55 11 96439-3246*`);

    //  Garantia e trocas
    } else if(userMessage === '4' || userMessage === 'garantia' || userMessage === 'trocas'){
        client.sendMessage(message.from, `🛡️ *Garantia e Trocas* 🛡️

*POLÍTICA DE GARANTIA:*
• 90 dias para defeitos de fabricação
• 7 dias para devolução por arrependimento
• Troca imediata em caso de produto com defeito

*COMO SOLICITAR:*
1. Entre em contato via WhatsApp: *+55 11 96439-3246*
2. Envie fotos do produto
3. Descreva o problema
4. Resposta em até 24 horas úteis

*CONDIÇÕES:*
• Produto deve estar em estado original
• Embalagem preservada
• Defeito não causado por mau uso

*SUPORTE:*
• WhatsApp: +55 11 96439-3246
• E-mail: 20.pillamarca@gmail.com
• Instagram: @20.Pilla

*Nossa prioridade é sua satisfação!* 😊`);

    //  Falar com atendente
    } else if(userMessage === '5' || userMessage === 'atendente' || userMessage === 'falar com atendente'){
        client.sendMessage(message.from, `👨‍💼 *Atendimento Personalizado* 👨‍💼

*CANAIS DE ATENDIMENTO:*

*WhatsApp Principal:* 📱
+55 11 96439-3246
(Segunda a Sábado, 9h às 18h)

*WhatsApp Secundário:* 📱
+55 11 94396-9951

*Instagram:* 📸
@20.Pilla
(Mensagens diretas)

*E-mail:* 📧
20.pillamarca@gmail.com

*TEMPO DE RESPOSTA:*
• Até 2 horas em horário comercial
• Atendimento personalizado
• Especialistas em produtos

*Estamos aqui para te ajudar a escolher os melhores produtos!* 😊`);

    //  Avaliações de clientes
    } else if(userMessage === '6' || userMessage === 'avaliações' || userMessage === 'depoimentos'){
        client.sendMessage(message.from, `⭐ *Avaliações dos Nossos Clientes* ⭐

*BRUNO APARECIDO:*
⭐⭐⭐⭐⭐
"Comprei na 20Pilla pela primeira vez e fiquei impressionado com a qualidade dos produtos! Chegou rápido, bem embalado e exatamente como anunciado. Já virei cliente fiel!"

*FELIPE RIZZO:*
⭐⭐⭐⭐⭐
"Simplesmente amei minha compra na 20Pilla! Atendimento atencioso, entrega rápida e o produto superou minhas expectativas. Recomendo de olhos fechados!"

*MARIA SILVA:*
⭐⭐⭐⭐⭐
"Produtos incríveis! A qualidade e o design são excepcionais. Recomendo fortemente para quem busca itens únicos e bem feitos."

*JOÃO SANTOS:*
⭐⭐⭐⭐⭐
"Entrega super rápida e produtos de alta qualidade. O atendimento foi excelente e os produtos superaram minhas expectativas."

*Mais de 500+ clientes satisfeitos!*

Para fazer parte dessa família: *+55 11 96439-3246*`);

    //  Preços e compra
    } else if(userMessage === 'preços' || userMessage === 'comprar' || userMessage === 'quanto custa'){
        client.sendMessage(message.from, `💰 *Preços e Condições* 💰

*Nossos produtos são premium com preços justos!*

*PITEIRAS DE VIDRO:*
• Piteira Premium: A partir de R$ 29,90
• Piteira Azul: A partir de R$ 34,90
• Piteira Espiral Mel: A partir de R$ 39,90
• Kit Coloridas: A partir de R$ 59,90

*ACESSÓRIOS:*
• Seda King Size: A partir de R$ 19,90
• Dichavador Premium: A partir de R$ 89,90
• Bandeja Signature: A partir de R$ 149,90
• Cinzeiro 20Pilla: A partir de R$ 49,90

*DESCONTOS:*
• PIX: 5% de desconto
• Kit completo: 10% de desconto
• Frete grátis em compras acima de R$ 150

*Para ver preços exatos e fazer pedido:*
📱 WhatsApp: +55 11 96439-3246
📸 Instagram: @20.Pilla

*Preços podem variar conforme disponibilidade*`);

    //  Informações sobre a marca
    } else if(userMessage === 'sobre' || userMessage === 'quem somos' || userMessage === 'marca'){
        client.sendMessage(message.from, `🟣 *Sobre a 20Pilla* 🟣

*IDENTIDADE É ATITUDE*
*ESTILO É ESCOLHA*

Somos a mais nova marca brasileira de HEADSHOP, criada para se tornar referência em identidade visual com curadoria precisa e design autêntico.

*NOSSA MISSÃO:*
• Oferecer produtos exclusivos
• Design autêntico e premium
• Qualidade superior
• Experiência única

*NOSSA IDENTIDADE VISUAL:*
• 🟣 Roxo para a Ousadia
• ⚫ Preto para a Presença
• ⚪ Branco para a Essência

*DIFERENCIAIS:*
• Produtos exclusivos
• Design autêntico
• Qualidade premium
• Atendimento personalizado
• Entrega segura e discreta

*Siga nossa jornada:*
📸 Instagram: @20.Pilla
📘 Facebook: 20-Pilla
🌐 Site: 20pilla.com.br

*Faça parte da família 20Pilla!* 💜`);

    //  Horário de funcionamento
    } else if(userMessage === 'horário' || userMessage === 'funcionamento' || userMessage === 'atendimento'){
        client.sendMessage(message.from, `🕐 *Horário de Funcionamento* 🕐

*ATENDIMENTO:*
• Segunda a Sexta: 9h às 18h
• Sábados: 9h às 16h
• Domingos: Fechado

*CANAIS DISPONÍVEIS:*
📱 WhatsApp: +55 11 96439-3246
📸 Instagram: @20.Pilla
📧 E-mail: 20.pillamarca@gmail.com

*TEMPO DE RESPOSTA:*
• Horário comercial: Até 2 horas
• Fora do horário: Próximo dia útil
• Emergências: Sempre que possível

*ENTREGAS:*
• Pedidos confirmados até 14h: Envio no mesmo dia
• Pedidos após 14h: Envio no próximo dia útil
• Finais de semana: Segunda-feira

*Estamos sempre prontos para te atender!* 😊`);

    //  FAQ - Perguntas frequentes
    } else if(userMessage === 'faq' || userMessage === 'perguntas' || userMessage === 'dúvidas'){
        client.sendMessage(message.from, `❓ *Perguntas Frequentes* ❓

*COMO COMPRAR?*
1. Entre em contato via WhatsApp
2. Escolha os produtos
3. Preencha dados de entrega
4. Escolha forma de pagamento
5. Confirme o pedido

*FORMAS DE PAGAMENTO?*
• PIX (5% desconto)
• Cartão crédito (até 12x)
• Cartão débito
• Boleto bancário
• Transferência

*PRAZO DE ENTREGA?*
• Capital: 1-3 dias úteis
• Interior: 3-5 dias úteis
• Outros estados: 5-10 dias úteis

*GARANTIA?*
• 90 dias para defeitos
• 7 dias para arrependimento
• Troca imediata se necessário

*LOJA FÍSICA?*
• Apenas e-commerce
• Retirada em SP mediante agendamento

*Para mais detalhes: +55 11 96439-3246*`);

    //  Contato direto
    } else if(userMessage === 'contato' || userMessage === 'falar' || userMessage === 'ajuda'){
        client.sendMessage(message.from, `📞 *Entre em Contato* 📞

*CANAIS PRINCIPAIS:*

*WhatsApp Vendas:* 📱
+55 11 96439-3246
(Principal - Segunda a Sábado, 9h às 18h)

*WhatsApp Suporte:* 📱
+55 11 94396-9951

*Instagram:* 📸
@20.Pilla
(Mensagens diretas)

*E-mail:* 📧
20.pillamarca@gmail.com

*REDES SOCIAIS:*
📘 Facebook: 20-Pilla
🌐 Site: 20pilla.com.br

*Estamos aqui para te ajudar!* 😊

*Escolha o canal que preferir e fale conosco!*`);

    //  Resposta padrão para mensagens não reconhecidas
    } else {
        client.sendMessage(message.from, `🟣 *20Pilla - Headshop Premium* 🟣

Desculpe, não entendi sua mensagem. 😅

*Como posso te ajudar? Digite um número:*

1️⃣ - Ver produtos disponíveis
2️⃣ - Formas de pagamento  
3️⃣ - Informações de entrega
4️⃣ - Garantia e trocas
5️⃣ - Falar com atendente
6️⃣ - Ver avaliações de clientes

*Ou digite:*
• "preços" - Para ver valores
• "sobre" - Sobre nossa marca
• "horário" - Horário de funcionamento
• "contato" - Nossos canais de atendimento

*Para atendimento direto:*
📱 +55 11 96439-3246`);
    }
});

client.initialize();