export type TicketType = {
    key: string;

    senha: number;
    preferencial: boolean;
    responsavel: string;

    mesa?: number;
    atendente?: string;
}