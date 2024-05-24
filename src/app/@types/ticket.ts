export type TicketType = {
    key: string;

    senha: number;
    preferencial: boolean;
    responsavel: string;

    mesa?: number | string;
    atendente?: string;

    date: Date;
    inicioHora: string;
    fimHora?: string;

    atendido: boolean;
}