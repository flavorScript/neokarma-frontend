import { Component, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TdMediaService } from "@covalent/core";
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Request, Alert } from "../../../services/";

@Component({
	templateUrl: './phone-number.dialog.html',
})
export class PhoneNumberDialog
{
	phoneNumber: string;

	constructor(
		@Inject(MD_DIALOG_DATA)
		public data: any,
		public media: TdMediaService,
		public dialog: MdDialog,
		public dialogRef: MdDialogRef<PhoneNumberDialog>,
		public request: Request,
		public alert: Alert,
	)
	{

	}

	submit()
	{
		this.dialogRef.close();
	}
}
