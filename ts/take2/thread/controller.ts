import {join} from "path";

export type args = [number, Date];
export type ret = [string, Date];
export const taskDir: string = join(__dirname, "works", "solve.js");