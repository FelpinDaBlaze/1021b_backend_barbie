import { describe, expect, test } from 'vitest';

import SalvaFilme from './salva-filme.use-case';

describe('Testando salva filme use case', () => {
    test('deve salvar um filme', () => {

        const salvaFilme = new SalvaFilme();
        
        const input = {
            id: 1,
            titulo: 'test',
            descricao: 'test',
            imagem: 'test'
        };

        const resultado = salvaFilme.execute(input);

        expect(resultado).toEqual(input);
    });
});


type AltInput = {
    id: number,
    titulo: string,
    descricao: string,
    imagem: string
}