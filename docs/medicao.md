# Medição dos cliques para WhatsApp

O site envia um único evento `whatsapp_click` ao `dataLayer` antes de abrir o WhatsApp. O evento contém:

- `cta_id`: identificador estável do botão;
- `page`: rota em que ocorreu o clique;
- `contexto`: mensagem/contexto comercial utilizado;
- `position`: posição do CTA na página;
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` e `utm_term`.

As UTMs são capturadas na primeira página da sessão, mantidas no `sessionStorage` e enviadas em todos os cliques posteriores. Quando `utm_source` ou `utm_campaign` existem, a mensagem do WhatsApp recebe uma última linha no formato `(via origem/campanha)`.

## 1. Trigger no Google Tag Manager

1. Abra o contêiner `GTM-P88G5NDM`.
2. Vá em **Acionadores** e crie um acionador do tipo **Evento personalizado**.
3. Use `whatsapp_click` como nome do evento.
4. Selecione **Todos os eventos personalizados**.
5. Salve como `CE — whatsapp_click`.

## 2. Variáveis do dataLayer

Em **Variáveis**, crie uma variável da camada de dados para cada chave abaixo, usando o mesmo nome na variável e no campo:

- `cta_id`
- `page`
- `contexto`
- `position`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`

Sugestão de nome no GTM: `DLV — cta_id`, `DLV — page` e assim por diante. Use a versão 2 da camada de dados.

## 3. Evento no GA4

1. Crie uma tag **Google Analytics: evento do GA4**.
2. Selecione a tag de configuração/Google tag já utilizada pela propriedade da Denkor.
3. Defina o nome do evento como `whatsapp_click`.
4. Adicione os nove parâmetros acima, apontando cada um para sua variável `DLV`.
5. Use o acionador `CE — whatsapp_click`.
6. Salve e valide no modo **Preview**.
7. Depois da publicação, abra **Administrador > Eventos** no GA4 e marque `whatsapp_click` como evento-chave/conversão.

## 4. Evento Contact da Meta

1. Crie uma tag de HTML personalizado ou use o template oficial do Meta Pixel já aprovado no contêiner.
2. Dispare o evento `Contact` com o mesmo acionador `CE — whatsapp_click`.
3. Quando o template permitir parâmetros, envie pelo menos `cta_id`, `page`, `contexto` e as UTMs.
4. Não instale um segundo pixel se já existir um pixel base no site.

Exemplo para uma instalação que já possui `fbq` carregado:

```html
<script>
  fbq('track', 'Contact', {
    cta_id: '{{DLV — cta_id}}',
    page: '{{DLV — page}}',
    contexto: '{{DLV — contexto}}',
  });
</script>
```

## 5. Google Ads

No Google Ads, abra **Metas > Conversões**, escolha importar uma conversão do Google Analytics e selecione o evento-chave `whatsapp_click`. Evite criar duas conversões primárias para o mesmo clique.

## 6. Roteiro de validação no Preview

1. Inicie o Preview do GTM usando a URL publicada.
2. Acesse cada rota e clique em cada CTA visível de WhatsApp.
3. Confirme exatamente um evento `whatsapp_click` por clique.
4. Confira `cta_id`, `page`, `contexto`, `position` e os cinco campos UTM.
5. Repita com uma entrada como `/?utm_source=google&utm_medium=cpc&utm_campaign=especialista&utm_content=video&utm_term=ia`.
6. Navegue para outra página antes de clicar e confirme que a atribuição inicial continua no evento e na mensagem.
7. Repita em janela sem UTMs e confirme que a mensagem não contém linha `(via ...)`.

## 7. Destinos recomendados para campanhas

| Criativo               | Página de destino                     |
| ---------------------- | ------------------------------------- |
| Formação Especialista  | `/formacoes/especialista-ia-negocios` |
| IA para carreira       | `/profissionais`                      |
| Programas corporativos | `/empresas`                           |
| Marca / institucional  | `/`                                   |
| Formação Consultor     | Não anunciar antes da página própria  |

Não use `#consultor`, `#transformation-day`, `#ai-champions`, `#diagnostico` ou `#interesse` como página de destino de anúncios. Entradas com UTM e hash são abertas pelo topo da rota, mantendo os parâmetros de campanha.
