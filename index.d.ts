import { Patch } from "parse-git-patch/types";
declare module "parse-git-patch" {
	function parseGitPatch(patchString: string): Patch;
	export = parseGitPatch;
}
