export const getHost = 'http://127.0.0.1:3000';

export const objectToFormData = (object: object) => {
  let formData = new FormData();
  let key: any;
  for (key in object) {
    formData.append(key, object[key as keyof object]);
  }
  return formData;
};
