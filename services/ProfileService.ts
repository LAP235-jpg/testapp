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
export async function updatePhaseProgress(
  phase: keyof Profile["phases"],
  progress: Profile["phases"][keyof Profile["phases"]]
) {
  try {
    console.log("========== UPDATE PHASE ==========");
    console.log("Fase:", phase);
    console.log("Novo progresso:", progress);

    const profile = await loadProfile();

    console.log("Perfil carregado:", profile);

    if (!profile) {
      console.log("ERRO: perfil não encontrado.");
      return;
    }

    const previousProgress = profile.phases[phase];

    console.log("Progresso anterior:", previousProgress);

    if (progress.xp > previousProgress.xp) {
      console.log("Novo resultado é melhor. Atualizando...");

      profile.xp += progress.xp - previousProgress.xp;
      profile.phases[phase] = progress;

      console.log("Perfil antes de salvar:", profile);

      await saveProfile(profile);

      const saved = await loadProfile();
      console.log("Perfil após salvar:", saved);
    } else {
      console.log("Resultado pior ou igual. Nada foi salvo.");
    }

    console.log("==================================");
  } catch (error) {
    console.log("Erro ao atualizar progresso da fase:", error);
  }
}//essa função atualiza o progresso de uma fase específica. Ela recebe o nome da fase, xp, acurácia e tempo. Atualiza o perfil com esses dados e marca a fase como concluída. Em caso de erro, loga o erro.