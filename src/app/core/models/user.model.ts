export interface Info {
    nome ?: string,
    cognome ?: string,
    email ?: string,
    viaIndirizzo ?: string,
    città ?: string,
    cap ?: string,
    provincia ?: string,
    dataNascita ?: string,
    telefono ?: string,
}

export interface Competenze {
    ruolo ?: string,
    skills ?: string[],
    descrizione ?: string
}

export interface Formazione{
    diploma ?: string,
    laurea ?: string,
    lingue ?: string[]
}

export interface Esperienza{
    ruolo ?: string,
    dataInizio ?: string,
    dataFine ?: string,
    azienda ?: string,
    descrizione ?: string,
}