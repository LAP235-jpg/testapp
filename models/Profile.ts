export interface Profile {
// Identificador único do perfil
  id: string;

  // Dados pessoais
  name: string;
  photo: string | null;

  // Progressão
  xp: number;
  level: number;

  // Progresso do jogo
  currentWorld: number;
  completedLessons: number;

  // Estatísticas
  accuracy: number;
  studyTime: number;

  // Data de criação do perfil
  createdAt: string;
}