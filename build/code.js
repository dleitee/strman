import { getRequires } from './dependecies'

export default (code, dependencies) => `${getRequires(dependencies)}${code}`
