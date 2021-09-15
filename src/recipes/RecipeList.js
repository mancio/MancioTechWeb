const recipes = {
    results: [
        {
            language: 'IT',
            title: 'Crostata di marmellata',
            shape: 'circle',
            diameter: '22 cm',
            picture: 'https://www.scambiaricette.it/wp-content/uploads/2020/03/crostata-alla-marmellata.jpg',
            ingredients: {
                farina: '330 gr',
                burro: '165 gr',
                zucchero: '130 gr',
                uovo: '1',
                tuorlo: '2',
                'zucchero vanigliato': '7 gr',
                sale: '2 gr',
                'lievito per dolci': '1 gr',
                marmellata: '330 gr'
            },
            description: {
                step1: 'Ammorbidire il burro rimescolando con zucchero e sale fino ad amalgamare il tutto',
                step2: 'Includere uovo e tuorli',
                step3: 'Frullare il tutto fino ad avere una pasta omogenea',
                step4: 'Aggiungere farina, lievito e rimescolare fino a comporre una palla che si stacca facilmente dalle mani.',
                step5: 'Mettere in frigo per 1 ora',
                step6: 'Stendere la palla su un piano infarinato con un mattarello infarinato. Creare un cerchio di circa più di 3 mm di spessore e diametro ampiamente più largo dello stampo',
                step7: 'Imburrare lo stampo per bene fondo e lati.',
                step8: 'Avvolgere l\'impasto attorno al mattarello e stenderlo sulla teglia. Far aderire bene la pasta ai bordi utilizzando le nocche delle mani onde evitare di romperla.',
                step9: 'Schiacciare i bordi in modo da rimuovere tutta la pasta in eccesso che straripante dallo stampo',
                step10: 'Bucherellare il fondo dello stampo con una forchetta',
                step11: 'Mettere la marmellata in una ciotola e mescolare velocemente in modo da schiacciare tutti i pezzi di frutta e renderla omogenea',
                step12: 'Versare la marmellata nello stampo e stenderla con una spatola',
                step13: 'Stendere la restante pasta creando un rettangolo bello largo',
                step14: 'Tagliare a strisce',
                step15: 'Adagiare le strisce a rete sulla marmellata facendo aderire i capi con la pasta ai bordi',
                step16: 'Togliere i pezzi in eccesso e impastare in modo da creare altre strisce',
                step17: 'Stendere prima da un lato e poi dall\'altro',
                step18: 'Mettere in forno 20 minuti al centro a 180 gradi',
                step19: 'Spostare nella parte inferiore del forno e cuocere a 170 gradi per altri 10 min'
            },
            notes: 'La pasta ottimale si presenta molto dura appena tolta dal frigo con i bordi che tendono a spaccarsi quando viene stesa, allo stesso tempo è profumata e burrosa. ' +
                'Si ammorbidisce velocemente a contatto con il calore delle mani e lascia il piano unto. ' +
                'Se si hanno problemi a creare le strisce si può rimettere in frigo il restante impasto per renderlo duro nuovamente. ' +
                'Per una migliore qualità estetica si può mettere una teglia in forno appena sopra lo stampo' +
                '(non a contatto) in modo da evitare che la superficie si bruci. ' +
                'Più albumi aumentano la durezza dell\'impasto una volta cotta. ' +
                'Più tuorli aumentano friabilità e sapore.'
        },
        {
            language: 'IT',
            title: 'Tiramisu',
            shape: 'rectangle',
            width: '22 cm',
            height: '16 cm',
            picture: 'https://polki.pl/foto/4_3_LARGE/tiramisu-2350187.webp',
            ingredients: {
                uova: '4',
                mascarpone: '400 gr',
                zucchero: '120 gr',
                savoiardi: '400 gr',
                caffe: '2 lunghi',
                cacao: '1 bustina/e'
            },
            description: {
                step1: 'Fare il caffè lungo (meglio con la moka) e mettere zucchero quanto basta',
                step2: 'Portare il mascarpone a temperatura ambiente',
                step3: 'Separare tuorli da albumi, facendo attenzione non vengano a contatto',
                step4: 'Unire zucchero e acqua in un pentolino in modo tale che l\'acqua copra leggermente lo zucchero',
                step5: 'Mettere sul fuoco il composto e rimescolare onde evitare si formi caramello ma diventi uno sciroppo',
                step6: 'Levare dal fuoco quando si vedono le bollicine bianche (ha superato i 100 gradi)',
                step7: 'Ricordare di usare metà sciroppo per i tuorli e metà per gli albumi',
                step8: 'Sbattere i tuorli a lungo con la frusta elettrica ad alta velocità mentre si versa a filo lo sciroppo. '
                        + 'Continuare fino a quando si vedrà il composto addensare e schiarire',
                step9: 'Versare il composto nella coppa di mascarpone a poco a poco e rimescolare in modo tale da evitare grumi',
                step10: 'Sbattere gli albumi a lungo fino a quando il composto sarà bianco denso e spumoso',
                step11: 'Unire il tutto rimescolando DELICATAMENTE (altrimenti il composto diventerà liquido)',
                step12: 'Mettere un pò di composto sulla base del contenitore',
                step13: 'Bagnare i savoiardi velocemente nel caffè e metterli in fila nel contenitore (faremo due piani)',
                step14: 'Coprire i savoiardi con abbastanza il minimo di crema necessaria per coprirli (attenzione a non usare troppa crema)',
                step15: 'Stendere un altro strato di savoiardi',
                step16: 'Coprire con la crema restante livellando bene da coprire tutti i buchi',
                step17: 'Coprire con cacao in polvere la superficie',
                step18: 'coprire il contenitore con pellicola trasparente e lasciare in frigo per almeno 1 ora'
            },
            notes: 'Sbattere le uova il più possibile in modo da incorporare aria e rendere il composto più solido possibile. '
                + 'Non usare troppo sciroppo per i tuorli altrimenti non sarà possibile pastorizzare gli albumi. '
                + 'Riscaldare lo sciroppo più volte per esseri sicuri sia sempre superiore a 100 gradi. '
                + 'Sbattere le uova velocemente mentre si versa lo sciroppo altrimenti si formeranno pezzi di uovo cotto'
        }
    ]
}

export const getRecipesData = function (){
    return recipes;
}