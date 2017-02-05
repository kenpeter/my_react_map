// the types.js has many constant.
import { SEARCH } from "./types";


export function search(search) {
  return { 
    type: SEARCH, 
    search: search
  }
}
