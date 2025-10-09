export interface I_usuario {

    id: number;
    nome: string;
    email: string;
    senha: string;
};

export interface I_create_usuario {

    nome: string;
    email: string;
    senha: string;
};

export interface I_update_usuario {

    nome?: string;
    email?: string;
    senha?: string;
};

export interface Get_params_usuario {

    id: number;
};