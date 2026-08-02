import { Profile } from "../models/Profile";

export const defaultProfile: Profile = {
  id: "profile-001",
  name: "",
  photo: null,
  xp: 0,
  level: 1,
  currentWorld: 1,
  completedLessons: 0,
  accuracy: 0,
  studyTime: 0,
  createdAt: new Date().toISOString(),
}
// esse código define um objeto defaultProfile que
//  representa um perfil padrão com valores iniciais para cada propriedade do tipo Profile.