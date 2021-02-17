declare module "parse-git-patch/types" {
	export interface Line {
		added: boolean;
		lineNumber: number;
		line: string;
	}

	export interface File {
		added: boolean;
		deleted: boolean;

		beforeName: string;
		afterName: string;

		modifiedLines: Line[];
	}

	export interface Patch {
		hash: string;
		date: string;
		message: string;
		authorEmail: string;
		authorName: string;
		files: File[];
	}
}
