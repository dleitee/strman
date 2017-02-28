export const getFileName = dependency => dependency.file.replace('./', '')

export const getDefault = dependency => dependency.specifiers[0].name
