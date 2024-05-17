export type TicketType = {
    key: string;

    senha: number;
    preferencial: boolean;

    responsavel: string;
    aluno?: string;
    
    atendente: string;
}