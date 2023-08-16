# Desafio DBserver JavaScript


Classe CaixaDaLanchonete :

A classe CaixaDaLanchonete é responsável por calcular o valor de compras feitas em uma lanchonete com base em um cardápio e formas de pagamento específicas.

Métodos :

constructor() : 
O construtor da classe é responsável por inicializar as constantes CARDAPIO e FORMAS_DE_PAGAMENTO utilizadas em todo o código. O CARDAPIO contém informações sobre os itens disponíveis para compra, enquanto FORMAS_DE_PAGAMENTO lista as formas de pagamento aceitas.


calcularValorDaCompra(formaDePagamento, itens) :
Este método realiza o cálculo do valor total de uma compra com base na forma de pagamento e nos itens selecionados. Ele segue os seguintes passos:

Verifica se a forma de pagamento é válida;

Verifica se há itens no carrinho de compra;

Calcula o valor total da compra com base nos itens do carrinho;

Verifica se há um item principal no carrinho;

Verifica se os itens extras são pedidos somente se o item principal correspondente estiver no carrinho;

Aplica descontos ou acréscimos de acordo com a forma de pagamento;

Retorna o valor total formatado como string.

Por que usamos esses métodos e abordagens?
A classe CaixaDaLanchonete utiliza uma abordagem orientada a objetos para organizar a lógica de cálculo e validação das compras. O uso de um construtor permite inicializar as constantes do cardápio e formas de pagamento, tornando-as acessíveis em todo o escopo da classe.

O método calcularValorDaCompra é responsável por executar a lógica completa do cálculo do valor da compra. Ele foi programado para ser modular e legível, dividindo as etapas do cálculo em passos separados. Isso facilita a manutenção e depuração do código.

Os nomes incluídos nos métodos explicam nitidamente oque cada um faz, tornando o código mais compreensível para outros desenvolvedores. Além disso, a utilização de constantes para o cardápio e formas de pagamento facilita futuras atualizações ou expansões da lógica.
