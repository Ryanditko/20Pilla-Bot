# 🤖 Meta-Bot-APP - Bot WhatsApp para Headshop

## 📋 Descrição

O **Meta-Bot-APP** é um bot automatizado para WhatsApp desenvolvido para a **20Pilla**, uma marca brasileira de headshop premium. O bot oferece atendimento automatizado 24/7, fornecendo informações sobre produtos, formas de pagamento, entrega, garantia e conectando clientes com atendentes humanos.

## 🎯 Funcionalidades

### 🤖 Atendimento Automatizado
- **Boas-vindas personalizadas** com saudação contextual (bom dia, boa tarde, boa noite)
- **Menu interativo** com 6 opções principais
- **Respostas inteligentes** para perguntas frequentes
- **Redirecionamento** para atendimento humano

### 📦 Informações de Produtos
- Catálogo completo de produtos premium
- Piteiras de vidro exclusivas
- Acessórios de qualidade
- Preços e condições especiais

### 💳 Sistema de Pagamento
- Múltiplas formas de pagamento
- Descontos especiais (PIX com 5% off)
- Parcelamento em até 12x
- Processamento seguro

### 🚚 Logística e Entrega
- Informações detalhadas de frete
- Prazos de entrega por região
- Rastreamento de pedidos
- Retirada em São Paulo

### 🛡️ Suporte e Garantia
- Política de garantia de 90 dias
- Devolução em 7 dias
- Múltiplos canais de suporte
- Atendimento personalizado

## 🏗️ Arquitetura do Projeto

```
Meta-Bot-APP/
├── app/
│   └── main.js              # Bot principal do WhatsApp
├── prompt/                  # Documentação e prompts
│   ├── exemplos-dialogo.txt
│   ├── prompt-apresentação.txt
│   ├── prompt-descrição.txt
│   ├── instruções-meta-studio.txt
│   ├── prompts-específicos.txt
│   └── resumo-final.txt
├── docker-compose.yml       # Configuração Docker
├── package.json            # Dependências Node.js
└── README.md              # Este arquivo
```

## 🚀 Instalação e Configuração

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn
- WhatsApp Web acessível

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd Meta-Bot-APP
   ```

2. **Instale as dependências**
   ```bash
   npm install
   cd app
   npm install qrcode-terminal
   ```

3. **Execute o bot**
   ```bash
   cd app
   node main.js
   ```

4. **Conecte ao WhatsApp**
   - Um QR Code será exibido no terminal
   - Escaneie com o WhatsApp do seu celular
   - Aguarde a mensagem "Client is ready!"

## 🐳 Execução com Docker (Opcional)

O projeto inclui configuração Docker com:
- **Redis**: Cache e sessões
- **PostgreSQL**: Banco de dados
- **WAHA**: API WhatsApp
- **N8N**: Automação de workflows

```bash
docker-compose up -d
```

## 📱 Como Usar

### Comandos do Bot

| Comando | Função |
|---------|--------|
| `oi`, `olá`, `ola` | Mensagem de boas-vindas |
| `bom dia`, `boa tarde`, `boa noite` | Saudação contextual |
| `1` ou `produtos` | Ver catálogo de produtos |
| `2` ou `pagamento` | Formas de pagamento |
| `3` ou `entrega` | Informações de frete |
| `4` ou `garantia` | Política de garantia |
| `5` ou `atendente` | Falar com humano |
| `6` ou `avaliações` | Depoimentos de clientes |
| `preços` ou `comprar` | Ver preços e condições |
| `sobre` ou `marca` | Sobre a 20Pilla |
| `horário` | Horário de funcionamento |
| `contato` | Canais de atendimento |

### Fluxo de Atendimento

1. **Cliente envia mensagem** → Bot responde com menu
2. **Cliente escolhe opção** → Bot fornece informações detalhadas
3. **Cliente quer comprar** → Bot redireciona para atendente humano
4. **Atendente humano** → Finaliza a venda

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Runtime JavaScript
- **whatsapp-web.js**: API não oficial do WhatsApp
- **qrcode-terminal**: Geração de QR Code no terminal
- **Docker**: Containerização
- **Redis**: Cache e sessões
- **PostgreSQL**: Banco de dados
- **N8N**: Automação de workflows

## 📊 Dependências

```json
{
  "dependencies": {
    "whatsapp-web.js": "^1.31.0",
    "qrcode-terminal": "^0.12.0"
  }
}
```

## 🔧 Configuração Personalizada

### Modificar Mensagens
Edite o arquivo `app/main.js` para personalizar:
- Mensagens de boas-vindas
- Catálogo de produtos
- Informações de contato
- Políticas da empresa

### Adicionar Novos Comandos
```javascript
} else if(userMessage === 'novo_comando'){
    client.sendMessage(message.from, 'Sua mensagem personalizada aqui');
```

## 📞 Informações de Contato

### 20Pilla - Headshop Premium
- **WhatsApp Principal**: +55 11 96439-3246
- **WhatsApp Secundário**: +55 11 94396-9951
- **Instagram**: @20.Pilla
- **E-mail**: 20.pillamarca@gmail.com
- **Site**: 20pilla.com.br

### Horário de Funcionamento
- **Segunda a Sexta**: 9h às 18h
- **Sábados**: 9h às 16h
- **Domingos**: Fechado

## 🚨 Solução de Problemas

### Erro: "Cannot find module"
```bash
npm install
cd app
npm install qrcode-terminal
```

### QR Code não aparece
- Verifique se o WhatsApp Web está acessível
- Tente novamente em alguns minutos

### Bot não responde
- Verifique se está conectado ao WhatsApp
- Confirme se a mensagem "Client is ready!" apareceu

## 📝 Logs e Monitoramento

O bot exibe logs no terminal:
- `Client is ready!` → Bot conectado com sucesso
- QR Code → Aguardando conexão
- Mensagens de erro → Problemas de conexão

## 🔒 Segurança

- **Dados sensíveis**: Nunca compartilhe sessões do WhatsApp
- **Backup**: Mantenha backup das configurações
- **Atualizações**: Mantenha as dependências atualizadas

## 📈 Próximas Funcionalidades

- [ ] Integração com banco de dados
- [ ] Sistema de pedidos automatizado
- [ ] Relatórios de vendas
- [ ] Chatbot com IA
- [ ] Integração com e-commerce

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto é privado e pertence à 20Pilla.

## 👨‍💻 Desenvolvedor

Desenvolvido para automatizar o atendimento da **20Pilla - Headshop Premium**.

---

**🟣 20Pilla - Identidade é Atitude, Estilo é Escolha 🟣**
