export const time = (): string => {
    const now = new Date();
    now.setHours(now.getHours() - 3); // Ajusta para o horário de Brasília (UTC-3)
    return now.toISOString();
}