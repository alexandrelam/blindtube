import { database } from "./ index";
import { set, ref } from "firebase/database";

export function addPlayer(name: string) {
  return set(ref(database, "players/"), {
    name,
  });
}
