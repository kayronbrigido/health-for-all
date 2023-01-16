import i18n from "../i18n";

export const translator = (key: string) => {
  let translation = ''
  try {
    translation = i18n.t(key);
  } catch(e) {
    console.error(e)
  }
  return translation;
}