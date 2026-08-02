import AsyncStorage from "@react-native-async-storage/async-storage";
import { Profile } from "../models/Profile";
import { defaultProfile } from "../data/defaultProfile";

const PROFILE_KEY = "@alfatech/profile";

export async function loadProfile(): Promise<Profile | null> {
  try {
    const data = await AsyncStorage.getItem(PROFILE_KEY);

    if (!data) {
      return null;
    }

    return JSON.parse(data);

  } catch (error) {
    console.log("Erro ao carregar perfil:", error);
    return null;
  }
}//tenta pegar o perfil do AsyncStorage. Se não houver dados, retorna o perfil padrão. Em caso de erro, também retorna o perfil padrão.

export async function saveProfile(profile: Profile) {
  try {
    await AsyncStorage.setItem(
      PROFILE_KEY,
      JSON.stringify(profile)
    );

  } catch (error) {
    console.log("Erro ao salvar perfil:", error);
  }
}//tenta salvar o perfil no AsyncStorage. Em caso de erro, loga o erro.

export async function updateProfile(
  data: Partial<Profile>
) {
  try {
    const currentProfile = await loadProfile();

    const updatedProfile = {
      ...currentProfile,
      ...data,
    };

    await AsyncStorage.setItem(
      PROFILE_KEY,
      JSON.stringify(updatedProfile)
    );

  } catch (error) {
    console.log("Erro ao atualizar perfil:", error);
  }
}//aqui ele pega qualquer dado parcial do perfil, mescla com o perfil atual e salva no AsyncStorage. Em caso de erro, ele loga o erro.

export async function deleteProfile() {
  try {
    await AsyncStorage.removeItem(PROFILE_KEY);

  } catch (error) {
    console.log("Erro ao deletar perfil:", error);
  }
}//tenta deletar apenas o perfil do AsyncStorage. Em caso de erro, loga o erro.