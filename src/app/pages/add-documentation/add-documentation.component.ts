import { IStructure } from './../../shared/interfaces/istructure';
import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-documentation',
  templateUrl: './add-documentation.component.html',
  styleUrls: ['./add-documentation.component.scss'],
})
export class AddDocumentationComponent implements OnInit {
  addForm!: FormGroup;
  formulary!: IStructure;
  submited: boolean = false;
  endPoint: string = "html";

  constructor(
    private form: FormBuilder,
    private api: ApiService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.addForm = this.form.group({
      img: [''],
      title: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required]],
      url: [''],
      video: [''],
      tag: ['documentation', [Validators.required, Validators.minLength(2)]],
    });

    this.addForm.valueChanges.subscribe((data) => {
      this.formulary = data;
    });

  }



  addFormulary() {
    this.submited = true;
    if (this.addForm.valid) {
      let newForm: IStructure = this.formulary;
      console.log(newForm)
      this.api.postFormulary(newForm,this.endPoint).subscribe((res) => {
        console.log(res);
        this.addForm.reset();
        this.submited = false;
        this.route.navigate(["/documentation"])
      });
    }
  }

  print(variable:any){
    console.log(variable)
  }
}
