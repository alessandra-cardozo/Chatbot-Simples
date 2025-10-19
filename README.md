## 🧠 Assistente IA Ultra-Vibrante (Gemini + Tailwind)

Um chatbot inteligente e moderno desenvolvido em **HTML, Tailwind CSS e JavaScript**, com integração à **Google Gemini API**.
Ele entende perguntas em português, responde de forma natural e exibe corretamente a **data atual no fuso horário do Brasil (America/Sao_Paulo)**.

---

## 🚀 Funcionalidades

* 💬 **Chat em tempo real** com o modelo **Gemini 2.5 Flash Preview**.
* 🕒 **Data e hora corretas** com fuso brasileiro.
* 🔍 Suporte a **busca Google integrada**.
* 🎨 **Design responsivo** com Tailwind e animações suaves.
* 🧩 **Modal de configuração segura** da chave API.
* 🗑️ **Botão para limpar histórico** de conversas.
* ⚙️ **Status visual** (verde, amarelo, vermelho) de conexão.
* 📱 Interface adaptada para **celulares, tablets e desktops**.

---

## 📁 Estrutura do Projeto

```
assistente-ia-ultra-vibrante/
│
├── index.html        # Arquivo principal com HTML, CSS (Tailwind via CDN) e JS
├── README.md         # Documento explicativo
├── .gitignore        # Ignora arquivos sensíveis e de build
└── .env              # (opcional) pode guardar sua API Key localmente se desejar usar via Node
```

---

## ⚙️ Pré-requisitos

Antes de rodar o projeto, você precisa de uma **chave de API Gemini**:

1. Acesse [https://aistudio.google.com](https://aistudio.google.com)
2. Clique em **Get API Key**
3. Gere uma nova chave e copie (exemplo: `AIzaSyD5d...`)

---

## 💡 Como Usar Localmente

1. **Baixe ou clone o projeto:**

   ```bash
   git clone https://github.com/seuusuario/assistente-ia-ultra-vibrante.git
   ```

2. **Abra o arquivo `index.html`** diretamente no navegador (duplo clique).

   > Nenhuma instalação extra é necessária.

3. Ao abrir, o chat exibirá um modal pedindo sua **chave da Gemini API**.
   Cole a chave e clique em **Salvar e Iniciar Chat**.

4. O status 🟢 ficará verde — o chatbot está pronto para conversar!

---

## 🗓️ Perguntas sobre Data (corrigido!)

Agora o chatbot entende e responde corretamente usando o horário oficial do Brasil.
Exemplo:

```
👩‍💻 Você: Que dia é hoje?
🤖 Assistente: Hoje é 19/10/2025.
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia                        | Finalidade                                   |
| --------------------------------- | -------------------------------------------- |
| **HTML5**                         | Estrutura do app                             |
| **Tailwind CSS (via CDN)**        | Estilização rápida e responsiva              |
| **JavaScript**                    | Lógica principal e integração com a API      |
| **Gemini API (Google AI Studio)** | Geração de respostas inteligentes            |
| **LocalStorage**                  | Armazena a chave API localmente no navegador |

---

## 🌐 Deploy na Vercel

### 🔸 Passo a Passo:

1. Acesse [https://vercel.com](https://vercel.com)
2. Faça login com sua conta (GitHub ou Google).
3. Clique em **"Add New Project"**.
4. Selecione o repositório onde está o seu projeto.
5. A Vercel detectará automaticamente o projeto como **HTML estático**.
6. Clique em **Deploy**.

🔹 Após o deploy, o projeto será publicado em um link como:

```
https://assistente-ultra-vibrante.vercel.app
```

### ⚠️ Importante:

O aviso amarelo

> `cdn.tailwindcss.com should not be used in production`
> é **apenas um alerta**, não um erro.
> Seu site continuará funcionando normalmente na Vercel.

Se quiser remover esse aviso futuramente, pode instalar o Tailwind via **PostCSS ou CLI**, mas **não é necessário** para projetos estáticos.

---

## 🔒 Segurança

* Sua **chave API fica salva apenas no navegador (LocalStorage)**.
* Nenhum dado é enviado para servidores externos.
* Evite inserir sua chave em dispositivos públicos.
* Para remover a chave salva:

  ```js
  localStorage.removeItem("gemini_api_key_v2");
  ```

---

## 🧹 Botões e Funções Rápidas

| Ícone  | Função                                              |
| ------ | --------------------------------------------------- |
| ⚙️     | Configurar ou alterar a chave da API                |
| 🗑️    | Limpar o histórico do chat                          |
| 🟢🟡🔴 | Status do chatbot (ativo, carregando, desconectado) |

---

## 🧰 Solução de Problemas

| Erro / Alerta                                             | Solução                                                                                |
| --------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| ⚠️ “cdn.tailwindcss.com should not be used in production” | É apenas um aviso. Pode ser ignorado na Vercel.                                        |
| 🔴 Status vermelho                                        | Chave API não configurada. Clique em ⚙️ e insira a sua.                                |
| ❌ “Erro na comunicação com a API”                         | Verifique se a chave está correta e ativa em [AI Studio](https://aistudio.google.com). |
| 🕓 Data errada                                            | Já corrigido com fuso `America/Sao_Paulo`. Recarregue a página.                        |

---

## 💬 Exemplos de Conversa

```
👩‍💻 Você: Quem criou o Tailwind CSS?
🤖 Assistente: O Tailwind foi criado por Adam Wathan em 2017.

👩‍💻 Você: Qual é a data de hoje?
🤖 Assistente: Hoje é 19/10/2025.

👩‍💻 Você: Me conte uma curiosidade sobre o espaço.
🤖 Assistente: Há mais estrelas no universo observável do que grãos de areia na Terra!
```

---

## 👩‍💻 Desenvolvido por

**Alessandra Cardozo** ✨
💡 Projeto pessoal para estudos, design e integração com IA.
🚀 Deploy realizado com **[Vercel](https://vercel.com)**.
🤖 Motor de IA: **Google Gemini 2.5 Flash Preview (09-2025)**.

---

## 🪄 Licença

Este projeto é livre para uso **pessoal, educacional e de portfólio**.
Sinta-se à vontade para adaptar, melhorar e publicar suas versões. 🌸

---


