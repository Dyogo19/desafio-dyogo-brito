class CaixaDaLanchonete {
    constructor() {
        this.CARDAPIO = [
            {codigo: 'cafe', descricao: 'Café', valor: 3.00, extra: false},
            {codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50, extra: true},
            {codigo: 'suco', descricao: 'Suco Natural', valor: 6.20, extra: false},
            {codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50, extra: false},
            {codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00, extra: true},
            {codigo: 'salgado', descricao: 'Salgado', valor: 7.25, extra: false},
            {codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50, extra: false},
            {codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50, extra: false},
        ];

        this.FORMAS_DE_PAGAMENTO = ['dinheiro', 'debito', 'credito'];
    }

    calcularValorDaCompra(formaDePagamento, itens) {
        if (!this.FORMAS_DE_PAGAMENTO.includes(formaDePagamento)) {
            return 'Forma de pagamento inválida!';
        }

        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!';
        }

        let total = 0;
        let possuiPrincipal = false;

        for (const itemString of itens) {
            const [codigo, quantidade] = itemString.split(',');
            const itemMenu = this.CARDAPIO.find(menuItem => menuItem.codigo === codigo);

            if (!itemMenu) {
                return 'Item inválido!';
            }

            if (parseInt(quantidade) <= 0) {
                return 'Quantidade inválida!';
            }

            total += itemMenu.valor * parseInt(quantidade);

            if (!itemMenu.extra) {
                possuiPrincipal = true;

            }
        }

        if (!possuiPrincipal) {
            return 'Item extra não pode ser pedido sem o principal';
        }

        const itensPrincipais = itens.map(itemInfo => itemInfo.split(',')[0]);
        const itensExtras = itensPrincipais.filter(item => item === 'chantily' || item === 'queijo');
        for (const itemExtra of itensExtras) {
            const itemPrincipal = itemExtra === 'chantily' ? 'cafe' : 'sanduiche';
            if (!itensPrincipais.includes(itemPrincipal)) {
                return "Item extra não pode ser pedido sem o principal";
            }
        }

        if (formaDePagamento === 'dinheiro') {
            total *= 0.95;
        } else if (formaDePagamento === 'credito') {
            total *= 1.03;
        }

        return `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
}

export {CaixaDaLanchonete};
